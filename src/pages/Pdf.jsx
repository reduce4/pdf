import { Watermark, Input, FloatButton } from "antd";
import usePopMenu from "../hooks/usePopMenu";
import { RobotOutlined } from "@ant-design/icons";
const pdfData = {
  name: "reduce plugin system design",
  author: "happysmile",
  content: `
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  reduce is a software helping people learning knowledge!!!\n
  `,
};
const Pdf = ({ hooks }) => {
  usePopMenu({ hooks });
  return (
    <Watermark content={pdfData.author}>
      <Input.TextArea
        value={pdfData.content}
        autoSize
        style={{
          minHeight: 300,
        }}
        onSelect={(e) => {
          const selectText = e.target.value.slice(
            e.target.selectionStart,
            e.target.selectionEnd
          );
          if (selectText != "") {
            hooks.setDoSelect({
              selectText,
              x: e.nativeEvent.layerX,
              y: e.nativeEvent.layerY,
            });
          } else {
            hooks.setDoFloatShow(null);
          }
        }}
      />
      {hooks.doFloatShow && (
        <FloatButton.Group
          shape="circle"
          style={{ left: hooks.doFloatShow.x + 50, top: hooks.doFloatShow.y }}
        >
          <FloatButton
            onClick={() => hooks.setDoFloatButtonClick((reload) => ~reload)}
            icon={<RobotOutlined />}
          />
        </FloatButton.Group>
      )}
    </Watermark>
  );
};
export default Pdf;
