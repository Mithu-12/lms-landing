import Image from "next/image";
import footerImage from '/public/FooterImg.png'
import logo from '/public/logo.svg'

const Footer = () => {
  return (
    <div>
        <div>
            <Image src={footerImage} alt="Footer Image"/>
        </div>
        <div className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-1">
            <div className="flex justify-between">
              <div className="footer-item">
                <Image src={logo} alt=""/>
                <p className='mt-3'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="footer-item1">
              <h5 className="border-b-2 border-gray-300">USEFUL LINKS</h5>
              <div className="footer-link">
                <i className="fas fa-chevron-right"></i>
                <p>
                  <a href="#">Home</a>
                </p>
              </div>
              <div className="footer-link">
                <i className="fas fa-chevron-right"></i>
                <p>
                  <a href="#about">About Us</a>
                </p>
              </div>
              <div className="footer-link">
                <i className="fas fa-chevron-right"></i>
                <p>
                  <a href="#service">Services</a>
                </p>
              </div>
              <div className="footer-link">
                <i className="fas fa-chevron-right"></i>
                <p>
                  <a href="#">Terms of Service</a>
                </p>
              </div>
              <div className="footer-link">
                <i className="fas fa-chevron-right"></i>
                <p>
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="footer-item1">
              <h5 className="border-b-2 border-gray-300">CONTACT US</h5>
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
                <br />
                Phone: +1 5589 55488 55
                <br />
                Email: info@example.com
              </p>
              <div className="footer-icon">
                <span>
                  <i className="fab fa-facebook"></i>
                </span>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  <i className="fab fa-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="footer-item1">
              <h5 className="border-b-2 border-gray-300">OUR NEWSPAPER</h5>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna veniam enim veniam illum dolore legam minim quorum culpa
                amet magna export quem marada parida nodela caramase seza.
              </p>
              <form className="footer-input flex">
                <input
                  type="email"
                  className="mr-2 px-1 py-1 border border-gray-300 rounded"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer transition duration-300"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-6 text-center">
        <p className="px-3">
          © Copyright Apple. All Rights Reserved Designed by{" "}
          <span className="text-green-500">Mithu</span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
