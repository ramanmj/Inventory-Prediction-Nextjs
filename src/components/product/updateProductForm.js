import { response } from "express";
import axios from "axios";

export default function ProductUpdate(){
    const [product, setProductName] = useState([]);
    const [err, seterror] = useState([]);
    const [Description, setDescription] = useState([]);
    const [Weight, setWeight] = useState([]);
    const [Size, setSize] = useState([]);

    
  useEffect(() => {
    fetchProduct();
  }, []);

  const data = {
    product,
    Description,
    Weight,
    Size
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:7101/products/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProducts(data);
      console.log(products);
      
    } catch (error) {
      seterror("Error fetching data",error);
      console.log(err)
    }
  };


    return(
        <div>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              value={Productname}
              className="border border-indigo-600"
              
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={Description}
              className="border border-indigo-600"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Weight:
            <input
              type="text"
              className="border border-indigo-600"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            size:
            <input
              className="border border-indigo-600"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </label>
        </div>
        <div>
        <label>
          Price:
          <input
            type="text"
            className="border border-indigo-600"
            value={price}
            placeholder={response.data.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        </div>
        <button type="submit">Create Product</button>
      </form>
      {message && <p>{message}</p>} */}
    </div>
        // Productname
        // Description
        // price
        // status
        // weight
        // size
    )
}


 