---
title: Personalizar como os arquivos alterados aparecem no GitHub
intro: 'Para impedir que determinados arquivos sejam exibidos em comparações por padrão, ou que sejam considerados na linguagem do repositório, você poderá marcá-los com o atributo `linguist-generated` em um arquivo *.gitattributes*.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/managing-repository-settings/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: How changed files appear
ms.openlocfilehash: 2ba6dc8286cab0ef493289d8ae39283209dae8b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126979'
---
Use um arquivo *.gitattributes* para os marcar arquivos que correspondem a determinado "padrão" com os atributos especificados. Um arquivo *.gitattributes* usa as mesmas regras de correspondência dos arquivos _.gitignore_. Para obter mais informações, confira [FORMATO DE PADRÃO](https://www.git-scm.com/docs/gitignore#_pattern_format) na documentação do Git.

1. A menos que o arquivo *.gitattributes* já exista, crie um arquivo *.gitattributes* na raiz do repositório.
2. Use o atributo `linguist-generated` para marcar ou desmarcar os caminhos que deseja ignorar nas estatísticas de linguagem do repositório e ocultar por padrão nas comparações.

  Por exemplo, para marcar `search/index.json` como um arquivo gerado, adicione essa linha a *.gitattributes*:

  ```
search/index.json linguist-generated=true
  ```

## Leitura adicional
- "[Código gerado](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code)" na documentação do Linguist
- "[Como criar arquivos](/articles/creating-new-files/)"
