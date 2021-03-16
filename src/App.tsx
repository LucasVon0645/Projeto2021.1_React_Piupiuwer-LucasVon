import AuthProvider from './hooks/AuthProvider';
import Route from './routes/index';
import GlobalStyle from './styles/global';


function App() {


  return (
    <div className="App">
      <AuthProvider>
        <GlobalStyle />
        <Route/>
      </AuthProvider>
    </div>
  );
}

export default App;
