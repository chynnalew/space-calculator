import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/animate.css';
import {UserLife} from './userAge.js';

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    console.log("hi");
    const name = $('#inputName').val();
    const age = $('#inputAge').val();
    const lifeExp = $('#inputLife').val();
    const user = new UserLife(name,age,lifeExp);
    $('#earthAge').html(user.earth);
    $('#earthLife').html(user.earthExp);
    $('#earthLeft').html(user.earthTime());
    $('#mercuryAge').html(user.mercury.toFixed(2));
    $('#mercuryLife').html(user.mercuryExp.toFixed(2));
    $('#mercuryLeft').html(user.mercuryTime().toFixed(2));
    $('#venusAge').html(user.venus.toFixed(2));
    $('#venusLife').html(user.venusExp.toFixed(2));
    $('#venusLeft').html(user.venusTime().toFixed(2));
    $('#marsAge').html(user.mars.toFixed(2));
    $('#marsLife').html(user.marsExp.toFixed(2));
    $('#marsLeft').html(user.marsTime().toFixed(2));
    $('#jupiterAge').html(user.jupiter.toFixed(2));
    $('#jupiterLife').html(user.jupiterExp.toFixed(2));
    $('#jupiterLeft').html(user.jupiterTime().toFixed(2));
  });
});

  