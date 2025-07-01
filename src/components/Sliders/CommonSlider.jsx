import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProductsCird from "../Cards/ProductsCird";

function CommonSlider({ cardData }) {
  const [current, setCurrent] = useState(0);
  // Track the card width for translations
  const [cardWidth, setCardWidth] = useState(358); // Default card width in pixels
  const [gap, setGap] = useState(16); // Default gap between cards (equivalent to gap-4 in Tailwind)
  const [slidesPerView, setSlidesPerView] = useState(1); // Keep this for calculating visible slides

  // Drag functionality states
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  // Update currentTranslate when current slide changes
  useEffect(() => {
    setCurrentTranslate(-current * (cardWidth + gap));
    setPrevTranslate(-current * (cardWidth + gap));
  }, [current, cardWidth, gap]);

  // Update card width based on window width
  useLayoutEffect(() => {
    const updateCardDimensions = () => {
      if (window.innerWidth >= 1920) {
        // 3xl breakpoint
        setCardWidth(376);
        setSlidesPerView(4);
        setGap(30);
      } else if (window.innerWidth >= 1440) {
        // xll breakpoint
        setCardWidth(297);
        setSlidesPerView(4);
        setGap(30);
      } else if (window.innerWidth >= 800) {
        // ll breakpoint
        setCardWidth(320);
        setSlidesPerView(2);
      } else {
        setCardWidth(358);
        setSlidesPerView(1);
      }
    };

    // Initial call
    updateCardDimensions();

    // Add resize listener
    window.addEventListener("resize", updateCardDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateCardDimensions);
  }, []);

  const maxSlide = cardData.length - slidesPerView;

  const previse = () => {
    if (current === 0) setCurrent(maxSlide);
    else setCurrent(current - 1);
  };

  const next = () => {
    if (current === maxSlide) setCurrent(0);
    else setCurrent(current + 1);
  };

  // Drag functionality
  const dragStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
    setPrevTranslate(currentTranslate);
  };

  const drag = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      const currentDragOffset = currentPosition - startPos;
      setDragOffset(currentDragOffset);
      setCurrentTranslate(prevTranslate + currentDragOffset);
    }
  };

  const dragEnd = () => {
    setIsDragging(false);
    const threshold = cardWidth / 3; // Threshold to determine if we should move to next/prev slide

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        previse(); // Dragged right, go to previous slide
      } else {
        next(); // Dragged left, go to next slide
      }
    }

    setDragOffset(0);
  };

  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  // Calculate the transform value based on current slide and drag offset
  const getSliderTransform = () => {
    const baseTransform = -current * (cardWidth + gap);
    return isDragging
      ? `translateX(${baseTransform + dragOffset}px)`
      : `translateX(${baseTransform}px)`;
  };

  return (
    <>
      <div className="relative">
        <div
        onMouseDown={dragStart}
        onMouseMove={drag}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
        onTouchStart={dragStart}
        onTouchMove={drag}
        onTouchEnd={dragEnd}
          className="slider relative overflow-hidden mb-10 h-[430px] ll:h-[388px] xll:h-[447px] 3xl:h-[557px] m-auto w-full max-w-[358px] ll:max-w-[660px] xll:max-w-full cursor-grab xll:mb-0"
          ref={sliderRef}
        >
          <div
            className={`slide flex transition-transform duration-500 ease-in-out z-10 ${
              isDragging ? "cursor-grabbing" : ""
            }`}
            style={{
              transform: getSliderTransform(),
              width: "auto",
              display: "flex",
              gap: `${gap}px`,
              touchAction: "none", // Prevent browser handling of touch events
            }}
            onMouseDown={dragStart}
            onMouseMove={drag}
            onMouseUp={dragEnd}
            onMouseLeave={dragEnd}
            onTouchStart={dragStart}
            onTouchMove={drag}
            onTouchEnd={dragEnd}
          >
            {cardData.map((data, index) => {
              return (
                <div key={index}>
                  <ProductsCird data={data} key={index} isDragging={isDragging} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center gap-5 absolute bottom-0 right-0 z-40 ll:hidden xll:block">
          <button
            onClick={previse}
            className="left p-3 bg-white border-2 border-gray-20 hover:bg-orange-95 transition-colors cursor-pointer rounded-full"
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 12C18 12.4971 17.5971 12.9 17.1 12.9H9.1345L11.7238 15.2512C12.0821 15.5958 12.0933 16.1655 11.7487 16.5238C11.4042 16.8821 10.8345 16.8933 10.4762 16.5487L6.2762 12.6487C6.09973 12.4791 6 12.2448 6 12C6 11.7552 6.09973 11.5209 6.2762 11.3512L10.4762 7.45125C10.8345 7.10673 11.4042 7.11791 11.7487 7.4762C12.0933 7.83449 12.0821 8.40423 11.7238 8.74875L9.1345 11.1L17.1 11.1C17.5971 11.1 18 11.5029 18 12Z"
                fill="#333333"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="right p-3 bg-white border-2 border-gray-20 hover:bg-orange-95 transition-colors cursor-pointer rounded-full xll:ml-5"
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 12C6 11.5029 6.40294 11.1 6.9 11.1H14.8655L12.2762 8.74875C11.9179 8.40423 11.9067 7.83449 12.2513 7.4762C12.5958 7.11791 13.1655 7.10673 13.5238 7.45125L17.7238 11.3512C17.9003 11.5209 18 11.7552 18 12C18 12.2448 17.9003 12.4791 17.7238 12.6487L13.5238 16.5487C13.1655 16.8933 12.5958 16.8821 12.2513 16.5238C11.9067 16.1655 11.9179 15.5958 12.2762 15.2512L14.8655 12.9H6.9C6.40294 12.9 6 12.4971 6 12Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default CommonSlider;
