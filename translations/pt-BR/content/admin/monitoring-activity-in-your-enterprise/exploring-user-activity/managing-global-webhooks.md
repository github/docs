---
title: Gerenciar webhooks globais
shortTitle: Manage global webhooks
intro: Você pode configurar webhooks globais para notificar servidores web externos quando os eventos ocorrerem na sua empresa.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
ms.openlocfilehash: 751a6dc55b9d1aded22a8225f4bf7d058aa32b77
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095854'
---
## Sobre webhooks globais

Você pode usar webhooks globais para notificar um servidor web externo quando os eventos ocorrerem dentro de sua empresa. Você pode configurar o servidor para receber a carga do webhook e, em seguida, executar um aplicativo ou código que monitora, responde ou aplica regras para gestão de usuários e organizações para a sua empresa. Para obter mais informações, confira "[Webhooks](/developers/webhooks-and-events/webhooks)".

Por exemplo, você pode configurar {% data variables.product.product_location %} para enviar um webhook quando alguém criar, excluir ou modificar um repositório ou organização dentro da sua empresa. Você pode configurar o servidor para executar automaticamente uma tarefa depois de receber o webhook.

![Lista de webhooks globais](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Adicionar um webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Clique em **Adicionar webhook**.
  ![Botão Adicionar webhook na página Webhooks na central de administração](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Digite a URL em que você gostaria de receber cargas.
  ![Campo usado para digitar a URL de conteúdo](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Opcionalmente, use o menu suspenso **Tipo de conteúdo** e clique em um formato de conteúdo.
  ![Menu suspenso com opções de tipo de conteúdo da listagem](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Opcionalmente, no campo **Segredo**, digite uma cadeia de caracteres a ser usada como uma chave `secret`.
  ![Campo usado para digitar uma cadeia de caracteres para usá-la como uma chave secreta](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Opcionalmente, se a URL de conteúdo for HTTPS e você não quiser que o {% data variables.product.prodname_ghe_server %} para verificar os certificados SSL ao fornecer o conteúdo, selecione **Desabilitar a verificação SSL**. Leia as informações sobre a verificação SSL e clique em **Entendi que meus webhooks podem não estar seguros**.
  ![Caixa de seleção usada para desabilitar a verificação SSL](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Aviso:** a verificação SSL ajuda a garantir que o conteúdo do gancho seja entregue com segurança. Não é recomendável desabilitar a verificação SSL.

  {% endwarning %}
10. Decida se você quer que o webhook seja acionado para todos os eventos ou somente para determinados eventos.
  ![Botões com opções de receber conteúdo de todos os eventos ou de eventos específicos](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Para cada evento, selecione **Enviar-me tudo**.
    - Para escolher eventos específicos, selecione **Deixe-me selecionar eventos individuais**.
11. Se você escolher eventos individuais, selecione os eventos que acionarão o webhook.
      {% ifversion ghec %} ![Caixas de seleção para eventos de webhook global individual](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png) {% elsif ghes or ghae %} ![Caixas de seleção para eventos de webhook global individual](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png) {% endif %}
12. Confirme se a caixa de seleção **Ativa** está marcada.
  ![Caixa de seleção Ativo marcada](/assets/images/help/business-accounts/webhook-active.png)
13. Clique em **Adicionar webhook**.

## Editar um webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Ao lado do webhook que deseja editar, clique em **Editar**.
  ![Botão Editar ao lado de um webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Atualize as configurações do webhook.
7. Clique em **Atualizar webhook**.

## Excluir um webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Ao lado do webhook que deseja excluir, clique em **Excluir**.
  ![Botão Excluir ao lado de um webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Leia as informações sobre como excluir um webhook e clique em **Sim, excluir webhook**.
  ![Caixa pop-up com informações de aviso e botão usado para confirmar a exclusão do webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Exibir respostas e entregas recentes

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Na lista de webhooks, clique no webhook em que você gostaria de ver entregas.
  ![Lista de webhooks com links para visualizar cada webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Em "Recent deliveries" (Entregas recentes), clique em uma entrega para ver detalhes.
  ![Lista das entregas recentes do webhook com links para visualizar os detalhes](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
