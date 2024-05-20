# Getting Started with the APP

#All Games App

This document will provide you with an overview of the app and guide you through the process of setting it up and starting it.

**About the App**
All Games App is an interface for SPA application. It provides users with access to a wide range of games. The app consists of list of games and widget with filters and sorting. The games list can be filtered by platform, genre and players, and also sorted by rating.

The app is built using React TypeScript, RTK Query and styled using SCSS

## Link to deploy


# Getting Started

To start using the app, follow the steps below:

1.  **Get the RapidAPI Key:**
    Visit the [RAWG Games Database](https://rawg.io/) on RawgAPI's website. Sign up for an account if needed, and obtain the Authorization key. This key is required to access the API.
2.  **Add the Access Key to the .env file:**
    Open the `.env` file in the root of the project and replace `YOUR_RAPIDAPI_KEY` with the key you obtained from the RawgAPI website.

```cpp
REACT_APP_ACCESS_KEY="YOUR_RAPIDAPI_KEY"
```

You can also get more information on RawgAPI documetation:

[API documentation](https://api.rawg.io/docs/)

## Installation

To install the app and its dependencies, follow the steps below:

1.  **Clone the repository:**
    Start by cloning the repository to your local machine using the following command:
    ```cpp
    git clone https://github.com/helga-umrikh/All-Games-App
    ```
2.  **Navigate to the project directory:**
    Once the repository is cloned, navigate to the project directory using the following command:
    ```cpp
    cd all-games
    ```
3.  **Install dependencies:**
    Before running the app install the package manager npm to install all the dependencies.
    ```cpp
    npm install
    ```

## Starting the App

To start the app, run the following command:

```cpp
npm start
```

This will start the development server and open the app in your default web browser. You should now be able to navigate to the home page and explore the posts available on the site.
