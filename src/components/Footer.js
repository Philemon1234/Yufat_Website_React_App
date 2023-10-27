import React from 'react';

function Footer() {
    return (
        <>
            <footer>
                <div class="sub_footer">
                    <div class="footer_logo_column">
                        <div class="footer_logo">
                            <img src="./assets/Home-images/yufat-logo.png" alt="yufat-logo" />
                        </div>
                        <p class="footer_column_text">
                            Empowering Refugees Through the Power of Technology
                        </p>

                        <div class="footer_social_links">
                            <a href="#">
                                <img src="./assets/Home-images/footer-facebook -icon.png" alt="facebook icon" />
                            </a>
                            <a href="#">
                                <img src="./assets/Home-images/footer-instagram-icon.png" alt="instagram icon" />
                            </a>
                            <a href="#">
                                <img src="./assets/Home-images/footer-twitter-icon.png" alt="twitter icon" />
                            </a>
                        </div>

                        <button class="btn donate_btn">DONATE</button>

                    </div>

                    <div class="footer_quick_links">
                        <h1 class="footer_title">QUICK LINKS</h1>

                        <ul class="footer_links">
                            <li><a class="footer_link" href="#">HOME</a></li>
                            <li><a class="footer_link" href="#">ABOUT</a></li>
                            <li><a class="footer_link" href="#">SERVICES</a></li>
                            <li><a class="footer_link" href="#">TEAM</a></li>
                            <li><a class="footer_link" href="#">GALLERY</a></li>
                            <li><a class="footer_link" href="#">CONTACT</a></li>
                        </ul>
                    </div>

                    <div class="footer_contact">
                        <h1 class="footer_title">CONTACT</h1>
                        <p><i class="fa fa-location-arrow"></i> kyaka II, Kyegegwa</p>
                        <p><i class="fa fa-phone"></i>+256 760 - 752 - 828</p>
                        <p><i class="fa fa-envelope"></i>youthunitedyufat@gmail.com</p>
                    </div>

                    <div class="footer_gallery">
                        <h1 class="footer_title">GALLERY</h1>
                        <div class="footer_images">
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-1.png" class="footer_images" alt="Gallery1" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-2.png" class="footer_images" alt="Gallery2" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-3.png" class="footer_images" alt="Gallery3" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-4.png" class="footer_images" alt="Gallery4" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-5.png" class="footer_images" alt="Gallery5" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-6.png" class="footer_images" alt="Gallery6" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-7.png" class="footer_images" alt="Gallery7" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-8.png" class="footer_images" alt="Gallery8" /></a>
                            <a href="#"><img src="./assets/Home-images/Footer-Gallery-9.png" class="footer_images" alt="Gallery9" /></a>
                        </div>
                    </div>
                </div>

                <h2 class="footer_yufat_name title_psuedo">YOUTH UNITED FOR AFRICAN TRANSFORMATION</h2>
            </footer>
        </>
    )
}

export default Footer;
