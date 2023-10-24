---
title: About repositories
intro: A repository contains all of your code, your files, and each file's revision history. You can discuss and manage your work within the repository.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## About repositories

A repository is the most basic element of {% data variables.product.prodname_dotcom %}. It's a place where you can store your code, your files, and each file's revision history. Repositories can have multiple collaborators and can be either public{% ifversion ghes or ghec %}, internal,{% endif %} or private.

To create a new repository, go to [https://github.com/new](https://github.com/new). For instructions, see "[AUTOTITLE](/get-started/quickstart/create-a-repo)."

## Repository terminology

Before getting started with repositories, learn these important terms.

{% rowheaders %}

Term | Definition |
---- | ---------- |
Branch | A parallel version of your code that is contained within the repository, but does not affect the primary or main branch.
Clone | To download a full copy of a repository's data from {% data variables.location.product_location %}, including all versions of every file and folder.
Fork | A new repository that shares code and visibility settings with the original "upstream" repository.
Merge | To take the changes from one branch and apply them to another.
Pull request | A request to merge changes from one branch into another.
Remote | A repository stored on {% data variables.product.product_name %}, not on your computer.
Upstream | The branch on an original repository that has been forked or cloned. The corresponding branch on the cloned or forked branch is called the "downstream."

{% endrowheaders %}

## About repository ownership

You can own repositories individually, or you can share ownership of repositories with other people in an organization.

In either case, access to repositories is managed by permissions. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

## About collaboration

You can use repositories to manage your work and collaborate with others.
- You can use issues to collect user feedback, report software bugs, and organize tasks you'd like to accomplish. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- You can use pull requests to propose changes to a repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."
- You can use project boards to organize and prioritize your issues and pull requests. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

{% ifversion fpt or ghec %}
With {% data variables.product.prodname_free_team %} for personal accounts and organizations, you can work with unlimited collaborators on unlimited public repositories with a full feature set, or unlimited private repositories with a limited feature set. To get advanced tooling for private repositories, you can upgrade to {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}
{% else %}
Each person and organization can own unlimited repositories and invite an unlimited number of collaborators to all repositories.
{% endif %}

## About repository visibility

You can restrict who has access to a repository by choosing a repository's visibility: {% ifversion ghes or ghec %}public, internal, or private{% elsif ghae %}private or internal{% else %} public or private{% endif %}.

{% ifversion fpt or ghec or ghes %}

When you create a repository, you can choose to make the repository public or private.{% ifversion ghec or ghes %} If you're creating the repository in an organization{% ifversion ghec %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}{% endif %}{% ifversion fpt %} Repositories in organizations that use {% data variables.product.prodname_ghe_cloud %} and are owned by an enterprise account can also be created with internal visibility. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

When you create a repository owned by your personal account, the repository is always private. When you create a repository owned by an organization, you can choose to make the repository private or internal.

{% endif %}

{%- ifversion fpt or ghec %}
- Public repositories are accessible to everyone on the internet.
- Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members.
{%- elsif ghes %}
- If {% data variables.location.product_location %} is not in private mode or behind a firewall, public repositories are accessible to everyone on the internet. Otherwise, public repositories are available to everyone using {% data variables.location.product_location %}, including outside collaborators.
- Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members.
{%- elsif ghae %}
- Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
- Internal repositories are accessible to all enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{%- endif %}

Organization owners always have access to every repository created in an organization. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

People with admin permissions for a repository can change an existing repository's visibility. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)."

{% ifversion ghes or ghec or ghae %}

## About internal repositories

{% data reusables.repositories.about-internal-repos %} For more information on innersource, see {% data variables.product.prodname_dotcom %}'s whitepaper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% ifversion ghec %}
{% note %}

**Note:** You can only create internal repositories if you use {% data variables.product.prodname_ghe_cloud %} with an enterprise account. An enterprise account is a separate type of account that allows a central point of management for multiple organizations. For more information, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

{% endnote %}
{% endif %}

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% ifversion fpt or ghec %}outside of the enterprise{% else %}who are not members of any organization{% endif %}, including outside collaborators on organization repositories. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

{% ifversion ghes %}
{% note %}

**Note:** A user must be part of an organization to be an enterprise member and have access to internal repositories. If a user on {% data variables.location.product_location %} is not a member of any organization, that user will not have access to internal repositories.

{% endnote %}
{% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}Unless your enterprise uses {% data variables.product.prodname_emus %}, members{% else %}Members{% endif %} of the enterprise can fork any internal repository owned by an organization in the enterprise. The forked repository will belong to the member's personal account, and the visibility of the fork will be private. If a user is removed from all organizations owned by the enterprise, that user's forks of internal repositories are removed automatically.

{% ifversion ghec %}
{% note %}

**Note:** {% data variables.enterprise.prodname_managed_users_caps %} cannot fork internal repositories. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)."

{% endnote %}
{% endif %}
{% endif %}

## Next steps

Here are some helpful resources for taking your next steps with repositories.

- "[AUTOTITLE](/repositories/creating-and-managing-repositories/best-practices-for-repositories):" Learn how to use repositories most effectively.
- "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository):" Create a new repository.
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository):" Learn how to create and delete branches within your repository.
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request):" Create a pull request to propose and collaborate on changes to a repository.
