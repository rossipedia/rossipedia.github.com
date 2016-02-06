---
layout: post
title: ReactJS, or 'Why Client Side Is Fun Again'
modified:
categories: 
  - javascript
  - webdev
description: My thoughts on the UI library ReactJS
tags: [javascript, reactjs]
image:
  feature: react-header.png
  credit:
  creditlink:
comments: true
share:
date: 2016-02-08T10:17:11-07:00
---

Wow. It's been almost a year since my last post! I should probably do this
more often.

Over the last several months I've been diving deep into Facebook's [ReactJS][1]
library for client-side web development. And after more than 15 years of
developing in HTML/JavaScript, it's finally _fun_. 

<!-- more -->

So, what is ReactJS all about? [React's site][1] isn't actually much help,
mentioning a bunch of stuff about UI, Virtual DOM, and Data Flow. 

But nothing about what it actually _does_ or why you'd want to use it. So here's
my attempt to summarize:

> ReactJS is an opinionated JavaScript library for creating user interfaces
> using self-contained, reusable components. It focuses on separation of
> **concerns** vs separation of **technologies**, keeping the UI and the code
> that drives it together in a single component, rather than spread across
> several files.

That's not so bad, is it? In this series of posts, I'm going to dive into React,
and how to go about building UIs with it.

But first, let me clarify something.  Many React examples you find out there can
be overwhelming, and assume you will be using many things that aren't actually
_required_ to use React, such as:

* node / npm
* webpack
* ES6 / ES2015
* Flux / Redux
* JSX

Ultimately, these things have value and can be incredibly useful, but the idea
that they're _required_ is just not true, and has given React a bad reputation
as inaccessible or difficult to get started with. 

What I'd like to do is start at the bottom, and build a strong foundation of
what React is and how to use it, and then integrate these other pieces one at a
time, explaining each along the way, hopefully to instill a solid foundation in
the React ecosystem.

Also, most examples are either based around the TodoList or other mundane
applications that aren't really all that useful in the Real World, in my
opinion. I don't want to do that. Rather, I want to build something that
hopefully many will find applicable to the actual work they're doing. I haven't
decided what that is yet, but I plan to settle on that in either the next post
or the one after that.

So, let's get to it then!

> I'm going to make a few assumptions about the reader here, namely that you are
> familiar with HTML, JavaScript, jQuery, and the DOM. If not, then this series
> of posts is probably going to be quite confusing.

## React Basics: Components

In React, UIs are driven by _Components_. So, in React speak, what is a
component? It's a self-contained piece of code that handles rendering the UI,
and optionally responding to events.

In it's simplest form, it's a JavaScript object with a single
`render` method, that is passed to React's `createClass` method:

``` javascript
var HelloWorld = React.createClass({
  render: function () {
    ... // return the UI here
  }
});
```
The two required pieces here are `React.createClass`, and the `render()` method.

`React.createClass` is used to _declare_ a component. Note this doesn't actually
_do_ anything yet. In order to actually use a component, you need to create it.
You do this by calling `React.createElement`. 

`createElement`? Why not `createComponent`? Well, because you can create either
a component, or a DOM element (actually, you can create more than that, but when
using React in the browser, those are the two you care about).

In fact, let's go ahead and use `createElement` to make our `HelloWorld`
component actually render something:

``` javascript
var HelloWorld = React.createClass({
  render: function () {
    return React.createElement('div', null, 'Hello, World!');
  }
});

```

Let's break that down:

``` javascript
React.createElement(
  'div', // the element or component to create
  null,  // the "props" to assign to the component
         // think of these as analagous to html attributes
  'Hello World!' // the child content of the element
                 // multiple children can be 
                 // passed as additional
                 // arguments
);
```

Let's dive a bit more into `props` (the second parameter). "Props" is a concept
that is fairly core to the React experience. They are the "properties" of a
component, and are assigned when creating it. Think of them like configuration
for your element. 

When creating a standard HTML/DOM element (like `'div'` above), props generally
map to HTML attributes, but instead of using the hyphenated or all lowercase
form, React uses camelCased identifiers (eg: `onClick` instead of `onclick`,
`backgroundColor` instead of `background-color` for styles, etc...).

## Getting a component on to a page.

Okay, so now that we have declared a component, how do show it on a page? That's
where `ReactDOM.render(reactElement, domElement)` comes in:

> React is actually split into multiple libraries, as the core of React
> (components, elements, etc...) is conceptually independent of where it's used.
> When working on the web, you will need to not only include React, but the
> ReactDOM library as well, which is how we get a component into the DOM of a
> web page.

In action:

``` html
<!doctype html>
<head>
  <script src="https://fb.me/react-0.14.7.js"></script>
  <script src="https://fb.me/react-dom-0.14.7.js"></script>
</head>

<body>
  <div id="hello"></div>
  <script>
    var HelloWorld = React.createClass({
      render: function () {
        return React.createElement('div', null, 'Hello, World!');
      }
    });

    // Render the component into an element
    React.render(
      React.createElement(HelloWorld),
      document.getElementById('hello');
    );
  </script>
</body>
```

[Here's][2] a functioning JSBin of the the above.

Notice that we use the same method (`React.createElement`) to create our custom
component (`HelloWorld`) as we use to render that component's contents (the
`div` element). Also, as we're not setting any component properties, nor any
children of the component, we can omit those arguments from the `createElement`
call.

That's it for the basics! Next post we'll go into passing props into our
component and start getting our components to do something actually interesting!


[1]: http://facebook.github.io/react/
[2]: http://jsbin.com/noyote/edit?html,output

<!-- vim: set tw=80 wm=80 : -->
