import React from 'react'

function Contact() {
    return (
        <>
            <main>
                <header class="about_header">
                    <div class="banner about_banner contact_banner" style={{
                        background: 'url(assets/Contact-images/contact-banner-image.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div class="banner-content about_banner_content">
                        <h1 class="banner-title mt-s mb-m">CONTACT</h1>
                    </div>
                </div>
            </header>

            <section class="contact_section">
                <div class="contact_container">
                    <div class="form_container">
                        <form action="https://formsubmit.co/ntivuguruzwaphilemon0@gmail.com" method="POST">
                            <div class="form_inputs">
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="Thank you page url" />
                                <input type="hidden" name="_subject" value="New Email Message!" />

                                <input class="form_el" name="Name" type="text" placeholder="Enter your Name" />
                                <input class="form_el" name="Mail" type="text" placeholder="Enter your Email" />
                                <textarea class="form_el" name="Message" id="textarea" cols="30" rows="10"
                                    placeholder="Enter your message..."></textarea>
                                <button type="submit" class="form_btn">SUBMIT</button>
                            </div>
                        </form>

                        <div class="form_map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6979.3541968239015!2d31.049361071546983!3d0.48037570683094116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skyegegwa%20refugee%20settlement!5e1!3m2!1sen!2sug!4v1695808867935!5m2!1sen!2sug"
                                width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div class="form_contact_details">
                        <div class="form_contact_box">
                            <span><i class="fa fa-phone"></i>Call Us</span>
                            <p>+256 760 - 752 - 828</p>
                            <p>+256 760 - 752 - 828</p>
                        </div>

                        <div class="form_contact_box">
                            <span><i class="fa fa-location-arrow"></i>Location</span>
                            <p> kyaka II Refugee Settlement,</p>
                            <p>Kyegegwa</p>
                        </div>

                        <div class="form_contact_box">
                            <span><i class="fa fa-envelope"></i>Email Address</span>
                            <p>youthunitedyufat@gmail.com</p>
                            <p>info@yufat.org</p>
                        </div>
                    </div>
                </div>
            </section>
        </main >
        </>
    )
}

export default Contact
