---
title: Gerenciar os codespaces de acesso e segurança da sua organização
shortTitle: Gerenciar o acesso e a segurança da sua organização
intro: 'Você pode gerenciar os repositórios na sua organização que {% data variables.product.prodname_codespaces %} pode acessar.'
permissions: 'To manage access and security for Codespaces for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
---

{% data reusables.codespaces.release-stage %}

Os proprietários da organização podem gerenciar quais repositórios um codespace pode acessar.

By default, a codespace can only access the repository where it was created. Ao habilitar o acesso e a segurança de um repositório pertencente à sua organização, todos os codespaces que forem criados para esse repositório também terão permissões de leitura e gravação para todos os outros repositórios que a organização possui e o criador de codespace terá permissões para acessar. Se você deseja restringir os repositórios que um codespace pode acessar, você pode limitá-lo ao repositório em que o codespace foi criado ou a repositórios específicos. Você só deve habilitar o acesso e a segurança para repositórios nos quais confia.

Para gerenciar quais usuários na sua organização podem usar {% data variables.product.prodname_codespaces %}, consulte "[Gerenciar permissões de usuário para a sua organização](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "Acesso e segurança", selecione a configuração que você deseja para a sua organização. ![Botões de opção para gerenciar repositórios confiáveis](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Se você escolheu "repositórios selecionados", selecione o menu suspenso e, em seguida, clique em um repositório para permitir que os codespaces do repositório acessem outros repositórios pertencentes à sua organização. Repita isso para todos os repositórios cujos códigos você deseja que acessem outros repositórios. ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
