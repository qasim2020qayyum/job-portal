import React, { useState } from 'react';

const HeaderSearch = () => {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div className="header_search">
      <a className="search_btn" tabIndex="1" onClick={toggle}>
        {show ? <i className="fa fa-search" /> : <i className="fa fa-times" />}
      </a>
      {show && (
        <div className="header_search_content">
          <div className="header_search_content_inner">
            <a className="close_btn" onClick={toggle}>
              <i className="ti ti-close"></i>
            </a>
            <form id="searchbox">
              <input
                type="text"
                className="search_query"
                name="searchbox"
                placeholder="Type Word Then Enter.."
              />
              <button type="submit" className="btn close-search">
                <i className="ti ti-search"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
