const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto text-center p-6 pt-48 pb-32 flex">
      <div className="pt-8 mx-16">
        <img
          src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"
          alt="Contact us"
        />
      </div>
      <div className="p-5 mx-24">
        <h1 className="font-bold text-4xl">Contact us</h1>
        <form>
          <input
            className="w-11/12 p-1 m-3 border border-purple-900 rounded-md"
            type="name"
            placeholder="Name"
          />
          <input
            className="w-11/12 p-1 m-3 border border-purple-900 rounded-md"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="w-11/12 p-1 m-3 border border-purple-900 rounded-md"
            placeholder="Type your message here.."
          ></textarea>
          <div className="w-11/12">
            <button className="px-4 py-2 mx-64 bg-purple-900 text-white rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
