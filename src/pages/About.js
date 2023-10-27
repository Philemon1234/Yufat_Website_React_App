import React from 'react'

function About() {
  return (
    <>
      <main>
        <header class="about_header">
          <div class="banner about_banner" style={{
            background: 'url(assets/About-images/about-wallpaper.png)',
            backgroundSize: 'cover'
          }}>
            <div class="banner-content about_banner_content">
              <h1 class="banner-title mt-s mb-m">ABOUT US</h1>
            </div>
          </div>
        </header>

        <section id="welcome-section" class="about_welcome_section welcome_section">
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
            <img src="./assets/Home-images/welcome-image.png" alt="welcome-image" />
          </div>
        </section>

        <section class="about_causes_section causes_section pt-b">
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
      </main>
    </>
  )
}

export default About;