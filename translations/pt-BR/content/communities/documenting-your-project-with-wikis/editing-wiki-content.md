---
title: Editar conteúdo de wiki
intro: Você pode adicionar imagens e links no conteúdo do seu wiki e usar alguns formatos do MediaWiki compatíveis.
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 0afae4335dbf6ff78c0b0e1a2bef4cebed637a5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578937'
---
## Adicionar links

Você pode criar links em wikis usando markup padrão compatível para sua página ou usando sintaxe do MediaWiki. Por exemplo:

- Se as suas páginas forem renderizadas com Markdown, a sintaxe do link será `[Link Text](full-URL-of-wiki-page)`.
- Com a sintaxe MediaWiki, a sintaxe do link é `[[nameofwikipage|Link Text]]`.

## Adição de imagens

Os wikis podem exibir imagens em PNG, JPEG e GIF.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Usando a barra lateral do wiki, navegue até a página que deseja alterar e clique em **Editar**.
4. Na barra de ferramentas do wiki, clique em **Imagem**.
   ![Botão Adicionar imagem do wiki](/assets/images/help/wiki/wiki_add_image.png)
5. Na caixa de diálogo "Insert Image" (Inserir imagem), digite a URL da imagem e o texto alt (que é usado por mecanismos de pesquisa e leitores de tela).
6. Clique em **OK**.

### Vincular a imagens em um repositório

Para vincular a uma imagem em um repositório no {% data variables.product.product_name %}, copie a URL no navegador e use-a como caminho para a imagem. Por exemplo, a incorporação de uma imagem no wiki usando Markdown pode ter esta aparência:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## Adicionar expressões matemáticas e diagramas{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## Formatos do MediaWiki compatíveis

Seja qual for a linguagem de marcação em que sua página wiki foi escrita, sempre haverá uma sintaxe do MediaWiki disponível para você.
- Links ([exceto o AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Regras horizontais por meio de `---`
- Entidades de símbolo de abreviação (como `&delta;` ou `&euro;`)

Por motivos de segurança e desempenho, algumas sintaxes não são compatíveis.
- [Transclusão](https://www.mediawiki.org/wiki/Transclusion)
- Listas de definições
- Recuo
- Sumário
