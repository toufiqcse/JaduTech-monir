import {
  RiEmotionHappyLine,
  RiMessage2Line,
  RiRefreshLine,
  RiTimeLine,
} from 'react-icons/ri';

function WhyMe() {
  return (
    <div className='mb-10'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-lg'>
            <div className=' mb-4 mb-lg-0 text-center'>
              <div className='fs-1'>
                <RiRefreshLine />
              </div>
              <h5>Unlimited Revisions</h5>
              <span className='d-block'>
                Untill your satisfaction remain revisions.
              </span>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className=' mb-4 mb-lg-0 text-center'>
              <div className='fs-1'>
                <RiTimeLine />
              </div>
              <h5>On-Time Delivery</h5>
              <span className='d-block'>
                Your order will be delivery within promised time.
              </span>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='text-center'>
              <div className='fs-1'>
                <RiEmotionHappyLine />
              </div>
              <h5>100% Satisfaction</h5>
              <span className='d-block'>
                I will give you 100% satisfaction guarantee
              </span>
            </div>
          </div>
          <div className='col-sm-6 col-lg'>
            <div className='text-center'>
              <div className='fs-1'>
                <RiMessage2Line />
              </div>
              <h5>24/7 Support</h5>
              <span className='d-block'>
                Contact me 24 hours a day, 7 days a week.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyMe;
