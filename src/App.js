import "./App.css";
import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebase";

function App() {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const imagesListRef = ref(storage, "/");
    listAll(imagesListRef).then((response) => {
      setImages([]);
      response.items.forEach((item) => {
        const name = item.name;
        getDownloadURL(item).then((url) => {
          setImages((prev) => [...prev, { url, name }]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Dropdown</button>
      {show ? (
        <div className="dropdown-content">
          {images.map((item, k) => {
            const click = () => {
              setShow(false);
              setSelected(item);
            };
            return (
              <button key={k} onClick={click}>
                {item.name}
              </button>
            );
          })}
        </div>
      ) : null}
      {selected ? <img src={selected.url} alt="gif" /> : null}
    </div>
  );
}

export default App;
