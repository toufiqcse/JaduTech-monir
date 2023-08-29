import { Portfolios } from '../components';
const portfolio = () => {
  return (
    <>
      <div className='hero py-10 py-lg-11'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 mx-auto text-center'>
              <h2 className='h3 mb-3'>
                {`এখানে আমাদের ক্লাইটদের কাজ গুলো রয়েছে, তাই আপনার পছন্দের ডেমো দেখতে সার্চ করুন`}
              </h2>
              <p>
                যেমন আপনি মধু নিয়ে ল্যান্ডিং পেইজ দেখতে চাচ্ছেন, এখন লিখুন{' '}
                <span className='text-link'>মধু</span> অথবা{' '}
                <span className='text-link'>Modhu</span> অথবা{' '}
                <span className='text-link'>Honey</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Portfolios />
    </>
  );
};

export default portfolio;
