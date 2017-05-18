var scriptElement = document.createElement('script');
scriptElement.setAttribute('src', chrome.runtime.getURL('scripts/contents.js'));
document.documentElement.appendChild(scriptElement);
