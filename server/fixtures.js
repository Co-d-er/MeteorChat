if (Cities.find().count() === 0) {
  Cities.insert({
    city: 'Lviv'
  });

  Cities.insert({
    city: 'Kyiv'
  });

  Cities.insert({
    city: 'Odessa'
  });
}