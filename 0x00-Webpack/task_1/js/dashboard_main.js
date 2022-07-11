import $ from 'jquery';
import _ from 'lodash';
var count = 0



var newPar = $('body').append('<p>Holberton Dashboard</p>');
$(newPar ).append('<p>Dashboard data for the students</p>');
$(newPar).append('<button>Dashboard data for the students</button>');

$(newPar).append("<p id='count'></p>");

$(newPar).append('<p>Copyright - Holberton School</p>');



function updateCounter(){
   
    count +=1
    $("#count").html(`${count} clicks on the button`)
}

$('button').on('click', _.debounce(updateCounter, 500));