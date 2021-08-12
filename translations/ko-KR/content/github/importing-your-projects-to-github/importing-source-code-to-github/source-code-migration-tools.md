---
title: Source code migration tools
intro: You can use external tools to move your projects to GitHub.
redirect_from:
  - /articles/importing-from-subversion/
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

We recommend using [GitHub Importer](/articles/about-github-importer) to import projects from Subversion, Mercurial, Team Foundation Version Control (TFVC), or another Git repository. You can also use these external tools to convert your project to Git.

{% endif %}

### Importing from Subversion

In a typical Subversion environment, multiple projects are stored in a single root repository. On GitHub, each of these projects will usually map to a separate Git repository for a user account or organization. We suggest importing each part of your Subversion repository to a separate GitHub repository if:

* Collaborators need to check out or commit to that part of the project separately from the other parts
* You want different parts to have their own access permissions

We recommend these tools for converting Subversion repositories to Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

### Importing from Mercurial

We recommend [hg-fast-export](https://github.com/frej/fast-export) for converting Mercurial repositories to Git.

### Importing from TFVC

We recommend [git-tfs](https://github.com/git-tfs/git-tfs) for moving changes between TFVC and Git.

{% tip %}

**Tip:** After you've successfully converted your project to Git, you can [push it to {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}

### 더 읽을거리

- "[About GitHub Importer](/articles/about-github-importer)"
- "[Importing a repository with GitHub Importer](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
