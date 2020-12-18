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
| GitHub             | `dotcom_user`                        | This cookie is used to signal to us that the user is already logged in.                                                                    | one year                                                      |
| GitHub             | `_gh_ent`                            | This cookie is used for temporary application and framework state between pages like what step the customer is on in a multiple step form. | two weeks                                                     |
| GitHub             | `_gh_sess`                           | This cookie is used for temporary application and framework state between pages like what step the user is on in a multiple step form.     | セッション                                                         |
| GitHub             | `gist_oauth_csrf`                    | This cookie is set by Gist to ensure the user that started the oauth flow is the same user that completes it.                              | deleted when oauth state is validated                         |
| GitHub             | `gist_user_session`                  | This cookie is used by Gist when running on a separate host.                                                                               | two weeks                                                     |
| GitHub             | `has_recent_activity`                | This cookie is used to prevent showing the security interstitial to users that have visited the app recently.                              | one hour                                                      |
| GitHub             | `__Host-gist_user_session_same_site` | This cookie is set to ensure that browsers that support SameSite cookies can check to see if a request originates from GitHub.             | two weeks                                                     |
| GitHub             | `__Host-user_session_same_site`      | This cookie is set to ensure that browsers that support SameSite cookies can check to see if a request originates from GitHub.             | two weeks                                                     |
| GitHub             | `logged_in`                          | This cookie is used to signal to us that the user is already logged in.                                                                    | one year                                                      |
| GitHub             | `marketplace_repository_ids`         | This cookie is used for the marketplace installation flow.                                                                                 | one hour                                                      |
| GitHub             | `marketplace_suggested_target_id`    | This cookie is used for the marketplace installation flow.                                                                                 | one hour                                                      |
| GitHub             | `_octo`                              | This cookie is used by our internal analytics service to distinguish unique users and clients.                                             | one year                                                      |
| GitHub             | `org_transform_notice`               | This cookie is used to provide notice during organization transforms.                                                                      | one hour                                                      |
| GitHub             | `private_mode_user_session`          | This cookie is used for Enterprise authentication requests.                                                                                | two weeks                                                     |
| GitHub             | `saml_csrf_token`                    | This cookie is set by SAML auth path method to associate a token with the client.                                                          | until user closes browser or completes authentication request |
| GitHub             | `saml_csrf_token_legacy`             | This cookie is set by SAML auth path method to associate a token with the client.                                                          | until user closes browser or completes authentication request |
| GitHub             | `saml_return_to`                     | This cookie is set by the SAML auth path method to maintain state during the SAML authentication loop.                                     | until user closes browser or completes authentication request |
| GitHub             | `saml_return_to_legacy`              | This cookie is set by the SAML auth path method to maintain state during the SAML authentication loop.                                     | until user closes browser or completes authentication request |
| GitHub             | `tz`                                 | This cookie allows your browser to tell us what time zone you're in.                                                                       | セッション                                                         |
| GitHub             | `user_session`                       | This cookie is used to log you in.                                                                                                         | two weeks                                                     |
| Google Analytics** | `_ga`                                | This cookie is used by Google Analytics.                                                                                                   | two years                                                     |
| Google Analytics** | `_gat`                               | This cookie is used by Google Analytics.                                                                                                   | one minute                                                    |
| Google Analytics** | `_gid`                               | This cookie is used by Google Analytics.                                                                                                   | one day                                                       |

_*_ The **expiration** dates for the cookies listed below generally apply on a rolling basis.

_**_ We use **Google Analytics** as a third party analytics service to collect information about how our website performs and how our users, in general, navigate through and use GitHub. This helps us evaluate our users' use of GitHub, compile statistical reports on activity, and improve our content and website performance.

You can control your Google Analytics cookie preferences through our cookie preference link located at the footer of our website. In addition, Google provides further information about its own privacy practices and [offers a browser add-on to opt out of Google Analytics tracking](https://tools.google.com/dlpage/gaoptout).

(!) Please note certain pages on our website may set other third party cookies. For example, we may embed content, such as videos, from another site that sets a cookie. While we try to minimize these third party cookies, we can’t always control what cookies this third party content sets.

### GitHub上のトラッキング

"[Do Not Track](https://www.eff.org/issues/do-not-track)" (DNT) is a privacy preference you can set in your browser if you do not want online services to collect and share certain kinds of information about your online activity from third party tracking services. GitHubは、ブラウザのDNTシグナルに応答し、[DNTシグナルへの応答についてのW3C基準](https://www.w3.org/TR/tracking-dnt/)に従います。 If you would like to set your browser to signal that you would not like to be tracked, please check your browser's documentation for how to enable that signal. There are also good applications that block online tracking, such as [Privacy Badger](https://www.eff.org/privacybadger).

If you have not enabled DNT on a browser that supports it, cookies on some parts of our website will track your online browsing activity on other online services over time, though we do not permit third parties other than our analytics and service providers to track GitHub users' activity over time on GitHub. We have agreements with certain vendors, such as analytics providers, who help us track visitors' movements on certain pages on our website. Only our vendors, who are collecting personal information on our behalf, may collect data on our pages, and we have signed data protection agreements with every vendor who collects this data on our behalf. We use the data we receive from these vendors to better understand our visitors' interests, to understand our website's performance, and to improve our content. Any analytics vendor will be listed in our [subprocessor list](#github-subprocessors), and you may see a list of every page where we collect this kind of data below.
