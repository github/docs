---
title: 为企业配置引荐来源网址策略
shortTitle: Configure referrer policy
intro: '您可以通过为跨域请求配置策略来增强 {% data variables.product.product_location %} 的隐私保护。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 4824e938e044a89e9d0e534564214c6a46ba44da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066488'
---
## 关于企业的引荐来源网址策略

引荐来源网址策略控制当有人访问从 {% data variables.product.product_location %} 到外部站点的链接时，{% data variables.product.product_name %} 在 HTTP 标头中传输的信息。

默认情况下，当 {% data variables.product.product_location %} 上的用户从你的实例上的文件或注释中访问指向另一个站点的链接时，请求会在 `Referer` 标头中以纯文本形式包含你的实例的主机名。 如果链接指向外部网站，则网站的所有者可以在请求或日志文件中读取您的实例的主机名。

您可以控制当用户从您的实例访问链接时 {% data variables.product.product_name %} 发送的信息。

## 启用 `same-origin` 引荐者策略

可以启用 `same-origin` 引荐者策略，以指示新式浏览器将 {% data variables.product.product_location %} 的主机名排除在对外部网站的请求之外。 该设置适用于实例上 Web 界面中的所有链接。 默认情况下，{% data variables.product.product_name %} 使用 `origin-when-cross-origin` 和 `strict-origin-when-cross-origin` 引荐者策略，这意味着实例的主机名将显示在对外部网站的 HTTP 和 HTTPS 请求中。

{% note %}

注意：将引荐者策略更改为 `same-origin` 可能会影响要求请求的 HTTP 标头中有主机名的外部站点。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 在“用户代理引荐者策略”下，选择“为所有组织启用同源引荐者策略”。
  ![用于启用同源引荐者策略的复选框](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. 单击“ **保存**”。
  ![用于启用同源引荐者策略的“保存”按钮](/assets/images/enterprise/settings/referrer-policy-save-button.png)
