---
title: GitHub 子处理器和 Cookie
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

GitHub 在如何使用您的数据、如何收集您的数据以及与谁分享您的数据方面提供很大的透明度。 为此，我们制作了本页面，详细介绍[我们的子处理商](#github-subprocessors)、我们如何使用 [cookie](#cookies-on-github)、在何处进行跟踪以及如何[在 GitHub 上执行跟踪](#tracking-on-github)。

### GitHub 子处理商

我们与第三方子处理商（例如我们的供应商和服务提供商）分享您的信息时，我们仍对您的信息负责。 我们在引入新供应商时，会竭尽所能保持您的信任，并且要求所有供应商与我们签订数据保护协议，以约束他们对用户个人信息（定义见[隐私声明](/articles/github-privacy-statement/)）的处理。

| 子处理商名称             | 处理说明                      | 处理地点 | 公司地点 |
|:------------------ |:------------------------- |:---- |:---- |
| Automattic         | 博客服务                      | 美国   | 美国   |
| AWS Amazon         | 数据托管                      | 美国   | 美国   |
| Braintree (PayPal) | 订阅费用信用卡支付处理商              | 美国   | 美国   |
| Clearbit           | 营销数据充实服务                  | 美国   | 美国   |
| Discourse          | 社区论坛软件提供商                 | 美国   | 美国   |
| DiscoverOrg        | 营销数据充实服务                  | 美国   | 美国   |
| Eloqua             | 营销活动自动化                   | 美国   | 美国   |
| Google Apps        | 公司内部基础设施                  | 美国   | 美国   |
| Google Analytics   | Analytics and performance | 美国   | 美国   |
| LinkedIn Navigator | 营销数据充实服务                  | 美国   | 美国   |
| Magic Robot        | 活动报告（Salesforce 加载项）      | 美国   | 美国   |
| MailChimp          | 客户事件单邮件服务提供商              | 美国   | 美国   |
| Mailgun            | 交易邮件服务提供商                 | 美国   | 美国   |
| Microsoft          | Microsoft 服务              | 美国   | 美国   |
| Monday.com         | 团队协作和项目管理平台               | 美国   | 以色列  |
| Nexmo              | 短信通知提供商                   | 美国   | 美国   |
| Oracle             | 公司财务系统                    | 美国   | 美国   |
| Salesforce.com     | 客户关系管理                    | 美国   | 美国   |
| Sendgrid           | 交易邮件服务提供商                 | 美国   | 美国   |
| Sentry.io          | 应用程序监控提供商                 | 美国   | 美国   |
| Stripe             | 支付服务提供商                   | 美国   | 美国   |
| Twilio             | 短信通知提供商                   | 美国   | 美国   |
| Zendesk            | 客户支持事件单系统                 | 美国   | 美国   |
| Zuora              | 公司计费系统                    | 美国   | 美国   |

在我们引入新的子处理商来处理用户个人信息、删除子处理商或更改使用子处理商的方式时，我们将更新本页面。 如果您对新的子处理商有疑问或疑虑，我们乐意提供帮助。 请通过 {% data variables.contact.contact_privacy %} 联系我们。

### GitHub 上的 Cookie

GitHub uses cookies and similar technologies (collectively, “cookies”) to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience. Please take a look at our [Privacy Statement](/github/site-policy/github-privacy-statement#our-use-of-cookies-and-tracking) if you’d like more information about cookies, and on how and why we use them.

Since the number and names of cookies may change,the table below may be updated from time to time.

| Service Provider   | Cookie Name                          | 描述                                                                                                                                         | Expiration*                                                   |
|:------------------ |:------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------- |
| GitHub             | `app_manifest_token`                 | This cookie is used during the App Manifest flow to maintain the state of the flow during the redirect to fetch a user session.            | five minutes                                                  |
| GitHub             | `cookie-preferences`                 | This cookie is used to track user cookie preferences.                                                                                      | one year                                                      |
| GitHub             | `_device_id`                         | This cookie is used to track recognized devices.                                                                                           | one year                                                      |
| GitHub             | `dotcom_user`                        | This cookie is used to signal to us that the user is already logged in.                                                                    | one year                                                      |
| GitHub             | `_gh_ent`                            | This cookie is used for temporary application and framework state between pages like what step the customer is on in a multiple step form. | two weeks                                                     |
| GitHub             | `_gh_sess`                           | This cookie is used for temporary application and framework state between pages like what step the user is on in a multiple step form.     | 会话                                                            |
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
| GitHub             | `tz`                                 | This cookie allows your browser to tell us what time zone you're in.                                                                       | 会话                                                            |
| GitHub             | `user_session`                       | This cookie is used to log you in.                                                                                                         | two weeks                                                     |
| Google Analytics** | `_ga`                                | This cookie is used by Google Analytics.                                                                                                   | two years                                                     |
| Google Analytics** | `_gat`                               | This cookie is used by Google Analytics.                                                                                                   | one minute                                                    |
| Google Analytics** | `_gid`                               | This cookie is used by Google Analytics.                                                                                                   | one day                                                       |

_*_ The **expiration** dates for the cookies listed below generally apply on a rolling basis.

_**_ We use **Google Analytics** as a third party analytics service to collect information about how our website performs and how our users, in general, navigate through and use GitHub. This helps us evaluate our users' use of GitHub, compile statistical reports on activity, and improve our content and website performance.

You can control your Google Analytics cookie preferences through our cookie preference link located at the footer of our website. In addition, Google provides further information about its own privacy practices and [offers a browser add-on to opt out of Google Analytics tracking](https://tools.google.com/dlpage/gaoptout).

(!) Please note certain pages on our website may set other third party cookies. For example, we may embed content, such as videos, from another site that sets a cookie. While we try to minimize these third party cookies, we can’t always control what cookies this third party content sets.

### 在 GitHub 上跟踪

"[Do Not Track](https://www.eff.org/issues/do-not-track)" (DNT) is a privacy preference you can set in your browser if you do not want online services to collect and share certain kinds of information about your online activity from third party tracking services. GitHub 响应浏览器的 DNT 信号，并遵循[关于响应 DNT 信号的 W3C 标准](https://www.w3.org/TR/tracking-dnt/)。 If you would like to set your browser to signal that you would not like to be tracked, please check your browser's documentation for how to enable that signal. There are also good applications that block online tracking, such as [Privacy Badger](https://www.eff.org/privacybadger).

If you have not enabled DNT on a browser that supports it, cookies on some parts of our website will track your online browsing activity on other online services over time, though we do not permit third parties other than our analytics and service providers to track GitHub users' activity over time on GitHub. We have agreements with certain vendors, such as analytics providers, who help us track visitors' movements on certain pages on our website. Only our vendors, who are collecting personal information on our behalf, may collect data on our pages, and we have signed data protection agreements with every vendor who collects this data on our behalf. We use the data we receive from these vendors to better understand our visitors' interests, to understand our website's performance, and to improve our content. Any analytics vendor will be listed in our [subprocessor list](#github-subprocessors), and you may see a list of every page where we collect this kind of data below.
