import express from 'express';
import cors from 'cors';
import generate from './generate.js'; 

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDescription;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ response: sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error");
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

