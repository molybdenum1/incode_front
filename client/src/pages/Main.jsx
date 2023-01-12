import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyTable from "../components/Table";
import QuotesService from "../services/quotes.service";

const service = new QuotesService();

function Main() {
  const quotes = useSelector((state) => state.quotesReducer.quotes);
  const dispatch = useDispatch();

  useEffect(() => {
    service.fetchData((data) =>
      dispatch({ type: "FETCH_QUOTES", payload: data })
    );
  });

  return (
    <div>
      <div className="content">
        <MyTable quotes={quotes} />
      </div>
    </div>
  );
}

export default Main;
