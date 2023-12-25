const select = document.querySelector('select');

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function change Language() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes (hash)) {
    location.href = window.location.pathname + '#' + lang;
  }
}
