---
title: About repository visibility
intro: 'You can restrict who has access to a repository by choosing a repository''s visibility: {% ifversion fpt or ghes %}public, internal, or private{% elsif ghae %}private or internal{% else %} public or private{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
shortTitle: Repository visibility
---
## About repository visibility

{% ifversion ghae %}When you create a repository owned by your user account, the repository is always private. When you create a repository owned by an organization, you can choose to make the repository private or internal.{% else %}When you create a repository, you can choose to make the repository public or private.{% ifversion fpt or ghes %} If you're creating the repository in an organization{% ifversion fpt %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}{% endif %}

{% ifversion ghes %}
If {% data variables.product.product_location %} is not in private mode or behind a firewall, public repositories are accessible to everyone on the internet. Otherwise, public repositories are available to everyone using {% data variables.product.product_location %}, including outside collaborators. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. {% ifversion ghes %} Internal repositories are accessible to enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."{% endif %}
{% elsif ghae %}
Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to all enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% else %}
Public repositories are accessible to everyone on the internet. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% endif %}

Organization owners always have access to every repository created in an organization. For more information, see "[Repository permission levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)."

People with admin permissions for a repository can change an existing repository's visibility. For more information, see "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)."

{% ifversion fpt or ghae or ghes %}
## About internal repositories

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} For more information on innersource, see {% data variables.product.prodname_dotcom %}'s whitepaper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% ifversion fpt %}outside of the enterprise{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% ifversion fpt or ghae %}"[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}

If a user is removed from all organizations owned by the enterprise, that user's forks of internal repositories are removed automatically.
{% endif %}
