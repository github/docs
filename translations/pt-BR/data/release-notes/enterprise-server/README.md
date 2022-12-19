---
ms.openlocfilehash: bf7a1cdb9c8b1300ef8ba8ab2dd427a9b5d28128
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193160"
---
# Notas de versão para o GitHub Enterprise Server

Renderizado aqui: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Como adicionar notas de versão a uma versão preterida do GitHub Enterprise Server

Durante a substituição de uma versão do GitHub Enterprise Server por [esse modelo de problema](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md), o Docs Engineering remove os arquivos YAML com as notas sobre a versão do `github/docs-internal`.

Se um stakeholder solicitar uma atualização para as notas de versão preteridas, você poderá atualizar as anotações concluindo as etapas a seguir.

1. Confira o branch <code>enterprise-<em>VERSION</em>-release</code> de execução longa e crie uma PR para atualizar as notas sobre a versão preterida nesse branch.
2. Entre em contato com #docs-engineering para solicitar uma nova extração e atualização do conteúdo armazenado no Microsoft Azure. Consulte a seção sobre como extrair novamente o conteúdo na [lista de verificação de substituição](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md).

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

Os dados YAML são processados e classificados por `middleware/contextualizers/ghes-release-notes.js` e adicionados ao objeto `context`.

### Layouts

Os dados do objeto `context` são renderizados por `components/release-notes`.

A página de notas sobre a versão tem um design personalizado com CSS em `stylesheets/release-notes.scss`.

### Esquema

O esquema que valida os dados YAML se encontram em `tests/helpers/schemas/release-notes-schema.js`. Consulte o arquivo do esquema para descobrir as propriedades obrigatórias e opcionais.

O esquema é exercido por um teste em `tests/linting/lint-files.js`. O teste irá falhar se os dados não passarem na validação.
