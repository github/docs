---
title: Enviar um tíquete
intro: 'Você pode enviar um tíquete de suporte usando {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} ou o portal de suporte {% elsif ghae %}{% data variables.contact.ae_azure_portal %}{% endif %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Support
---

## Como enviar um tíquete

{% ifversion ghae %}

Você pode enviar um tíquete para suporte com {% data variables.product.prodname_ghe_managed %} de {% data variables.contact.ae_azure_portal %}.

{% endif %}

Antes de enviar um ticket, reúna informações úteis sobre o {% data variables.contact.github_support %} e defina a melhor pessoa para fazer o contato. Para obter mais informações, consulte "[Preparar para enviar um tíquete](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)".

{% ifversion ghes %}
Depois de enviar sua solicitação de suporte e as informações opcionais de diagnóstico, o {% data variables.contact.github_support %} pode solicitar que você baixe e compartilhe conosco um pacote de suporte. Para obter mais informações, consulte "[Enviar dados ao {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)".

## Enviar um tíquete usando o {% data variables.contact.enterprise_portal %}

{% data reusables.support.zendesk-old-tickets %}

Para enviar um tíquete sobre {% data variables.product.product_location_enterprise %}, você deve ser um proprietário, gerente de cobrança ou integrante com direito ao suporte. Para obter mais informações, consulte "[Gerenciar direitos de suporte para a sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

Se você não puder efetuar o login na sua conta em {% data variables.product.prodname_dotcom_the_website %} ou não tiver direito de suporte, você ainda poderá enviar um tíquete fornecendo sua licença ou um arquivo de diagnóstico a partir do seu servidor.

1. Navegue até o {% data variables.contact.contact_support_portal %}.
{% data reusables.support.submit-a-ticket %}

## Enviar um tíquete usando o {% data variables.product.product_name %} {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. Se você quiser incluir diagnósticos no seu ticket de suporte, em "Diagnostics" (Diagnósticos), clique em **Download diagnostic info** (Baixar informações de diagnóstico) e salve o arquivo no local. Esse arquivo será anexado ao seu tíquete de suporte. ![Botão para baixar informações de diagnóstico](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. Para completar o seu ticket e exibir o {% data variables.contact.enterprise_portal %}, em "Abrir pedido de suporte", clique em **Nova solicitação de suporte**. ![Botão para abrir solicitação de suporte](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% ifversion ghae %}

## Pré-requisitos

Para enviar um tíquete para {% data variables.product.prodname_ghe_managed %} em {% data variables.contact.ae_azure_portal %}, você deve fornecer o ID para sua assinatura de {% data variables.product.prodname_ghe_managed %} no Azure ao seu Gerente de Conta do Cliente (CSAM) na Microsoft.

## Enviar um tíquete usando o {% data variables.contact.ae_azure_portal %}

Os clientes comerciais podem enviar um pedido de suporte no {% data variables.contact.contact_ae_portal %}. Clientes do governo devem usar os [Portal do Azure para clientes do governo](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Para obter mais informações, consulte [Criar uma solicitação de suporte ao Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) na documentação da Microsoft.

## Resolver problemas em {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} não pode solucionar problemas de acesso e de assinatura no portal do Azure. Para obter ajuda com o portal do Azure, entre em contato com o CSAM na Microsoft ou revise as seguintes informações.

- Se você não puder efetuar o login no portal Azure, consulte [Problemas de login do Azure](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) na documentação da Microsoft ou [envie uma solicitação diretamente](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- Se você puder efetuar o login no portal do Azure, mas não puder enviar um tíquete para {% data variables.product.prodname_ghe_managed %}, revise os pré-requisitos para enviar um tíquete. Para obter mais informações, consulte "[Pré-requisitos](#prerequisites)".

{% endif %}

## Leia mais

- "[Sobre {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% ifversion ghes %}
- "[Sobre {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."{% endif %}
