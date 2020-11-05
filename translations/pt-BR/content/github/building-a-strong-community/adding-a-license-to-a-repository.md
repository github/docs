---
title: Adicionar uma licença a um repositório
intro: Você pode incluir uma licença de código aberto no seu repositório para que outras pessoas contribuam com mais facilidade.
redirect_from:
  - /articles/adding-a-license-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Se você incluir uma licença detectável no seu repositório, as pessoas que o visitam o verão no topo da página do repositório. Para ler o arquivo de licença inteiro, clique no nome da licença.

![Um header de repositório com uma licença MIT](/assets/images/help/repository/repo-license-indicator.png)

As licenças de código aberto permitem que outras pessoas usem, alterem e distribuam livremente o projeto no seu repositório. Para obter mais informações sobre licenças do repositório, confira "[Licenciar um repositório](/articles/licensing-a-repository)".

### Incluir uma licença de código aberto em seu repositório

<!--Dotcom version uses the license tool-->
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *LICENSE* ou *LICENSE.md* (em maiúsculas).
4. À direita do campo de nome do arquivo, clique em **Choose a license template** (Escolher um modelo de licença). ![Escolher um botão de modelo de licença](/assets/images/help/repository/license-tool.png)
5. No lado esquerdo da página, em "Add a license to your project" (Adicionar uma licença ao seu projeto), examine as licenças disponíveis e selecione uma na lista. ![Lista de licenças disponíveis](/assets/images/help/repository/license-tool-picker.png)
6. Clique em **Review and submit** (Revisar e enviar). ![Botão Review and submit (Revisar e enviar)](/assets/images/help/repository/license-review-tool.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.choose-commit-email %}
10. Clique em **Commit new file** (Fazer commit de novo arquivo). ![Fazer commit de licença no branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *LICENSE* ou *LICENSE.md* (em maiúsculas).
4. Na guia **Edit new file** (Editar novo arquivo), cole o texto completo da licença que deseja usar.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
7. Abaixo dos campos de mensagem do commit, opte por adicionar o commit ao branch atual ou a um novo branch. Se o seu branch atual for `principal`, você deverá optar por criar um novo branch para seu commit e, em seguida, criar um pull request. Para obter mais informações, consulte "[Criar uma pull request](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)". ![Opções para fazer commit no branch](/assets/images/help/repository/choose-commit-branch.png)
8. Clique em **Commit new file** (Fazer commit de novo arquivo). ![Fazer commit de licença no branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

### Leia mais

- "[Configurar diretrizes para os contribuidores do repositório](/articles/setting-guidelines-for-repository-contributors)"
