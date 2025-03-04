

function Super() {
    return (
        <div className=" bg-no-repeat bg-cover p-6 "
            style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3772.jpg?t=st=1741083102~exp=1741086702~hmac=ad5a663fcb62b21361e66a6f73b86c17a6091342ee996d13215e3b836dab0f31&w=1060)",
            }}
        >
            <div className=" mt-20 ml-10 mr-10 flex justify-between items-center ">
                <div>
                    <p className=" text-5xl font-bold ">The new super<br></br> powerful Galaxy<br></br> Note9</p>
                    <p className=" mt-5 text-xl ">Meet the latest member of the router family.</p>
                    <div>
                        <button className="btn bg-black text-white w-[300px] mt-8">Buy Now</button>
                    </div>
                </div>
                <div>
                    <img className=" h-[300px] rounded-xl " src="https://img.freepik.com/free-photo/high-angle-wi-fi-router-with-vacuum-cleaner_23-2148779238.jpg?t=st=1741082917~exp=1741086517~hmac=81d6fb2c739f2f3468a3c6464260437fcc9f417ebb164a0016f4673cf70c8614&w=1060" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Super
