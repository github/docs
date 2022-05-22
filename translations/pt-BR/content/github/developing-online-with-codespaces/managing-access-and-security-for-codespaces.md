---
title: Gerenciar o acesso e a segurança de codespaces
intro: Você pode gerenciar os repositórios que os codespaces podem acessar.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - espaços de código
---

{% note %}

**Observação:** O acesso e a segurança para {% data variables.product.prodname_codespaces %} estão atualmente em fase beta e sujeitos a alterações.

{% endnote %}

### Gerenciar a segurança e o acesso da sua conta de usuário

Ao habilitar o acesso e a segurança de um repositório pertencente à sua conta de usuário, quaisquer codespaces que você criar para esse repositório terão permissões de leitura e gravação em todos os outros repositórios que você possuir. Você pode habilitar o acesso e a segurança em nenhum dos seus repositórios, em todos os seus repositórios ou em repositórios específicos. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Em "Acesso e segurança", selecione a configuração que deseja para sua conta de usuário. ![Botões de opção para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Se você escolher "repositórios selecionados", selecione o menu suspenso e clique em um repositório para permitir que os codespaces do repositório tenham acesso a outros repositórios dos quais você é proprietário. Repita para todos os repositórios cujos codespaces você deseja que acessem outros repositórios dos quais você é proprietário. ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

### Gerenciar a segurança e o acesso para a sua organização

Os proprietários da organização podem gerenciar a segurança e o acesso para {% data variables.product.prodname_codespaces %}.

Ao habilitar o acesso e a segurança de um repositório pertencente à sua organização, todos os codespaces criados para esse repositório terão permissões de leitura e gravação em todos os outros repositórios pertencentes à organização. Você pode habilitar o acesso e a segurança em nenhum dos repositórios da sua organização, em todos os seus repositórios da sua organização ou em repositórios específicos. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.click-codespaces %}
5. Para aprovar os [termos de serviço do programa de pré-lançamento](/github/site-policy/github-pre-release-program) em nome da sua organização e habilitar {% data variables.product.prodname_codespaces %}, em "Permissões do usuário", selecione **Usuários selecionados** e, em seguida, digite o nome de usuário para cada pessoa conceder acesso. Repita para todos os usuários que você deseja que tenham acesso aos codespaces da sua organização.  
   ![Botão de opção para "Usuários selecionados"](/assets/images/help/organizations/select-selected-users-radio-button.png)
1. Em "Acesso e segurança", selecione a configuração que você deseja para a sua organização. ![Botões de opção para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Se você escolheu "repositórios selecionados", selecione o menu suspenso e, em seguida, clique em um repositório para permitir que os codespaces do repositório acessem outros repositórios pertencentes à sua organização. Repita isso para todos os repositórios cujos códigos você deseja que acessem outros repositórios. ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
