

function Power() {
    return (
        <>
            <div className=" bg-no-repeat bg-cover p-6 "
                style={{
                    backgroundImage: "url(https://i.pinimg.com/736x/4f/d6/22/4fd622433a21e15d7c12d7e2390f87ad.jpg)",
                }}
            >
                <div className=" mt-20 ml-10 mr-10 flex-col md:flex-row lg:flex-row flex justify-between items-center ">
                    <div className=" text-white ">
                        <p className=" text-5xl font-bold ">Network mobility.<br></br>
                            router power..</p>
                        <p className=" mt-5 text-xl ">Meet the latest member of the router family.</p>
                        <div>
                            <button className="btn bg-black text-white w-[300px] mt-8">Buy Now</button>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <img className=" h-[300px] rounded-xl " src="https://i.pcmag.com/imagery/roundups/03e8rgj9ICmR8tMQJQ74SXy-19..v1739463555.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Power
