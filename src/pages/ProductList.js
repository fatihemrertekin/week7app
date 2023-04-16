import { Col, Row} from "antd";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { products } = useSelector((state) => state.product);

  return (
    <div>
      <Row>
        <Col xs={24} sm={18} md={18} lg={20} xl={20}>
          <Row>
            {products.map((product) => {
                return (
                  <Col xs={24} sm={12} md={8} lg={6} xl={6} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                );
              })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}


export default ProductList;