const crypto = require("crypto");

function createHash(key) {
  console.log("reached here :", key);
  const hash = crypto.createHash("sha3-512").update(key).digest("hex");
  console.log("hash length:", hash.length);  
  return hash;
}

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey = "0"; // initialize with a trivial partion key

  if (typeof event == "object" && event) {
    if (event.partitionKey) {
      const eventPartionKey = event.partitionKey;
      partitionKey = eventPartionKey.length > MAX_PARTITION_KEY_LENGTH ? createHash(eventPartionKey) : "" + eventPartionKey;
    } else {
      const eventStr = JSON.stringify(event);
      partitionKey = createHash(eventStr);
    }
  }

  return partitionKey;
};