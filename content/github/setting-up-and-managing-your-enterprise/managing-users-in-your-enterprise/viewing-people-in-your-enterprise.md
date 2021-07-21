---
title: Viewing people in your enterprise
intro: 'To audit access to enterprise-owned resources or user license usage, enterprise owners can view every administrator and member of the enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
---
## Viewing enterprise owners{% ifversion fpt %} and billing managers{% endif %}

You can view enterprise owners {% ifversion fpt %} and billing managers, {% endif %}as well as a list of pending invitations to become owners{% ifversion fpt %} and billing managers. You can filter the list of enterprise administrators by role{% endif %}. You can find a specific person by searching for their username or full name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% ifversion fpt %}1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**.
  !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/administrators-pending.png){% endif %}

## Viewing members and outside collaborators

You can view the number of pending members and outside collaborators. You can filter the list of members by {% ifversion fpt %}deployment ({% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}),{% endif %} role{% ifversion fpt %}, and{% else %} or {% endif %} organization. You can filter the list of outside collaborators by the visibility of the repositories the collaborator has access to. You can find a specific person by searching for their username or display name.

You can view {% ifversion fpt %}all the {% data variables.product.prodname_ghe_cloud %} organizations and {% data variables.product.prodname_ghe_server %} instances that a member belongs to, and {% endif %}which repositories an outside collaborator has access to{% ifversion fpt %}, {% endif %} by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Optionally, to view a list of outside collaborators rather than the list of members, click **Outside collaborators**.
  ![Outside collaborators tab on the Organization members page](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% ifversion fpt %}1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**.
  !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/members-pending.png){% endif %}

## Further reading

- "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
