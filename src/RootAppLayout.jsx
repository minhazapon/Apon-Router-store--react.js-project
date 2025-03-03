import { Outlet, useNavigation } from "react-router-dom"
import Nav from "./Nav"
import Loading from "./Loading/Loading"

function RootAppLayout() {

    const navigation = useNavigation()

    if (navigation.state === "loading") {

        return <Loading></Loading>

    }

    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    )
}

export default RootAppLayout
