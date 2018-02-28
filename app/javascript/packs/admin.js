/* eslint no-console:0 */

var adminContext = require.context("admin/components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(adminContext);
