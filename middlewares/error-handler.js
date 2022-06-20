import ApiErrors from "../api-errors.js";

export default function errorHandler (error, res, req, next) {
  if (error instanceof ApiErrors) {
    return res.status(error.status).json({message: error.message})
  }
  return res.status(500).json({ message: "Unknown error" })
}