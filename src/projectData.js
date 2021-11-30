const projects = [
    {
        id: 1,
        title: 'BICYCLE HUB – NICHE WEBSITE',
        image: './images/rn-mockup',
        description: 'A Full stack web application where user can order bicycles online. Login system with firebase and private routes. Dashboard for users and admins where admins can do CRUD operations and users can give reviews and monitor their orders.',
        tools: ['React', 'Redux', 'MongoDB', 'JWT', 'Express'],
        description_details: [
            "1. It is a Bicycle Related website. You can get all kind of cycle related information here. This website is hosted by firebase. The server is deployed in Heroku and for database we used MongoDB",
            "2. In the home page, there are five parts, banner, all Cycles, introduction, reviews along with header and footer",
            "3. If anyone want to book the cycles he / she have to register / login to the website. After successful login, you can see the details of the services and then able to book.",
            "4. There is a private route for book now button in cycles section which is located in home page and for whice you have to login to see the details. And, also there is About us route in the header.",
            "5. If the user is logged in then he can see see MY orders,reviews and pay in dashboard route ,situated in sidebar section and if Admin logs in then he/she can see add a product, manage all products,make an admin and manage all order. If the admin wants then he/she can make another user admin."
        ],
        github: 'https://github.com/sam002696/niche-product-client-side-A12',
        githubServer: 'https://github.com/sam002696/niche-product-server-side-A12',
        siteSS: 'https://i.ibb.co/k5kFxLb/niche-product-website-631e9-web-app.png',
        link: 'https://niche-product-website-631e9.web.app/',
    },
    {
        id: 2,
        title: 'TOUR APP – TOURISM WEBSITE ',
        image: './images/tmdb-mockup',
        description: 'A single page full stack traveling website. Login system with firebase and private routes.Dashboard for users and admins where admins can do CRUD operations.',
        description_details: [
            "1. It's a Tourism/Travel Agency related website. You can get all kind of tourism related information here. This website is hosted by firebase.",
            "2. In the home page, there are five parts, banner, tour packages, how it work, suggestions for discovery, our newsletter along with header and footer.",
            "3. If anyone want to see the details of services he / she have to register / login to the website. After successful login, you can see the details of the services. The data we get here is from MongoDB.",
            "4. There is a private route for book now button in packages section which is located in home page and for whice you have to login to see the details. And, also there is About us route in the header.If the user is logged in then he can see see MY BOOKINGS, MANAGE ALL and ADD Package buttons in header section.",
            "5. There is a login page in the website, you can toggle to register if you are a new user. Your name will be shown in the header when you are in login state. Login / registration form was implemented by firebase Authentication."
        ],
        tools: ['React', 'API', 'SASS'],
        github: 'https://github.com/sam002696/tourism-related-website-client-site-A11',
        githubServer: 'https://github.com/sam002696/tourism-related-website-server-side',
        siteSS: 'https://i.ibb.co/pKgR1w4/tourism-website-cc247-web-app-1.png',
        link: 'https://tourism-website-cc247.web.app/',
    },
    {
        id: 3,
        title: 'MEDI HUB – HEALTHCARE WEBSITE',
        image: './images/recipeApp-mockup',
        description: 'A modern website for hospital. Where user can see all services and find a doctor for treatment. User can sign in with email or google ',
        description_details: [
            "1. It's a Healthcare related Hospital website. You can get all kind of hospital services related information here. This website is hosted by firebase.",
            "2. In the home page, there are four parts, banner, services, expertise, doctors along with header and footer.",
            "3. If anyone want to see the details of services he / she have to register / login to the website. After successful login, you can see the details of the services.",
            "4. There are two private route in the header section. For whice you have to login to see the details. And, also there are doctors, About us route in the header.",
            "5. There is a login page in the website, you can toggle to register if you are a new user. Your name will be shown in the header when you are in login state. Login / registration form was implemented by firebase Authentication."
        ],
        tools: ['Javascript', 'API'],
        github: 'https://github.com/sam002696/healthcare-related-website-A10',
        siteSS: 'https://i.ibb.co/ctyG6sF/healthcare-web-93407-firebaseapp-com.png',
        link: 'https://healthcare-web-93407.firebaseapp.com/',
    },
];

export default projects;
//<img src="https://i.ibb.co/ctyG6sF/healthcare-web-93407-firebaseapp-com.png" alt="healthcare-web-93407-firebaseapp-com" border="0">
//<img src="https://i.ibb.co/pKgR1w4/tourism-website-cc247-web-app-1.png" alt="tourism-website-cc247-web-app-1" border="0"></img>
//<img src="https://i.ibb.co/k5kFxLb/niche-product-website-631e9-web-app.png" alt="niche-product-website-631e9-web-app" border="0"></img>