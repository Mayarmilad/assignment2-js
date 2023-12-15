var quotes=["Be yourself; everyone else is already taken― Oscar Wilde",
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",
"“So many books, so little time.”― Frank Zappa",
"“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
"“You only live once, but if you do it right, once is enough.”― Mae West",
"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”― J.K. Rowling, Harry Potter and the Goblet of Fire",
"“If you tell the truth, you don't have to remember anything.”― Mark Twain",
"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”― Maya Angelou",
"“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard"
]

function newQuote(){
    var randomQuotes=Math.floor(Math.random()*quotes.length);
    document.getElementById("display").innerHTML=quotes[randomQuotes];
}

