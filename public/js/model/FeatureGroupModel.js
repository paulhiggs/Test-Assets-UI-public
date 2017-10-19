/**
 * Created by danielsilhavy on 02.08.16.
 */


App.models.FeatureGroupModel = function () {
  App.models.MainModel.call(this, 'featureGroup');
};

App.models.FeatureGroupModel.prototype = new App.models.MainModel();

App.models.FeatureGroupModel.prototype.getAttributes = function () {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.attribute.GET_MULTI + '?type=' + App.constants.types.FEATURE_GROUP)
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.FeatureGroupModel.prototype.getDetails = function (id) {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.featureGroup.GET + '/' + id + '/details')
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.FeatureGroupModel.prototype.getFeatures = function (id) {
  var q = Q.defer();

  App.utils.HTTPUtils.get(App.constants.requestParameter.featureGroup.GET + '/' + id + '/features')
    .then(function (data) {
      q.resolve(data);
    })
    .catch(function (error) {
      q.reject(error);
    });

  return q.promise;
};

App.models.FeatureGroupModel.prototype.constructor = App.models.FeatureGroupModel;