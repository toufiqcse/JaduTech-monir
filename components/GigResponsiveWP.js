import Image from 'next/image';
import { Shimmer, ToBase64 } from '../components/';
function GigResponsiveWP() {
  return (
    <div className='sticky'>
      <div className='gig border'>
        <div className='mb-3'>
          <Image
            src='/gig/responsive-wordpress-website.png'
            width='1280'
            height='769'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${ToBase64(
              Shimmer(1280, 769)
            )}`}
            alt='Felt Moon'
            layout='responsive'
          />
        </div>
        <div className='p-3'>
          <div className='d-flex align-items-center mb-3'>
            <div className='seller-img d-flex me-2'>
              <Image src='/gig/thumb.png' width='50' height='50' />
            </div>
            <div className='seller-info'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://fiverr.com/getmonir/'
              >
                getmonir
              </a>
            </div>
          </div>
          <a
            className='gig-title'
            target='_blank'
            rel='noreferrer'
            href='https://www.fiverr.com/share/2rg5Yq'
          >
            I will build responsive wordpress website design or website redesign
          </a>
          <div className='py-3'>
            <span className='d-inline h3'>$10</span>
          </div>
          <div className='d-grid'>
            <a
              href='https://www.fiverr.com/share/2rg5Yq'
              target='_blank'
              rel='noreferrer'
              className='btn btn-primary'
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
      <div className='d-grid py-3'>
        <a
          className='btn btn-link'
          target='_blank'
          rel='noreferrer'
          href='https://fiverr.com/inbox/getmonir'
        >
          Contact Me on Fiverr
        </a>
      </div>
    </div>
  );
}

export default GigResponsiveWP;
