---
title: リポジトリにスポンサーボタンを表示する
intro: あなたのオープンソースプロジェクトに対する資金提供のオプションについての認知度を高めるため、リポジトリにスポンサーボタンを追加できます。
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147558343'
---
## FUNDING ファイルについて

スポンサー ボタンを構成するには、既定のブランチにあるリポジトリの `.github` フォルダー内の _FUNDING.yml_ ファイルを編集します。 ボタンには、{% data variables.product.prodname_sponsors %} のスポンサード開発者、外部の資金獲得プラットフォーム、またはカスタムの資金獲得 URL を含めることができます。 {% data variables.product.prodname_sponsors %} の詳細については、「[GitHub Sponsors について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)」を参照してください。

外部の資金獲得プラットフォームごとに 1 つのユーザ名、パッケージ名、またはプロジェクト名と、最大 4 つのカスタム URL を追加できます。 {% data variables.product.prodname_sponsors %} には、Organization を 1 つとスポンサード開発者を最大 4 人追加できます。 追加する場合は、プラットフォームごとに改行し、以下の構文に従ってください:

プラットフォーム | 構文
-------- | -----
[LFX Mentorship (旧称 CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` または `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
カスタム URL | `custom: LINK1` または `custom: [LINK1, LINK2, LINK3, LINK4]`

Tidelift の場合は、次のプラットフォーム名で `platform-name/package-name` 構文を使用します。

言語 | プラットフォームの名前
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

_FUNDING.yml_ ファイルの例を次に示します。
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**注:** 配列内のカスタム URL に `:` が含まれる場合は、その URL を引用符で囲む必要があります。 たとえば、`"https://www.paypal.me/octocat"` のようにします。

{% endnote %}

所属する Organization または個人アカウント用にデフォルトのスポンサーボタンを作成できます。 詳細については、「[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」 (既定のコミュニティ正常性ファイルの作成) を参照してください。

{% note %}

資金獲得リンクは、オープンソースプロジェクトが、コミュニティから直接的に資金援助を受ける方法を提供します。 資金獲得リンクをその他の目的、たとえば広告や、政治団体、地域団体、または慈善団体を支援する目的で利用することについて、弊社ではサポートいたしかねます。 あなたが意図する利用方法がサポートされているかについてのご質問は、{% data variables.contact.contact_support %} にお問い合わせください。

{% endnote %}

## リポジトリにスポンサーボタンを表示する

管理者権限があるユーザなら誰でも、リポジトリのスポンサーボタンを有効化できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [機能] で **[スポンサーシップ]** を選択します。
  ![[スポンサーシップ] を有効にするチェックボックス](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. [スポンサーシップ] で、 **[スポンサー ボタンの設定]** または **[資金調達リンクを上書きする]** をクリックします。
  ![スポンサー ボタンを設定するボタン](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. ファイル エディターで、_FUNDING.yml_ ファイルの指示に従って、資金調達の場所へのリンクを追加します。
  ![FUNDING ファイルを編集して、資金調達の場所](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %} へのリンクを追加します

## 参考資料
- 「[オープン ソース共同作成者向けの {% data variables.product.prodname_sponsors %} について](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)」
- {% data variables.product.prodname_blog %} の「[{% data variables.product.prodname_sponsors %} Team に関する FAQ](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)」
