---
title: Sobre revisões obrigatórias para pull requests
intro: As revisões obrigatórias garantem que as pull requests tenham um número específico de revisões de aprovação antes que os colaboradores possam fazer alterações em um branch protegido.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Se você aplicou proteções de branch no repositório, será possível configurar as revisões obrigatórias. Para obter mais informações sobre como aplicar proteções de branch, consulte "[Configurar branches protegidos](/articles/configuring-protected-branches/)". Para obter mais informações sobre como configurar revisões obrigatórias, consulte "[Habilitar revisões obrigatórias para pull requests](/articles/enabling-required-reviews-for-pull-requests)".

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Se uma pessoa com permissões de *administrador* escolher a opção **Request changes** (Solicitar alterações) em uma revisão, essa pessoa deverá aprovar a pull request antes que ela possa sofrer merge. Se um revisor que solicita alterações em uma pull request não estiver disponível, qualquer pessoa com permissão de *administrador* ou de *gravação* para o repositório poderá ignorar a revisão de bloqueio. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/articles/dismissing-a-pull-request-review)".

{% note %}

**Observação:** os administradores de repositório podem restringir a capacidade de ignorar revisões de pull request para pessoas ou equipes específicas. Para obter mais informações, consulte "[Habilitar revisões obrigatórias para pull requests](/articles/enabling-required-reviews-for-pull-requests)".

{% endnote %}

Se você fizer push de um commit que modifica o código no branch de uma pull request aprovada, a aprovação poderá ser ignorada se os administradores de repositório tiverem configurado dispensas de revisão obsoleta. Para obter mais informações, consulte "[Habilitar revisões obrigatórias para pull requests](/articles/enabling-required-reviews-for-pull-requests)". Isso não se aplica se você fizer push dos commits non-code-modifying, como mesclar o branch base no branch de sua pull request. Para obter mais informações sobre branch base, consulte "[Sobre pull requests](/articles/about-pull-requests)".

A menos que as revisões obrigatórias tenham sido configuradas para incluir administradores do repositório, as pessoas com permissões de *administrador* podem fazer merge de uma pull request independentemente das revisões de outros administradores.

{% data reusables.repositories.review-policy-overlapping-commits %}

Não é possível fazer merge de uma pull request em um branch protegido até que alguém com permissões de *gravação* ou *administrador* a aprove. Se houver revisões pendentes ou rejeitadas, você receberá uma mensagem de erro:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```
