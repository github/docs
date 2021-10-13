# Notas de versão para o GitHub Enterprise Server

Interpretado aqui: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Como funciona

### Arquivo de conteúdo do espaço reservado

Existe um arquivo de conteúdo em `content/admin/release-notes.md`. Ele tem um especial layout frontmatter da propriedade `layout: release-notes` e nenhum conteúdo de Markdown. A fonte das notas de versão vem dos dados do YAML.

### Fonte YAML

Os dados de origem para as notas de versão encontram-se neste diretório (`data/release-notes/enterprise-server`).

Os diretórios são nomeados pelo número de versão do GHES (com um hífen em vez de ponto).

Os arquivos YAML em cada diretório são nomeados pelo número do patch. Alguns nomes de arquivos de patch podem terminar com `-rc<num>.yml`, o que significa que é um candidato a versão. Um arquivo candidato a versão também exige `release_candidate: true` nos dados do YAML.

Observações de versão do GHES descontinuadas (consulte `lib/enterprise-server-releases.js`) são **não** removidas do site e serão sempre exibidas junto com versões atualmente cmpatíveis.

Observe que arquivos de patch podem tornar-se obsoletos individualmente (ou seja, ocultos no site de documentação) por uma propriedade opcional `deprecated: true` propriedade.

### Processamento de recursos intermediários

Os dados do YAML são processados e classificados por `middleware/contextualizers/release-notes.js` e adicionados ao objeto `contexto`.

### Layouts

The `context` object data is rendered by `components/release-notes`.

The release notes page has a custom design with CSS in `stylesheets/release-notes.scss`.

### Esquema

O esquema que valida os dados do YAML encontra-se em `testes/helpers/schemas/ghes-release-notes-schema.js`. Consulte o arquivo do esquema para descobrir as propriedades obrigatórias e opcionais.

O esquema é exercido por um teste em `tests/linting/lint-files.js`. O teste irá falhar se os dados não passarem na validação.
