
const common = require('../models/crud_function');
const tables = require('../common/table');
const responseCode = require("../common/response_code");

exports.getUser = (req, res) => {

  let functionarguments = {
    "res": res,
    "tableName": tables.USERSTABLE,
    "fields": "id, fname , lname , email , des",
    "orderby": "order by id DESC"
  }
  common.GetRecords(functionarguments).then((result) => {
    if (result && result != '')
      responseCode.customResponse(res, 200, result);
    else
      responseCode.customResponse(res, 204)
  }).catch((err) => {
    responseCode.customResponse(res, 500, err);
  });
};

exports.addUser = (req, res) => {
  let queryObj = req.body;
  let userDetails = {
    "fname": queryObj.fname,
    "lname": queryObj.lname,
    "email": queryObj.email,
    "des": queryObj.des,
  }
  let functionarguments = {
    "res": res,
    "tableName": tables.USERSTABLE,
    "addData": userDetails
  }

  common.AddRecords(functionarguments).then(async (result) => {
    if (result['insertId']) {
      responseCode.customResponse(res, 200, result);
    } else {
      responseCode.customResponse(res, 200);
    }

  }).catch((err) => {
    responseCode.customResponse(res, 500, err);
  });

};

exports.updateUser = (req, res) => {
  let queryObj = req.body;
  let userDetails = {
    "fname": queryObj.fname,
    "lname": queryObj.lname,
    "email": queryObj.email,
    "des": queryObj.des,
  }
  let functionarguments = {
    "res": res,
    "tableName": tables.USERSTABLE,
    "updateData": userDetails,
    "where": `id = ${queryObj.id}`
  }
  common.UpdateRecords(functionarguments).then(async (UpdateRecords) => {
    if (UpdateRecords != undefined && UpdateRecords['affectedRows'] > 0)
      responseCode.customResponse(res, 202);
    else
      responseCode.customResponse(res, 204)
  }).catch((err) => {
    responseCode.customResponse(res, 500, err);
  });

}

exports.deleteUser = (req, res) => {
  let queryObj = req.query;
  let functionarguments2 = {
    "res": res,
    "tableName": tables.USERSTABLE,
    "where": "id ='" + queryObj.id + "'"
  }
  common.DeleteRecords(functionarguments2).then(async (DeleteRecords) => {
    if (DeleteRecords != undefined && DeleteRecords['affectedRows'] > 0) {
      responseCode.customResponse(res, 203);
    } else {
      responseCode.customResponse(res, 204);
    }
  });

}