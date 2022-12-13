---
title: Sobre wikis
intro: Você pode hospedar a documentação para seu repositório em um wiki para que outras pessoas possam usar e contribuir com seu projeto.
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 94800761c60bb984745e582e2c9691e294e7a90d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529620'
---
Todos os repositórios em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} são equipados com uma seção para a documentação de hospedagem denominada wiki. Você pode usar o wiki do repositório para compartilhar conteúdo longo sobre seu projeto, por exemplo, como usá-lo, como ele foi projetado ou seus princípios básicos. Um arquivo README informa rapidamente o que seu projeto pode fazer, enquanto você pode usar um wiki para fornecer documentação adicional. Para obter mais informações, confira "[Sobre os arquivos LEIAME](/articles/about-readmes)".

Com wikis, é possível gravar conteúdo assim como em qualquer outro lugar no {% data variables.product.product_name %}. Para obter mais informações, confira "[Introdução à escrita e à formatação no {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github)". Usamos [nossa biblioteca de marcação de código aberto](https://github.com/github/markup) para converter diferentes formatos em HTML, de modo que você possa optar por escrever seu aplicativo em Markdown ou em qualquer outro formato com suporte. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt or ghes or ghec %}Se você criar um wiki em um repositório público, o wiki estará disponível para {% ifversion ghes %}qualquer pessoa com acesso ao {% data variables.product.product_location %}{% else %}o público{% endif %}. {% endif %}Se você criar um wiki em um repositório privado{% ifversion ghec or ghes %} ou interno,{% endif %} apenas {% ifversion fpt or ghes or ghec %}as pessoas{% elsif ghae %}integrantes da empresa{% endif %} com acesso ao repositório poderão acessar o wiki. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/articles/setting-repository-visibility)".

Você pode editar wikis diretamente no {% data variables.product.product_name %} ou editar arquivos wiki localmente. Por padrão, somente as pessoas com acesso de gravação ao repositório podem fazer alterações no wikis, embora você possa permitir que todos em {% data variables.product.product_location %} contribuam para um wiki em {% ifversion ghae %}um repositório interno{% else %}público{% endif %}. Para saber mais, confira "[Como alterar as permissões de acesso para wikis](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)".

{% note %}

**Observação:** os mecanismos de pesquisa não indexarão o conteúdo dos wikis. Para indexar seu conteúdo nos mecanismos de pesquisa, use o [{% data variables.product.prodname_pages %}](/pages) em um repositório público.

{% endnote %}

## Leitura adicional

- "[Como adicionar ou editar páginas do wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)"
- "[Como criar um rodapé ou um barra lateral no wiki](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)"
- "[Como editar o conteúdo do wiki](/communities/documenting-your-project-with-wikis/editing-wiki-content)"
- "[Como ver o histórico de alterações de um wiki](/articles/viewing-a-wiki-s-history-of-changes)"
- "[Pesquisa em wikis](/search-github/searching-on-github/searching-wikis)"
