if (Cities.find().count() === 0) {
  Posts.insert({
    city: 'Lviv'
  });

  Posts.insert({
    city: 'Kyiv'
  });

  Posts.insert({
    city: 'Odessa'
  });
}