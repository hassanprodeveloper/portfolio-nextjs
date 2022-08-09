import nodemailer from "nodemailer";
import { google } from "googleapis";
import NextCors from "nextjs-cors";

import { appName } from "../../constants/personalInfo";
import { EmailTemplate } from "../../utils/index";

const OAuth2 = google.auth.OAuth2;
const clientId = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const refreshToken = process.env.OAUTH_REFRESH_TOKEN;
const redirectUrl = process.env.OAUTH_REDIRECT_URL;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { authorization } = req.headers;

    if (authorization === process.env.AUTHORIZATION_BEARER) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await NextCors(req, res, {
      // Options
      methods: ["POST"],
      origin: "*",
      optionsSuccessStatus: 200,
    });

    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    const accessToken = oauth2Client.getAccessToken();

    try {
      const { email, subject = "Thanks for your interest." } = req.body;
      console.log("request body email", req.body.email);
      console.log("request body", req.body);

      const mailOptions = {
        from: `${appName} <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject,
        html: EmailTemplate,
      };

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDER_PASSWORD,
          clientId: process.env.OAUTH_CLIENT_ID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
          accessToken,
        },
      });

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log("email sending error", err);
          return res.status(500).json({ statusCode: 500, message: err });
        } else {
          console.log("email sent", info);
          return res
            .status(200)
            .json({ statusCode: 200, message: `Email is sent to ${email} ` });
        }
      });
    } catch (err) {
      console.log("email sending error", err);
      return res
        .status(500)
        .json({ statusCode: 500, message: err || "send email catch error" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
