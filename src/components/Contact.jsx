import React from "react";

function Contact() {
  return (
    <section className="rounded-xl bg-purple-200/75 px-5 md:px-50 flex flex-col gap-10 py-10">
      <div>
        <h2 className="text-4xl font-medium">Get in touch</h2>
        <p className="text-xl mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>

      <form action="" className="flex flex-col gap-5">
        <label htmlFor="">
          Name
          <input
            type="text"
            className="h-15 w-full bg-white rounded-lg px-5 mt-2"
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="Email"
            className="h-15 w-full bg-white rounded-lg px-5 mt-2"
          />
        </label>
        <label htmlFor="">
          Message
          <textarea className="resize-none h-32 w-full bg-white rounded-lg px-5 mt-2" />
        </label>

        <button
          type="submit"
          className="bg-purple-600 text-white px-5 py-3 rounded-lg font-mono"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
