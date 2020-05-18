// Content Selectors
var content = {
orgName : document.querySelector("#org-name"),
strapline : document.querySelector("#org-strapline"),
description : document.querySelector("#description .content"),
update : document.querySelector("#update .content"),
volunteering : document.querySelector("#volunteering .content"),
donating : document.querySelector("#donating .content"),
contact : document.querySelector("#contact .content"),
email : document.querySelector("#email .content"),
lastUpdated : document.querySelector("#upDateDisplay")
}
// Buttons & Menus
var pageButton = document.querySelector("#page-nav-button");
var calaisOrgButton = document.querySelector("#org-nav-button");
var siteButton = document.querySelector("#site-nav-button");
var pageMenu = document.querySelector(".page-dropup-container");
pageButton.addEventListener("click",function(){toggleVisible(pageMenu)});


function goToEntry(organisation){
  var record = organisation;
  content.orgName.innerText=record.name;
  content.strapline.innerText=record.strapline;
  content.description.innerText=record.description;
  content.update.innerText=record.update;
  content.volunteering.innerText=record.volunteering;
  content.donating.innerText=record.donating;
  content.contact.innerText=record.contact;
  content.email.innerText=record.email;
  content.lastUpdated.innerText=record.lastUpdated;
}

function toggleVisible(dropUp){
    var thing = dropUp;
    thing.classList.toggle("hidden");
}

// Entries - Constructor
function OrgEntry(orgName,strapline,description,update,volunteering,donating,contact,email,lastUpdated){
  this.name=orgName;
  this.strapline=strapline;
  this.description=description;
  this.update=update;
  this.volunteering=volunteering;
  this.donating=donating;
  this.contact=contact;
  this.email=email;
  this.lastUpdated=update;
}

// Entries - Refugee Community Kitchen
refugeeCommunityKitchen = new OrgEntry(
  "Refugee Community Kitchen",
  "Serving food without judgement",
  "We support displaced people in Northern France and homeless people in London. We give people more than a hot meal, we give them a place to gather and connect. Somewhere to recreate a community – providing space for medical and legal services, safeguarding groups and other support. <br> Every food serving is made of fresh highly nutritious food freshly cooked with healthy ingredients accompanied with fresh herbs and condiments so our beneficiaries can make the food to their taste as we serve and we do this for 50p a meal including all ingredients, gas equipment and delivery",
  "It is sad news that we have to announce that Refugee Community Kitchen is suspending operations in Northern France due the coronavirus. <br> RCK is a COMMUNITY kitchen. It is about people supporting people, and so it is with heavy hearts we have made this decision. We have to protect our volunteers, the people we serve and the people in the surrounding area. <br> We will be reviewing the situation over the next 3 weeks, posting updates and will be ready to start up again as soon as viably possible. <br> Thank you for your continued support during this unprecedented times. <br> Love to you all",
  "usually there's loads, but not at the moment",
  "We take all sorts of food donations. mostly peas:<ul><li>peas</li><li>peas</li><li>peas</li><li>peas</li><li>peas</li><li>peas</li></ul>",
  "You can contact us best by email or by facebook or tincans",
  "testemail.email.com",
  "18/05/20"
)
