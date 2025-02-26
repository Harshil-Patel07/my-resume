import express, { Application, Request, Response } from "express";
import session from "express-session";
import cors from "cors";
import corsOptions from "./config/coreOptions";
import { connectDatabase } from "./config/connectDatabase";
import { PORT } from "./config/env";
import { isAuthenticated } from "./middlewares/authMiddleware";
import authRoutes from "./routes/AuthRoutes"
import passportConfig from "./config/passportConfig"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

connectDatabase();

app.use(
  session({
    secret: "Session_Secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passportConfig.initialize());
app.use(passportConfig.session());

app.use("/api/auth", authRoutes);
app.get("/api/profile", isAuthenticated, (req: Request, res: Response) => {
  res.json({ user: req.user });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express with Passport.js and MongoDB!");
});

app.listen(Number(PORT), () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
