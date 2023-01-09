import './App.css';
import { TiTick, TiTimes } from "react-icons/ti";

function App() {
  return (
    <div className="App">
      <Cart1 />
      <Cart2 />
      <Cart3 />
    </div>
  );
}

function Cart1() {
  return (
    <div className="InnerDiv">
      <h4 className="offer">FREE</h4>
      <h5>
        <span className="rate">$ 0</span>/month
      </h5>
      <hr />
      <p><TiTick /> Single User</p>
      <p><TiTick /> 5GB storage</p>
      <p><TiTick /> Unlimited Public Projects</p>
      <p><TiTimes /> Community Access</p>
      <p className="dull"><TiTimes /> Unlimited Private Projects</p>
      <p className="dull"><TiTimes /> Dedicated Phone Support</p>
      <p className="dull"><TiTimes /> Free Subdomain</p>
      <p className="dull"><TiTimes /> Monthly Status Reports</p>
      <button>BUTTON</button>
    </div>
  );
}
function Cart2() {
  return (
    <div className="InnerDiv">
      <h4 className="offer">PLUS</h4>
      <h5><span className="rate">$ 9</span>/month</h5>
      <hr />
      <p className="bold"><TiTick /> 5 Users</p>
      <p><TiTick /> 5GB storage</p>
      <p><TiTick /> Unlimited Public Projects</p>
      <p><TiTick /> Community Access</p>
      <p><TiTick /> Unlimited Private Projects</p>
      <p><TiTick /> Dedicated Phone Support</p>
      <p><TiTick /> Free Subdomain</p>
      <p className="dull">   <TiTimes /> Monthly Status Reports </p>
      <button>BUTTON</button>
    </div>
  );
}

function Cart3() {
  return (
    <div className="InnerDiv">
      <h4 className="offer">PRO</h4>
      <h5><span className="rate">$.49</span>/month</h5>
      <hr />
      <p className="bold"><TiTick /> Unlimited Users </p>
      <p><TiTick /> 5GB storage </p>
      <p><TiTick /> Unlimited Public Projects </p>
      <p><TiTick /> Community Access </p>
      <p><TiTick /> Unlimited Private Projects </p>
      <p><TiTick /> Dedicated Phone Support </p>
      <p><TiTick />
      <span className="bold"> Unlimited</span> Free Subdomains </p>
      <p><TiTick /> Monthly Status Reports </p>
      <button>BUTTON</button>
    </div>
  );
}



export default App;
