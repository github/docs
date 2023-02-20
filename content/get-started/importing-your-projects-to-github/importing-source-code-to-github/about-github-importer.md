---
title: About GitHub Importer
intro: 'If you have source code in Subversion, Mercurial, Team Foundation Version Control (TFVC), or another Git repository, you can move it to GitHub using GitHub Importer.'
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
versions:
  fpt: '*'
  ghec: '*'
---
{% data variables.product.prodname_dotcom %} Importer is a tool that quickly imports source code repositories, including commits and revision history, to {% data variables.product.prodname_dotcom %} for you.

During an import, depending on the version control system you're importing from, you can authenticate with your remote repository, update commit author attribution, and import repositories with large files (or remove large files if you don't want to use Git Large File Storage).

| Import action | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| Authenticate with remote repository | **X** | **X** | **X** | **X** |
| [Update commit author attribution](/get-started/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer) | **X** | **X** | **X** | |
| Move large files to [Git Large File Storage](/repositories/working-with-files/managing-large-files/about-git-large-file-storage) | **X** | **X** | **X** | |
| Remove large files from your repository | **X** | **X** | **X** | |

## Further reading

- "[AUTOTITLE](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)"
- "[AUTOTITLE](/get-started/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer)"
- "[AUTOTITLE](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-an-external-git-repository-using-the-command-line)"
- "[AUTOTITLE](/get-started/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools)"
