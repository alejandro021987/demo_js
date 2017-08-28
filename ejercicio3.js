class App extends React.Component {
  constructor(props) {
    super(props)
    this.getProducts(function(response, err){ 
      this.products = response;
    });
  }
  
  getProducts(callback){
    var args = {
            headers: { "Content-Type": "application/json" }
        };

    var Client = require('node-rest-client').Client;

    client = new Client();
    client.get("http://localhost:3000/products/list", args ,function(data, response) {
        callback(response, err);
    });

  }

  render() {
    return <ProductList options={this.products.products} />
  }
  
}

class ProductList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let options = this.props.options
    return (
      <div>  
        <ul>
          {options.map(option => <li>{option}</li>)}
        </ul>
       
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
