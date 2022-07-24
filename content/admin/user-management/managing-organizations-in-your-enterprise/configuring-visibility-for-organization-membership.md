---
title: Configuring visibility for organization membership
intro: You can set visibility for new organization members across your enterprise to public or private. You can also prevent members from changing their visibility from the default.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
---
{% ifversion ghes %}
You can also enforce your default setting on all current organization members in your instance using a command-line utility. For example, if you'd like to require every organization member's visibility to be public, you can set the default to public and enforce the default for all new members in the admin settings, and then use the command-line utility to enforce the public setting on existing members.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. Under "Default organization membership visibility", use the drop-down menu, and click **Private** or **Public**.
  ![Drop-down menu with option to configure default organization membership visibility as public or private](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Optionally, to prevent members from changing their membership visibility from the default, select **Enforce on organization members**.
  ![Checkbox to enforce the default setting on all members](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. If you'd like to enforce your new visibility setting on all existing members, use the `ghe-org-membership-update` command-line utility. For more information, see "[Command-line utilities](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update)."{% endif %}
