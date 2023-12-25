const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);
const allLang = ['en', 'ua'];

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ua';
    location.reload();
}

select.value = hash;
document.querySelector('title').innerHTML = langArr['title-basic'][hash];

for (let key in langArr) {
  let elem = document.querySelector('.lang-' + key);
  if (elem) {
    elem.innerHTML = langArr[key][hash];
}

changeLanguage();
