import {NavigationContainer} from "@react-navigation/native"
import Tabs from "./tabs"
import axios from "axios"

const App = () => {
    return (
    <NavigationContainer independent={true} >
        <Tabs />
    </NavigationContainer>)
}

export default App;