---
title: Importing a Git repository using the command line
intro: '{% ifversion fpt %}If [GitHub Importer](/articles/importing-a-repository-with-github-importer) is not suitable for your purposes, such as if your existing code is hosted on a private network, then we recommend importing using the command line.{% else %}Importing Git projects using the command line is suitable when your existing code is hosted on a private network.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
---
Before you start, make sure you know:

- Your {% data variables.product.product_name %} username
- The clone URL for the external repository, such as `https://external-host.com/user/repo.git` or `git://external-host.com/user/repo.git` (perhaps with a `user@` in front of the `external-host.com` domain name)

{% tip %}

For purposes of demonstration, we'll use:

- An external account named **extuser**
- An external Git host named `https://external-host.com`
- A {% data variables.product.product_name %} personal account named **ghuser**
- A repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} named **repo.git**

{% endtip %}

1. [Create a new repository on {% data variables.product.product_name %}](/articles/creating-a-new-repository). You'll import your external Git repository to this new repository.
2. On the command line, make a "bare" clone of the repository using the external clone URL. This creates a full copy of the data, but without a working directory for editing files, and ensures a clean, fresh export of all the old data.
  ```shell
  $ git clone --bare https://external-host.com/EXTUSER/REPO.git
  # Makes a bare clone of the external repository in a local directory
  ```
3. Push the locally cloned repository to {% data variables.product.product_name %} using the "mirror" option, which ensures that all references, such as branches and tags, are copied to the imported repository.
  ```shell
  $ cd REPO.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/USER/REPO.git
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}
  ```
4. Remove the temporary local repository.
  ```shell
  $ cd ..
  $ rm -rf REPO.git
  ```
