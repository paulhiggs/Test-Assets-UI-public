/**
 * Created by danielsilhavy on 01.08.16.
 */
var BASE_URL = 'http://127.0.0.1:3000/v1/';

App.constants.requestParameter = {
  attribute: {
    GET: BASE_URL + 'attributes',
    CREATE: BASE_URL + 'myattributes',
    EDIT: BASE_URL + 'attributes',
    DELETE: BASE_URL + 'attributes',
    GET_MULTI: BASE_URL + 'attributes',
    MYLIST: BASE_URL + 'myattributes',
  },

  attribute_template: {
    LIST: 'template/attribute/list.html',
    CREATE: 'template/attribute/create.html',
    EDIT: 'template/attribute/edit.html',
    MYLIST: 'template/attribute/mylist.html',
  },

  featureGroup: {
    GET: BASE_URL + 'featuregroups',
    CREATE: BASE_URL + 'myfeaturegroups',
    EDIT: BASE_URL + 'featuregroups',
    DELETE: BASE_URL + 'featuregroups',
    GET_MULTI: BASE_URL + 'featuregroups',
    MYLIST: BASE_URL + 'myfeaturegroups',
  },

  featureGroup_template: {
    LIST: 'template/featuregroup/list.html',
    CREATE: 'template/featuregroup/create.html',
    EDIT: 'template/featuregroup/edit.html',
    MYLIST: 'template/featuregroup/mylist.html',
    DETAILS: 'template/featuregroup/details.html',
  },
  feature: {
    GET: BASE_URL + 'features',
    CREATE: BASE_URL + 'myfeatures',
    EDIT: BASE_URL + 'features',
    DELETE: BASE_URL + 'features',
    GET_MULTI: BASE_URL + 'features',
    MYLIST: BASE_URL + 'myfeatures',
  },

  feature_template: {
    LIST: 'template/feature/list.html',
    CREATE: 'template/feature/create.html',
    EDIT: 'template/feature/edit.html',
    MYLIST: 'template/feature/mylist.html',
    DETAILS: 'template/feature/details.html',
  },
  testcase: {
    GET: BASE_URL + 'testcases',
    CREATE: BASE_URL + 'mytestcases',
    EDIT: BASE_URL + 'testcases',
    DELETE: BASE_URL + 'testcases',
    GET_MULTI: BASE_URL + 'testcases',
    MYLIST: BASE_URL + 'mytestcases',
  },

  testcase_template: {
    LIST: 'template/testcase/list.html',
    CREATE: 'template/testcase/create.html',
    EDIT: 'template/testcase/edit.html',
    MYLIST: 'template/testcase/mylist.html',
    DETAILS: 'template/testcase/details.html',
  },
  testvector: {
    GET: BASE_URL + 'testvectors',
    CREATE: BASE_URL + 'mytestvectors',
    EDIT: BASE_URL + 'testvectors',
    DELETE: BASE_URL + 'testvectors',
    GET_MULTI: BASE_URL + 'testvectors',
    MYLIST: BASE_URL + 'mytestvectors',
    GROUPED_LIST: BASE_URL + 'testvectors/groupedlist',
  },

  testvector_template: {
    LIST: 'template/testvector/list.html',
    CREATE: 'template/testvector/create.html',
    EDIT: 'template/testvector/edit.html',
    MYLIST: 'template/testvector/mylist.html',
    GROUPED_LIST: 'template/testvector/groupedList.html',
    DETAILS: 'template/testvector/details.html',
  },

  user: {
    GET: BASE_URL + 'users',
    CREATE: BASE_URL + 'users',
    EDIT: BASE_URL + 'users',
    DELETE: BASE_URL + 'users',
    GET_MULTI: BASE_URL + 'users',
  },

  user_template: {
    LIST: 'template/user/list.html',
    CREATE: 'template/user/create.html',
    EDIT: 'template/user/edit.html',
  },

  default_template: {
    INDEX: 'template/default/index.html',
    FAQ: 'template/default/faq.html',
    DISCLAIMER: 'template/default/disclaimer.html'
  },

  statistic: {
    SIZE: BASE_URL + 'statistics/size',
    TESTVECTOR_TYPES: BASE_URL + 'statistics/testvector/types',
    TESTCASE_TYPES: BASE_URL + 'statistics/testcase/types',
    FEATURE_TYPES: BASE_URL + 'statistics/feature/types',
    FEATUREGROUP_TYPES: BASE_URL + 'statistics/featuregroup/types'
  },

  LOGIN_USER: BASE_URL + 'users/login',
  LOGIN_TEMPLATE: 'template/login/login.html',
  ERROR_TEMPLATE: 'template/notifications/error.html',
  SUCCESS_TEMPLATE: 'template/notifications/success.html'
};

App.constants.targetContainer = '#mainContainer';
App.constants.messageContainer = '#messageContainer';

App.constants.events = {
  attribute: {
    CREATE: 'createAttribute',
    DELETE: 'deleteAttribute',
    EDIT: 'editAttribute',
  },
  featureGroup: {
    CREATE: 'createFeatureGroup',
    DELETE: 'deleteFeatureGroup',
    EDIT: 'editFeatureGroup',
    TOGGLE_COLUMN: 'toggleColumnFeatureGroup'
  },
  feature: {
    CREATE: 'createFeature',
    DELETE: 'deleteFeature',
    EDIT: 'editFeature',
    TOGGLE_COLUMN: 'toggleColumnFeature'
  },
  testcase: {
    CREATE: 'createTestcase',
    DELETE: 'deleteTestcase',
    EDIT: 'editTestcase',
    TOGGLE_COLUMN: 'toggleColumnTestcase'
  },
  testvector: {
    CREATE: 'createTestvector',
    DELETE: 'deleteTestvector',
    EDIT: 'editTestvector',
    TOGGLE_COLUMN: 'toggleColumnTestvector'
  },
  user: {
    CREATE: 'createUser',
    DELETE: 'deleteUser',
    EDIT: 'editUser',
  },
  LOGIN: 'login',
  DISCLAIMER: 'disclaimer'
};

App.constants.types = {
  FEATURE: 'Feature',
  FEATURE_GROUP: 'Feature Group',
  TESTCASE: 'Testcase',
  TESTVECTOR: 'Testvector'
};

App.constants.pagination = {
  LIMIT: 25
};