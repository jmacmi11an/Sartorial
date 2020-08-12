# Sartorial
## A web application in development
[Sartorial](https://sartorial-5c2a4.web.app/dressingroom)

## Technologies
HTML
CSS
JavaScript
React
Underscore
Firebase

## Summary
Sartorial is a website catering to men interested in creating a minimalist and yet stylish wardrobe. As users acquire wardrobe pieces their outfit suggestions become more diverse. As users age their wardrobe suggestions change.



## Skills Improved Upon/Lessons Learned

I'll start with skills that I have improved upon since past projects. First of all I spent much more time planning this project. This included outlining the page views that I wanted, where components would be displayed, what components I would need, etc. During this time I also drew out several sketches about how best to organize the storing of certain data - principally, the Wardrobe Zero items as well as all future items. I considered storing the Wardrobe Zero items in my database and attaching their unique ID to users. But in the end decided on storing them locally since they will always start out the same. The advantages of this decision is that once the application is loaded most of the required information is already accessible and shouldn't require many database pulls. In the future however, I foresee running into some problems if/when I allow users to modify their Wardrobe Zero items.

I was much more specific with naming conventions throughout this project and profoundly felt the affects of better naming especially later in the week as I approached a MVP. As I continue to build on this project, I know that the

The use of firebase was one of the biggest obstacles to my early progress. I spent several days trying to connect what was successful user authentication in firebase, to my stored database of user information. After attaching this data there was a good deal of time spent learning how to modify data as well as query it. Once that was completed, however, progress was much smoother.

Even with time dedicated to brainstorming the best way to store data I made a lot of mistakes which required a few restarts. Many of these mistakes might have remained invisible to users if it never grew bigger than a portfolio project. But half of the fun (challenge) is trying to brainstorm ways of laying the foundation for the website to successfully scale. This includes keeping the site performant by reducing database queries, organizing data so that queries are more targeted, etc. I also plan on eventually storing large amounts of data on a Wardrobe feed (like a newsfeed but of users' wardrobes) which would include unique photos (stored somewhere, probably Cloudinary), user information, etc.




## Future Updates

I started this project with really grand ambitions, and quickly felt the limitations of a single week. However, as time permits I hope to slowly start ticking away at the following list.

- [ ] Design - this website is in desperate need of some quality CSS. This is in part due to wanting to avoid CSS libraries that I had used before (Bootstrap, Material UI). Writing my own CSS will be more time/labor intensive, but the point is to improve this skill.
- [ ] Creating a page that clearly allows users to modify what wardrobe items they have from within their Wardrobe Zero.
- [ ] Creating a page that clearly allows users to customize their Wardrobe Zero items.
- [ ] Creating a page that clearly allows users to modify their personal information.
- [ ] Allow Profile photo options (most important), style preferences and general personalization (less important).
- [ ] Include easter eggs for users based on their birthday/holidays/etc. For example, on your birthday, "go out and buy yourself that pocket square." Or when a user begins a new decade - say 40 - "time to up your game. Lose the sandals, grab some loafers."
- [ ] Rethinking of WardrobeZero clothing objects so that they hold more of their own information including their image source, descriptions, seasonality,  etc.
- [ ] Remove hardcoding of wardrobe data. This should be done by populating each Wardrobe Zero object with as much information as possible, so that when imported they already have all the data they need.
- [ ] Adding an accessories form so users can select which accessories they have.
- [ ] Updating the Dressing Room page so that users can manually change specific items rather than always having it randomly generated.
- [ ] Creating a new component that stores items from Wardrobe Zero yet to be acquired that is displayed on the Dressing Room page.
- [ ] Creating a new component that stores accessories that the user owns (as well as greyed out ones they don't yet own).
- [ ] Using Framer.js to allow the accessory images to be dragged and dropped around the page.
- [ ] Allowing users to customize their wardrobe zero by importing their own photos to replace the stock photos.
- [ ] Allowing users to create custom wardrobes for different occasions. (hiking/evening/winter/etc.)
- [ ] Connect to a weather and location api to give outfit tips that are seasonally appropriate
- [ ] Add changes to what WardrobeZero is based on the age of the user. More casual when the user is younger, more formal as they age.
- [ ] Create a Wardrobes page that displays a searchable list of users and their public wardrobes.
- [ ] Add more content and unique pages about each of the wardrobe items. Why they were chosen to be a part of this wardrobe, good brands, how to search for quality, etc.
