When you restrict email notifications, enterprise members can only use an email address in a verified or approved domain to receive email notifications about activity in organizations owned by your enterprise account.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% ifversion fpt %}
The domains can be inherited from the enterprise account or configured for the specific organization. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)" and "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."
{% endif %}

{% data reusables.notifications.email-restrictions-verification %}

If email restrictions are enabled for an enterprise account, organization owners cannot disable email restrictions for any organization owned by the enterprise account. If changes occur that result in an organization having no verified or approved domains, either inherited from an enterprise account that owns the organization or for the specific organization, email restrictions will be disabled for the organization.
