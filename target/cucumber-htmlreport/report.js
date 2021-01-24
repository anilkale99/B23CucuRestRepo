$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/basic/GetWithDataTable/GetRequestWithDataTable.feature");
formatter.feature({
  "name": "22test DataTable",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "122.validate Get Request values with DataTable",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Get response from bookstore application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.basic.GetWithDataTable.GetWithDataTableSD.get_response_from_bookstore_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you request for Get response",
  "keyword": "When "
});
formatter.match({
  "location": "com.basic.GetWithDataTable.GetWithDataTableSD.you_request_for_Get_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate following in json",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.basic.GetWithDataTable.GetWithDataTableSD.user_validate_following_in_json(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "you check if its up and running",
  "keyword": "Then "
});
formatter.match({
  "location": "com.basic.GetWithDataTable.GetWithDataTableSD.youcheckifitsupandrunning()"
});
formatter.result({
  "status": "passed"
});
});