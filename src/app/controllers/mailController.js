import nodemailer from "nodemailer";

//Mail send
export function mail(sub, code) {
  const tranSporter = nodemailer.createTransport({
    service: "gmail",
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "anhlatrung5c@gmail.com",
      pass: "aztb fnaw hrms chth",
    },
  });

  const mailOptions = {
    from: "anhlatrung5c@gmail.com",
    to: "trungchoido11@gmail.com",
    subject: sub,
    html: `<body style="text-align: center; margin: 0 auto; width: 490px; border: 1px solid black"><h1 style="text-align: center">Mã Đăng Nhập</h1><h3 style="text-align: center; color: grey; margin-top: 50px">Đây là mã đăng nhập phê duyệt của bạn</h3><h2 style = "text-align: center; color: red">${code}</h2><h3 style="text-align: center; font-family: Arial, Helvetica, sans-serif">Nếu bạn không phải là người gửi yêu cầu này, hãy đổi mật khẩu tài khoản ngay lập tức để tránh việc bị truy cập trái phép. Đọc Bảo Mật Tài Khoản để biết các mẹo về mật khẩu có tính bảo mật cao.</h3></body>`,
  };

  tranSporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response + mailOptions.text);
    }
  });
}
