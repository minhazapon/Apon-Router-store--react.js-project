import axios from "axios"
import { useEffect, useState } from "react"

function Repairing() {

    const [service, setService] = useState([])

    useEffect(() => {
        axios.get('service.json')
            .then(res => {
                setService(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <div className=" bg-no-repeat bg-cover " style={{
                backgroundImage: "url(https://i.pinimg.com/originals/22/a5/a7/22a5a7b9dbc0e29ccef006dea5981367.png)",
            }}>
                <div className="ml-10 mr-10 p-5 mb-16">
                    <div>
                        <p className=" text-center text-6xl font-bold text-black ">Repairing Services</p>
                    </div>
                    <div className=" flex justify-center mt-10 ">
                        <div className=" grid  md:grid-cols-4 gap-10 ">
                            {
                                service.map(cardData => <ul key={cardData.id}>
                                    <div>
                                        <div className=" bg-white border-[1px] w-[250px] p-3 ">
                                            <div>
                                                <img className="h-[70px]" src={cardData.image} alt="" />
                                            </div>
                                            <p className=" text-xl font-semibold text-black mt-5">{cardData.name}</p>
                                            <p className=" text-black mt-5">{cardData.service}</p>
                                            <div>
                                                <button className=" btn text-white bg-black mt-5 ">Read more</button>
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

export default Repairing 
