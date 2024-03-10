import { useAppSelector } from "../store/hooks";
import {
  Product,
  selectProductData,
  selectloading,
} from "../store/productSlice";

const Table = () => {
  const data = useAppSelector(selectProductData) as Product;
  const loading = useAppSelector(selectloading);

  return (
    <div className="my-table">
      <table className="table table-sm table-new ">
        <thead>
          <tr>
            <th scope="col">WEEK ENDING</th>
            <th scope="col">RETAIL SALES</th>
            <th scope="col">WHOLESALE SALES</th>
            <th scope="col">UNITS SOLD</th>
            <th scope="col">RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {data.sales?.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.weekEnding}</td>
                <td>${value.retailSales}</td>
                <td>{value.wholesaleSales}</td>
                <td>${value.unitsSold}</td>
                <td>${value.retailerMargin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
