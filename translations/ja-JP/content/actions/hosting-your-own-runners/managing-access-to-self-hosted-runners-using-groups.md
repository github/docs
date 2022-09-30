---
title: グループを使用してセルフホストランナーへのアクセスを管理する
intro: ポリシーを使用して、Organization または Enterprise に追加されたセルフホストランナーへのアクセスを制限できます。
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Using runner groups
ms.openlocfilehash: 8e4c5669c1579fa635534b2f4466c7645033fc0c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763588'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ランナー グループについて

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}詳しくは、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)をご覧ください。{% endif %}

{% ifversion ghec or ghes or ghae %}

## Organization のセルフホストランナーグループを作成する

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Enterprise のセルフホストランナーグループを作成する

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## セルフホストランナーグループのアクセスポリシーを変更する

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## ランナー グループの名前を変更する

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## セルフホスト ランナーをグループに自動的に追加する

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## セルフホストランナーをグループに移動する

{% data reusables.actions.moving-a-runner-to-a-group %}

## セルフホストランナーグループを削除する

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
