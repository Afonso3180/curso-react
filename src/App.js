import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

    const nome = "Neto"

    return (
        <div className="App">
            <h1>Testando CSS</h1>
            <Frase />
            <Frase />
            <SayMyName nome='Afonso' />
            <SayMyName nome='Ariella' />
            <SayMyName nome={nome} />
            <Pessoa 
                nome="Isabela" 
                idade = "26" 
                profissao = "advogada" 
                foto="https://www.github.com/joana.png"/>
            <List />
        </div>
    );
}

export default App;
