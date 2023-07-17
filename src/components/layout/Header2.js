import React, { useEffect } from 'react';
import Menu from './Menu';
import MobileMenu from './Mobile_menu';
import LogoWhite from './Logo_white';
import HeaderSearch from './Header_search';

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-Sticky')
      : header.classList.remove('is-Sticky');
  };

  return (
    <header id="masthead" className="header ttm-header-style-02 bg-theme-DarkColor">
      {/* site-header-menu */}
      <div id="site-header-menu" className="site-header-menu">
        <div className="site-header-menu-inner ttm-stickable-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {/* site-navigation */}
                <div className="site-navigation d-flex align-items-center justify-content-between">
                  {/* site-branding */}
                  <div className="site-branding">
                    <LogoWhite />
                  </div>
                  {/* site-branding end */}
                  <div className="border-box-block text-theme-WhiteColor">
                    <div className="top_bar d-flex align-items-center justify-content-between">
                      <div className="d-flex w-auto">
                        <div className="top_bar_contact_item">
                          <div className="top_bar_icon">
                            <i className="flaticon flaticon-phone-call"></i>
                          </div>
                          <span>(+01)123 456 789</span>
                        </div>
                        <div className="top_bar_contact_item">
                          <div className="top_bar_icon">
                            <i className="flaticon flaticon-email"></i>
                          </div>
                          <span>
                            <a href="mailto:info@example.com">info@example.com</a>
                          </span>
                        </div>
                        <div className="top_bar_contact_item">
                          <div className="top_bar_icon">
                            <i className="flaticon flaticon-placeholder"></i>
                          </div>
                          <span>Suite 20 Golden Street USA</span>
                        </div>
                      </div>
                      <div className="media-block ms-auto">
                        <ul className="social-icons">
                          <li>
                            <a
                              className="facebook"
                              href="/"
                              rel="noopener"
                              aria-label="facebook"
                            >
                              <i className="ti ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="twitter"
                              href="/"
                              rel="noopener"
                              aria-label="twitter"
                            >
                              <i className="ti ti-twitter-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="google"
                              href="/"
                              rel="noopener"
                              aria-label="google"
                            >
                              <i className="ti ti-google"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="linkedin"
                              href="/"
                              rel="noopener"
                              aria-label="linkedin"
                            >
                              <i className="ti ti-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      {/* menu */}
                      <Menu />
                      <div className="mobile-menu">
                        <MobileMenu />
                      </div>
                      {/* menu end */}
                      <div className="header_extra ml-auto d-flex align-items-center">
                        <div className="header_search">
                          <HeaderSearch />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header_btn">
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill
                                            ttm-icon-btn-left ttm-btn-color-skincolor d-flex align-items-center"
                    >
                      <i className="far fa-user fa-sm"></i>
                      <a
                        className="alert-heading"
                        href={process.env.PUBLIC_URL + '/register'}
                      >
                        sign up{' '}
                      </a>
                      <span className="ml-10 mr-10">/</span>
                      <i className="ti ti-lock fa-sm"></i>
                      <a
                        className="alert-heading"
                        href={process.env.PUBLIC_URL + '/login'}
                      >
                        login{' '}
                      </a>
                    </a>
                  </div>
                </div>
                {/* site-navigation end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* site-header-menu end */}
    </header>
  );
};

export default Header;
