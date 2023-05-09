const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  it("Returns the hash when given empty object", () => {
    const result = deterministicPartitionKey({});
    expect(result).toBe(
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    );
  });

  it("Returns the literal '257' when correct event", () => {
    const result = deterministicPartitionKey({ partitionKey: "257" });
    expect(result).toBe("257");
  });
});
