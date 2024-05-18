import React, { useState } from 'react';

const FAQs = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#D3D3D3',
      padding: '20px',
      margin: 0
    },
    h1: {
      textAlign: 'center',
      color: '#333'
    },
    faq: {
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      padding: '20px',
      transition: 'all 0.3s ease'
    },
    faqHover: {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    },
    question: {
      fontWeight: 'bold',
      cursor: 'pointer',
      position: 'relative',
      paddingRight: '20px'
    },
    questionAfter: {
      content: '"+"',
      position: 'absolute',
      right: 0,
      fontSize: '20px',
      lineHeight: 1
    },
    questionOpenAfter: {
      content: '"-"'
    },
    answer: {
      display: 'none',
      marginTop: '10px'
    },
    answerVisible: {
      display: 'block'
    }
  };

  const faqs = [
    {
      question: 'How do I register to vote?',
      answer: 'You can register to vote by filling out an online application on the Electoral Commission\'s website or by submitting a paper form to your local registration office.'
    },
    {
      question: 'What documents do I need to register to vote?',
      answer: 'Typically, you will need proof of identity and residency, such as a driver\'s license, passport, or utility bill.'
    },
    {
      question: 'Can I check if I am already registered to vote?',
      answer: 'Yes, you can check your registration status online through the Electoral Commission\'s voter registration portal or by contacting your local election office.'
    }
  ];

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{ ...styles.faq, ...(openQuestionIndex === index ? styles.faqHover : {}) }}
        >
          <div
            style={{ ...styles.question, ...(openQuestionIndex === index ? styles.questionOpenAfter : styles.questionAfter) }}
            onClick={() => handleQuestionClick(index)}
          >
            {faq.question}
          </div>
          <div style={{ ...styles.answer, ...(openQuestionIndex === index ? styles.answerVisible : {}) }}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
