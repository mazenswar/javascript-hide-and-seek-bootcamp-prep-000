function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(parent, child) {
   
    //let nested = document.getElementById(parent).getElementsByClassName(child);
    //return nested;
}


function increaseRankBy(n){
  const rank = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i < rank.length; i++) {
    rank[i].textContent = parseInt(rank[i].textContent)+n;
  }
}


function deepestChild() {
  let parent = document.getElementById('grand-node');
  
  if(parent.children[0].textContent) {
    return parent.children[0].textContent;
  }
  else if(parent.children[0][0].textContent) {
    return parent.children[0][0].textContent;
  }
  else if (parent.children[0][0][0].textContent) {
    return parent.children[0][0][0].textContent;
  }
  else if (parent.children[0][0][0][0].textContent) {
    return parent.children[0][0][0][0].textContent;
  }
}