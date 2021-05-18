When you restrict email notifications, enterprise members can only use an email address in a verified or approved domain to receive email notifications about activity in organizations owned by your enterprise account.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

ドメインは、Enterprise アカウントから継承することも、特定の Organization 用に設定することもできます。 For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)" and "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

{% data reusables.notifications.email-restrictions-verification %}

Enterprise アカウントでメール制限が有効になっている場合、Organization のオーナーは、Enterprise アカウントが所有する Organization のメール制限を無効にすることはできません。 If changes occur that result in an organization having no verified or approved domains, either inherited from an enterprise account that owns the organization or for the specific organization, email restrictions will be disabled for the organization.
