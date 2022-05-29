---
title: Gerenciar webhooks globais
shortTitle: Gerenciar webhooks globais
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
---

## Sobre webhooks globais

Você pode usar webhooks globais para notificar um servidor web externo quando os eventos ocorrerem dentro de sua empresa. Você pode configurar o servidor para receber a carga do webhook e, em seguida, executar um aplicativo ou código que monitora, responde ou aplica regras para gestão de usuários e organizações para a sua empresa. Para obter mais informações, consulte "[Webhooks](/developers/webhooks-and-events/webhooks).

Por exemplo, você pode configurar {% data variables.product.product_location %} para enviar um webhook quando alguém criar, excluir ou modificar um repositório ou organização dentro da sua empresa. Você pode configurar o servidor para executar automaticamente uma tarefa depois de receber o webhook.

![Lista de webhooks globais](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Adicionar um webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Clique em **Add webhook** (Adicionar webhook). ![Botão Add webhook (Adicionar webhook) na página Webhooks na central de administração](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Digite a URL em que você gostaria de receber cargas. ![Campo para digitar URL de carga](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Você também pode usar o menu suspenso **Content type** (Tipo de conteúdo) e clicar em um formato de carga. ![Menu suspenso com opções de tipo de conteúdo](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Como alternativa, no campo **Secret** (Segredo), digite uma string para usar como chave `secret`. ![Campo para digitar uma string e usar como chave secreta](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Opcionalmente, se a URL da sua carga HTTPS e você não quiser que {% data variables.product.prodname_ghe_server %} verifique os certificados SSL ao entregar as cargas, selecione **Desabilitar verificação SSL**. Leia as informações sobre a verificação SSL e clique em **I understand my webhooks may not be secure** (Eu entendo que meus webhooks podem não ser seguros). ![Caixa de seleção para desabilitar a verificação SSL](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Aviso:** a verificação SSL ajuda a garantir a entrega segura das cargas do hook. Não é recomendável desabilitar a verificação SSL.

  {% endwarning %}
10. Decida se você quer que o webhook seja acionado para todos os eventos ou somente para determinados eventos. ![Botões com opções de receber cargas para todos os eventos ou para eventos específicos](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Para todos os eventos, selecione **Send me everything** (Enviar tudo).
    - Para eventos específicos, selecione **Let me select individual events** (Selecionar eventos individualmente).
11. Se você escolher eventos individuais, selecione os eventos que acionarão o webhook.
      {% ifversion ghec %}
      ![Caixas de seleção para eventos de webhook globais individuais](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
      {% elsif ghes or ghae %}
      ![Caixas de seleção para eventos de webhook globais individuais](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png)
      {% endif %}
12. Confirme que a caixa de seleção **ativa** esteja marcada. ![Caixa de seleção Active (Ativo) marcada](/assets/images/help/business-accounts/webhook-active.png)
13. Clique em **Add webhook** (Adicionar webhook).

## Editar um webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Ao lado do webhook que você pretende editar, clique em **Edit** (Editar). ![Botão Edit (Editar) ao lado de um webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Atualize as configurações do webhook.
7. Clique em **Update webhook** (Atualizar webhook).

## Excluir um webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Ao lado do webhook que você pretende excluir, clique em **Delete** (Excluir). ![Botão Delete (Excluir) ao lado de um webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Leia as informações sobre como excluir um webhook e clique em **Yes, delete webhook** (Sim, excluir webhook). ![Caixa pop-up com informações de aviso e botão para confirmar a exclusão do webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Exibir respostas e entregas recentes

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Na lista de webhooks, clique no webhook em que você gostaria de ver entregas. ![Lista de webhooks com links para exibir cada webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Em "Recent deliveries" (Entregas recentes), clique em uma entrega para ver detalhes. ![Lista das entregas recentes do webhook com links para exibir detalhes](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
