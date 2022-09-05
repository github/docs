---
title: Gerenciando o acesso aos executores auto-hospedados usando grupos
intro: Você pode usar políticas para limitar o acesso a executores auto-hospedados adicionados a uma organização ou empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Usando grupos de executores
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre grupos de executores

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Para obter mais informações, consulte a [Documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Criar um grupo de executor auto-hospedado para uma organização

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Criar um grupo de executor auto-hospedado para uma empresa

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Alterar a política de acesso de um grupo de executores auto-hospedados

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Alterando o nome de um grupo de executores

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Adicionando um executor auto-hospedado a um grupo automaticamente

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Mover um executor auto-hospedado para um grupo

{% data reusables.actions.moving-a-runner-to-a-group %}

## Remover um grupo de executor auto-hospedado

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
