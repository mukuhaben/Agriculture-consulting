export default function Consultation(){

  return(

    <section className="max-w-4xl mx-auto py-24 px-6">

      <h1 className="text-4xl font-bold mb-6">
        Book a Consultation
      </h1>

      <p className="mb-10">
        Schedule a consultation to discuss agricultural supply chains,
        climate-smart agriculture systems, or sustainable farming strategies.
      </p>

      <div className="border rounded-xl p-6">

        {/* Calendly embed */}

        <iframe
          src="https://calendly.com/YOUR-CALENDLY-LINK"
          width="100%"
          height="700"
        ></iframe>

      </div>

    </section>

  )
}