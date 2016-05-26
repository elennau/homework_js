define(['jquery'], function ($) {

  function Controller(model, view) {

    var self = this;

    view.elements.addBtn.on('click', createItem);
    view.elements.input.on('keyup', function(e){
          if( e.keyCode === 13 ) {
            createItem();            
          } 
          if( e.keyCode === 27 ) {            
            view.elements.input.val('');
            view.renderList(model.data);
          }
          return;
        });
    view.elements.listContainer.on('click', '.item__delete', removeItem);
    view.elements.listContainer.on('click', '.item', showInput);


    function createItem() {
      var newItem = view.elements.input.val();
      model.addItem(newItem);
      view.renderList(model.data);
      view.elements.input.val('');
    }

    function showInput() {
      console.log('showInput');
      
      var $curInput = $(this).find('.item__input');
      var $curText  = $(this).find('.item__text');

      $curText.removeClass('item__text--show')
        .addClass('item__text--hidden');

      $curInput.removeClass('item__input--hidden')
        .addClass('item__input--show')
        .focus()
        .on('keyup', function(e){
          if( e.keyCode === 13 ) {
            model.updateItem($curText.html(), $curInput.val());
            $curInput.off('keyup');
            view.renderList(model.data);          
          } 
          if( e.keyCode === 27 ) {          
            $curInput.off('keyup');
            view.renderList(model.data);
          }
          return;
        })
        .focusout(function(e) {
          model.updateItem($curText.html(), $curInput.val());
          $curInput.off('keyup');
          view.renderList(model.data);                 
        });
    } 

    function removeItem() {
      var item = $(this).attr('data-value');
      model.removeItem(item);
      view.renderList(model.data);
    }
  }

  return Controller;

});