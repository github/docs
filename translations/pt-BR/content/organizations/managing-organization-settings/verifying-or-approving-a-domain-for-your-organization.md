---
title: Verifying or approving a domain for your organization
intro: 'You can verify your ownership of domains with {% data variables.product.company_short %} to confirm your organization''s identity. You can also approve domains that {% data variables.product.company_short %} can send email notifications to for members of your organization.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
---

### Sobre a verificação do domínio

Após a verificação da propriedade dos domínios da sua organização, é exibido um selo "Verified" (Verificado) no perfil da organização. Se ela estiver no {% data variables.product.prodname_ghe_cloud %} e tiver concordado com os Termos de serviço corporativos, os proprietários da organização poderão verificar a identidade dos integrantes dela exibindo o endereço de e-mail de cada um deles no domínio verificado. Para obter mais informações, consulte "[Sobre a página de perfil da sua organização](/articles/about-your-organization-s-profile/)" e "[Atualizar para os Termos de serviço corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

Se sua organização pertence a uma conta corporativa, será exibido um selo "Verificado" no perfil da sua organização para quaisquer domínios verificados para a conta corporativa, além de quaisquer domínios verificados para a organização. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owners. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

{% data reusables.organizations.verified-domains-details %}

No {% data variables.product.prodname_ghe_cloud %}, após a verificação da propriedade do domínio da sua organização, você pode restringir as notificações de email para a organização a esse domínio. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

### About domain approval

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your organization, you can restrict email notifications for activity within the organization to users with verified email addresses within verified or approved domains. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

Enterprise owners cannot see which organization members or email addresses receive notifications within approved domains.

Enterprise owners can also approve additional domains for organizations owned by the enterprise. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

### Verifying a domain for your organization

To verify a domain, you must have access to modify domain records with your domain hosting service.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Aguarde a alteração da configuração de DNS, que pode demorar até 72 horas. Você pode confirmar que a configuração do DNS foi alterada executando o comando `dig` na linha de comando, substituindo `ORGANIZATION` pelo nome da sua organização e `example.com` pelo o domínio que você gostaria de verificar. Você deverá ver o novo registro TXT listado na saída do comando.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. After confirming your TXT record is added to your DNS, follow steps one through three above to navigate to your organization's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
11. Depois que o selo "Verified" (Verificado) estiver visível na página de perfil da sua organização, a entrada TXT poderá ser excluída do registro DNS no serviço de hospedagem de domínio. ![Selo Verified (Verificado)](/assets/images/help/organizations/verified-badge.png)

### Approving a domain for your organization

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

### Removing an approved or verified domain

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. To the right of the domain to remove, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**. !["Delete" for a domain](/assets/images/help/organizations/domains-delete.png)
