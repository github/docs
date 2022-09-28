---
title: Localizar métodos e funções modificados em uma pull request
intro: 'É possível encontrar facilmente as modificações propostas para um método ou função em uma solicitação de pull em arquivos *.go*, *.js*, *.ts*, *.py*, *.php* e *.rb*.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127942'
---
Qualquer pessoa com acesso de leitura em um repositório pode visualizar uma lista das modificações de funções e métodos em determinados arquivos de uma pull request.

O resumo da lista de métodos e funções é criado a partir destes tipos de arquivos compatíveis:
  - Go
  - JavaScript (inclui Typescript, Flow e outros tipos de JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request onde você quer localizar os métodos e funções modificados.
{% data reusables.repositories.changed-files %}
4. Para ver uma lista de resumo das funções e dos métodos alterados, clique em **Ir para…** . ![Menu suspenso Ir para](/assets/images/help/pull_requests/jump-to-menu.png)
5. Selecione a função ou método modificado no menu suspenso. Também é possível inserir o nome da função ou método para filtrar os resultados.
  ![Filtrar funções e métodos](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Observação:** caso não veja as funções ou os métodos esperados, confirme se o seu código é compilado e se não contém erros. Somente as funções e os métodos alterados nesta solicitação de pull e encontrados nos arquivos *.go*, *.js*, *.ts*, *.py*, *.php* e *.rb* aparecem no menu suspenso.

 {% endnote %}

6. Você será redirecionado à primeira linha da função ou método selecionado.
 ![ver a função ou o método em arquivos modificados](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## Leitura adicional

- "[Sobre a comparação de branches em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[Como filtrar arquivos por tipo de arquivo em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)"
