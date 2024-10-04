import express from "express";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import cors from "cors";

// Configuration du serveur
const app = express();
const port = 3000;

app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/api/hello", cors(corsOptions), function (req, res) {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
