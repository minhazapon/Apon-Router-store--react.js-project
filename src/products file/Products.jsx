import { useLoaderData } from "react-router-dom"
import Details from "./DetailsOfProducts"
import Banner from "./ProductsBanner";

function Products() {

    const RouterData = useLoaderData();

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="m-16">
                <p className="text-center font-thin text-black text-5xl">Best Routers : </p>
                <div>
                    <div>
                        {
                            RouterData.map(router => <Details key={router.id} router={router} ></Details>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
