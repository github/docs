---
title: Definir a visibilidade de um repositório
intro: Você pode escolher quem pode visualizar seu repositório.
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Visibilidade do repositório
---

## Sobre alterações de visibilidade do repositório

Os proprietários da organização podem restringir a capacidade de alterar a visibilidade do repositório apenas para os proprietários da organização. Para obter mais informações, consulte "[Restringir as alterações de visibilidade do repositório na sua organização](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% ifversion ghec %}

Members of an {% data variables.product.prodname_emu_enterprise %} can only set the visibility of repositories owned by their personal account to private, and repositories in their enterprise's organizations can only be private or internal. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% endif %}

Recomendamos revisar as seguintes advertências antes de alterar a visibilidade de um repositório.

{% ifversion ghes or ghae %}

{% warning %}

**Aviso:** As alterações na visibilidade de um repositório grande ou rede de repositórios podem afetar a integridade dos dados. As alterações na visibilidade também podem ter efeitos não intencionais nas bifurcações. {% data variables.product.company_short %} recomenda o seguinte antes de alterar a visibilidade da rede de um repositório.

- Aguarde um período de atividade reduzida em {% data variables.product.product_location %}.

- Entre em contato com o administrador do seu {% ifversion ghes %}site {% elsif ghae %}proprietário da empresa{% endif %} antes de prosseguir. O {% ifversion ghes %}administrador do seu site{% elsif ghae %}proprietário da empresa{% endif %} pode entrar em contato com {% data variables.contact.contact_ent_support %} para obter mais orientação.

{% endwarning %}

{% endif %}

### Tornar um repositório privado
{% ifversion fpt or ghes or ghec %}
* O {% data variables.product.product_name %} destacará bifurcações públicas do repositório público e as colocará em uma nova rede. As bifurcações públicas não se convertem em privadas.{% endif %}
{%- ifversion ghes or ghec or ghae %}
* Se você alterar a visibilidade de um repositório interno para privado, {% data variables.product.prodname_dotcom %} removerá bifurcações que pertencem a qualquer usuário sem acesso ao repositório privado recente. {% ifversion fpt or ghes or ghec %}A visibilidade de qualquer bifurcação também será alterada para privada.{% elsif ghae %}Se o repositório interno tiver alguma bifurcação, significa que a visibilidade das bifurcações já é privada.{% endif %} Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou a visibilidade é alterada?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"
{%- endif %}

{%- ifversion fpt %}
* If you're using {% data variables.product.prodname_free_user %} for personal accounts or organizations, some features won't be available in the repository after you change the visibility to private. Qualquer site publicado do {% data variables.product.prodname_pages %} terá sua publicação cancelada automaticamente. Se você adicionou um domínio personalizado ao site do {% data variables.product.prodname_pages %}, deverá remover ou atualizar os registros de DNS antes de tornar o repositório privado para evitar o risco de uma aquisição de domínio. Para obter mais informações, consulte "[Produtos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) e "[Gerenciando um domínio personalizado para o seu site de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %} não incluirá mais o repositório no {% data variables.product.prodname_archive %}. Para obter mais informações, consulte "[Sobre como arquivar conteúdo e dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".
* As funcionalidades de {% data variables.product.prodname_GH_advanced_security %}, como {% data variables.product.prodname_code_scanning %}, irão parar de funcionar{% ifversion ghec %} a menos que o repositório pertença a uma organização que faz parte de uma empresa com uma licença para {% data variables.product.prodname_advanced_security %} e estações livres suficientes.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
{%- endif %}

{%- ifversion ghes %}
* O acesso de leitura anônimo do Git não está mais disponível. Para obter mais informações, consulte "[Habilitar acesso de leitura anônimo do Git para um repositório](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### Tornar um repositório interno

* Todas as bifurcações do repositório permanecerão na rede do repositório e a {% data variables.product.product_name %} manterá a relação entre o repositório raiz e a bifurcação. Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou muda de visibilidade?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Tornar um repositório público

* O {% data variables.product.product_name %} irá destacar bifurcações privadas e transformá-las em um repositório privado independente. Para obter mais informações, consulte "[O que acontece com as bifurcações quando um repositório é excluído ou muda a visibilidade?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% ifversion fpt or ghec %}
* Se você estiver convertendo seu repositório privado em um repositório público, como parte de um movimento para a criação de um projeto de código aberto, consulte os [Guias de Código Aberto](http://opensource.guide) para obter dicas e diretrizes úteis. Você também pode fazer um curso grátis sobre gerenciamento de projeto de código aberto com [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Quando seu repositório é público, você também pode visualizar o perfil da comunidade do repositório para ver se os projetos atendem às práticas recomendadas de suporte aos contribuidores. Para obter mais informações, consulte "[Exibir o perfil da comunidade](/articles/viewing-your-community-profile)."
* O repositório automaticamente receberá acesso aos recursos de {% data variables.product.prodname_GH_advanced_security %}.

Para obter informações sobre como melhorar a segurança do repositório, consulte "[Protegendo seu repositório](/code-security/getting-started/securing-your-repository)".{% endif %}

{% endif %}

## Alterar a visibilidade de um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Danger Zone" (Zona de Perigo), à direita de "Alterar a visibilidade do repositório", clique **Alterar visibilidade**. ![Botão de alteração de visibilidade](/assets/images/help/repository/repo-change-vis.png)
4. Selecione uma visibilidade.
{% ifversion fpt or ghec %}
   ![Caixa de diálogo de opções para visibilidade do repositório](/assets/images/help/repository/repo-change-select.png){% else %}
![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. Para verificar se você está alterando a visibilidade do repositório correto, digite o nome do repositório que deseja alterar a visibilidade.
6. Clique em **Eu entendi, altere a visibilidade do repositório**.
{% ifversion fpt or ghec %}
   ![Confirmar alteração do botão de visibilidade do repositório](/assets/images/help/repository/repo-change-confirm.png){% else %}
![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## Leia mais
- "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
