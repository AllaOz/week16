# week16

week16

1. Что представляют собой формы?
   Набор из элементов управления, размещаемых на Web-странице;
2. Для чего служат формы?
   Для сбора данных пользователя и отправки их Web-серверу
3. Каким типом задаётся поле ввода в форме текста?
   <input type=”text”>
4. Какими способами можно обратиться к элементу формы?
   const form = document.form; form.elements.element;
5. Какой JS-код можно указать в атрибуте action? В action указывается url адрес серверного скрипта, который обрабатывает данные
6. Какой тип имеет свойство elements объекта Form? Массив
7. Как сделать валидацию номера кредитной карты? С помощью регулярного выражения ex:
   const creditCardNumber = '1234567890123456';
   const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
   if (regex.test(creditCardNumber)) {
   console.log('Valid credit card number');
   } else {
   console.log('Invalid credit card number');
   }
8. Восстановить значения умолчания в полях формы можно только по кнопке reset? Нет document.getElementById("myInput").value = "";
9. Каким способом можно отправить данные из формы на сервер? Через событие submit, методы POST и GET
10. Через addEventListener?
11. Ограниченный функционал
