---
title: グループを使用してセルフホストランナーへのアクセスを管理する
shortTitle: Manage access with runner groups
intro: ポリシーを使用して、Organization または Enterprise に追加されたセルフホストランナーへのアクセスを制限できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120890'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} 特定のグループのランナーにジョブをルーティングする方法についての情報は、「[グループ内のランナーを選ぶ](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group)」を参照してください。
{% endif %}

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

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
