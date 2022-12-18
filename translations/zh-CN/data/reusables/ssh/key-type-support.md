---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107339"
---
{% ifversion fpt or ghec %} {% note %}

注意：{% data variables.product.company_short %} 通过在 2022 年 3 月 15 日删除旧的、不安全的密钥类型来提高安全性。

自该日期起，不再支持 DSA 密钥 (`ssh-dss`)。 无法在 {% data variables.location.product_location %}上向个人帐户添加新的 DSA 密钥。

2021 年 11 月 2 日之前带有 `valid_after` 的 RSA 密钥 (`ssh-rsa`) 可以继续使用任何签名算法。 在该日期之后生成的 RSA 密钥必须使用 SHA-2 签名算法。 一些较旧的客户端可能需要升级才能使用 SHA-2 签名。

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

注意：默认情况下，若使用 {% data variables.product.product_name %} 3.6 及更高版本，则截至 2022 年 8 月 1 日午夜 (UTC)，同时满足以下两个条件的 SSH 连接将失败 。

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 及更高版本也不支持使用 DSA、HMAC-SHA-1 或 CBC 密码的 SSH 连接。 只要密钥保持有效，在截止日期之前上传的 RSA SSH 密钥便可以继续使用 SHA-1 哈希函数进行身份验证。 有关查找所使用的 {% data variables.product.product_name %} 版本的详细信息，请参阅“[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)”。

站点管理员可以使用 RSA-SHA-1 调整连接的截止日期，也可以使用 RSA-SHA-1 阻止所有连接。 有关详细信息，请联系站点管理员，或参阅“[配置与实例的 SSH 连接](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)”。

{% endnote %}

{% endif %}
