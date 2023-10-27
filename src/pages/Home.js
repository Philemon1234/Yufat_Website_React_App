import React from 'react';

function Home() {
  return (
    <>
      <main>
        <div class="banner" style={{
          background: 'url(assets/Home-images/header-banner.png)',
          backgroundSize: 'cover'
        }}>
          <div class="banner-content">
            <p class="banner-par">EMPOWERING THE NEXT GENERATION</p>
            <h1 class="banner-title mt-s mb-m">Nurturing Youth with High-Quality Computer Proficiency</h1>
            <button class="btn banner-btn">DONATE</button>
          </div>
          <a href="#welcome-section"><span><i class="fa fa-angle-down banner-down-arrow"></i></span></a>
        </div>

        <section id="welcome-section" class="welcome_section">
          <div class="welcome_text_content">
            <h1 class="title_psuedo welcome_title mb-s">WELCOME TO YUFAT</h1>
            <p class="welcome_par">
              YUFAT is a community-based refugee Led organization whose
              specific objective is to equip youth and children
              with quality computer skills that go beyond basic knowledge,
              enabling them to utilize the power of technology and
              actively contribute to the transformation of Africa.
            </p>
          </div>

          <div class="welcome_image_container mb-b">
            <img src="./assets/Home-images/welcome-image.png" alt="welcome" />
          </div>
        </section>

        <section class="causes_section pt-b">
          <h1 class="title_psuedo section_title causes_title">CAUSES</h1>
          <div class="causes_card_container flex justify-space-between">
            <div class="causes_card">
              <h3 class="causes_card_title mb-s">Computer Literacy</h3>
              <p class="causes_card_text">
                YUFAT's focus on training in Microsoft
                packages, internet usage, graphics design, and
                Computer Aided Learning (CAL) promotes computer
                literacy. This is essential in a world where
                technology plays an increasingly significant role
                in various aspects of life
              </p>
            </div>

            <div class="causes_card">
              <h3 class="causes_card_title mb-s">Supporting Refugee Settlements</h3>
              <p class="causes_card_text">
                YUFAT's presence and initiatives, particularly
                in Kyaka II refugee settlement, provide support and
                educational opportunities to refugee communities. This
                support helps enhance their resilience, integration,
                and overall well-being
              </p>
            </div>
          </div>
        </section>

        <section class="services_section">

          <div class="main_section_title">
            <div class="main_section_title_bg">
              <img src="./assets/Home-images/services-title-bg.png" alt="services-title-bg" />
            </div>

            <p class="main_section_title_text">SERVICES</p>
          </div>

          <div class="services_cards_container flex justify-space-between">
            <div class="services_card">
              <div class="services_image_box">
                <img src="./assets/Home-images/techLeap-img.png" alt="techLeap" />
              </div>

              <div class="services_text_box">
                <h1 class="services_text_box_title mb-s">TechLeap</h1>
                <p class="services_text_box_par mb-m">
                  Educate the next generation with technological
                  advancement in Microsoft Packages, Internet Usage
                  and Graphic Design providing skills and knowledge
                  needed to thrive in the digital era
                </p>

                <a href="services.html"><button class="services_btn">Learn More <i
                  class="fa fa-arrow-right services_btn_arrow"></i></button></a>
              </div>
            </div>

            <div class="services_card">
              <div class="services_image_box">
                <img src="./assets/Home-images/Bodaboda-img.png" alt="Bodaboda" />
              </div>

              <div class="services_text_box">
                <h1 class="services_text_box_title mb-s">Digital Boda</h1>
                <p class="services_text_box_par mb-m">
                  Facilitate accessible computer lessons in
                  remote areas and institutions, including primary
                  and secondary schools facing challenges
                  in accessing computers leaving no community behind
                  in the era of technological transformation
                </p>

                <a href="services.html"><button class="services_btn">Learn More <i
                  class="fa fa-arrow-right services_btn_arrow"></i></button></a>
              </div>
            </div>
          </div>
        </section>


        <section class="services_section testimonials_section">
          <div class="main_section_title">
            <div class="main_section_title_bg">
              <img src="./assets/Home-images/testimonies-title-bg.png" alt="testimonies" />
            </div>

            <p class="main_section_title_text">TESTIMONIALS</p>
          </div>

          <div class="testimonials_container mySwiper">
            <div class="testimonials_cards_container swiper-wrapper">

              <div class="testimonial_card swiper-slide">

                <div class="testimonial_image">
                  <img src="./assets/Home-images/testimonial images/emmanuel bahanuzi-testimonial.png" alt="emmanuel bahanuzi" />
                </div>

                <h1 class="testimonial_name">Emmanuel Bahanuzi</h1>

                <p class="testimonial_description">
                  Yufat has been a beacon of light in my life. When I had to leave my home country Rwanda due to War, I felt lost. Yufat's training in coding and Microsoft applications not only gave me a sense of purpose but also the tools to secure a stable job. Yufat doesn't just teach skills; they restore dignity and hope to refugees like me.
                </p>
              </div>

              {/* <div class="testimonial_card swiper-slide">

                <div class="testimonial_image">
                  <img src="./assets/Home-images/testimonial images/kananura deus-testimonial.png" alt="kananura deus" />
                </div>

                <h1 class="testimonial_name">kananura Deus</h1>

                <p class="testimonial_description">
                  Yufat gave me hope when I needed it the most. As a refugee, I had lost everything. But through their computer skills training, I gained a new lease on life. Learning coding and Microsoft applications not only empowered me but also opened doors to job opportunities. Yufat truly changes lives.
                </p>
              </div> */}

              {/* <div class="testimonial_card swiper-slide">
                <div class="testimonial_image">
                  <img src="./assets/Home-images/testimonial images/mwamba-mercy-testimonial.png" alt="mwamba-mercy" />
                </div>

                <h1 class="testimonial_name">Mwamba Mercy</h1>

                <p class="testimonial_description">
                  Yufat is more than just an organization; it's a lifeline for people like me. Yufat taught me coding and Microsoft Word, helping me develop skills that I can use to rebuild my life. I'll forever be grateful to them.
                </p>
              </div> */}

              {/* <div class="testimonial_card swiper-slide">
                <div class="testimonial_image">
                  <img src="./assets/Home-images/testimonial images/uwase nadinah-testimonial.png" alt="uwase nadinah" />
                </div>

                <h1 class="testimonial_name">Uwase Nadinah</h1>

                <p class="testimonial_description">
                  Yufat's commitment to empowering refugees through computer skills is truly remarkable. As a Rohingya refugee, I faced immense adversity, but Yufat's coding courses provided me with a sense of direction and hope for a better future. I now have the skills to pursue a career and contribute to society.
                </p>
              </div> */}

            </div>
            <div class="swiper-button-next testimonial_arrow_icon"></div>
            <div class="swiper-button-prev testimonial_arrow_icon"></div>
            <div class="swiper-pagination"></div>
          </div>
        </section>


        <section class="donate_section">
          <div class="donate_container">
            <p class="donate_text mb-b">Assisting the Displaced and Vulnerable Children with Computer Education</p>
            <button class="btn donate_btn">DONATE</button>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home;