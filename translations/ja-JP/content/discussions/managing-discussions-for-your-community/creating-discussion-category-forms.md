---
title: ディスカッション カテゴリ フォームの作成
shortTitle: Create discussion category forms
intro: コミュニティのメンバーがリポジトリで新しいディスカッションを開くときに使えるテンプレートをカスタマイズできます。
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193484'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## ディスカッション カテゴリ フォームについて

リポジトリ内でディスカッション フォームを使って、コミュニティ メンバーがディスカッションに特定の構造化された情報を含めるよう促すことができます。 ディスカッション カテゴリ フォームを使うと、カスタマイズできる Web フォーム フィールドがあるディスカッション テンプレートを作成できます。 ディスカッション フォームは、{% data variables.product.prodname_dotcom %} フォーム スキーマを使って YAML で記述します。 詳細については、「[{% data variables.product.prodname_dotcom %} のフォーム スキーマの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)」を参照してください。 

{% data reusables.actions.learn-more-about-yaml %}

リポジトリでディスカッション カテゴリ フォームを使うには、新しいファイルを作成して、それをお使いのリポジトリの `/.github/DISCUSSION_TEMPLATE/` フォルダーに追加する必要があります。 

Organization 用にディスカッション カテゴリ フォームを作成することもできます。 詳細については、「[既定のコミュニティ正常性ファイルの作成](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

ディスカッション カテゴリ フォームは、投票ではサポートされていません。 投票について詳しくは、「[投票について](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls)」をご覧ください。

Issueフォームのレンダリングバージョンは次のとおりです。

  ![レンダリングされたディスカッション カテゴリ フォームのスクリーンショット](/assets/images/help/discussions/discussion-category-form-sample.png)

## ディスカッション カテゴリ フォームの作成

ディスカッション カテゴリ フォームは、リポジトリへの書き込みアクセス権を持つユーザーが作成できます。 

1. ディスカッション カテゴリ フォームを作成するリポジトリに移動します。 
2. リポジトリで、`FORM-NAME` をディスカッション カテゴリ フォーム フォームの名前に置き換えて、`/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml` という名前のファイルを作成します。 {% data reusables.discussions.discussion-category-forms-name %} GitHub で新しいファイルを作成する方法について詳しくは、「[新しいファイルの作成](/github/managing-files-in-a-repository/creating-new-files)」をご覧ください。
3. 新しいファイルの本文に、ディスカッション カテゴリ フォームの内容を入力します。 詳しくは、[ディスカッション カテゴリ フォームの構文](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms)に関する説明をご覧ください。
4. ファイルをリポジトリのデフォルトブランチにコミットします。 詳細については、「[新しいファイルの作成](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
