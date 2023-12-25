const select = document.querySelector('select');

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (lallLang.includes (hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
}

select.value = hash;
document.querySelector('title').innerHTML = langArr['unit'][hash];
for (let key in langArr) {
  let elem = document.querySelector('.ing-' + key);
  if (elem) {
    elem.innerHTML = langArr[key][hash];
  }
}
