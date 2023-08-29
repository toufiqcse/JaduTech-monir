import { RiFacebookCircleFill, RiWhatsappFill } from 'react-icons/ri';
const Hero = () => {
  return (
    <div className='hero py-10 py-lg-11'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8 mx-auto text-center'>
            <h2 className='h2 mb-3 text-link'>
              {`প্রফেশনাল ইকমার্স ওয়েবসাইট ডিজাইন ও ল্যান্ডিং পেইজ ডিজাইনের মাধ্যেমে আপনার অনলাইন বিজনেসর সেল বাড়িয়ে দিবো জাদুর মতো 🪄`}
            </h2>
            <p className='lead'>
              {`আমরা ইতিমধ্যে ৫০+ উদ্যোক্তাদের বিজনেসে হেল্প করতে পেরেছি
              আলহামদুলিল্লাহ।`}
            </p>
            <a
              className='btn btn-primary wp'
              target='_blank'
              href='https://facebook.com/jadutech/'
              rel='noreferrer'
            >
              <RiWhatsappFill /> হোয়াটসঅ্যাপ করুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
