import Image from 'next/image';
import { Shimmer, ToBase64, Meta } from '../components';
const PortfolioItems = ({ portfolioData }) => {
  return (
    <div className='container'>
      <div className='row g-lg-5 g-3'>
        {portfolioData.map((portfolioItem) => {
          const { id, title, subtitle, img, url, compatible } = portfolioItem;
          return (
            <div className='col-lg-6' key={id}>
              <article className='mb-5 project'>
                <a
                  className='text-decoration-none text-black link-primary d-block'
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='mb-3 portfolio-thumb'>
                    <Image
                      width={1280}
                      height={769}
                      unoptimized={() => img}
                      src={img}
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                        Shimmer(1280, 769)
                      )}`}
                      alt={title}
                      layout='responsive'
                      className='img-fluid'
                    />
                  </div>
                  <div>
                    <ul className='project-lang'>
                      {compatible.map((value, i) => {
                        return (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: value }}
                          />
                        );
                      })}
                    </ul>
                    <h4 className='mb-2 text-inherit'>{title}</h4>
                    <span className='text-gray'>{subtitle}</span>
                  </div>
                </a>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioItems;
