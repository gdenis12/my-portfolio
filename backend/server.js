const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

const corsOptions = {
    origin: ["https://ВАШ_ЛОГИН.github.io", "http://localhost:5173"],
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working ✅");
});

app.post("/send-email", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const emailData = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
                from_name: name,
                reply_to: email,
                message: message,
            },
        };

        await axios.post(
            "https://api.emailjs.com/api/v1.0/email/send",
            emailData,
            { headers: { "Content-Type": "application/json" } },
        );

        res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
        console.error("Error details:", error.response?.data || error.message);
        res.status(500).json({
            error: "Failed to send message",
            detail: error.response?.data || error.message,
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
