import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


function Premium() {

    const [wifi, setWifi] = useState([])

    useEffect(() => {
        axios.get('wifi.json')
            .then(res => {
                setWifi(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    })

    return (
        <>
            <div>
                <div className=" ml-10 mr-10 p-5 mt-20 ">
                    <div>
                        <p className=" text-center text-xl md:text-5xl font-semibold text-black ">Some Premium Products</p>
                    </div>
                    <div className=" mt-5 flex justify-center pl-5 pr-5 ">
                        <input
                            className="w-full border-[1px] h-[50px] p-2"
                            placeholder="Search Here"
                            type="search"
                            name="search" id="" />
                    </div>
                    <div className=" flex justify-center mt-10 ">
                        <div className=" grid  md:grid-cols-3 gap-5 ">
                            {
                                wifi.map(products => <ul key={products.id}>
                                    <div className="card bg-base-100 w-96 h-[500px] border-[1px] ">
                                        <figure>
                                            <img
                                                className=" w-full h-[350px] "
                                                src={products.image}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title"> {products.name} </h2>
                                            <p> {products.details} </p>
                                            <div className="card-actions justify-end">
                                                <button className="btn bg-black text-white w-full mt-5 ">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </ul>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Premium
