import React from "react";
import Pagination from "react-js-pagination";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { detailAction } from "../redux/actions/detailAction";

const Paging = ({item, page, handlePageChange}) => {
  // const [page, setPage] = useState(1);
  const dispatch = useDispatch()

  // const handlePageChange = (page) => {
  //   setPage(page);
  //   dispatch(detailAction.getMovieDetail())
  // };

  return (
    <Pagination
    activePage={page}
    itemsCountPerPage={5}
    totalItemsCount={20}
    pageRangeDisplayed={5}
    prevPageText={"‹"}
    nextPageText={"›"}
    onChange={handlePageChange}
  />
  );
};

export default Paging;
