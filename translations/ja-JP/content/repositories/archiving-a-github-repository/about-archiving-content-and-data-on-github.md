---
title: GitHub上のコンテンツとデータのアーカイブ処理について
intro: '{% data variables.product.product_name %}上のコンテンツとデータを、他の人々が見て参照できるよう、アーカイブできます。'
redirect_from:
  - /articles/about-archiving-content-and-data-on-github
  - /github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-content-and-data-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Archive content & data
ms.openlocfilehash: aeb42b66f2a7d99a2918d3134971ea81b35248a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132480'
---
## パブリックリポジトリの永続性

{% data variables.product.product_name %}は、ユーザが削除しない限りパブリックリポジトリを利用できるまま保とうとします。 たとえば以下のような場合、パブリックなコンテンツを利用できないようにすることがあります:

- リポジトリ内のコンテンツに関する [DMCA テイクダウン通知](/free-pro-team@latest/github/site-policy/dmca-takedown-policy)を受け取る。
- リポジトリのコンテンツが[コミュニティ ガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines)または[利用規約](/free-pro-team@latest/github/site-policy/github-terms-of-service)に違反していると判断される。

大学や企業の研究者は、この情報をデータ管理計画中で参照できます。

## {% data variables.product.prodname_archive %} について

{% data reusables.repositories.about-github-archive-program %}

{% data variables.product.prodname_archive %} により、サードパーティパートナーはパブリック API を使用してパブリックリポジトリをアーカイブできます。 これらのパートナーは、さまざまなタイプのデータをさまざまな頻度でアーカイブし、データを公開します。 {% data variables.product.prodname_archive %} は、さまざまなデータ形式や場所に複数のコピーを保存することによって、継続的にデータを保護します。 たとえば、{% data variables.product.company_short %} はリポジトリを {% data variables.product.prodname_arctic_vault %} に保存します。これは、少なくとも 1,000 年以上続くことを目的とした非常に長期間のアーカイブです。 詳細については、「[{% data variables.product.prodname_archive %}](https://archiveprogram.github.com/)」を参照してください。

アーカイブを責任を持って利用することには、ユーザのプライバシーを尊重することが含まれます。 詳細については、「[GitHub 上の公開情報](/free-pro-team@latest/github/site-policy/github-privacy-statement#public-information-on-github)」を参照してください。

リポジトリで {% data variables.product.prodname_archive %} をオプトアウトできます。 詳細については、「[パブリック リポジトリの {% data variables.product.prodname_archive %} へのオプト インまたはオプト アウト](/get-started/privacy-on-github/opting-into-or-out-of-the-github-archive-program-for-your-public-repository)」を参照してください。

## アーカイブ性を増すためのオープンソースライセンスの追加

ライブラリーや研究者は、パブリックに利用できるコンテンツのアーカイブを作成する上で、法的な保護を必要とすることがあります。 {% data variables.product.product_name %} 上の作業のアーカイブ化についてサードパーティに考慮を求めるのであれば、プロジェクトに[オープン ソース ライセンス](/articles/open-source-licensing)を追加できます。 オープンソースライセンスは、コントリビューターに対してリポジトリ内の素材のコピーと配布の明示的な許可を与えます。
