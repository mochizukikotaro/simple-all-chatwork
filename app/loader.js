var scriptElement = document.createElement('script');
scriptElement.setAttribute('src', chrome.extension.getURL('scripts/contents.js'));
document.documentElement.appendChild(scriptElement);
