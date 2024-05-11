const { z } = require("zod");

const loginschema = z.object({
  email: z
    .string({ required_error: "Email must be required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(6, { message: "Email must be at least 6 characters" }),

  password: z
    .string({ required_error: "Password must be required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(10, { message: "Password can't be greater than 10 characters" }),
});

const signupschema = loginschema.extend({
  username: z
    .string({ required_error: "Name must be required" })
    .trim()
    .min(6, { message: "Name must be at least 6 characters" }),

  phone: z
    .string({ required_error: "Phone Number must be required" })
    .trim()
    .min(10, { message: "Phone Number must be at least 10 characters" }),
});

module.exports = { signupschema, loginschema };
