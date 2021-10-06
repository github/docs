You can confirm that the websites and email addresses listed on the profiles of any organization owned by your enterprise account are controlled by your enterprise by verifying the domains. Verified domains for an enterprise account apply to every organization owned by the enterprise account.

After you verify ownership of your enterprise account's domains, a "Verified" badge will display on the profile of each organization that has the domain listed on its profile. {% data reusables.organizations.verified-domains-details %}

Organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain.

After you verify domains for your enterprise account, you can restrict email notifications to verified domains for all the organizations owned by your enterprise account. {% ifversion fpt%}For more information, see "[Restricting email notifications for your enterprise account](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."{% endif %}

Even if you don't restrict email notifications for the enterprise account, if an organization owner has restricted email notifications for the organization, organization members will be able to receive notifications at any domains verified or approved for the enterprise account, in addition to any domains verified or approved for the organization. For more information about restricting notifications for an organization, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

Organization owners can also verify additional domains for their organizations. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."
