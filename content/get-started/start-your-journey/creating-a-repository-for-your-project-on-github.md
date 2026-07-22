---
title: 'Creating a repository for your project on GitHub'
shortTitle: 'Create your repository'
intro: 'Create a repository on {% data variables.product.github %} to store your code, track its history, and build a software project you can share.'
allowTitleToDifferFromFilename: true
category:
  - Learn to code
contentType: get-started
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

In this tutorial, you'll create the repository you'll use throughout this series. You'll build a small software project called `stargazers-log`. By the end of the journey, you'll plan work, write code, review changes, and deploy your code to a live website.

`stargazers-log` is a simple website that tracks and displays repositories you have starred. It helps you build a personal catalog of tools and code examples you care about. Starring repositories also helps you bookmark projects for later and show appreciation to maintainers.

{% data reusables.enterprise.url-substitute-note %}

## Prerequisites

{% ifversion fpt or ghec %}

* An account on {% data variables.product.github %}. To sign up, go to [https://github.com/signup](https://github.com/signup?ref_product=github&ref_type=engagement&ref_style=text).

{% else %}

* An account on your {% data variables.product.prodname_ghe_server %} instance.

{% endif %}

## What is a repository?

A repository is where you keep code and files for a software project on {% data variables.product.github %}. It stores your files, tracks each change as a commit, and gives collaborators a shared place to work. Most software projects—from a single web page to a large application—live in their own repository.

## Creating your repository

Follow these steps to create the repository for this series.

{% ifversion fpt or ghec %}

1. In the upper-right corner of any page on {% data variables.product.github %}, select {% octicon "plus" aria-label="Create new" %}, then click **New repository**.

   Alternatively, go to [new repository page on {% data variables.product.prodname_dotcom_the_website %}](https://github.com/new?ref_product=github&ref_type=engagement&ref_style=text) to open the new repository form directly.

{% else %}

1. On {% data variables.location.product_location %}, in the upper-right corner of any page, select {% octicon "plus" aria-label="Create new" %}, then click **New repository**.

{% endif %}

1. Use the **Owner** dropdown menu to select your personal account to own the repository.
1. In the **Repository name** field, type `stargazers-log`.
1. In the **Description** field, type a short description, such as "A log of the repositories I've starred."
1. Use the **Choose visibility** dropdown menu to select **Public** so you can publish your software project to a live site later in this series.
1. Select **Add README**. This gives your repository a starting file and a place to describe your software project.
1. You do not need to add a `.gitignore` or license file for this software project, so leave those options unchanged.
1. Click **Create repository**.

## Adding a starter web page

Your software project will grow into a small web page, so add an `index.html` file to hold its content.

1. On the main page of your `stargazers-log` repository above the list of files, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %}**, then click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Create new file**.
1. In the file name field, type `index.html`.
1. In the file editor, add the following starter content.

   ```html copy
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <title>Stargazers log</title>
     </head>
     <body>
       <h1>Stargazers log</h1>
       <p>A log of the repositories I've starred.</p>
     </body>
   </html>
   ```

1. Click **Commit changes**.
1. In the dialog that opens, keep the default option to commit directly to the `main` branch, then click **Commit changes**.

## What you accomplished

| Task | Outcome |
| ---- | ------- |
| Created a repository | You created `stargazers-log` to store your software project on {% data variables.product.github %}. |
| Added a README | You gave your software project a place to describe itself. |
| Added a web page | You created `index.html` as the starting point for your site. |

## Next steps

* Now that your software project has a home, plan the work you want to do. Continue to [AUTOTITLE](/get-started/start-your-journey/planning-your-work).
