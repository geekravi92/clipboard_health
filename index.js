const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());
const partitionKey = "xkjdjkfvdfkvjfjkbjkvjkdjvdsdkjfkjsdfksjfjksjjvdfjkjkkjsjkfcjkskfjsdjkvjvkjhkvkdjvksfkjsdkjvskjdjksdjkfskjkjsdksjkvjkbjkfbjjkbkbjkvskjfsdkhfdfkvvbnfbnxbnfbndfnvfdjhvdjhvdjhvjfhvjhdvjdhvjdhfvdjhfvjhdfvjhdfvhjdfjhvdfjvhdfvhdfvhjdfhjvdjhvhdgvhdfvkhdfkvkdfvkhdfhkvhkdxfvhkdfkhvhkdvdfvhkdvhdkvdhkfvkdfvkhdfvkdfkhvfkh";
    console.log(partitionKey.length);
    const event = {
      partitionKey
    };
console.log(deterministicPartitionKey(event));