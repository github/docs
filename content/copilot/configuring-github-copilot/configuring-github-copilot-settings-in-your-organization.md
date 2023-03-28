---
title: Configuring GitHub Copilot settings in your organization
intro: 'You can configure {% data variables.product.prodname_copilot %} in your organization, including granting and revoking access to individuals and teams, and determining whether to block suggestions that match public code.'
product: '{% data reusables.gated-features.copilot %}'
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Organization settings
---


## About {% data variables.product.prodname_copilot %} settings in your organization

{% data reusables.copilot.about-copilot %}

{% ifversion ghec %}To configure {% data variables.product.prodname_copilot %} use in your organization, the organization must be owned by a {% data variables.product.prodname_ghe_cloud %} account, and an enterprise admin must first enable {% data variables.product.prodname_copilot_business_short %} for your organization. Organization admins will then be able to manage seat assignment within the organization.

Depending on the policy settings configured at the enterprise level, an organization admin may also be able to determine whether to allow or block {% data variables.product.prodname_copilot %} suggestions that match public code. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)."{% endif %}

## Configuring access to {% data variables.product.prodname_copilot %} in your organization

{% ifversion ghec %}Once a {% data variables.product.prodname_ghe_cloud %} admin enables a {% data variables.product.prodname_copilot_business_short %} subscription in your organization, you can assign {% data variables.product.prodname_copilot %} seats to individuals and teams in your organization.{% endif %}

### Enabling access to {% data variables.product.prodname_copilot %} for all current and future users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, and then click **Access**.
1. Under "User permissions," to enable {% data variables.product.prodname_copilot %} for all current and future users in your organization, select **Purchase for all members**.
1. In the "Confirm seat assignment" dialog, to confirm that you want to enable {% data variables.product.prodname_copilot %} for all current and future users in your organization, click **Confirm**.
1. To save your changes, click **Save**.

### Enabling access to {% data variables.product.prodname_copilot %} for specific users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, and then click **Access**.
1. Under "User permissions," to enable {% data variables.product.prodname_copilot %} for selected teams or users in your organization, select **Purchase for selected teams/users** and click **Save**.
1. If you are updating user access from the **Purchase for all members** setting, in the "Confirm seat assignment" dialog, select how you want to start assigning access.
    - To unassign all members and then select those who should have access, select **Start from scratch**.
    - To keep all members who currently have access and then select those who should not have access, select **Keep all users**.
1. If you selected **Start from scratch**, click **Add people** or **Add teams** to add individual users, or entire teams.
1. If you selected **Add people**, in the "Enable {% data variables.product.prodname_copilot %} access for selected members of ORGANIZATION" dialog, you can either search for individual members, or you can add members in bulk by uploading a CSV file.

   ![Screenshot of the enable access for selected members dialog](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - To search for members, type the member's username, full name, or email address in the search bar.
    - To add members in bulk, click **Upload CSV**, and then upload a CSV file including either the username or email address for each member you want to add, separated by a comma.

        {% warning %}

      **Warning:** When you upload a CSV file, {% data variables.product.prodname_copilot %} will search all users on {% data variables.product.prodname_dotcom_the_website %} for matches. If the CSV includes users who are not members of your organization, they will be invited to join your organization when you click **Add XX members**.

      {% endwarning %}

    - Review the list of users generated from your CSV file. To confirm that you want to grant access to the listed users, click **Add XX member(s) to access list**, or to reject the list, click **Cancel**.

1. If you selected **Add teams**, in the "Enable GitHub Copilot access for selected teams of ORGANIZATION" dialog, start typing the team name in the search bar, select the team you want to add and click **Select a team above**.
1. If you selected **Keep all users**, review the full list of your organization members and selected the individuals whose {% data variables.product.prodname_copilot %} access you want to revoke.
1. Click the **XX members selected** dropdown, and then click **Remove**.

### Disabling access to {% data variables.product.prodname_copilot %} for your whole organization

{% data reusables.copilot.disable-copilot-organization %}

### Disabling access to {% data variables.product.prodname_copilot %} for specific users in your organization

Removing a user from the organization(s) that had assigned them a {% data variables.product.prodname_copilot %} seat will automatically unassign the seat from them. Alternatively, you can unassign a member's {% data variables.product.prodname_copilot %} seat, while preserving their membership. These changes will take effect from the beginning of the next billing cycle.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, and then click **Access**.
1. Under "User permissions,", select **Purchase for selected teams/users** and then click **Save**.

    - In the "Confirm seat assignment" pop-up dialog, select **Keep all users**.

1. Under "Manage access," in the search bar, type the member's username, full name, or email address.

   ![Screenshot of the search bar under "Manage access".](/assets/images/help/copilot/manage-access-search.png)

1. To remove the member from the list of users who have access to {% data variables.product.prodname_copilot %}, click **Remove** on the right side of the page.

## Configuring suggestion matching policies for {% data variables.product.prodname_copilot %} in your organization

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown to you.

{% ifversion ghec %}If your enterprise admin has selected **No policy (let each organization decide)** for suggestion matching at the enterprise level, you can set a suggestion matching policy for your organization. If an organization member is assigned a seat by multiple organizations with different suggestion matching policies under the same enterprise, {% data variables.product.prodname_copilot %} will use the most restrictive policy.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}**, and then click **Policies**.
1. In the "Suggestions matching public code" dropdown, select **Allow** or **Block** to allow or block suggestions matching public code.

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"
