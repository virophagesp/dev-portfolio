import './App.css';
import './css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { darkTheme } from './theme/themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
