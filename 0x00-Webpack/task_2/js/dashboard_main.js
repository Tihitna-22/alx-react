import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'


let count = 0


$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');



$('button').on('click', _.debounce(function updateCounter() {
    count += 1;
    $("#count").html(`${count} clicks on the button`);
}, 500));