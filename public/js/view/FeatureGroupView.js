/**
 * Created by danielsilhavy on 02.08.16.
 */

App.views.FeatureGroupView = function () {
  App.views.MainView.call(this, 'featureGroup');
};

App.views.FeatureGroupView.prototype = new App.views.MainView();
App.views.FeatureGroupView.prototype.constructor = App.views.FeatureGroupView;


App.views.FeatureGroupView.prototype.renderDetails = function (data) {
  var self = this;

  data.featureGroup = self.formatDate([data.featureGroup])[0];
  data.features = self.formatDate(data.features);
  data.testcases = self.formatDate(data.testcases);
  data.testvectors = self.formatDate(data.testvectors);
  App.utils.HTTPUtils.get(App.constants.requestParameter[this.type + '_template'].DETAILS)
    .then(function (templateData) {
      self.renderHandlebars(templateData, data);
      self.renderTestvectorChart(data.testvectors);
    });
};

App.views.FeatureGroupView.prototype.renderTestvectorChart = function (data) {
  var currentFeatures = [];
  var features = [];
  var myChart = echarts.init(document.getElementById('chart'));

  data = data || [];
  data.forEach(function (item) {
    item.testcases.forEach(function (tc) {
      if (!currentFeatures[tc.feature._id]) {
        currentFeatures[tc.feature._id] = {
          value: 1,
          name: tc.feature.name
        };
      } else {
        currentFeatures[tc.feature._id].value += 1;
      }
    });
  });

  for (var f in currentFeatures) {
    if (currentFeatures.hasOwnProperty(f)) {
      features.push(currentFeatures[f]);
    }
  }

  var option = {
    title: {
      text: 'Testvectors per Feature',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: features
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
        name: 'Feature',
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

        data: features
      }
    ]
  };
  myChart.setOption(option);
  this.resizeChart(myChart);
};

App.views.FeatureGroupView.prototype.getFieldValues = function () {
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
  return values;
};


App.views.FeatureGroupView.prototype.getEditFieldValues = function () {
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
  values.id = self.getIdFromHiddenField();

  return values;
};



