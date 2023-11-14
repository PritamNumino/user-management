import { argon2Verify, argon2id } from "hash-wasm";

export const getHash = async (password) => {
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  const key = await argon2id({
    password: password,
    salt, // salt is a buffer containing random bytes
    parallelism: 1,
    iterations: 256,
    memorySize: 512, // use 512KB memory
    hashLength: 32, // output size = 32 bytes
    outputType: "encoded", // return standard encoded string containing parameters needed to verify the key
  });
  const isValid = await argon2Verify({
    password: password,
    hash: key,
  });

  if (isValid) {
    return key;
  } else {
    return "Invalid Password";
  }
};
