---
title: 自動生成リリース ノート
intro: GitHub リリースのリリース ノートを自動的に生成できます
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
ms.openlocfilehash: aee951e6f57492240b5baf8870578409945aefdc
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185195'
---
## 自動生成リリース ノートについて

自動生成リリース ノートは、{% data variables.product.prodname_dotcom %} リリースのリリース ノートを手作業で記述する代わりに、自動的に生成する機能です。 自動生成リリース ノートを使うと、リリースの内容の概要をすばやく生成できます。 自動生成されたリリース ノートには、マージされた pull request の一覧、リリースの共同作成者の一覧、完全な変更ログへのリンクが含まれます。

また、自動リリース ノートをカスタマイズし、ラベルを使ってカスタム カテゴリを作成して、含める pull request をまとめたり、特定のラベルとユーザーを出力に表示しないように除外したりすることもできます。

## 新しいリリースの自動生成リリース ノートを作成する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. **[新しいリリースの下書き]** をクリックします。
   ![リリースの下書きボタン](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %} **[タグの選択]** をクリックして、{% else %}{% endif %}リリースのバージョン番号を入力します。 または、既存のタグを選びます。
  {% ifversion fpt or ghec %} ![タグを入力する](/assets/images/help/releases/releases-tag-create.png)
5. 新しいタグを作成する場合は、 **[新しいタグの作成]** をクリックします。
![新しいタグを作成することを確認する](/assets/images/help/releases/releases-tag-create-confirm.png){% else %}![タグ付きバージョン をリリースする](/assets/images/enterprise/releases/releases-tag-version.png){% endif %}
6. 新しいタグを作成した場合は、ドロップダウン メニューを使ってリリース対象のプロジェクトを含むブランチを選択します。
  {% ifversion fpt or ghec %}![ブランチの選択](/assets/images/help/releases/releases-choose-branch.png) {% else %}![タグ付きブランチのリリース](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
7. 説明テキスト ボックスの右上で、{% ifversion previous-release-tag %} **[リリース ノートの生成]** {% else %} **[リリース ノートの自動生成]** {% endif %}.{% ifversion previous-release-tag %} ![[リリース ノートの生成]](/assets/images/help/releases/generate-release-notes.png){% else %} ![[リリース ノートの自動生成]](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}をクリックします
8. 生成されたノートをチェックし、含めたい情報がすべて (そしてそれだけが) 含まれることを確認します。
9. オプションで、コンパイルされたプログラムなどのバイナリファイルをリリースに含めるには、ドラッグアンドドロップするかバイナリボックスで手動で選択します。
   ![リリースに DMG ファイルを含める](/assets/images/help/releases/releases_adding_binary.gif)
10. リリースが不安定であり、運用の準備ができていないことをユーザーに通知するには、 **[これはプレリリースです]** を選択します。
   ![リリースをプレリリースとしてマークするチェック ボックス](/assets/images/help/releases/prerelease_checkbox.png){%- ifversion fpt or ghec %}
11. 必要に応じて、 **[このリリースのディスカッションを作成する]** を選び、 **[カテゴリ]** ドロップダウン メニューを選んでリリース ディスカッションのカテゴリをクリックします。
  ![リリース ディスカッションを作成するためのチェックボックスと、カテゴリを選ぶドロップダウン メニュー](/assets/images/help/releases/create-release-discussion.png){%- endif %}
12. リリースを公開する準備ができている場合は、 **[リリースの公開]** をクリックします。 リリースの作業を後でする場合は、 **[下書きの保存]** をクリックします。
   ![[リリースの公開] と [下書きの保存] ボタン](/assets/images/help/releases/release_buttons.png)


## 自動生成リリース ノートを構成する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドに「`.github/release.yml`」と入力して、`.github` ディレクトリに `release.yml` ファイルを作成します。
  ![[新しいファイルの作成]](/assets/images/help/releases/release-yml.png)
4. このファイルでは、以下の構成オプションを使って、このリリースから除外する pull request ラベルと作成者を YAML で指定します。 新しいカテゴリを作成し、それぞれに含める pull request ラベルを列記することもできます。

### 構成オプション

| パラメーター | 説明 |
| :- | :- |
| `changelog.exclude.labels` | リリース ノートに表示しない pull request のラベルの一覧。 |
| `changelog.exclude.authors` | pull request をリリース ノートから除外するユーザーまたはボット ログイン ハンドルの一覧。 |
| `changelog.categories[*].title` | **必須。** リリース ノートでの変更のカテゴリのタイトル。 |
| `changelog.categories[*].labels`| **必須。** このカテゴリの pull request を修飾するラベル。 前のカテゴリのいずれにも一致しなかった pull request のキャッチオールとして `*` を使います。 |
| `changelog.categories[*].exclude.labels` | このカテゴリに表示しない pull request のラベルの一覧。 |
| `changelog.categories[*].exclude.authors` | pull request をこのカテゴリから除外するユーザーまたはボット ログイン ハンドルの一覧。 |

### 構成例

semver リリースにラベルを付けるリポジトリの構成

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

pull request にはタグを付けないが、{% data variables.product.prodname_dependabot %} の自動 pull request はリリース ノートで分離する必要があるリポジトリの構成 (汎用カテゴリを表示するために `labels: '*'` が必要です)

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  categories:
    - title: 🏕 Features
      labels:
        - '*'
      exclude:
        labels:
          - dependencies
    - title: 👒 Dependencies
      labels:
        - dependencies
```
{% endraw %}

## 参考資料

- [ラベルを管理する](/issues/using-labels-and-milestones-to-track-work/managing-labels) 
