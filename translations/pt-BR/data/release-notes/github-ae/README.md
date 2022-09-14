---
ms.openlocfilehash: 78f03188cb76fd34ffd5670585758bb8c9c2a47d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094549"
---
# Notas de versão para o GitHub AE

Renderizado aqui: https://docs.github.com/en/github-ae@latest/admin/release-notes

## Como ele funciona

### Arquivo de conteúdo do espaço reservado

Há um arquivo de conteúdo em `content/admin/release-notes.md`. Ele tem uma propriedade `layout: release-notes` de frontmatter especial e nenhum conteúdo Markdown. A fonte das notas de versão vem dos dados do YAML.

### Fonte YAML

Os dados de origem das notas sobre a versão se encontram neste diretório (`data/release-notes/github-ae`).

Os diretórios são nomeados por mês. Os arquivos YAML são nomeados pelos dados de uma versão semanal.

Uma propriedade booliana chamada `currentWeek` precisa ser definida em cada arquivo YAML. Não mais do que um arquivo de cada vez pode ter essa propriedade definida como verdadeiro.

Observe que os arquivos de patch podem ser preteridos individualmente (ou seja, ocultos no site da documentação) por uma propriedade opcional `deprecated: true`.

### Processamento de recursos intermediários

Os dados YAML são processados e classificados por `middleware/contextualizers/release-notes.js` e adicionados ao objeto `context`.

### Layouts

Os dados do objeto `context` são renderizados por `components/release-notes`.

A página de notas sobre a versão tem um design personalizado com CSS em `stylesheets/release-notes.scss`.

### Esquema

O esquema que valida os dados YAML se encontram em `tests/helpers/schemas/ghae-release-notes-schema.js`. Consulte o arquivo do esquema para descobrir as propriedades obrigatórias e opcionais.

O esquema é exercido por um teste em `tests/linting/lint-files.js`. O teste irá falhar se os dados não passarem na validação.
