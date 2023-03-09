import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../../../models/Category";
import { getThreadsByCategory } from "../../../services/DataService";
import MainHeader from "./MainHeader";
import ThreadCard from "./ThreadCard";

const Main = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<Category | undefined>();
  const [threadCards, setThreadCards] = useState<Array<JSX.Element> | null>(
    null
  );

  useEffect(() => {
    console.log("main categoryId", categoryId);

    if (categoryId && Number(categoryId) > 0) {
      getThreadsByCategory(categoryId).then((threads) => {
        const cards = threads.map((th) => {
          return <ThreadCard key={`thread-${th.id}`} thread={th} />;
        });
        if (!category) {
          setCategory(threads[0].category);
        }
        setThreadCards(cards);
      });
    }
  }, [categoryId]);

  return (
    <main className="content">
      <MainHeader category={category}/>
        <div>{threadCards}</div>
    </main>
  );
};

export default Main;
