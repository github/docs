---
title: About GitHub Importer
intro: "If your source code is stored on a code hosting service using Git, Subversion, Mercurial, or Team Foundation Version Control (TFVC) and is accessible from the public internet, you can move the code to {% data variables.product.prodname_dotcom %} using {% data variables.product.prodname_dotcom %} Importer."
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
versions:
  fpt: '*'
  ghec: '*'
---

## About {% data variables.product.prodname_dotcom %} Importer

{% data variables.product.prodname_dotcom %} Importer is a tool that quickly imports source code repositories, including commits and revision history, to {% data variables.product.prodname_dotcom_the_website %} for you.

During an import, depending on the version control system you're importing from, you can authenticate with your remote repository, update commit author attribution, and either import repositories with large files or, if you don't want to use {% data variables.large_files.product_name_long %}, remove large files.

## Supported functionality by version control system

{% data reusables.migrations.github-importer-non-git-deprecation %}

{% rowheaders %}

| Import action | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| Authenticate with remote repository | {% octicon "check" aria-label="Supported" %}| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| [Update commit author attribution](/migrations/importing-source-code/using-github-importer/updating-commit-author-attribution-with-github-importer) | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Move large files to [Git Large File Storage](/repositories/working-with-files/managing-large-files/about-git-large-file-storage) | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Remove large files from your repository | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

## Further reading

- "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"
