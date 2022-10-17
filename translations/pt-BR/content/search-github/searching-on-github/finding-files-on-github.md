---
title: Localizar arquivos no GitHub
intro: 'É possível localizar um arquivo em um repositório usando o localizador de arquivos. Para pesquisar um arquivo em vários repositórios no {% data variables.product.product_name %}, use o [`filename` qualificador de pesquisa de código](/search-github/searching-on-github/searching-code#search-by-filename).'
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
ms.openlocfilehash: 7cecdfd58ecf56cac251bd77af3a4e1a7fcfd607
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880193'
---
{% tip %}

**Dicas:**

- Por padrão, os resultados do localizador de arquivos excluem alguns diretórios, como `build`, `log`, `tmp` e `vendor`. Para pesquisar arquivos nesses diretórios, use o [qualificador de pesquisa de código `filename`](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Como alternativa, você pode personalizar quais diretórios são excluídos por padrão [usando um arquivo `.gitattributes`](#customizing-excluded-files).{% endif %}
- Abra também o localizador de arquivos pressionando `t` no teclado. Para obter mais informações, confira "[Atalhos de teclado](/articles/keyboard-shortcuts)".

{% endtip %}

## Usar o localizador de arquivos

{% data reusables.repositories.navigate-to-repo %}
2. Acima da lista de arquivos, clique em **Ir para o arquivo**.
![Botão Localizar arquivo](/assets/images/help/search/find-file-button.png)
3. No campo de pesquisa, digite o nome do arquivo que está procurando.
![Campo de pesquisa Localizar arquivo](/assets/images/help/search/find-file-search-field.png)
4. Na lista de resultados, clique no arquivo que você queria encontrar.

{% ifversion file-finder-exclusion-controls %}

## Personalizar arquivos excluídos

Por padrão, os resultados do localizador de arquivos não incluirão arquivos nos seguintes diretórios se eles existirem na raiz do repositório:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

Você pode substituir essas exclusões padrão usando um arquivo `.gitattributes`.

Para fazer isso, crie ou atualize um arquivo chamado `.gitattributes` na raiz do repositório, definindo o atributo [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) como `false` para cada diretório que deve ser incluído nos resultados do localizador de arquivos.

Por exemplo, o seguinte arquivo `.gitattributes` faria com que os arquivos no diretório `build/` ficassem disponíveis para o localizador de arquivos:

```
build/** linguist-generated=false
```

Observe que essa substituição requer o uso do padrão glob recursivo (`**`). Para obter mais informações, confira "[formato de padrão](https://git-scm.com/docs/gitignore#_pattern_format)" na documentação do Git. Não há suporte para substituições mais complexas de subdiretórios em diretórios excluídos por padrão.

{% endif %}

## Leitura adicional

- "[Sobre a pesquisa no GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[Personalizar como os arquivos alterados aparecem no GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) na documentação do Git{% endif %}
