---
title: SSH について
intro: 'SSH プロトコルを利用すれば、リモートのサーバーやサービスに接続し、認証を受けられます。 SSH キーを使うと、アクセスのたびにユーザー名と {% data variables.product.pat_generic %} を入力することなく、{% data variables.product.product_name %} に接続できます。{% ifversion ssh-commit-verification %}SSH キーを使ってコミットに署名することもできます。{% endif %}'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118980'
---
{% data reusables.ssh.about-ssh %}SSH について詳しくは、Wikipedia の「[Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)」を参照してください。

SSH を設定するときは、新しいプライベート SSH キーを生成し、SSH エージェントに追加する必要があります。 キーを使って認証を行う前{% ifversion ssh-commit-verification %}またはコミットに署名する前{% endif %}に、{% data variables.product.product_name %} のアカウントにパブリック SSH キーを追加する必要もあります。 詳しくは、「[新しい SSH キーを生成して ssh-agent に追加する](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」{% ifversion ssh-commit-verification %}、{% else %}と{% endif %}「[{% data variables.product.prodname_dotcom %} アカウントへの新しい SSH キーの追加](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)」{% ifversion ssh-commit-verification %}、「[コミット署名の検証について](/articles/about-commit-signature-verification)」{% endif %}をご覧ください。

ハードウェア セキュリティ キーを使うことで、SSH キーをさらにセキュリティで保護できます。それには、SSH での認証にキー ペアを使うときに、物理的なハードウェア セキュリティ キーをコンピューターにアタッチする必要があります。 キーを ssh-agent に追加してパスフレーズを使うことで、SSH キーをセキュリティ保護することもできます。 詳細については、「[SSH キーのパスフレーズを使う](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)」を参照してください。

{% ifversion fpt or ghec %}SAML シングル サインオンを使う Organization が所有するリポジトリで SSH キーを使うには、キーを承認する必要があります。 詳細については、{% ifversion fpt %}"{% data variables.product.prodname_ghe_cloud %} のドキュメントの{% else %}「[SAML シングルサインオンで利用するために SSH キーを認可する](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}{% endif %}

アカウントのセキュリティを維持するため、SSH キーの一覧を定期的に確認して、無効なキーや侵害されたキーを取り消すことができます。 詳細については、「[SSH キーをレビューする](/github/authenticating-to-github/reviewing-your-ssh-keys)」を参照してください。

{% ifversion fpt or ghec %} 1 年間使われていない非アクティブな SSH キーは、セキュリティの予防措置として {% data variables.product.prodname_dotcom %} によって自動的に削除されます。 詳細については、「[SSH キーの削除または紛失](/articles/deleted-or-missing-ssh-keys)」を参照してください。
{% endif %}

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} を使用する組織は、SSH 証明書を提供できます。この証明書は、メンバーが {% data variables.product.product_name %} のアカウントに証明書を追加せずに、その組織のリポジトリにアクセスするために使用できます。 SSH 証明書を使用している場合、組織のリポジトリのフォークが個人アカウントによって所有されていると、そのフォークにアクセスするために証明書を使用することはできません。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[SSH 認証局について](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)」を参照してください。
{% else ghec or ghes or ghae %} SSH 証明書を提供する組織のメンバーは、{% data variables.product.product_name %} の自分のアカウントに証明書を追加しなくても、自分の証明書を使って組織のリポジトリにアクセスできます。 組織のリポジトリのフォークが個人アカウントによって所有されている場合、自分の証明書を使用して、そのフォークにアクセスすることはできません。 詳細については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)」を参照してください。
{% endif %}
## 参考資料

- [SSH のトラブルシューティング](/articles/troubleshooting-ssh)
