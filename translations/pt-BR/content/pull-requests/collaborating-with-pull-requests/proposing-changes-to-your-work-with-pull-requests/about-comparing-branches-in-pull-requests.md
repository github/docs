---
title: Sobre como comparar branches nas pull requests
intro: As pull requests exibem diffs para comparar as alterações feitas no branch de tópico com o branch base com o qual você deseja fazer merge.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comparar branches
---

{% note %}

**Observação:** ao criar a pull request, é possível alterar o branch base com o qual você está comparando suas alterações. Para obter mais informações, consulte "[Criar uma pull request](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)".

{% endnote %}

É possível exibir alterações propostas em uma pull request na aba Arquivos alterados. ![Guia Files changed (Arquivos alterados) da pull request](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Em vez de exibir os commits em si, você pode ver as alterações propostas como elas aparecerão nos arquivos assim que a pull request passar pelo merge. Os arquivos aparecem em ordem alfabética na guia Files changed (Arquivos alterados). As adições aos arquivos aparecem em verde e são precedidas por um sinal de `+`, enquanto o conteúdo que foi removido aparece em vermelho e é precedido por um sinal de `-`.

## Opções de exibição de diff

{% tip %}

**Dica:** se estiver com dificuldades para entender o contexto de uma alteração, você poderá clicar em **View** (Exibir) na guia Files changed (Arquivos alterados) para ver o arquivo todo com as alterações propostas.

{% endtip %}

Há várias opções de exibição de um diff:
- A exibição unificada mostra conteúdo atualizado e existente juntos em uma exibição linear.
- A exibição dividida mostra conteúdo antigo em um lado e novo conteúdo do outro lado.
- A exibição de diff avançado mostra uma visualização da aparência das alterações depois que a pull request passar por merge.
- A exibição da origem mostra as alterações na origem sem a formatação da exibição de diff avançado.

Também é possível optar por ignorar alterações de espaço em branco para obter uma exibição mais precisa das alterações importantes em uma pull request.

![Menu de opções para exibição de diff](/assets/images/help/pull_requests/diff-settings-menu.png)

Para simplificar a revisão das alterações em um pull request extenso, é possível filtrar o diff para mostrar apenas os tipos de arquivo selecionados, mostrar arquivos dos quais você é CODEOWNER, ocultar arquivos que você já visualizou ou ocultar arquivos excluídos. Para obter mais informações, consulte "[Filtrar aquivos em uma pull request por tipo de arquivo](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)".

  ![Menu suspenso File filter (Filtro de arquivo)](/assets/images/help/pull_requests/file-filter-menu.png)

## Motivos pelos quais os diffs não serão exibidos
- Você excedeu o limite total de arquivos ou de determinados tipos de arquivo. Para obter mais informações, consulte "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)".
- Seu arquivo corresponde a uma regra no arquivo *.gitattributes* do repositório para impedir esse arquivo de ser exibido por padrão. Para obter mais informações, consulte "[Personalizar como os arquivos alterados aparecem no GitHub](/articles/customizing-how-changed-files-appear-on-github)".

## Comparações de diff do Git de três pontos e dois pontos

There are two comparison methods for the `git diff` command; two-dot (`git diff A..B`) and three-dot (`git diff A...B`). By default, pull requests on {% data variables.product.prodname_dotcom %} show a three-dot diff.

### Three-dot Git diff comparison

The three-dot comparison shows the difference between the latest common commit of both branches (merge base) and the most recent version of the topic branch.

### Two-dot Git diff comparison

The two-dot comparison shows the difference between the latest state of the base branch (for example, `main`) and the most recent version of the topic branch.

Para ver duas referências de committish em uma comparação de diff de dois pontos no {% data variables.product.prodname_dotcom %}, você pode editar o URL da página "Comparing changes" (Comparar alterações) do seu repositório. Para obter mais informações, consulte [Glossário do Git para "committish"](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) no book site do _Pro Git_.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Um diff de dois pontos compara duas referências de committish do Git, como SHAs ou IDs de objeto (OIDs, Object IDs), diretamente entre si. No {% data variables.product.prodname_dotcom %}, as referências de committish do Git em uma comparação de diff de dois pontos devem ser enviadas por push ao mesmo repositório ou para suas bifurcações.

Se desejar simular um diff de dois pontos em uma pull request e ver uma comparação entre as versões mais recentes de cada branch, você poderá fazer merge do branch base no branch de tópico, o que atualiza o último ancestral comum entre seus branches.

Para obter mais informações sobre os comandos do Git para comparar alterações, consulte "[Opções de diff do Git](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)" no site do livro do _Pro Git_.

## About three-dot comparison on {% data variables.product.prodname_dotcom %}

Since the three-dot comparison compares with the merge base, it is focusing on "what a pull request introduces".

When you use a two-dot comparison, the diff changes when the base branch is updated, even if you haven't made any changes to the topic branch. Additionally, a two-dot comparison focuses on the base branch. This means that anything you add is displayed as missing from the base branch, as if it was a deletion, and vice versa. As a result, the changes the topic branch introduces become ambiguous.

In contrast, by comparing the branches using the three-dot comparison, changes in the topic branch are always in the diff if the base branch is updated, because the diff shows all of the changes since the branches diverged.

### Merging often

To avoid getting confused, merge the base branch (for example, `main`) into your topic branch frequently. By merging the base branch, the diffs shown by two-dot and three-dot comparisons are the same. We recommend merging a pull request as soon as possible. This encourages contributors to make pull requests smaller, which is recommended in general.

## Leia mais

- "[Sobre pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Sobre bifurcações](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
