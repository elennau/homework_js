function DynamicHtml(name,quest,answ) {

  this.name = name;
  this.quest = quest;
  this.answ = answ;
  
  this.addForm = function () {
  for (var i = 0; i < this.quest; i++) {
  var j = i + 1;
  var elementLi = document.createElement('li');
  var list = document.querySelector('.list');	
  elementLi.className = ('question' + j);
  elementLi.innerHTML = ('Вопрос №' + j);
  elementLi.style.marginTop = '20px';  
  elementLi.style.fontSize = '20px';
  list.appendChild(elementLi);
  
  for (var k = 0; k < this.answ; k++) {
  var n = k + 1;
  var elementLabel = document.createElement('label');
  elementLabel.style.display = 'block'; 
  elementLabel.innerHTML = ('<input type="checkbox" name="my_input" value="answer">Вариант ответа №' + n);
  elementLabel.style.marginTop = '5px';  
  elementLabel.style.fontSize = '18px';
  var question = document.querySelector(('.question' + j));
  question.appendChild(elementLabel);
  }
  }
  }
    
  this.createWrapper = function() {
  var elementDiv = document.createElement('div');
  elementDiv.className = 'wrapper';
  elementDiv.style.width = '800px';
  elementDiv.style.marginTop = '10px';  
  elementDiv.style.fontFamily = 'Arial';  
  document.body.appendChild(elementDiv); 
  }
  
  this.createHeader = function() {
  var elementHead = document.createElement('p');
  elementHead.innerHTML = this.name;
  elementHead.style.marginLeft = '280px';  
  elementHead.style.fontSize = '20px';
  var wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(elementHead);
  }
  
  this.createForm = function() {
  var elementForm = document.createElement('form');
  elementForm.className = 'form_test'
  var wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(elementForm);
  var elementOl = document.createElement('ol');
  elementOl.className = 'list';
  elementOl.style.marginLeft = '90px';  
  elementOl.style.marginTop = '50px';  
  var formTest = document.querySelector('.form_test');	
  formTest.appendChild(elementOl);
  this.addForm();
  }
  
  this.createButton = function() {
  var elementButton = document.createElement('button');
  elementButton.innerHTML = 'Проверить мои результаты';
  elementButton.style.width = '330px';
  elementButton.style.height = '50px';
  elementButton.style.marginLeft = '260px';  
  elementButton.style.marginTop = '50px';  
  elementButton.style.backgroundColor = '#cfe2f3';
  elementButton.style.border = '2px solid black';
  elementButton.style.fontSize = '18px';
  var formTest = document.querySelector('.form_test');	
  formTest.appendChild(elementButton);
  }
  
 }

 myTest = new DynamicHtml('Тест по программированию', 3, 3);
 myTest.createWrapper();
 myTest.createHeader(); 
 myTest.createForm();
 myTest.createButton();
