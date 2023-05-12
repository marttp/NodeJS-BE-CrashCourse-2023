export function schemaValidator(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  };
}
