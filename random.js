window.onload = function() {
    const quotes = [
        "Iam atomic",
        "bankai Sakashima Yokoshima Happōfusagari",
        "Genjutsu of that level doesn't work on me",
        "Doing things for others is nice and all, but if you cant do anything for yourself, then how can you call that kindness?",
        "The betrayal you can see is trivial. What is truly fearsome, is the betrayal you dont see...",
        "Throwing away victory for the sake of manners is a rookie mistake. Captains don't have the time to waste on that kind of thing. Don't waste your time trying to play the good guy. No matter what debts you may owe, from the instant you find yourself on the battleground, both sides are evil",
        "If fate is a millstone, then we are the grist. There is nothing we can do. So I wish for strength. If I cannot protect them from the wheel, then give me a strong blade, and enough strength... to shatter fate",
        "Amaterasu",
        "If I had 5 different lives, I could have 5 different jobs, live in 5 different places, have 5 favorite foods(?), and fall in love with the same person 5 different times",
        "What you want to protect Ichigo is not the same as what I want to protect. What I wanted to protect was always you Ichigo",
        "Who's Running? Running Where... AND WHY?!"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    const quoteElement = document.createElement('p');
    quoteElement.textContent = selectedQuote;
    quoteElement.style.textAlign = 'center';
    quoteElement.style.fontSize = '1.5rem';
    document.body.appendChild(quoteElement);

    if (selectedQuote === "Who's Running? Running Where... AND WHY?!") {
        const audio = new Audio('sound.mp3'); // Make sure sound.mp3 is in the same folder
        audio.play();
    }
};