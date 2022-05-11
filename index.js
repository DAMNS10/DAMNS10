const favicon = document.querySelector('#favicon')
if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
  favicon.href="favicon-dark.png"
};

function myFunction (){
  return false
};