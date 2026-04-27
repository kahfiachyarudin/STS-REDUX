import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/inventorySlice";

const InventoryForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      dispatch(addItem({ name, quantity: parseInt(quantity) }));
      setName("");
      setQuantity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama Barang:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Kuantitas:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Tambah Barang</button>
    </form>
  );
};

export default InventoryForm;