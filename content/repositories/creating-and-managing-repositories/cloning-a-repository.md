---
title: Cloning a repository
intro: 'When you create a repository on {% data variables.location.product_location %}, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About cloning a repository

{% webui %}

You can clone a repository from {% data variables.location.product_location %} to your local computer{% ifversion codespaces %}, or to a codespace,{% endif %} to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from {% data variables.location.product_location %} to your local machine{% ifversion codespaces %}, or to a remote virtual machine when you create a codespace. For more information about cloning to a codespace, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)."{% else %}.{% endif %}

{% endwebui %}

{% cli %}

{% data reusables.repositories.about-cloning %}

{% endcli %}

{% desktop %}

{% data reusables.repositories.about-cloning %}

{% enddesktop %}

Cloning a repository pulls down a full copy of all the repository data that {% data variables.location.product_location %} has at that point in time, including all versions of every file and folder for the project. You can push your changes to the remote repository on {% data variables.location.product_location %}, or pull other people's changes from {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/get-started/using-git)".

You can clone your existing repository or clone another person's existing repository to contribute to a project.

## Cloning a repository

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To clone a repository locally, use the `repo clone` subcommand. Replace the `repository` parameter with the repository name. For example, `octo-org/octo-repo`, `monalisa/octo-repo`, or `octo-repo`. If the `OWNER/` portion of the `OWNER/REPO` repository argument is omitted, it defaults to the name of the authenticating user.

```shell
gh repo clone REPOSITORY
```

You can also use the GitHub URL to clone a repository.

```shell
gh repo clone https://github.com/PATH-TO/REPOSITORY
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
1. Follow the prompts in {% data variables.product.prodname_desktop %} to complete the clone.

For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)."

{% enddesktop %}

## Cloning an empty repository

An empty repository contains no files. It's often made if you don't initialize the repository with a README when creating it.

{% data reusables.repositories.navigate-to-repo %}
1. To clone your repository using the command line using HTTPS, under "Quick setup", click {% octicon "copy" aria-label="Copy to clipboard" %}. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.

   ![Screenshot of the quick setup instructions for an empty repository. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.](/assets/images/help/repository/empty-https-url-clone-button.png)

   Alternatively, to clone your repository in Desktop, click {% octicon "desktop-download" aria-hidden="true" %} **Set up in Desktop** and follow the prompts to complete the clone.

   ![Screenshot of the quick setup instructions for an empty repository. A button, labeled with a download icon and "Set up in Desktop," is outlined in dark orange.](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

## Troubleshooting cloning errors

When cloning a repository it's possible that you might encounter some errors.

If you're unable to clone a repository, check that:

- You can connect using HTTPS. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors)."
- You have permission to access the repository you want to clone. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors)."
- The default branch you want to clone still exists. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)."

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/get-started/using-github/troubleshooting-connectivity-problems)"
{% endif %}
