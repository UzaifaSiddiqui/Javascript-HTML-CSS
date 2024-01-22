let tag = document.querySelector("div").innerHTML;
console.log(tag);

let ul = document.querySelector("ul");
console.log(ul);

//Method to trevarse upward in html document

console.log(ul.parentNode.parentNode.parentNode.parentNode);

console.log(ul.parentElement.parentElement.parentElement.parentElement);

//Method to traverse downward in html document

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

// DIFFERENCE B/W node.childNodes & node.children

console.log(ul.childNodes);
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild)

/* 
-> we get elements the indentation is count as text.
*/

/// SIBLING TRAVERSAL :

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling)