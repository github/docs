---
title: Administrar el acceso a los ejecutores auto-hospedados utilizando grupos
intro: Puedes utilizar políticas para limitar el acceso a los ejecutores auto-hospedados que se hayan agregado a una organización o empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Using runner groups
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About runner groups

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Crear un grupo de ejecutores auto-hospedados para una organización

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Crear un grupo de ejecutores auto-hospedados para una empresa

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Cambiar la política de acceso de un grupo de ejecutores auto-hospedados

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Cambiar el nombre de un grupo de ejectuores

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Agregar ejecutores auto-hospedados a un grupo automáticamente

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Mover un ejecutor auto-hospedado a un grupo

{% data reusables.actions.moving-a-runner-to-a-group %}

## Eliminar un grupo de ejecutores auto-hospedados

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
