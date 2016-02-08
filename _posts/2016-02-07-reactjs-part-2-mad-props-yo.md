---
layout: post
title: "ReactJS Part 2: Mad Props Yo"
modified:
categories:
 - javascript
 - webdev
description:
tags: [javascript, reactjs]
image:
  feature: react-header.png
  credit:
  creditlink:
comments: true
share:
date: 2026-02-07T16:59:35-07:00
---

Welcome back! Last paost we took a quick jaunt through the basics of ReactJS and
got a Component to render on a page. Exciting!

Well... not really. It's actually kind of boring. I mean, it doesn't actually
_do_ anything. Let's fix that, and learn some more of what makes React tick in
the process.

<!-- more -->

## Props

React wouldn't be terribly interesting if it were purely static. Luckily, it's
not. React's dynamic abilities come from two things: `props` and `state`. Let's
go over the first one...er...first: `props`.

Props allow you to pass information _into_ a component. They're also how you get
info _out of_ a component (generally via callbacks). Remember from the [first
post], `props` is the second paramter to `React.createElement`. It takes the
form of an object, and is accessible from within the component via `this.props`.

To demonstrate, let's whip together a component for displaying a message:

~~~ javascript
var e = React.createElement;

var Message = React.createClass({
  render: function () {
    return e('div', { className: 'message' }, this.props.text);
  }
});

// mount it
ReactDOM.render(
  e(Message, { text: 'Hello, World!' }),
  document.getElementById('app')
);
~~~

A few things to point out in this sample:

* To reduce noise, I've aliased `React.createElement` to a shorter function `e`.
* As React is a JavaScript library, we use the JavaScript DOM property name
  `className` instead of the HTML `class` attribute name.
* We're passing the message as a prop now, using the 2nd arg to
  `React.createElement`.

The above code, when rendered will produce the following HTML (using the same
page structure as last time):

~~~ html
<div id="app">
  <div class="message">Hello, World!</div>
</div>
~~~

If you inspect the output, you'll see a bunch of `data-reactid` attributes.
These are internal housekeeping attributes React uses to determine which
elements need to be updated, in a process called "reconciliation". I'll dig into
that in the next post.
{: .notice}



<!-- vim: set wm=80 tw=80 : -->

[first post]: {{ site.baseurl }}/blog/2016/02/reactjs-or-why-client-side-is-fun-again/#react-basics-components
