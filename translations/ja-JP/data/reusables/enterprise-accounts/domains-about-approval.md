{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Enterpriseアカウントのためのドメインを承認したあと、Enterpriseアカウント内のアクティビティに関するメール通知を、検証済みあるいは承認済みのドメイン内のメールアドレスを持つユーザに限定できます。 {% ifversion fpt%}For more information, see "[Restricting email notifications for your enterprise account](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."{% endif %}

{% ifversion fpt%}To receive email notifications, the owner of the user account must verify the email address in on {% data variables.product.product_name %}. 詳しい情報については、「[メールアドレスの検証](/github/getting-started-with-github/verifying-your-email-address)」を参照してください。{% endif %}

Organizationのオーナーは、メールアドレスあるいは承認済みドメインからのメールアドレスにどのユーザアカウントが関連づけられているかを見ることはできません。

Organizationのオーナーは、自分のOrganizatinのための追加ドメインを承認することもできます。 詳しい情報については「[Organizationのドメインの検証もしくは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。
