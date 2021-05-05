---
title: Personalizar como os arquivos alterados aparecem no GitHub
intro: 'Para impedir que determinados arquivos sejam exibidos em diffs por padrão, ou que sejam considerados na linguagem do repositório, você pode marcá-los com o atributo ''linguist-generated'' em um arquivo *.gitattributes*.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Use um arquivo *.gitattributes* para marcar arquivos que correspondem a um determinado "padrão" com os atributos especificados. Um arquivo *.gitattributes* usa as mesmas regras para correspondência que os arquivos _.gitignore_. Para obter mais informações, consulte [FORMATO PADRÃO](https://www.git-scm.com/docs/gitignore#_pattern_format) na documentação do Git.

1. A menos que o arquivo *.gitattributes* já exista, crie um arquivo *.gitattributes* na raiz do repositório.
2. Use o atributo `linguist-generated` para marcar ou desmarcar caminhos que você deseja que sejam ignorados nas estatísticas de linguagem do repositório e ocultados por padrão em diffs.

  Por exemplo, para marcar `search/index.json` como um arquivo gerado, adicione esta linha a *.gitattributes*:

  ```
search/index.json linguist-generated=true
  ```

### Leia mais
- "[Código gerado](https://github.com/github/linguist/#generated-code)" na documentação do Linguist
- "[Criar novos arquivos](/articles/creating-new-files/)"
