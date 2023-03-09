import { groupBy } from "lodash";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { getTopCategories } from "../../../services/DataService";
import TopCategory from "./TopCategory";

const RightMenu = () => {
  const { width } = useWindowDimensions();
  const [topCategories, setTopCategories] = useState<
    Array<JSX.Element> | undefined
  >();

  useEffect(() => {
    getTopCategories().then((res) => {
      const topCatThreads = groupBy(res, "category");
      const topElements = [];
      for (let key in topCatThreads) {
        const currentTop = topCatThreads[key];
        topElements.push(<TopCategory key={key} topCategories={currentTop} />);
      }
      setTopCategories(topElements);
    });
  }, []);

  if (width <= 768) {
    return null;
  }

  return <div className="rightmenu rightmenu-container">{topCategories}</div>;
};

export default RightMenu;
