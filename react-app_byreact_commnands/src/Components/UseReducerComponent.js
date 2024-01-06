import { useEffect, useReducer, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

var initialState = { likes: 0, dislikes: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "like":
      return { likes: state.likes + 1, dislikes: state.dislikes };
    case "dislike":
      return { dislikes: state.dislikes + 1, likes: state.likes };
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const input = useFetchData();
  
  const [product, setProduct] = useState();
  useEffect(() => {
    if (input.data) {
      setProduct(input.data);
    }
  }, [input.data]);
  function handleDislike() {
    dispatch({ type: "dislike" });
  }
  function handlLlike() {
    dispatch({ type: "like" });
  }

  return (
    <div className="container-fluid">
      <h2>Product Details</h2>
      <div className="card p-2" style={{ width: "200px" }}>
        <img
          alt="not found"
          src={product.image}
          className="card-img-top"
          height={150}
        />
        <div className="card-header">
          <p>{product.title}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button onClick={handlLlike} className="btn btn-primary">
            <span className="bi bi-hand-thumbs-up"></span>
          </button>
          <button onClick={handleDislike} className="btn btn-danger ">
            <span className="bi bi-hand-thumbs-down"></span>
          </button>
        </div>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ width: "200px" }}
      >
        <div className="bg-secondary text-white w-25 text-center ms-3">
          {state.likes}
        </div>
        <div className="bg-primary text-dark w-25 text-center me-3">
          {state.dislikes}
        </div>
      </div>
    </div>
  );
}
