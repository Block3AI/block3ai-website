(() => {
  const launcher = document.querySelector('.chat-launcher');
  const panel = document.getElementById('bp-embedded-webchat');
  const status = document.querySelector('.chat-status');
  const minimize = document.querySelector('.chat-minimize');
  let loading = false;
  let ready = false;
  let expanded = false;
  let timeout;

  // Botpress 3.7 marks its embedded host aria-hidden; expose the visible chat.
  const exposeChat = () => {
    const host = panel.querySelector('#webchat-root');
    if (host) host.removeAttribute('aria-hidden');
  };
  new MutationObserver(exposeChat).observe(panel, { childList: true, subtree: true });

  function setExpanded(value) {
    expanded = value;
    panel.hidden = !value;
    launcher.setAttribute('aria-expanded', String(value));
    document.body.classList.toggle('chat-expanded', value);
    document.querySelector('.chat-chevron').textContent = value ? '↓' : '↑';
    if (ready) window.botpress[value ? 'open' : 'close']();
    if (value) minimize.focus();
    else launcher.focus();
  }

  function fail() {
    clearTimeout(timeout);
    status.hidden = false;
    status.textContent = 'Nova AI could not connect. Please refresh to try again, or email info@block3ai.com.';
  }

  function loadChat() {
    loading = true;
    timeout = setTimeout(fail, 20000);
    const inject = document.createElement('script');
    inject.src = 'https://cdn.botpress.cloud/webchat/v3.7/inject.js';
    inject.onerror = fail;
    inject.onload = () => {
      if (!window.botpress) return fail();
      window.botpress.on('webchat:initialized', () => {
        clearTimeout(timeout);
        // v3.7 renders in a shadow root; use its embedded mode and scoped styles.
        window.botpress.config({ configuration: {
          embeddedChatId: 'bp-chat-content',
          botDescription: 'Nova AI is a chatbot project in the Block3AI developer portfolio. Ask about AI, blockchain, and Web3.',
          additionalStylesheet: '.bpWebchat{position:relative!important;inset:auto!important;width:100%!important;height:100%!important;max-height:100%!important;border-radius:0!important}.bpFab{display:none!important}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}'
        } });
        ready = true;
        status.hidden = true;
        window.botpress[expanded ? 'open' : 'close']();
      });
      window.botpress.on('webchat:closed', () => {
        if (expanded) setExpanded(false);
      });
      const config = document.createElement('script');
      config.src = 'https://files.bpcontent.cloud/2025/02/05/18/20250205181547-UTVGEOAY.js';
      config.defer = true;
      config.onerror = fail;
      panel.append(config);
    };
    panel.append(inject);
  }

  launcher.addEventListener('click', () => {
    setExpanded(!expanded);
    if (expanded && !loading) loadChat();
  });
  minimize.addEventListener('click', () => setExpanded(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && expanded) setExpanded(false);
  });
})();
