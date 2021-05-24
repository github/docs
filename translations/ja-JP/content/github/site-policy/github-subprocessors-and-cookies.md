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
topics:
  - Policy
  - Legal
---

Effective date: **April 2, 2021**

GitHubは、お客様のデータを当社が利用する方法、お客様のデータを当社が収集する方法、およびお客様のデータを共有する対象について、高い透明性を提供します。 To that end, we provide this page, which details [our subprocessors](#github-subprocessors), and how we use [cookies](#cookies-on-github).

### GitHubのサブプロセッサ

当社がお客様の情報を、ベンダーやサービスプロバイダなどのサードパーティーのサブプロセッサと共有する場合、それについては当社が責任を負います。 新たなベンダーとのやり取りを行う際に、当社はお客様の信頼を維持するため努力し、全てのベンダーに対して、 ユーザの個人情報 ([プライバシーについての声明](/articles/github-privacy-statement/)の定義による) に関する取り扱いを制限する、データ保護契約を締結するよう要求しています。

| サブプロセッサ名                 | 処理の内容                                                           | 処理の場所 | Corporate Location |
|:------------------------ |:--------------------------------------------------------------- |:----- |:------------------ |
| Automattic               | ブログサービス                                                         | 米国    | 米国                 |
| AWS Amazon               | データのホスティング                                                      | 米国    | 米国                 |
| Braintree (PayPal)       | プランのクレジットカード決済処理業者                                              | 米国    | 米国                 |
| Clearbit                 | マーケティングデータのエンリッチメントサービス                                         | 米国    | 米国                 |
| Discourse                | コミュニティフォーラムのソフトウェアプロバイダ                                         | 米国    | 米国                 |
| Eloqua                   | マーケティングキャンペーンの自動化                                               | 米国    | 米国                 |
| Google Apps              | 社内インフラストラクチャ                                                    | 米国    | 米国                 |
| MailChimp                | 顧客チケットメールサービスプロバイダ                                              | 米国    | 米国                 |
| Mailgun                  | トランザクションメールサービスプロバイダ                                            | 米国    | 米国                 |
| Microsoft                | Microsoft Services                                              | 米国    | 米国                 |
| Nexmo                    | SMS通知プロバイダ                                                      | 米国    | 米国                 |
| Salesforce.com           | 顧客関係管理                                                          | 米国    | 米国                 |
| Sentry.io                | Application monitoring provider                                 | 米国    | 米国                 |
| Stripe                   | 決済プロバイダ                                                         | 米国    | 米国                 |
| Twilio & Twilio Sendgrid | SMS notification provider & transactional mail service provider | 米国    | 米国                 |
| Zendesk                  | カスタマーサポートのチケットシステム                                              | 米国    | 米国                 |
| Zuora                    | 企業課金システム                                                        | 米国    | 米国                 |

当社ユーザの個人情報を取り扱う新たなサブプロセッサとやり取りを始める際、サブプロセッサと解約する際、およびサブプロセッサの利用方法を変更する際は、このページを更新します。 新たなサブプロセッサについての質問や懸念がある場合は、 {% data variables.contact.contact_privacy %}からお気軽にお問い合わせください。

### GitHubのCookie

GitHub uses cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience. Please take a look at our [Privacy Statement](/github/site-policy/github-privacy-statement#our-use-of-cookies-and-tracking) if you’d like more information about cookies, and on how and why we use them.

Since the number and names of cookies may change, the table below may be updated from time to time.

| Service Provider | Cookie Name                          | 説明                                                                                                                                                                | Expiration*                                                   |
|:---------------- |:------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------- |
| GitHub           | `app_manifest_token`                 | This cookie is used during the App Manifest flow to maintain the state of the flow during the redirect to fetch a user session.                                   | five minutes                                                  |
| GitHub           | `color_mode`                         | This cookie is used to indicate the user selected theme preference.                                                                                               | セッション                                                         |
| GitHub           | `_device_id`                         | This cookie is used to track recognized devices for security purposes.                                                                                            | one year                                                      |
| GitHub           | `dotcom_user`                        | このクッキーは、ユーザがすでにログインしていることを当社に通知するために使用されます。                                                                                                                       | one year                                                      |
| GitHub           | `_gh_ent`                            | This cookie is used for temporary application and framework state between pages like what step the customer is on in a multiple step form.                        | two weeks                                                     |
| GitHub           | `_gh_sess`                           | このクッキーは、ユーザが複数のステップのうちどのステップにあるのかなど、一時アプリケーションおよびフレームワークにおけるページ間での状態を記録するために使用されます。                                                                               | セッション                                                         |
| GitHub           | `gist_oauth_csrf`                    | このクッキーは、OAuthフローを開始したユーザが、それを完了したユーザと同一であることを保証するために、Gistによって設定されます。                                                                                              | deleted when oauth state is validated                         |
| GitHub           | `gist_user_session`                  | このクッキーは、別のホストで実行されている場合にGistによって使用されます。                                                                                                                           | two weeks                                                     |
| GitHub           | `has_recent_activity`                | This cookie is used to prevent showing the security interstitial to users that have visited the app recently.                                                     | one hour                                                      |
| GitHub           | `__Host-gist_user_session_same_site` | このクッキーは、SameSiteクッキーをサポートするブラウザが、リクエストがGitHubから発信されているかどうかを確認できるように設定されます。                                                                                        | two weeks                                                     |
| GitHub           | `__Host-user_session_same_site`      | このクッキーは、SameSiteクッキーをサポートするブラウザが、リクエストがGitHubから発信されているかどうかを確認できるように設定されます。                                                                                        | two weeks                                                     |
| GitHub           | `logged_in`                          | このクッキーは、ユーザがすでにログインしていることを当社に通知するために使用されます。                                                                                                                       | one year                                                      |
| GitHub           | `marketplace_repository_ids`         | This cookie is used for the marketplace installation flow.                                                                                                        | one hour                                                      |
| GitHub           | `marketplace_suggested_target_id`    | This cookie is used for the marketplace installation flow.                                                                                                        | one hour                                                      |
| GitHub           | `_octo`                              | This cookie is used for session management including caching of dynamic content, conditional feature access, support request metadata, and first party analytics. | one year                                                      |
| GitHub           | `org_transform_notice`               | This cookie is used to provide notice during organization transforms.                                                                                             | one hour                                                      |
| GitHub           | `private_mode_user_session`          | This cookie is used for Enterprise authentication requests.                                                                                                       | two weeks                                                     |
| GitHub           | `saml_csrf_token`                    | このクッキーは、トークンをクライアントに関連付けるために、SAML認証パスメソッドによって設定されます。                                                                                                              | until user closes browser or completes authentication request |
| GitHub           | `saml_csrf_token_legacy`             | このクッキーは、トークンをクライアントに関連付けるために、SAML認証パスメソッドによって設定されます。                                                                                                              | until user closes browser or completes authentication request |
| GitHub           | `saml_return_to`                     | このクッキーは、SAML認証ループ時に、状態を維持するためSAML認証パスメソッドによって設定されます。                                                                                                              | until user closes browser or completes authentication request |
| GitHub           | `saml_return_to_legacy`              | このクッキーは、SAML認証ループ時に、状態を維持するためSAML認証パスメソッドによって設定されます。                                                                                                              | until user closes browser or completes authentication request |
| GitHub           | `tz`                                 | This cookie allows us to customize timestamps to your time zone.                                                                                                  | セッション                                                         |
| GitHub           | `user_session`                       | このクッキーはログインに使用されます。                                                                                                                                               | two weeks                                                     |

_*_ The **expiration** dates for the cookies listed below generally apply on a rolling basis.

(!) Please note while we limit our use of third party cookies to those necessary to provide external functionality when rendering external content, certain pages on our website may set other third party cookies. たとえば、クッキーを設定するサイトから、動画などのコンテンツを埋め込むことがあります。 第三者のクッキーは最小限に保つよう努めていますが、当社は第三者のコンテンツが設定するクッキーを常に管理できるわけではありません。
