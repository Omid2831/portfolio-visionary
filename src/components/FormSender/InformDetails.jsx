import '../../styles/contact-us.css'
const InformDetails = () => {
    return (
        <article className="contactUs max-w-xl mx-auto p-6 md:p-8 flex flex-col gap-4">
            <p className="uppercase tracking-widest text-xs">let’s talk</p>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <span className="text-sm md:text-base">
                Have a question or a project in mind? Feel free to reach out.
            </span>

            <div className="info">
                <span>Location</span>
                <p>The Netherlands</p>
            </div>

            <div className="info">
                <span>Email</span>
                <p>Mehrabiomid8282@gmail.com</p>
            </div>
        </article>
    )
}

export default InformDetails