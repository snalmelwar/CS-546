/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let palindromes = (string) => {
      let return_obj = {};
      if (!Array.isArray (string)) throw 'input not an array';
      if (string.length == 0) throw 'array length is 0';
      for (let i = 0; i < string.length; i++) {
          if (typeof(string[i]) != 'string') throw 'input is not a string';
          if (string[i].trim() === '') throw 'input string length is empty';
          if (string[i].match(/[0-9a-zA-Z]/) == null) throw 'input string doesnt consist of any alphanumeric characters';
          let a = string[i].toLowerCase().replace(/\W/g, '');
          let a_reverse = a.split("").reverse().join("");
          if (a_reverse === a) {
              return_obj[a] = true;
          } else {
              return_obj[a] = false;
          };
      };
      return (return_obj);
};

let censorWords = (string, badWordsList) => {
      if (typeof(string) != 'string') throw 'input not a string';
      if (string.trim() === '') throw 'input string is empty';
      if (!Array.isArray(badWordsList)) throw 'input badwordlist not an array';
      if (badWordsList.length == 0) throw 'input badwordList is empty';
      let replaced_str = ['!', '@', '$', '#'];
      let start_pos = 0
      let current_pos = 0;
      let badWordsDet = [];
      for (let i = 0; i < badWordsList.length; i++) {
          if (typeof(badWordsList[i]) != 'string') throw 'badWordsList element not a string';
          let word_index = string.indexOf(badWordsList[i]);
          if (word_index === -1) throw 'badWordsList element is not in the string';
          let word_len = badWordsList[i].length;
          badWordsDet.push ({'word': badWordsList[i], 
          'index': word_index, 
          'length': word_len});
      };
      badWordsDet = badWordsDet.filter(obj1 => obj1.index != -1);
      badWordsDet.sort( (obj1, obj2) => {
          return obj1.index - obj2.index;
      });
      for (let i = 0; i < badWordsDet.length; i++) {
          let replace_word = ''
          let j = start_pos;
          let sum = 0;
          while ( sum < badWordsDet[i]['length']) {
              replace_word = replace_word + replaced_str[j];
              current_pos = j;
              j += 1;
              sum += 1;
              if (j === 4) {
                  j = 0;
                  current_pos = 0;
                  badWordsDet[i]['length'] = badWordsDet[i]['length'] - sum;
                  sum = 0;
              };
          };
          string = string.replace(badWordsDet[i]['word'], replace_word);
          start_pos = current_pos + 1;
      };
      return (string);
};


let distance = (string, word1, word2) => {
      if (typeof(string) != 'string' || typeof(word1) != 'string' || typeof(word2) != 'string') throw 'input parameter not strings';
      if (string.trim() == '' || word1.trim() == '' || word2.trim() == '') throw 'input parameter are empty';
      if (string.match(/[0-9a-zA-Z]/) == null) throw 'input string made of punctuation symbols';
      if (word1.match(/[0-9a-zA-Z]/) == null) throw 'input word1 made of punctuation symbols';
      if (word2.match(/[0-9a-zA-Z]/) == null) throw 'input word2 made of punctuation symbols';
      if (string.split(' ').length < 2) throw 'input string less than 2 words';
      if (word1 === word2) throw 'word1 and word2 are equal';
      string = string.toUpperCase();
      word1 = word1.toUpperCase();
      word2 = word2.toUpperCase();
      if (string.indexOf(word1) == -1 || string.indexOf(word2) == -1) throw 'word not present in string';
      if (string.indexOf(word1) > string.indexOf (word2)) throw 'word2 is before word1';
      let string_arr = string.toUpperCase().replace(/\W\s/g, ' ').split(' ');
      let idx = string_arr.indexOf(word1.toUpperCase());
      let word_index1 = [];
      while (idx != -1 ) {
          word_index1.push(idx);
          idx = string_arr.indexOf(word1.toUpperCase(), idx + 1);
      };
  
      idx = string_arr.indexOf(word2.toUpperCase());
      let word_index2 = [];
      while (idx != -1 ) {
          word_index2.push(idx);
          idx = string_arr.indexOf(word2.toUpperCase(), idx + 1);
      };
      // if (word_index1.length == 0 || word_index2.length == 0) throw 'words not present in string';
      let index_diff = -1;
      for (let i = 0; i < word_index1.length; i++) {
          for (let j = 0; j < word_index2.length; j++) {
              if (index_diff === -1 && word_index1[i] < word_index2[j]) {
                  index_diff = Math.abs(word_index1[i] - word_index2[j]);
              } else if (index_diff > Math.abs(word_index1[i] - word_index2[j]) && word_index1[i] < word_index2[j]) {
                  index_diff = Math.abs(word_index1[i] - word_index2[j]);
              };
          };
      };
      return (index_diff);
};

export {palindromes, censorWords, distance};