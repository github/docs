---
title: 既定のコミュニティ正常性ファイルの作成
intro: CONTRIBUTING や CODE_OF_CONDUCT など、デフォルトのコミュニティ健全性ファイルを作成できます。 デフォルトのファイルは、そのような種類の独自ファイルを持たないアカウントが所有するすべてのリポジトリに使用されます。
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 85a672d0cc0991a5325df8a107737da47c7b81d3
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193631'
---
## デフォルトのコミュニティ健全性ファイルについて

既定のコミュニティ正常性ファイルは、`.github` という名前のパブリック リポジトリ、リポジトリのルート、または `docs` や `.github` フォルダーに追加できます。

{% data variables.product.product_name %} は、次のいずれかの場所にその種類の独自ファイルを持たないアカウントが所有するリポジトリのデフォルトファイルを使用および表示します。
- リポジトリのルート
- `.github` フォルダー
- `docs` フォルダー

たとえば、独自の CONTRIBUTING ファイルを持たないリポジトリで Issue またはプルリクエストを作成すると、デフォルトの CONTRIBUTING ファイルへのリンクが表示されます。 リポジトリの独自の `.github/ISSUE_TEMPLATE` フォルダーにファイルがある場合{% ifversion fpt or ghes or ghec %} (Issue テンプレートや *config.yml* ファイルを含む){% endif %}、既定の `.github/ISSUE_TEMPLATE` フォルダーの内容は使われません。

既定のファイルは、`.github` リポジトリにのみ格納されるため、個別のリポジトリのクローン、パッケージ、ダウンロードには含まれません。

## サポートされているファイルの種類

次のコミュニティ正常性ファイルの既定のものを、Organization {% ifversion fpt or ghes or ghec %} または個人アカウント {% endif %} に作成できます。

コミュニティ正常性ファイル | 説明 --- | ---{% ifversion fpt or ghec %} *CODE_OF_CONDUCT.md* | CODE_OF_CONDUCT ファイルでは、コミュニティに参加する方法の標準が定義されています。 詳細については、「[プロジェクトへの行動規範の追加](/articles/adding-a-code-of-conduct-to-your-project/)」を参照してください。{% endif %} *CONTRIBUTING.md* | CONTRIBUTING ファイルでは、プロジェクトに投稿する方法が示されています。 詳しくは、「[リポジトリ共同作成者向けガイドラインの設定](/articles/setting-guidelines-for-repository-contributors/)」をご覧ください。{% ifversion discussion-category-forms %} ディスカッション カテゴリ フォーム | ディスカッション カテゴリ フォームを使うと、コミュニティ メンバーがあなたのリポジトリを開くと使うことができるテンプレートをカスタマイズできます。 詳しくは、「[ディスカッション カテゴリ フォームの作成](/discussions/managing-discussions-for-your-community/creating-discussion-category-forms)」をご覧ください。{% endif %}{% ifversion fpt or ghec %} *FUNDING.yml* | FUNDING ファイルには、オープン ソース プロジェクトでの資金調達オプションをさらに多く表示するためのスポンサー ボタンが表示されます。 詳細については、「[リポジトリにスポンサー ボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照してください。{% endif %} Issue と pull request のテンプレート{% ifversion fpt or ghes or ghec %}および *config.yml*{% endif %} | Issue と pull request のテンプレートでは、自分のリポジトリに共同作成者が Issue や pull request を開くときに含めてほしい情報をカスタマイズおよび標準化します。 詳細については、「[Issue とプル リクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates/)」を参照してください。{% ifversion fpt or ghes or ghec %} *SECURITY.md* | SECURITY ファイルでは、プロジェクトでセキュリティ脆弱性を報告する方法の手順を示します。 詳細については、「[リポジトリにセキュリティ ポリシーを追加する](/code-security/getting-started/adding-a-security-policy-to-your-repository)」を参照してください。{% endif %} *SUPPORT.md* | SUPPORT ファイルでは、プロジェクトに関するヘルプを得る方法がわかるようにします。 詳細については、「[プロジェクトへのサポート リソースの追加](/articles/adding-support-resources-to-your-project/)」を参照してください。

デフォルトのライセンスファイルを作成することはできません。 ライセンスファイルは、プロジェクトのクローン時、パッケージ時、またはダウンロード時に含められるよう、個々のリポジトリに追加する必要があります。

## デフォルトのファイル用にリポジトリを作成

{% data reusables.repositories.create_new %}
2. **[所有者]** ドロップダウン メニューを使用し、既定のファイルを作成する Organization {% ifversion fpt or ghes or ghec %} または個人アカウント {% endif %} を選択します。
  ![[所有者] ドロップダウン メニュー](/assets/images/help/repository/create-repository-owner.png)
3. リポジトリの名前として「 **.github**」と入力し、必要に応じて説明を入力します。
  ![リポジトリ作成フィールド](/assets/images/help/repository/default-file-repository-name.png)
4. リポジトリの状態が **[パブリック]** に設定されていることを確認します (既定のファイルのリポジトリをプライベートにすることはできません)。
  ![プライベートまたはパブリックの状態を選択するためのラジオ ボタン](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. リポジトリの中に、サポートされているコミュニティ健全性ファイルの 1 つを作成します。 Issue テンプレート{% ifversion fpt or ghes or ghec %}とその構成ファイル{% endif %}は、`.github/ISSUE_TEMPLATE` という名前のフォルダーに存在する必要があります。 他のすべてのサポートされるファイルは、リポジトリのルート、`.github` フォルダー、または `docs` フォルダーに置くことができます。 詳細については、「[新しいファイルの作成](/articles/creating-new-files/)」を参照してください。
