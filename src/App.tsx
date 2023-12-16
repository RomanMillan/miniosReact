import { Card, minions } from "./Card";
import { Navbar } from "./Navbar";

export default function App() {
  return (
    <>
      
      {/* Componente  Navbar */}
        <Navbar/>
      
      <div className="container">
        <h1>Lista de minions</h1>
        {/* Componentes  Card */}
        {minions.map((minion, index) => (
          <Card key={index} minion={minion} />
        ))}
      </div>


    </>
  );
}
