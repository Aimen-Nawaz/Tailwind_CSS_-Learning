import * as React from "react";
import { useForm, Controller } from "react-hook-form";

function Contact() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#f8f7ff] via-[#f3f0ff] to-[#eef2ff]"
    >
      {/* Background Blurs */}
      <div className="absolute w-[450px] h-[450px] bg-purple-300/20 rounded-full blur-[150px] -top-40 -left-40"></div>
      <div className="absolute w-[450px] h-[450px] bg-indigo-300/20 rounded-full blur-[150px] -bottom-40 -right-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-14">
          Let’s connect and build something amazing together
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE - INFO */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Information
            </h3>

            <div className="space-y-5 text-gray-700">
              <p>
                <span className="font-semibold text-purple-500">Email:</span><br />
                <a href="mailto:aimenkhan840@gmail.com" className="hover:text-purple-500">
                  aimenkhan840@gmail.com
                </a>
              </p>

              <p>
                <span className="font-semibold text-purple-500">Phone:</span><br />
                <a href="tel:+923131503461" className="hover:text-purple-500">
                  +92 3131503461
                </a>
              </p>

              <p>
                <span className="font-semibold text-purple-500">LinkedIn:</span><br />
                <a
                  href="https://www.linkedin.com/in/aimen-nawaz-691464313"
                  target="_blank"
                  className="hover:text-purple-500"
                >
                  linkedin.com/in/aimen-nawaz
                </a>
              </p>

              <p>
                <span className="font-semibold text-purple-500">GitHub:</span><br />
                <a
                  href="https://github.com/Aimen-Nawaz"
                  target="_blank"
                  className="hover:text-purple-500"
                >
                  github.com/Aimen-Nawaz
                </a>
              </p>

              <p>
                <span className="font-semibold text-purple-500">Location:</span><br />
                Pakistan
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM (CONTROLLER STYLE) */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Send Message
            </h3>

            {/* NAME */}
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              )}
            />

            
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}
            />

            
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <div>
                  <textarea
                    {...field}
                    rows={5}
                    placeholder="Your Message"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              )}
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;