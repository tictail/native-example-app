(function() {
  function appStart(store) {
    $('.app-container button').click(share);

    TT.api.get('v1/me').done(fetchStoreProducts);
  }

  function fetchStoreProducts(store) {
    TT.api.get('v1/stores/' + store.id + '/products').done(listProductImages)  ;
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
    TT.native.showShareDialog(
      'You\'re awesome!',
      'Hey, I just built my first app on Tictail!'
    );
  }

  TT.native.init().done(appStart);
})();

