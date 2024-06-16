const listElems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listElems.length}`);

for (const elem of listElems) {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.querySelectorAll('li').length}`);
}
