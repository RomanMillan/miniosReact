import { Card } from "./Card";
import { minions } from "./Minion";
import { Navbar } from "./Navbar";


export default function App() {
  return (
    <>
      
      {/* Componente  Navbar */}
        <Navbar/>
      
      <div className="container">

        <h1>Lista de minions</h1>
        
        <div className="row">
        {/* Componentes  Card */}
        {minions.map((minion, index) => (
          <div className="col" key={index}>
            <Card key={index} minion={minion} />
          </div>
        ))}
        </div>
        

      </div>

    </>
  );
}
