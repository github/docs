---
title: Managing access and security for your codespaces
intro: 'You can manage the repositories that {% data variables.product.prodname_codespaces %} can access.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

When you enable access and security for a repository owned by your user account, any codespaces that are created for that repository will have read and write permissions to all other repositories you own. If you want to restrict the repositories a codespace can access, you can limit to it to either the repository the codespace was opened for or specific repositories. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Em "Acesso e segurança", selecione a configuração que deseja para sua conta de usuário. ![Botões de opção para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Se você escolher "repositórios selecionados", selecione o menu suspenso e clique em um repositório para permitir que os codespaces do repositório tenham acesso a outros repositórios dos quais você é proprietário. Repita para todos os repositórios cujos codespaces você deseja que acessem outros repositórios dos quais você é proprietário. ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
