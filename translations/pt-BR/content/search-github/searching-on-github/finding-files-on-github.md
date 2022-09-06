---
title: Localizar arquivos no GitHub
intro: 'É possível localizar um arquivo em um repositório usando o localizador de arquivos. Para pesquisar um arquivo em vários repositórios em {% data variables.product.product_name %}, use [o qualificador da pesquisa de código "filename"](/search-github/searching-on-github/searching-code#search-by-filename).'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---

{% tip %}

**Dicas:**

- Por padrão, os resultados da busca de arquivos excluem alguns diretórios como `criar`, `log`, `tmp` e `fornecedor`. Para pesquisar os arquivos nesses diretórios, use o qualificador de pesquisa do código [`nome do arquivo`](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Como alternativa, você pode personalizar quais diretórios são excluídos por padrão [usando um arquivo `.gitattributes`](#customizing-excluded-files).{% endif %}
- É possível também abrir o file finder (localizador de arquivos) digitando `t` no teclado. Para obter mais informações, consulte "[Atalhos de teclado](/articles/keyboard-shortcuts)".

{% endtip %}

## Usando o buscador de arquivos

{% data reusables.repositories.navigate-to-repo %}
2. Acima da lista de arquivos, clique em **Ir para o arquivo**. ![Botão Find file (Localizar arquivo)](/assets/images/help/search/find-file-button.png)
3. No campo de pesquisa, digite o nome do arquivo que está procurando. ![Campo de pesquisa Find file (Localizar arquivo)](/assets/images/help/search/find-file-search-field.png)
4. Na lista de resultados, clique no arquivo que você queria encontrar.

{% ifversion file-finder-exclusion-controls %}

## Personalizando arquivos excluídos

Por padrão, os resultados do buscador de arquivos não incluem arquivos nos seguintes diretórios se eles existem na raiz do repositório:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

Você pode substituir estas exclusões padrão usando um arquivo `.gitattributes`.

Para fazer isso, crie ou atualize um arquivo denominado `.gitattributes` na raiz do seu repositório, definindo o atrivuto [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) como `falso` para cada diretório que deve ser incluído nos resultados do busca de arquivos.

Por exemplo, o seguinte arquivo `.gitattributes` faria com que os arquivos no diretório `build/` estivessem disponíveis no gerenciador de arquivos:

```
build/** linguist-generated=false
```

Observe que esta substituição exige o uso do padrão glob recursivo (`**`). Para obter mais informações, consulte "[formato padrão](https://git-scm.com/docs/gitignore#_pattern_format)" na documentação do Git. As substituições mais complexas de subdiretórios dentro de diretórios excluídos por padrão não são compatíveis.

{% endif %}

## Leia mais

- "[Sobre a pesquisa no GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[Personalizando como arquivos alterados aparecem no GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) na documentação do Git{% endif %}
