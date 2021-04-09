# Calorie-Tracker-BE
Solo Project 2 (Backend)

## Calorie Tracker App
**Calorie tracker is an app that helps users to keep track of their daily calorie intake.**

## About this app
How much you eat matters more than what you eat when it comes to losing weight or building muscles. It is vital to keep track of daily calorie intake and macro nutrients(Carbs, Fat, Protein). With this app, tracking food is fast and easy with this app.

## Wireframes
![1](./WIREFRAME/1.png)
![1](./WIREFRAME/2.png)
![1](./WIREFRAME/3.png)
![1](./WIREFRAME/4.png)
![1](./WIREFRAME/5.png)

## User Story

- When user loads the first page, user sees login, signup buttons
- User creates profile with name, email, password, username, sex, height, and weight.
- When user logs in, dashboard(account editor, calorie log), signout link are shown, user is redirected to a new page where they can search, create, save meals(breakfast, lunch, dinner).
- User can edit/delete account in account editor tab.
- User can search food for nutrition information – nutrition information will be shown.
- User can save nutrition information and, create and save meals.
- User can edit/delete their saved meals
## ERD
![1](./WIREFRAME/ERD.png)
## HTTP Routes
[Users]
- POST'/users/login', user can sign into account
- POST'/users/new', user can sing up to make a new account
- POST'/users/save/:foodId, user can save food nutrition info
- DELETE '/users/:id/', user can delete account
- DELETE '/users/:id/meal/:id', user can delete meals
- PUT'/users/:id/edit', user can edit saved meals

[Foods]
- POST'/search/food', user can search/get nutrition info
- GET'/search/:foodId'
- POST '/userId/save/:foodId' user can see saved meals


## MVP checklist 
- Can user sign up, sign in and sing out?
- Can user get nutrition information?
- Can user save and delete nutrition info?
- Can user see saved nutrition info?

## Stretch goals
- User can delete their account.
- User can see their daily calorie goals and the remainder of it.
- User can create up to 5 meals for free, otherwise user has to subscribe.