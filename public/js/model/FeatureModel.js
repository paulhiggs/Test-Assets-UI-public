/**
 * Created by danielsilhavy on 02.08.16.
 */

App.models.FeatureModel = function () {
  App.models.MainModel.call(this, 'feature');
};

App.models.FeatureModel.prototype = new App.models.MainModel();

App.models.FeatureModel.prototype.getAttributes = function () {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.attribute.GET_MULTI + '?type=' + App.constants.types.FEATURE)
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.FeatureModel.prototype.getTestcases = function (id) {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.feature.GET + '/' + id + '/testcases')
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.FeatureModel.prototype.getDetails = function (id) {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.feature.GET + '/' + id + '/details')
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.FeatureModel.prototype.constructor = App.models.FeatureModel;