---
title: Fazer commit de alterações em um branch de pull request criado a partir de bifurcação
intro: Você pode fazer commit de alterações no branch de uma pull request que foi criada de uma bifurcação no seu repositório com permissão do criador da pull request.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Commit to PR branch from fork
ms.openlocfilehash: 123775ecbcc199382fe2082f22ad04db21fb9661
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127580'
---
Só é possível fazer commits em branches da pull request que:
- esteja aberta em um repositório em que você tem acesso push e que foi criada de uma bifurcação desse repositório
- estão em uma bifurcação de propriedade do usuário
- tiver permissão concedida pelo criador da pull request
- não têm [restrições de branch](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches) que impedirão você de fazer commit

Somente o usuário que criou a pull request pode dar a você permissão para fazer push de commits na bifurcação de propriedade do usuário. Para obter mais informações, confira "[Como permitir alterações em um branch de solicitação de pull criado com base em um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

{% note %}

**Observação:** você também pode fazer commits em um branch de solicitação de pull por meio de um fork do repositório com o {% data variables.product.product_location %} criando sua cópia (ou um fork) do fork do repositório e fazendo commit das alterações no mesmo branch principal no qual as alterações de solicitação de pull originais foram criadas. Para obter algumas diretrizes gerais, confira "[Como criar uma solicitação de pull por meio de um fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)".

{% endnote %}

1. No {% data variables.product.product_name %}, navegue até a página principal da bifurcação (ou cópia do repositório) onde o branch da pull request foi criado.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% tip %}

 **Dica:** se preferir clonar o fork usando o {% data variables.product.prodname_desktop %}, confira "[Como clonar um repositório para o {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)".

 {% endtip %}
4. Altere o diretório de trabalho atual para o local em que deseja baixar o diretório clonado.
  ```shell
  $ cd open-source-projects
  ```
5. Digite `git clone` e cole a URL copiada na Etapa 3.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. Pressione **Enter**. Seu clone local estará criado.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Dica:** a mensagem de erro "fatal: o caminho de destino 'REPOSITORY-NAME' já existe e não é um diretório vazio" significa que o diretório de trabalho atual já contém um repositório com o mesmo nome. Para resolver o erro, você deve clonar a bifurcação em outro diretório.

 {% endtip %}
7. Navegue para o seu novo repositório clonado.
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. Alterne branches para o branch de comparação da pull request onde as alterações originais foram feitas. Se você navegar até a pull request original, visualizará o branch de comparação no topo da pull request.
![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png) Neste exemplo, o branch de comparação é `test-branch`:
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **Dica:** para obter mais informações sobre os branches de solicitação de pull, incluindo exemplos, confira "[Como criar uma solicitação de pull](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)".

 {% endtip %}
8. Nesse ponto, você pode fazer qualquer coisa que desejar com este branch. É possível fazer push de novos commits para ele, executar alguns testes locais ou fazer merge de outros branches no branch. Faça modificações conforme desejado.
9. Depois de fazer commit de suas alterações no branch head da pull request, você pode fazer push de suas alterações até a pull request original diretamente. Neste exemplo, o branch principal é `test-branch`:
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

Seus novos commits serão refletidos na pull request original do {% data variables.product.product_location %}.

## Leitura Adicional

- "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
