import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
  const slick_slider = {
    dots: false,
    arrow: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider className="slick_slider banner_slider banner_slider_3" {...slick_slider} slidesToShow={1} autoplay={false} fade="true">
      <div className="slide bg-layer">
        <div className="slide_img" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x730?text=slider-mainbg-005-1920x730.jpg)' }}></div>
        <div className="slide__content pb-50 pb-xl-0 pt-130 pt-xl-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="slide__content--headings ttm-textcolor-white">
                  <h2 className="animated animate__fadeInDown">A new <span className="text-theme-SkinColor fw-normal"> Experience </span></h2>
                  <h2 className="animated animate__fadeInDown"> of Human Resource </h2>
                  <div className="mt-20 mb-30 mb-md-15">
                    <p className="animated animate__fadeInDown d-none d-md-block">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                  <div className="animated animate__fadeInUp" data-delay="1.4">
                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" href={process.env.PUBLIC_URL + '/contact_01'}>Contact us</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-none d-xl-block text-center position-relative">
                  <div className="z-index-1 position-relative">
                    <img className="rounded-circle box-shadow m-auto img-fuild" src="https://via.placeholder.com/332x332?text=single01-332x332.jpg" alt="Profile" />
                  </div>
                  <div className="cmp-logo one">
                    <img className="img-fluid" src="https://via.placeholder.com/210x204?text=logo1.png" alt="Logo 1" />
                  </div>
                  <div className="cmp-logo two">
                    <img className="img-fluid" src="https://via.placeholder.com/210x204?text=logo2.png" alt="Logo 2" />
                  </div>
                  <div className="cmp-logo three">
                    <img className="img-fluid" src="https://via.placeholder.com/210x204?text=logo3.png" alt="Logo 3" />
                  </div>
                  <div className="cmp-logo four">
                    <img className="img-fluid" src="https://via.placeholder.com/210x204?text=logo4.png" alt="Logo 4" />
                  </div>
                  <div className="cmp-logo five">
                    <img className="img-fluid" src="https://via.placeholder.com/210x204?text=logo5.png" alt="Logo 5" />
                  </div>
                  <div className="arrow-one">
                    <img src="images/slides/arrow-1.png" alt="Arrow 1" />
                  </div>
                  <div className="arrow-two">
                    <img src="images/slides/arrow-2.png" alt="Arrow 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
