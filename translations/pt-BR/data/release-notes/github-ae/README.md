# Notas de versão para o GitHub AE

Interpretado aqui: https://docs.github.com/en/github-ae@latest/admin/release-notes

## Como funciona

### Arquivo de conteúdo do espaço reservado

Existe um arquivo de conteúdo em `content/admin/release-notes.md`. Ele tem um especial layout frontmatter da propriedade `layout: release-notes` e nenhum conteúdo de Markdown. A fonte das notas de versão vem dos dados do YAML.

### Fonte YAML

Os dados de origem para as notas de versão encontram-se neste diretório (`data/release-notes/github-ae`).

Os diretórios são nomeados por mês. Os arquivos YAML são nomeados pelos dados de uma versão semanal.

Uma propriedade booleana denominada `currentWeek` deve ser definida em cada arquivo YAML. Não mais do que um arquivo de cada vez pode ter essa propriedade definida como verdadeiro.

Observe que arquivos de patch podem tornar-se obsoletos individualmente (ou seja, ocultos no site de documentação) por uma propriedade opcional `deprecated: true` propriedade.

### Processamento de recursos intermediários

Os dados do YAML são processados e classificados por `middleware/contextualizers/release-notes.js` e adicionados ao objeto `contexto`.

### Layouts

Os dados do objeto `contexto` são interpretados por `components/release-notes`.

A página de notas de versão tem um design personalizado com CSS em `stylesheets/release-notes.scss`.

### Esquema

O esquema que valida os dados do YAML encontra-se em `testes/helpers/schemas/ghae-release-notes-schema.js`. Consulte o arquivo do esquema para descobrir as propriedades obrigatórias e opcionais.

O esquema é exercido por um teste em `tests/linting/lint-files.js`. O teste irá falhar se os dados não passarem na validação.
