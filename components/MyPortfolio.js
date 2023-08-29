import Image from 'next/image';
import Link from 'next/link';
import { Shimmer, ToBase64 } from '../components';
function MyPortfolio() {
  return (
    <div className='py-10 py-lg-11'>
      <div className='container'>
        <div className='row mb-5 align-items-center'>
          <div className='col-lg-8'>
            <div>
              <h2 className='display-5'>My WordPress Portfolio</h2>
              <p className='lead'>
                A freelance WordPress developer blog about freelancing,
                Tutorials Web Design and Web Development.
              </p>
            </div>
          </div>
          <div className='col-lg-4 d-none d-lg-block'>
            <div className='text-end'>
              <Link href='/portfolio/'>
                <a className='btn btn-primary'>View All Portfolio</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='mb-5 mb-lg-0'>
              <a
                className='text-decoration-none text-black link-primary d-block'
                href='https://sporsha.org/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='mb-3'>
                  <Image
                    src='/portfolio/sporsha.jpg'
                    width='1280'
                    height='769'
                    placeholder='blur'
                    blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                      Shimmer(1280, 769)
                    )}`}
                    alt='Sporsha'
                    layout='responsive'
                  />
                </div>
                <div>
                  <h4 className='mb-0 text-inherit'>Sporsha</h4>
                  <span>Charity organization website</span>
                </div>
              </a>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-5 mb-lg-0'>
              <a
                className='text-decoration-none text-black link-primary'
                href='https://fixiz.co.uk/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='mb-3'>
                  <Image
                    src='/portfolio/fixiz.jpg'
                    width='1280'
                    height='769'
                    placeholder='blur'
                    blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                      Shimmer(1280, 769)
                    )}`}
                    alt='Fixiz'
                    layout='responsive'
                  />
                </div>
                <div>
                  <h4 className='mb-0 text-inherit'>Fixiz</h4>
                  <span>House cleaning service webstie</span>
                </div>
              </a>
            </div>
          </div>
          <div className='col-lg-4'>
            <div>
              <a
                className='text-decoration-none text-black link-primary'
                href='https://belleviewdental.com.au/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='mb-3'>
                  <Image
                    src='/portfolio/belleviewdental.jpg'
                    width='1280'
                    height='769'
                    placeholder='blur'
                    blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                      Shimmer(1280, 769)
                    )}`}
                    alt='Belleview Dental'
                    layout='responsive'
                  />
                </div>
                <div>
                  <h4 className='mb-0 text-inherit'>Belleview Dental</h4>
                  <span>Dental clinic website</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
