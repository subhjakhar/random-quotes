var motivation = [
    //"Quote 1",
    "When you have a dream, you\'ve got to grab it and never let go.",

    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",

    "Nothing is impossible. The word itself says \'I\'m possible!",

    "There is nothing impossible to they who will try.",

    "The bad news is time flies. The good news is you\'re the pilot.",

    "Life has got all those twists and turns. You\'ve got to hold on tight and off you go.",

    "Keep your face always toward the sunshine, and shadows will fall behind you.",

    "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",

    "Success is not final, failure is not fatal: it is the courage to continue that counts.",

    "You define your own life. Don\'t let other people write your script.",

    "You are never too old to set another goal or to dream a new dream.",

    "At the end of the day, whether or not those people are comfortable with how you\'re living your life doesn\'t matter. What matters is whether you\'re comfortable with it.",

    "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you\'re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",

    "For me, becoming isn\'t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn\'t end.",

    "Spread love everywhere you go.",

    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",

]
var motivationAuthor = [
    // "— Author 1",
   " — Carol Burnett",

    "— Amal Clooney",

    "— Audrey Hepburn",

    "— Alexander the Great",

    "— Michael Altshuler",

    "— Nicole Kidman",

    "— Walt Whitman",

    "— Duchess Meghan",

    "— Winston Churchill",

    "— Oprah Winfrey",
    
    "— Malala Yousafzai",

    "— Dr. Phil",

    "— Carrie Ann Moss",

    "— Michelle Obama",

    "— Mother Teresa",

    "— Lady Gaga",

]

function motivated(){
        var randomSelection = Math.floor(Math.random() * (motivation.length))
        document.querySelector(".quoteClass").innerHTML = motivation[randomSelection]
        document.querySelector(".quoteAuthor").innerHTML = motivationAuthor[randomSelection]

}