import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginPage from './src/screen/Auth/Login/index';
import RegisterPage from './src/screen/Auth/Registration/index'
import RootNavigation from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
