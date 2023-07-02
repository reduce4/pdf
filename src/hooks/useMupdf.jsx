import { useEffect, useState } from "react";
import { mupdf } from "../worker/mupdf-async";

async function openURL(url, progressive, prefetch) {
  try {
    let headResponse = await fetch(url, { method: "HEAD" });
    if (!headResponse.ok) throw new Error("Could not fetch document.");
    let acceptRanges = headResponse.headers.get("Accept-Ranges");
    let contentLength = headResponse.headers.get("Content-Length");
    let contentType = headResponse.headers.get("Content-Type");
    console.log("HEAD", url);
    console.log("Content-Length", contentLength);
    console.log("Content-Type", contentType);
    let bodyResponse = await fetch(url);
    let buffer = await bodyResponse.arrayBuffer();
    let doc = await mupdf.openDocumentFromBuffer(buffer, contentType);
    console.log("doc", doc);
  } catch (error) {
    console.log("errror", error);
    // showDocumentError("openURL", error);
    //antd error
  }
}

const useMuPdf = () => {
  useEffect(() => {
    openURL("/b.pdf");
  }, []);
};
export default useMuPdf;
