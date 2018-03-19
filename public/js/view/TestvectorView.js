/**
 * Created by danielsilhavy on 04.08.16.
 */

var IMPORT_MAPPING = {
    //In future add test vector attributes here.
};


App.views.TestvectorView = function () {
    App.views.MainView.call(this, 'testvector');
};

App.views.TestvectorView.prototype = new App.views.MainView();
App.views.TestvectorView.prototype.constructor = App.views.TestvectorView;


App.views.TestvectorView.prototype.renderCreate = function (data) {
    var q = Q.defer();
    var self = this;

    //data.features = self.getTestcontentsByFeature(data.testcontents);

    App.utils.HTTPUtils.get(App.constants.requestParameter[self.type + '_template'].CREATE)
        .then(function (templateData) {
            self.renderHandlebars(templateData, data);
            $('#create-form').parsley().on('form:submit', function () {
                EventBus.dispatch(App.constants.events[self.type].CREATE, this, self.getFieldValues());
                return false;
            });

            $('#import-attributes-button').bind('click', function () {
                self.importAttributes();
            });
            q.resolve();
        })
        .catch(function (error) {
            App.handler.Errorhandler.handleError(error);
        });

    return q.promise;

};

App.views.TestvectorView.prototype.renderList = function (data, filterPreferences) {
    var self = this;
    var datatableOptions = {};
    var columns = [
        {data: 'testvector'},
        {data: 'testcontent'},
        {data: 'url'},
        {data: 'play'},
    ];
    data.attributes.forEach(function (item) {
        if (item.active) {
            columns.push({data: item.uiName});
        }
    });
    if (data.isAdmin) {
        columns.push({data: 'createdAt'}, {data: 'updatedAt'});
    }
    datatableOptions.columns = columns;
    datatableOptions.ajax = {
        url: App.constants.requestParameter.testvector.GET
    };
    App.utils.HTTPUtils.get(App.constants.requestParameter[this.type + '_template'].LIST)
        .then(function (templateData) {
            self.renderHandlebars(templateData, data);
            self.initializeDataTableAjax('datatable', data, filterPreferences, datatableOptions);
        });
};

App.views.TestvectorView.prototype.renderDetails = function (data) {
    var self = this;


    data.testvector = self.formatDate([data.testvector])[0];
    App.utils.HTTPUtils.get(App.constants.requestParameter[this.type + '_template'].DETAILS)
        .then(function (templateData) {
            self.renderHandlebars(templateData, data);
        });
};

App.views.TestvectorView.prototype.renderGroupedList = function (data, filterPreferences) {
    var self = this;
    var datatableOptions = {};
    var columns = [
        {data: 'testvector'},
        {data: 'testcontents'},
        {data: 'url'},
        {data: 'play'},
    ];
    data.attributes.forEach(function (item) {
        if (item.active) {
            columns.push({data: item.uiName});
        }
    });
    if (data.isAdmin) {
        columns.push({data: 'createdAt'}, {data: 'updatedAt'});
    }
    datatableOptions.columns = columns;
    datatableOptions.ajax = {
        url: App.constants.requestParameter.testvector.GROUPED_LIST
    };
    App.utils.HTTPUtils.get(App.constants.requestParameter[this.type + '_template'].GROUPED_LIST)
        .then(function (templateData) {
            self.renderHandlebars(templateData, data);
            self.initializeDataTableAjax('datatable', data, filterPreferences, datatableOptions);
        });
};

App.views.TestvectorView.prototype.importAttributes = function () {
    var url = $('#url').val();
    var data = [];
    var val;

    if (url !== '') {
        App.utils.HTTPUtils.get(url)
            .then(function (xml) {
                data = getMPDParameters(xml, data);
                data = data || [];
                data.forEach(function (item, index, array) {
                    // we iterate through the attributes, check if we have a corresponding Mapping and then take the value of the next item
                    if (IMPORT_MAPPING[item]) {
                        val = array[index + 1];
                        $('#' + IMPORT_MAPPING[item]).val(val);
                    }
                });
            });
    }
};

App.views.TestvectorView.prototype.renderEdit = function (data) {
    var q = Q.defer();
    var self = this;

    //data.features = self.getTestcontentsByFeature(data.testcontents);
    App.utils.HTTPUtils.get(App.constants.requestParameter[self.type + '_template'].EDIT)
      .then(function (templateData) {
          self.registerHandlebarsSelectHelper();
          self.renderHandlebars(templateData, data);
          $('#edit-form').parsley().on('form:submit', function () {
              EventBus.dispatch(App.constants.events[self.type].EDIT, this, self.getEditFieldValues());
              return false;
          });
          $('#import-attributes-button').bind('click', function () {
              self.importAttributes();
          });
          q.resolve();
      });
    return q.promise;
};

App.views.TestvectorView.prototype.registerHandlebarsSelectHelper = function () {
    Handlebars.registerHelper("select", function (value, options) {
        return options.fn(this)
            .split('\n')
            .map(function (v) {
                value.forEach(function (item) {
                    var t = 'value="' + item._id + '"';
                    if (RegExp(t).test(v)) {
                        v = v.replace(t, t + ' selected="selected"');
                    }
                });
                return v;
            })
            .join('\n');
    });
};

App.views.TestvectorView.prototype.getFieldValues = function () {
    var values = {};

    values.name = $('#name').val();
    values.active = $('input[name=active]:checked').val();
    values.includeInDashjsJson = false;
//    values.includeInDashjsJson = $('input[name=json]:checked').val();
    values.url = $('#url').val();
    values.attributeInstances = [];
    $('.dynamic-attribute').each(function (i, obj) {
        values.attributeInstances.push({
            value: obj.value,
            attribute: obj.attributes['attribute-id'].value
        });
    });
    values.testcontents = [];
    $("#testcontent-select option:selected").each(function () {
        values.testcontents.push($(this).val());
    });
    return values;
};

App.views.TestvectorView.prototype.getEditFieldValues = function () {
    var values = {};
    var self = this;

    values.name = $('#name').val();
    values.active = false;
//    values.active = $('input[name=active]:checked').val();
    values.includeInDashjsJson = $('input[name=json]:checked').val();
    values.url = $('#url').val();
    values.attributeInstances = [];
    $('.dynamic-attribute').each(function (i, obj) {
        values.attributeInstances.push({
            value: obj.value,
            '_id': obj.attributes['attribute-instance-id'].value
        });
    });
    values.testcontents = [];
    $("#testcontent-select option:selected").each(function () {
        values.testcontents.push($(this).val());
    });
    values.id = self.getIdFromHiddenField();

    return values;
};

App.views.TestvectorView.prototype.getIdFromHiddenField = function () {
    return $('#element-id').val() || null;
};

App.views.TestvectorView.prototype.getIdFromButton = function (element) {
    return element.attributes['element-id'].value;
};

App.views.TestvectorView.prototype.getTestcontentsByFeature = function (testcontents) {
    var features = [];
    var result = [];

    testcontents.forEach(function (item) {
        if (!features[item.feature.name]) {
            features[item.feature.name] = {testcontents: []};
        }
        features[item.feature.name].testcontents.push(item);
    });
    // We need to turn it into a numeric array for Handlebars
    for (var key in features) {
        result.push(features[key]);
    }

    return result;
};

App.views.TestvectorView.prototype.initializeDataTableAjax = function (id, data, filterPreferences, datatableOptions) {
    var self = this;
    var buttonCommon = {
        exportOptions: {
            format: {
                body: function (data, row, column, node) {
                    // if this is the first column and "details" is in the url it must be the textvector column.
                    if (column === 0 && data.indexOf('details') !== -1) {
                        return data.replace(/<a\b[^>]*>/i, "").replace(/<\/a>/i, "");
                    }
                    else if (data.indexOf('</a>') !== -1) {
                      data = data.match(/href=([^]*)/)[1];
                      if (data.indexOf('>Link</a>')) {
                        data = data.replace('>Link</a>', '');
                      }
                      if (data.indexOf('>Play</a>')) {
                        data = data.replace('>Play</a>', '');
                      }
                    }
                    return data;
                }
            }
        }
    };

    datatableOptions = datatableOptions || {};
    datatableOptions.pageLength = 50;
    datatableOptions.deferRender = true;
    datatableOptions.lengthMenu = [[10, 25, 50, -1], [10, 25, 50, "All"]];
    datatableOptions.scrollX = true;
    datatableOptions.dom = 'Bfrtip';
    datatableOptions.buttons = [
        'pageLength',
        $.extend(true, {}, buttonCommon, {
            extend: 'copyHtml5'
        }),
        $.extend(true, {}, buttonCommon, {
            extend: 'excelHtml5',
            fieldSeparator: ';'
        }),
        $.extend(true, {}, buttonCommon, {
            extend: 'csvHtml5',
            fieldSeparator: ';'
        })];
    datatableOptions.deferRender = true;
    self.createDatatableFilters(id);
    // DataTable
    var table = $('#' + id).DataTable(datatableOptions);

    self.addDatatablesSelect(table);
    self.addDatatablesSearch(table, data, filterPreferences);
    self.setContentHeight();
};

