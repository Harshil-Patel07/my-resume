import cors from "cors";
import corsOptions from './config/coreOptions';
import { connectDatabase } from './config/connectDatabase';
import { PORT } from './config/env';
import express, { Application, Request, Response } from 'express';  
import userRoutes from "./routes/userRoutes"


const app:Application = express();  

app.use(express.json());
app.use(cors(corsOptions));

connectDatabase()
app.use("/api", userRoutes); 


app.get('/', (req: Request, res: Response) => {  
  res.send('Hello, TypeScript Express!');  
});  

app.listen(Number(PORT), () => {  
  console.log(`🚀 Server running at http://localhost:${PORT} `);  
});  
