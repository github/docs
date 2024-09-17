# Welcome to our src directory

Our application is in Node, Express, React, & Next. We are using a "subject folder" pattern. Each folder represents a major capability of the docs.github.com. To learn more about each subject, check the README.md file in the folder.

## Why subject folders

We used to organize our code more by role. Client, stylesheets, server middleware, shared files, tests, and so on. As the site grew, we had difficulty finding all the pieces that made a single feature work across the code base. Instead, we're moving to organize by subject. Subjects are easier to find all the related code for a single capability in one place.

## How to create and use subject folders

Subjects do not need every element below. Not every element needs to be a folder. A subject folder looks like:

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

Choose the _most specific_ subject folder available when organizing code.

## When to use subject folders

A capability should have its own subject folder when it has its _own specific tests_.

## When not to use subject folders

A few things are harder to categorize, so there's some broad folders:

- `frame/`, for things that make the header, footer, global sidebar functional. And there's no more specific option.
- `workflows/`, for things that are processes rather than the production application. And there's no more specific option.

But don't hesitate to make a new subject folder if there's at least a few files related.

## Where to get help

Check the README.md in the subject folder for questions specific to a subject.

For internal folks, please ask in the Docs Engineering Slack or repository.

For open source folks, please open an issue in the repository.

## A note on tests and required checks

Most subject folders have their own mention in `.github/workflows/test.yml`.
Open the file to see the beginning of it. It's manually maintained but
it's important to point out two things:

1. It's manually entered so creating a `src/foo/tests/*.js` doesn't
   automatically start running those tests.
1. When you add an entry to `.github/workflows/test.yml`, and it's
   gone into `main`, don't forget to add it to the branch protection's
   required checks.
