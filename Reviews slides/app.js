var reviews = [
    { name: "Ali Khan", occupation: "Engineer", profilePic: "./Images/one.PNG", review: "Great! I had an amazing experience with the service provided. The staff was very professional, and the environment was welcoming. Highly recommend this place for anyone looking for quality!" },
    { name: "Usman Malik", occupation: "Manager", profilePic: "./Images/two.PNG", review: "Fantastic! The team was efficient and knowledgeable, ensuring that every aspect of my needs was met. I left feeling satisfied and eager to return. Excellent overall experience!" },
    { name: "Hassan Ali", occupation: "Teacher", profilePic: "./Images/three.PNG", review: "Wonderful experience! The ambiance was perfect for relaxing, and the staff were attentive without being intrusive. I enjoyed every moment and look forward to my next visit!" },
    { name: "Omar Farooq", occupation: "Chef", profilePic: "./Images/four.PNG", review: "Exceptional! The quality of food and service was top-notch. I was amazed by the variety and flavor of the dishes. This place is a gem for food lovers!" },
    { name: "Bilal Ahmed", occupation: "Marketer", profilePic: "./Images/five.PNG", review: "Incredible! The experience was smooth and enjoyable from start to finish. The staff made everything easy and stress-free. I'm grateful for such a wonderful outing!" },
    
];




const gradients = [
    'linear-gradient(90deg, #3357FF, #0C065A)', 
    'linear-gradient(90deg, #FF5733, #33FF57)', 
    'linear-gradient(90deg, #F0F5F8, #F0E68C)', 
    'linear-gradient(90deg, #FF33A8, #33FFD8)', 
    'linear-gradient(90deg, #A033FF, #FF8333)', 
    'linear-gradient(90deg, #33FF8C, #FFD700)', 
    'linear-gradient(90deg, #FF4500, #FFD700)', 
    'linear-gradient(90deg, #8A2BE2, #7FFF00)', 
    'linear-gradient(90deg, #00CED1, #FF69B4)', 
    'linear-gradient(90deg, #FF1493, #00BFFF)', 
    'linear-gradient(90deg, #FF6347, #3CB371)', 
    'linear-gradient(90deg, #6A5ACD, #FF8C00)'
];

// const gradientss = [
//     'linear-gradient(90deg, #FFB6C1, #FF69B4)',
//     'linear-gradient(90deg, #B2E0E6, #6DD5ED)', 
//     'linear-gradient(90deg, #FFFACD, #FFEFD5)', 
//     'linear-gradient(90deg, #FFDEE9, #B5FFFC)', 
//     'linear-gradient(90deg, #FFF8E1, #FFABAB)', 
//     'linear-gradient(90deg, #FFCCBC, #D1C4E9)', 
//     'linear-gradient(90deg, #E1BEE7, #D1C4E9)', 
//     'linear-gradient(90deg, #B2EBF2, #80DEEA)', 
//     'linear-gradient(90deg, #FFEB3B, #FF9800)', 
//     'linear-gradient(90deg, #E3F2FD, #BBDEFB)'  
// ]

function changeColors() {
    let randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomGradient;
}

// function changeColorButton() {
//     let randomGradientt = gradientss[Math.floor(Math.random() * gradientss.length)];
//     document.querySelector('.slider').style.background = randomGradientt; // Change this line
// }






var currentIndex = 0;

function updateReview() {
    var review = reviews[currentIndex];
    document.getElementById('profilePic').src = review.profilePic;
    document.getElementById('name').innerText = review.name;
    document.getElementById('occupation').innerText = review.occupation;
    document.getElementById('reviewText').innerText = review.review;
}

function nextReview() {
    currentIndex++;
    if (currentIndex >= reviews.length) currentIndex = 0;
    updateReview();
    changeColors();
    // changeColorButton()
}

function prevReview() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = reviews.length - 1;
    updateReview();
    changeColors();
    // changeColorButton()
}

updateReview();
