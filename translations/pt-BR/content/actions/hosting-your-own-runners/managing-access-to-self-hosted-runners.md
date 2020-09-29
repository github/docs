---
title: Gerenciar o acesso aos executores auto-hospedados
intro: Você pode controlar quais repositórios podem enviar trabalhos para os executores auto-hospedados de uma organização.
versions:
  free-pro-team: '*'
---

Os executores auto-hospedados adicionados no nível da organização podem processar trabalhos para todos os repositórios na organização. Se você precisar limitar o acesso aos seus executores auto-hospedados, você poderá configurar a política para processar apenas trabalhos em repositórios privados ou você pode definir uma lista de repositórios permitidos.

### Controlar quais repositórios têm acesso aos executores de uma organização

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Ao lado de "executores auto-hospedados", clique em **Gerenciar permissões do repositório**. ![Gerenciar permissões do repositório](/assets/images/help/settings/actions-runner-manage-permissions.png)

1. No menu suspenso, escolha uma das opções a seguir:

   * **Todos os repositórios** - Todos os repositórios públicos e privados da organização podem enviar trabalhos para os executores auto-hospedados da organização.
   * **Repositórios privados** - Somente repositórios privados da organização podem enviar trabalhos para os executores auto-hospedados da organização.
   * **Repositórios selecionados** - Use o menu de seleção do repositório para escolher quais repositórios na organização podem enviar trabalhos para os executores auto-hospedados da organização.
