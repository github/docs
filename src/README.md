# Welcome to our src directory

Our application is in Node, Express, React, & Next. We are using a "subject folder" pattern. Each folder represents a major capability of the docs.github.com. To learn more about each subject, check the README.md file in the folder.

## Why subject folders

We used to organize our code more by role: client, stylesheets, server middleware, shared files, tests, etc. We found over time as the site grew it was difficult to find all the pieces that made a single feature work across the code base. Instead, we're moving to organize by subject, so its easy to find all the related code for a single capability in one place.

## How to create and use subject folders

Run `script/create-subject.js --name x` to create a new subject folder.

Subjects do not need every element below. Not every element needs to be a folder. A subject folder looks similar to:

```
src/
  xsubject/
    README.md
    components/
    lib/
    tests/
    scripts/
    stylesheets/
    pages/
    docs/
```

We compose subjects together like TBD - still a work in progress!

How to declare a subject depends on another subject TBD - still a work in progress!

## When to use subject folders

TBD - still a work in progress!

## When not to use subject folders

How to deal with things that don't fit into the pattern TBD - still a work in progress!

## Where to get help

TBD - still a work in progress!
