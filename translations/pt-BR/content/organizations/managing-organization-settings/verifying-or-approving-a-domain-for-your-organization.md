---
title: Verificando ou aprovando um domínio para sua organização
intro: 'Você pode verificar a propriedade de domínios com {% data variables.product.company_short %} para confirmar a identidade da sua organização. Você também pode aprovar domínios para os quais {% data variables.product.company_short %} pode enviar notificações de email para os integrantes da sua organização.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  fpt: '*'
  ghes: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verificar ou aprovar um domínio
---

## Sobre a verificação do domínio

Após a verificação da propriedade dos domínios da sua organização, é exibido um selo "Verified" (Verificado) no perfil da organização. {% ifversion fpt %}If your organization is on {% data variables.product.prodname_ghe_cloud %} and has agreed to the Corporate Terms of Service, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. For more information, see "[About your organization's profile page](/articles/about-your-organization-s-profile/)" and "<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Upgrading to the Corporate Terms of Service</a>."{% endif %}

{% ifversion fpt %}If your organization is owned by an enterprise account, a{% elsif ghes %}A{% endif %} "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owner. {% ifversion fpt %}For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion fpt %}On {% data variables.product.prodname_ghe_cloud %}, after verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. Para obter mais informações, consulte "[Restringir notificações de e-mail para sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)". {% data reusables.enterprise.link-to-ghec-trial %}{% endif %}

## Sobre a aprovação de domínio

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Após aprovar domínios para a sua organização, você pode restringir notificações de e-mail para atividades dentro da organização para usuários com endereços de e-mail verificados dentro de domínios verificados ou aprovados. Para obter mais informações, consulte "[Restringir notificações de e-mail para sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

Os proprietários de empresas não podem ver quais integrantes da organização ou endereços de e-mail recebem notificações dentro dos domínios aprovados.

Os proprietários de empresas também podem aprovar domínios adicionais para organizações pertencentes à empresa. {% ifversion fpt %}For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

## Verificando um domínio para a sua organização

Para verificar um domínio, você deve ter acesso para modificar registros de domínio com o seu serviço de hospedagem de domínio.

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
1. Depois de confirmar que o seu registro TXT foi adicionado ao seu DNS, siga os passos um a três acima para acessar os domínios aprovados e verificados da sua organização.
{% data reusables.organizations.continue-verifying-domain %}
11. Depois que o selo "Verified" (Verificado) estiver visível na página de perfil da sua organização, a entrada TXT poderá ser excluída do registro DNS no serviço de hospedagem de domínio. ![Selo Verified (Verificado)](/assets/images/help/organizations/verified-badge.png)

## Aprovando um domínio para a sua organização

{% ifversion fpt or ghes > 3.1 %}

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## Removendo um domínio aprovado ou verificado

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. À direita do domínio a ser removido, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Excluir**. !["Excluir" para um domínio](/assets/images/help/organizations/domains-delete.png)
