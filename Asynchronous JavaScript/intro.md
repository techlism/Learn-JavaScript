# Introduction

1. Synchronous JavaScript get executed **line by line**.Which implies that if one line is taking too much time to execute then it will block the execution of subsequent lines.
2. Here Asynchronous JavaScript comes into play. Asynchronous code is executed after a task that runs in the  "background" finishes.
3. Asynchronous code is non-blocking. Execution doesn't wait for an asynchronous task to finish its work.
4. **setTimeout** is an async function (non-blocking).
5. Image src loading is an async function.
6. Event Listeners or Callback functions alone do not make a code asynchronous.(They are possible in some cases as mentioned earlier).
7. AJAX(Asynchronous JavaScript and XML) : Allow us to communicate with remote webservers in an async way. With AJAX calls,we can request from webservers dynamically.
8. XML is a data format which was popular back then but now a days we mostly use **JSON** but the name is AJAX which is still intact.
