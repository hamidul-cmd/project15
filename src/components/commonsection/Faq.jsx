import React, { useState, useEffect } from "react";
import CommonTitle from "../CommonTitle";
import Faqcards from "../Cards/Faqcards";

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [config, setConfig] = useState({ columns: 1, totalFaqs: 4 });

  const faqData = [
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "How do I initiate a return?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "How can I unsubscribe from the newsletter?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "Do you offer exchanges for products?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "How can I place an order on Klothink?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "What is your shipping policy?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "Are there any additional fees for returns?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "How do I create an account on Klothink?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "Can I change my account information?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
    {
      question: "Are my personal details secure on Klothink?",
      answer:
        "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
    },
  ];

  useEffect(() => {
    const updateConfig = () => {
      const width = window.innerWidth;
      if (width < 780) {
        setConfig({ columns: 1, totalFaqs: 4 });
      } else if (width >= 780 && width < 1440) {
        setConfig({ columns: 2, totalFaqs: 8 });
      } else {
        setConfig({ columns: 3, totalFaqs: 12 });
      }
    };

    updateConfig();
    window.addEventListener("resize", updateConfig);
    return () => window.removeEventListener("resize", updateConfig);
  }, []);

  const selectedFaqs = faqData.slice(0, config.totalFaqs);
  const chunkSize = 4;
  const faqChunks = Array.from({ length: config.columns }, (_, i) =>
    selectedFaqs.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <>
      <section id="faq" className="section">
        <CommonTitle
          capsule="FAQ"
          title="Questions? We Have Answers."
          pera="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
          }}
          className="gap-5 3xl:gap-7.5"
        >
          {faqChunks.map((chunk, col) => (
            <div key={col} className="space-y-4">
              {chunk.map((data, index) => {
                const actualIndex = col * chunkSize + index;
                return (
                  <Faqcards
                    key={actualIndex}
                    faq={data.question}
                    ans={data.answer}
                    isOpen={openFaqIndex === actualIndex}
                    toggleFaq={() => {
                      setOpenFaqIndex(
                        openFaqIndex === actualIndex ? null : actualIndex
                      );
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq;
