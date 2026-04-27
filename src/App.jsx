import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList.jsx";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
          Aplikasi Inventory Masjid
        </h1>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <InventoryForm />
          <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #eee' }} />
          <InventoryList />
        </div>
      </div>
    </div>
  );
}

export default App;