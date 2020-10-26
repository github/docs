---
title: GitHubのサブプロセッサとCookie
redirect_from:
  - /subprocessors/
  - /github-subprocessors/
  - /github-tracking/
  - /github-cookies/
  - /articles/github-subprocessors-and-cookies
versions:
  free-pro-team: '*'
---

Effective date: **October 2, 2020**

GitHubは、お客様のデータを当社が利用する方法、お客様のデータを当社が収集する方法、およびお客様のデータを共有する対象について、高い透明性を提供します。 この目的のため、当社は[当社のサブプロセッサ](#github-subprocessors)、[クッキー](#cookies-on-github)の使用方法、および[GitHubにおけるトラッキング](#tracking-on-github)を実施する場所とその方法について説明するページをご用意しました。

### GitHubのサブプロセッサ

当社がお客様の情報を、ベンダーやサービスプロバイダなどのサードパーティーのサブプロセッサと共有する場合、それについては当社が責任を負います。 新たなベンダーとのやり取りを行う際に、当社はお客様の信頼を維持するため努力し、全てのベンダーに対して、 ユーザの個人情報 ([プライバシーについての声明](/articles/github-privacy-statement/)の定義による) に関する取り扱いを制限する、データ保護契約を締結するよう要求しています。

| サブプロセッサ名           | 処理の内容                           | 処理の場所 | Corporate Location |
|:------------------ |:------------------------------- |:----- |:------------------ |
| Automattic         | ブログサービス                         | 米国    | 米国                 |
| AWS Amazon         | データのホスティング                      | 米国    | 米国                 |
| Braintree (PayPal) | プランのクレジットカード決済処理業者              | 米国    | 米国                 |
| Clearbit           | マーケティングデータのエンリッチメントサービス         | 米国    | 米国                 |
| Discourse          | コミュニティフォーラムのソフトウェアプロバイダ         | 米国    | 米国                 |
| DiscoverOrg        | マーケティングデータのエンリッチメントサービス         | 米国    | 米国                 |
| Eloqua             | マーケティングキャンペーンの自動化               | 米国    | 米国                 |
| Google Apps        | 社内インフラストラクチャ                    | 米国    | 米国                 |
| Google Analytics   | Analytics and performance       | 米国    | 米国                 |
| LinkedIn Navigator | マーケティングデータのエンリッチメントサービス         | 米国    | 米国                 |
| Magic Robot        | キャンペーンレポート (Salesforceのアドオン)    | 米国    | 米国                 |
| MailChimp          | 顧客チケットメールサービスプロバイダ              | 米国    | 米国                 |
| Mailgun            | トランザクションメールサービスプロバイダ            | 米国    | 米国                 |
| Microsoft          | Microsoft Services              | 米国    | 米国                 |
| Monday.com         | チームコラボレーションおよびプロジェクト管理プラットフォーム  | 米国    | イスラエル              |
| Nexmo              | SMS通知プロバイダ                      | 米国    | 米国                 |
| Oracle             | 企業金融システム                        | 米国    | 米国                 |
| Salesforce.com     | 顧客関係管理                          | 米国    | 米国                 |
| Sendgrid           | トランザクションメールサービスプロバイダ            | 米国    | 米国                 |
| Sentry.io          | Application monitoring provider | 米国    | 米国                 |
| Stripe             | 決済プロバイダ                         | 米国    | 米国                 |
| Twilio             | SMS通知プロバイダ                      | 米国    | 米国                 |
| Zendesk            | カスタマーサポートのチケットシステム              | 米国    | 米国                 |
| Zuora              | 企業課金システム                        | 米国    | 米国                 |

当社ユーザの個人情報を取り扱う新たなサブプロセッサとやり取りを始める際、サブプロセッサと解約する際、およびサブプロセッサの利用方法を変更する際は、このページを更新します。 新たなサブプロセッサについての質問や懸念がある場合は、 {% data variables.contact.contact_privacy %}からお気軽にお問い合わせください。

### GitHub上のクッキー

GitHub uses cookies and similar technologies (collectively, “cookies”) to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience. Please take a look at our [Privacy Statement](/github/site-policy/github-privacy-statement#our-use-of-cookies-and-tracking) if you’d like more information about cookies, and on how and why we use them.

Since the number and names of cookies may change,the table below may be updated from time to time.

| Service Provider   | Cookie Name                          | 説明                                                                                                                                         | Expiration*                                                   |
|:------------------ |:------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------- |
| GitHub             | `app_manifest_token`                 | This cookie is used during the App Manifest flow to maintain the state of the flow during the redirect to fetch a user session.            | five minutes                                                  |
| GitHub             | `cookie-preferences`                 | This cookie is used to track user cookie preferences.                                                                                      | one year                                                      |
| GitHub             | `_device_id`                         | This cookie is used to track recognized devices.                                                                                           | one year                                                      |
| GitHub             | `dotcom_user`                        | このクッキーは、ユーザがすでにログインしていることを当社に通知するために使用されます。                                                                                                | one year                                                      |
| GitHub             | `_gh_ent`                            | This cookie is used for temporary application and framework state between pages like what step the customer is on in a multiple step form. | two weeks                                                     |
| GitHub             | `_gh_sess`                           | このクッキーは、ユーザが複数のステップのうちどのステップにあるのかなど、一時アプリケーションおよびフレームワークにおけるページ間での状態を記録するために使用されます。                                                        | セッション                                                         |
| GitHub             | `gist_oauth_csrf`                    | このクッキーは、OAuthフローを開始したユーザが、それを完了したユーザと同一であることを保証するために、Gistによって設定されます。                                                                       | deleted when oauth state is validated                         |
| GitHub             | `gist_user_session`                  | このクッキーは、別のホストで実行されている場合にGistによって使用されます。                                                                                                    | two weeks                                                     |
| GitHub             | `has_recent_activity`                | This cookie is used to prevent showing the security interstitial to users that have visited the app recently.                              | one hour                                                      |
| GitHub             | `__Host-gist_user_session_same_site` | このクッキーは、SameSiteクッキーをサポートするブラウザが、リクエストがGitHubから発信されているかどうかを確認できるように設定されます。                                                                 | two weeks                                                     |
| GitHub             | `__Host-user_session_same_site`      | このクッキーは、SameSiteクッキーをサポートするブラウザが、リクエストがGitHubから発信されているかどうかを確認できるように設定されます。                                                                 | two weeks                                                     |
| GitHub             | `logged_in`                          | このクッキーは、ユーザがすでにログインしていることを当社に通知するために使用されます。                                                                                                | one year                                                      |
| GitHub             | `marketplace_repository_ids`         | This cookie is used for the marketplace installation flow.                                                                                 | one hour                                                      |
| GitHub             | `marketplace_suggested_target_id`    | This cookie is used for the marketplace installation flow.                                                                                 | one hour                                                      |
| GitHub             | `_octo`                              | This cookie is used by our internal analytics service to distinguish unique users and clients.                                             | one year                                                      |
| GitHub             | `org_transform_notice`               | This cookie is used to provide notice during organization transforms.                                                                      | one hour                                                      |
| GitHub             | `private_mode_user_session`          | This cookie is used for Enterprise authentication requests.                                                                                | two weeks                                                     |
| GitHub             | `saml_csrf_token`                    | このクッキーは、トークンをクライアントに関連付けるために、SAML認証パスメソッドによって設定されます。                                                                                       | until user closes browser or completes authentication request |
| GitHub             | `saml_csrf_token_legacy`             | このクッキーは、トークンをクライアントに関連付けるために、SAML認証パスメソッドによって設定されます。                                                                                       | until user closes browser or completes authentication request |
| GitHub             | `saml_return_to`                     | このクッキーは、SAML認証ループ時に、状態を維持するためSAML認証パスメソッドによって設定されます。                                                                                       | until user closes browser or completes authentication request |
| GitHub             | `saml_return_to_legacy`              | このクッキーは、SAML認証ループ時に、状態を維持するためSAML認証パスメソッドによって設定されます。                                                                                       | until user closes browser or completes authentication request |
| GitHub             | `tz`                                 | このクッキーにより、ブラウザがどのお客様がどのタイムゾーンにいるか、ブラウザから当社に通知されます。                                                                                         | セッション                                                         |
| GitHub             | `user_session`                       | このクッキーはログインに使用されます。                                                                                                                        | two weeks                                                     |
| Google Analytics** | `_ga`                                | このクッキーは、Googleアナリティクスにより使用されます。                                                                                                            | two years                                                     |
| Google Analytics** | `_gat`                               | このクッキーは、Googleアナリティクスにより使用されます。                                                                                                            | one minute                                                    |
| Google Analytics** | `_gid`                               | このクッキーは、Googleアナリティクスにより使用されます。                                                                                                            | one day                                                       |

_*_ The **expiration** dates for the cookies listed below generally apply on a rolling basis.

_**_ We use **Google Analytics** as a third party analytics service to collect information about how our website performs and how our users, in general, navigate through and use GitHub. This helps us evaluate our users' use of GitHub, compile statistical reports on activity, and improve our content and website performance.

You can control your Google Analytics cookie preferences through our cookie preference link located at the footer of our website. In addition, Google provides further information about its own privacy practices and [offers a browser add-on to opt out of Google Analytics tracking](https://tools.google.com/dlpage/gaoptout).

(!) Please note certain pages on our website may set other third party cookies. たとえば、クッキーを設定するサイトから、動画などのコンテンツを埋め込むことがあります。 第三者のクッキーは最小限に保つよう努めていますが、当社は第三者のコンテンツが設定するクッキーを常に管理できるわけではありません。

### GitHub上のトラッキング

"[Do Not Track](https://www.eff.org/issues/do-not-track)" (DNT) is a privacy preference you can set in your browser if you do not want online services to collect and share certain kinds of information about your online activity from third party tracking services. GitHubは、ブラウザのDNTシグナルに応答し、[DNTシグナルへの応答についてのW3C基準](https://www.w3.org/TR/tracking-dnt/)に従います。 トラッキングを望まないことを通知するようブラウザに対して設定したい場合、この通知を有効化する方法について、ブラウザのドキュメントをご確認ください。 [Privacy Badger](https://www.eff.org/privacybadger)など、トラッキングをブロックする良いアプリケーションもあります。

DNTをサポートするブラウザでDNTを有効にしていない場合、当社のウェブサイ」のうち一部は、お客様の他のサービスにおけるオンラインブラウジングアクティビティを繰り返しトラッキングします。ただし、当社は、当社のアナリティクスおよびサービスプロバイダ以外の第三者に対して、GitHub上のユーザのアクティビティを繰り返しトラッキングすることを許可しません。 We have agreements with certain vendors, such as analytics providers, who help us track visitors' movements on certain pages on our website. 当社を代行して個人情報を収集しているベンダーのみが、当社のページ上のデータを収集することができます。当社は、当社を代行してこのデータを収集する各ベンダーとデータ保護契約を締結しています。 当社は、これらのベンダーから受け取ったデータを使用して、訪問者の関心をより深く理解し、当社のウェブサイトのパフォーマンスを把握し、コンテンツを改善します。 Any analytics vendor will be listed in our [subprocessor list](#github-subprocessors), and you may see a list of every page where we collect this kind of data below.
