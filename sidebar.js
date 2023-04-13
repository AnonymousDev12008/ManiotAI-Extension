// Import all feature modules

const inlineChat = require('./inlineChatPallete');
const inlineSuggestions = require('./inlineSuggestions');
const autoCorrector = require('./autoCorrect');
const autoDebugger = require('./autoDebugger');
const aiTheme = require('./aiTheme');


function initSidebar() {
  // Create the sidebar and add all features to it
  const sidebar = document.createElement('div');

  // Add inline chat feature to the sidebar
  sidebar.appendChild(inlineChat.createChat());

  // Add inline suggestions feature to the sidebar
  sidebar.appendChild(inlineSuggestions.createSuggestions());

  // Add auto corrector feature to the sidebar
  sidebar.appendChild(autoCorrector.createAutoCorrector());

  // Add auto debugger feature to the sidebar
  sidebar.appendChild(autoDebugger.createAutoDebugger());

  

  // Add ai theme feature to the sidebar
  sidebar.appendChild(aiTheme.createAiTheme());

  // Add the sidebar to the document
  document.body.appendChild(sidebar);
}

// Export the initialization function
module.exports = {
  initSidebar,
};
