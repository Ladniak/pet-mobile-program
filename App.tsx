import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "./src/screen/Auth/Login";

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;
