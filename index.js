function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
   
    let nested = document.getElementById('nested').querySelector('.target');
    return nested;
}


function increaseRankBy(n){
  const rank = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i < rank.length; i++) {
    rank[i].textContent = parseInt(rank[i].textContent)+n;
  }
}


function deepestChild() {
  let parent = document.querySelector('#grand-node div div div div');
 return parent; 
}