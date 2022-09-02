import React from "react";

function Footer(props) {
  return (
    <div className="webFooter">
      <div className="copyright">
        HotelBooking.com All Rights Reserved
        <i class="fa fa-copyright"></i>
      </div>
      <div className="socialMediaIcons">
        Get in touch with us in our social media:
        <a href="https://www.instagram.com">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com">
          <i class="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
