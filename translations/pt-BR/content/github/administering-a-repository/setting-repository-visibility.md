---
title: Definir a visibilidade de um repositório
intro: Você pode escolher quem pode visualizar seu repositório.
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre alterações de visibilidade do repositório

Os proprietários da organização podem restringir a capacidade de alterar a visibilidade do repositório apenas para os proprietários da organização. Para obter mais informações, consulte "[Restringir as alterações de visibilidade do repositório na sua organização](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)".

Recomendamos revisar as seguintes advertências antes de alterar a visibilidade de um repositório.

#### Tornar um repositório privado

   * O {% data variables.product.prodname_dotcom %} destacará bifurcações públicas do repositório público e as colocará em uma nova rede. As bifurcações públicas não se tornam privadas. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 9" %}Se você alterar a visibilidade de um repositório interno para privado, {% data variables.product.prodname_dotcom %} removerá as bifurcações que pertencem a qualquer usuário sem acesso ao repositório privado recente.{% endif %} Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou altera a visibilidade?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-public-repository-to-a-private-repository)"
   {% if currentVersion == "free-pro-team@latest" %}* Se você estiver usando {% data variables.product.prodname_free_user %} para contas de usuários ou organizações, alguns recursos não estarão disponíveis no repositório depois que você alterar a visibilidade para privada. {% data reusables.gated-features.more-info %}
   * Qualquer site publicado do {% data variables.product.prodname_pages %} terá sua publicação cancelada automaticamente. Se você adicionou um domínio personalizado ao site do {% data variables.product.prodname_pages %}, deverá remover ou atualizar os registros de DNS antes de tornar o repositório privado para evitar o risco de uma aquisição de domínio. Para obter mais informações, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".
   * O {% data variables.product.prodname_dotcom %} não incluirá mais o repositório no {% data variables.product.prodname_archive %}. Para obter mais informações, consulte "[Sobre como arquivar conteúdo e dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".{% endif %}
   {% if enterpriseServerVersions contains currentVersion %}* Acesso de leitura anônimo do Git não está mais disponível. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".{% endif %}

#### Tornar um repositório público

   * O {% data variables.product.prodname_dotcom %} irá destacar bifurcações privadas e transformá-las em um repositório privado independente. Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou muda de visibilidade?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"
   * Se você estiver convertendo seu repositório privado em um repositório público, como parte de um movimento para a criação de um projeto de código aberto, consulte os [Guias de Código Aberto](http://opensource.guide) para obter dicas e diretrizes úteis.{% if currentVersion == "free-pro-team@latest" %} Você também pode fazer um curso grátis sobre como gerenciar um projeto de código aberto com [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Quando seu repositório é público, você também pode visualizar o perfil da comunidade do repositório para ver se os projetos atendem às práticas recomendadas de suporte aos contribuidores. Para obter mais informações, consulte "[Exibir o perfil da comunidade](/articles/viewing-your-community-profile)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### Alterar a visibilidade de um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Danger Zone" (Zona de Perigo), à direita de "Alterar a visibilidade do repositório", clique **Alterar visibilidade**. ![Botão de alteração de visibilidade](/assets/images/help/repository/repo-change-vis.png)
4. Selecione uma visibilidade. ![Caixa de diálogo de opções para visibilidade do repositório](/assets/images/help/repository/repo-change-select.png)
5. Para verificar se você está alterando a visibilidade do repositório correto, digite o nome do repositório que deseja alterar a visibilidade.
6. Clique em **Eu entendi, altere a visibilidade do repositório**. ![Confirmar alteração do botão de visibilidade do repositório](/assets/images/help/repository/repo-change-confirm.png)

{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

### Tornar um repositório privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Zona de perigo", perto de "Tornar este repositório privado", clique em **Tornar privado**. ![Botão Make private (Tornar privado)](/assets/images/help/repository/repo-makeprivate.png)
4. Leia os avisos sobre tornar um repositório privado. ![Pop-up de avisos](/assets/images/help/repository/repo-privateconfirm.png)
5. Insira o nome do repositório que deseja tornar privado, como `accountname/reponame`.
6. Clique em **Eu compreendo, tornar este repositório privado**.

### Tornar um repositório público

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Zona de perigo, perto de "Tornar este repositório público", clique em **Tornar público**. ![Botão Make public (Tornar público)](/assets/images/help/repository/repo-makepublic.png)
4. Leia os avisos sobre tornar um repositório público. ![Pop-up com informações sobre converter repositório privado em público](/assets/images/help/repository/repo-publicconfirm.png)
5. Insira o nome do repositório que deseja tornar público, como `accountname/reponame`.
6. Clique em **Eu compreendo, tornar este repositório público**.

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### Tornar um repositório interno

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Zona de perigo", perto de "Tornar este repositório interno", clique em **Tornar interno**. ![Botão Make internal (Tornar interno)](/assets/images/help/repository/repo-makeinternal.png)
4. Leia os avisos sobre tornar um repositório interno. ![Pop-up de avisos](/assets/images/help/repository/repo-internalconfirm.png)
5. Insira o nome do repositório que deseja tornar interno, como `accountname/reponame`.
6. Clique em **Eu compreendo, tornar este repositório interno**.
{% endif %}

{% endif %}

### Leia mais
- "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
