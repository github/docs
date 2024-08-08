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
  ghec: '*'
topics:
  - Repositories
---

## About repository archival

{% ifversion fpt or ghec %}
{% note %}

**Note:** If you have a legacy per-repository billing plan, you will still be charged for your archived repository. If you don't want to be charged for an archived repository, you must upgrade to a new product. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

{% endnote %}
{% endif %}

{% ifversion ghec or ghes %}
{% note %}

**Note:** Customers who use {% data variables.product.prodname_GH_advanced_security %} can enable {% data variables.product.prodname_secret_scanning %} on archived repositories. For more information, see "[AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)."

{% endnote %}
{% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Once a repository is archived, you cannot add or remove collaborators or teams. Contributors with access to the repository can only fork or star your project.

When a repository is archived, its issues, pull requests, code, labels, milestones, projects, wiki, releases, commits, tags, branches, reactions, code scanning alerts, comments and permissions become read-only. To make changes in an archived repository, you must unarchive the repository first.

You can search for archived repositories. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-for-repositories#search-based-on-whether-a-repository-is-archived)." You can also search for issues and pull requests within archived repositories. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-repository-is-archived)."

{% ifversion archive-organizations %}
To archive all repositories in an organization at once, you can archive the entire organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/archiving-an-organization)."
{% endif %}

## Archiving a repository

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Danger Zone", click **Archive this repository**
1. Read the warnings.
1. In the text field, type the name of the repository you want to archive.
   ![Screenshot showing the "Archive repository" dialog box.](/assets/images/help/repository/archive-repository-warnings.png)
1. Click **I understand the consequences, archive this repository**.

## Unarchiving a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Danger Zone" section, click **Unarchive this repository**
1. Read the warnings.
1. In the text box, type the name of the repository you want to unarchive.
1. Click **I understand the consequences, unarchive this repository**.
