---
title: Gerenciar o acesso a executores auto-hospedados usando grupos
shortTitle: Manage access with runner groups
intro: Você pode usar políticas para limitar o acesso a executores auto-hospedados adicionados a uma organização ou empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
ms.openlocfilehash: c6f53c3698800de519fe34231a8faf37924eacaa
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120886'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} Para obter informações sobre como rotear trabalhos para executores em um grupo específico, confira "[Escolher executores em um grupo](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group)."
{% endif %}

## Sobre os grupos de executores

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Para obter mais informações, confira a documentação [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

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

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
