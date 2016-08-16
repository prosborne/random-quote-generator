// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// On click this resets the setInterval for another 30 seconds so you don't 
// accidentally have quick loading quote issues. 
document.getElementById('loadQuote').addEventListener("click", autoLoadQuote, false);

// this setInterval var auto generates a new random quote every 30 seconds
var autoLoad = setInterval(printQuote, 30000);

// on page load this loads the first quote from the array, and not the html text. 
window.onload = printQuote;

// quotes array variable.  This array has properties for quote, author, source and year. 
var quotes = [
	{
		'quote' : 'We are all alike, on the inside.',
		'author' : 'Mark Twain',
		'source' : 'BrainyQuote.com',
		'year' : '',
		'tags' : ['funny guy', 'old guy', '1800\'s satirist', 'fancy' ]
	},
	{
		'quote' : 'Faith is namely this paradox that the single individual is higher than the universal.',
		'author' : 'Søren Kierkegaard ',
		'source' : 'Fear and Trembling,',
		'year' : '1843',
		'tags' : [ 'not funny', 'long winded', 'genius', 'funny o' ]
	},
	{
		'quote' : 'As I have said so many times, God doesn\'t play dice with the world.',
		'author' : 'Albert Einstein',
		'source' : 'Einstein and the Poet: In Search of the Cosmic Man',
		'year' : '1983',
		'tags' : []
	},
	{
		'quote' : 'He that is without sin among you, let him first cast a stone at her. ',
		'author' : 'Apostle John',
		'source' : 'Bible',
		'year' : '80',
		'tags' : [ 'love', 'not Peter', 'greek', 'that 80 AD homes' ]
	},
	{
		'quote' : 'I\'m so happy \'cause today I\'ve found my friends. They\'re in my head.',
		'author' : 'Curt Cobain',
		'source' : 'Lithium from the album Nevermind',
		'year' : '1991',
		'tags' : [ 'sad panda', 'shampoo free', 'music', 'grunge', 'flannel' ]
	},
	{
		'quote' : 'The Dude abides.',
		'author' : 'Jeff "the Dude" Lebowski (Jeff Bridges',
		'source' : 'The Big Lebowski',
		'year' : '1998',
		'tags' : []
	}
];

// array of possible background colors
var colors = ['#36b55c', '#330000', '#006699', '#333333', '#010101', '#654321']

// this function clears the interval (autoLoad) and then resets a new 
// 30 second interval.
function autoLoadQuote() {
	clearInterval(autoLoad);
	setInterval(printQuote, 30000);
}

// random background color generator 
function getRandomBg() {
	// this returns a random index of the colors quotes array
	var bg = colors[ Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor = bg;
}

// This is the actual random quote generator function
function getRandomQuote() {
	// this returns a random index of the quotes array.  Since I am just
	// dealing with arrays, the 0 index is valid and there is no reason
	// to add 1 to the result. 
	var getQuote = quotes[ Math.floor(Math.random() * quotes.length)];

	// this is a variable that holds the innerHtml that will be replaced
	// when the button is clicked.
	var currentQuote = '<p class="quote">' + getQuote.quote + '</p>';
	// using += allows you to append to the html string you are adding
    currentQuote += '<p class="source">' + getQuote.author;
    // this checks to make sure that the .source property of the guotes array
    // actually has a value
    if (getQuote.source) {
    	currentQuote += '<span class="citation">' + getQuote.source+ '</span>';
    }
    // this checks to make sure that the .year property of the guotes array
    // actually has a value
    if (getQuote.year) {
    	currentQuote += '<span class="year">' + getQuote.year + '</span>';
    }
    currentQuote += '</p>';
    if (getQuote.tags.length > 0) {
    	currentQuote += '<p><strong>tags: </strong>' + getQuote.tags.join(', ') + '</p>';
    }

    // this makes sure that the function returns the currentQuote when called. 
	return currentQuote;
}

// print function called by click event
function printQuote() {
	// Replaces the current html in #quote-box
	var updateQuote =document.getElementById('quote-box').innerHTML = getRandomQuote();
	getRandomBg();
}
