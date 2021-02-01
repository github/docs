---
title: Organizar informações com tabelas
intro: 'Você pode criar tabelas para organizar as informações em comentários, problemas, pull requests e wikis.'
redirect_from:
  - /articles/organizing-information-with-tables
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Criar uma tabela

Você pode criar tabelas com barras verticais `|` e hifens `-`. Os hifens são usados para criar o cabeçalho das colunas e as barras verticais, para separar as colunas. Você deve incluir uma linha em branco antes da tabela para ela ser construída corretamente.

```

| Primeiro cabeçalho  |  Segundo cabeçalho  |
| ------------------- | ------------------- |
|  Célula de conteúdo |  Célula de conteúdo |
|  Célula de conteúdo |  Célula de conteúdo |
```

![Tabela construída](/assets/images/help/writing/table-basic-rendered.png)

As barras verticais em cada extremo da tabela são opcionais.

As células podem ter largura variada e não precisam estar alinhadas perfeitamente com as colunas. Deve ter no mínimo três hifens em cada coluna da linha do cabeçalho.

```
| Comando | Descrição |
| --- | --- |
| git status | Lista de todos os arquivos modificados ou novos |
| git diff | Mostra as diferenças do arquivo que não foram preparadas |
```

![Tabela construída com largura de célula variada](/assets/images/help/writing/table-varied-columns-rendered.png)

### Formatar conteúdo dentro da tabela

Você pode usar [formatação](/articles/basic-writing-and-formatting-syntax), como links, blocos de código em linhas e estilos de texto em sua tabela:

```
| Comando | Descrição |
| --- | --- |
| `git status` | Lista de todos os arquivos *modificados ou novos* |
| `git diff` | Mostra as diferenças do arquivo que **não foram** preparadas |
```

![Tabela construída com texto formatado](/assets/images/help/writing/table-inline-formatting-rendered.png)

Você pode alinhar o texto à esquerda, direita ou centralizar uma coluna incluindo dois pontos `:` à esquerda, direita ou nos dois lados dos hifens que estão dentro da linha de cabeçalho.

```
|   Esquerda   |  Centralizado  |    Direita    |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Tabela construída com alinhamento de texto à esquerda, centralizado e à direita](/assets/images/help/writing/table-aligned-text-rendered.png)

Para incluir uma barra vertical `|` como conteúdo dentro da célula, use `\` antes da barra vertical:

```
| Nome   | Caractere |
| ---    | ---       |
| Crase  | `         |
| Barra  | \|        |
```

![Tabela construída com barra vertical solta](/assets/images/help/writing/table-escaped-character-rendered.png)

### Leia mais

- [Especificações de markdown em estilo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)"
