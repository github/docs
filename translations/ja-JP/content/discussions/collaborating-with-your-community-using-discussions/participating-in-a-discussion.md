---
title: ディスカッションに参加する
intro: '{% data variables.product.product_name %} のプロジェクトのリポジトリ内のフォーラムで、コミュニティやメンテナと会話することができます。'
permissions: 'People with read access to a repository can participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can participate in discussions and polls in that organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
shortTitle: Participate in discussion
ms.openlocfilehash: 07db8d3583c218e592ca1b68171292e52fcfc12f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410236'
---
## ディスカッションへの参加について

{% data reusables.discussions.about-discussions %} 詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

ディスカッションおよびポーリングの開始または表示に加えて、ディスカッションの作者のコメントに対してコメントすることができます。 また、ディスカッション内で別のコミュニティメンバーが行った個々のコメントに返信してコメントスレッドを作成し、絵文字でコメントにリアクションすることもできます。

{% ifversion fpt or ghec %}{% data variables.product.product_name %} で、ユーザーをブロックし、破壊的なコンテンツを報告して、安全で快適な環境を維持できます。 詳しくは、「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)」をご覧ください。{% endif %}

## 前提条件

リポジトリまたは組織のディスカッションに参加するには、そのリポジトリまたは組織に対して {% data variables.product.prodname_discussions %} を有効にする必要があります。 詳細については、「[リポジトリの {% data variables.product.prodname_discussions %} の有効化または無効化](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)」および「[組織の GitHub ディスカッションの有効化または無効化](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)」を参照してください。

## ディスカッションを作成する

{% data reusables.discussions.starting-a-discussion %}

## ポーリングの作成

{% data reusables.discussions.starting-a-poll %}

## コメントを回答としてマークする

リポジトリのトリアージロール以上のディスカッション作者およびユーザは、コメントをリポジトリ内のディスカッションへの回答としてマークできます。
同様に、ディスカッション作成者と、組織のディスカッションのソース リポジトリのトリアージ ロール以上のユーザーは、コメントを組織内のディスカッションへの回答としてマークできます。

{% data reusables.discussions.marking-a-comment-as-an-answer %}
