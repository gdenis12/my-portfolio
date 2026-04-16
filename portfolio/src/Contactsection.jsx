import { useState, useRef } from "react";

export default function ContactSection() {
    const formRef = useRef();
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(formRef.current);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("https://my-portfolio-backend-ww73.onrender.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed to send");
            }

            setStatus("success");
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-6 md:px-20 relative overflow-hidden pt-[85px] pb-16 w-full"
            id="contact"
        >
            <div className="relative bg-black/30 border border-[#00e676]/15 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center max-w-lg w-full">

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Contact Me</h2>
                <p className="text-zinc-400 mb-6 md:mb-8 text-sm">
                    Fill out the form and I'll get back to you
                </p>


                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full p-3 rounded-lg bg-black/50 border border-[#00e676]/30 text-white mb-4"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full p-3 rounded-lg bg-black/50 border border-[#00e676]/30 text-white mb-4"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={4}
                        required
                        className="w-full p-3 rounded-lg bg-black/50 border border-[#00e676]/30 text-white mb-4"
                    />

                    {status === "success" && (
                        <p className="text-[#00e676] text-sm mb-3">
                            ✅ Message sent!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-400 text-sm mb-3">
                            ❌ Something went wrong
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3 bg-[#00e676] text-black font-bold rounded-lg hover:bg-[#4caf50] disabled:opacity-50"
                    >
                        {status === "loading" ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}