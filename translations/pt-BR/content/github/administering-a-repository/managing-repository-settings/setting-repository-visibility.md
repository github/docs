---
title: Definir a visibilidade de um repositório
intro: Você pode escolher quem pode visualizar seu repositório.
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Sobre alterações de visibilidade do repositório

Os proprietários da organização podem restringir a capacidade de alterar a visibilidade do repositório apenas para os proprietários da organização. Para obter mais informações, consulte "[Restringir as alterações de visibilidade do repositório na sua organização](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

Recomendamos revisar as seguintes advertências antes de alterar a visibilidade de um repositório.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

{% warning %}

**Aviso:** As alterações na visibilidade de um repositório grande ou rede de repositórios podem afetar a integridade dos dados. As alterações na visibilidade também podem ter efeitos não intencionais nas bifurcações. {% data variables.product.company_short %} recomenda o seguinte antes de alterar a visibilidade da rede de um repositório.

- Aguarde um período de atividade reduzida em {% data variables.product.product_location %}.

- Entre em contato com o administrador do seu {% if enterpriseServerVersions contains currentVersion %}site {% elsif currentVersion == "github-ae@latest" %}proprietário da empresa{% endif %} antes de prosseguir. O {% if enterpriseServerVersions contains currentVersion %}administrador do seu site{% elsif currentVersion == "github-ae@latest" %}proprietário da empresa{% endif %} pode entrar em contato com {% data variables.contact.contact_ent_support %} para obter mais orientação.

{% endwarning %}

{% endif %}

#### Tornar um repositório privado
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
* O {% data variables.product.product_name %} destacará bifurcações públicas do repositório público e as colocará em uma nova rede. As bifurcações públicas não se convertem em privadas.{% endif %}
* Se você alterar a visibilidade de um repositório interno para privado, {% data variables.product.prodname_dotcom %} removerá bifurcações que pertencem a qualquer usuário sem acesso ao repositório privado recente. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}A visibilidade de qualquer bifurcação também será alterada para privada.{% elsif currentVersion == "github-ae@latest" %}Se o repositório interno tiver alguma bifurcação, significa que a visibilidade das bifurcações já é privada.{% endif %} Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou a visibilidade é alterada?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"{% if currentVersion == "free-pro-team@latest" %}
* Se você estiver usando {% data variables.product.prodname_free_user %} para contas de usuário ou organizações, alguns recursos não estarão disponíveis no repositório depois de alterar a visibilidade para privada. {% data reusables.gated-features.more-info %}{% endif %}
* Qualquer site de {% data variables.product.prodname_pages %} publicado terá a publicação cancelada automaticamente.{% if currentVersion == "free-pro-team@latest" %} Se você adicionou um domínio personalizado ao site de {% data variables.product.prodname_pages %} você deve remover ou atualizar seus registros de DNS antes de tornar o repositório privado para evitar o risco de tomada de um domínio. Para obter mais informações, consulte "[Gerenciar um domínio personalizado para o seu site de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_dotcom %} não incluirá mais o repositório no {% data variables.product.prodname_archive %}. Para obter mais informações, consulte "[Sobre arquivar conteúdo e dados em {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* As funcionalidades de {% data variables.product.prodname_GH_advanced_security %} como, por exemplo, {% data variables.product.prodname_code_scanning %} irá parar de funcionar a menos que o repositório pertença a uma organização que faz parte de uma empresa com uma licença para {% data variables.product.prodname_advanced_security %} e estações sobressalentes suficientes. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% if enterpriseServerVersions contains currentVersion %}
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
* Se você estiver convertendo seu repositório privado em um repositório público, como parte de um movimento para a criação de um projeto de código aberto, consulte os [Guias de Código Aberto](http://opensource.guide) para obter dicas e diretrizes úteis. Você também pode fazer um curso grátis sobre gerenciamento de projeto de código aberto com [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Quando seu repositório é público, você também pode visualizar o perfil da comunidade do repositório para ver se os projetos atendem às práticas recomendadas de suporte aos contribuidores. Para obter mais informações, consulte "[Exibir o perfil da comunidade](/articles/viewing-your-community-profile)."
* O repositório automaticamente receberá acesso aos recursos de {% data variables.product.prodname_GH_advanced_security %}.

Para obter informações sobre como melhorar a segurança do repositório, consulte "[Protegendo seu repositório](/code-security/getting-started/securing-your-repository)".{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### Alterar a visibilidade de um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Danger Zone" (Zona de Perigo), à direita de "Alterar a visibilidade do repositório", clique **Alterar visibilidade**. ![Botão de alteração de visibilidade](/assets/images/help/repository/repo-change-vis.png)
4. Selecione uma visibilidade.
{% if currentVersion == "free-pro-team@latest" %}
   ![Caixa de diálogo de opções para visibilidade do repositório](/assets/images/help/repository/repo-change-select.png){% else %}
![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. Para verificar se você está alterando a visibilidade do repositório correto, digite o nome do repositório que deseja alterar a visibilidade.
6. Clique em **Eu entendi, altere a visibilidade do repositório**.
{% if currentVersion == "free-pro-team@latest" %}
   ![Confirmar alteração do botão de visibilidade do repositório](/assets/images/help/repository/repo-change-confirm.png){% else %}
![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}
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
