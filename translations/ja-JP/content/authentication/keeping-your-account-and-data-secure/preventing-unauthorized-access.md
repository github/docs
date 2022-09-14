---
title: 許可されていないアクセスを防止する
intro: '[Heartbleed Bug](http://heartbleed.com/) での検出など、セキュリティ インシデントについては、メディアで警告を見たことがあるかもしれません。そうでなければ、{% data variables.product.product_location %} にサインインしている間にコンピューターから情報を盗まれている可能性があります。 そのような場合でも、パスワードを変更すれば、アカウントやプロジェクトにこれ以上不正にアクセスされるのを防ぐことができます。'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: 2b7a29ad3df05ef758c82330f24fe7568e137130
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088439'
---
{% data variables.product.product_name %} では、新しい SSH キーを追加する、アプリケーションを認証する、Team メンバーを変更するといった重要なアクションを実行するとき、パスワードが要求されます。

アカウントのセキュリティを保つために、パスワードを変更してから次のアクションを実行するようにしてください:

- ご自分のアカウントで [2 要素認証を有効](/articles/about-two-factor-authentication)にして、アクセスにパスワード以外のものも必要になるようにします。
- [SSH キー](/articles/reviewing-your-ssh-keys)、[デプロイ キー](/articles/reviewing-your-deploy-keys)、[許可された統合](/articles/reviewing-your-authorized-integrations)をレビューして、SSH とアプリケーションの設定で許可されていないまたは見慣れないアクセスを取り消します。
{% ifversion fpt or ghec %}
- [すべてのメール アドレスを確認します](/articles/verifying-your-email-address)。 攻撃者があなたのアカウントにメールアドレスを追加していた場合、予想外のパスワードリセットの実行を許してしまう可能性があります。
{% endif %}
- [アカウントのセキュリティ ログをレビューします](/github/authenticating-to-github/reviewing-your-security-log)。 これで、リポジトリに対する各種の設定について概要がわかります。 たとえば、プライベートリポジトリがパブリックに変更されていないか、リポジトリが移譲されていないかを確認できます。
- リポジトリの [Webhook をレビュー](/articles/creating-webhooks)します。 webhook では、攻撃者がリポジトリへのプッシュを傍受する可能性があります。
- [新しいデプロイ キーが作成されていないことを確認します](/guides/managing-deploy-keys/#deploy-keys)。 デプロイキーがあると、外部サーバーがあなたのプロジェクトにアクセスできる恐れがあります。
- リポジトリに対する最近のコミットをレビューします。
- リポジトリごとにコラボレーターのリストをレビューします。
