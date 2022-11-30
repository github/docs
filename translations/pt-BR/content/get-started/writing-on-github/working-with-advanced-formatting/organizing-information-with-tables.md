---
title: Organizar informações com tabelas
intro: 'Você pode criar tabelas para organizar as informações em comentários, problemas, pull requests e wikis.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
ms.openlocfilehash: 6045e9f27432233cbfcdb654c303bc02ea5666cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145065553'
---
## Criar uma tabela

Você pode criar tabelas com pipes `|` e hífens `-`. Hifens são usados para criar o cabeçalho de cada coluna, enquanto as barras verticais separam cada coluna. Você deve incluir uma linha em branco antes da tabela para ela ser construída corretamente.

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![Tabela construída](/assets/images/help/writing/table-basic-rendered.png)

As barras verticais em cada extremo da tabela são opcionais.

As células podem ter largura variada e não precisam estar alinhadas perfeitamente com as colunas. Deve ter no mínimo três hifens em cada coluna da linha do cabeçalho.

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![Tabela construída com largura de célula variada](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Formatar conteúdo dentro da tabela

Você pode usar [formatação](/articles/basic-writing-and-formatting-syntax), como links, blocos de código embutidos e estilo de texto na tabela:

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![Tabela construída com texto formatado](/assets/images/help/writing/table-inline-formatting-rendered.png)

Você pode alinhar o texto à esquerda, à direita ou no centro de uma coluna incluindo dois pontos `:` à esquerda, direita ou nos dois lados dos hifens que estão dentro da linha de cabeçalho.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Tabela construída com alinhamento de texto à esquerda, centralizado e à direita](/assets/images/help/writing/table-aligned-text-rendered.png)

Para incluir uma barra vertical `|` como conteúdo dentro da célula, use `\` antes da barra vertical:

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![Tabela construída com barra vertical solta](/assets/images/help/writing/table-escaped-character-rendered.png)

## Leitura adicional

- [Especificações do {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax)"
