import { useState } from "react";
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section><div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
    <div className="faq-main">
      <div className="faq-list">
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(0)}>
           1. What Is online?
          </button>
          {openIndex === 0 && (
            <div className="faq-answer">
               a platform that helps people shop from India and ship worldwide.
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(1)}>
           2. Do I Get A Locker In India To Store My Purchases?
          </button>
          {openIndex === 1 && (
            <div className="faq-answer">
              Yes, we provide a secure locker system in India to hold your purchases before shipping.
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(2)}>
           3. Can You Manage My Online Orders In India?
          </button>
          {openIndex === 2 && (
            <div className="faq-answer">
              Yes, we can manage and track your online orders placed within India.
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(3)}>
           4. Can You Pickup Package From My Home In India?
          </button>
          {openIndex === 3 && (
            <div className="faq-answer">
              Yes, we offer home pickup services in select Indian cities.
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(4)}>
           5. Can You Shop On My Behalf In India?
          </button>
          {openIndex === 4 && (
            <div className="faq-answer">
              Absolutely! We can shop for you from Indian stores as per your request.
            </div>
          )}
        </div>
      
      </div>
      <div className="faq-video">
        <iframe
          width="520"
          height="320"
          src="https://www.youtube.com/embed/AEp0DE17cQo"
          title="Back To School Shopping in Alphabetical Order!!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </section>
  );
}

