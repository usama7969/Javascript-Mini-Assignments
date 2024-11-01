var reviews = [
    { name: "Ali Khan", occupation: "Engineer", profilePic: "./Images/one.PNG", review: "Great! I had an amazing experience with the service provided. The staff was very professional, and the environment was welcoming. Highly recommend this place for anyone looking for quality!" },
    { name: "Usman Malik", occupation: "Manager", profilePic: "./Images/two.PNG", review: "Fantastic! The team was efficient and knowledgeable, ensuring that every aspect of my needs was met. I left feeling satisfied and eager to return. Excellent overall experience!" },
    { name: "Hassan Ali", occupation: "Teacher", profilePic: "./Images/three.PNG", review: "Wonderful experience! The ambiance was perfect for relaxing, and the staff were attentive without being intrusive. I enjoyed every moment and look forward to my next visit!" },
    { name: "Omar Farooq", occupation: "Chef", profilePic: "./Images/four.PNG", review: "Exceptional! The quality of food and service was top-notch. I was amazed by the variety and flavor of the dishes. This place is a gem for food lovers!" },
    { name: "Bilal Ahmed", occupation: "Marketer", profilePic: "./Images/five.PNG", review: "Incredible! The experience was smooth and enjoyable from start to finish. The staff made everything easy and stress-free. I'm grateful for such a wonderful outing!" },
    
];


const colorss = [
    '#3357FF', '#0C065A', '#FF5733', '#33FF57', '#F0F5F8', '#F0E68C', 
    '#FF33A8', '#33FFD8', '#A033FF', '#FF8333', '#33FF8C'
];

function changeColors() {
    let randommColor = colorss[Math.floor(Math.random() * colorss.length)];
    document.body.style.backgroundColor = randommColor;
}




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
}

function prevReview() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = reviews.length - 1;
    updateReview();
    changeColors();
}

updateReview();
