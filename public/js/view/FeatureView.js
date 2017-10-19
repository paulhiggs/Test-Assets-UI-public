/**
 * Created by danielsilhavy on 04.08.16.
 */

App.views.FeatureView = function () {
  App.views.MainView.call(this, 'feature');
};

App.views.FeatureView.prototype = new App.views.MainView();
App.views.FeatureView.prototype.constructor = App.views.FeatureView;

App.views.FeatureView.prototype.renderDetails = function (data) {
  var self = this;

  data.feature = self.formatDate([data.feature])[0];
  data.testcases = self.formatDate(data.testcases);
  data.testvectors = self.formatDate(data.testvectors);
  App.utils.HTTPUtils.get(App.constants.requestParameter[this.type + '_template'].DETAILS)
    .then(function (templateData) {
      self.renderHandlebars(templateData, data);
      self.renderTestvectorChart(data.testvectors);
    });
};

App.views.FeatureView.prototype.renderTestvectorChart = function (data) {
  var currentTestcases = [];
  var testcases = [];
  var myChart = echarts.init(document.getElementById('chart'));

  data = data || [];
  data.forEach(function (item) {
    item.testcases.forEach(function (tc) {
      if (!currentTestcases[tc._id]) {
        currentTestcases[tc._id] = {
          value: 1,
          name: tc.name
        };
      } else {
        currentTestcases[tc._id].value += 1;
      }
    });
  });

  for (var f in currentTestcases) {
    if (currentTestcases.hasOwnProperty(f)) {
      testcases.push(currentTestcases[f]);
    }
  }

  var option = {
    title: {
      text: 'Testvectors per Testcase',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: testcases
    },
    calculable: false,
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          show: true,
          title: "Save Image"
        }
      }
    },
    series: [
      {
        name: 'Testcase',
        type: 'pie',
        radius: [0, 140],

        // for funnel
        x: '60%',
        width: '35%',
        funnelAlign: 'left',
        max: 1048,
        itemStyle: {
          normal: {
            label: {
              show: false
            }
          }
        },

        data: testcases
      }
    ]
  };
  myChart.setOption(option);
  this.resizeChart(myChart);
};

App.views.FeatureView.prototype.getFieldValues = function () {
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
  values.featureGroup = $("#feature-group-select option:selected").val();
  return values;
};

App.views.FeatureView.prototype.getEditFieldValues = function () {
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
  values.featureGroup = $("#feature-group-select option:selected").val();
  values.id = self.getIdFromHiddenField();

  return values;
};

App.views.FeatureView.prototype.getIdFromHiddenField = function () {
  return $('#element-id').val() || null;
};

App.views.FeatureView.prototype.getIdFromButton = function (element) {
  return element.attributes['element-id'].value;
};

