import {NavigationContainer} from "@react-navigation/native"
import Tabs from "./tabs"

const App = () => {
    return (
    <NavigationContainer independent={true} >
        <Tabs />
    </NavigationContainer>)
}

export default App;