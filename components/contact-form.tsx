export function ContactForm() {
  return (
    <section className="py-10 px-2 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Contact Us
      </h2>
      <form className="w-full max-w-xl flex flex-col items-center gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-2xl bg-muted/30 text-lg px-6 py-4 text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-2xl bg-muted/30 text-lg px-6 py-4 text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <select
          className="w-full rounded-2xl bg-muted/30 text-lg px-6 py-4 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          defaultValue=""
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          placeholder="How can we help you?"
          rows={4}
          className="w-full rounded-2xl bg-muted/30 text-lg px-6 py-4 text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full px-8 py-3 text-lg transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
