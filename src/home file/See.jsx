

function See() {

    return (
        <>
            <div className=" bg-no-repeat bg-cover p-6 "
                style={{
                    backgroundImage: "url(https://i.pinimg.com/736x/4f/d6/22/4fd622433a21e15d7c12d7e2390f87ad.jpg)",
                }}
            >
                <div className=" mt-20 ml-10 mr-10 flex-col md:flex-row lg:flex-row flex justify-between items-center ">
                    <div className="mt-6 md:mt-0">
                        <img className=" h-[300px] rounded-xl " src="https://storage-asset.msi.com/global/picture/news/2023/wifi/gaming-router-20230314-1.jpg" alt="" />
                    </div>
                    <div className=" text-white ">
                        <p className=" text-5xl font-bold ">Network Router: <br></br>See what else<br></br> it can do.</p>
                        <p className=" mt-5 text-xl ">Meet the latest member of the router family.</p>
                        <div>
                            <button className="btn bg-black text-white w-[300px] mt-8">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default See
