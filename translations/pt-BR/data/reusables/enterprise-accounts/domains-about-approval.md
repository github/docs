{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Depois de aprovar domínios para a conta corporativa, você poderá restringir notificações de e-mail para atividades dentro da sua conta corporativa para usuários com endereços de e-mail verificados dentro de domínios verificados ou aprovados. {% ifversion fpt%}For more information, see "[Restricting email notifications for your enterprise account](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."{% endif %}

{% ifversion fpt%}To receive email notifications, the owner of the user account must verify the email address in on {% data variables.product.product_name %}. Para obter mais informações, consulte "[Verificar o endereço de e-mail](/github/getting-started-with-github/verifying-your-email-address)".{% endif %}

Os proprietários da organização não podem ver o endereço de e-mail ou a conta de usuário que está associada a um endereço de e-mail de um domínio aprovado.

Os proprietários da organização também podem aprovar domínios adicionais para suas organizações. Para obter mais informações, consulte "[Verificar ou aprovar um domínio para a sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".
