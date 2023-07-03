import React, { useEffect } from "react";
import useMuPdf from "../hooks/useMupdf";
import { Button, Col, Row, Skeleton } from "antd";
import PdfPaper from "../components/PdfPaper";
import useMupdfAction from "../hooks/useMupdfAction";
const Pdf = ({ hooks, url = "/b.pdf" }) => {
  const { loading, docInfo, currentPage, renderedSvg, setCurrentPage } =
    useMuPdf({
      url,
    });
  useMupdfAction({
    setCurrentPage,
    hooks,
    currentPage,
    pagesCount: docInfo?.pagesCount ?? 0,
  });
  if (loading) {
    return <Skeleton loading={loading}></Skeleton>;
  }
  return (
    <>
      <Row>
        <Col span={1}>
          <Button
            type="primary"
            onClick={() => hooks.setDoNext((reload) => ~reload)}
          >
            next
          </Button>
        </Col>
        <Col span={1}>
          <Button
            type="primary"
            onClick={() => hooks.setDoPrev((reload) => ~reload)}
          >
            prev
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PdfPaper
            hooks={hooks}
            docInfo={docInfo}
            renderedSvg={renderedSvg}
          ></PdfPaper>
        </Col>
      </Row>
    </>
  );
};
export default Pdf;
