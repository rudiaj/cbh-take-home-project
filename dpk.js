const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const formatCandidate = (candidate) =>
  typeof candidate === "string" ? candidate : JSON.stringify(candidate);

const createCandidate = (event) => {
  const candidate =
    event.partitionKey ||
    crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");

  return formatCandidate(candidate);
};

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const candidate = createCandidate(event);

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(candidate).digest("hex")
    : candidate;
};
