import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

const BlogSection = () => {
  return (
    <section className='py-10 py-lg-11'>
      <div className='container'>
        <div className='row mb-5 align-items-center'>
          <div className='col-lg-8 mb-5 mb-lg-0'>
            <div className='mb-5'>
              <h2 className='display-5'>Latest Blog</h2>
              <p className='lead mb-0'>
                A freelance WordPress developer blog about freelancing,
                Tutorials Web Design and Web Development.
              </p>
            </div>
          </div>
          <div className='col-lg-4 d-none d-lg-block'>
            <div className='text-end'>
              <Link href='/blog/'>
                <a className='btn btn-primary'>View All Posts</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div>
              <h5 className='mb-0'>
                <Link href='/blog/i-will-build-responsive-wordpress-website-design-website-redesign'>
                  <a className='link-primary text-decoration-none text-black'>
                    I will do responsive wordpress website design or website
                    redesign
                  </a>
                </Link>
              </h5>
              <h6 className='fs-14 py-3 mb-0 color-gray-dark-v4 text-black-50'>
                Last Update 10 Jan 22
              </h6>
              <p>
                {`Are you looking for a professional WordPress developer to create a brand new WordPress Website design or redesign your old website? If yes, You are in the right place!....`}
              </p>
              <Link href='/blog/i-will-build-responsive-wordpress-website-design-website-redesign'>
                <a className='link-primary text-black text-decoration-none'>
                  Read More
                  <span className='top-3 position-relative'>
                    <RiArrowRightSLine />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-30 text-center d-lg-none'>
          <Link href='/blog'>
            <a className='btn btn-primary'>View All Posts</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
