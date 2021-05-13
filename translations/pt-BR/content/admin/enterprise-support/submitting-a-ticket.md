---
title: Enviar um tíquete
intro: 'Você pode enviar um tíquete de suporte usando {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} de {% data variables.enterprise.management_console %} ou{% endif %} o portal de suporte.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### Como enviar um tíquete

Antes de enviar um ticket, reúna informações úteis sobre o {% data variables.contact.github_support %} e defina a melhor pessoa para fazer o contato. Para obter mais informações, consulte "[Preparar para enviar um tíquete](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)".

{% if enterpriseServerVersions contains currentVersion %}
Após enviar a sua solicitação de suporte e informações opcionais de diagnóstico,
{% data variables.contact.github_support %} poderá pedir que você baixe e compartilhe um pacote de suporte conosco. Para obter mais informações, consulte "[Enviar dados ao {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)".

### Enviar um tíquete usando o {% data variables.contact.enterprise_portal %}

1. Navegue até o {% data variables.contact.contact_enterprise_portal %}.
5. Clique em **Enviar um tíquete** ![Enviar um tíquete para a equipe de Suporte do Enterprise](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Enviando um tíquete usando sua conta corporativa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Em "Ajuda {% data variables.product.prodname_enterprise %}", clique em Portal **{% data variables.contact.enterprise_support %}**. ![Link para navegar para o site de Suporte do Enterprise](/assets/images/enterprise/support/enterprise-support-link.png)
5. Clique em **Enviar um tíquete** ![Enviar um tíquete para a equipe de Suporte do Enterprise](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Enviar um tíquete usando o {% data variables.product.product_name %} {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. Se você quiser incluir diagnósticos no seu ticket de suporte, em "Diagnostics" (Diagnósticos), clique em **Download diagnostic info** (Baixar informações de diagnóstico) e salve o arquivo no local. Esse arquivo será anexado ao seu tíquete de suporte. ![Botão para baixar informações de diagnóstico](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. Em "Open Support Request" (Abrir solicitação de suporte), clique em **New support request** (Nova solicitação de suporte). ![Botão para abrir solicitação de suporte](/assets/images/enterprise/management-console/open-support-request.png)
5. Clique em **Enviar um tíquete** ![Enviar um tíquete para a equipe de Suporte do Enterprise](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
14. Para incluir o diagnóstico no tíquete de suporte, clique em **Add file** (Adicionar arquivo) e anexe o arquivo de diagnóstico que você baixou. ![Botão Add file (Adicionar arquivo)](/assets/images/enterprise/support/support-ticket-add-file.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}
7. Clique em **Enviar**.

{% endif %}
{% if currentVersion == "github-ae@latest" %}
### Enviar um tíquete usando o {% data variables.contact.ae_azure_portal %}

Os clientes comerciais podem enviar um pedido de suporte no {% data variables.contact.contact_ae_portal %}. Clientes do governo devem usar os [Portal do Azure para clientes do governo](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Para obter mais informações, consulte [Criar uma solicitação de suporte ao Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) na documentação da Microsoft.

{% endif %}

### Leia mais

- "[Sobre {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[Sobre {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."{% endif %}
