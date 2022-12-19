---
title: アプリケーションのセキュリティベストプラクティス
intro: '{% data variables.product.prodname_marketplace %}上でセキュアなアプリケーションを共有する準備のガイドライン'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
  - /developers/github-marketplace/security-best-practices-for-apps
shortTitle: Security best practice
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: aaff313f73b74ba28f765050a8f993a9dddea1be
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089752'
---
以下のベストプラクティスに従えば、セキュアなユーザ体験を提供するための役に立つでしょう。

## 認可、認証、アクセスコントロール

OAuth AppよりもGitHub Appを作成することをおすすめします。 {% data reusables.marketplace.github_apps_preferred %}。 詳細については、「[GitHub アプリと OAuth アプリの違い](/apps/differences-between-apps/)」を参照してください。
- アプリケーションは、最小権限の原則を用い、アプリケーションが意図された機能を実行するために必要なOAuthのスコープとGitHub Appの権限だけをリクエストすべきです。 詳細については、「[最小権限の原則](https://en.wikipedia.org/wiki/Principle_of_least_privilege)」を参照してください。
- アプリケーションは、サポート担当者にメールや連絡をすることなく、顧客が自分のアカウントを削除する方法を提供しなければなりません。
- アプリケーションは、異なる実装間でトークンを共有してはなりません。 たとえば、デスクトップのアプリケーションはWebベースのアプリケーションとは別のトークンを持つべきです。 個々のトークンを使うことで、それぞれのアプリケーションはGitHubのリソースに必要なアクセスを個別にリクエストできます。
- ユーザの種類に応じて求められる機能によって、様々なユーザのロールを持たせてアプリケーションを設計してください。 たとえば、標準的なユーザは管理機能を利用できるべきではなく、支払いマネージャーはリポジトリのコードにプッシュアクセスできるべきではありません。
- アプリケーションは、SaaSサービスを管理するためのメールやデータベースサービスのようなサービスアカウントを共有するべきではありません。
- アプリケーションで使用されるすべてのサービスは、固有のログインとパスワードクレデンシャルを持たなければなりません。
- プロダクションのホスティングインフラストラクチャへの管理権限でのアクセスは、管理業務を持つエンジニアや従業員にのみ与えられるべきです。
- アプリでは、認証に個人アクセス トークンを使わず、[OAuth アプリ](/apps/about-apps/#about-oauth-apps)または [GitHub アプリ](/apps/about-apps/#about-github-apps)として認証するようにします。
  - OAuth アプリの場合は、認証に [OAuth トークン](/apps/building-oauth-apps/authorizing-oauth-apps/)を使うようにします。
  - GitHub アプリの場合は、認証に [JSON Web トークン (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)、[OAuth トークン](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)、[インストール アクセス トークン](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)のいずれかを使うようにします。

## データ保護

- アプリケーションは、パブリックなインターネット上で転送されるデータを、有効なTLS証明書を用いたHTTPSもしくはSSH for Gitで暗号化すべきです。
- アプリケーションは、クライアントIDとクライアントシークレットキーをセキュアに保存すべきです。 [環境変数](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables)として格納することをお勧めします。
- アプリケーションは、ユーザからの要求を受けてから30日以内、あるいはユーザのGitHubとの法的な関係が終了してから30日以内に、すべてのGitHubユーザデータを削除すべきです。
- アプリケーションは、ユーザにGitHubパスワードの提供を求めるべきではありません。
- アプリケーションは、トークン、クライアントID、クライアントシークレットを暗号化すべきです。

## ログ記録と監視

アプリケーションは、ロギング及びモニタリングの機能を持つべきです。 アプリケーションのログは最低でも30日間保存され、最低でも1年間アーカイブされるべきです。
セキュリティログは以下を含まなければなりません。

- 認証及び認可イベント
- サービス設定の変更
- オブジェクトの読み書き
- すべてのユーザ及びグループの権限変更
- ロールの管理者への昇格
- 各イベントに対する一貫したタイムスタンプ
- 記録されたすべてのアクションのソースユーザ、IPアドレス及びホスト名

## インシデント対応ワークフロー

ユーザのセキュアな体験を提供するためには、アプリケーションをリストする前に明確なインシデントレスポンスプランを用意しておくべきです。 サードパーティのベンダを利用するよりは、自社内にセキュリティ及び運用インシデントレスポンスチームを持つことをおすすめします。 インシデントの確認から24時間以内に{% data variables.product.product_name %}に通知する機能を持っていなければなりません。

インシデント対応ワークフローの例については、SANS Institute の Web サイトの「[データの侵害対応ポリシー](https://www.sans.org/information-security-policy/)」を参照してください。 インシデントが生じた際に取るべき明確なステップを記した短いドキュメントは、長いポリシーテンプレートよりも価値があります。

## 脆弱性管理とパッチ適用ワークフロー

プロダクションインフラストラクチャーの定期的な脆弱性スキャンを行わなければなりません。 脆弱性スキャンの結果をトリアージし、脆弱性の修正までの期間を定義して同意しなければなりません。

完全な脆弱性管理のプログラムをセットアップする準備ができていない場合は、パッチ適用のプロセスを作成することから始めると役立ちます。 パッチ管理ポリシーを作成する際のガイダンスについては、この TechRepublic の記事「[パッチ管理ポリシーの確立](https://www.techrepublic.com/article/establish-a-patch-management-policy-87756/)」を参照してください。
