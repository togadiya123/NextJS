import {useRouter} from "next/router";

const Product = () => {

    const router = useRouter();
    console.log({router});

    return (
        <h1>
            Product
        </h1>
    );
};

export default Product;