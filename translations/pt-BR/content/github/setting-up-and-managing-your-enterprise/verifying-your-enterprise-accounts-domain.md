---
title: Verificar o domínio da conta corporativa
intro: 'Você pode confirmar a identidade das organizações pertencentes à conta corporativa verificando a propriedade dos nomes de domínio com {% data variables.product.company_short %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: Os proprietários das empresas podem verificar o domínio de uma conta corporativa.
redirect_from:
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
---

{% data reusables.enterprise-accounts.verifying-domains-release-phase %}

### Sobre a verificação do domínio

Você pode confirmar que os sites e endereços de e-mail listados nos perfis de qualquer organização pertencente à sua conta corporativa são controlados pela sua empresa verificando os domínios. Os domínios verificados para uma conta corporativa aplicam-se a todas as organizações pertencentes à conta corporativa, e os proprietários da organização podem verificar domínios adicionais para suas organizações. Par obter mais informações, consulte "[Verificar o domínio da sua organização](/github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain)."

Depois de verificar a propriedade dos domínios da sua conta, será exibido um selo "Verificado" no perfil de cada organização com o domínio listado no seu perfil. {% data reusables.organizations.verified-domains-details %}

Os proprietários da organização conseguirão de verificar a identidade dos integrantes da organização, visualizando o endereço de e-mail de cada integrante dentro do domínio verificado.

Após verificar domínios para a sua conta corporativa, você poderá restringir notificações de e-mail para domínios verificados para todas as organizações pertencentes à sua conta corporativa. Para obter mais informações, consulte "[Restringir notificações de e-mail da sua conta corporativa para domínios aprovados](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains)".

Mesmo se você não restringir as notificações de e-mail para a conta corporativa, se o proprietário da organização tiver restringido as notificações de e-mail para a organização, os integrantes da organização poderão receber notificações de qualquer domínio verificado pela conta corporativa, além de qualquer domínio verificado para a organização. Para obter mais informações sobre restrição de notificações para uma organização, consulte "[Restringir notificações de e-mail para um domínio aprovado](/github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain).

### Verificar o domínio da conta corporativa

Para verificar o domínio da sua conta corporativa, você deve ter acesso para modificar registros de domínio com o seu serviço de hospedagem de domínio.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. Clique em **Add a domain** (Adicionar um domínio). ![Botão Add a domain (Adicionar um domínio)](/assets/images/help/enterprises/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Aguarde a alteração da configuração de DNS, que pode demorar até 72 horas. Você pode confirmar que a configuração do DNS foi alterada executando o comando `dig` na linha de comando, substituindo `ENTERPRISE-CONTA` pelo nome da conta corporativa e `example.com` pelo o domínio que você gostaria de verificar. Você deverá ver o novo registro TXT listado na saída do comando.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
{% data reusables.organizations.continue-verifying-domain %}
1. Opcionalmente, depois que o selo "Verificado" estiver visível nos perfis da sua organização, exclua a entrada TXT do registro do DNS no seu serviço de hospedagem de domínio. ![Selo Verified (Verificado)](/assets/images/help/organizations/verified-badge.png)