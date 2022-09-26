---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138747"
---
セキュリティあるいはバージョンアップデートを実行する際に、エコシステムによってはアップデートが成功したことを検証するためにすべての依存関係をソースから解決できなければならないことがあります。 マニフェストあるいはロックファイルにプライベートの依存関係が含まれているなら、{% data variables.product.prodname_dependabot %}はそれらの依存関係がホストされている場所にアクセスできなければなりません。 Organizationのオーナーは、同じOrganization内のプロジェクトに対する依存関係を含むプライベートリポジトリへのアクセス権を{% data variables.product.prodname_dependabot %}に付与できます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)」を参照してください。 リポジトリの _dependabot.yml_ 構成ファイルで、プライベート レジストリへのアクセスを構成できます。 詳細については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)」を参照してください。
