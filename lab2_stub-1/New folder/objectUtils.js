/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let areObjectsEqual = (...args) => {
    if (args.length < 2) throw 'input parameter length less than 2';
    let obj0 = args[0];
    if (typeof(obj0) != 'object') throw 'input parameter not an object';
    const keys0 = Object.keys(obj0);
    for (let i = 1; i < args.length; i++) {
        let obj1 = args[i];
        if (typeof(obj1) != 'object') throw 'input parameter not an object';
        const keys1 = Object.keys(obj1);
        if (keys0.length != keys1.length) {
            return false;
        };
        for (let key of keys0) {
            if (typeof(obj0[key]) == 'object' && typeof(obj1[key]) == 'object') {
                if (!areObjectsEqual(obj0[key], obj1[key])) {
                    return false;
                };
            } else if (obj0[key] != obj1[key]) {
                return false;
            };
        };
    };
    return true;
};

let calculateObject = (object, funcs) => {
      if (typeof(object) != 'object') throw 'input object not of object type';
      if (!Array.isArray(funcs)) throw 'funcs parameter not an array';
      if (funcs.length == 0) throw 'funcs length is 0';
      //const func1 = funcs[0];
      //if (typeof(func1) != 'function') throw 'funcs parameter not a function';
      for (const key in object) {
          if (typeof(object[key]) != 'number') throw 'an object value is not a number';
      }
      for (let i = 0; i < funcs.length; i++) {
          if (typeof(funcs[i]) != 'function') throw 'funcs element not a function';
          for (const key in object) {
              object[key] = funcs[i](object[key]).toFixed(2);
          }
      }
      return(object);
      
};

let combineObjects = (...args) => {
      if (args.length < 2) throw 'Input parameters length less than 2';
      let obj_orig = {};
      let return_obj = {};
      for (let i = 0; i < args.length; i++) {
          if (typeof(args[i]) != 'object') throw 'Input parameter not an object';
          if (Object.keys(args[i]).length == 0) throw 'Input object is empty';
          for (const key in args[i]) {
              if (key in obj_orig) {
                  return_obj[key] = obj_orig[key];
              } else {
                  obj_orig[key] = args[i][key];
              };
          };
      };
      return (return_obj);
};

export {areObjectsEqual, calculateObject, combineObjects};