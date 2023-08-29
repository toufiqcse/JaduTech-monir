import { useState } from "react";
import Image from "next/image";
import { Shimmer, ToBase64, Meta } from "../components";
import portfolioData from "../data/portfolio";

const Portfolios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProduct, setFilterProduct] = useState("");
  return (
    <>
      <div className="container">
        <div className="row g-lg-5 g-3 mb-8">
          <div className="col-lg-12 mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="search-form mb-2"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          {portfolioData
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.key
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div className="col-lg-6" key={key}>
                  <article className="mb-5 project">
                    <a
                      className="text-decoration-none text-black link-primary d-block"
                      // href={val.url}
                      href={`http://localhost:3000/${val.title}`}
                      target="_blank"
                      rel="noreferrer"
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
                  </article>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Portfolios;
