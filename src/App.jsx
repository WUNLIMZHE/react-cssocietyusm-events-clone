import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import events from './constants/events';
import Card from './components/Card';
import Header from "./components/Header";
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstCardIndex, setFirstCardIndex] = useState(0);
  const [lastCardIndex, setLastCardIndex] = useState(9);

  const cardPerPage = 9;
  const maxPage = Math.ceil(events.length / cardPerPage);

  function createCard(card) {
    return (
      <Card
        key={card.id}
        name={card.name}
        date={card.date}
        description={card.description}
        tag1={card.tag1}
        tag2={card.tag2}
        img={card.img}
      />
    );
  }

  function handleLeftButtonClick() {
    console.log("Left button got clicked!");
    const nextPage = currentPage - 1;
    if (nextPage >= 1) {
      setCurrentPage(nextPage);
      setFirstCardIndex(firstCardIndex - cardPerPage);
      setLastCardIndex(lastCardIndex - cardPerPage);
    }
  }

  function handleRightButtonClick() {
    console.log("Right button got clicked!");
    const nextPage = currentPage + 1;
    if (nextPage <= maxPage) {
      setCurrentPage(nextPage);
      setFirstCardIndex(firstCardIndex + cardPerPage);
      setLastCardIndex(lastCardIndex + cardPerPage);
    }
  }

  const firstLabel = currentPage > 1 ? "← Prev" : `Page ${currentPage}`;
  const secondLabel = currentPage < maxPage ? "Next →" : `Page ${currentPage}`;

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8">
        <Header headerName="All Events" />
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-center">
          {events.slice(firstCardIndex, lastCardIndex).map(createCard)}
        </section>
        <div className="mx-auto w-max py-10">
          <Button
            label={firstLabel}
            onClick={handleLeftButtonClick}
            disabled={currentPage === 1}
          />
          <Button
            label={secondLabel}
            onClick={handleRightButtonClick}
            disabled={currentPage === maxPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
