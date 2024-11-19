import React from "react";
import { Textarea, Input } from "@material-tailwind/react";

const Contact = () => {
  return (
    <>
      {/* Divider */}
      <div className=" py-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          <span>Contact</span> Us
        </h2>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p>
            Morbi rutrum massa eget mi gravida, sit amet mollis magna gravida.
            Morbi sodales, ligula quis ornare bibendum, magna erat convallis
            ipsum, id posuere ligula massa vitae leo.
          </p>
          <ul className="space-y-2">
            <li>
              <p>
                <span className="fa fa-envelope"></span> Email:{" "}
                <a
                  href="mailto:humanity@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  humanity@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>
                <span className="fa fa-phone"></span> Phone: (+91) XXX-349-0600
              </p>
            </li>
            <li>
              <p>
                <span className="fa fa-map-marker"></span> Address: Malad,
                Mumbai
              </p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-md rounded">
          <form id="contact-us" method="post" action="#" className="space-y-4">
            <Input color="indigo" label="Name" required />
            <Input color="indigo" label="email" required />
            <Textarea name="message" color="indigo" label="Message" />
            {/* <textarea rows="4"></textarea> */}
            <button
              type="submit"
              name="submit"
              className=" w-full px-6 py-2 font-medium bg-indigo-500 text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      {/* <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.211958629328!2d91.83379900000003!3d24.909438007883935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505558dd0be6a1%3A0x65c7e47c94b6dc45!2sTechnext!5e1!3m2!1sen!2s!4v1425297675833"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </section> */}
    </>
  );
};

export default Contact;
