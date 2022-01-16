Ao restringir as notificações por e-mail, os integrantes da empresa só podem usar um endereço de e-mail em um domínio verificado ou aprovado para receber notificações de e-mail sobre a atividade em organizações pertencentes à conta corporativa.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% ifversion fpt %}
Os domínios podem ser herdados da conta corporativa ou configurados para a organização específica. Para mais informações, consulte "[verificar ou aprovar um domínio para a conta corporativa](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)" e[Restringir notificações de e-mail para a sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".
{% endif %}

{%  ifversion ghes > 3.1 %}
Os domínios podem ser herdados da conta corporativa ou configurados para a organização específica. For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" and "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."
{% endif %}

{% data reusables.notifications.email-restrictions-verification %}

Se restrições de e-mail estiverem habilitadas para uma conta corporativa, os proprietários da organização não poderão desabilitar restrições de e-mail para qualquer organização que pertence à conta corporativa. Se ocorrerem alterações que resultem em uma organização não ter domínios verificados ou aprovados, herdado de uma conta corporativa pertencente à organização ou para uma organização específica, as restrições de e-mail serão desabilitadas para a organização.
