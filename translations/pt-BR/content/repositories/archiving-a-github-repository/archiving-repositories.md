---
title: Arquivar repositórios
intro: Você pode arquivar um repositório a fim de torná-lo somente leitura para todos os usuários e indicar que ele não está mais sendo mantido ativamente. Também é possível desarquivar repositórios que foram arquivados.
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## Sobre o arquivamento do repositório

{% ifversion fpt or ghec %}
{% note %}

**Observação:** se você tiver um plano de cobrança por repositório herdado, será feita a cobrança pelo seu repositório arquivado. Se não desejar ser cobrado por um repositório arquivado, será preciso atualizar para um novo produto. Para obter mais informações, consulte os "[Produtos da {% data variables.product.prodname_dotcom %}](/articles/github-s-products)".

{% endnote %}
{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %}
{% note %}

**Observação:** Os clientes que usam {% data variables.product.prodname_GH_advanced_security %} podem habilitar {% data variables.product.prodname_secret_scanning %} nos repositórios arquivados. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories)

{% endnote %}
{% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Depois que um repositório é arquivado, não é possível adicionar nem remover colaboradores ou equipes. Os contribuidores com acesso ao repositório podem apenas bifurcar ou marcar com estrela seu projeto.

Quando um repositório é arquivado, seus problemas, pull requests, código, etiquetas, marcos, projetos, wiki, versões, commits, tags, branches, reações, alertas de varredura de código, comentários e permissões tornam-se somente leitura. Para fazer alterações em um repositório arquivado, você deve desarquivar o repositório primeiro.

É possível pesquisar repositórios arquivados. Para obter mais informações, consulte "[Pesquisar repositórios](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)". Para obter mais informações, consulte "[Pesquisa de repositórios](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)". Para obter mais informações, consulte "[Pesquisa de problemas e pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)".

## Arquivar um repositório

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Danger Zone" (Zona de perigo), clique em **Archive this repository** (Arquivar este repositório) ou em **Unarchive this repository** (Desarquivar este repositório). ![Botão Archive this repository (Arquivar este repositório)](/assets/images/help/repository/archive-repository.png)
4. Leia os avisos.
5. Digite o nome do repositório que deseja arquivar ou desarquivar. ![Avisos de arquivamento de repositório](/assets/images/help/repository/archive-repository-warnings.png)
6. Clique em **I understand the consequences, archive this repository** (Entendo as consequências, arquive este repositório).
