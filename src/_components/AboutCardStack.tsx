"use client";

import React from "react";
import Card from "./_primitives/card";
import { AboutItem } from "~/interfaces/about";

export default function AboutCardList({
  aboutItems,
}: {
  aboutItems: AboutItem[];
}) {
  const [aboutList, setAboutList] = React.useState(
    aboutItems.map((item, index) => ({ ...item, color: setColor(index) })),
  );
  const [currentItem, setCurrentItem] = React.useState(aboutList[0]);

  console.log(aboutList);

  function setColor(index: number) {
    const colors = [
      "bg-primary text-primary-content",
      // "bg-accent text-accent-content",
    ];
    return colors[index % colors.length];
  }

  function popItem() {
    const popped = aboutList.shift();
    if (popped) {
      setCurrentItem(aboutList[0]);
      setAboutList([...aboutList, popped]);
    }
  }

  return (
    <>
      <h2 className="font-bold">{currentItem?.title}</h2>
      <p>{currentItem?.description}</p>
      <div className="flex h-full w-full flex-1">
        <div className="stack w-full" onClick={() => popItem()}>
          {aboutList?.map((item, index) => {
            return (
              <Card
                key={index}
                className={`h-full w-full min-w-min rounded bg-cover bg-fixed bg-center ${item.color}`}
                style={{
                  cursor: "pointer",
                  backgroundImage: `url(${item.image})`,
                }}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
