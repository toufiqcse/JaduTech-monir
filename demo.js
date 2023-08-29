import { useState } from "react";
import { Hero, Portfolios, Shimmer, ToBase64 } from "../components";
import Image from "next/image";
import Link from "next/link";

const index = ({ portfolioData }) => {
  return (
    <>
      <>
        <div className="container">
          <div className="row g-lg-5 g-3 mb-8">
            <div className="col-lg-12 mx-auto"></div>

            {portfolioData.map((val, key) => {
              return (
                <div className="col-lg-6" key={key}>
                  <article className="mb-5 project">
                    <Link href={`http://localhost:3000/${val.title}`} passHref>
                      <a
                        className="text-decoration-none text-black link-primary d-block"
                        // target="_blank"
                        // rel="noreferrer"
                      >
                        <div className="mb-3 portfolio-thumb">
                          <Image
                            width={1280}
                            height={769}
                            unoptimized={() => val.img}
                            src={val.img}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                              Shimmer(1280, 769)
                            )}`}
                            alt={val.title}
                            layout="responsive"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <ul className="project-lang">
                            {val.compatible.map((value, i) => {
                              return (
                                <li
                                  key={i}
                                  dangerouslySetInnerHTML={{ __html: value }}
                                />
                              );
                            })}
                          </ul>
                          <h4 className="mb-2 text-inherit">{val.title}</h4>
                          <span className="text-gray">{val.subtitle}</span>
                        </div>
                      </a>
                    </Link>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(`http://localhost:3000/api/products`);
    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }
    const portfolioData = await res.json();
    return {
      props: { portfolioData },
    };
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      props: {},
    };
  }
}

export default index;
