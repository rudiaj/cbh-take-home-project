const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const formatPartition = (partition) =>
  typeof partition === "string" ? partition : JSON.stringify(partition);

const createPartition = (event) => {
  const partition =
    event.partitionKey ||
    crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");

  return formatPartition(partition);
};

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const partition = createPartition(event);

  return partition.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(partition).digest("hex")
    : partition;
};
