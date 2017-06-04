/* var section = document.getElementByClass('evento');
var sectionDataValues = document.querySelectorAll('.title')
for(var i = 0; i < sectionDataValues.length; i++) {
  var thisSection = sectionDataValues[i]
  console.log('.title' + thisSection.getElementsByTagName('h2')[0].innerHTML)
} */
function indexing() {
  var eventsList = document.querySelectorAll('[data-role="event"]');
  var allEvents = eventsList.length;
  var eventsMap = {};
  for (var i = 0; i < allEvents; i++) {
    var oneEvent = eventsList[i];
    var nameEvent = oneEvent.querySelector('[data-role="event-title"]')
    .innerHTML;
    console.log(nameEvent);
    eventsMap[nameEvent] = oneEvent;
  }
  var mapKeys = Object.keys(eventsMap);
  console.log(mapKeys);
  mapKeys.sort();
  var container = document.querySelector('[data-role="event-container"]');
  for (var i = 0; i < allEvents; i++) {
    var actualKey = mapKeys[i];
    var oneEvent = eventsMap[actualKey];
    container.appendChild(oneEvent);
  }
}
function descending() {
  var eventsList = document.querySelectorAll('[data-role="event"]');
  var allEvents = eventsList.length;
  var eventsMap = {};
  for (var i = 0; i < allEvents; i++) {
    var oneEvent = eventsList[i];
    var nameEvent = oneEvent.querySelector('[data-role="event-title"]')
    .innerHTML;
    console.log(nameEvent);
    eventsMap[nameEvent] = oneEvent;
  }
  var mapKeys = Object.keys(eventsMap);
  console.log(mapKeys);
  mapKeys.sort();
  mapKeys.reverse();
  var container = document.querySelector('[data-role="event-container"]');
  for (var i = 0; i < allEvents; i++) {
    var actualKey = mapKeys[i];
    var oneEvent = eventsMap[actualKey];
    container.appendChild(oneEvent);
}
}
