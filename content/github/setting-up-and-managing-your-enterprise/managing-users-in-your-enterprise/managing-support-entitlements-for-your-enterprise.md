---
title: Managing support entitlements for your enterprise
intro: You can grant enterprise members the ability to manage support tickets for your enterprise account.
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - Enterprise
  - Support
---
### About support entitlements

People with support entitlements for your enterprise account can use the support portal to open, view, and comment on support tickets associated with the enterprise account.

Enterprise owners and billing managers automatically have a support entitlement. Enterprise owners can add support entitlements to members of organizations owned by their enterprise account.

### Adding a support entitlement to an enterprise member

{% note %}

**Note**: After you add a support entitlement, the enterprise member may need to sign out and sign in again to manage tickets.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
3. Under "Settings", click **Support**.
![Support menu item](/assets/images/help/enterprises/settings-support.png)
4. Under "Add support member", start typing the name or username of the person you want to give a support entitlement. Click their name in the list of matches.
![Add support entitlement](/assets/images/help/enterprises/settings-support-entitlement-search.png)
5. Click **Add support entitlement**.
![Add support entitlement](/assets/images/help/enterprises/settings-support-add-entitlement.png)

### Removing a support entitlement from an enterprise member

You can remove a support entitlement from an enterprise member. You cannot remove a support entitlement from enterprise owners or billing managers.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
3. In the sidebar under "Settings", click **Support**.
![Support menu item](/assets/images/help/enterprises/settings-support.png)
4. Under "Support members", to the right of the person you want to remove a support entitlement from, click {% octicon "trash" aria-label="The trash icon" %}.
![Remove support entitlement](/assets/images/help/enterprises/settings-support-remove-entitlement.png)

### Further reading

- "[Working with GitHub support](/github/working-with-github-support)"
