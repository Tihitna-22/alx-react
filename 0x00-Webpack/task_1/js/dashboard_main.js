import $ from 'jquery';
// import _ from 'lodash';
let count = 0



$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Dashboard data for the students</button>');

$('body').append("<p id='count'></p>");

$('body').append('<p>Copyright - Holberton School</p>');



function updateCounter(){
   
    count +=1
    $("#count").html(`${count} clicks on the button`)
}

$('button').on('click', updateCounter);