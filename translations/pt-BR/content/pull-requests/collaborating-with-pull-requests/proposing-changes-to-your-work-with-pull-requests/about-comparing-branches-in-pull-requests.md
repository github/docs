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
shortTitle: Compare branches
ms.openlocfilehash: c45bcb3bceda42019be3139724e0b68234e90cfc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881801'
---
{% note %}

**Observação:** ao criar sua solicitação de pull, você pode alterar o branch base com o qual está comparando as alterações. Para obter mais informações, confira "[Como criar uma solicitação de pull](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)".

{% endnote %}

Veja as alterações propostas em uma solicitação de pull na guia Arquivos alterados. ![Guia Arquivos alterados da solicitação de pull](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Em vez de exibir os commits em si, você pode ver as alterações propostas como elas aparecerão nos arquivos assim que a pull request passar pelo merge. Os arquivos são exibidos em ordem alfabética na guia Arquivos alterados. As adições aos arquivos são exibidas em verde e são precedidas por um sinal `+`, enquanto o conteúdo que foi removido é exibido em vermelho e é precedido por um sinal `-`.

## Opções de exibição de diff

{% tip %}

**Dica:** se você estiver tendo dificuldades em entender o contexto de uma alteração, clique em **Exibir** na guia Arquivos alterados para ver todo o arquivo com as alterações propostas.

{% endtip %}

Há várias opções de exibição de um diff:
- A exibição unificada mostra conteúdo atualizado e existente juntos em uma exibição linear.
- A exibição dividida mostra conteúdo antigo em um lado e novo conteúdo do outro lado.
- A exibição de diff avançado mostra uma visualização da aparência das alterações depois que a pull request passar por merge.
- A exibição da origem mostra as alterações na origem sem a formatação da exibição de diff avançado.

Também é possível optar por ignorar alterações de espaço em branco para obter uma exibição mais precisa das alterações importantes em uma pull request.

![Menu de opções para exibição de diff](/assets/images/help/pull_requests/diff-settings-menu.png)

Para simplificar a revisão das alterações em um pull request extenso, é possível filtrar o diff para mostrar apenas os tipos de arquivo selecionados, mostrar arquivos dos quais você é CODEOWNER, ocultar arquivos que você já visualizou ou ocultar arquivos excluídos. Para obter mais informações, confira "[Como filtrar arquivos em uma solicitação de pull por tipo de arquivo](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)".

  ![Menu suspenso File filter (Filtro de arquivo)](/assets/images/help/pull_requests/file-filter-menu.png)

## Motivos pelos quais os diffs não serão exibidos
- Você excedeu o limite total de arquivos ou de determinados tipos de arquivo. Para obter mais informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)".
- Seu arquivo corresponde a uma regra no arquivo *.gitattributes* do repositório para impedir que esse arquivo seja exibido por padrão. Para obter mais informações, confira "[Como personalizar o modo de exibição dos arquivos alterados no GitHub](/articles/customizing-how-changed-files-appear-on-github)".

## Comparações de diff do Git de três pontos e dois pontos

Há dois métodos de comparação para o comando `git diff`; dois pontos (`git diff A..B`) e três pontos (`git diff A...B`). Por padrão, as solicitações de pull no {% data variables.product.prodname_dotcom %} mostram uma comparação de três pontos.

### Comparação Git de três pontos 

A comparação de três pontos mostra a diferença entre a confirmação comum mais recente de ambos os branchs (base de mesclagem) e a versão mais recente do branch do tópico.

### Comparação Git de dois pontos

A comparação de dois pontos mostra a diferença entre o estado mais recente do branch base (por exemplo, `main`) e a versão mais recente do branch do tópico.

Para ver duas referências de committish em uma comparação de diff de dois pontos no {% data variables.product.prodname_dotcom %}, você pode editar o URL da página "Comparing changes" (Comparar alterações) do seu repositório. Para obter mais informações, confira ["committish" no Glossário do Git](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) do site do livro _Pro Git_.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Um diff de dois pontos compara duas referências de committish do Git, como SHAs ou IDs de objeto (OIDs, Object IDs), diretamente entre si. No {% data variables.product.prodname_dotcom %}, as referências de committish do Git em uma comparação de diff de dois pontos devem ser enviadas por push ao mesmo repositório ou para suas bifurcações.

Se desejar simular um diff de dois pontos em uma pull request e ver uma comparação entre as versões mais recentes de cada branch, você poderá fazer merge do branch base no branch de tópico, o que atualiza o último ancestral comum entre seus branches.

Para obter mais informações sobre os comandos do Git para comparar as alterações, confira "[Opções de comparação do Git](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)" no site do livro _Pro Git_.

## Sobre a comparação de três pontos no {% data variables.product.prodname_dotcom %}

Como a comparação de três pontos se compara com a base de mesclagem, ela se concentra "no que uma solicitação de pull apresenta". 

Quando você usa uma comparação de dois pontos, ela muda quando o branch base é atualizado, mesmo que você não tenha feito nenhuma alteração no branch do tópico. Além disso, uma comparação de dois pontos se concentra no branch base. Isso significa que tudo o que você adicionar é exibido como ausente do branch base, como se fosse uma exclusão e vice-versa. Como resultado, as alterações que o branch de tópico introduz tornam-se ambíguas.

Por outro lado, comparando os branches usando a comparação de três pontos, as alterações no branch de tópico estarão sempre na comparação se o branch base for atualizado, pois ela mostra todas as alterações desde que os branches divergiram.

### Mesclar com frequência

Para evitar ficar confuso, mescle o branch base (por exemplo, `main`) em seu branch de tópico com frequência. Ao mesclar o branch base, as comparações de dois pontos e três pontos mostradas são as mesmas. Recomendamos mesclar uma solicitação de pull o mais rápido possível. Isso incentiva os colaboradores a tornar as solicitações de pull menores, o que é recomendado em geral.

## Leitura adicional

- "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
