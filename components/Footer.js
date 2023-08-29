import Link from 'next/link';
import {
  RiBehanceLine,
  RiFacebookCircleFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailOpenFill,
  RiTwitterFill,
} from 'react-icons/ri';
const Footer = () => {
  return (
    <footer className='border-top bg-light'>
      <div className='container'>
        <div className='border-bottom border-white-10'>
          <div className='row align-items-center pt-8 pb-4'>
            <div className='col-md-8'>
              <h2 className='display-6 mb-3 mb-lg-0'>
                Download Best Seller Premium WordPress Themes
              </h2>
            </div>
            <div className='col-md-4'>
              <div className='text-lg-end'>
                <a
                  className='btn btn-primary'
                  href='https://1.envato.market/a1LYWo'
                  target='_blank'
                  rel='noreferrer'
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
          <div className='row py-6'>
            <div className='col-6 col-sm-4 col-lg mb-5 mb-lg-0'>
              <span className='text-cap text-white'>useful Links</span>
              <ul className='list-unstyled list-py-2 mb-0'>
                <li>
                  <Link href='/about'>
                    <a className='link-primary text-black text-decoration-none'>
                      About Me
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/website-templates'>
                    <a className='link-primary text-black text-decoration-none'>
                      Free Website Templates
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-6 col-sm-4 col-lg'>
              <span className='text-cap text-white'>available on</span>
              <ul className='list-unstyled list-py-2 mb-0'>
                <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='https://fiverr.com/monirhossaincom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Fiverr.com
                  </a>
                </li>
                <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='https://www.freelancer.com/u/mdmonirbaf'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Freelancer.com
                  </a>
                </li>
                {/* <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href=''
                    target='_blank'
                    rel='noreferrer'
                  >
                    Upwork.com
                  </a>
                </li> */}
              </ul>
            </div>
            <div className='col-6 col-sm-4 col-lg'>
              <span className='text-cap text-white'>Follow me</span>
              <ul className='list-unstyled list-py-2 mb-0'>
                <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='mailto:monirh.me@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='d-flex align-itmes-center'>
                      <span className='position-relative top-3'>
                        <RiMailOpenFill />
                      </span>
                      <span className='ms-2'>Subscribe by email</span>
                    </div>
                  </a>
                </li>
                {/* <li>
									<a
										className='link-primary text-black text-decoration-none'
										href='https://www.behance.net/getmonir'
										target='_blank'
										rel='noreferrer'
									>
										<div className='d-flex align-itmes-center'>
											<span className='position-relative top-3'>
												<RiBehanceLine />
											</span>
											<span className='ms-2'>Behance</span>
										</div>
									</a>
								</li> */}
                <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='https://facebook.com/monirhossaincom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='d-flex align-itmes-center'>
                      <span className='position-relative top-3'>
                        <RiFacebookCircleFill />
                      </span>
                      <span className='ms-2'>Facebook</span>
                    </div>
                  </a>
                </li>
                {/* <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='https://twitter.com/monirhossaincom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='d-flex align-itmes-center'>
                      <span className='position-relative top-3'>
                        <RiTwitterFill />
                      </span>
                      <span className='ms-2'>Twitter</span>
                    </div>
                  </a>
                </li> */}
                <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='https://instagram.com/monirhossaincom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='d-flex align-itmes-center'>
                      <span className='position-relative top-3'>
                        <RiInstagramLine />
                      </span>
                      <span className='ms-2'>Instagram</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='https://linkedin.com/in/monirhossaincom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='d-flex align-itmes-center'>
                      <span className='position-relative top-3'>
                        <RiLinkedinFill />
                      </span>
                      <span className='ms-2'>Linkedin</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className='link-primary text-black text-decoration-none'
                    href='https://github.com/monirhossaincom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='d-flex align-itmes-center'>
                      <span className='position-relative top-3'>
                        <RiGithubFill />
                      </span>
                      <span className='ms-2'>Github</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row align-items-md-center py-6'>
          <div className='col-12'>
            <p className='fs-5 mb-0'>&copy; Monir Hossain. 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
