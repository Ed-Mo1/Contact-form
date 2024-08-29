import z from "zod";

export const schema = z.object({
  fName: z
    .string({ required_error: "This field is required" })
    .min(1, "This field is required"),
  lName: z
    .string({ required_error: "This field is required" })
    .min(1, "This field is required"),
  email: z
    .string({ required_error: "Please enter a valid email address" })
    .email({ message: "Please enter a valid email address" }),
  message: z.string({ required_error: "This field is required" }).min(1, "This field is required"),
  qType: z.enum(['general_enquiry','support_request'],{
    required_error: "Please select a question type",
  }),
  getContact: z
    .boolean({
      required_error: "Please select if you want to be contacted",
    })
    .refine((val) => val === true, {
      message: "To submit, please consent to being contacted",
    }),
});

export type Schema = z.infer<typeof schema>;
