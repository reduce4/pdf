const PdfPaper = ({ docInfo, renderedSvg }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: renderedSvg,
        }}
      ></div>
    </>
  );
};
export default PdfPaper;
