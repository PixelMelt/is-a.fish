let parts = location.hostname.split('.');
const subdomain = parts.shift();

document.getElementById(`replacetext`).innerHTML = document.getElementById(`replacetext`).innerHTML.replace(`%s`,subdomain)