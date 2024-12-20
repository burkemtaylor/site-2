import { Redis } from "ioredis";

const getRedisUrl = () => {
  if (process.env.KV_URL) {
    return process.env.KV_URL;
  }

  throw new Error("KV_URL is not defined");
};

export const redis = new Redis(getRedisUrl());
