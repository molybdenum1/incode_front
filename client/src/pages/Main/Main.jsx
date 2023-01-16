import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import MyTable from "../../components/Table/Table";
import QuotesService from "../../services/quotes.service";
import { Content } from "./main.style";

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
      <NavBar />
      <Content>
        <MyTable quotes={quotes} />
      </Content>
    </div>
  );
}

export default Main;
