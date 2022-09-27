---
ms.openlocfilehash: a43b7fac5396fcbdb1b7d9ec241af9879de7b2b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094553"
---
# Notas de versão para o GitHub Enterprise Server

Renderizado aqui: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Como ele funciona

### Arquivo de conteúdo do espaço reservado

Há um arquivo de conteúdo em `content/admin/release-notes.md`. Ele tem uma propriedade `layout: release-notes` de frontmatter especial e nenhum conteúdo Markdown. A fonte das notas de versão vem dos dados do YAML.

### Fonte YAML

Os dados de origem das notas sobre a versão se encontram neste diretório (`data/release-notes/enterprise-server`).

Os diretórios são nomeados pelo número de versão do GHES (com um hífen em vez de ponto).

Os arquivos YAML em cada diretório são nomeados pelo número do patch. Alguns nomes de arquivos de patch podem terminar com `-rc<num>.yml`, o que significa que ele é uma versão Release Candidate. Um arquivo de versão Release Candidate também exige `release_candidate: true` nos dados YAML.

As notas sobre a versão das versões preteridas do GHES (confira `lib/enterprise-server-releases.js`) **não** são removidas do site e sempre serão exibidas com as versões atualmente compatíveis.

Observe que os arquivos de patch podem ser preteridos individualmente (ou seja, ocultos no site da documentação) por uma propriedade opcional `deprecated: true`.

### Processamento de recursos intermediários

Os dados YAML são processados e classificados por `middleware/contextualizers/release-notes.js` e adicionados ao objeto `context`.

### Layouts

Os dados do objeto `context` são renderizados por `components/release-notes`.

A página de notas sobre a versão tem um design personalizado com CSS em `stylesheets/release-notes.scss`.

### Esquema

O esquema que valida os dados YAML se encontram em `tests/helpers/schemas/ghes-release-notes-schema.js`. Consulte o arquivo do esquema para descobrir as propriedades obrigatórias e opcionais.

O esquema é exercido por um teste em `tests/linting/lint-files.js`. O teste irá falhar se os dados não passarem na validação.
