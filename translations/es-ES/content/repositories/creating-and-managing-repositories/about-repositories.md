---
title: About repositories
intro: A repository contains all of your project's files and each file's revision history. You can discuss and manage your project's work within the repository.
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

You can own repositories individually, or you can share ownership of repositories with other people in an organization.

You can restrict who has access to a repository by choosing the repository's visibility. For more information, see "[About repository visibility](#about-repository-visibility)."

For user-owned repositories, you can give other people collaborator access so that they can collaborate on your project. If a repository is owned by an organization, you can give organization members access permissions to collaborate on your repository. For more information, see "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository/)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

{% ifversion fpt or ghec %}
With {% data variables.product.prodname_free_team %} for personal accounts and organizations, you can work with unlimited collaborators on unlimited public repositories with a full feature set, or unlimited private repositories with a limited feature set. To get advanced tooling for private repositories, you can upgrade to {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}
{% else %}
Each person and organization can own unlimited repositories and invite an unlimited number of collaborators to all repositories.
{% endif %}

You can use repositories to manage your work and collaborate with others.
- You can use issues to collect user feedback, report software bugs, and organize tasks you'd like to accomplish. For more information, see "[About issues](/github/managing-your-work-on-github/about-issues)."{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- You can use pull requests to propose changes to a repository. For more information, see "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."
- You can use project boards to organize and prioritize your issues and pull requests. For more information, see "[About project boards](/github/managing-your-work-on-github/about-project-boards)."

{% data reusables.repositories.repo-size-limit %}

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

Organization owners always have access to every repository created in an organization. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

People with admin permissions for a repository can change an existing repository's visibility. For more information, see "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)."

{% ifversion ghes or ghec or ghae %}
## About internal repositories

{% data reusables.repositories.about-internal-repos %} For more information on innersource, see {% data variables.product.prodname_dotcom %}'s whitepaper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% ifversion ghec %}
{% note %}

**Note:** You can only create internal repositories if you use {% data variables.product.prodname_ghe_cloud %} with an enterprise account. An enterprise account is a separate type of account that allows a central point of management for multiple organizations. For more information, see "[Types of {% data variables.product.prodname_dotcom %} account](/get-started/learning-about-github/types-of-github-accounts)."

{% endnote %}
{% endif %}

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% ifversion fpt or ghec %}outside of the enterprise{% else %}who are not members of any organization{% endif %}, including outside collaborators on organization repositories. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

{% ifversion ghes %}
{% note %}

**Note:** A user must be part of an organization to be an enterprise member and have access to internal repositories. If a user on {% data variables.location.product_location %} is not a member of any organization, that user will not have access to internal repositories.

{% endnote %}
{% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}Unless your enterprise uses {% data variables.product.prodname_emus %}, members{% else %}Members{% endif %} of the enterprise can fork any internal repository owned by an organization in the enterprise. The forked repository will belong to the member's personal account, and the visibility of the fork will be private. If a user is removed from all organizations owned by the enterprise, that user's forks of internal repositories are removed automatically.

{% ifversion ghec %}
{% note %}

**Note:** {% data variables.enterprise.prodname_managed_users_caps %} cannot fork internal repositories. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)."

{% endnote %}
{% endif %}
{% endif %}

## Limits for viewing content and diffs in a repository

Certain types of resources can be quite large, requiring excessive processing on {% data variables.product.product_name %}. Because of this, limits are set to ensure requests complete in a reasonable amount of time.

Most of the limits below affect both {% data variables.product.product_name %} and the API.

### Text limits

Text files over **512 KB** are always displayed as plain text. Code is not syntax highlighted, and prose files are not converted to HTML (such as Markdown, AsciiDoc, *etc.*).

Text files over **5 MB** are only available through their raw URLs, which are served through `{% data variables.product.raw_github_com %}`; for example, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Click the **Raw** button to get the raw URL for a file.

### Diff limits

Because diffs can become very large, we impose these limits on diffs for commits, pull requests, and compare views:

- In a pull request, no total diff may exceed *20,000 lines that you can load* or *1 MB* of raw diff data.
- No single file's diff may exceed *20,000 lines that you can load* or *500 KB* of raw diff data. *Four hundred lines* and *20 KB* are automatically loaded for a single file.
- The maximum number of files in a single diff is limited to *300*.
- The maximum number of renderable files (such as images, PDFs, and GeoJSON files) in a single diff is limited to *25*.

Some portions of a limited diff may be displayed, but anything exceeding the limit is not shown.

### Commit listings limits

The compare view and pull requests pages display a list of commits between the `base` and `head` revisions. These lists are limited to **250** commits. If they exceed that limit, a note indicates that additional commits are present (but they're not shown).

## Further reading

- "[Creating a new repository](/articles/creating-a-new-repository)"
- "[About forks](/github/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Collaborating with issues and pull requests](/categories/collaborating-with-issues-and-pull-requests)"
- "[Managing your work on {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)"
- "[Administering a repository](/categories/administering-a-repository)"
- "[Visualizing repository data with graphs](/categories/visualizing-repository-data-with-graphs/)"
- "[About wikis](/communities/documenting-your-project-with-wikis/about-wikis)"
- "[{% data variables.product.prodname_dotcom %} glossary](/articles/github-glossary)"
