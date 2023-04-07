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
    docs/
    lib/
    middleware/
    pages/
    components/
    stylesheets/
    scripts/
    tests/
```

If subject depends on another subject, please make this explicit in the README.

If you are deciding which subject folder between two or three options to put code in, choose the _most specific_ option available.

## When to use subject folders

When a significant capability requires its _own specific tests_, that is a great sign the capability should have its own subject folder.

## When not to use subject folders

A few things are harder to categorize, so there's a few more broad folders for a few things:

- `content/`, for things that make the `content/` or `data/` directories work and there's no more specific option.
- `environments/`, for things that make local, testing, preview, staging, production work and there's no more specific option.
- `frame/`, for things that make the header, footer, global sidebar functional and there's no more specific option.

But don't hestitate to make a new subject folder if there's at least a few files closely related.

## Where to get help

Check the README.md in the subject folder for questions specific to a subject.

For internal folks, please ask in the Docs Engineering Slack or repository.

For open source folks, please ask on the [discussion board](https://github.com/github/docs/discussions).
