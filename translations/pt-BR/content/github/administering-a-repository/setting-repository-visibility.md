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
* O {% data variables.product.product_name %} destacará bifurcações públicas do repositório público e as colocará em uma nova rede. Public forks are not made private.{% endif %}
* If you change a repository's visibility from internal to private, {% data variables.product.prodname_dotcom %} will remove forks that belong to any user without access to the newly private repository. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}The visibility of any forks will also change to private.{% elsif currentVersion == "github-ae@latest" %}If the internal repository has any forks, the visibility of the forks is already private.{% endif %} For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"{% if currentVersion == "free-pro-team@latest" %}
* If you're using {% data variables.product.prodname_free_user %} for user accounts or organizations, some features won't be available in the repository after you change the visibility to private. {% data reusables.gated-features.more-info %}{% endif %}
* Any published {% data variables.product.prodname_pages %} site will be automatically unpublished.{% if currentVersion == "free-pro-team@latest" %} If you added a custom domain to the {% data variables.product.prodname_pages %} site, you should remove or update your DNS records before making the repository private, to avoid the risk of a domain takeover. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* O {% data variables.product.prodname_dotcom %} não incluirá mais o repositório no {% data variables.product.prodname_archive %}. For more information, see "[About archiving content and data on {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."{% endif %}{% if enterpriseServerVersions contains currentVersion %}
* Anonymous Git read access is no longer available. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### Tornar um repositório interno

{% note %}

**Observação:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

* Any forks of the repository will remain in the repository network, and {% data variables.product.product_name %} maintains the relationship between the root repository and the fork. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### Tornar um repositório público

* {% data variables.product.product_name %} will detach private forks and turn them into a standalone private repository. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% if currentVersion == "free-pro-team@latest" %}
* If you're converting your private repository to a public repository as part of a move toward creating an open source project, see the [Open Source Guides](http://opensource.guide) for helpful tips and guidelines. You can also take a free course on managing an open source project with [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Quando seu repositório é público, você também pode visualizar o perfil da comunidade do repositório para ver se os projetos atendem às práticas recomendadas de suporte aos contribuidores. Para obter mais informações, consulte "[Exibir o perfil da comunidade](/articles/viewing-your-community-profile)."{% endif %}

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
