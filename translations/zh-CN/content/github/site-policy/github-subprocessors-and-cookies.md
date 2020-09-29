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

生效日期：**2020 年 12 月 8 日**

GitHub 在如何使用您的数据、如何收集您的数据以及与谁分享您的数据方面提供很大的透明度。 为此，我们制作了本页面，详细介绍[我们的子处理商](#github-subprocessors)、我们如何使用 [cookie](#cookies-on-github)、在何处进行跟踪以及如何[在 GitHub 上执行跟踪](#tracking-on-github)。

### GitHub 子处理商

我们与第三方子处理商（例如我们的供应商和服务提供商）分享您的信息时，我们仍对您的信息负责。 我们在引入新供应商时，会竭尽所能保持您的信任，并且要求所有供应商与我们签订数据保护协议，以约束他们对用户个人信息（定义见[隐私声明](/articles/github-privacy-statement/)）的处理。

| 子处理商名称             | 处理说明                            | 处理地点 | Corporate Location |
| ------------------ | ------------------------------- | ---- | ------------------ |
| Automattic         | 博客服务                            | 美国   | 美国                 |
| AWS Amazon         | 数据托管                            | 美国   | 美国                 |
| Braintree (PayPal) | 订阅费用信用卡支付处理商                    | 美国   | 美国                 |
| Clearbit           | 营销数据充实服务                        | 美国   | 美国                 |
| Discourse          | 社区论坛软件提供商                       | 美国   | 美国                 |
| DiscoverOrg        | 营销数据充实服务                        | 美国   | 美国                 |
| Eloqua             | 营销活动自动化                         | 美国   | 美国                 |
| Google Apps        | 公司内部基础设施                        | 美国   | 美国                 |
| Google Analytics   | 网站分析和性能                         | 美国   | 美国                 |
| LinkedIn Navigator | 营销数据充实服务                        | 美国   | 美国                 |
| Magic Robot        | 活动报告（Salesforce 加载项）            | 美国   | 美国                 |
| MailChimp          | 客户事件单邮件服务提供商                    | 美国   | 美国                 |
| Mailgun            | 交易邮件服务提供商                       | 美国   | 美国                 |
| Microsoft          | Microsoft Services              | 美国   | 美国                 |
| Monday.com         | 团队协作和项目管理平台                     | 美国   | 以色列                |
| Nexmo              | 短信通知提供商                         | 美国   | 美国                 |
| Oracle             | 公司财务系统                          | 美国   | 美国                 |
| Salesforce.com     | 客户关系管理                          | 美国   | 美国                 |
| Sendgrid           | 交易邮件服务提供商                       | 美国   | 美国                 |
| Sentry.io          | Application monitoring provider | 美国   | 美国                 |
| Stripe             | 支付服务提供商                         | 美国   | 美国                 |
| Twilio             | 短信通知提供商                         | 美国   | 美国                 |
| Zendesk            | 客户支持事件单系统                       | 美国   | 美国                 |
| Zuora              | 公司计费系统                          | 美国   | 美国                 |

在我们引入新的子处理商来处理用户个人信息、删除子处理商或更改使用子处理商的方式时，我们将更新本页面。 如果您对新的子处理商有疑问或疑虑，我们乐意提供帮助。 请通过 {% data variables.contact.contact_privacy %} 联系我们。

### GitHub 上的 Cookie

GitHub 使用 cookie 让服务交互变得简单而有意义。 我们使用 cookie（以及类似技术，例如 HTML5 localStorage）保持您的登录状态、记住您的首选项、为 GitHub 的未来开发提供信息，并在第三方网站上向您宣传 GitHub 的产品和服务。

Cookie 是我们 web 服务器存储在您的计算机或移动设备上的一小段文本，当您返回我们的站点时，您的浏览器会将其发送给我们。 如果您只是访问 GitHub，cookie 不一定能识别您的身份。但是，cookie 可以为每个登录用户存储唯一的标识符。 我们使用 cookie 保持您的登录状态、记住您的首选项，并为 GitHub 的未来开发提供信息。 出于安全原因，我们使用 cookie 来识别设备。 使用我们的网站，即表示您同意我们将这些类型的 cookie 放在您的计算机或设备上。 如果您禁止浏览器或设备接受这些 cookie，则将无法登录或使用 GitHub 的服务。 在网站的某些区域，我们还可能使用 Cookie 来识别您和/或您的设备，以便在第三方网站上向您宣传 GitHub 产品和服务。

GitHub 出于以下原因在用户设备上放置以下 cookie：

| Cookie 名称                            | 原因                                                      |
| ------------------------------------ | ------------------------------------------------------- |
| `user_session`                       | 此 cookie 用于您的登录。                                        |
| `logged_in`                          | 此 cookie 用于向我们表明用户已登录。                                  |
| `dotcom_user`                        | 此 cookie 用于向我们表明用户已登录。                                  |
| `_gh_sess`                           | 此 cookie 用于表明页面之间的临时应用程序和框架状态，例如用户在多步骤表单中处于哪一步。         |
| `tz`                                 | 此 cookie 允许您的浏览器告诉我们您所在的时区。                             |
| `gist_user_session`                  | 此 cookie 由 Gist 在单独主机上运行时使用。                            |
| `saml_csrf_token`                    | 此 cookie 由 SAML 身份验证路径方法设置，以将令牌与客户端相关联。                 |
| `saml_return_to`                     | 此 cookie 由 SAML 身份验证路径方法设置，以在 SAML 身份验证循环期间维持状态。        |
| `gist_oauth_csrf`                    | 此 cookie 由 Gist 设置，以确保启动 oauth 流的用户与完成它的用户是同一个用户。       |
| `__Host-user_session_same_site`      | 此 cookie 设置为确保支持 SameSite cookie 的浏览器可以检查请求是否来自 GitHub。 |
| `__Host-gist_user_session_same_site` | 此 cookie 设置为确保支持 SameSite cookie 的浏览器可以检查请求是否来自 GitHub。 |
| `_ga`                                | 此 cookie 用于 Google Analytics。                           |
| `_gat`                               | 此 cookie 用于 Google Analytics。                           |
| `_gid`                               | 此 cookie 用于 Google Analytics。                           |
| `_octo`                              | 此 cookie 被我们的内部分析服务 Octolytics 用来区分独特的用户和客户端。           |
| `tracker`                            | 此 cookie 跟踪注册分析的引用源。                                    |

我们网站上的某些页面可能会放置其他第三方的 cookie。 例如，我们可能会嵌入来自其他网站的内容（例如视频），而该网站可能放置 cookie。 虽然我们尽可能减少这些第三方 cookie，但我们无法始终控制这些第三方内容放置哪些 cookie。

### 在 GitHub 上跟踪

“[别跟踪](https://www.eff.org/issues/do-not-track)”(DNT) 是有一种隐私首选项，如果您不希望在线服务（特别是广告网络）通过第三方跟踪服务收集和分享有关您在线活动的某类信息，您可以在浏览器中设置该选项。 GitHub 响应浏览器的 DNT 信号，并遵循[关于响应 DNT 信号的 W3C 标准](https://www.w3.org/TR/tracking-dnt/)。 如果您要设置浏览器以传达不希望被跟踪的信号，请查看浏览器的文档以了解如何启用该信号。 还有一些很适合阻止在线跟踪的应用程序，例如 [Privacy Badger](https://www.eff.org/privacybadger)。

如果您没有在支持 DNT 的浏览器上启用 DNT，则我们网站某些部分的 cookie 会长期跟踪您在其他在线服务上的在线浏览活动，不过，我们不允许我们分析和服务提供商以外的第三方长期跟踪 GitHub 用户在 GitHub 上的活动。 我们使用这些 cookie 以便我们在第三方网站和服务上向您宣传 GitHub 产品和服务。 我们还与某些供应商签订了协议，例如分析供应商，他们帮助我们在网站的某些页面上跟踪访客的活动。 只有代表我们收集个人信息的供应商，才能在我们的页面上收集数据，并且我们与每个此类供应商都签订了数据保护协议。 我们利用从这些供应商处获得的数据，更好地了解访客的兴趣、网站的性能并改善我们的内容。 任何分析供应商都将列入上文的子处理商列表中，您还可以在下文查看收集此类数据的所有页面列表。

#### Google Analytics

我们使用 Google Analytics 作为第三方分析服务，并跟踪我们在第三方网站和服务上的广告宣传活动。 我们使用 Google Analytics 收集有关我们网站性能以及用户在总体上如何浏览和使用 GitHub 的信息。 这有助于我们评估用户对 GitHub 的使用情况；汇编关于活动的统计报告；以及改善我们的内容和网站性能。 Google 提供有关其隐私实践的更多信息，并且[提供一个浏览器加载项，以供选择退出 Google Analytics 跟踪](https://tools.google.com/dlpage/gaoptout)。

#### GitHub 上可能启用分析的页面

在我们网站上，包含以下任何域和路径（包括任何子域或子路径）的 URL，其页面可能启用分析或其他跟踪代码。 如果要阻止我们收集有关您在 GitHub 上浏览活动的信息，您可以使用跟踪阻止程序，例如 [Privacy Badger](https://www.eff.org/privacybadger)，也可以选择退出 Google Analytics 跟踪。

- github.com/home （如果您已注销帐户或没有帐户，则访问 github.com 时会看到此页面）
- github.com/about
- github.blog
- github.com/enterprise
- github.com/collections
- github.com/developer-stories
- github.com/events
- github.com/explore
- github.com/features
- github.com/logos
- github.com/nonprofit
- github.com/open-source
- github.com/personal
- github.com/pricing
- github.com/ten
- github.com/trending
- resources.github.com
- de.github.com
- fr.github.com
