{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

批准企业帐户的域后，您可以将有关企业帐户中活动的电子邮件通知限制为在已验证或已批准域中具有已验证电子邮件地址的用户。 {% ifversion fpt%}For more information, see "[Restricting email notifications for your enterprise account](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."{% endif %}

{% ifversion fpt%}To receive email notifications, the owner of the user account must verify the email address in on {% data variables.product.product_name %}. 更多信息请参阅“[验证电子邮件地址](/github/getting-started-with-github/verifying-your-email-address)”。{% endif %}

组织所有者无法查看电子邮件地址，也无法查看哪个用户帐户与已批准域中的电子邮件地址相关联。

组织所有者还可以批准其组织的其他域。 更多信息请参阅“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。
