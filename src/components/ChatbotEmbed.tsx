import React from 'react';

const ChatbotEmbed = () => {
  return (
    <div style={{ width: '100%', height: '500px' }} className='chatbotContainer'>
      <iframe className="chatbotIframe"
        src="https://leadershipconferencechatbot-lyart.vercel.app/"
        width="100%"
        height="100%"
        title="Leadership Conference Chatbot"
      />
    </div>
  );
};

export default ChatbotEmbed;
