import React from 'react'

function Gallery() {
    return (
        <>
            <main>
                <header class="about_header">
                    <div class="banner about_banner gallery_banner" style={{
                        background: 'url(assets/Gallery-images/gallery-banner-image.png)',
                        backgroundSize: 'cover'
                    }}>
                        <div class="banner-content about_banner_content">
                            <h1 class="banner-title mt-s mb-m">GALLERY</h1>
                        </div>
                    </div>
                </header>

                <section class="gallery_section">
                    <div class="grid-container">
                        <div class="grid-item grid-item-1">
                            <div class="img-container">
                                <img src="./assets/Gallery-images/gallery-image-1.png" alt="gallery-image" />
                            </div>

                        </div>

                        <div class="grid-item grid-item-2">
                            <div class="img-container">
                                <img src="./assets/Gallery-images/gallery-image-2.png" alt="gallery-image" />
                            </div>
                        </div>

                        <div class="grid-item grid-item-3">
                            <div class="img-container">
                                <img src="./assets/Gallery-images/gallery-image-3.png" alt="gallery-image" />
                            </div>
                        </div>

                        <div class="grid-item grid-item-4">
                            <div class="img-container">
                                <img src="./assets/Gallery-images/gallery-image-4.png" alt="gallery-image" />
                            </div>
                        </div>

                        <div class="grid-item grid-item-5">
                            <div class="img-container">
                                <img src="./assets/Gallery-images/gallery-image-5.png" alt="gallery-image" />
                            </div>
                        </div>

                        <div class="grid-item grid-item-6">
                            <div class="img-container">
                                <img src="./assets/Gallery-images/gallery-image-6.png" alt="gallery-image" />
                            </div>
                        </div>

                        <div class="grid-item grid-item-7">
                            <div class="img-container">
                                <img src="./assets/Gallery-images/gallery-image-7.png" alt="gallery-image" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Gallery;
