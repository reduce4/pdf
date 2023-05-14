import { useEffect } from "react";

const usePopMenu = ({ hooks }) => {
  useEffect(() => {
    if (hooks.doSelect == null) {
      return;
    }
    hooks.setDoFloatShow({
      x: hooks.doSelect.x,
      y: hooks.doSelect.y,
    });
  }, [hooks.doSelect]);
};
export default usePopMenu;
