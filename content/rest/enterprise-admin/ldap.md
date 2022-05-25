---
title: LDAP
intro: 'You can use the LDAP API to update account relationships between a {% data variables.product.product_name %} user or team and its linked LDAP entry or queue a new synchronization.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

With the LDAP mapping endpoints, you're able to update the Distinguished Name (DN) that a user or team maps to. Note that the LDAP endpoints are generally only effective if your {% data variables.product.product_name %} appliance has [LDAP Sync enabled](/enterprise/admin/authentication/using-ldap). The [Update LDAP mapping for a user](#update-ldap-mapping-for-a-user) endpoint can be used when LDAP is enabled, even if LDAP Sync is disabled.