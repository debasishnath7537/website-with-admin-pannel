// validate-middleware.js
const validate = (schema) => async (req, res, next) => {
  try {
    // Parse the body based on the provided schema
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody; // If valid, pass parsed data to the next middleware
    next(); // Proceed to the next middleware or controller
  } catch (err) {
    // If validation fails, dynamically handle the error messages
    const status = 422; // Unprocessable Entity
    const message = "fill the input properrly";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };
    console.log(error);
    next(error);
  }
};

export default validate;
