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
ms.openlocfilehash: a9d5b33b94e6067bb4decfa8f47da8aa25860da4
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127141'
---
## Sobre o arquivamento do repositório

{% ifversion fpt or ghec %} {% note %}

**Observação:** se você tiver um plano de cobrança por repositório herdado, ainda será cobrado pelo repositório arquivado. Se não desejar ser cobrado por um repositório arquivado, será preciso atualizar para um novo produto. Para obter mais informações, confira "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/github-s-products)".

{% endnote %} {% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %} {% note %}

**Observação:** os clientes que usam o {% data variables.product.prodname_GH_advanced_security %} podem habilitar a {% data variables.product.prodname_secret_scanning %} em repositórios arquivados. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories)".

{% endnote %} {% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Depois que um repositório é arquivado, não é possível adicionar nem remover colaboradores ou equipes. Os contribuidores com acesso ao repositório podem apenas bifurcar ou marcar com estrela seu projeto.

Quando um repositório é arquivado, seus problemas, pull requests, código, etiquetas, marcos, projetos, wiki, versões, commits, tags, branches, reações, alertas de varredura de código, comentários e permissões tornam-se somente leitura. Para fazer alterações em um repositório arquivado, você deve desarquivar o repositório primeiro.

É possível pesquisar repositórios arquivados. Para obter mais informações, confira "[Pesquisa em repositórios](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)". Para obter mais informações, consulte "<a href="/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived">Pesquisa de repositórios</a>". Para obter mais informações, confira "[Pesquisar problemas e solicitações de pull](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)".  

## Arquivar um repositório

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em "Zona de Perigo", clique em **Arquivar este repositório** ou **Desarquivar este repositório**.
   ![Botão Arquivar este repositório](/assets/images/help/repository/archive-repository.png)
4. Leia os avisos.
5. Digite o nome do repositório que deseja arquivar ou desarquivar.
  ![Avisos de arquivamento do repositório](/assets/images/help/repository/archive-repository-warnings.png)
6. Clique em **Entendo as consequências. Arquivar este repositório**.
