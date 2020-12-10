---
title: Verificar o domínio da organização
intro: 'Você pode verificar os domínios controlados pela sua organização para confirmar a identidade dela no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

Para verificar domínios no {% data variables.product.product_name %}, você deve ter permissões de proprietário na organização. Para obter mais informações, consulte "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization)". Você também precisará de acesso para modificar registros de domínio com o serviço de hospedagem de domínio.

Após a verificação da propriedade dos domínios da sua organização, é exibido um selo "Verified" (Verificado) no perfil da organização. Se ela estiver no {% data variables.product.prodname_ghe_cloud %} e tiver concordado com os Termos de serviço corporativos, os proprietários da organização poderão verificar a identidade dos integrantes dela exibindo o endereço de e-mail de cada um deles no domínio verificado. Para obter mais informações, consulte "[Sobre a página de perfil da sua organização](/articles/about-your-organization-s-profile/)" e "[Atualizar para os Termos de serviço corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

Para exibir um selo "Verified" (Verificado), é preciso que as informações do e-mail e do site mostradas no perfil da organização correspondam aos domínios verificados. Se o site e o endereço de e-mail mostrados no perfil da organização estiverem hospedados em domínios diferentes, você deverá verificar os dois domínios.

{% note %}

**Observação:** se o endereço de e-mail e o site mostrados no perfil da organização usarem variantes do mesmo domínio, será preciso verificar ambas. Por exemplo, se o perfil da sua organização mostra o site `www.example.com` e o endereço de e-mail `info@example.com`, você deve verificar tanto `www.example.com` como `example.com`.

{% endnote %}

No {% data variables.product.prodname_ghe_cloud %}, após a verificação da propriedade do domínio da sua organização, você pode restringir as notificações de email para a organização a esse domínio. Para obter mais informações, consulte "[Restringir notificações de e-mail a um domínio aprovado](/articles/restricting-email-notifications-to-an-approved-domain)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Clique em **Add a domain** (Adicionar um domínio). ![Botão Add a domain (Adicionar um domínio)](/assets/images/help/organizations/add-a-domain-button.png)
6. No campo de domínio, digite o domínio que deseja verificar e clique em **Add domain** (Adicionar domínio). ![Campo Add a domain (Adicionar um domínio)](/assets/images/help/organizations/add-domain-field.png)
7. Para criar um registro TXT DNS com o serviço de hospedagem de domínio, siga as instruções em **Add a DNS TXT record** (Adicionar um registro TXT DNS). Pode demorar até 72 horas para a configuração do DNS ser alterada. Uma vez confirmada a alteração, avance para a próxima etapa. ![Instruções para criar um registro TXT DNS](/assets/images/help/organizations/create-dns-txt-record-instructions.png)

   {% tip %}

   **Dica:** você pode confirmar se a configuração do DNS foi alterada executando o comando `dig` na linha de comando. No exemplo de comando, substitua `ORGANIZATION` pelo nome da sua organização e `example.com` pelo domínio que deseja verificar. Você deverá ver o novo registro TXT listado na saída do comando.

   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```

   {% endtip %}

8. Depois de confirmar que o registro TXT foi adicionado ao DNS, navegue até a guia Verified domain (Domínios verificados) nas configurações da organização. Siga as etapas 1 a 4 acima para localizar a guia Verified domains (Domínios verificados). ![Página de configurações de domínios verificados com domínio pendente](/assets/images/help/organizations/pending-domain-verification.png)
9. Ao lado do domínio com verificação pendente, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e depois em **Continue verifying** (Continuar a verificação). ![Botão do domínio Continue verifying (Continuar a verificação)](/assets/images/help/organizations/continue-verifying-domain.png)
10. Clique em **Verify domain** (Verificar domínio). ![Botão Verify domain (Verificar domínio)](/assets/images/help/organizations/verify-domain-final-button.png)
11. Depois que o selo "Verified" (Verificado) estiver visível na página de perfil da sua organização, a entrada TXT poderá ser excluída do registro DNS no serviço de hospedagem de domínio. ![Selo Verified (Verificado)](/assets/images/help/organizations/verified-badge.png)
