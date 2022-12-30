---
title: リポジトリのベスト プラクティス
shortTitle: Best practices
intro: リポジトリを最も効果的に使用する方法について説明します。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163475'
---
## README ファイルを作成する

作業内容を理解して参照しやすくするために、リポジトリごとに README ファイルを作成することをお勧めします。 

{% data reusables.repositories.about-READMEs %} 詳しくは、「[READMEについて](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)」を参照してください。

## フォークよりもブランチを優先する

コラボレーションを合理化するために、通常のコラボレーターは 1 つのリポジトリから作業し、リポジトリ間ではなくブランチ間で pull request を作成することをお勧めします。 フォークは、プロジェクトに関係のない人 (オープンソースの共同作成者など) からのコントリビューションを受けるのに最適です。

ブランチ ワークフローを使用しながら、重要なブランチ (`main` など) の品質を維持するために、必要な状態チェックと pull request レビューで保護されたブランチを使用できます。 詳細については、「[保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)」を参照してください。

## {% data variables.large_files.product_name_long %} を使う

パフォーマンスを最適化するために、{% data variables.location.product_location %} ではリポジトリ内で許可されるファイルのサイズが制限されています。 詳しくは、「[{% data variables.product.prodname_dotcom %} での大きいファイルについて](/repositories/working-with-files/managing-large-files/about-large-files-on-github)」をご覧ください。

Git リポジトリで大きなファイルを追跡するには、{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) を使うことをお勧めします。 詳しくは、「[{% data variables.large_files.product_name_long %} について](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)」をご覧ください。
