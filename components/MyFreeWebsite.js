import Image from 'next/image';
import { Shimmer, ToBase64 } from '../components';
import Link from 'next/link';

function MyFreeWebsite() {
  return (
    <div className='py-7 py-lg-11'>
      <div className='container'>
        <div className='row mb-5 align-items-center'>
          <div className='col-lg-8'>
            <div>
              <h2 className='display-5'>Free Website Templates</h2>
              <p className='lead'>
                A freelance WordPress developer blog about freelancing,
                Tutorials Web Design and Web Development.
              </p>
            </div>
          </div>
          <div className='col-lg-4 d-none d-lg-block'>
            <div className='text-end'>
              <Link href='/website-templates/'>
                <a className='btn btn-primary'>View All Template</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='mb-4 mb-lg-0'>
              <Link href='/'>
                <a className='text-black link-primary text-decoration-none'>
                  <div className='mb-3'>
                    <Image
                      src='/portfolio/comming-soon.jpg'
                      width='1280'
                      height='769'
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt='comming soon'
                      layout='responsive'
                    />
                  </div>
                  <div>
                    <h4 className='mb-0 text-inherit'>Comming Soon</h4>
                    <span>Comming soon free templates</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFreeWebsite;
