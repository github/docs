---
title: プロジェクトへのサポートリソースの追加
intro: SUPPORT ファイルを作成して、プロジェクトについての支援を得る方法を知らせることができます。
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090207'
---
特定のサポート リソースにユーザーを誘導するために、リポジトリのルート、`docs` または `.github` のフォルダーに SUPPORT ファイルを追加できます。 誰かがリポジトリに Issue を作成すると、その人はプロジェクトの SUPPORT ファイルへのリンクを見ることになります。

![サポートガイドライン](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

Organization または個人用アカウントの既定のサポート リソースを作成できます。 詳細については、「[既定のコミュニティ正常性ファイルの作成](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

{% tip %}

**ヒント:** セキュリティ ポリシーを検索しやすくするために、[README ファイル](/articles/about-readmes/)などのリポジトリ内の他の場所から SUPPORT ファイルにリンクできます。

{% endtip %}

## プロジェクトへのサポートリソースの追加

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. [ファイル名] フィールドに「*SUPPORT.md*」 (すべて大文字) と入力します。
4. **[新しいファイルの編集]** タブで、ユーザーがプロジェクトについてのサポートを得る方法に関する情報を追加します。
5. SUPPORT ファイルを確認するには、 **[プレビュー]** をクリックします。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
