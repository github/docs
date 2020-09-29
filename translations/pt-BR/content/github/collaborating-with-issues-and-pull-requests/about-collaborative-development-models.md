---
title: Sobre modelos de desenvolvimento colaborativo
intro: O modo como você usa pull requests depende do tipo de modelo de desenvolvimento usado no projeto.
redirect_from:
  - /articles/types-of-collaborative-development-models/
  - /articles/about-collaborative-development-models
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Há dois tipos principais de modelo de desenvolvimento com os quais é possível usar pull requests. No *fork e pull model*, qualquer um pode bifurcar um repositório existente e fazer push das alterações em sua bifurcação pessoal. Você não precisa de permissão ao repositório de origem para fazer push em uma bifurcação de propriedade do usuário. As alterações podem ser enviadas por pull no repositório de origem pelo mantenedor do projeto. Ao abrir uma pull request propondo alterações a partir de sua bifurcação de propriedade de usuário para um branch no repositório de origem (upstream), você poderá permitir que qualquer pessoa com acesso push ao repositório upstream faça alterações na sua pull request.  Esse modelo é popular entre projetos de código aberto, pois ele reduz a resistência de novos contribuidores, além de permitir que as pessoas trabalhem de modo independente sem coordenação inicial.

{% tip %}

**Dica:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning-lab %}

{% endtip %}

No *modelo de repositório compartilhado*, os colaboradores recebem acesso push a um único repositório compartilhado e branches de tópico são criados quando alterações precisam ser feitas. As pull requests são úteis nesse modelo, uma vez que iniciam a revisão de código e a discussão geral sobre um conjunto de alterações antes que elas sofram merge no branch de desenvolvimento principal. Esse modelo é mais predominante em equipes e organizações pequenas que colaboram em projetos privados.

### Leia mais

- "[Sobre pull requests](/articles/about-pull-requests)"
- "[Criar uma pull request de uma bifurcação](/articles/creating-a-pull-request-from-a-fork)"
- "[Permitir alterações em um branch de pull request criada de uma bifurcação](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
