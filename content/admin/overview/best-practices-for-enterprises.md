---
title: Best practices for enterprises
shortTitle: Best practices
intro: Learn {% data variables.product.company_short %}-recommended practices for your enterprise.
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

{% ifversion ghec %}
## Identify the best authentication method for your enterprise

{% data reusables.enterprise.ghec-authentication-options %}

For help identifying the authentication method that will best meet your needs, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)." 
{% endif %}

## Use policies

We recommend using policies to enforce business rules and regulatory compliance. 

{% data reusables.enterprise.about-policies %} For more information, see "[About enterprise policies](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."

## Minimize the number of organizations

Large enterprises often need multiple organizations, but try to create as few as possible to reflect top-level corporate divisions. A smaller number of organizations encourages innersource practices and allows discussions to involve a wider audience.

Instead, you can manage repository access and security requirements at a more granular level within each organization by using teams. For more information, see "[About teams](/organizations/organizing-members-into-teams/about-teams)."

## Avoid extensive collaboration in user-owned repositories

We recommend collaborating in organization-owned repositories whenever possible and minimizing collaboration in user-owned repositories. Organization-owned repositories have more sophisticated security and administrative features, and they remain accessible even as enterprise membership changes.

## Use human-readable usernames

{% ifversion ghec %}If you control the usernames for enterprise members, use{% else %}Use{% endif %} human-readable usernames, and avoid machine-generated IDs that are difficult for humans to read.

You can manage the display of usernames within your enterprise's private repositories. For more information, see "[Managing the display of member names in your organization](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)."

## Further reading

- "[Best practices for repositories](/repositories/creating-and-managing-repositories/best-practices-for-repositories)"
- "[Best practices for organizations](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)"