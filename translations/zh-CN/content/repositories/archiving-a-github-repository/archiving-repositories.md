---
title: Archiving repositories
intro: You can archive a repository to make it read-only for all users and indicate that it's no longer actively maintained. You can also unarchive repositories that have been archived.
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## About repository archival

{% ifversion fpt or ghec %}
{% note %}

**Note:** If you have a legacy per-repository billing plan, you will still be charged for your archived repository. If you don't want to be charged for an archived repository, you must upgrade to a new product. For more information, see "[{% data variables.product.prodname_dotcom %}'s products](/articles/github-s-products)."

{% endnote %}
{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
{% note %}

**Note:** Customers who use {% data variables.product.prodname_GH_advanced_security %} can enable {% data variables.product.prodname_secret_scanning %} on archived repositories. For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories)."

{% endnote %}
{% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Once a repository is archived, you cannot add or remove collaborators or teams. Contributors with access to the repository can only fork or star your project.

When a repository is archived, its issues, pull requests, code, labels, milestones, projects, wiki, releases, commits, tags, branches, reactions, code scanning alerts, comments and permissions become read-only. To make changes in an archived repository, you must unarchive the repository first.

You can search for archived repositories. For more information, see "[Searching for repositories](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)." You can also search for issues and pull requests within archived repositories. For more information, see "[Searching issues and pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)."  

## Archiving a repository

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", click **Archive this repository** or **Unarchive this repository**.
   ![Archive this repository button](/assets/images/help/repository/archive-repository.png)
4. Read the warnings.
5. Type the name of the repository you want to archive or unarchive.
  ![Archive repository warnings](/assets/images/help/repository/archive-repository-warnings.png)
6. Click **I understand the consequences, archive this repository**.
