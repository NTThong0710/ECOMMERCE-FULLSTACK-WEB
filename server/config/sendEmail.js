import { sendEmail } from "./emailService.js";

const sendEmailFun = async ({ to, subject, text, html }) => {
  const result = await sendEmail(to, subject, text, html);
  return result.success;
};

export default sendEmailFun;
