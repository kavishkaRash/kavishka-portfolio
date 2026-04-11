import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";


const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const HandleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.message) newErrors.message = "Message is required"

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error("Please fix the errors");
            return;
        }

        setErrors({});
        setLoading(true);
        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: "info.kavishka1@gmail.com"
            },
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                toast.success("Message sent successfully");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to send message");
            })
            .finally(() => {
                setLoading(false);
            });
    }



    return (
        <section className="py-32 bg-surface" id="contact">
            <div className="max-w-7xl mx-auto px-8">

                <div className="bg-surface-container-low border border-outline-variant/10 p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <span className="font-label text-tertiary tracking-[0.2em] font-semibold mb-4 block uppercase">Get in Touch</span>
                            <h2 className="font-headline text-6xl md:text-7xl font-bold tracking-tighter text-white mb-8">Let's <br />Connect.</h2>
                            <p className="text-on-surface-variant text-xl max-w-md leading-relaxed mb-12">
                                I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">

                                <a className="flex items-center gap-4 text-white hover:text-primary transition-colors group" href="mailto:kavishka.rashen.dev@gmail.com">
                                    <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-md group-hover:bg-primary/20">
                                        <span className="material-symbols-outlined text-primary">mail</span>
                                    </div>
                                    <span className="text-xl font-headline font-bold">kavishka.rashen.dev@gmail.com</span>
                                </a>

                                <a className="flex items-center gap-4 text-white hover:text-primary transition-colors group" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kavishka-rashen">
                                    <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-md group-hover:bg-primary/20">
                                        <span className="material-symbols-outlined text-primary">link</span>
                                    </div>
                                    <span className="text-xl font-headline font-bold">linkedin.com/in/kavishka-rashen</span>
                                </a>

                            </div>
                        </div>

                        <form className="space-y-8" onSubmit={HandleSubmit}>

                            <div>
                                <label className="text-xs uppercase text-on-surface-variant">Full Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={HandleChange}
                                    className={`w-full bg-transparent border-b py-4 text-white transition-all
                                    ${errors.name ? "border-red-500" : "border-outline-variant"}`}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="text-xs uppercase text-on-surface-variant">Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={HandleChange}
                                    className={`w-full bg-transparent border-b py-4 text-white transition-all
                                    ${errors.email ? "border-red-500" : "border-outline-variant"}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>


                            <div>
                                <label className="text-xs uppercase text-on-surface-variant">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={HandleChange}
                                    className={`w-full bg-transparent border-b py-4 text-white transition-all
                                    ${errors.message ? "border-red-500" : "border-outline-variant"}`}
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-5 rounded-md font-bold text-xl transition-all duration-300 flex items-center justify-center gap-2
                                ${loading
                                        ? "bg-primary/60 text-on-primary cursor-not-allowed opacity-70"
                                        : "bg-primary text-on-primary hover:shadow-[0_0_30px_rgba(0,218,243,0.3)] hover:scale-[1.02]"
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;