import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import events from './constants/events';
import Card from './components/Card';
import Header from "./components/Header";
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  //copy all event details from event array to eventList array
  const [eventList, setEventList] = useState([...events]);
  
  //update the current viewing page 
  const [currentPage, setCurrentPage] = useState(1);

  //update the first index of the card that will be rendered 
  const [firstCardIndex, setFirstCardIndex] = useState(0);

  //update the last index of the card that will be rendered 
  const [lastCardIndex, setLastCardIndex] = useState(9);

  const cardPerPage = 9;
  // const maxPage = Math.ceil(eventList.length / cardPerPage);

  const[maxPage, setMaxPage] = useState(Math.ceil(eventList.length / cardPerPage));

  //runs after the component renders
  /**
   * The second argument is an array of dependencies. The effect function will re-run whenever any of the dependencies 
   * in this array change. If the array is empty ([]), the effect runs only once after the initial render. 
   * If there are no dependencies provided, the effect runs after every render.
   */
  useEffect(() => {
    // Recalculate the maximum number of pages based on the number of events and cards per page
    setMaxPage(Math.ceil(eventList.length / cardPerPage));
    console.log("eventList", eventList);
    console.log("currentPage", currentPage);
    
     // Calculate new indices
    const newFirstCardIndex = (currentPage - 1) * cardPerPage;
    const newLastCardIndex = Math.min(newFirstCardIndex + cardPerPage, eventList.length);

    // Update state
    setFirstCardIndex(newFirstCardIndex);
    setLastCardIndex(newLastCardIndex);
  }, [eventList, firstCardIndex, lastCardIndex]); //Dependencies Array:

  function createCard(card) {
    return (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        date={card.date}
        description={card.description}
        tag1={card.tag1}
        tag2={card.tag2}
        img={card.img}
        onClick={handleDetailsButtonClick}
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

  const navigate = useNavigate();

  function handleDetailsButtonClick(id) {
    console.log("Looking for details for event id: ", id);
    const event = eventList.find(e => e.id === id);
    console.log("Event found: ", event);
    if (event) {
      console.log("Event found!");
      navigate('/event', { state: { event } }); // Ensure the state is passed here
    } else {
      console.log("Event not found");
    }
  }

  function handleSearch(searchType){
    console.log("searchType: ", searchType);
    if (searchType != "All"){
      setEventList(events.filter((event) => event.session === searchType));
    } else{
      setEventList(events);
    }
    setCurrentPage(1);
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8">
        <Header headerName="All Events" onClick={handleSearch} currentPage={currentPage} firstIndex={firstCardIndex} lastIndex={lastCardIndex}/>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-center">
          {eventList.slice(firstCardIndex, lastCardIndex).map(createCard)}
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
