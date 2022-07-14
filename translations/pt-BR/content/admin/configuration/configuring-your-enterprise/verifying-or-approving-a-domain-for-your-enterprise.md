---
title: Verificando ou aprovando um domínio para sua empresa
shortTitle: Verificar ou aprovar um domínio
intro: 'Você pode verificar a propriedade de domínios com {% data variables.product.company_short %} para confirmar a identidade de organizações pertencentes à sua conta corporativa. Você também pode aprovar domínios em que os integrantes da organização podem receber notificações por e-mail.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
---

## Sobre a verificação de domínios

Você pode confirmar que os sites e endereços de e-mail listados nos perfis de qualquer organização pertencente à sua conta corporativa são controlados pela sua empresa verificando os domínios. Os domínios verificados para uma conta corporativa aplicam-se a todas as organizações pertencentes à conta corporativa.

Depois de verificar a propriedade dos domínios da sua conta, será exibido um selo "Verificado" no perfil de cada organização com o domínio listado no seu perfil. {% data reusables.organizations.verified-domains-details %}

Para domínios configurados no nível corporativo, os proprietários corporativos podem verificar a identidade dos membros da organização visualizando o endereço de e-mail de cada integrante dentro do domínio verificado. Os proprietários das empresas também podem ver uma lista de integrantes corporativos que não têm um endereço de e-mail de um domínio verificado associado à sua conta de usuário em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Visualizando integrantes sem um endereço de e-mail de um domínio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".

Após verificar domínios para a sua conta corporativa, você poderá restringir notificações de e-mail para domínios verificados para todas as organizações pertencentes à sua conta corporativa. Para obter mais informações, consulte "[Restringindo notificações de e-mail para a sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".

Mesmo se você não restringir as notificações de e-mail da conta corporativa, se o proprietário da organização tiver restringido as notificações de e-mail para a organização, os integrantes da organização poderão receber notificações em qualquer domínio verificado ou aprovado para a conta corporativa, além de quaisquer domínios verificados ou aprovados para a organização. Para obter mais informações sobre restrições de notificações para uma organização, consulte "[Restringir notificações de e-mail para a sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

Os proprietários da organização também podem verificar domínios adicionais para suas organizações. Para obter mais informações, consulte "[Verificar ou aprovar um domínio para a sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

## Sobre a aprovação de domínios

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Depois de aprovar domínios para a conta corporativa, você poderá restringir notificações de e-mail para atividades dentro da sua conta corporativa para usuários com endereços de e-mail verificados dentro de domínios verificados ou aprovados. Para obter mais informações, consulte "[Restringindo notificações de e-mail para a sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".

{% ifversion ghec %}Para receber notificações de e-mail, o proprietário da conta de usuário deve verificar o endereço de e-mail em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Verificar o endereço de e-mail](/github/getting-started-with-github/verifying-your-email-address)".{% endif %}

Os proprietários da organização não podem ver o endereço de e-mail ou a conta de usuário que está associada a um endereço de e-mail de um domínio aprovado.

Os proprietários da organização também podem aprovar domínios adicionais para suas organizações. Para obter mais informações, consulte "[Verificar ou aprovar um domínio para a sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

## Verificando um domínio para a conta corporativa

Para verificar o domínio da sua conta corporativa, você deve ter acesso para modificar registros de domínio com o seu serviço de hospedagem de domínio.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Aguarde a alteração da configuração de DNS, que pode demorar até 72 horas. Você pode confirmar que a configuração do DNS foi alterada executando o comando `dig` na linha de comando, substituindo `ENTERPRISE-CONTA` pelo nome da conta corporativa e `example.com` pelo o domínio que você gostaria de verificar. Você deverá ver o novo registro TXT listado na saída do comando.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Depois de confirmar o seu registro TXT é adicionado ao seu DNS, siga as etapas uma a quatro acima para acessar os domínios aprovados e verificados da conta corporativa.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. Opcionalmente, depois que o selo "Verificado" estiver visível nos perfis da sua organização, exclua a entrada TXT do registro do DNS no seu serviço de hospedagem de domínio. ![Selo Verified (Verificado)](/assets/images/help/organizations/verified-badge.png)

## Aprovando um domínio para a sua conta corporativa

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## Removendo um domínio aprovado ou verificado

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. À direita do domínio a ser removido, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Excluir**. !["Excluir" para um domínio](/assets/images/help/organizations/domains-delete.png)
