import { useEffect, useState } from "react";
import MuBackend from "../oo/MuBackend";

const doc = new MuBackend();
const useMuPdf = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [docInfo, setDocInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedSvg, setRenderedSvg] = useState(null);

  useEffect(() => {
    const fdata = async () => {
      await doc._init(url);
      setLoading(false);
      const pageInfo = await doc.pageInfo;
      setDocInfo(pageInfo);
    };
    fdata();
  }, []);
  useEffect(() => {
    if (loading) {
      return;
    }
    const fdata = async () => {
      const svg = await doc.render.renderSVG(currentPage);
      setRenderedSvg(svg);
    };
    fdata();
  }, [currentPage, loading]);
  return {
    loading,
    docInfo,
    currentPage,
    setCurrentPage,
    renderedSvg,
  };
};
export default useMuPdf;
