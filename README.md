# Test Napptilus
***
Test Napptilus is a small application where the user can see a list of mobile devices, access their data and be able to add them to the shopping cart, being able to choose between their characteristics.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

**Remember that every hour the products you have saved in your cart will be deleted!**. \
Take care with the version in **React > 18.2.0 and NodeJS > 18.15.** 

1- Git Clone. \
    $git clone https://github.com/Paula28/test-napptilus.git \
2- Install packages. \
    $ npm install. \
3- Run project. \
    $ npm start 

### `How to Use the Project`

**MAIN**.\
In the project, in the first window we have a header where we have an icon and a breadcrumb that will take you to the main page if you click on it. We also have a search to search by the brand and model of our devices. And we have a shopping cart on the right where we can see how many devices we have purchased. In the body we find the list of said devices where if we lack the price data we cannot access it. If you put the mouse over the mobile device you can see the surface detail of it. If we want to access a more complex detail, we can click on it and it will take us to all its properties

**DETAIL**

In the detail screen we can see in the header that we already lack the search input to search. We continue to have the logo of our app, the breadcrumbs and also the shopping cart on the right. In the body we will find the image of our mobile device that if we pass our mouse over it will enlarge. And on the right we can see all its characteristics and we can also see two selects where it will show us the characteristics that we can choose, such as its color and storage. And last but not least the button that will allow us to make the purchase of our mobile device. Once we buy a mobile in our cart it will show that we have purchased a mobile device. Remember that when you go back after having searched in the search, the search for this is saved.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


