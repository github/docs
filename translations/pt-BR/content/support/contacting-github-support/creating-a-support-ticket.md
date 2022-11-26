---
title: Criando um tíquete de suporte
intro: 'Você pode usar {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} para abrir um tíquete de suporte e falar com {% data variables.contact.github_support %}.'
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
ms.openlocfilehash: 4be0e3be4154354bbc8ea592c9c13af4c0e217b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128178'
---
{% ifversion fpt or ghec or ghes %}

## Sobre os tíquetes de suporte

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} Você pode criar seu tíquete usando o {% data variables.contact.support_portal %} ou, se quiser incluir o diagnóstico com o tíquete de suporte, use o Console de Gerenciamento do GitHub Enterprise Server.
{% endif %}

Após criar o seu tíquete, você poderá vê-lo e as respostas de {% data variables.contact.github_support %} em {% data variables.contact.contact_landing_page_portal %}. Para obter mais informações, confira "[Como ver e atualizar tíquetes de suporte](/support/contacting-github-support/viewing-and-updating-support-tickets)". 

## O que incluir no seu tíquete de suporte

Fornecer {% data variables.contact.github_support %} tudo o que precisa para entender, localizar, e reproduzir um problema permitirá uma resolução mais rápida e menos gargalos entre você e a equipe de suporte. Para garantir que {% data variables.contact.github_support %} posse ajudar você, considere os seguintes pontos quando você abrir o seu tíquete:

- Obter informações que possam ajudar o {% data variables.contact.github_support %} a acompanhar, priorizar, reproduzir ou investigar o problema.
- Incluir URLs completos, nomes de repositório e nomes de usuário sempre que possível.
- Reproduzir o problema, se necessário, e se preparar para compartilhar as etapas.
- Preparar uma descrição completa do problema e dos resultados esperados.
- Copiar todas as mensagens de erro relacionadas ao problema.
- Determinar se há um número de tíquete existente em qualquer outra comunicação em andamento com o {% data variables.contact.github_support %}.
- Inclua registros relevantes e anexe todas as capturas de tela que demonstrem o problema.

{% ifversion ghes %}
## Determinar a pessoa mais indicada

Especialmente para tíquetes com prioridade {% data variables.product.support_ticket_priority_urgent %}, a pessoa que entrou em contato com {% data variables.contact.github_support %} deve:

 - Conhecer os sistemas, as ferramentas, as políticas e as práticas da empresa.
 - Seja um usuário proficiente do {% data variables.product.product_name %}.
 - Ter todas as permissões de acesso a qualquer serviço necessário para resolver o problema.
 - Ter autorização para fazer as alterações recomendadas na rede e em qualquer produto necessário.

{% endif %}

## Criando um tíquete de suporte{% ifversion ghes %} usando o portal de suporte{% endif %}

1. Navegue até o {% data variables.contact.contact_support_portal %}.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Criando um tíquete usando o Console de Gerenciamento de GitHub Enterprise Server

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. Caso deseje incluir o diagnóstico no tíquete de suporte, em "Diagnóstico", clique em **Baixar informações de diagnóstico** e salve o arquivo localmente. Esse arquivo será anexado ao seu tíquete de suporte.
  ![Captura de tela do botão rotulado "Baixar informações de diagnóstico" na página Suporte do Console de Gerenciamento.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Para concluir o tíquete e ver o {% data variables.contact.enterprise_portal %}, em "Abrir Solicitação de Suporte", clique em **Nova solicitação de suporte**.
  ![Captura de tela do botão rotulado "Nova solicitação de suporte" na página Suporte do Console de Gerenciamento.](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

Você pode enviar um tíquete para suporte com {% data variables.product.prodname_ghe_managed %} de {% data variables.contact.ae_azure_portal %}.

## Pré-requisitos

Para enviar um tíquete para {% data variables.product.prodname_ghe_managed %} em {% data variables.contact.ae_azure_portal %}, você deve fornecer o ID para sua assinatura de {% data variables.product.prodname_ghe_managed %} no Azure ao seu Gerente de Conta do Cliente (CSAM) na Microsoft.

## Como enviar um tíquete usando o {% data variables.contact.ae_azure_portal %}

Os clientes comerciais podem enviar um pedido de suporte no {% data variables.contact.contact_ae_portal %}. Os clientes governamentais devem usar o [portal do Azure para clientes do governo](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Para obter mais informações, confira [Criar uma solicitação de suporte do Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) no Microsoft Docs.

## Resolver problemas em {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} não pode solucionar problemas de acesso e de assinatura no portal do Azure. Para obter ajuda com o portal do Azure, entre em contato com o CSAM na Microsoft ou revise as seguintes informações.

- Se você não puder entrar no portal do Azure, confira [Solução de problemas de entrada de assinatura do Azure](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) no Microsoft Docs ou [envie uma solicitação diretamente](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- Se você puder efetuar o login no portal do Azure, mas não puder enviar um tíquete para {% data variables.product.prodname_ghe_managed %}, revise os pré-requisitos para enviar um tíquete. Para obter mais informações, confira "[Pré-requisitos](#prerequisites)".

{% endif %}

## Leitura adicional

- "[Sobre o Suporte do GitHub](/support/learning-about-github-support/about-github-support)"
