const palindromes = function(str) {
    // remove any non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // compare to a reversed version of the string
    return cleanStr === cleanStr.split('').reverse().join('');
  };

// Do not edit below this line
module.exports = palindromes;
