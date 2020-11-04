---
title: Gerenciar webhooks globais
intro: 'Site administrators can view, add, edit, and delete global webhooks to track events for the enterprise.'
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre webhooks globais

You can use global webhooks to automatically monitor, respond to, or enforce rules for user and organization management for your enterprise. Por exemplo, você pode configurar os webhooks para serem executados sempre que:
- Uma conta de usuário for criada ou excluída;
- Uma organização foi criada ou excluída
- Um colaborador for adicionado ou removido de um repositório;
- Um repositório foi bifurcado

![Lista de webhooks globais](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

### Adicionar um webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Clique em **Add webhook** (Adicionar webhook). ![Botão Add webhook (Adicionar webhook) na página Webhooks na central de administração](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Digite a URL em que você gostaria de receber cargas. ![Campo para digitar URL de carga](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Você também pode usar o menu suspenso **Content type** (Tipo de conteúdo) e clicar em um formato de carga. ![Menu suspenso com opções de tipo de conteúdo](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Como alternativa, no campo **Secret** (Segredo), digite uma string para usar como chave `secret`. ![Campo para digitar uma string e usar como chave secreta](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Se você não quiser que o {% data variables.product.prodname_ghe_server %} verifique os certificados SSL na entrega das cargas, clique em **Disable SSL verification** (Desabilitar verificação SSL). Leia as informações sobre a verificação SSL e clique em **I understand my webhooks may not be secure** (Eu entendo que meus webhooks podem não ser seguros). ![Botão para desabilitar verificação SSL](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Aviso:** a verificação SSL ajuda a garantir a entrega segura das cargas do hook. Não é recomendável desabilitar a verificação SSL.

  {% endwarning %}
10. Decida se você quer que o webhook seja acionado para todos os eventos ou somente para determinados eventos:![Botões com opções de receber cargas para todos os eventos ou para eventos específicos](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Para todos os eventos, selecione **Send me everything** (Enviar tudo).
    - Para eventos específicos, selecione **Let me select individual events** (Selecionar eventos individualmente).
11. Se optar por selecionar eventos individuais, defina se você deseja acionar o webhook para atividade de usuário ou organização.![Caixas de seleção para eventos de usuário e organização](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
12. Confirme se a caixa de seleção **Active** (Ativo) está marcada (ela fica selecionada por padrão). ![Caixa de seleção Active (Ativo) marcada](/assets/images/enterprise/site-admin-settings/add-global-webhook-active-checkbox.png)
13. Clique em **Add webhook** (Adicionar webhook).

### Editar um webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Ao lado do webhook que você pretende editar, clique em **Edit** (Editar). ![Botão Edit (Editar) ao lado de um webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Atualize as configurações do webhook.
7. Clique em **Update webhook** (Atualizar webhook).

### Excluir um webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Ao lado do webhook que você pretende excluir, clique em **Delete** (Excluir). ![Botão Delete (Excluir) ao lado de um webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Leia as informações sobre como excluir um webhook e clique em **Yes, delete webhook** (Sim, excluir webhook). ![Caixa pop-up com informações de aviso e botão para confirmar a exclusão do webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

### Exibir respostas e entregas recentes

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Na lista de webhooks, clique no webhook em que você gostaria de ver entregas. ![Lista de webhooks com links para exibir cada webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Em "Recent deliveries" (Entregas recentes), clique em uma entrega para ver detalhes. ![Lista das entregas recentes do webhook com links para exibir detalhes](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
