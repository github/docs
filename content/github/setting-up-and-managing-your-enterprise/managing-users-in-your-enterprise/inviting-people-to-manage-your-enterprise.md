---
title: Inviting people to manage your enterprise
intro: You can invite people to become enterprise owners or billing managers in your enterprise account. You can also remove enterprise owners or billing managers who no longer need access to the enterprise account.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: Invite people to manage
---
## About inviting people to manage your enterprise account

{% data reusables.enterprise-accounts.enterprise-administrators %} For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise).

{% tip %}

**Tip:** For more information on managing users within an organization owned by your enterprise account, see "[Managing membership in your organization](/articles/managing-membership-in-your-organization)" and "[Managing people's access to your organization with roles](/articles/managing-peoples-access-to-your-organization-with-roles)."

{% endtip %}

## Inviting an enterprise administrator to your enterprise account

Only enterprise owners can invite other people to become enterprise administrators.

After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. In the left sidebar, click **Administrators**.
  ![Administrators tab in the left sidebar](/assets/images/help/business-accounts/administrators-tab.png)
4. Above the list of administrators, click **Invite admin**.
  ![Invite admin button above the list of enterprise owners](/assets/images/help/business-accounts/invite-admin-button.png)
5. Type the username, full name, or email address of the person you want to invite to become an enterprise administrator, then select the appropriate person from the results.
  ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png)
6. Select **Owner** or **Billing Manager**.
  ![Modal box with role choices](/assets/images/help/business-accounts/invite-admins-roles.png)
7. Click **Send Invitation**.
  ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png)

## Removing an enterprise administrator from your enterprise account

Only enterprise owners can remove other enterprise administrators from the enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. Next to the username of the person you'd like to remove, click {% octicon "gear" aria-label="The Settings gear" %}, then click **Remove owner** or **Remove billing manager**.
  ![Settings gear with menu option to remove an enterprise administrator](/assets/images/help/business-accounts/remove-admin.png)
