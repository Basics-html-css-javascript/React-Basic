# React Begin

**React Begin** is a beginner-friendly project built using React and Vite. It helps you understand how to create and use components, write JSX, handle JavaScript in JSX, and apply basic interactivity to your app.

---

## 🚀 Project Overview

This project contains:

- A `Greeting` component that displays a welcome message.
- A `Button` component that shows an alert when hovered.
- An `App` component that renders both components.

This simple setup introduces the core features of React development.

---

## 📘 Concepts Covered

### ✅ Writing Your First Component

In React, a component is a reusable block of UI. You define it using a JavaScript function that returns JSX (markup). In this project, the `Greeting` and `Button` components are examples of functional components.

Example:
```jsx
const Greeting = () => {
  return <h1>Hello, Sharada!</h1>;
};
✅ Importing and Exporting Components
To keep code organized, components are placed in separate files. You can use export default to export a component, and import to include it in another file.

Example:

jsx
Copy
Edit
// In Greeting.jsx
export default Greeting;

// In App.jsx
import Greeting from './Greeting';
✅ Writing Markup with JSX
JSX allows you to write HTML-like syntax inside JavaScript. It makes it easy to describe what the UI should look like.

Example:

jsx
Copy
Edit
return (
  <button>Click me!</button>
);
This looks like HTML but is actually JSX. JSX is then compiled into regular JavaScript by React.

✅ JavaScript in JSX with Curly Braces
You can include JavaScript expressions inside JSX by using curly braces {}. This is useful for inserting dynamic content, calling functions, or using variables.

Example:

jsx
Copy
Edit
const name = "Sharada";
return <h1>Hello, {name}!</h1>;
In this case, {name} is replaced with the value of the name variable when rendering the UI.


🔄 How to Run the Project
bash
Copy
Edit
npm install
npm run dev
Then visit http://localhost:5173 in your browser.

🎯 Output
Heading: Hello, Sharada!

Button: Click me! (shows alert when hovered)

🧠 Learning Summary
This project helps you practice:

Building functional components

Using JSX for markup

Inserting JavaScript into JSX

Styling elements inline

Handling events like hover and click
