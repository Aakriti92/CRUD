/*
  Modified by : Aakriti 
  date :- 22-11-19,
  Purpose : Add API validation
  Updated by: Dushyant Sengar
  Updated: 26-11-2019
*/


import validator from 'validatorjs';

export =
  {
    checkValidation: async (res, param, rules) => {
      try {
        return new Promise((resolve, reject) => {
          let validation = new validator(param, rules);
          if (validation.fails()) {
            return res.json({ "status": 500, "Message": validation.errors.errors });
          }
          else {
            resolve()
          }
        });
      } catch (ex) {
        console.log("WriteOnJSONfile function error", ex)
        return await ex;
      }
    }
  }
