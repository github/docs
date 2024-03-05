---
title: Importing a repository with GitHub Importer
intro: 'If you have a project hosted on another version control system, you can automatically import it to GitHub using the GitHub Importer tool.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Import a repository
---

## About repository imports with GitHub Importer

GitHub Importer is not suitable for all imports. For example, if your existing code is hosted on a private network, our tool won't be able to access it. In these cases, we recommend [importing using the command line](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line) for Git repositories or an external [source code migration tool](/migrations/importing-source-code/using-the-command-line-to-import-source-code) for projects imported from other version control systems.

{% data reusables.migrations.github-importer-non-git-deprecation %}

If you'd like to match the commits in your repository to the authors' GitHub personal accounts during the import, make sure every contributor to your repository has a GitHub account before you begin the import.

{% data reusables.repositories.repo-size-limit %}

For more information about migration paths to {% data variables.product.prodname_dotcom %} from other products, or between {% data variables.product.prodname_dotcom %} products, see "[AUTOTITLE](/migrations/overview/migration-paths-to-github)."

## Importing a repository with GitHub Importer

1. In the upper-right corner of any page, click {% octicon "plus" aria-label="Create new..." %}, and then click **Import repository**.

   ![Screenshot of the top-right corner of any page on {% data variables.product.prodname_dotcom %}. A plus icon is highlighted with an orange outline.](/assets/images/help/importer/import-repository.png)
1. Under "Your old repository's clone URL", type the URL of the project you want to import.
1. Under "Owner", select the dropdown menu and click your personal account or an organization to own the repository
1. Under "Name", type a name for the repository on GitHub.
1. Under "Privacy", select a visibility for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)."
1. Review the information you entered, then click **Begin import**.
1. If your old project requires credentials, type your login information for that project. If SAML SSO or 2FA are enabled for your user account on the old project, enter a {% data variables.product.pat_generic %} with repository read permissions in the "Password" field instead of your password.
1. Click **Submit**.
1. If there are multiple projects hosted at your old project's clone URL, select the project you'd like to import, then click **Submit**.
1. If you're moving from a version control system other than Git and your project contains files larger than 100 MB, select whether to import the large files using [Git Large File Storage](/repositories/working-with-files/managing-large-files), then click **Continue**.

You'll receive an email when the repository has been completely imported.
