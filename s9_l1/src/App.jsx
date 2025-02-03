import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImagineComponent from "./components/ImagineComponent";

function App() {
  return (
    <div className="main-container">
      <ButtonComponent className="my-button" buttonText="Aggiungi!" />
      <ImagineComponent
        src="https://images.unsplash.com/photo-1738070593303-fbb151013701?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Immagine"
      />
    </div>
  );
}

export default App;
