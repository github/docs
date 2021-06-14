---
title: Verificar o domínio da organização
intro: 'Você pode verificar os domínios controlados pela sua organização para confirmar a identidade dela no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---
### Sobre a verificação do domínio

Para verificar domínios no {% data variables.product.product_name %}, você deve ter permissões de proprietário na organização. Para obter mais informações, consulte "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization)". Você também precisará de acesso para modificar registros de domínio com o serviço de hospedagem de domínio.

Após a verificação da propriedade dos domínios da sua organização, é exibido um selo "Verified" (Verificado) no perfil da organização. Se ela estiver no {% data variables.product.prodname_ghe_cloud %} e tiver concordado com os Termos de serviço corporativos, os proprietários da organização poderão verificar a identidade dos integrantes dela exibindo o endereço de e-mail de cada um deles no domínio verificado. Para obter mais informações, consulte "[Sobre a página de perfil da sua organização](/articles/about-your-organization-s-profile/)" e "[Atualizar para os Termos de serviço corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

Se sua organização pertence a uma conta corporativa, será exibido um selo "Verificado" no perfil da sua organização para quaisquer domínios verificados para a conta corporativa, além de quaisquer domínios verificados para a organização. Para obter mais informações, consulte "[Verificar o domínio da sua conta corporativa](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)".

{% data reusables.organizations.verified-domains-details %}

No {% data variables.product.prodname_ghe_cloud %}, após a verificação da propriedade do domínio da sua organização, você pode restringir as notificações de email para a organização a esse domínio. Para obter mais informações, consulte "[Restringir notificações de e-mail a um domínio aprovado](/articles/restricting-email-notifications-to-an-approved-domain)."

### Verificar o domínio da organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Clique em **Add a domain** (Adicionar um domínio). ![Botão Add a domain (Adicionar um domínio)](/assets/images/help/organizations/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Aguarde a alteração da configuração de DNS, que pode demorar até 72 horas. Você pode confirmar que a configuração do DNS foi alterada executando o comando `dig` na linha de comando, substituindo `ORGANIZATION` pelo nome da sua organização e `example.com` pelo o domínio que você gostaria de verificar. Você deverá ver o novo registro TXT listado na saída do comando.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
8. Depois de confirmar que o registro TXT foi adicionado ao DNS, navegue até a guia Verified domain (Domínios verificados) nas configurações da organização. Siga as etapas 1 a 4 acima para localizar a guia Verified domains (Domínios verificados). ![Página de configurações de domínios verificados com domínio pendente](/assets/images/help/organizations/pending-domain-verification.png)
{% data reusables.organizations.continue-verifying-domain %}
11. Depois que o selo "Verified" (Verificado) estiver visível na página de perfil da sua organização, a entrada TXT poderá ser excluída do registro DNS no serviço de hospedagem de domínio. ![Selo Verified (Verificado)](/assets/images/help/organizations/verified-badge.png)
