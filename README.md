src/
├── api/
│   └── museumApi.ts          # RTK Query API slice for fetching posts
├── components/
│   ├── Filter.tsx            # Component for filtering posts
│   ├── Navbar.tsx            # Navigation bar with search functionality
│   ├── Posts.tsx             # Component for displaying posts
│   ├── Search.tsx            # Search bar component
│   └── ...                   # Other components
├── features/
│   ├── auth/
│   │   └── authSlice.ts      # Redux slice for authentication
│   ├── filters/
│   │   └── filterSlice.ts    # Redux slice for filtering posts
│   └── ...                   # Other features
├── pages/
│   ├── Home.tsx              # Home page with posts and filters
│   ├── Login.tsx             # Login page
│   └── ...                   # Other pages
├── App.tsx                   # Main application component
├── store.ts                  # Redux store configuration
└── ...                       # Other filesMuseum App
# This is a React-based web application that showcases a collection of museum posts. It includes features like data fetching, filtering, searching, login, and logout functionalities. The app is built using modern web development tools and follows best practices for state management, component design, and user experience.

# Features
## 📥 Data Fetching:

Fetches museum posts from an external API using RTK Query.

Handles loading and error states gracefully.

## 🔍 Filtering:

Allows users to filter posts by width (e.g., greater than 3000px or less than 3000px).

Includes a reset filter option to display all posts.

## 🔎 Searching:

Enables users to search posts by the author's name.

The search functionality is integrated into the Navbar.

## 🔑 Login and Logout:

Implements a login system where users can enter their surname.

Stores user data in localStorage for persistence.

Provides a logout option to clear user data and redirect to the login page.

## 🛡️ Protected Routes:

Restricts access to certain pages (e.g., Home) unless the user is logged in.

## Technologies Used
React: A JavaScript library for building user interfaces.

Redux Toolkit (RTK): A state management library for managing global state.

RTK Query: A data fetching and caching library built on top of Redux Toolkit.

React Router: A library for handling routing in a React application.

TypeScript: A typed superset of JavaScript for better developer experience.

Tailwind CSS: A utility-first CSS framework for styling components.

## Patterns and Principles
State Management
Redux Toolkit (RTK) is used for global state management.

Slices are created for authentication (authSlice) and filtering (filterSlice).

RTK Query is used for data fetching and caching, reducing the need for manual API calls.

## Component Design
Reusable Components: Components like Search, Filter, and Posts are designed to be reusable and modular.

Separation of Concerns: Logic for data fetching, filtering, and searching is separated into different components and slices.

## Data Fetching
RTK Query simplifies data fetching and caching.

The useGetPostsQuery hook is used to fetch museum posts from the API.

## Loading and error states are handled to provide a smooth user experience.

## Filtering and Searching
Client-Side Filtering: Filtering is performed on the client side using JavaScript.

Dynamic Updates: The filteredPosts state is updated dynamically based on user input (e.g., search query or filter selection).

Combined Filters: Users can apply multiple filters (e.g., width and search) simultaneously.

## Authentication
Login: Users can log in by entering their surname, which is stored in localStorage and Redux state.

Logout: Users can log out, which clears their data from localStorage and Redux state.

Protected Routes: Certain routes are protected and only accessible to logged-in users.

## Error Handling
Graceful Error Handling: Errors during data fetching or user input are handled gracefully, with appropriate messages displayed to the user.

