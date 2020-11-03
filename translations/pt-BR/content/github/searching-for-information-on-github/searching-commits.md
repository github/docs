---
title: Pesquisar commits
intro: 'Você pode pesquisar commits no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores de pesquisa de commits.'
redirect_from:
  - /articles/searching-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Você pode pesquisar commits globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização ou um repositório específico. Para obter mais informações, consulte "[Sobre pesquisar no {% data variables.product.company_short %}](/articles/about-searching-on-github)".

Quando você pesquisa commits, somente o [branch padrão](/articles/about-branches) de um repositório é pesquisado.

{% data reusables.search.syntax_tips %}

### Pesquisar em mensagens do commit

Você pode pesquisar commits que contêm palavras específicas na mensagem. Por exemplo, [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) identifica os commits que têm as palavras "fix" e "typo".

### Pesquisar por autor ou committer

Você pode pesquisar commits de um usuário específico com os qualificadores `author` ou `committer`.

| Qualifier                 | Exemplo                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) identifica os commits de autoria de @defunkt.    |
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) identifica os commits feitos por @defunkt. |

Os qualificadores `author-name` e `committer-name` identifica os commits pelo nome do autor ou committer.

| Qualifier                 | Exemplo                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) identifica os commits com "wanstrath" no nome do autor.           |
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) identifica os commits com "wanstrath" no nome do committer. |

Os qualificadores `author-email` e `committer-email` identificam commits pelo endereço de e-mail completo do autor ou committer.

| Qualifier                 | Exemplo                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>author-email:<em>EMAIL</em></code> | [**author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) identifica os commits de autoria de chris@github.com.    |
| <code>committer-email:<em>EMAIL</em></code> | [**committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) identifica os commits feitos por chris@github.com. |

### Pesquisar por data de criação ou do commit

Use os qualificadores `author-date` e `committer-date` para identificar commits criados ou feitos em um intervalo de datas específico.

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Exemplo                                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) identifica os commits criados antes de 01-01-2016.       |
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A<2016-01-01&type=Commits) identifica os commits feitos depois de 01-01-2016. |

### Filtrar commits de merge

O qualificador `merge` filtra os commits de merge.

| Qualifier     | Exemplo                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| `merge:true`  | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) identifica os commits de merge.               |
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) identifica os commits que não são de merge. |

### Pesquisar por hash

O qualificador `hash` identifica os commits com o hash SHA-1 especificado.

| Qualifier                 | Exemplo                                                                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) identifica os commits com o hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`. |

### Pesquisar por principal

O qualificador `parent` identifica os commits cujo principal tem o hash SHA-1 especificado.

| Qualifier                 | Exemplo                                                                                                                                                                                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) identifica os commits secundários com o hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`. |

### Pesquisar por árvore

O qualificador `tree` identifica os commits com o hash de árvore do Git SHA-1 especificado.

| Qualifier                  | Exemplo                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) identifica os commits que fazem referência ao hash de árvore `99ca967`. |

### Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar commits em todos os repositórios de um determinado usuário ou organização, use os qualificadores `user` ou `org`. Para pesquisar commits em um repositório específico, use o qualificador `repo`.

| Qualifier                  | Exemplo                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) identifica as mensagens do commit com a palavra "gibberish" nos repositórios de @defunkt.                              |
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) identifica as mensagens do commit com a palavra "test" nos repositórios de @github.                                                  |
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) identifica as mensagens do commit com a palavra "language" no repositório "gibberish" de @defunkt. |

### Filtrar repositórios públicos ou privados

O qualificador `is` identifica commits públicos ou privados.

| Qualifier    | Exemplo                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| `is:public`  | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) identifica os commits públicos.   |
| `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) identifica os commits privados. |

### Leia mais

- "[Ordenar os resultados da pesquisa](/articles/sorting-search-results/)"
