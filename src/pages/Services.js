import React from 'react';

function Services() {
    return (
        <>
            <main>
                <header class="about_header">
                    <div class="banner about_banner services_banner" style={{
                        background: 'url(assets/Services-images/services-header-title.png)',
                        backgroundSize: 'cover'
                    }}>
                        <div class="banner-content about_banner_content">
                            <h1 class="banner-title mt-s mb-m">SERVICES</h1>
                        </div>
                    </div>
                </header>

                <section class="services_section techLeap_section">
                    <div class="main_section_title">
                        <div class="main_section_title_bg">
                            <img src="./assets/Services-images/services-title-bg.png" alt="services-title-bg" />
                        </div>

                        <p class="main_section_title_text">TechLeap</p>
                    </div>

                    <div class="techLeap_text_container">
                        <p>
                            TechLeap's mission is to empower refugee
                            youth with crucial computer literacy skills.
                            Our programs offer comprehensive training in
                            Microsoft software, internet proficiency, and graphic
                            design. We believe that these skills are essential for
                            unlocking opportunities in today's digital
                            world. By equipping young refugees with these
                            capabilities, we aim to bridge the
                            technological divide and enable them to build
                            brighter futures.
                        </p>
                    </div>

                    <div class="techLeap_packages_container">
                        <div class="techLeap_packages_box">
                            <div class="techLeap_package_image">
                                <img src="./assets/Services-images/MS Packages img.png" alt="MS Packages" />
                            </div>

                            <h5 class="techLeap_package_title">Microsoft Packages</h5>
                            <p class="techLeap_package_text">
                                Create and edit documents containing text
                                and images, work with data in spreadsheets and
                                create presentations and posters.
                                Word. Excel. PowerPoint.
                            </p>

                        </div>

                        <div class="techLeap_packages_box">
                            <div class="">
                                <img src="./assets/Services-images/services-photoshop-image.png" alt="photoshop" />
                                <img src="./assets/Services-images/services-canva-image.png" alt="canva" />
                            </div>

                            <h5 class="techLeap_package_title">Graphic Design</h5>
                            <p class="techLeap_package_text">
                                Combine images, typography, colors,
                                and other elements to convey a message
                                or create a visual representation of an idea.
                                Adobe Photoshop & Canva
                            </p>
                        </div>
                    </div>
                </section>

                <section class="services_section techLeap_section">
                    <div class="main_section_title">
                        <div class="main_section_title_bg">
                            <img src="./assets/Services-images/services-digitalboda-title-bg.png" alt="digitalboda-title-bg" />
                        </div>

                        <p class="main_section_title_text">Digital Boda</p>
                    </div>

                    <div class="techLeap_text_container">
                        <p>
                            Digital Boda is revolutionizing education by bringing mobile computer lessons to primary
                            and secondary schools through motorcycle-based
                            outreach. We offer Computer Aided Learning (CAL)
                            for primary schools, ensuring that young
                            learners have access to cutting-edge technology.
                            Additionally, we provide support for coding clubs in
                            secondary schools, fostering the development
                            of critical digital skills. By merging technology and
                            education, Digital Boda is transforming
                            the way students learn and grow.
                        </p>
                    </div>

                    <div class="digital_boda_packages_container techLeap_packages_container">
                        <div class="techLeap_packages_box">
                            <div class="">
                                <img src="./assets/Services-images/services-html-image.png" alt="services-html-image" />
                                <img src="./assets/Services-images/services-css-image.png" alt="services-css-image" />
                                <img src="./assets/Services-images/services-js-image.png" alt="services-js-image" />
                            </div>

                            <h5 class="techLeap_package_title">Web Development</h5>
                            <p class="techLeap_package_text">
                                Coding is crucial for creating websites,
                                web applications, and dynamic content
                                HTML, CSS & Javascript
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Services;
