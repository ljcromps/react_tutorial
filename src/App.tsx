import Alert from "./components/Alert.tsx";
import BootstrapButton from "./components/BootstrapButton.tsx";

function App() {

    return (<div>
        <Alert>
            Hello <b>Lauren </b>
        </Alert>
        <BootstrapButton onClick={() => console.log('button clicked')}>
            Children
        </BootstrapButton>
    </div>)
}

export default App;
