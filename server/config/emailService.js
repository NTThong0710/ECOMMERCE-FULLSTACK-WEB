import nodemailer from "nodemailer";

export async function sendEmail(to, subject, text, html) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: `"Web bán hàng nho nhỏ" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return { success: true };
  } catch (error) {
    console.error("❌ Email send failed:", error.message);
    return { success: false, error };
  }
}
