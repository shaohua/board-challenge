/** @jsx React.DOM */
/* global ReactRouter */
var _ = require('underscore'),
  $ = require('jquery'),
  AppView = require('./app_view'),
  React = require('react');

$(document).ready(function(){
  React.renderComponent(<AppView />, $('#main-app')[0]);
});