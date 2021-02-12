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
  github-ae: '*'
---

### Sobre alterações de visibilidade do repositório

Os proprietários da organização podem restringir a capacidade de alterar a visibilidade do repositório apenas para os proprietários da organização. Para obter mais informações, consulte "[Restringir as alterações de visibilidade do repositório na sua organização](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)".

Recomendamos revisar as seguintes advertências antes de alterar a visibilidade de um repositório.

#### Tornar um repositório privado
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
* O {% data variables.product.product_name %} destacará bifurcações públicas do repositório público e as colocará em uma nova rede. As bifurcações públicas não se convertem em privadas.{% endif %}
* Se você alterar a visibilidade de um repositório interno para privado, {% data variables.product.prodname_dotcom %} removerá bifurcações que pertencem a qualquer usuário sem acesso ao repositório privado recente. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}A visibilidade de qualquer bifurcação também será alterada para privada.{% elsif currentVersion == "github-ae@latest" %}Se o repositório interno tiver alguma bifurcação, significa que a visibilidade das bifurcações já é privada.{% endif %} Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou a visibilidade é alterada?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"{% if currentVersion == "free-pro-team@latest" %}
* Se você estiver usando {% data variables.product.prodname_free_user %} para contas de usuário ou organizações, alguns recursos não estarão disponíveis no repositório depois de alterar a visibilidade para privada. {% data reusables.gated-features.more-info %}{% endif %}
* Qualquer site de {% data variables.product.prodname_pages %} publicado terá a publicação cancelada automaticamente.{% if currentVersion == "free-pro-team@latest" %} Se você adicionou um domínio personalizado ao site de {% data variables.product.prodname_pages %} você deve remover ou atualizar seus registros de DNS antes de tornar o repositório privado para evitar o risco de tomada de um domínio. Para obter mais informações, consulte "[Gerenciar um domínio personalizado para o seu site de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_dotcom %} will no longer include the repository in the {% data variables.product.prodname_archive %}. Para obter mais informações, consulte "[Sobre sobre arquivamento de conteúdo e dados em {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".{% endif %}{% if enterpriseServerVersions contains currentVersion %}
* O acesso de leitura anônimo do Git não está mais disponível. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### Tornar um repositório interno

{% note %}

**Observação:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

* Todas as bifurcações do repositório permanecerão na rede do repositório e a {% data variables.product.product_name %} manterá a relação entre o repositório raiz e a bifurcação. Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou muda de visibilidade?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### Tornar um repositório público

* O {% data variables.product.product_name %} irá destacar bifurcações privadas e transformá-las em um repositório privado independente. Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou muda a visibilidade?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% if currentVersion == "free-pro-team@latest" %}
* Se você estiver convertendo seu repositório privado em um repositório público, como parte de um movimento para a criação de um projeto de código aberto, consulte os [Guias de Código Aberto](http://opensource.guide) para obter dicas e diretrizes úteis. Você também pode fazer um curso grátis sobre gerenciamento de projeto de código aberto com [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Quando seu repositório é público, você também pode visualizar o perfil da comunidade do repositório para ver se os projetos atendem às práticas recomendadas de suporte aos contribuidores. Para obter mais informações, consulte "[Exibir o perfil da comunidade](/articles/viewing-your-community-profile)."{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

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
