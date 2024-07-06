import express from 'express';
const router = express.Router();
import { Loan } from '../models/Loan.js';

router.get('/loans', async (req, res) => {
  try {
    const loans = await Loan.find({});
    if (!loans) {
      return res.status(404).send("Loans not found");
    }
    console.log(res.json(loans)); 
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export { router as loanRouter };
