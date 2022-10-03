---
title: より大きなランナーへのアクセスの制御
intro: 'Organization または Enterprise に追加された {% data variables.actions.hosted_runner %} へのアクセスを、ポリシーを使って制限できます。'
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
type: tutorial
shortTitle: 'Controlling access to {% data variables.actions.hosted_runner %}s'
ms.openlocfilehash: 6761f05ef04d18ebba7b9ef8a2894d7effd2622b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147764022'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ランナー グループについて

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}詳しくは、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners)をご覧ください。{% endif %}

{% ifversion ghec or ghes or ghae %}

## Organization のランナー グループを作成する

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Enterprise のランナー グループを作成する

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## ランナー グループのアクセス ポリシーを変更する

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## ランナー グループの名前を変更する

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## ランナーをグループに移動する

{% data reusables.actions.moving-a-runner-to-a-group %}

## ランナー グループを削除する

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
