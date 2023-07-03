import { useEffect } from "react";

const useMupdfAction = ({ setCurrentPage, hooks, pagesCount, currentPage }) => {
  useEffect(() => {
    if (currentPage < pagesCount) {
      setCurrentPage((page) => page + 1);
    }
  }, [hooks.doNext]);
  useEffect(() => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  }, [hooks.doPrev]);
};
export default useMupdfAction;
