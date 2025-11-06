export default function verifyEmailTemplate(username, otp) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f7fa;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 500px;
        margin: 30px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 18px rgba(0,0,0,0.1);
      }
      .header {
        background: #4f46e5;
        color: #fff;
        text-align: center;
        padding: 20px;
        font-size: 22px;
        font-weight: bold;
      }
      .content {
        padding: 25px;
        color: #333;
        text-align: center;
      }
      .otp {
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 8px;
        margin: 20px 0;
        color: #4f46e5;
      }
      .footer {
        font-size: 12px;
        text-align: center;
        padding: 15px;
        color: #777;
        background: #f9fafb;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Xác Thực Email</div>
      <div class="content">
        <p>Xin chào, ${username}</p>
        <p>Cảm ơn bạn đã đăng ký tài khoản. Đây là mã OTP của bạn:</p>
        <div class="otp">${otp}</div>
        <p>Mã OTP có hiệu lực trong <b>5 phút</b>.</p>
        <p>Nếu bạn không thực hiện hành động này, vui lòng bỏ qua email.</p>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} E-commerce App. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `
}
