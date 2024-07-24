import React from "react";
import CategoryList from "../components/categoryList/CategoryList";
import MainContent from "../components/mainContent/MainContent";
const IndexPage = () => {
  return (
    <div>
      <CategoryList></CategoryList>

      <MainContent></MainContent>
    </div>
  );
};

export default IndexPage;
