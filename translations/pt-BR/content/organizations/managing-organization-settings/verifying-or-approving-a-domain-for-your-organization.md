---
title: Verificando ou aprovando um domínio para sua organização
intro: 'Você pode verificar a propriedade de domínios com {% data variables.product.company_short %} para confirmar a identidade da sua organização. Você também pode aprovar domínios para os quais {% data variables.product.company_short %} pode enviar notificações de email para os integrantes da sua organização.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  ghes: '>=3.2'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verificar ou aprovar um domínio
---

## Sobre a verificação do domínio

Após a verificação da propriedade dos domínios da sua organização, é exibido um selo "Verified" (Verificado) no perfil da organização. {% ifversion ghec %} Se a sua organização estiver tiver concordado com os Termos de serviço corporativos, os proprietários da organização poderão verificar a identidade dos seus integrantes exibindo o endereço de e-mail de cada um deles no domínio verificado. Para obter mais informações, consulte "[Sobre a página de perfil da sua organização](/articles/about-your-organization-s-profile/)" e "<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Atualizar para os Termos de serviço corporativos</a>".{% endif %}

{% ifversion ghec %}Se sua organização pertencer a uma conta corporativa um selo "Verificado" de{% elsif ghes %}A{% endif %} será exibido no perfil da sua organização para todos os domínios verificados para a conta corporativa, além de todos os domínios verificados para a organização. Os proprietários da organização podem ver quaisquer domínios que um proprietário da empresa verificou ou aprovou e pode editar os domínios se o proprietário da organização também for um proprietário corporativo. Para obter mais informações, consulte "[Verificando ou aprovando um domínio para sua empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

{% ifversion ghec %}
{% note %}

**Observação:** Para verificar ou aprovar domínios, sua organização deve usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes > 3.1 %}
Depois de verificar a propriedade do domínio da sua organização, você pode restringir as notificações de e-mail da organização para esse domínio. Para obter mais informações, consulte "[Restringir notificações de e-mail para sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".
{% endif %}

{% ifversion ghec %}Você também pode verificar domínios personalizados usados para {% data variables.product.prodname_pages %} para evitar ofertas públicas de domínio quando um domínio personalizado permanece configurado, mas seu site de {% data variables.product.prodname_pages %} está desabilitado ou não usa mais o domínio. Para obter mais informações, consulte "[Verificando o seu domínio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."{% endif %}

## Sobre a aprovação de domínio

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Após aprovar domínios para a sua organização, você pode restringir notificações de e-mail para atividades dentro da organização para usuários com endereços de e-mail verificados dentro de domínios verificados ou aprovados. Para obter mais informações, consulte "[Restringir notificações de e-mail para sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

Os proprietários de empresas não podem ver quais integrantes da organização ou endereços de e-mail recebem notificações dentro dos domínios aprovados.

Os proprietários de empresas também podem aprovar domínios adicionais para organizações pertencentes à empresa. {% ifversion ghec %}Para obter mais informações, consulte "[Verificar ou aprovar um domínio para a sua empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %}{% ifversion ghes > 3.1 %}Para obter mais informações, consulte[Verificando ou aprovando um domínio para sua empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %}

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

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

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
