import { Outlet, useNavigation } from "react-router-dom"
import Nav from "./Nav"
import Loading from "./Loading/Loading"
import { useEffect, useState } from "react"

function RootAppLayout() {

    const navigation = useNavigation();
    const [showLoading, setShowLoading] = useState(false);
    const [loadingTimeout, setLoadingTimeout] = useState(null);

    useEffect(() => {
        if (navigation.state === "loading") {
            setShowLoading(true);

            const timer = setTimeout(() => {
                setShowLoading(false);
            }, 5000);

            setLoadingTimeout(timer);
        } else {
            if (loadingTimeout) {
                clearTimeout(loadingTimeout);
                setShowLoading(false);
            }
        }

        return () => {
            if (loadingTimeout) {
                clearTimeout(loadingTimeout);
            }
        };
    }, [navigation.state]);

    if (showLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    )
}

export default RootAppLayout
