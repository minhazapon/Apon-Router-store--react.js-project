
function Footer() {
    return (
        <>
            <div>
                <div className="mt-20">
                    <footer className="footer sm:footer-horizontal bg-black text-white pl-2 pr-4 pt-20 pb-20">
                        <aside className=" ml-10 ">
                            <img src="https://cdn-icons-png.flaticon.com/128/3771/3771409.png" alt="" />
                            <p>
                                <span className=" text-2xl font-semibold">Apon Router Store</span>
                            </p>
                        </aside>
                        <nav className=" ml-10 md:ml-0 ">
                            <h6 className=" text-xl font-semibold text-white">Social</h6>
                            <div className="grid grid-flow-col gap-4">
                                <a>
                                    <img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png" alt="" />
                                </a>
                                <a>
                                    <img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" />
                                </a>
                                <a>
                                    <img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" />
                                </a>

                            </div>
                        </nav>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer
