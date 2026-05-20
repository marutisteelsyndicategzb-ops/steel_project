import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, ChevronRight, Phone, Mail, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Chatbot.module.css';
import { companyDetails } from '../../data/data';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Welcome to Maruti Steel Syndicate. How can I assist you today?",
      options: [
        { label: "Explore Products", value: "products" },
        { label: "About Our Company", value: "about" },
        { label: "Contact Sales", value: "contact" },
        { label: "Request a Quote", value: "quote" }
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesAreaRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: option.label
    };
    setMessages(prev => [...prev, userMsg]);
    
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botMsg = { id: Date.now() + 1, type: 'bot' };

      switch (option.value) {
        case 'products':
          botMsg.text = "We supply premium Cold Rolled (CR), Hot Rolled (HR), and Chequered steel sheets. Which category interests you?";
          botMsg.options = [
            { label: "CR Sheets", value: "cr_sheets" },
            { label: "HR Sheets and Plates", value: "hr_sheets" },
            { label: "Chequered Sheets", value: "chequered_sheets" },
            { label: "View All Products", value: "all_products" },
            { label: "Back", value: "start" }
          ];
          break;
        case 'cr_sheets':
          botMsg.text = "Our Cold Rolled (CR) sheets offer superior surface finish, high dimensional accuracy, and exceptional formability (Grade IS 513).";
          botMsg.options = [
            { label: "Go to CR Sheets Page", value: "nav_cr" },
            { label: "Back", value: "products" }
          ];
          break;
        case 'nav_cr':
          navigate('/products/cr-sheets');
          setIsOpen(false);
          return;
        case 'hr_sheets':
          botMsg.text = "Our Hot Rolled (HR) Sheets and Plates are engineered for high tensile strength, load-bearing reliability, and structural weldability (Grade IS 2062).";
          botMsg.options = [
            { label: "Go to HR Sheets and Plates Page", value: "nav_hr" },
            { label: "Back to Products", value: "products" }
          ];
          break;
        case 'nav_hr':
          navigate('/products/hr-sheets');
          setIsOpen(false);
          return;
        case 'chequered_sheets':
          botMsg.text = "Our Chequered sheets feature a distinct anti-skid pattern design (diamond/tear-drop) for industrial safety and floor durability.";
          botMsg.options = [
            { label: "Go to Chequered Sheets Page", value: "nav_chequered" },
            { label: "Back to Products", value: "products" }
          ];
          break;
        case 'nav_chequered':
          navigate('/products/chequered-sheets');
          setIsOpen(false);
          return;
        case 'all_products':
          navigate('/products');
          setIsOpen(false);
          return;
        case 'about':
          botMsg.text = "Maruti Steel Syndicate has a legacy of technical mastery and trust. Would you like to view our corporate profile?";
          botMsg.options = [
            { label: "View About Page", value: "nav_about" },
            { label: "Back", value: "start" }
          ];
          break;
        case 'nav_about':
          navigate('/about');
          setIsOpen(false);
          return;
        case 'contact':
          botMsg.text = "Our technical experts are available to assist you. How would you like to connect?";
          botMsg.options = [
            { label: "Visit Contact Page", value: "nav_contact" },
            { label: "Call Sales Support", value: "call" },
            { label: "Back", value: "start" }
          ];
          break;
        case 'nav_contact':
          navigate('/contact');
          setIsOpen(false);
          return;
        case 'call':
          window.location.href = `tel:+91${companyDetails.whatsapp}`;
          botMsg.text = "Initiating call to our industrial sales department...";
          break;
        case 'quote':
          botMsg.text = "For bulk industrial pricing, please visit our product detail pages and click 'Get Best Price'.";
          botMsg.options = [
            { label: "Visit Products", value: "products" },
            { label: "Back", value: "start" }
          ];
          break;
        case 'start':
          botMsg.text = "How else can I assist your project today?";
          botMsg.options = [
            { label: "Explore Products", value: "products" },
            { label: "About Our Company", value: "about" },
            { label: "Contact Sales", value: "contact" }
          ];
          break;
        default:
          botMsg.text = "I'm sorry, I didn't understand that. Would you like to restart?";
          botMsg.options = [{ label: "Back to Start", value: "start" }];
      }

      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className={styles.chatbotContainer}>
      <button 
        className={`${styles.chatBtn} ${isOpen ? styles.hidden : ''}`} 
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={28} />
      </button>

      <div className={`${styles.chatWindow} ${isOpen ? styles.active : ''}`}>
        <div className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.botAvatar}>MSS</div>
            <div>
              <h3>MSS Assistant</h3>
              <span className={styles.status}><span className={styles.dot}></span> Active</span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.messagesArea} ref={messagesAreaRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.messageWrapper} ${msg.type === 'user' ? styles.userWrapper : ''}`}>
              <div className={styles.messageContent}>
                <div className={`${styles.message} ${msg.type === 'user' ? styles.userMessage : styles.botMessage}`}>
                  {msg.text}
                </div>
                {msg.options && (
                  <div className={styles.optionsArea}>
                    {msg.options.map((opt, idx) => (
                      <button 
                        key={idx} 
                        className={styles.optionBtn}
                        onClick={() => handleOptionClick(opt)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={styles.typingIndicator}>
              <span></span><span></span><span></span>
            </div>
          )}
        </div>

        <div className={styles.chatFooter}>
          <p>Technical Steel Solutions Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
