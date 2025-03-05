import Connect from "./home file/Connect"
import Explore from "./home file/Explore"
import Gear from "./home file/Gear"
import HomeBanner from "./home file/HomeBanner"
import Power from "./home file/Power"
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
            <Gear></Gear>
            <Power></Power>
        </div>
    )
}

export default Home
