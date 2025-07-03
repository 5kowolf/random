window.onload = function() {
    console.log('Script loaded!'); // Debug message
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
        "Who's Running? Running Where... AND WHY?!",
        "It’s not my fault. I was left unsupervised.",
        "Let's see how many times you can be pulled apart and put back together again.",
        "You may not recognize me at first, but I assure you, it's still me.",
        "It’s not exactly loneliness that makes me feel lonely. It’s that I once knew what it was like to not be alone.",
        "There’s no such thing as a genuine request. Everyone’s just using pretty words to disguise their own self-interest.",
        "If the world is cruel, then at least the lies should be kind.",
        "People who don't try to think about others will fail. But people who only think about others will also fail.",
        "Kindness is just an excuse people use when they want something in return.",
        "It’s said that if you change, the world changes with you. But that’s a lie.",
        // The full king/horse quote as one string
        "I always come back"
        
        
        
    ];

    const backgrounds = [
        'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
        'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)'
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    const selectedBg = backgrounds[randomIndex % backgrounds.length];
    document.body.style.background = selectedBg;

    console.log('Selected quote:', selectedQuote); // Debug message
    const quoteElement = document.createElement('p');
    quoteElement.textContent = selectedQuote;
    quoteElement.style.textAlign = 'center';
    quoteElement.style.fontSize = '1.5rem';
    document.body.appendChild(quoteElement);

    if (selectedQuote === "Who's Running? Running Where... AND WHY?!") {
        const playButton = document.createElement('button');
        playButton.textContent = 'Play Sound';
        playButton.style.display = 'block';
        playButton.style.margin = '20px auto';
        playButton.onclick = function() {
            const audio = new Audio('shadow.mp3');
            audio.play();
        };
        document.body.appendChild(playButton);
    }
    if (selectedQuote === "I always come back") {
        const playButton = document.createElement('button');
        playButton.textContent = 'Play Sound';
        playButton.style.display = 'block';
        playButton.style.margin = '20px auto';
        playButton.onclick = function() {
            const audio = new Audio('trap.mp3');
            audio.play();
        };
        document.body.appendChild(playButton);
    }
    if (selectedQuote === "Genjutsu of that level doesn't work on me") {
        const playButton = document.createElement('button');
        playButton.textContent = 'Play Sound';
        playButton.style.display = 'block';
        playButton.style.margin = '20px auto';
        playButton.onclick = function() {
            const audio = new Audio('itachi.mp3');
            audio.play();
        };
        document.body.appendChild(playButton);
    }

    // 1 in a million rare event
    if (Math.floor(Math.random() * 1000000) === 0) {
        const rareDiv = document.createElement('div');
        rareDiv.textContent = 'They fear nothing. They devour worlds. But they fear the Slayer.';
        rareDiv.style.textAlign = 'center';
        rareDiv.style.fontSize = '2rem';
        rareDiv.style.color = '#FFD700';
        rareDiv.style.background = '#222';
        rareDiv.style.padding = '2rem';
        rareDiv.style.margin = '2rem auto';
        rareDiv.style.borderRadius = '1rem';
        document.body.appendChild(rareDiv);

        // Confetti effect
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-5vh';
            confetti.style.width = '8px';
            confetti.style.height = '16px';
            confetti.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
            confetti.style.opacity = '0.8';
            confetti.style.borderRadius = '2px';
            confetti.style.zIndex = 9999;
            confetti.style.transition = 'top 2.5s linear, transform 2.5s linear';
            document.body.appendChild(confetti);
            setTimeout(() => {
                confetti.style.top = '110vh';
                confetti.style.transform = `rotate(${Math.random()*360}deg)`;
            }, 10);
            setTimeout(() => {
                confetti.remove();
            }, 2600);
        }
    }
};

