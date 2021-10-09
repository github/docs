{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your enterprise account, you can restrict email notifications for activity within your enterprise account to users with verified email addresses within verified or approved domains. {% ifversion fpt%}For more information, see "[Restricting email notifications for your enterprise account](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."{% endif %}

{% ifversion fpt%}To receive email notifications, the owner of the user account must verify the email address in on {% data variables.product.product_name %}. For more information, see "[Verifying your email address](/github/getting-started-with-github/verifying-your-email-address)."{% endif %}

Organization owners cannot see the email address or which user account is associated with an email address from an approved domain.

Organization owners can also approve additional domains for their organizations. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."
