import {type CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
};

export default corsOptions;
