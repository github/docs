---
title: Organization で 2 要素認証の義務化を準備する
intro: 2 要素認証を義務化する前に、予定されている変更についてユーザに通知し、どのユーザーが 2 要素認証をすでに使用しているかを確認することができます。
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to require 2FA
ms.openlocfilehash: 67083113143145a6de7bba5412568609414f12a8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130799'
---
Organization で 2 要素認証を義務付ける 1 週間以上前に、{% ifversion fpt or ghec %}Organization のメンバー、外部コラボレーター、課金マネージャー {% else %}Organization のメンバーと外部コラボレーター{% endif %}に通知することをおすすめします。

Organization で 2 要素認証を必須にすると、2 要素認証を使わないメンバー、外部コラボレーター、および支払いマネージャー (ボットアカウントを含む) は Organization から削除され、そのリポジトリにアクセスできなくなります。 Organization のプライベートリポジトリのフォークへのアクセスも失います。

組織で 2 要素認証を必須にする前に、次の準備をすることをおすすめします:
  - 自分の個人アカウントで [2FA を有効にする](/articles/securing-your-account-with-two-factor-authentication-2fa/)
  - Organization のユーザに、自分のアカウントで 2 要素認証をセットアップするよう指示する
  - [Organization 内のユーザーが 2 要素認証を有効にしているかどうか](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)を確認する
  - 2 要素認証が有効になると、2 要素認証を使っていないユーザは自動的に Organization から削除されることを告知する
