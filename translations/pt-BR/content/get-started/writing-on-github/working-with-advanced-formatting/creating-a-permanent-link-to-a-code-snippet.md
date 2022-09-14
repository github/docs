---
title: Criar um link permanente em um trecho de código
intro: É possível criar um link permanente em uma linha específica ou conjunto de linhas de código de uma determinada versão de arquivo ou pull request.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145065561'
---
## Vinculando ao código

Esse tipo de link permanente será renderizado como um trecho de código somente no repositório em que ele foi originado. Em outros repositórios, o trecho de código permalink será renderizado como uma URL.

![Trecho de código renderizado em um comentário](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Dica:** para criar um link permanente para um arquivo inteiro, confira "[Como obter link permanentes para arquivos](/articles/getting-permanent-links-to-files)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Localize o código ao qual deseja vincular:
    - Para vincular de um arquivo para o código, navegue até o arquivo.
    - Para criar um link com o código por meio de uma solicitação de pull, procure a solicitação de pull e clique em {% octicon "diff" aria-label="The file diff icon" %} **Arquivos alterados**. Em seguida, procure o arquivo que contém o código que você deseja incluir no comentário e clique em **Exibir**.
{% data reusables.repositories.choose-line-or-range %}
4. À esquerda da linha ou do intervalo de linhas, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. No menu suspenso, clique em **Copiar link permanente**.
  ![Menu de kebab com opção para copiar um link permanente para uma linha selecionada](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Navegue até a conversa em que deseja vincular ao trecho de código.
6. Cole o link permanente em um comentário e clique em **Comentar**.
  ![Link permanente colado em um comentário no mesmo repositório](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Vinculando ao Markdown

Você pode vincular a linhas específicas em arquivos Markdown carregando o arquivo Markdown sem a interpretação do Markdown. Para carregar um arquivo Markdown sem renderização, use o parâmetro `?plain=1` no final da URL do arquivo. Por exemplo, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

Você pode vincular a uma linha específica no arquivo Markdown da mesma forma que você pode vincular no código. Acrescente `#L` com os números de linha no final da URL. Por exemplo, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` realçará a linha 14 no arquivo LEIAME.md simples.

## Leitura adicional

- "[Como criar um problema](/articles/creating-an-issue/)"
- "[Como abrir um problema por meio do código](/articles/opening-an-issue-from-code/)"
- "[Como revisar alterações em solicitações de pull](/articles/reviewing-changes-in-pull-requests/)"
