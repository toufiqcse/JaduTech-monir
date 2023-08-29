import Image from "next/image";
import { Shimmer, ToBase64 } from "../components";

const singleProductPage = ({ singleProduct }) => {
    console.log(singleProduct);
    return <div className="my-2 ">
        <p className="fs-6">Single Product page</p>
        <p className="fs-4">{singleProduct.title}</p>
        <Image
            width={1280}
            height={769}
            unoptimized={() => singleProduct.img}
            src={singleProduct.img}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${ToBase64(
                Shimmer(1280, 769)
            )}`}
            alt={singleProduct.title}
            layout="responsive"
            className="img-fluid"
        />
    </div>
}

export const getServerSideProps = async (ctx) => {
    const params = ctx.params;
    try {
        const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch user data');
        }
        const singleProduct = await res.json();
        return {
            props: {
                singleProduct,
            }
        };
    }
    catch (error) {
        return {
            notFound: true,
        }
    }
}



export default singleProductPage