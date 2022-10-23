import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const categorieNews = useLoaderData();
  return (
    <div>
      <h2>This is Category {categorieNews.length}</h2>
      {categorieNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
