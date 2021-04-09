# Calorie-Tracker-BE
Solo Project 2 (Backend)

## Calorie Tracker App
**Calorie tracker is an app that helps users to keep track of their daily calorie intake.**

## About this app
How much you eat matters more than what you eat when it comes to losing weight or building muscles. It is imperative to keep track of daily calorie intake and macro nutrients(Carbs, Fat, Protein). With this app, tracking food is fast and easy with this app.

## Wireframes

## User Story

- When user loads the first page, user sees login, signup buttons
- User creates profile with name, email, password, username, sex, height, and weight.
- When user logs in, dashboard(account editor, calorie log), signout link are shown, user is redirected to a new page where they can search, create, save meals(breakfast, lunch, dinner).
- User can edit/delete account in account editor tab.
- User can search food for nutrition information – nutrition information will be shown.
- User can save nutrition information and, create and save meals.
- User can edit/delete their saved meals

## HTTP Routes
- GET'/login', user can sign into account
- GET'/logout', user can sign out of account
- GET'/user/new', user can go to a signup page
- POST'/user', user can sing up to make a new account
- PUT'/user/:id/edit', user can edit account info
- DELETE '/user/:id/', user can delete account
- GET'/food', user can search/get nutrition info
- POST'/user/:id/, user can save food nutrition info
- POST'/user/:id/recipe' user can create meals
- GET '/user/:id/recipe' user can see saved meals
- DELETE '/user/:id/recipe/:id', user can delete meals

## MVP checklist 
- Can user sign up, sign in and sing out?
- Can user get nutrition information?
- Can user save and delete nutrition info?
- Can user create meals?

## Stretch goals
- User can delete their account.
- User can see their daily calorie goals and the remainder of it.
- User can create up to 5 meals for free, otherwise user has to subscribe.
