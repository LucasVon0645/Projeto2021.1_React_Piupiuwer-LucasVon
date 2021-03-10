import AuthProvider from './hooks/AuthProvider';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';


function App() {


  return (
    <div className="App">
      <AuthProvider>
        <GlobalStyle />
        <Routes/>
      </AuthProvider>
    </div>
  );
}

export default App;
