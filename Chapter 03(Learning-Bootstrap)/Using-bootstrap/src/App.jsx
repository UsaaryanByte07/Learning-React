import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <>
      <div className="m-3">
        <ul className="list-group list-group-numbered">
          <li className="list-group-item">Home</li>
          <li className="list-group-item active">Contact</li>
          <li className="list-group-item disabled">Products</li>
        </ul>
      </div>
    </>
  );
}

export default App;
