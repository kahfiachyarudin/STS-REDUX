import { useSelector } from "react-redux";

export default function InventoryList() {
  const items = useSelector((state) => state.inventory.items);

  return (
    <div>
      <h2>Daftar Barang</h2>
      {items.length === 0 ? (
        <p>Belum ada barang yang ditambahkan.</p>
      ) : (
        <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Kuantitas</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}