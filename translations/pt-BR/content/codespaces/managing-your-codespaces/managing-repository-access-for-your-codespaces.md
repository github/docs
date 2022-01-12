---
title: Gerenciando acesso ao repositório para seus codespaces
shortTitle: Acesso ao repositório
intro: 'Você pode gerenciar os repositórios que {% data variables.product.prodname_codespaces %} pode acessar.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
---

 

Ao habilitar o acesso e a segurança de um repositório pertencente à sua conta de usuário, todos os códigos que forem criados para esse repositório terão permissões de leitura em todos os outros repositórios que você possui. Se você deseja restringir os repositórios que um código pode acessar, você pode limitá-lo tanto para o repositório no qual o código foi aberto ou para repositórios específicos. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Em "Acesso e segurança", selecione a configuração que deseja para sua conta de usuário. ![Botões de opção para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Se você escolher "repositórios selecionados", selecione o menu suspenso e clique em um repositório para permitir que os codespaces do repositório tenham acesso a outros repositórios dos quais você é proprietário. Repita para todos os repositórios cujos codespaces você deseja que acessem outros repositórios dos quais você é proprietário. ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Leia mais

- "[Gerenciando o acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
