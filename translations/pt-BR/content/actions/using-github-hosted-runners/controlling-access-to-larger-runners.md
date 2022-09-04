---
title: Controlando o acesso a executores maiores
intro: 'Você pode usar políticas para limitar o acesso a {% data variables.actions.hosted_runner %}s que foram adicionados a uma organização ou empresa.'
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
type: tutorial
shortTitle: 'Controlando acesso a {% data variables.actions.hosted_runner %}s'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre grupos de executores

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Para obter mais informações, consulte a [ documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Criando um grupo de executores para uma organização

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Criando um grupo de executores para uma empresa

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Alterando a política de acesso de um grupo de executores

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Alterando o nome de um grupo de executores

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Transferindo um executor para um grupo

{% data reusables.actions.moving-a-runner-to-a-group %}

## Removendo um grupo de executores

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
