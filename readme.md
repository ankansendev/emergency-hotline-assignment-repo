<!-- question 01 -->
getElementById is a method of the document object in html dom (document object model)

getElementByClassName is also method in javascript. javascript is used to retrieve a live htmlcollection of all child element whithin a document

the document method QuerySelector returns the first element within the document that matches the specified css selectore ,or group of css selectors. if no matches are found,null is returned

the document method querySelectorAll RETURNS A STATIC (NOT LIVE )
NodeList representing a list of the document's elements that match the specified group of selectors

   <!-- question 02 -->
   use the document.createElement() mathod to create a new html element node.this method takes the tag name of the element you want to create as an argument. 
   example:
   const NewDiv = document.createElement('div');
   const newParagraph = document.createElement('p')

   <!-- question 03 -->
we've seen that a web page is composed of element , headings,paragtaphs of text, images,buttons,and so on and that you can listen for events that happen to these element. for example, you could add a listener to a button,and it will run when thw user clicks the buttons.


 <!-- question 04 -->
Event delegation ia a design pattern in javascript used to efficiently manage and handle events on multiple child elements by attaching a single event listener to a common ancestor element

<!-- question 05 -->
    the preventDefault and stopPropagation mathod in javaScript event handling serve distinct purposes related to how events behave in the document object model (dom)
