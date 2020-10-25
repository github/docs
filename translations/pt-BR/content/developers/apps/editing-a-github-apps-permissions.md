---
title: Editar permissões do aplicativo GitHub
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions/
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Observação:** As permissões atualizadas não terão efeito sobre uma instalação até que o proprietário da conta ou organização aprove as alterações. Você pode usar o [webhook do InstallationEvent](/webhooks/event-payloads/#installation) para descobrir quando as pessoas aceitam novas permissões para seu aplicativo. Uma exceção são as [permissões de nível de usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions), que não exigem que o proprietário da conta aprove as alterações de permissão.

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Selecione o aplicativo GitHub cujas permissões você deseja alterar. ![Seleção de aplicativo](/assets/images/github-apps/github_apps_select-app.png)
5. Na barra lateral esquerda, clique em **Permissions & webhooks** (Permissões e webhooks). ![Permissões e webhooks](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Modifique as permissões que você deseja alterar. Para cada tipo de permissão, selecione "Somente leitura", "Ler & gravar" ou "Sem acesso" no menu suspenso. ![Seleção de permissões para o seu aplicativo GitHub](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. Em "Assinar eventos", selecione quaisquer eventos que você deseja que seu aplicativo assine. ![Seleção de permissões para seu aplicativo GitHub assinar eventos](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. Opcionalmente, em "Adicionar uma observação para os usuários", adicione uma observação informando aos usuários o por que você esta mudando as permissões que o seu aplicativo GitHub solicita. ![Caixa de entrada para adicionar uma observação aos usuários explicando por que as permissões do seu aplicativo GitHub foram alteradas](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Clique em **Save changes** (Salvar alterações). ![Botão para salvar alterações de permissões](/assets/images/github-apps/github_apps_save_changes.png)
