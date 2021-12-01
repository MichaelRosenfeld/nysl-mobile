const contactInfoStatic =
    <div>
        <p>Please email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></p>
        <p id="contact-bottom">We will reply to your email as soon as we can.</p>
    </div>;

function Contact() {
    return (
        <>
            {contactInfoStatic}
        </>
    );

}

export default Contact;