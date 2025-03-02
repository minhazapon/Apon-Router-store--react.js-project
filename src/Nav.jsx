import { NavLink } from "react-router-dom"

function Nav() {

    const NavZ = <>
        <li className="  font-semibold "><NavLink to='/'>Home</NavLink></li>
        <li className=" font-semibold "><NavLink to='/about' style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}>About</NavLink></li>
        <li className=" font-semibold "><NavLink to='/shop' style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}>Shop</NavLink></li>
        <li className=" font-semibold "><NavLink to='/contact' style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}>Contact</NavLink></li>
        <li className=" font-semibold "><NavLink to='/service' style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}>Service</NavLink></li>
        <li className=" font-semibold "><NavLink to='/products' style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}>Products</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-white p-5 shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavZ}
                        </ul>
                    </div>
                    <div className=" flex items-center gap-2  md:ml-10 ">
                        <img className=" h-[30px] md:h-[60px]" src="https://cdn-icons-png.flaticon.com/128/3771/3771409.png" alt="" />
                        <p className=" text-xs md:text-xl font-thin text-blue-900  ">Apon <span className=" font-bold text-xs md:text-3xl text-[#71c4b7] ">Router</span> Store</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavZ}
                    </ul>
                </div>
                <div className="navbar-end md:mr-10">
                    <button className="btn bg-[#B5E8E0]">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
