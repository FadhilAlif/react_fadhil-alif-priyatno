import { useForm } from "react-hook-form";

const ContactUs = () => {
  // Fungsi Handle Submit
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
    window.location.reload();
  };

  return (
    <div className="body">
      {/* Contact Us */}
      <section className="contact">
        <div id="contact-us" className="container">
          <div className="row p-md-5 p-2">
            <div className="col-lg-6 p-3">
              <h1 className="fw-bold text-warning">Contact Us</h1>
              <p className="fw-lighter fs-6">
                Kami senang mendengar dari Anda! Silakan hubungi kami untuk
                pertanyaan, permintaan penawaran, atau konsultasi gratis
                mengenai proyek Anda. Tim Mengkuli selalu siap membantu Anda
                mewujudkan impian Anda. Kami mengutamakan komunikasi yang baik
                dengan pelanggan kami, dan kami akan merespons pertanyaan Anda
                dengan cepat.
              </p>
            </div>
            <div className="col-lg-6">
              <form
                action=""
                id="formContact"
                method="post"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col-md-6 mb-3 form-group">
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                        maxLength: {
                          value: 10,
                          message: "First name cannot exceed 10 characters",
                        },
                      })}
                      id="firstname"
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 form-group mb-3 mt-md-0">
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                        maxLength: {
                          value: 10,
                          message: "Last name cannot exceed 10 characters",
                        },
                      })}
                      id="lastname"
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">
                        {errors.lastName.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid email format",
                      },
                    })}
                    id="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <textarea
                    type="text"
                    {...register("message", {
                      required: "Message is required",
                      maxLength: {
                        value: 200, // Update the maximum message length
                        message: "Message cannot exceed 200 characters",
                      },
                    })}
                    id="message"
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Message"
                    rows="6"
                  />
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message.message}
                    </div>
                  )}
                </div>

                <div>
                  <button type="submit" className="btn btn-warning">
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us End */}
    </div>
  );
};

export default ContactUs;
