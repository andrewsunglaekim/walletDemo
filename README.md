# Wallet Demo

## Setup

To install all dependencies for this application, run the following in the terminal:

```bash
$ npm install
```

## Running Each Demo

### ReactJS

To run the react JS version in this repos root directory, run the following in the terminal:

```bash
$ npm start
```

Then navigate to `http://localhost:3000/` in a browser

### AngularJS

Because this app isn't running any http requests in this demo just open `src/angularJsSrc/index.html` in a browser

### Vanilla JS

For the same reasons as Angular just open `src/vanillaJsSrc/index.html` in a browser

### Styles

All 3 applications point to the exact same style sheet located in `src/styles/index.css` that was compiled from `src/styles/index.scss` using sass.

### Additional Notes

#### Vanilla JS

The Code is a bit contrived and slightly overkill for something so simple; however I wanted to convey some things through it:

- I wanted to demonstrate a working knowledge of object oriented Javascript

> In the ReactJS code, I use class structures and more component based "functional programming", I like it better; however I still think there's value in Object Oriented Programming and that they are not mutually exclusive

- I wanted to demonstrate a working knowledge of constructor functions and prototyping.

> Again, a bit contrived parsing the hardcoded JSON type data into "models". Additionally using ReactJS in the other code base I'm already demonstrating ES6 class structure so I wanted to throw constructor functions and the like.

- I wanted to demonstrate how to build dynamic applications using pure javascript with 0 frameworks or libraries.

#### Angular JS

It's what I code in for work currently, I figured I'd throw it in here. I could have gone a bit crazier separating things into custom directives but...

> meh, angular

####  ReactJS - Why I love this framework

I really love React. I think the organization of React code really lends itself to a more component or feature based separation of concerns. Reusability and modularity go hand in hand with React. I think even this small application highlights the idea of small reusable components.

#### Summary

Writing this demo was fun, honestly the vanillaJS portion probably took the longest attempting to build all the interfaces from scratch that I get out of the box with things like react and angular. It allows me to appreciate it more! I kid about angular too, I really do enjoy writing angular as well, just not  as much. Really as long as I get to code JS all day I'm a pretty happy camper.
