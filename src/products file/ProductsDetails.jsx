import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductsDetails() {

    const { id } = useParams(); // Get the product ID from the URL
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        // Fetch the product details using the ID
        fetch('router.json')
            .then((res) => res.json())
            .then((data) => {
                const product = data.find((item) => item.id === id); // Find the product by ID
                setProductDetails(product); // Set the product details
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <div className=" flex justify-center p-6">
                <div className="card bg-base-100 w-full border-[1px] hover:border-[#B5E8E0] ">
                    <figure>
                        <img
                            className=" border-b-[1px] h-[300px] w-full "
                            src={productDetails.image}
                            alt=""
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"> {productDetails.name} </h2>
                        <p>Company: {productDetails.company} </p>
                        <p>Details: {productDetails.details} </p>
                        <p>Price: {productDetails.price} </p>
                        <p>Brand: {productDetails.brand} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsDetails;
