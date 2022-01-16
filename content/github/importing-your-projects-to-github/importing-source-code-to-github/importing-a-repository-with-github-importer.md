---
title: Importing a repository with GitHub Importer
intro: 'If you have a project hosted on another version control system, you can automatically import it to GitHub using the GitHub Importer tool.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github/
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
shortTitle: Use GitHub Importer
---
{% tip %}

**Tip:** GitHub Importer is not suitable for all imports. For example, if your existing code is hosted on a private network, our tool won't be able to access it. In these cases, we recommend [importing using the command line](/articles/importing-a-git-repository-using-the-command-line) for Git repositories or an external [source code migration tool](/articles/source-code-migration-tools) for projects imported from other version control systems.

{% endtip %}

If you'd like to match the commits in your repository to the authors' GitHub user accounts during the import, make sure every contributor to your repository has a GitHub account before you begin the import.

{% data reusables.repositories.migrating-from-codeplex %}

{% data reusables.repositories.repo-size-limit %}

1. In the upper-right corner of any page, click {% octicon "plus" aria-label="Plus symbol" %}, and then click **Import repository**.
![Import repository option in new repository menu](/assets/images/help/importer/import-repository.png)
2. Under "Your old repository's clone URL", type the URL of the project you want to import.
![Text field for URL of imported repository](/assets/images/help/importer/import-url.png)
3. Choose your user account or an organization to own the repository, then type a name for the repository on GitHub.
![Repository owner menu and repository name field](/assets/images/help/importer/import-repo-owner-name.png)
4. Specify whether the new repository should be *public* or *private*. For more information, see "[Setting repository visibility](/articles/setting-repository-visibility)."
![Public or private repository radio buttons](/assets/images/help/importer/import-public-or-private.png)
5. Review the information you entered, then click **Begin import**.
![Begin import button](/assets/images/help/importer/begin-import-button.png)
6. If your old project was protected by a password, type your login information for that project, then click **Submit**.
![Password form and Submit button for password-protected project](/assets/images/help/importer/submit-old-credentials-importer.png)
7. If there are multiple projects hosted at your old project's clone URL, choose the project you'd like to import, then click **Submit**.
![List of projects to import and Submit button](/assets/images/help/importer/choose-project-importer.png)
8. If your project contains files larger than 100 MB, choose whether to import the large files using [Git Large File Storage](/articles/versioning-large-files), then click **Continue**.
![Git Large File Storage menu and Continue button](/assets/images/help/importer/select-gitlfs-importer.png)

You'll receive an email when the repository has been completely imported.

## Further reading

- "[Updating commit author attribution with GitHub Importer](/articles/updating-commit-author-attribution-with-github-importer)"
