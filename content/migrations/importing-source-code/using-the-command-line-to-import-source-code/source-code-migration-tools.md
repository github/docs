---
title: Source code migration tools
intro: "If your source code uses Subversion, Mercurial, or Team Foundation Version Control{% ifversion fpt or ghec %} and is not accessible from the public internet{% endif %}, you can use external command line tools to import the code."
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Source code migration
---
{% ifversion fpt or ghec %}

We recommend using [GitHub Importer](/migrations/importing-source-code/using-github-importer/about-github-importer) to import projects from Subversion, Mercurial, Team Foundation Version Control (TFVC), or another Git repository. You can also use these external tools to convert your project to Git.

{% endif %}

## Importing from Subversion

In a typical Subversion environment, multiple projects are stored in a single root repository. On GitHub, each of these projects will usually map to a separate Git repository for a personal account or organization. We suggest importing each part of your Subversion repository to a separate GitHub repository if:

* Collaborators need to check out or commit to that part of the project separately from the other parts
* You want different parts to have their own access permissions

We recommend these tools for converting Subversion repositories to Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Importing from Mercurial

We recommend [hg-fast-export](https://github.com/frej/fast-export) for converting Mercurial repositories to Git.

## Importing from TFVC

We recommend [git-tfs](https://github.com/git-tfs/git-tfs) for moving changes between TFVC and Git.

For more information about moving from TFVC (a centralized version control system) to Git, see "[Plan your Migration to Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)" from the Microsoft docs site.

{% tip %}

**Tip:** After you've successfully converted your project to Git, you can [push it to {% data variables.product.prodname_dotcom %}](/get-started/using-git/pushing-commits-to-a-remote-repository).

{% endtip %}

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/migrations/importing-source-code/using-github-importer/about-github-importer)"
- "[AUTOTITLE](/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
