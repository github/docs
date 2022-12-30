---
title: GitHubによるユーザのデータの利用について
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %}はユーザのリポジトリのデータを使い、ユーザを関連するツール、人々、プロジェクト、情報につなげます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131156'
---
## {% data variables.product.product_name %} によるユーザのデータの利用について

{% data variables.product.product_name %}は、プロダクト内の一般化された知見を配信するために、メタデータを集約し、コンテンツのパターンをパースします。 パブリック リポジトリからのデータが使用されます。リポジトリの所有者が依存関係グラフを有効にして {% data variables.product.product_name %} とデータを共有することを選択した場合は、メタデータとプライベート リポジトリからの集計データも使用されます。 プライベート リポジトリの依存関係グラフを有効にした場合、{% data variables.product.product_name %} によってその特定のプライベート リポジトリの読み取り専用分析が実行されます。

プライベート リポジトリに対してデータの使用を有効にした場合、お客様のプライベート データ、ソース コード、または営業秘密は、引き続き、[利用規約](/free-pro-team@latest/github/site-policy/github-terms-of-service)に従って機密情報および非公開として扱われます。 弊社が知る情報は、集約されたデータからのみです。 詳細については、「[プライベート リポジトリ用のデータ利用設定の管理](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)」を参照してください。

{% data reusables.repositories.about-github-archive-program %} 詳細については、「[{% data variables.product.prodname_dotcom %} 上のコンテンツとデータのアーカイブ処理について](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。

{% data reusables.user-settings.export-data %} 詳細については、「[個人アカウントのデータのアーカイブを要求する](/articles/requesting-an-archive-of-your-personal-account-s-data)」を参照してください。

メタデータまたは集計データを使用する実質的な新機能については、[{% data variables.product.prodname_dotcom %} のブログ](https://github.com/blog)で発表します。

## データによるセキュリティの推奨事項の改善

データの利用方法の例として、パブリックリポジトリの依存対象のセキュリティの脆弱性を検出し、アラートを出すことができます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。

潜在的なセキュリティの脆弱性を検出するために、{% data variables.product.product_name %}は依存対象のマニフェストファイルの内容をスキャンし、プロジェクトの依存対象のリストを作成します。

{% data variables.product.product_name %}はまた、依存対象のマニフェストに加えられた変更についても知ります。 たとえばあなたが脆弱性のある依存対象をセキュリティアラートを受けた後で安全なバージョンにアップグレードして、他者も同じようにした場合、{% data variables.product.product_name %}はその脆弱性へのパッチの方法を学習し、影響を受けるリポジトリに同じパッチを推奨できます。

## プライバシーとデータ共有

プライベートリポジトリのデータはマシンによってスキャンされ、{% data variables.product.product_name %}のスタッフが読むことは決してありません。 [利用規約](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access)に記載されている場合を除き、プライベート リポジトリの内容が人の目に見えることはありません。

あなたの個人データあるいはリポジトリデータがサードパーティと共有されることはありません。 弊社は、分析から得られた集約データをパートナーと共有することがあります。
