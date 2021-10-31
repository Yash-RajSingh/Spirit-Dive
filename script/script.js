// GETTING VOICES
var voices;
var timer = setTimeout(function() {
    voices = speechSynthesis.getVoices();
    console.log(voices);
    if (voices.length !== 0) {
        return voices;
        clearInterval(timer);
    }
}, 200);

// RESPONDING TO EVENTS ON THE DOM
var voices = window.speechSynthesis.getVoices();
const form = document.querySelector(".form");
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value;
    window.location.href = "#vid";    
    
    // SPEECH CONTENT
    // HOME-HEALING
    const text11 = `Hey there ${name} , how are you buddy. So home
    right.
    Isn't it one of the most amazing places. the place where we are born,
    the place where me make the most of our memories. Unfortunately, the experience is not the same for everyone.
    So ${name} you're having trouble with your family? yeah 
    that can be tough but it's your family and your life. 
    You cannot give up on them. 
    But at the same time you have to get control of your life. Stop letting people take the front wheel in your life and take that spot.
    know that everything will get better and everything will be okay.
    You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. 
    Think about peace, 
    imagine it, 
    feel it 
    and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, 
    more than that you will be happy.
    Just believe in the universe because it has plans for you.
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`; 

    // HOME-MOTIVATION
    const text12 = ` Hey there ${name} , how are you buddy. So family 
    right. 
    You feel like you're family is kinda disappointed in you. yeah
    that can be tough. Why do you think that? 
    Maybe your academic score isn't that great?
    Maybe you aren't as gifted in sports? Do you think that reason is enough for them to hate you? 
    nah that can't be. ${name} you and your family share a bond that transcends all of the mortal bonds
    the bond of blood. Well Maybe they are a little upset with you, maybe you aren't standing up to their expectations, But does that mean they love you any less?
    Absolutely not. They're still your family, they still love you with all their heart
    the only reason they are pushing you to your limit, is because they want you to be a great person in life. 
    They want you to excel in whatever you do and lead an amazing life, Don't misunderstand their concerns my friend.
    know that everything will get better and everything will be okay.
    ${name} Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. 
    Think about peace, 
    imagine it, 
    feel it 
    and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, 
    more than that you will be happy.
    Just believe in the universe because it has plans for you. 
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    // HOME-COMFORTING
    const text13 = `Hey there ${name} , how are you buddy. So home 
    right.
    Isn't it one of the most amazing places. the place where we are born, the place where we grow up,
    the place where me make the most of our memories. Unfortunately, we do face some hard times, 
    sometimes with people who are the closest to us.
    So ${name} you're having trouble with your family? yeah 
    that can be tough but it's your family and your life. You cannot give up on them. 
    Everything will get better, but in order for that to happen, you have to believe that things will get better. 
    You need to have a strong desire for things to be ok. 
    You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. 
    Think about peace, 
    imagine it, 
    feel it 
    and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, 
    more than that you will be happy.
    You will once again smile with your family and forget about the hard times 
    Just believe in the universe because it has plans for you. 
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    // SCHOOL-HEALING
    const text21 = ` Hey there ${name} , how are you buddy. So school
    right.
    Isn't it one of the most amazing places in the world. the place that at some point in our life, feels like a second home.
    School is the place where we make so many amazing friends and tons of sweet core memories.
    Unfortunately, the experience is not the same for everyone.
    So ${name} you're having trouble at your school? yeah 
    that can be tough but it's still one of the most amazing phases of your life. You cannot just give up on it. 
    But at the same time you cannot let it leave a deep and horrible scar in your life. Just gut up and take the control of your life.
    Become the person in charge of your life.
    know that everything will get better and everything will be okay.
    'You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. Think about peace, imagine it, feel it and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, more than that you will be happy.
    Just believe in the universe because it has plans for you.
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    // SCHOOL-MOTIVATION
    const text22 = ` Hey there ${name} , how are you buddy. So school
    right.
    Isn't it one of the most amazing places in the world. the place that at some point in our life, feels like a second home.
    School is the place where we make so many amazing friends and tons of sweet core memories.
    Unfortunately, the experience is not the same for everyone.
    So ${name} you're having trouble with your studies at your school? yeah 
    that can be tough 
    maybe you believe that you aren't as gifted in studies as your friends?
    maybe you want to do great in sports and you can't?
    yeah all of that kinda hurts
    but it's still one of the most amazing phases of your life. You cannot just give up believing that you are not good enough and let these things leave deep and horrible scars in your life. Just gut up and take the control of your life.
    Become the person in charge of your life.
    Try even harder, smash down those standards, 
    excel those test, 
    become the person you aspire to be.
    know that everything will get better and everything will be okay.
    You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. Think about peace, imagine it, feel it and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, more than that you will be happy.
    Just believe in the universe because it has plans for you.
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    //SCHOOL-COMFORTING
    const text23 = ` Hey there ${name} , how are you buddy. So school
    right.
    Isn't it one of the most amazing places in the world. the place that at some point in our life, feels like a second home.
    School is the place where we make so many amazing friends and tons of sweet core memories.
    Unfortunately, the experience is not the same for everyone.
    So ${name} you're having issues at your school? yeah 
    that can be tough 
    maybe you believe that you don't have good friends?
    maybe the teachers are a little hard on you?
    yeah all of that kinda hurts
    but none of that matters. 
    You are in one of the most amazing phases in your life.
    Are you going to let some people ruin it for you? 
    Don't give them the power to control how your life goies on.
    Just gut up and take the control of your life.
    Become the person in charge of your life.
    Make new great firends, 
    Or try enjoying your own company.
    Rise above of those mortal desires, you have to 
    for the people who need you
    and the one who needs you the most is you yourself 
    know that everything will get better and everything will be okay.
    You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. Think about peace, imagine it, feel it and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, more than that you will be happy.
    Just believe in the universe because it has plans for you.
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    //OFFICE-HEALING
    const text31 = ` Hey there ${name} , how are you buddy. So office
    right.
    The office life is kinda weird,
    for some its great, working hard at your dream job, meeting you co-worker friends everyday,
    But some of us don't think that highly of the office life.
    So ${name} you're having issues at your office? yeah 
    that can be tough 
    maybe you are not able to meet the deadlines?
    or maybe your boss is a little hard on you?
    or maybe the workload is too much for you handle?
    yeah all of that kinda hurts
    but that does not make you any less of the great human being that you are.
    remember not only you but your family is depending on you too. 
    you have to be the best version of yourself for them.
    know that everything will get better and everything will be okay.
    You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. Think about peace, imagine it, feel it and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, more than that you will be happy.
    Just believe in the universe because it has plans for you.
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    //OFFICE-MOTIVATION
    const text32 = ` Hey there ${name} , how are you buddy. So office
    right.
    The office life is kinda weird,
    for some its great, working hard at your dream job, meeting you co-worker friends everyday,
    But some of us don't think that highly of the office life.
    So ${name} you're having issues at your office? yeah 
    that can be tough 
    maybe you are not able to meet the deadlines?
    or maybe your boss is a little hard on you?
    or maybe the workload is too much for you to handle?
    yeah all of that kinda hurts
    but are you going to let some people ruin your sweet little life? or are yoy going to do something about it. 
    Don't give them the power to control how your life goies .
    Just gut up and take the control of your life.
    Become the person in charge of your life.
    Get ready to be the star of that next project.
    Set you're mind to win the title of employee of the month
    Rise up and become the person you envisioned yourself as in your childhood, 
    you have to 
    for the people who need you
    remember not only you but your family is also depending on you. 
    you have to be the best version of yourself for them.
    Let these words drive you in your quest to success.
    know that everything will get better and everything will be okay.
    You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. Think about peace, imagine it, feel it and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, more than that you will be happy.
    Just believe in the universe because it has plans for you.
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    //OFFICE-COMFORTING
    const text33 = ` Hey there ${name} , how are you buddy. So office
    right.
    The office life is kinda weird,
    for some its great, working hard at your dream job, meeting you co-worker friends everyday,
    But some of us don't think that highly of the office life.
    So ${name} you're having issues at your office? yeah 
    that can be tough 
    maybe you are not able to meet the deadlines?
    or maybe your boss is a little hard on you?
    or maybe the workload is too much for you to handle?
    yeah all of that kinda hurts
    but are you going to let some people ruin your sweet little life? No you're not 
    Don't give them the power to control how your life goies.
    Everything will get better and Everything will be okay.
    Rise up and become the person you envisioned yourself as in your childhood, 
    you have to 
    for the people who need you
    remember not only you but your family is also depending on you. 
    you have to be the best version of yourself for them.
    You, ${name}, are a child of the universe, it will surely aid one of its children. Just sit back and close your eyes. Take one deep breath, two deep breaths 
    another deep breath, and two deep breaths and slowly fade into nothingness. Feel the energy flowing around you.
    Start feeling the flow of the universe's energy through your body. Let me be the voice you need to hear.
    let me be your companion in the journey of your spiritual awakening. Think about peace, imagine it, feel it and embrace it.
    And even though your healing journey will not be a short one, know that one day you too will be ok, more than that you will be happy.
    Just believe in the universe because it has plans for you.
    keep listening to this healing music until you feel better
    until next time ${name}.
    take care my friend!`;

    //HOME HEALING
    if ((document.querySelector('#ch1').checked) && (document.querySelector('#ch4').checked)) {
        const utterance = new SpeechSynthesisUtterance(text11);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }//HOME MOTIVATION
    else if ((document.querySelector('#ch1').checked) && (document.querySelector('#ch5').checked)) {
        const utterance = new SpeechSynthesisUtterance(text12);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }//HOME COMFORTING
    else if ((document.querySelector('#ch1').checked) && (document.querySelector('#ch6').checked)) {
        const utterance = new SpeechSynthesisUtterance(text13);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }
    //SCHOOL HEALING
    else if ((document.querySelector('#ch2').checked) && (document.querySelector('#ch4').checked)) {
        const utterance = new SpeechSynthesisUtterance(text21);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }//SCHOOL MOTIVATION
    else if ((document.querySelector('#ch2').checked) && (document.querySelector('#ch5').checked)) {
        const utterance = new SpeechSynthesisUtterance(text22);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }//SCHOOL COMFORTING
    else if ((document.querySelector('#ch2').checked) && (document.querySelector('#ch6').checked)) {
        const utterance = new SpeechSynthesisUtterance(text23);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }
    //OFFICE HEALING
    if ((document.querySelector('#ch3').checked) && (document.querySelector('#ch4').checked)) {
        const utterance = new SpeechSynthesisUtterance(text31);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }//OFFICE MOTIVATION
    else if ((document.querySelector('#ch3').checked) && (document.querySelector('#ch5').checked)) {
        const utterance = new SpeechSynthesisUtterance(text32);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }//OFFICE COMFORTING
    else if ((document.querySelector('#ch3').checked) && (document.querySelector('#ch6').checked)) {
        const utterance = new SpeechSynthesisUtterance(text33);
        utterance.rate = 0.65;
        utterance.voice = voices[4];
        window.speechSynthesis.speak(utterance);
    }
    playtime();
} )


// PLAYING HEALING MUSIC
const playtime = () => {
var audio = new Audio('assets/song.mp3');
audio.playbackRate = 1.7;
audio.play();
}
