DAY-11 — React Router (Multi Page Applications)

Source:
React Router Docs
W3Schools

Topics:
- Routing
- BrowserRouter
- Routes
- Route
- Link
- 404 Page
- Multi-page app structure

==================================================

1) What is Routing?

Routing means navigating between pages/components
without refreshing the browser.

Example pages:
- Home
- About
- Contact
- Dashboard
- Profile

Without routing:
Everything stays on one page ❌

With routing:
Multiple pages navigation works ✅

--------------------------------------------------

2) Install React Router

Command:

npm install react-router-dom

This installs React Router library.

--------------------------------------------------

3) BrowserRouter

Used in:

main.jsx

Example:

<BrowserRouter>
   <App />
</BrowserRouter>

Purpose:
Enables routing for the entire app.

Think of it as:
Main routing engine

--------------------------------------------------

4) Routes

Used inside App.jsx

Example:

<Routes>
   ...
</Routes>

Purpose:
Contains all route definitions.

--------------------------------------------------

5) Route

Used to map URL → component

Example:

<Route path="/" element={<Home />} />

Explanation:

"/"
means homepage URL

<Home />
component will render

--------------------------------------------------

Example:

<Route path="/about" element={<About />} />

When user visits:

/about

About component loads

--------------------------------------------------

6) Link

Used for navigation

Example:

<Link to="/about">About</Link>

Why not use <a> tag?

<a> refreshes browser ❌

<Link> avoids refresh ✅

Better performance

--------------------------------------------------

7) Folder Structure

src/

main.jsx
App.jsx

components/
   Navbar.jsx

pages/
   Home.jsx
   About.jsx
   Contact.jsx
   NotFound.jsx

This is common industry structure.

--------------------------------------------------

8) Navbar Example

Navbar contains links:

Home
About
Contact

Allows navigation between pages.

--------------------------------------------------

9) 404 Page

Used when user visits invalid URL

Example:

<Route path="*" element={<NotFound />} />

Example invalid route:

/xyz

Shows:
Page Not Found

--------------------------------------------------

10) Flow of Routing

User clicks link
→ URL changes
→ Matching route found
→ Component renders

--------------------------------------------------

11) Real-world Usage

Used in apps like:

Netflix
Amazon
LinkedIn
Dashboard systems
Admin panels
E-commerce websites

--------------------------------------------------

12) Common Mistakes

- Forgetting BrowserRouter
- Using <a> instead of <Link>
- Wrong route path
- Missing 404 route
- Poor folder structure

--------------------------------------------------

13) Interview Questions

What is React Router?
Library for routing in React apps

-----------------------------------

What does BrowserRouter do?
Enables routing in application

-----------------------------------

What is Routes?
Container for all routes

-----------------------------------

What is Route?
Maps URL to component

-----------------------------------

Why use Link instead of anchor tag?
Prevents page refresh

-----------------------------------

How to create 404 page?
Using path="*"

--------------------------------------------------

Mini Project

Build:

Multi Page Portfolio App

Pages:
- Home
- About
- Contact
- 404 Page

Add:
- Navbar
- Routing

--------------------------------------------------

Key Takeaways

Routing makes apps multi-page

React Router is essential

Link improves performance

404 pages improve user experience

Used in almost every real React application

--------------------------------------------------

Next (Day-12)

Context API
Global State Management
Avoid prop drilling