---
title: Gerenciando sua licença do GitHub Enterprise
intro: 'Você pode visualizar, gerenciar e atualizar sua licença do {% data variables.product.prodname_enterprise %}.'
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
topics:
  - Enterprise
---

### Sobre as licenças do {% data variables.product.prodname_enterprise %}

Ao comprar ou renovar o {% data variables.product.prodname_enterprise %}, você recebe um arquivo de licença para validar seu aplicativo. Um arquivo de licença tem data de validade e controla o número de licenças de usuário que você pode adicionar ao {% data variables.product.prodname_enterprise %}. Depois de baixar e instalar o {% data variables.product.prodname_enterprise %}, fazer upload do arquivo de licença desbloqueia o aplicativo para uso. Para obter mais informações sobre o download de {% data variables.product.prodname_enterprise %}, consulte o site</a>

Versões de {% data variables.product.prodname_enterprise %}. Para obter informações sobre a configuração de {% data variables.product.product_location %}, consulte "[Configurar uma instância de {% data variables.product.prodname_enterprise %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".</p> 

Você pode alocar as licenças de usuário incluídas na sua licença da {% data variables.product.prodname_enterprise %} a usuários na {% data variables.product.product_location_enterprise %} e a uma conta corporativa do {% data variables.product.prodname_ghe_cloud %}. Quando você adiciona um usuário a um dos ambientes, ele consome uma licença. Se um usuário tem contas em ambos os ambientes, para consumir apenas uma licença, seu endereço de e-mail principal de {% data variables.product.prodname_enterprise %} deve ser o mesmo que seu endereço de e-mail verificado em {% data variables.product.prodname_ghe_cloud %}. Você pode sincronizar a contagem e o uso de licenças entre os ambientes.

Se a sua licença do {% data variables.product.prodname_ghe_server %} expirar, você não poderá acessar a {% data variables.product.product_location_enterprise %} via navegador da web ou Git. Se necessário, você poderá usar os utilitários de linha de comando para fazer backup de todos os seus dados. Para obter mais informações, consulte "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)". Se você tiver alguma dúvida sobre a renovação da sua licença, contate {% data variables.contact.contact_enterprise_sales %}.

Você pode fazer o download da sua licença {% data variables.product.prodname_ghe_server %} na sua [conta corporativa](https://enterprise.github.com/download). Para obter mais informações, consulte "[Gerenciar a licença do {% data variables.product.prodname_enterprise %}](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server)". 



### Fazer upload de uma nova licença para o {% data variables.product.prodname_ghe_server %}

Depois de comprar uma nova licença ou atualizar uma licença existente de {% data variables.contact.contact_enterprise_sales %}, você deve baixar seu novo arquivo de licença e fazer upload desse arquivo no {% data variables.product.prodname_ghe_server %} para desbloquear suas novas licenças de usuário.

Caso queira renovar ou adicionar licenças de usuário com o {% data variables.product.prodname_enterprise %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}. Seu novo arquivo de licença estará disponível para download logo após a conclusão do pedido.

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}



{% data reusables.enterprise-accounts.settings-tab %}

3. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)

4. Em "Enterprise Server Instances", clique em {% octicon "download" aria-label="The download icon" %} para fazer o download do seu arquivo de licença. ![Baixar licença do GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)

5. Faça login na sua
   
   Instância de {% data variables.product.prodname_ghe_server %} como administrador do site. 
   
   {% data reusables.enterprise-accounts.access-enterprise %}
   
   
   
   {% data reusables.enterprise-accounts.settings-tab %}
   
   
   
   {% data reusables.enterprise-accounts.license-tab %}

12. Em "Quick links" (Links rápidos), clique em **Update license** (Atualizar licença). ![Link de atualização de licença](/assets/images/enterprise/business-accounts/update-license-link.png)

13. Para selecionar sua licença, clique em **License file** (Arquivo de licença) ou arraste o arquivo de licença para o **License file** (Arquivo de licença). ![Fazer upload do arquivo de licença](/assets/images/enterprise/management-console/upload-license.png)

14. Clique em **Fazer upload**. ![Iniciar upload](/assets/images/enterprise/management-console/begin-upload.png)

{% if enterpriseVersion ver_lt "enterprise-server@3.0" %}Se a interface do usuário web para {% data variables.product.prodname_ghe_server %} não refletir sua licença atualizada imediatamente, consulte "[Solução de problemas](#troubleshooting)".{% endif %}



### Exibir o uso de licenças

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}



{% data reusables.enterprise-accounts.settings-tab %}

3. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)

4. Revise sua licença atual de {% data variables.product.prodname_enterprise %}, bem como licenças de usuário consumidas e disponíveis. {% if currentVersion ver_gt "enterprise-server@3.0" %}Se sua licença inclui {% data variables.product.prodname_GH_advanced_security %}, você pode rever o uso total das suas estações e uma discriminação por organização de commiters. Para obter mais informações, consulte "[Gerenciar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa](/admin/advanced-security)".{% endif %}



### Sincronizar automaticamente o uso da licença de usuário com o {% data variables.product.prodname_ghe_cloud %}

É possível usar o {% data variables.product.prodname_github_connect %} para sincronizar automaticamente o uso e a contagem da licença de usuários entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Habilitar a sincronização de licenças de usuário entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)".



### Sincronizando manualmente o uso da licença de usuário entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}

Para sincronizar manualmente o uso das licenças de usuário entre as duas implantações, você pode baixar um arquivo JSON do {% data variables.product.prodname_ghe_server %} e fazer upload desse arquivo no {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-accounts.access-enterprise %}



{% data reusables.enterprise-accounts.settings-tab %}



{% data reusables.enterprise-accounts.license-tab %}

5. Em "Links rápidos", para fazer o download de um arquivo que contém a sua licença atual em
   
   {% data variables.product.prodname_ghe_server %}, clique em **Exportar uso de licença**. 
   
   ![Exportar link de uso de licença](/assets/images/enterprise/business-accounts/export-license-usage-link.png) 
   
   {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
   
   
   
   {% data reusables.enterprise-accounts.settings-tab %}

8. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png) 
   
   {% data reusables.enterprise-accounts.license-tab %}

10. Em "Instâncias Enterprise Server", clique em **Add server usage** (Adicionar uso de servidor). ![Fazer upload do link de uso do GitHub Enterprise Server](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)

11. Faça upload do arquivo JSON que você baixou do {% data variables.product.prodname_ghe_server %}.![Arrastar e soltar ou selecionar um arquivo para upload](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)

{% if currentVersion ver_lt "enterprise-server@3.0" %}



### Solução de Problemas

Em alguns cenários, a interface de usuário web para {% data variables.product.prodname_ghe_server %} pode não refletir imediatamente sua nova licença. Você pode forçar o sistema a detectar a licença, reiniciando dois serviços do sistema.

{% data reusables.enterprise_installation.ssh-into-instance %}

1. Reinicie os serviços para autenticação Git e o servidor HTTP.
   
   {% warning %}
   
   **Aviso**: Executar o seguinte comando gerará alguns minutos de tempo de inatividade do usuário para {% data variables.product.prodname_ghe_server %}. Execute o comando com cuidado.
   
   {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
       

1. Depois que {% data variables.product.prodname_ghe_server %} retornar você para uma instrução, tente acessar {% data variables.product.prodname_ghe_server %} por meio da linha de comando ou da interface do usuário da web novamente.

{% endif %}
