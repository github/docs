---
title: Criar um link permanente em um trecho de código
intro: É possível criar um link permanente em uma linha específica ou conjunto de linhas de código de uma determinada versão de arquivo ou pull request.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Links permanentes para o código
---

## Vinculando ao código

Esse tipo de link permanente será renderizado como um trecho de código somente no repositório em que ele foi originado. Em outros repositórios, o trecho de código permalink será renderizado como uma URL.

![Trecho de código renderizado em um comentário](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Dica:** para criar um permalink para um arquivo inteiro, consulte "[Obter links permanentes para arquivos](/articles/getting-permanent-links-to-files)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Localize o código ao qual deseja vincular:
    - Para vincular de um arquivo para o código, navegue até o arquivo.
    - Para vincular de uma pull request para o código, navegue até a pull request e clique em {% octicon "diff" aria-label="The file diff icon" %} **Files changed** (Arquivos alterados). Depois, vá até o arquivo que contém o código que você quer incluir em seu comentário e clique em **View** (Visualizar).
{% data reusables.repositories.choose-line-or-range %}
4. À esquerda da linha ou do conjunto de linhas, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. No menu suspenso, clique em **Copy permalink** (Copiar permalink). ![Menu Kebab com opção para copiar um link permanente para uma linha selecionada](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Navegue até a conversa em que deseja vincular ao trecho de código.
6. Cole seu permalink em um comentário e clique em **Comment** (Comentário). ![Permalink colado em um comentário no mesmo repositório](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Vinculando ao Markdown

Você pode vincular a linhas específicas em arquivos Markdown carregando o arquivo Markdown sem a interpretação do Markdown. Para carregar um arquivo Markdown sem interpretação, você pode usar o parâmetro `?plain=1` no final da url para o arquivo. Por exemplo, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

Você pode vincular a uma linha específica no arquivo Markdown da mesma forma que você pode vincular no código. Acrescente `#L` com o número da linha ou números no final da url. Por exemplo, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` irá destacar a linha 14 no arquivo simples README.md.

## Leia mais

- "[Criar um problema](/articles/creating-an-issue/)"
- "[Abrir um problema a partir de código](/articles/opening-an-issue-from-code/)"
- "[Revisar alterações em pull requests](/articles/reviewing-changes-in-pull-requests/)"
