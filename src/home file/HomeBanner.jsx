

function HomeBanner() {
    return (
        <div>
            <div className=" ml-10 mr-10 p-5 flex-col md:flex-row lg:flex-row flex justify-between items-center">
                <div>
                    <p className=" text-center  md:text-start text-xl md:text-6xl font-bold ">Discover a <br></br>world without<br></br> limits
                    </p>
                    <p className="  text-center  md:text-start mt-5 font-thin">It doesn't take a genius to see why<br></br> switching to the Galaxy S9 | S9+ is a good idea.
                    </p>
                    <div className=" flex justify-center md:flex md:justify-start">
                        <button className=" btn w-[150px] md:w-[300px] mt-5 bg-black text-white ">Learn more</button>
                    </div>
                </div>
                <div className=" flex justify-start ">
                    <img className="h-[200px] md:h-[400px]" src="https://img.freepik.com/free-vector/internet-day-concept-illustration_114360-5303.jpg?t=st=1741081704~exp=1741085304~hmac=0806f05da9d6ef7c0af910a0c0eb773123f189958c8b7170457c621b693531db&w=740" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
