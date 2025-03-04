import Connect from "./home file/Connect"
import Explore from "./home file/Explore"
import HomeBanner from "./home file/HomeBanner"
import Super from "./home file/Super"

function Home() {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Explore></Explore>
            <Super></Super>
            <Connect></Connect>
        </div>
    )
}

export default Home
