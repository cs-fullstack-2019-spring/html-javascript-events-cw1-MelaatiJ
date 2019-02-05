//i had some help with my classwork
function clickedreset()
{
    console.log(textAreaElement1.value);
    textAreaElement1.value="";
    e.preventDefault();
}

function typeinTextArea()
{
    e.preventDefault();//prevent the default action of this element.
    textAreaElement1.value += hardCodedSentence[counter];
    counter++;

    if(counter >= hardCodedSentence.length);
    counter = 0
}
var counter = 0;
var hardCodedSentence = "melaaati is cook ";

//getting the element by the ID
var textAreaElement1= document.getElementById("melaatisweb");
var textAreaElement2 = document.querySelector("#melaatisweb");
var resetButtonElement = document.getElementsByTagName("button")


resetButtonElement[0].onclick= clickedreset;
textAreaElement1.onkeypress = typeinTextArea;