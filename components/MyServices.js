import {
  RiArrowLeftRightLine,
  RiCheckboxMultipleFill,
  RiCodeBoxLine,
  RiFlashlightLine,
  RiHtml5Fill,
  RiPlug2Line,
  RiRocket2Line,
  RiShoppingBag3Line,
  RiShoppingCartLine,
  RiSwapBoxLine,
  RiTableLine,
  RiToolsFill,
} from 'react-icons/ri';

function MyServices() {
  return (
    <div className='bg-light py-7 py-lg-11'>
      <div className='container'>
        <div className='text-center mb-7'>
          <h2 className='display-5'>My WordPress Services</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiCodeBoxLine />
              </div>
              <h5>Custom WordPress Development</h5>
              <p className='mb-0'>
                {`It’s important to highlight the identity of your website with a well-defined theme for your brand. My services in WordPress theme development are an excellent asset to help you finalize your project.`}
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiPlug2Line />
              </div>
              <h5>WordPress Plugin Development</h5>
              <p className='mb-0'>{`I enhance your website by implementing plugins, widgets, and all the important features. My WordPress plugin development service guarantees you a significant increase in revenues and user retention rates.`}</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiTableLine />
              </div>
              <h5>WordPress Theme Customization</h5>
              <p className='mb-0'>
                {`I offer my WordPress theme customization services to fit your
                project’s aesthetic and vision, all at an affordable price and a
                100% satisfaction rate.`}
              </p>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiShoppingCartLine />
              </div>
              <h5>WordPress eCommerce Website</h5>
              <p className='mb-0'>
                {`My services in WordPress eCommerce solutions will transform your current site into an attractive online store by making full use of the widely popular WooCommerce plugin.`}
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiRocket2Line />
              </div>
              <h5>WordPress Speed Optimization</h5>
              <p className='mb-0'>
                {`My WordPress development services guarantee that your website will always run at optimal speed. Your users will enjoy a smooth and fast experience on your WordPress site.`}
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiSwapBoxLine />
              </div>
              <h5>WordPress Migration</h5>
              <p className='mb-0'>{`Migrating your current site to its new WordPress location can seem a bit challenging. I offer WordPress migration services to safely and accurately transfer your project.`}</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiHtml5Fill />
              </div>
              <h5>WordPress Conversion</h5>
              <p className='mb-0'>
                {`I offer impeccable conversion services from HTML to WordPress for your project requirements. I make sure to deliver a result-driven website with a fully manageable backend.`}
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiCheckboxMultipleFill />
              </div>
              <h5>WordPress Maintenance</h5>
              <p className='mb-0'>
                I provide monthly and annual maintenance services for your
                WordPress site. These include bug fixing, software updating, and
                compatibility checks.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='mb-4'>
              <div className='fs-1'>
                <RiToolsFill />
              </div>
              <h5>WordPress API Integration</h5>
              <p className='mb-0'>
                I offer impeccable services for WordPress API Integration, API
                development, and other types of customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
