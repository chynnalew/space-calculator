import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {UserLife} from './userAge.js';

$(document).ready(function() {
  $('#blastOff').on('click', function(event) {
    event.preventDefault();
    const name = $('#inputName').val();
    const age = $('#inputAge').val();
    const lifeExp = $('#inputLife').val();
    const user = new UserLife(name,age,lifeExp);
    $('#earthAge').html(user.earth);
    $('#earthLife').html(user.earthExp);
    $('#earthLeft').html(user.earthTime())
  })
  });

  