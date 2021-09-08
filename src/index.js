import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/animate.css';
import {UserLife} from './userAge.js';

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    const name = $('#inputName').val();
    const age = $('#inputAge').val();
    const lifeExp = $('#inputLife').val();
    const user = new UserLife(name,age,lifeExp);
    $('#earthAge').html(user.earth);
    $('#earthLife').html(user.earthExp);
    $('#earthLeft').html(user.earthTime());
    $('#mercuryAge').html(user.mercury.toFixed(2));
    $('#mercuryLife').html(user.mercuryExp.toFixed(2));
    $('#mercuryLeft').html(user.mercuryTime());
    $('#venusAge').html(user.venus.toFixed(2));
    $('#venusLife').html(user.venusExp.toFixed(2));
    $('#venusLeft').html(user.venusTime());
    $('#marsAge').html(user.mars.toFixed(2));
    $('#marsLife').html(user.marsExp.toFixed(2));
    $('#marsLeft').html(user.marsTime());
    $('#jupiterAge').html(user.jupiter.toFixed(2));
    $('#jupiterLife').html(user.jupiterExp.toFixed(2));
    $('#jupiterLeft').html(user.jupiterTime());
    $('#earthOver').html(user.earthOver());
    $('#mercuryOver').html(user.mercuryOver());
    $('#venusOver').html(user.venusOver());
    $('#marsOver').html(user.marsOver());
    $('#jupiterOver').html(user.jupiterOver());
    $('.ages').fadeIn(1000);
  });
});

  