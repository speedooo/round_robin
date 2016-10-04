var listOfNames = ["Pete", "Brian", "Cathy", "Alyssa", "Hien"];
var numberOfGroups = 3;
var groups = [];

function createGroups(numberOfGroups) {
	for(i=0;i<=numberOfGroups;i++) {
		groups[i] = [];
	}
}

function listGroups(groups) {
	for(i=0;i<=groups.length-1;i++) {
		console.log(groups[i]);
	}
}

function iterateThroughGroups(listOfNames) {
   for(i=0;i<=groups.length-1;i++) {
   	    if(listOfNames.length > 0) {
	  		var name = pickRandomName(listOfNames);
	  		groups[i].push(name);
   	    }
   }
   // base case
   if(listOfNames.length >= 1) {
   	iterateThroughGroups(listOfNames);
   }
}

function pickRandomName(listOfNames) {
  if (listOfNames.length == 1) {
  	console.log("You're out of names");
  	return listOfNames.pop();
  }
  var numberOfNames = listOfNames.length;
  var randomName = listOfNames[(Math.random() * listOfNames.length)];
  var indexOfRandomPick = listOfNames.indexOf(randomName);
  var removedName = listOfNames.splice(indexOfRandomPick, 1);
  removedName = removedName.toString();
  return removedName;
}
createGroups(numberOfGroups);
iterateThroughGroups(listOfNames);
listGroups(groups);
