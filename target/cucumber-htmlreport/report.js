$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/basic/Authentication/GetRequestWithDataDriven.feature");
formatter.feature({
  "name": "test authentication",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "1.validate authentication",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User login with username and pwd",
  "keyword": "Given "
});
formatter.match({
  "location": "com.basic.Authentication.AuthenticationSD.User_login_with_username_and_pwd()"
});
formatter.result({
  "status": "passed"
});
});