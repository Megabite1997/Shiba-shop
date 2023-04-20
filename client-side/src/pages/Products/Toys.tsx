import React, { FC } from "react";
import ListItemsCard from "../../components/ListItemsCard";
import { listToyItems } from "../../dummyData";

interface ToysProps {}

const Toys: FC<ToysProps> = ({}) => {
  return (
    <div className="h-full bg-yellow-400 pt-40 pb-10">
      <ListItemsCard title="Toys" list={listToyItems} />
    </div>
  );
};

export default Toys;
