//Cache the dom
var button= document.getElementById("button")

var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")

var asteptari=document.getElementById("asteptari")
var an =document.getElementById("anNastere")
const d=new Date()
var year = d.getFullYear()


//Add event listener to button
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

//Define function

function displayAge()
{
	an.innerHTML= year -an.innerHTML
}

function altaViata()
{
	nume.innerHTML="Salvamar"
	prenume.innerHTML="Luptator"

	asteptari.innerHTML="<ul><li>Libertate financiara</li><li>Educatie Superioara</li></ul"
}

