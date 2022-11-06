import { Term } from "../models/index.js";
import AppError from "../utils/appError.js";

export const createTerm = (data) =>
  Term.create(data)
    .then((term) => {
      return Promise.resolve(term);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getTerms = () =>
  Term.find()
    .then((terms) => {
      return Promise.resolve(terms);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateTerm = (termId, data) =>
  Term.findByIdAndUpdate(termId, data, { new: true })
    .then((term) => {
      return Promise.resolve(term);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteTerm = (termId) =>
  Term.findByIdAndDelete(termId)
    .then((term) => {
      return Promise.resolve(term);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
