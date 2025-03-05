import Connect from "./home file/Connect"
import Explore from "./home file/Explore"
import HomeBanner from "./home file/HomeBanner"
import See from "./home file/See"
import Super from "./home file/Super"

function Home() {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Explore></Explore>
            <Super></Super>
            <Connect></Connect>
            <See></See>
        </div>
    )
}

export default Home
