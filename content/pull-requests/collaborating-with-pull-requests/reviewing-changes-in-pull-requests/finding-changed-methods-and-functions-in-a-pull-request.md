---
title: Finding changed methods and functions in a pull request
intro: 'You can quickly find proposed changes to a method or function in a pull request in *.go*, *.js*, *.ts*, *.py*, *.php*, and *.rb* files.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
---
Anyone with read access to a repository can see a summary list of the functions and methods changes in certain files of a pull request.

The summary list of methods and functions is created from these supported file types:
- Go
- JavaScript (includes Typescript, Flow, and other types of JavaScript)
- PHP
- Python
- Ruby

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request where you'd like to find the changed functions and methods.
{% data reusables.repositories.changed-files %}
1. To see a summary list of the changed functions and methods, click **Jump to {% octicon "triangle-down" aria-hidden="true" %}**.

   ![Screenshot of the "Files changed" tab for a pull request. The "Jump to" option is outlined in dark orange.](/assets/images/help/pull_requests/jump-to-menu.png)

1. Select the changed function or method from the drop-down menu. You can also enter the name of the function or method to filter results.

   {% note %}

   **Note:** If you don't see the functions or methods you expected, confirm that your code compiles and doesn't contain errors. Only functions and methods changed in this pull request and found in _.go_, _.js_, _.ts_, _.py_, _.php_, and _.rb_ files appear in the drop-down menu.

   {% endnote %}

1. You'll be redirected to the first line of the function or method you selected.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)"
