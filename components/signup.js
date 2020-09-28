const Signup = () => {
  return (
    <>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/weubc"
        method="post"
        target="popupwindow"
        onSubmit={() => window.open('https://buttondown.email/weubc', 'popupwindow')}
        className="font-bold text-xl md:text-2xl"
      >
        <label htmlFor="bd-email">Subscribe to get the latest wisdom bomb in your inbox</label>

        <div className="mb-2 w-full flex space-x-4">
          <input type="email" name="email" id="bd-email" placeholder="elon@spaceX.com" className="w-full p-4 border-2 rounded-lg border-transparent"></input>
          <input type="hidden" value="1" name="embed"></input>
          <input type="submit" value="Subscribe" className="duration-150 ease-in transform mr-2 px-20 p-4 text-brand-black bg-brand-yellow border-2 border-brand-yellow rounded-lg font-bold"></input>
        </div>

        <p className="text-xs">
          <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
        </p>
      </form>
      <style jsx>{`
        form input[type=submit]:hover {
          cursor: pointer;
          transform: translateY(-0.5rem);
        }
      `}</style>
    </>
  )
}
  
  export default Signup
  