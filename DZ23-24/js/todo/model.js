define([], function () {
  
  function Model(arr) {
    
    var self=this;

    self.data = arr;

    self.addItem = function(item) {
      if (item.length === 0 ) return;
      item = (item + '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      self.data.push(item);
      return self.data;
    }

    self.updateItem = function(item, newValue) {
      var index = self.data.indexOf(item);
      if (index === -1) return ;
      
      newValue = (newValue + '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      self.data[index] = newValue;
      return self.data;
    }

    self.removeItem = function(item) {
      var index = self.data.indexOf(item);
      if(index === -1) return;
      self.data.splice(index, 1);
      return self.data;
    }

  }

  return Model;

});