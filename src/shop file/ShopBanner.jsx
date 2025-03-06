

function ShopBanner() {
    return (
        <div>
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-vector/shopping-online-website-futuristic-design_23-2148528312.jpg?t=st=1741237698~exp=1741241298~hmac=a2d6752ad16e0d56d500c305aba49222756f9e0da1e28ee153c0dcb579d7cf95&w=1060)",
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Shopping With Us</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopBanner
