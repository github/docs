---
title: About repository visibility
intro: 'You can restrict who has access to a repository by choosing a repository''s visibility: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}public, internal, or private{% else %} public or private{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About repository visibility

When you create a repository, you can choose to make the repository public or private. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If you're creating the repository in an organization{% if currentVersion == "free-pro-team@latest" %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}

{% if currentVersion != "free-pro-team@latest" %}If {% data variables.product.product_location_enterprise %} is not in private mode or behind a firewall, p{% else %}P{% endif %}ublic repositories are accessible to everyone on the internet.{% if currentVersion != "free-pro-team@latest" %} Otherwise, public repositories are available to everyone using {% data variables.product.product_location_enterprise %}, including outside collaborators.{% endif %} Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, [certain organization members](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Internal repositories are accessible to {% if currentVersion == "free-pro-team@latest" %}members of your enterprise account{% else %}members of any organization on your instance{% endif %}. For more information, see "[About internal repositories](#about-internal-repositories)."{% endif %}

Organization owners always have access to every repository created in an organization. For more information, see "[Repository permission levels for an organization](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)."

People with admin permissions for a repository can change an existing repository's visibility. For more information, see "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### About internal repositories

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} For more information on innersource, see {% data variables.product.prodname_dotcom %}'s whitepaper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

All {% if currentVersion == "free-pro-team@latest" %}enterprise members{% else %}organization members{% endif %} have read permissions to the internal repository, but internal repositories are not visible to people {% if currentVersion == "free-pro-team@latest" %}outside of the enterprise account{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Roles for an enterprise account](/articles/roles-for-an-enterprise-account#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}

If a user is removed from {% if currentVersion == "free-pro-team@latest" %}an enterprise account{% else %}all organizations on the instance{% endif %}, that user's forks of internal repositories are removed automatically.
{% endif %}
