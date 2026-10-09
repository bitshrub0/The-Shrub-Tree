let modInfo = {
	name: "The Shrub Tree",
	author: "Bitshrub0",
	pointsName: "seeds",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Bitshrub Random Chaos",
	discordLink: "link",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 72,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.00",
	name: "Something! (Maybe)",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.00</h3><br>
		- Added shrubs.<br>
		- Added stuff.`

let winText = `Well. That wasn't very hard... For now, at least.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('s', 11)) gain = gain.add(2)
	if (hasUpgrade('s', 12)) gain = gain.times(1.4142135624)
	if (hasUpgrade('s', 13)) gain = gain.times(1.6180339887)
	if (hasUpgrade('s', 14)) gain = gain.times(2.7182818285)
	if (hasUpgrade('s', 15)) gain = gain.times(upgradeEffect("s", 15))
	if (hasUpgrade('s', 21)) gain = gain.times(upgradeEffect("s", 21))
	if (hasUpgrade('s', 22)) gain = gain.times(96)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e10"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}