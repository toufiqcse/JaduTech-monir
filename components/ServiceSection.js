import {
  RiBugLine,
  RiChatQuoteLine,
  RiLightbulbFlashLine,
  RiSendPlaneLine,
  RiShoppingBag3Line,
  RiShoppingCart2Fill,
  RiShoppingCart2Line,
  RiSmartphoneLine,
} from 'react-icons/ri';
import { FaWordpress } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <section className='py-50 py-100--lg bg-light'>
      <div className='container'>
        <div className='heading text-center mb-50 col-lg-8 mx-auto'>
          <h2 className='h1 fw-700'>
            Effective websites delivered with care, passion, and precision
          </h2>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='pb-20'>
              <div className='text-primary fs-50'>
                <FaWordpress />
              </div>
              <h4>WordPress</h4>
              <p className='mb-0'>
                With over 4 years of experience with WordPress, I can help you
                with themes, plugins, functions, and more on your install.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='pb-20'>
              <div className='text-primary fs-50'>
                <RiShoppingBag3Line />
              </div>
              <h4>eCommerce</h4>
              <p className='mb-0'>
                Numerous projects completed using the leading system for
                WordPress, called WooCommerce for fully functional stores.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='pb-20'>
              <div className='text-primary fs-50'>
                <RiSmartphoneLine />
              </div>
              <h4>Responsive</h4>
              <p className='mb-0'>
                Ensuring your website is optimised for tablets and phones is
                essential today and has a direct impact on your Google ranking.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='pb-20'>
              <div className='text-primary fs-50'>
                <RiSendPlaneLine />
              </div>
              <h4>Landing Pages</h4>
              <p className='mb-0'>
                Whether it’s a new app, event, ebook, or anything else you need
                to sell, a landing page will ensure high conversions.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='pb-20'>
              <div className='text-primary fs-50'>
                <RiBugLine />
              </div>
              <h4>Fixing</h4>
              <p className='mb-0'>
                I can assist in diagnosing and fixing WordPress issues; whether
                it be styling, functional or theme-related to get you.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='pb-20'>
              <div className='text-primary fs-50'>
                <RiLightbulbFlashLine />
              </div>
              <h4>Consulting</h4>
              <p className='mb-0'>
                Helping your business get the advantages and best practices from
                your WordPress website with my vast WP experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
