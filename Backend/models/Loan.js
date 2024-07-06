import mongoose from "mongoose";

// Define the schema for the loan
const loanSchema = new mongoose.Schema({
  loanName: {
    type: String,
    required: true
  },
  loanAmount: {
    type: Number,
    required: true
  },
  loanPurpose: {
    type: String,
    required: true
  },
  loanAge: {
    type: Number,
  },
  link: {
    type: String,
    required: true
  }
});

// Create the Mongoose model
const LoanModel = mongoose.model('Loan', loanSchema);

export {LoanModel as Loan}
