'use strict';

exports.URL = 'http://www.example-website-1.com';

exports.parsePeople = function ($) {
  var people = [];

  $('li.people').each(function (i) {
    people[i] = {
      name: $(this).find('.full-name'),
      address: $(this).find('.address'),
      age: $(this).find('.age'),
      photo: $(this).find('img').attr('src'),
      profile: $(this).find('a').attr('href')
    };
  });

  return people;
};
