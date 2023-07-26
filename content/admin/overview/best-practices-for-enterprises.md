---
title: Best practices for enterprises
shortTitle: Best practices
intro: 'Learn {% data variables.product.company_short %}-recommended practices for your enterprise.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
---

## Assign multiple owners

{% data reusables.organizations.ent-ownership-recommendation %} {% ifversion ghec or ghes %}For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."{% endif %}

{% ifversion ghec %}

## Identify the best authentication method for your enterprise

{% data reusables.enterprise.ghec-authentication-options %}

For help identifying the authentication method that will best meet your needs, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."
{% endif %}

## Use policies

We recommend using policies to enforce business rules and regulatory compliance.

{% data reusables.enterprise.about-policies %} For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."

## Minimize the number of organizations

Most businesses are best served by a single organization. Some enterprises may need multiple organizations for compliance or security reasons, but try to create as few as possible. A smaller number of organizations encourages innersource practice, allows discussions to involve a wider audience, and reduces administrative overhead.

For more guidance on how many organizations to create and how to structure them, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/best-practices-for-structuring-organizations-in-your-enterprise)."

## Avoid extensive collaboration in user-owned repositories

We recommend collaborating in organization-owned repositories whenever possible and minimizing collaboration in user-owned repositories. Organization-owned repositories have more sophisticated security and administrative features, and they remain accessible even as enterprise membership changes.

## Use human-readable usernames

{% ifversion ghec %}If you control the usernames for enterprise members, use{% else %}Use{% endif %} human-readable usernames, and avoid machine-generated IDs that are difficult for humans to read.

You can manage the display of usernames within your enterprise's private repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)."

## Further reading

- "[AUTOTITLE](/repositories/creating-and-managing-repositories/best-practices-for-repositories)"
- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)"
