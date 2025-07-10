import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "What Is online?", answer: "A platform that helps people shop from India and ship worldwide." },
    { question: "Do I Get A Locker In India To Store My Purchases?", answer: "Yes, we provide a secure locker system in India to hold your purchases before shipping." },
    { question: "Can You Manage My Online Orders In India?", answer: "Yes, we can manage and track your online orders placed within India." },
    { question: "Can You Pickup Package From My Home In India?", answer: "Yes, we offer home pickup services in select Indian cities." },
    { question: "Can You Shop On My Behalf In India?", answer: "Absolutely! We can shop for you from Indian stores as per your request." }
  ];

  return (
    <section className="py-5">
      <div className="container section-title text-center mb-4" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="container">
        <div className="row g-4">

          <div className="col-md-6">
            {faqData.map((item, index) => (
              <div className="faq-item" key={index}>
                <p className="faq-question m-0" onClick={() => toggleAnswer(index)}>
                  <span>{index + 1}. {item.question}</span>
                  <span className={`faq-arrow ${openIndex === index ? "rotate" : ""}`}>▼</span>
                </p>
                <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-6">
            <div className="faq-video">
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/AEp0DE17cQo"
                title="FAQ Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
