export const questionOne = (arr) => {
  // Implement question 1 here
  let sum_arr = 0;
  let return_obj = {};
  for (let i=0;i<arr.length;i++) {
    sum_arr = sum_arr + arr[i]**3;
  };
  if (sum_arr%2 === 1) {
    return_obj[sum_arr]=true;
  } else {
    return_obj[sum_arr]=false;
  };
  return (return_obj);
};

export const questionTwo = (numArray) => {
  // Implement question 2 here
  let return_arr = [];
  let previous_num = NaN;
  for (let i = 0;i<numArray.length;i++) {
      if (i === 0) {
          previous_num = numArray[i];
          continue;
      };
      if (numArray[i] > previous_num) {
          previous_num = numArray[i];
          if (i + 1 === numArray.length) {
              return_arr = [true];
          };
          continue;
      } else {
          return_arr = [false, i-1, i];
          break;
      };
  };
  return (return_arr);
};

export const questionThree = (obj1, obj2) => {
  // Implement question 3 here
  let return_obj = {};
  let obj_len1 = Object.keys(obj1).length;
  let obj_len2 = Object.keys(obj2).length;
  for (let i = 0; i < obj_len1; i++) {
      if (Object.keys(obj2).includes (Object.keys(obj1)[i])) {
          return_obj[Object.keys(obj1)[i]] = true;
      } else {
          return_obj[Object.keys(obj1)[i]] = false;
      };
  };
  
  for (let i = 0; i < obj_len2; i++) {
      if (!Object.keys(obj1).includes (Object.keys(obj2)[i])) {
          return_obj[Object.keys(obj2)[i]] = false;
      };
  };
  return (return_obj);
};

export const questionFour = (string) => {
  // Implement question 4 here
  let my_rows = string.split('\n');
  let row_len = my_rows.length;
  let return_arr = [];
  for (let i=0; i<row_len; i++) {
      return_arr.push(my_rows[i].split(','));
  };
  return (return_arr);
};

export const studentInfo = {
  firstName: 'Sri Laya',
  lastName: 'Nalmelwar',
  studentId: '20018028'
};
