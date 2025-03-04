

function Details({ router }) {

    const { image, name, company, details, price, brand } = router

    return (
        <div>
            <div className="card bg-base-100 w-96 border-[1px] hover:border-[#B5E8E0] ">
                <figure>
                    <img className=" border-b-[1px] h-[300px] w-full "
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p>Company: {company} </p>
                    <p>Details: {details} </p>
                    <p>Price: {price} </p>
                    <p>Brand: {brand} </p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#B5E8E0] text-black">$buy Now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Details
