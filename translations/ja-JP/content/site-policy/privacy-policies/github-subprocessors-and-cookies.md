---
title: GitHub の下請処理者と Cookie
redirect_from:
  - /subprocessors
  - /github-subprocessors
  - /github-tracking
  - /github-cookies
  - /articles/github-subprocessors-and-cookies
  - /github/site-policy/github-subprocessors-and-cookies
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: b8072adbca2f5e42acd5dda3b8d213dd795c13be
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099221'
---
発効日: **2021 年 4 月 2 日**

GitHub は、お客様のデータを当社がどのように利用するか、お客様のデータを当社がどのように収集するか、およびお客様のデータを誰と共有するかについて、高い透明性を提供します。 この目的のため、[当社の下請処理者](#github-subprocessors)および [Cookie](#cookies-on-github) をどのように使用するかについてこのページで説明します。

## GitHub の下請処理者

当社がお客様の情報を、ベンダーやサービス プロバイダーなどの第三者の下請処理者と共有する場合、それについては当社が責任を負います。 新たなベンダーとのやり取りを行う際に、当社はお客様の信頼を維持するため努力し、すべてのベンダーに対して、ユーザーの個人情報 ([プライバシーに関する声明](/articles/github-privacy-statement/)の定義による) に関する取り扱いを制限する、データ保護契約を締結するように要求しています。 下請処理者一覧の更新情報を受け取るには、[こちら](https://www.github.com/privacy/subprocessors)から登録してください。

| 下請処理者の名前 | 処理の説明 | 処理の場所 | 企業所在地
|:---|:---|:---|:---|
| Automattic | ブログ サービス | 米国 | 米国 |
| AWS Amazon | データのホスティング | 米国 | 米国 |
| Braintree (PayPal) | サブスクリプションのクレジット カード決済処理業者 | 米国 | 米国 |
| Clearbit | マーケティング データのエンリッチメント サービス | 米国 | 米国 |
| Discourse | コミュニティ フォーラムのソフトウェア プロバイダー | 米国 | 米国 |
| Eloqua | マーケティング キャンペーンの自動化 | 米国 | 米国 |
| Google Apps | 社内インフラストラクチャ | 米国 | 米国 |
| MailChimp | 顧客チケット メール サービス プロバイダー | 米国 | 米国 |
| Mailgun | トランザクション メール サービス プロバイダー | 米国 | 米国 |
| マイクロソフト | Microsoft Services | 米国 | 米国 |
| Nexmo | SMS 通知プロバイダー | 米国 | 米国 |
| Salesforce.com | Customer Relationship Management | 米国 | 米国 |
| Sentry.io | アプリケーション監視プロバイダー | 米国 | 米国 |
| Stripe | 決済プロバイダー | 米国 | 米国 |
| Twilio &amp; Twilio Sendgrid | SMS 通知プロバイダーおよびトランザクション メール サービス プロバイダー | 米国 | 米国 |
| Zendesk | カスタマー サポートのチケット システム | 米国 | 米国 |
| Zuora | 企業課金制 | 米国 | 米国 |

当社ユーザーの個人情報を取り扱う新たな下請処理者とやり取りを始める際、下請処理者と解約する際、および下請処理者の利用方法を変更する際は、このページを更新します。 新たな下請処理者についての質問や懸念がある場合は、お気軽にお問い合わせください。 {% data variables.contact.contact_privacy %} からお問い合わせください。

## GitHub の Cookie

GitHub は、Web サイトを提供および保護し、Web サイトの利用状況を分析して優れたユーザー エクスペリエンスを提供するために Cookie を使用します。 Cookie に関する詳細な情報や、その使用方法と使用する理由については、当社の[プライバシーに関する声明](/github/site-policy/github-privacy-statement#our-use-of-cookies-and-tracking)を参照してください。 
 
Cookie の数や名前は変わることがあるため、以下の表も適時更新されることがあります。

| サービス プロバイダー | Cookie の名前 | 説明 | 有効期限* |
|:---|:---|:---|:---|
| GitHub | `app_manifest_token` | この Cookie は、リダイレクト中のユーザー セッションをフェッチし、フローの状態を維持するため、App Manifest フロー中に使用されます。 | 5 分間 |
| GitHub | `color_mode` | この Cookie は、ユーザーが選択したテーマ設定を示すために使用されます。 | セッション | 
| GitHub | `_device_id` | この Cookie は、セキュリティ上の目的により、認識されたデバイスを追跡するために使用されます。 | 1 年間 |
| GitHub | `dotcom_user` | この Cookie は、ユーザーが既にログインしていることを当社に通知するために使用されます。 | 1 年間 |
| GitHub | `_gh_ent` | この Cookie は、お客様が複数のステップのうちどのステップにあるのかなど、一時的なアプリケーションおよびフレームワークにおけるページ間での状態を記録するために使用されます。 | 2 週間 | 
| GitHub | `_gh_sess` | この Cookie は、ユーザーが複数のステップのうちどのステップにあるのかなど、一時的なアプリケーションおよびフレームワークにおけるページ間での状態を記録するために使用されます。 | セッション |
| GitHub | `gist_oauth_csrf` | この Cookie は、OAuth フローを開始したユーザーが、それを完了したユーザーと同一であることを保証するために、Gist によって設定されます。 | OAuth state の検証後に削除 |
| GitHub | `gist_user_session` | この Cookie は、別のホストで実行されている場合に Gist によって使用されます。 | 2 週間 |
| GitHub | `has_recent_activity` | この Cookie は、アプリケーションに最近アクセスしたユーザーにセキュリティ インタースティシャルを表示させないために使用されます。 | 1 時間 | 
| GitHub | `__Host-gist_user_session_same_site` | この Cookie は、SameSite Cookie をサポートするブラウザーが、要求が GitHub から発信されているかどうかを確認できるように設定されます。 | 2 週間 | 
| GitHub | `__Host-user_session_same_site` | この Cookie は、SameSite Cookie をサポートするブラウザーが、要求が GitHub から発信されているかどうかを確認できるように設定されます。 | 2 週間 | 
| GitHub | `logged_in` | この Cookie は、ユーザーが既にログインしていることを当社に通知するために使用されます。 | 1 年間 | 
| GitHub | `marketplace_repository_ids` | この Cookie は、Marketplace のインストール フローに使用されます。 | 1 時間 |
| GitHub | `marketplace_suggested_target_id` | この Cookie は、Marketplace のインストール フローに使用されます。 | 1 時間 |
| GitHub | `_octo` | この Cookie は、動的コンテンツのキャッシング、条件付き機能へのアクセス、サポート要請のメタデータ、ファースト パーティ分析などのセッション管理に使用されます。 | 1 年間 | 
| GitHub | `org_transform_notice` | この Cookie は、組織の改変時に通知を行うために使用されます。 | 1 時間 |
| GitHub | `private_mode_user_session` |  この Cookie は、Enterprise 認証要求に使用されます。 | 2 週間 |
| GitHub | `saml_csrf_token` | この Cookie は、トークンをクライアントに関連付けるために、SAML 認証パス メソッドによって設定されます。 | ユーザーがブラウザーを閉じるか、認証要求を完了するまで |
| GitHub | `saml_csrf_token_legacy` | この Cookie は、トークンをクライアントに関連付けるために、SAML 認証パス メソッドによって設定されます。 | ユーザーがブラウザーを閉じるか、認証要求を完了するまで |
| GitHub | `saml_return_to` | この Cookie は、SAML 認証ループ時に、状態を維持するため SAML 認証パス メソッドによって設定されます。 | ユーザーがブラウザーを閉じるか、認証要求を完了するまで |
| GitHub | `saml_return_to_legacy` | この Cookie は、SAML 認証ループ時に、状態を維持するため SAML 認証パス メソッドによって設定されます。 | ユーザーがブラウザーを閉じるか、認証要求を完了するまで |
| GitHub | `tz` | この Cookie を使用すると、タイムゾーンに合わせてタイムスタンプをカスタマイズできます。 | セッション | 
| GitHub | `user_session` | この Cookie はログインに使用されます。 | 2 週間 |

_*_ 以下に挙げる Cookie の **有効期限** 日は通常、随時適用されます。

(!)当社は第三者による Cookie の使用を、外部コンテンツをレンダリングする際に必要な外部機能を提供するために必要なものに限って使用していますが、当社の特定の Web ページにおいてはその他の第三者の Cookie が設置される場合があります。 たとえば、Cookie を設定するサイトから、動画などのコンテンツを埋め込むことがあります。 当社は、第三者の Cookie の使用を最小限に抑制するように努めていますが、当社は第三者のコンテンツがどの Cookie 設定するかを常に管理できるわけではありません。
