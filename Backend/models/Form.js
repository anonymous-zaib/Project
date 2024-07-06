

import mongoose from 'mongoose';

const { Schema } = mongoose;

const loanApplicationSchema = new Schema({
  purpose: String,
  amount: String,
  years: String,
  email: String,
  title: String,
  firstName: String,
  lastName: String,
  birthDate: String,
  age: String,
  maritalStatus: String,
  homeOwner: String,
  address: String,
  yearsAtAddress: String,
  employmentStatus: String,
  job: String,
  industry: String,
  employer: String,
  income: String,
  otherIncome: String,
  rentOrMortgage: String,
  dependents: String,
  contactEmail: String,
});

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

export {LoanApplication as LoanApplication}
