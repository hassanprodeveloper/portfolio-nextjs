import nodemailer from "nodemailer";

// import EmailTemplate from "/public/files/EmailTemplate.html";

let EmailTemplate = `<!doctype html><html><head> <meta name="viewport" content="width=device-width"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <title>Thannk you</title> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"><style>@media only screen and (max-width: 620px){table[class=body] h1{font-size: 28px !important; margin-bottom: 10px !important;}table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a{font-size: 16px !important;}table[class=body] .wrapper,table[class=body] .article{padding: 10px !important;}table[class=body] .content{padding: 0 !important;}table[class=body] .container{padding: 0 !important; width: 100% !important;}table[class=body] .main{border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important;}table[class=body] .btn table{width: 100% !important;}table[class=body] .btn a{width: 100% !important;}table[class=body] .img-responsive{height: auto !important; max-width: 100% !important; width: auto !important;}}@media all{.ExternalClass{width: 100%;}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height: 100%;}.apple-link a{color: inherit !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; text-decoration: none !important;}.btn-primary table td:hover{background-color: #ea0417 !important;}.btn-primary a:hover{background-color: #ea0417 !important; border-color: #ea0417 !important;}}</style></head><body class style="background-color: #eaebed; font-family: Open Sans, sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #eaebed; width: 100%;" width="100%" bgcolor="#eaebed"> <tr> <td style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td><td class="container" style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; Margin: 0 auto;" width="580" valign="top"> <div class="header" style="padding: 20px 0;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%"> <tr> <td class="align-center" style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center"> <a href="https://hassanakram.vercel.app/" target="_blank" style="color: #D72333; text-decoration: underline;"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-nextjs-a6150.appspot.com/o/email-template%2FH_logo.png?alt=media&token=650812d4-90c2-46cd-8025-246932159454" height="40" alt="Muhammad Hassan" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;"></a> </td></tr></table> </div><div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;"> <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%; border-radius: 10px;" width="100%"> <tr> <td class="wrapper" style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%"> <tr> <td style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top;" valign="top"> <h2 style="color: #06090f; font-family: Open Sans, sans-serif; line-height: 1.4; margin: 0; margin-bottom: 30px; font-weight: bold;">Hi there 👋<p style="font-family: Open Sans, sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"></p><h3 style="color: #06090f; font-family: Open Sans, sans-serif; line-height: 1.4; margin: 0; margin-bottom: 30px; font-weight: bold;">Thanks for getting in touch, I will get back to you soon. <p style="font-family: Open Sans, sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"></p><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; min-width: 100%; width: 100%;" width="100%"> <tbody> <tr> <td align="left" style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: auto; width: auto;"> <tbody> <tr> <td style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #D72333;" valign="top" align="center" bgcolor="#D72333"> <a href="https://hassanakram.vercel.app/" target="_blank" style="border: solid 1px #D72333; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #D72333; border-color: #D72333; color: #ffffff;">Visit website</a> </td></tr></tbody> </table> </td></tr></tbody> </table> <p style="font-family: Open Sans, sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This is system generated email, I will contact you soon, if you want to talk right now then you can contact me on <a href="https://api.whatsapp.com/send?phone=3047955183&text=Hello%20Hassan!" target="_blank" style="color: #D72333; text-decoration: underline; font-weight: bold;"> WhatsApp </a> or on <a href="https://www.linkedin.com/in/hassanakram-n/" target="_blank" style="color: #D72333; text-decoration: underline; font-weight: bold;"> Linkedin </a></p></h3></h2></td></tr></table> </td></tr></table> </div></td><td style="font-family: Open Sans, sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td></tr><tr class="divider" style="padding: 20px;"> </tr></table></body></html>`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const { authorization } = req.headers;

      if (authorization === process.env.AUTHORIZATION_BEARER) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDER_PASSWORD,
        },
      });

      let mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: `Muhammad Hassan`,

        html: EmailTemplate,
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
          return res.status(500).json({ statusCode: 500, message: err });
        } else {
          return res
            .status(200)
            .json({ message: `Email is sent to ${email} ` });
        }
      });
    } catch (err) {
      return res.status(500).json({ statusCode: 500, message: err });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
