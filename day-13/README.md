DAY-13 — React Performance Optimization

Source:
React Docs
W3Schools

Topics:
- React.memo
- useMemo
- useCallback
- Performance optimization
- Prevent unnecessary re-renders

==================================================

1) Why Performance Optimization?

Imagine:

- E-commerce app with 500 products
- Dashboard with charts
- Large search lists

Without optimization:

Component re-renders
↓
Expensive calculations run repeatedly
↓
App becomes slow ❌

With optimization:

Only necessary work happens
↓
Better performance ✅

--------------------------------------------------

2) React.memo

Purpose:

Prevents unnecessary re-rendering
of child components.

Example:

const Child = React.memo(({name})=>{
   return <h1>{name}</h1>
})

Without React.memo:

Parent renders
↓
Child renders again ❌

With React.memo:

Parent renders
↓
Child renders only if props change ✅

--------------------------------------------------

3) useMemo

Purpose:

Memoizes calculated values.

Without useMemo:

const result = expensiveCalculation()

Runs every render ❌

With useMemo:

const result = useMemo(()=>{
   return expensiveCalculation()
},[])

Runs only when dependency changes ✅

--------------------------------------------------

4) useCallback

Purpose:

Memoizes functions.

Without useCallback:

function handleClick(){
   console.log("clicked")
}

New function created every render ❌

With useCallback:

const handleClick=useCallback(()=>{
   console.log("clicked")
},[])

Function remains stable ✅

--------------------------------------------------

5) Difference Between useMemo and useCallback

useMemo

- Stores value
- Optimizes calculations

Example:

const result=useMemo(()=>{},[])

-----------------------------------

useCallback

- Stores function
- Optimizes functions

Example:

const handleClick=useCallback(()=>{},[])

--------------------------------------------------

6) Mini Project

Build:

Product Search App

Features:

- Product list
- Search bar
- Filter products
- Optimize filtering using useMemo

==================================================

MINI PROJECT CODE EXPLANATION

Code:

import { useState, useMemo } from "react";

function App(){

const products=[
{id:1,name:"Laptop"},
{id:2,name:"Mobile"},
{id:3,name:"Keyboard"},
{id:4,name:"Mouse"},
{id:5,name:"Monitor"},
{id:6,name:"Headphones"}
];

const [search,setSearch]=useState("");

const filteredProducts=useMemo(()=>{

console.log("Filtering products...");

return products.filter(product=>
product.name
.toLowerCase()
.includes(search.toLowerCase())
);

},[search]);

return(
<div>

<input
type="text"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

{
filteredProducts.map(product=>(
<h3 key={product.id}>
{product.name}
</h3>
))
}

</div>
);

}

==================================================

7) Code Explanation

Step 1:

Create products array

const products=[
{id:1,name:"Laptop"},
{id:2,name:"Mobile"}
]

Purpose:

Stores all products.

--------------------------------------------------

Step 2:

Create state

const [search,setSearch]=useState("")

Purpose:

Stores user input.

Initially:

search=""

--------------------------------------------------

Step 3:

Create useMemo

const filteredProducts=useMemo(()=>{

return products.filter(...)

},[search])

Purpose:

Optimizes filtering.

Without useMemo:

Every render
↓
Filter runs again ❌

With useMemo:

Filter runs only when
search changes ✅

--------------------------------------------------

Step 4:

Filter logic

products.filter(product=>

product.name
.toLowerCase()
.includes(search.toLowerCase())

)

Purpose:

Checks:

Does product name contain search text?

--------------------------------------------------

Example:

Search:

mo

Results:

Mobile
Monitor
Mouse

--------------------------------------------------

Step 5:

Render products

filteredProducts.map(product=>(

<h3 key={product.id}>
{product.name}
</h3>

))

Purpose:

Displays filtered products.

--------------------------------------------------

8) Flow of Application

Component loads
↓
Products displayed
↓
User types text
↓
search state updates
↓
useMemo runs filter
↓
filteredProducts created
↓
UI updates

--------------------------------------------------

9) Common Mistakes

- Using useMemo everywhere
- Missing dependency array
- Forgetting key
- Wrong filter logic

--------------------------------------------------

10) Interview Questions

What is React.memo?

Prevents unnecessary component renders

-----------------------------------

What is useMemo?

Memoizes values

-----------------------------------

What is useCallback?

Memoizes functions

-----------------------------------

Difference between useMemo and useCallback?

useMemo → values

useCallback → functions

-----------------------------------

Should optimization always be used?

No

Use only when needed

--------------------------------------------------

Key Takeaways

React.memo → optimize components

useMemo → optimize calculations

useCallback → optimize functions

Used in large applications

--------------------------------------------------

Next (Day-14)

Authentication
Login/Logout flow
Protected routes