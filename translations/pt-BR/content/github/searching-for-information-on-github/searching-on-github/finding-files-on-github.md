---
title: Localizar arquivos no GitHub
intro: 'É possível localizar um arquivo em um repositório usando o localizador de arquivos. Para pesquisar um arquivo em repositórios múltiplos no {% data variables.product.product_name %}, use o [código qualificador da pesquisa `filename` (nome do arquivo)](/articles/searching-code#search-by-filename).'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

{% tip %}

**Dicas:**

- Os resultados do localizador de arquivos excluem alguns diretórios, como `build`, `log`, `tmp` e `vendor`. Para pesquisar arquivos dentro desses diretórios, use o código qualificador da pesquisa [`filename` (nome do arquivo)](/articles/searching-code#search-by-filename).
- É possível também abrir o file finder (localizador de arquivos) digitando `t` no teclado. Para obter mais informações, consulte "[Atalhos de teclado](/articles/keyboard-shortcuts)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. No nome do repositório, clique em **Find file** (Localizar arquivo). ![Botão Find file (Localizar arquivo)](/assets/images/help/search/find-file-button.png)
{% else %}
2. Acima da lista de arquivos, clique em **Ir para o arquivo**. ![Botão Find file (Localizar arquivo)](/assets/images/help/search/find-file-button.png)
{% endif %}
3. No campo de pesquisa, digite o nome do arquivo que está procurando. ![Campo de pesquisa Find file (Localizar arquivo)](/assets/images/help/search/find-file-search-field.png)
4. Na lista de resultados, clique no arquivo que você queria encontrar.

### Leia mais

- "[Sobre a pesquisa no GitHub](/articles/about-searching-on-github)"
