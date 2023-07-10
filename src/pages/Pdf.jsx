import React, { useEffect } from "react";
import useMuPdf from "../hooks/useMupdf";
import { Button, Col, Row, Skeleton } from "antd";
import PdfPaper from "../components/PdfPaper";
import useMupdfAction from "../hooks/useMupdfAction";

const Pdf = ({ hooks, url = "/b.pdf" }) => {
  const {
    loading,
    docInfo,
    currentPage,
    renderedSvg,
    setCurrentPage,
    text,
    onZoom,
    doc,
    setPageRect,
    setDpi,
    zoomLevels,
    zoom,
    setZoom,
    pageRect,
  } = useMuPdf({
    url,
  });
  useMupdfAction({
    setCurrentPage,
    hooks,
    currentPage,
    pagesCount: docInfo?.pagesCount ?? 0,
    onZoom,
    zoomLevels,
    doc,
    setPageRect,
    setDpi,
    zoom,
    setZoom,
    docInfo,
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
            onClick={() => hooks.setDoPrev((reload) => ~reload)}
          >
            prev
          </Button>
        </Col>
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
            onClick={() => hooks.setDoShrink((reload) => ~reload)}
          >
            small
          </Button>
        </Col>
        <Col span={1}>
          <Button
            type="primary"
            onClick={() => hooks.setDoEnLarge((reload) => ~reload)}
          >
            large
          </Button>
        </Col>
      </Row>
      <PdfPaper
        pageRect={pageRect}
        hooks={hooks}
        docInfo={docInfo}
        renderedSvg={renderedSvg}
        renderedText={text}
      ></PdfPaper>
    </>
  );
};
export default Pdf;
