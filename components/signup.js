const Signup = () => {
  return (
    <>
      <form
        action="https://buttondown.email/behind-the-stand"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open(
            "https://buttondown.email/behind-the-stand",
            "popupwindow"
          )
        }
        className="font-bold text-xl md:text-2xl"
      >
        <label htmlFor="bd-email">
          Subscribe for tips you can steal for your next venture!
        </label>

        <div className="mb-2 w-full flex space-x-4">
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="elon@spaceX.com"
            className="w-full p-4 border-2 rounded-lg border-transparent"
          ></input>
          <input type="hidden" value="1" name="embed"></input>
          <input
            type="submit"
            value="Subscribe"
            className="duration-150 ease-in transform mr-2 md:px-20 p-4 text-brand-black bg-brand-yellow border-2 border-brand-yellow rounded-lg font-bold"
          ></input>
        </div>

        <p className="text-xs">
          <a href="https://buttondown.email" target="_blank">
            Powered by Buttondown.
          </a>
        </p>
      </form>
      <style jsx>{`
        form input[type="submit"]:hover {
          cursor: pointer;
          transform: translateY(-0.5rem);
        }
      `}</style>
    </>
  );
};

export default Signup;
