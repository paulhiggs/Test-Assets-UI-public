/**
 * Created by danielsilhavy on 02.08.16.
 */

App.models.TestcaseModel = function () {
  App.models.MainModel.call(this, 'testcase');
};

App.models.TestcaseModel.prototype = new App.models.MainModel();

App.models.TestcaseModel.prototype.getAttributes = function () {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.attribute.GET_MULTI + '?type=' + App.constants.types.TESTCASE)
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.TestcaseModel.prototype.getTestvectors = function (id) {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.testcase.GET + '/' + id + '/testvectors')
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.TestcaseModel.prototype.getDetails = function (id) {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.testcase.GET + '/' + id + '/details')
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.TestcaseModel.prototype.constructor = App.models.TestcaseModel;