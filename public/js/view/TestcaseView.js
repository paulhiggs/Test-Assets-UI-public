/**
 * Created by danielsilhavy on 04.08.16.
 */

App.views.TestcaseView = function () {
  App.views.MainView.call(this, 'testcase');
};

App.views.TestcaseView.prototype = new App.views.MainView();
App.views.TestcaseView.prototype.constructor = App.views.FeatureGroupView;


App.views.TestcaseView.prototype.renderDetails = function (data) {
  var self = this;

  data.testcase = self.formatDate([data.testcase])[0];
  data.testvectors = self.formatDate(data.testvectors);
  App.utils.HTTPUtils.get(App.constants.requestParameter[this.type + '_template'].DETAILS)
    .then(function (templateData) {
      self.renderHandlebars(templateData, data);
    });
};

App.views.TestcaseView.prototype.getFieldValues = function () {
  var values = {};

  values.name = $('#name').val();
  values.active = $('input[name=active]:checked').val();
  values.includeInDashjsJson = $('input[name=json]:checked').val();
  values.attributeInstances = [];
  $('.dynamic-attribute').each(function (i, obj) {
    values.attributeInstances.push({
      value: obj.value,
      attribute: obj.attributes['attribute-id'].value
    });
  });
  values.feature = $("#feature-select option:selected").val();
  return values;
};

App.views.TestcaseView.prototype.getEditFieldValues = function () {
  var values = {};
  var self = this;

  values.name = $('#name').val();
  values.active = $('input[name=active]:checked').val();
  values.includeInDashjsJson = $('input[name=json]:checked').val();
  values.attributeInstances = [];
  $('.dynamic-attribute').each(function (i, obj) {
    values.attributeInstances.push({
      value: obj.value,
      '_id': obj.attributes['attribute-instance-id'].value
    });
  });
  values.feature = $("#feature-select option:selected").val();
  values.id = self.getIdFromHiddenField();

  return values;
};



