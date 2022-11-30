---
title: 关于 SSH
intro: '使用 SSH 协议可以连接远程服务器和服务并向它们验证。 利用 SSH 密钥可以连接到 {% data variables.product.product_name %}，而无需在每次访问时都提供用户名和 {% data variables.product.pat_generic %}。{% ifversion ssh-commit-verification %}还可以使用 SSH 密钥对提交进行签名。{% endif %}'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 51a72821217e5d47092ed77e923b38f4cf248010
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118977'
---
{% data reusables.ssh.about-ssh %} 有关 SSH 的详细信息，请参阅 Wikipedia 上的[安全外壳](https://en.wikipedia.org/wiki/Secure_Shell)。

设置 SSH 时，需要生成新的 SSH 私钥并将其添加到 SSH 代理中。 使用密钥进行身份验证{% ifversion ssh-commit-verification %}或对提交进行签名{% endif %}之前，还必须将 SSH 公钥添加到 {% data variables.product.product_name %} 上的帐户中。 有关详细信息，请参阅“[生成新的 SSH 密钥并将其添加到 ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”{% ifversion ssh-commit-verification %}、{% else %}和{% endif %}“[将新的 SSH 密钥添加到 {% data variables.product.prodname_dotcom %} 帐户](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)”{% ifversion ssh-commit-verification %}和“[关于提交签名验证](/articles/about-commit-signature-verification){% endif %}”。

您可以使用硬件安全密钥来进一步保护 SSH 密钥，当密钥对用于通过 SSH 进行身份验证时，需要将物理硬件安全密钥附加到计算机上。 您还可以通过将密钥添加到 ssh 代理并使用密码来保护您的 SSH 密钥。 有关详细信息，请参阅“[使用 SSH 密钥密码](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)”。

{% ifversion fpt or ghec %}若要将 SSH 密钥与使用 SAML 单一登录的组织拥有的存储库一起使用，必须授权该密钥。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[授权 SSH 密钥用于 SAML 单一登录](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}."{% endif %}{% endif %}

为了保持帐户安全，您可以定期检查您的 SSH 密钥列表，并撤销任何无效或已泄漏的密钥。 有关详细信息，请参阅“[查看 SSH 密钥](/github/authenticating-to-github/reviewing-your-ssh-keys)”。

{% ifversion fpt or ghec %} 如果一年没有使用 SSH 密钥，则作为安全预防措施，{% data variables.product.prodname_dotcom %} 将自动删除你的非活动 SSH 密钥。 有关详细信息，请参阅“[已删除或缺少的 SSH 密钥](/articles/deleted-or-missing-ssh-keys)”。
{% endif %}

{% ifversion fpt %} 使用 {% data variables.product.prodname_ghe_cloud %} 的组织可以提供 SSH 证书，成员可以使用该证书访问组织的存储库，而无需将其添加到他们在 {% data variables.product.product_name %} 上的帐户。 如果使用 SSH 证书，当分支为个人帐户所有时，将无法使用该证书访问组织存储库的分支。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于 SSH 证书颁发机构](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。
{% else ghec or ghes or ghae %} 如果你是提供 SSH 证书的组织成员，可以使用证书来访问组织的存储库，而无需添加证书到你在 {% data variables.product.product_name %} 上的帐户。 当分支为个人帐户所有时，将无法使用该证书访问组织存储库的分支。 有关详细信息，请参阅“[关于 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。
{% endif %}
## 延伸阅读

- [SSH 故障排除](/articles/troubleshooting-ssh)
