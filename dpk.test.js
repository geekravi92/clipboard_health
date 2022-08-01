const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the key 'clipbox' when passed the event", () => {
    const partitionKey = "clipbox";
    const event = { partitionKey };
    const _deterministicPartitionKey = deterministicPartitionKey(event);
    expect(_deterministicPartitionKey).toBe("clipbox")
  });

  it("Returns a hashed hex key on passing > 256 long partionKey", () => {
    const partitionKey = "xkjdjkfvdfkvjfjkbjkvjkdjvdsdkjfkjsdfksjfjksjjvdfjkjkkjsjkfcjkskfjsdjkvjvkjhkvkdjvksfkjsdkjvskjdjksdjkfskjkjsdksjkvjkbjkfbjjkbkbjkvskjfsdkhfdfkvvbnfbnxbnfbndfnvfdjhvdjhvdjhvjfhvjhdvjdhvjdhfvdjhfvjhdfvjhdfvhjdfjhvdfjvhdfvhdfvhjdfhjvdjhvhdgvhdfvkhdfkvkdfvkhdfhkvhkdxfvhkdfkhvhkdvdfvhkdvhdkvdhkfvkdfvkhdfvkdfkhvfkh";
    console.log(partitionKey.length);
    const event = { partitionKey };
    const _deterministicPartitionKey = deterministicPartitionKey(event);
    console.log(_deterministicPartitionKey);
    expect(_deterministicPartitionKey.length).toBe(128);
  });
});