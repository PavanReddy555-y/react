import React from "react";

export class TwoWaybinding_Cmponent extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      categories: [],
      products: [],
    };
    this.ChangeCategory = this.ChangeCategory.bind(this);
  }

  componentDidMount() {
    this.GetCategories();
    this.GetProducts("https://fakestoreapi.com/products");
  }

  GetCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((resp) => resp.json())
      .then((data) => {
        data.unshift("all");
        this.setState({
          categories: data,
        });
      });
  }

  ChangeCategory(e) {
    if (e.target.value != "all") {
      this.GetProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    } else {
      this.GetProducts("https://fakestoreapi.com/products");
    }
  }

  GetProducts(url) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <header>
          <h2 className="bg-danger text-white text-center p-2 m-2">
            <span className="bi bi-cart4 m-2"></span>
            Shopping
          </h2>
        </header>
        <section
          className="row d-flex container-fluid"
          style={{ height: "510px" }}
        >
          <nav className="col-2">
            <select onChange={this.ChangeCategory} className="form-select">
              {this.state.categories.map((category) => (
                <option key={category} value={category}>
                  {category.toUpperCase()}
                </option>
              ))}
            </select>
          </nav>
          <main className="col-8 ">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Preview</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                      <img
                        alt="Not found"
                        src={product.image}
                        height="50"
                        width="50"
                      />
                    </td>
                    <td>
                      <span className="bi bi-star-fill text-success"></span>
                      {product.rating.rate}[{product.rating.count}]
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </section>
      </div>
    );
  }
}
