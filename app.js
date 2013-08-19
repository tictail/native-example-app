(function() {
  function appStart(store, accessToken) {
    $('.app-container h1').append(' ' + store.name);
    $('.app-container button').click(share);

    TT.request('v1/stores/' + store.id + '/products', {
      success: listProductImages,
      error: console.log.bind(console, 'Failed to fetch products')
    });
  }

  function listProductImages(products) {
    var imageContainer = $('.images');

    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      $('<img>')
        .attr('src', product.images[0].sizes['100'])
        .appendTo(imageContainer);
    }
  }

  function share() {
    TT.showShareDialog({
      heading: 'You\'re awesome!',
      message: 'Hey, I just built my first app on Tictail!'
    });
  }

  TT.init(appStart);
})();