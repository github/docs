---
title: アカウントをセキュリティで保護するためのベスト プラクティス
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: ソフトウェア サプライ チェーンにアクセスしてアカウントを保護する方法に関するガイダンス。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
ms.openlocfilehash: 4225b80d139462fd64e440947c1eba9adb817294
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883410'
---
## このガイドについて

このガイドでは、アカウントのセキュリティを強化するために行うことができる影響が最も大きい変更について説明します。 各セクションで、セキュリティを向上させるためにプロセスに対して行うことができる変更の概要を示します。 変更は影響が大きい順に示されます。

## リスクとは

アカウントのセキュリティは、サプライ チェーンのセキュリティの基礎となります。 攻撃者が {% data variables.product.product_name %} 上のユーザーのアカウントを乗っ取ることができると、コードやビルド プロセスに悪意のある変更を加えることができます。 したがって、最初の目標としては、自分自身のアカウントおよび他の{% ifversion fpt %}組織{% elsif ghec or ghae %}組織またはエンタープライズ{% elsif ghes %}{% data variables.product.product_location %}{% endif %}の{% ifversion ghes %}ユーザー{% else %}メンバー{% endif %}のアカウントの乗っ取りを困難にする必要があります。

{% ifversion ghec or ghes %}
## 認証の一元化
{% endif %}

{% ifversion ghec %} エンタープライズまたは組織の所有者であれば、SAML を使用して一元化された認証を構成できます。 メンバーの追加または削除は手動で行うことができますが、シングル サインオン (SSO) と SCIM を {% data variables.product.product_name %} と SAML ID プロバイダー (IdP) の間に設定する方が簡単で安全です。 これにより、エンタープライズのすべてのメンバーの認証プロセスも簡略化されます。

エンタープライズ アカウントまたは組織アカウントに対して SAML 認証を構成できます。 SAML を使用すると、{% data variables.product.product_location %} 上のエンタープライズまたは組織のメンバーの個人アカウントに IdP を介してアクセス権を付与できます。あるいは、{% data variables.product.prodname_emus %} を使用してエンタープライズに属するアカウントを作成および制御できます。 詳しくは、[企業の認証](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)に関する記事をご覧ください。

SAML 認証を構成した後、メンバーがリソースへのアクセスを要求すると、メンバーは SSO フローに転送されて、IdP でも認識されていることが確認されます。 認識されていない場合、要求は拒否されます。

一部の IdP では SCIM というプロトコルがサポートされます。これは、IdP で変更を行ったときに、{% data variables.product.product_name %} 上で自動的にアクセス権をプロビジョニングまたはプロビジョニング解除できます。 SCIM を使用すると、チームの成長に合わせて管理を簡素化し、アカウントに対するアクセス権をすばやく取り消すことができます。 SCIM は、{% data variables.product.product_name %} 上の個々の組織または {% data variables.product.prodname_emus %} を使用するエンタープライズで使用可能です。 詳細については、「[Organization の SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。
{% endif %}

{% ifversion ghes %} {% data variables.product.product_location %} のサイト管理者であれば、既存の ID プロバイダー (IdP) (CAS、SAML、LDAP など) と接続する認証方法を選択することで、ユーザーのログイン エクスペリエンスを簡素化できます。 つまり、{% data variables.product.prodname_dotcom %} の追加のパスワードを記憶する必要がなくなります。

認証方法によっては、{% data variables.product.product_name %} への追加情報 (たとえば、ユーザーがどのグループのメンバーであるかや、ユーザーの暗号化キーの同期など) の通信もサポートされます。 これは、組織の成長に合わせて管理を簡素化する優れた方法です。

{% data variables.product.product_name %} で使用できる認証方法の詳細については、「[Enterprise の認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)」を参照してください。
{% endif %}

## 2 要素認証の構成

{% ifversion fpt %}個人アカウント{% elsif ghes %}{% data variables.product.product_location %} 上の個人アカウント{% elsif ghec %}アカウント{% elsif ghae %}{% data variables.product.product_name %}上のエンタープライズ{% endif %}のセキュリティを向上するために最適な方法は、2 要素認証 (2FA) を{% ifversion ghae %} SAML ID プロバイダー (IdP) で{% endif %}構成することです。 パスワード自体は、推測しやすいこと、侵害された別のサイトでも利用されていたこと、またはフィッシングなどのソーシャル エンジニアリングによって侵害される可能性があります。 2FA を使用すると、攻撃者がパスワードを取得した場合でさえ、アカウントの侵害がはるかに困難になります。

{% ifversion not ghae %}

{% ifversion ghec %} エンタープライズの所有者であれば、エンタープライズに所属するすべての組織で 2FA を必要とするようにポリシーを構成できる場合があります。
{% endif %}

{% ifversion ghes %} {% data variables.product.product_location %} のサイト管理者であれば、インスタンスのすべてのユーザーのために 2FA を構成できる場合があります。 {% data variables.product.product_name %} 上で 2FA を使用できるかどうかは、使用する認証方法によって異なります。 詳細については、[ユーザー認証の一元化](#centralize-user-authentication)に関するページを参照してください。
{% endif %}

組織の所有者であれば、組織のすべてのメンバーが 2FA を有効化することを要求{% ifversion fpt %}できます{% else %}できる場合があります{% endif %}。

{% ifversion ghec or ghes %}

### エンタープライズ アカウントの構成

エンタープライズの所有者は、{% ifversion ghes %}インスタンス{% elsif ghec %}エンタープライズ{% endif %}のすべての{% ifversion ghes %}ユーザー{% elsif ghec %}メンバー{% endif %}に 2FA を要求できる場合があります。 {% data variables.product.product_name %} 上で 2FA ポリシーを使用できるかどうかは、{% ifversion ghes %}ユーザー{% else %}メンバー{% endif %}が{% ifversion ghes %}インスタンス{% elsif ghec %}エンタープライズのリソース{% endif %}にアクセスする際にどのように認証されるかによって異なります。

{% ifversion ghes %}
- CAS または SAML SSO を使用して外部 IdP から {% data variables.product.product_location %} にサインインする場合、{% elsif ghec %} エンタープライズが {% data variables.product.prodname_emus %} を使用するか SAML 認証がエンタープライズに適用されている場合、{%- endif %} {% data variables.product.product_name %} 上で 2FA を構成することはできません。 IdP の管理アクセス権を持つユーザーが、IdP に対して 2FA を構成する必要があります。

{% ifversion ghes %}

- 外部 LDAP ディレクトリを介して {% data variables.product.product_location %} にサインインする場合、{% data variables.product.product_name %} 上でエンタープライズの 2FA を要求することができます。 ディレクトリ外部のユーザーの組み込み認証を許可する場合、個々のユーザーは 2FA を有効にできますが、エンタープライズの 2FA を要求することはできません。

{% endif %}

詳細については、{% ifversion ghec %}「[エンタープライズの ID とアクセス管理について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)」および{% endif %}「[エンタープライズのセキュリティ設定にポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)」を参照してください。

{% endif %}

### 個人アカウントの構成

{% ifversion ghec or ghes %} {% note %}

**注**: {% ifversion ghec %}エンタープライズの所有者{% elsif ghes %}サイト管理者{% endif %}が{% data variables.product.product_location %}{% ifversion ghec %} 上のエンタープライズ{% endif %}に対して構成した認証方法によっては、個人アカウントで 2FA を有効にすることができません。

{% endnote %} {% endif %}

{% data variables.product.product_name %} では、2FA のオプションがいくつかサポートされています。どれも何もしないよりも効果がありますが、最も安全なオプションは WebAuthn です。 WebAuthn では、ハードウェア セキュリティ キー、あるいは Windows Hello や Mac TouchID など、サポートするデバイスが必要です。 他の形式の 2FA であればフィッシングは困難とはいえ可能です (たとえば、6 桁のワンタイム パスワードを読み上げるように誰かに頼まれるなど)。 ただし、WebAuthn のフィッシングは不可能です。ドメイン スコープがプロトコルに組み込まれているため、ログイン ページを偽装する Web サイトの資格情報が {% data variables.product.product_name %} で使用されるのを妨げるためです。

2FA を設定するときは、必ず回復コードをダウンロードし、複数の要素を設定する必要があります。 こうすることで、アカウントへのアクセスが 1 つのデバイスに依存しなくなります。 詳細については、「[2 要素認証の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)」、「[2 要素認証復旧方法の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)」、および GitHub ショップの [GitHub ブランド ハードウェア セキュリティ キー](https://thegithubshop.com/products/github-branded-yubikey)を参照してください。

### 組織アカウントの構成

{% ifversion ghec or ghes %} {% note %}

**注**: {% ifversion ghec %}エンタープライズの所有者{% elsif ghes %}サイト管理者{% endif %}が{% data variables.product.product_location %}{% ifversion ghec %} 上のエンタープライズ{% endif %}に対して構成した認証方法によっては、組織の 2FA を要求できません。

{% endnote %} {% endif %}

組織の所有者であれば、どのユーザーの 2FA が有効になっていないかを確認し、設定を支援してから、組織の 2FA を要求することができます。 そのプロセスの手順については、次を参照してください。

1. 「[組織内のユーザーが 2 要素認証を有効にしているかどうかの表示](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)」
2. 「[組織で 2 要素認証を要求する準備](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)」
3. 「[組織で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)」

{% endif %}

## SSH キーを使用した {% data variables.product.product_name %} への接続

{% ifversion ghae %}IdP を介して {% endif %}Web サイトにサインインする以外に {% data variables.product.product_name %} とやり取りする他の方法があります。 多くのユーザーは、SSH 秘密キーを使用して {% data variables.product.prodname_dotcom %} にプッシュするコードを承認します。 詳細については、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」を参照してください。

{% ifversion ghae %}IdP アカウントのパスワード{% else %}アカウントのパスワード{% endif %}と同様に、攻撃者が SSH 秘密キーを取得できた場合は、ユーザーを偽装し、ユーザーが書き込みアクセス権を持つ任意のリポジトリに悪意のあるコードをプッシュする可能性があります。 SSH 秘密キーをディスク ドライブに保存する場合は、パスフレーズで保護することをお勧めします。 詳細については、「[SSH キーのパスフレーズを使う](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)」を参照してください。

もう 1 つのオプションは、ハードウェア セキュリティ キーに SSH キーを生成することです。 2FA で使用しているのと同じキーを使用できます。 ハードウェア セキュリティ キーをリモートで侵害することは非常に困難です。SSH 秘密キーはハードウェア上に残っており、ソフトウェアから直接アクセスすることはできないためです。 詳細については、「[ハードウェア セキュリティ キーの新しい SSH キーの生成](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)」を参照してください。

{% ifversion ghec or ghes or ghae %} ハードウェア対応の SSH キーはきわめて安全ですが、組織によってはハードウェア要件が合わない場合があります。 代わりの方法は、短期間だけ有効な SSH キーを使用することです。そのため、秘密キーが侵害された場合でも、長い間悪用されることはありません。 これが、独自の SSH 証明機関を実行する背後にある概念です。 この方法によって、ユーザーの認証方法を細かく制御できるようになりますが、SSH 証明機関を自身で管理する責任を伴います。 詳細については、「[SSH 証明機関について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)」を参照してください。
{% endif %}

## 次の手順

- 「[エンドツーエンドのサプライ チェーンのセキュリティ保護](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)」

- 「[サプライ チェーンのコードをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)」

- 「[ビルド システムをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)」
