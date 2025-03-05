

function AboutBanner() {
    return (
        <>
            <div
                className="hero h-[500px]  w-full md:w-full "
                style={{
                    backgroundImage: "url(https://i.rtings.com/assets/pages/zqvV4jR6/best-routers-for-large-houses-20240416-2-medium.jpg?format=auto)",
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5  text-xl md:text-5xl text-white font-bold">Reliable, Trusted, and Professional Services</h1>
                        <button className="btn bg-black text-white ">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner
