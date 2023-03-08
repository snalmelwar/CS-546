/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let sortAndFilter = (array, sortBy1, sortBy2, filterBy, filterByTerm) => {
  if (!Array.isArray(array)) throw 'input array is not an array';
  if (array.length < 2 ) throw 'input array length is less than 2';
  let obj_keys = ''
  let filter_by_term_sum = 0;
  for (let i = 0; i < array.length; i++) {
      if (typeof(array[i]) != 'object') throw 'array element is not an object';
      if (Object.keys(array[i]).length == 0) throw 'object is empty';
      if (obj_keys == '') {
          obj_keys = Object.keys(array[i])
      } else if (JSON.stringify(obj_keys) != JSON.stringify(Object.keys(array[i]))) throw 'object keys all not same';
      for (const key in array[i]) {
          if (typeof(array[i][key]) != 'string') throw 'all values in objects not string';
          if (array[i][key].trim() == '') throw 'object values are empty';
          if (array[i][key] == filterByTerm) {
              filter_by_term_sum += 1;
          };
      };
  };
  if (!Array.isArray(sortBy1)) throw '2nd array parameter not array';
  if (sortBy1.length != 2) throw '2nd parameter array length not 2';
  if (!Array.isArray(sortBy2)) throw '3rd array parameter not array';
  if (sortBy2.length != 2) throw '3rd parameter array length not 2';
  if (typeof(filterByTerm) != 'string') throw 'filterByTerm not a string';
  if (filterByTerm.trim() == '') throw 'filterByTerm is empty';
  for (let i = 0; i < 2; i++) {
      if (typeof(sortBy1[i]) != 'string' || sortBy1[i].trim() == '') throw '2nd parameter elements not string or value has empty space';
      if (typeof(sortBy2[i]) != 'string' || sortBy2[i].trim() == '') throw '3rd parameter elements not string or value has empty space';
  };
  if (sortBy1[1] != 'asc' && sortBy1[1] != 'desc') throw '2nd parameter index 1 is not asc or desc';
  if (sortBy2[1] != 'asc' && sortBy2[1] != 'desc') throw '3rd parameter index 1 is not asc or desc';
  if (filter_by_term_sum == 0) throw 'no object has the value as filterByTerm';
  if (!obj_keys.includes(sortBy1[0])) throw '2nd parameter doesnt have key in object';
  if (!obj_keys.includes(sortBy2[0])) throw '3rd parameter doesnt have key in object';
  if (!obj_keys.includes(filterBy)) throw 'filterBy term doesnt have key in object';
  let sortObjFunction = (obj1_val, obj2_val, sortBy) => {
      if (obj1_val > obj2_val) {
          if (sortBy === "asc") {
              return 1;
          } else {
              return -1;
          };
      };
      if (obj2_val > obj1_val) {
          if (sortBy === "asc") {
              return -1;
          } else {
              return 1;
          };
      };
      
      return 0;
  };
  array.sort(function (obj1, obj2) {
      let obj_val1 = obj1[sortBy1[0]];
      let obj_val2 = obj2[sortBy1[0]];
      let val = sortObjFunction (obj_val1, obj_val2, sortBy1[1]);
      if (val === 0) {
          obj_val2 = obj1[sortBy2[0]];
          obj_val2 = obj2[sortBy2[0]];
          return (sortObjFunction (obj_val1, obj_val2, sortBy2[1]));
      } else {
          return val;
      };
  });

  const array1 = array.filter(obj1 => obj1[filterBy] === filterByTerm);
  return (array1);
};

let merge = (...args) => {
  if (args.length == 0) throw 'length of parameters is 0';

  let new_arr = [];
  let i = 0;
  for (let i = 0; i < args.length; i++) {
      if (!Array.isArray(args[i])) throw 'Input parameter not an array';
      if (args[i].length == 0) throw 'Input array empty';
      new_arr = new_arr.concat(args[i]);
  }
  let new_arr_len = new_arr.length;
  while (i < new_arr.length) {
      if (Array.isArray(new_arr[i])) {
          new_arr = new_arr.flat();
      } else {
          //console.log(typeof(new_arr[i]));
          if (typeof(new_arr[i]) != 'number' && typeof(new_arr[i]) != 'string') throw 'input parameter not a number, string or array';
          i+= 1;
      }
  };
  return (new_arr.sort((a, b) => {
      if (typeof a == 'number' && typeof b == 'number') {
          return a-b;
      } else if (typeof a == 'number' && typeof b != 'number') {
          return -1;
      } else if (typeof a != 'number' && typeof b == 'number') {
          return 1;
      } else {
          return a > b ? 1 : -1;
      }
  }));
};

let matrixMultiply = (...args) => {
  if (args.length < 2) throw 'Input parameters less than 2';
  let mat0 = args[0];
  if (!Array.isArray(mat0)) throw 'Input is not an array';
  if (mat0.length === 0) throw 'Input array empty'; 
  for (let n = 1; n < args.length; n++) {
      let mat1 = args[n];
      if (!Array.isArray(mat1)) throw 'Input is not an array';
      if (mat1.length === 0) throw 'Input array empty';
      let mat0_row = mat0.length;
      let mat0_col = mat0[0].length;
      let mat1_row = mat1.length;
      let mat1_col = mat1[0].length;
      if (mat0_col != mat1_row) throw 'Matrix 1 columns not equal to matrix 2 rows';
      let res_arr = Array(mat0_row).fill(0);
      let inner_arr_len0 = -1;
      let inner_arr_len1 = -1;
      for (let i = 0; i < mat0_row; i++) {
          res_arr[i] = Array(mat1_col).fill(0);
          if (inner_arr_len0 === -1) {
              inner_arr_len0 = mat0[i].length;
          } else if (inner_arr_len0 != mat0[i].length) throw 'Innermost arrays length not same';
          for (let j = 0; j < mat1_col; j++) {
              for (let k = 0; k < mat0_col; k++) {
                  if (!Array.isArray(mat0[i])) throw 'Outermost array is not an array';
                  if (!Array.isArray(mat1[k])) throw 'Outermost array is not an array';
                  if (mat0[i].length === 0) throw 'Input inner array empty';
                  if (mat1[k].length === 0) throw 'Input inner array empty';
                  if (typeof(mat0[i][k]) != 'number') throw 'Innermost array not a number';
                  if (typeof(mat1[k][j]) != 'number') throw 'Innermost array not a number';
                  if (inner_arr_len1 === -1) {
                      inner_arr_len1 = mat1[k].length;
                  } else if (inner_arr_len1 != mat1[k].length) throw 'Innermost arrays length not same'; 
                  res_arr[i][j] += mat0[i][k]*mat1[k][j];
              }
          }
      }
      mat0 = res_arr;
  }
  return(mat0);
};

export {sortAndFilter, merge, matrixMultiply};