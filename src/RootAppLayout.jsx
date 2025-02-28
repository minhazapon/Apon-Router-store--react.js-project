import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function RootAppLayout() {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    )
}

export default RootAppLayout
