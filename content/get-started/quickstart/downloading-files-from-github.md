---
title: Downloading files from GitHub
shortTitle: Download files from GitHub
intro: 'Learn how to download files from {% data variables.product.prodname_dotcom %}, and understand the difference between downloading, cloning, and forking.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Repositories
type: tutorial
---

## Introduction

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom_the_website %} is home to millions of open-source software projects, that you can copy, customize, and use for your own purposes.

{% endif %}

There are different ways to get a copy of a repository's files on {% data variables.product.product_name %}, and each method has its own use case.

| Term     | Definition | Use case |
| ------------- | ------------- | -------|
|  Download   |  To save a snapshot of a repository's files to your local computer. | You want to use or customize the content of the files, but you're not interested in applying version control. |
|  Clone   |  To make a full copy of a repository's data, including all versions of every file and folder. | You want to work on a copy of the files on your local computer, using Git to track and manage your changes. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)."  |
|  Fork   |  To create a new repository on {% data variables.product.product_name %}, linked to your personal account, that shares code and visibility settings with the original ("upstream") repository. |  You want to use the original repository's data as a basis for your own project on {% data variables.product.prodname_dotcom %}. Or, you want to use the fork to propose changes to the original ("upstream") repository. After forking the repository, you might want to clone the repository, so that you can work on the changes on your local computer. For more information, see "[AUTOTITLE](/get-started/quickstart/fork-a-repo)." |

This tutorial shows you how to download a repository's files to your local computer.

## Prerequisites

- You must have a {% data variables.product.prodname_dotcom %} account.

## Downloading a repository's files

For the tutorial, we'll use a demo repository ([octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife)).

1. Navigate to [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.click-code-dropdown %}
{% data reusables.repositories.download-zip %}

## Conclusion

You now have a copy of the repository's files saved as a zip file on your local computer. You can edit and customize the files for your own purposes.

## Further reading

- [AUTOTITLE](/repositories/working-with-files/using-files/downloading-source-code-archives)
