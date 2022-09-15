---
ms.openlocfilehash: 432a33a54f6568b889f8089173f3787a960410fe
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763741"
---
{% ifversion ghes < 3.5 %}

GitHub Advanced Security をご利用のお客様が GitHub Enterprise Server 3.5 以降にアップグレードした場合、Web UI と REST API でシークレット スキャンからのアラートが表示されなくなることがあります。 以前と同様にアラートが表示されるようにするには、以前のリリースから 3.5 以降にアップグレードするときに 3.4 をスキップしないでください。 修正プログラムは、[3.5.5](/enterprise-server@3.5/admin/release-notes#3.5.5) および [3.6.1](/enterprise-server@3.6/admin/release-notes#3.6.1) パッチ リリースで入手できます。

3\.4 を介したアップグレードを計画する場合は、[アップグレード アシスタント](https://support.github.com/enterprise/server-upgrade)に関する記事を参照してください。 [更新日: 2022-09-01]

{% elsif ghes = 3.5 or ghes = 3.6 %}

GitHub Advanced Security をご利用のお客様が GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} にアップグレードすると、Web UI と REST API で、シークレット スキャンからのアラートが表示されなくなることがあります。 以前と同様にアラートが表示されるようにするには、最新リリースにアップグレードするときに 3.4 をスキップしないでください。 3\.4 を介したアップグレードを計画する場合は、[アップグレード アシスタント](https://support.github.com/enterprise/server-upgrade)に関する記事を参照してください。

- 組織が所有するすべてのリポジトリについて、欠落しているアラートを表示するには、組織所有者が組織の **[Code security and analysis]\(コードのセキュリティと分析\)** 設定に移動し、シークレット スキャンについて **[Enable all]\(すべて有効にする\)** をクリックします。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)」を参照してください。
- 個々のリポジトリについて、欠落しているアラートを表示するには、そのリポジトリに対して管理者アクセス権を持つユーザーがリポジトリのシークレット スキャンを無効にしてから、有効にします。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。

修正プログラムは、{% ifversion ghes = 3.5 %}[3.5.5](/admin/release-notes#3.5.5){% elsif ghes = 3.6 %}[3.6.1](/admin/release-notes#3.6.1){% endif %} パッチ リリースで入手できます。 [更新日: 2022-09-01]

{% endif %}
