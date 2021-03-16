---
title: Finding changed methods and functions in a pull request
intro: 'You can quickly find proposed changes to a method or function in a pull request in *.go*, *.js*, *.ts*, *.py*, *.php*, and *.rb* files.'
redirect_from:
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Anyone with read access to a repository can see a summary list of the functions and methods changes in certain files of a pull request.

The summary list of methods and functions is created from these supported file types:
  - Go
  - JavaScript (includes Typescript, Flow, and other types of JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request where you'd like to find the changed functions and methods.
{% data reusables.repositories.changed-files %}
4. To see a summary list of the changed functions and methods, click **Jump to...**. ![Jump to drop-down menu](/assets/images/help/pull_requests/jump-to-menu.png)
5. Select the changed function or method from the drop-down menu. You can also enter the name of the function or method to filter results. ![Filter function and methods](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Note:** If you don't see the functions or methods you expected, confirm that your code compiles and doesn't contain errors. Only functions and methods changed in this pull request and found in *.go*, *.js*, *.ts*, *.py*, *.php*, and *.rb* files appear in the drop-down menu.

 {% endnote %}

6. You'll be redirected to the first line of the function or method you selected. ![view function or method in files changed](/assets/images/help/pull_requests/view-selected-function-or-method.png)

### 더 읽을거리

- "[About comparing branches in a pull request](/articles/about-comparing-branches-in-pull-requests)"
- "[Filtering files in a pull request by file type](/articles/filtering-files-in-a-pull-request)"
