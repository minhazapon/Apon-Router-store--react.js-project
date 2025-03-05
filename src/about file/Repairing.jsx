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
            <div className="">
                <div className="mt-20 ml-10 mr-10 p-5 mb-16">
                    <div>
                        <p className=" text-center text-6xl font-bold text-black ">Repairing Services</p>
                    </div>
                    <div>
                        <div>
                            {
                                service.map(cardData => <ul key={cardData.id}>

                                    <div>
                                        <p> {cardData.name} </p>

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
