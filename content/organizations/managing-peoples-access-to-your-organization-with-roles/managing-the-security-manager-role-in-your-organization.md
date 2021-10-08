---
title: Managing the security manager role in your organization
intro: 'Organization owners can assign the security manager role to the organization''s security teams to give them the level of access they need.'
versions:
  fpt: '*'
  ghes: '>=3.3'
  ghae: 'issue-4999'
topics:
  - Organizations
  - Teams
shortTitle: Security manager
---

{% note %}

**Note:** The security manager role is in public beta and subject to change.

{% endnote %}

Members of your organization's Owners team can give security management permissions to teams by assigning the *security manager* role. 

## Permissions for the security manager role

Members of a team with the security manager role assigned have the following permissions:

- Read permission on all repositories in the organization
- Write permission on all security alerts in the organization
- Access to Security Center in the organization's Security tab
- Write permission on security settings at the organization level, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}
- Write permission on security settings at the repository level, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}


## Assigning the security manager role to a team in your organization
<!--Include info on Manage access UI which will show that security team has access to the repository. Also include details about how it doesn't overwrite any existing permissions. -->


## Removing the security manager role from a team in your organization

<!-- Include info on the consequences of reverting, needing to remove the read role manually from any repositories the team shouldn't have access to -->
