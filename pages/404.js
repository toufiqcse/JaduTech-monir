import Link from 'next/link';
const Error404 = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 mx-auto'>
            <div className='error-404'>
              <h1>404 Not Found</h1>
              <Link href='/'>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
