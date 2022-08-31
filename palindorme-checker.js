function palindrome(str) {
    let myRegexp = /[A-Za-z0-9]+/g;
    let matchStr = str.match(myRegexp).join('').toLowerCase();
    let marchArr = matchStr.split(/|/)
    let reArr = [];
    for(let i=marchArr.length-1; i>=0; i--){
       reArr.push(marchArr[i]);
    };
    let result = reArr.join('')===matchStr;
    return result;
  }
  
  palindrome("1 eye for of 1 eye.");