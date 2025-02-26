import { Router, Request, Response } from "express";

const router = Router();

router.get("/user", (req: Request, res: Response) => {
  res.json({ message: "User get route is working!" });
});
router.post("/user", (req: Request, res: Response) => {
  res.json({ message: "User post route is working!" });
});

export default router;
