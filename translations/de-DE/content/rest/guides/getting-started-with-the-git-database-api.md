---
title: Getting started with the Git Database API
intro: 'The Git Database API gives you access to read and write raw Git objects to your Git database on {% data variables.product.product_name %} and to list and update your references (branch heads and tags).'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Übersicht

This basically allows you to reimplement a lot of Git functionality over our API - by creating raw objects directly into the database and updating branch references you could technically do just about anything that Git can do without having Git installed.

Git Database API functions will return a `409 Conflict` if the Git repository is empty or unavailable.  An unavailable repository typically means {% data variables.product.product_name %} is in the process of creating the repository. For an empty repository, you can use the "[Create or update file contents](/v3/repos/contents/#create-or-update-file-contents)" endpoint to create content and initialize the repository so you can use the Git Database API. Contact {% data variables.contact.contact_support %} if this response status persists.

![git database overview](/assets/images/git-database-overview.png)

For more information on the Git object database, please read the [Git Internals](http://git-scm.com/book/en/v1/Git-Internals) chapter of the Pro Git book.

As an example, if you wanted to commit a change to a file in your repository, you would:

* Get the current commit object
* Retrieve the tree it points to
* Retrieve the content of the blob object that tree has for that particular file path
* Change the content somehow and post a new blob object with that new content, getting a blob SHA back
* Post a new tree object with that file path pointer replaced with your new blob SHA getting a tree SHA back
* Create a new commit object with the current commit SHA as the parent and the new tree SHA, getting a commit SHA back
* Update the reference of your branch to point to the new commit SHA

It might seem complex, but it's actually pretty simple when you understand the model and it opens up a ton of things you could potentially do with the API.

### Checking mergeability of pull requests

{% warning %}

**Warning!** Please do not depend on using Git directly or [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference)  for updates to `merge` Git refs, because this content becomes outdated without warning.

{% endwarning %}

A consuming API needs to explicitly request a pull request to create a _test_ merge commit. A _test_ merge commit is created when you view the pull request in the UI and the "Merge" button is displayed, or when you [get](/v3/pulls/#get-a-pull-request), [create](/v3/pulls/#create-a-pull-request), or [edit](/v3/pulls/#update-a-pull-request) a pull request using the REST API. Without this request, the `merge` Git refs will fall out of date until the next time someone views the pull request.

If you are currently using polling methods that produce outdated `merge` Git refs, then GitHub recommends using the following steps to get the latest changes from the base branch (usually `master`):

1. Receive the pull request webhook.
2. Call [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/v3/pulls/#get-a-pull-request) to start a background job for creating the merge commit candidate.
3. Poll your repository using [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/v3/pulls/#get-a-pull-request) to see if the `mergeable` attribute is `true` or `false`. You can use Git directly or [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/v3/git/refs/#get-a-reference) for updates to `merge` Git refs only after performing the previous steps.
