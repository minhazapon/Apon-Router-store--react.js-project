import { NavLink } from "react-router-dom"


function ErrorPage() {
    return (
        <div className=" m-20 ">
            <div>
                <div className=" flex justify-center ">
                    <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="" />
                </div>
                <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "yellow" : "" })}>
                    <div className=" flex justify-center "><button className=" bg-black btn w-[300px] text-white ">Go Back To Home Page</button></div>
                </NavLink>
            </div>
        </div>
    )
}

export default ErrorPage
