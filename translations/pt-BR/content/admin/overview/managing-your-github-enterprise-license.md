---
title: Gerenciando sua licença do GitHub Enterprise
intro: 'Você pode visualizar, gerenciar e atualizar sua licença do {{ site.data.variables.product.prodname_enterprise }}.'
redirect_from:
  - /enterprise/admin/installation/managing-your-github-enterprise-license
  - /enterprise/admin/categories/licenses/
  - /enterprise/admin/articles/license-files/
  - /enterprise/admin/installation/about-license-files/
  - /enterprise/admin/articles/downloading-your-license/
  - /enterprise/admin/installation/downloading-your-license/
  - /enterprise/admin/articles/upgrading-your-license/
  - /enterprise/admin/installation/updating-your-license/
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/overview/managing-your-github-enterprise-license
versions:
  enterprise-server: '*'
---

### Sobre as licenças do {{ site.data.variables.product.prodname_enterprise }}

Ao comprar ou renovar o {{ site.data.variables.product.prodname_enterprise }}, você recebe um arquivo de licença para validar seu aplicativo. Um arquivo de licença tem data de validade e controla o número de licenças de usuário que você pode adicionar ao {{ site.data.variables.product.prodname_enterprise }}. Depois de baixar e instalar o {{ site.data.variables.product.prodname_enterprise }}, fazer upload do arquivo de licença desbloqueia o aplicativo para uso.

Você pode alocar as licenças de usuário incluídas na sua licença da {{ site.data.variables.product.prodname_enterprise }} a usuários na {{ site.data.variables.product.product_location_enterprise }} e a uma conta corporativa do {{ site.data.variables.product.prodname_ghe_cloud }}. Quando você adiciona um usuário a um dos ambientes, ele consome uma licença. Se um usuário tem contas em ambos os ambientes, para consumir apenas uma licença, seu endereço de e-mail principal de {{ site.data.variables.product.prodname_enterprise }} deve ser o mesmo que seu endereço de e-mail verificado em {{ site.data.variables.product.prodname_ghe_cloud }}. Você pode sincronizar a contagem e o uso de licenças entre os ambientes.

Se a sua licença do {{ site.data.variables.product.prodname_ghe_server }} expirar, você não poderá acessar a {{ site.data.variables.product.product_location_enterprise }} via navegador da web ou Git. Se necessário, você poderá usar os utilitários de linha de comando para fazer backup de todos os seus dados. Para obter mais informações, consulte "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)". Se você tiver alguma dúvida sobre a renovação da sua licença, contate {{ site.data.variables.contact.contact_enterprise_sales }}.

### Fazer upload de uma nova licença para o {{ site.data.variables.product.prodname_ghe_server }}

Depois de comprar uma nova licença ou atualizar uma licença existente de {{ site.data.variables.contact.contact_enterprise_sales }}, você deve baixar seu novo arquivo de licença e fazer upload desse arquivo no {{ site.data.variables.product.prodname_ghe_server }} para desbloquear suas novas licenças de usuário.

Caso queira renovar ou adicionar licenças de usuário com o {{ site.data.variables.product.prodname_enterprise }}, entre em contato com {{ site.data.variables.contact.contact_enterprise_sales }}. Seu novo arquivo de licença estará disponível para download logo após a conclusão do pedido.

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. Em "Enterprise Server Instances", clique em {% octicon "download" aria-label="The download icon" %} para fazer o download do seu arquivo de licença. ![Baixar licença do GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)
5. Faça login na sua instância do {{ site.data.variables.product.prodname_ghe_server }} como administrador do site.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.license-tab }}
12. Em "Quick links" (Links rápidos), clique em **Update license** (Atualizar licença). ![Link de atualização de licença](/assets/images/enterprise/business-accounts/update-license-link.png)
13. Para selecionar sua licença, clique em **License file** (Arquivo de licença) ou arraste o arquivo de licença para o **License file** (Arquivo de licença). ![Fazer upload do arquivo de licença](/assets/images/enterprise/management-console/upload-license.png)
14. Clique em **Fazer upload**. ![Iniciar atualização](/assets/images/enterprise/management-console/begin-upload.png)

### Exibir o uso de licenças

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. Revise sua licença atual de {{ site.data.variables.product.prodname_enterprise }}, bem como licenças de usuário consumidas e disponíveis.

### Sincronizar automaticamente o uso da licença de usuário com o {{ site.data.variables.product.prodname_ghe_cloud }}

É possível usar o {{ site.data.variables.product.prodname_github_connect }} para sincronizar automaticamente o uso e a contagem da licença de usuários entre o {{ site.data.variables.product.prodname_ghe_server }} e o {{ site.data.variables.product.prodname_ghe_cloud }}. Para obter mais informações, consulte "[Habilitar a sincronização de licenças de usuário entre o {{ site.data.variables.product.prodname_ghe_server }} e o {{ site.data.variables.product.prodname_ghe_cloud }}](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)".

### Sincronizando manualmente o uso da licença de usuário entre {{ site.data.variables.product.prodname_ghe_server }} e {{ site.data.variables.product.prodname_ghe_cloud }}

Para sincronizar manualmente o uso das licenças de usuário entre as duas implantações, você pode baixar um arquivo JSON do {{ site.data.variables.product.prodname_ghe_server }} e fazer upload desse arquivo no {{ site.data.variables.product.prodname_ghe_cloud }}.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.license-tab }}
5. Em "Quick links" (Links rápidos), para baixar um arquivo com o uso da sua licença atual no {{ site.data.variables.product.prodname_ghe_server }}, clique em **Export license usage** (Exportar uso de licença). ![Exportar link de uso de licença](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
6. Navegue até o {{ site.data.variables.product.prodname_ghe_cloud }}.
{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
10. Em "Instâncias Enterprise Server", clique em **Add server usage** (Adicionar uso de servidor). ![Fazer upload do link de uso do GitHub Enterprise Server](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Faça upload do arquivo JSON que você baixou do {{ site.data.variables.product.prodname_ghe_server }}.![Arrastar e soltar ou selecionar um arquivo para upload](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
