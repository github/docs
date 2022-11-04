---
title: Git LFS
intro: 'You can enable or disable {% data variables.large_files.product_name_long %} (LFS) for a repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the {% data variables.large_files.product_name_short %} API

You can use {% data variables.large_files.product_name_short %} to store large files in a Git repository. The {% data variables.large_files.product_name_short %} API allows you to enable or disable the feature for an individual repository. For more information about  {% data variables.large_files.product_name_short %}, see "[About {% data variables.large_files.product_name_short %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)."

People with admin access to a repository can use the {% data variables.large_files.product_name_short %} API.

{% ifversion fpt or ghec %}

Usage of {% data variables.large_files.product_name_short %} is subject to billing. For more information, see "[About billing for {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)."

If you want to use the {% data variables.large_files.product_name_short %} API for a repository that belongs to an organization, your role must provide you with access to the organization's{% ifversion ghec %} or enterprise's{% endif %} billing.{% ifversion fpt %} For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)."{% endif %}

{% ifversion ghec %}

| Repository ownership | Required repository access | Required role | More information |
| :- | :- | :- | :- |
| Personal account | Admin | N/A | N/A |
| <ul><li>Organization on {% data variables.product.prodname_team %}</li><li>Organization on {% data variables.product.product_name %}, but not in an enterprise</li></ul> | Admin, which is inherited if you are an organization owner | Organization owner or billing manager | "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)" |
| Organization in an enterprise | Admin, which can be inherited if you are an organization owner | Enterprise owner or billing manager | "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)" |

{% endif %}

{% endif %}
