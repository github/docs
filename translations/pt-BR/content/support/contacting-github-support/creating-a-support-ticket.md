---
title: Creating a support ticket
intro: 'You can use the {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} to create a support ticket and speak to {% data variables.contact.github_support %}.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
---

{% ifversion fpt or ghec or ghes %}

## About support tickets

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %}
{% data reusables.support.free-and-paid-support %}
{% endif %}

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

{% ifversion ghes %}
You can create your ticket using the {% data variables.contact.support_portal %} or, if you would like to include diagnostics with your support ticket, you can use the GitHub Enterprise Server Management Console.
{% endif %}

After you create your ticket, you can view your ticket and the responses from {% data variables.contact.github_support %} on the {% data variables.contact.contact_landing_page_portal %}. For more information, see "[Viewing and updating support tickets](/support/contacting-github-support/viewing-and-updating-support-tickets)."

## What to include in your support ticket

Providing {% data variables.contact.github_support %} with everything they need to understand, locate, and reproduce an issue will allow for a faster resolution and less back-and-forth between yourself and the support team. To ensure {% data variables.contact.github_support %} can assist you, consider the following points when you write your ticket:

- Obter informações que possam ajudar o {% data variables.contact.github_support %} a acompanhar, priorizar, reproduzir ou investigar o problema.
- Include full URLs, repository names, and usernames wherever possible.
- Reproduzir o problema, se necessário, e se preparar para compartilhar as etapas.
- Preparar uma descrição completa do problema e dos resultados esperados.
- Copiar todas as mensagens de erro relacionadas ao problema.
- Determinar se há um número de tíquete existente em qualquer outra comunicação em andamento com o {% data variables.contact.github_support %}.
- Include relevant logs and attach any screenshots that demonstrate the issue.

{% ifversion ghes %}
## Determinar a pessoa mais indicada

Especialmente para tíquetes com prioridade {% data variables.product.support_ticket_priority_urgent %}, a pessoa que entrou em contato com {% data variables.contact.github_support %} deve:

 - Conhecer os sistemas, as ferramentas, as políticas e as práticas da empresa.
 - Ser usuário proficiente do {% data variables.product.product_name %}.
 - Ter todas as permissões de acesso a qualquer serviço necessário para resolver o problema.
 - Ter autorização para fazer as alterações recomendadas na rede e em qualquer produto necessário.

{% endif %}

## Creating a support ticket{% ifversion ghes %} using the support portal{% endif %}

1. Navegue até o {% data variables.contact.contact_support_portal %}.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Creating a ticket using the GitHub Enterprise Server Management Console

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
1. Se você quiser incluir diagnósticos no seu ticket de suporte, em "Diagnostics" (Diagnósticos), clique em **Download diagnostic info** (Baixar informações de diagnóstico) e salve o arquivo no local. Esse arquivo será anexado ao seu tíquete de suporte. ![Screenshot of button labelled "Download diagnostics info" on Management Console Support page.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Para completar o seu ticket e exibir o {% data variables.contact.enterprise_portal %}, em "Abrir pedido de suporte", clique em **Nova solicitação de suporte**. ![Screenshot of button labelled "New support request" on Management Console Support page.](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

Você pode enviar um tíquete para suporte com {% data variables.product.prodname_ghe_managed %} de {% data variables.contact.ae_azure_portal %}.

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

- "[About GitHub Support](/support/learning-about-github-support/about-github-support)"
