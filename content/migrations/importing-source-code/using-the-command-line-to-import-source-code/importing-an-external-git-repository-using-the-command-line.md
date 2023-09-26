---
title: Importing an external Git repository using the command line
intro: '{% ifversion fpt %}If your Git repository is stored on a code hosting service that is not accessible from the public internet, you can import the repository using Git on the command line.{% else %}If your source code is tracked in a Git repository, you can import the repository using Git on the command line.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-an-external-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: External Git repo
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

1. [Create a new repository on {% data variables.product.product_name %}](/repositories/creating-and-managing-repositories/creating-a-new-repository). You'll import your external Git repository to this new repository.
1. On the command line, make a "bare" clone of the external repository using the external clone URL. This creates a full copy of the data, but without a working directory for editing files, and ensures a clean, fresh export of all the old data.

   ```shell
   $ git clone --bare https://external-host.com/EXTUSER/REPO.git
   # Makes a bare clone of the external repository in a local directory
   ```

1. Push the locally cloned repository to {% data variables.product.product_name %} using the "mirror" option, which ensures that all references, such as branches and tags, are copied to the imported repository.

   ```shell
   $ cd REPO.git
   $ git push --mirror https://{% data variables.command_line.codeblock %}/USER/REPO.git
   # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}
   ```

1. Remove the temporary local repository.

   ```shell
   cd ..
   rm -rf REPO.git
   ```

If the repository you are importing contains large files, you may run into a warning or error. For more information on large files and how to manage them, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github)."

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/get-started/using-git/troubleshooting-the-2-gb-push-limit)"
{% endif %}
