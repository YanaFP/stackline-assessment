import { useAppSelector } from "../store/hooks";
import { Product, selectProductData } from "../store/productSlice";

const ProductView = () => {
  const data = useAppSelector(selectProductData) as Product;

  return (
    <div
      style={{
        width: "363px",
        padding: "28px",
        position: "relative",
        top: "50px",
      }}
    >
      <div
        className="card"
        style={{
          borderColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          height: "96vw",
        }}
      >
        <div className="view overlay">
          <img
            className="card-img-top"
            style={{
              margin: "25px 0px 10px 52px",
              width: "131px",
              height: "131px",
            }}
            src={data.image}
            alt="Product picture"
          />
        </div>
        <div
          className="card-body"
          style={{ margin: "auto", textAlign: "center" }}
        >
          <h4 className="card-title" style={{ fontSize: "20px" }}>
            {data.title}
          </h4>
          <p
            style={{
              marginBottom: "-16px",
              fontSize: "small",
              color: "#838892",
            }}
          >
            {data.subtitle}
          </p>
          <hr className="my-4" />
          <div
            style={{ display: "flex", flexFlow: "wrap", marginBottom: "-3px" }}
          >
            {data.tags?.map((value, index) => {
              return (
                <span
                  style={{
                    border: "1px solid",
                    padding: "0px 10px 0px 10px",
                    borderColor: "#838892",
                    borderRadius: "5px",
                    margin: "0px 10px 10px 0px",
                    fontSize: "10px",
                    color: "rgb(131, 136, 146)",
                  }}
                  key={index}
                >
                  {value}
                </span>
              );
            })}
          </div>
          <hr className="my-4" />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductView;
