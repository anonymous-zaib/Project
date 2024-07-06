

// import express from 'express';
// import { LoanApplication } from '../models/Form.js';

// const router = express.Router();

// router.post('/submit', async (req, res) => {
//   try {
//     const formData = req.body;

//     // Create a new document using the LoanApplication model
//     const loanApplication = new LoanApplication(formData);

//     // Save the document to the database
//     await loanApplication.save();

//     res.status(201).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// export { router as formRouter };

import express from 'express';
import { LoanApplication } from '../models/Form.js';
import { Loan } from '../models/Loan.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const formData = req.body;

    // Create a new document using the LoanApplication model
    const loanApplication = new LoanApplication(formData);

    // Save the document to the database
    await loanApplication.save();

    // Fetch loans based on the purpose
    const loans = await Loan.find({ loanPurpose: formData.purpose });

    res.status(201).json({ message: 'Form submitted successfully', loans });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as formRouter };
