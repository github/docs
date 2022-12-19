---
title: Sobre modelos de desenvolvimento colaborativo
intro: O modo como você usa pull requests depende do tipo de modelo de desenvolvimento usado no projeto. Você pode usar a bifurcação e o modelo de pull ou o modelo de repositório compartilhado.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
ms.openlocfilehash: 2a054071dc801ac035f3925e81895200c0a7375d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139181'
---
## Modelo de bifurcação e pull

No fork e pull model, qualquer um pode bifurcar um repositório existente e fazer push das alterações em sua bifurcação pessoal. Você não precisa de permissão ao repositório de origem para fazer push em uma bifurcação de propriedade do usuário. As alterações podem ser enviadas por pull no repositório de origem pelo mantenedor do projeto. Ao abrir uma pull request propondo alterações a partir de sua bifurcação de propriedade de usuário para um branch no repositório de origem (upstream), você poderá permitir que qualquer pessoa com acesso push ao repositório upstream faça alterações na sua pull request.  Esse modelo é popular entre projetos de código aberto, pois ele reduz a resistência de novos contribuidores, além de permitir que as pessoas trabalhem de modo independente sem coordenação inicial.

{% tip %}

**Dica:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## Modelo de repositório compartilhado

No modelo de repositório compartilhado, os colaboradores recebem acesso de push a um só repositório compartilhado, e os branches do tópico são criados quando as alterações precisam ser feitas. As pull requests são úteis nesse modelo, uma vez que iniciam a revisão de código e a discussão geral sobre um conjunto de alterações antes que elas sofram merge no branch de desenvolvimento principal. Esse modelo é mais predominante em equipes e organizações pequenas que colaboram em projetos privados.

## Leitura adicional

- "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Como criar uma solicitação de pull com base em um fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[Como permitir alterações em um branch de solicitação de pull criado com base em um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
