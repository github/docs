---
title: About repositories
intro: A repository contains all of your project's files and each file's revision history. You can discuss and manage your project's work within the repository.
redirect_from:
  - /articles/about-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

You can own repositories individually, or you can share ownership of repositories with other people in an organization.

You can restrict who has access to a repository by choosing the repository's visibility. For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

For user-owned repositories, you can give other people collaborator access so that they can collaborate on your project. If a repository is owned by an organization, you can give organization members access permissions to collaborate on your repository. For more information, see "[Permission levels for a user account repository](/articles/permission-levels-for-a-user-account-repository/)" and "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization/)."

{% if currentVersion == "free-pro-team@latest" %}
With
{% data variables.product.prodname_free_team %} for user accounts and organizations, you can work with unlimited collaborators on unlimited public repositories with a full feature set, or unlimited private repositories with a limited feature set. To get advanced tooling for private repositories, you can upgrade to {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}
{% else %}
Each person and organization can own unlimited repositories and invite an unlimited number of collaborators to all repositories.
{% endif %}

You can use repositories to manage your work and collaborate with others.
- You can use issues to collect user feedback, report software bugs, and organize tasks you'd like to accomplish. For more information, see "[About issues](/github/managing-your-work-on-github/about-issues)."{% if currentVersion == "free-pro-team@latest" %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- You can use pull requests to propose changes to a repository. For more information, see "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."
- You can use project boards to organize and prioritize your issues and pull requests. For more information, see "[About project boards](/github/managing-your-work-on-github/about-project-boards)."

{% data reusables.repositories.repo-size-limit %}

### 더 읽을거리

- "[Creating a new repository](/articles/creating-a-new-repository)"
- "[Collaborating with issues and pull requests](/categories/collaborating-with-issues-and-pull-requests)"
- "[Managing your work on {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)"
- "[Administering a repository](/categories/administering-a-repository)"
- "[Visualizing repository data with graphs](/categories/visualizing-repository-data-with-graphs/)"
- "[About wikis](/articles/about-wikis)"
- "[{% data variables.product.prodname_dotcom %} glossary](/articles/github-glossary)"
