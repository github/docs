---
title: リポジトリにスポンサーボタンを表示する
intro: あなたのオープンソースプロジェクトに対する資金提供のオプションについての認知度を高めるため、リポジトリにスポンサーボタンを追加できます。
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### FUNDING ファイルについて

デフォルトブランチの、リポジトリ内の `.github` フォルダにある _FUNDING.yml_ ファイルを編集することで、スポンサーボタンを設定できます。 ボタンには、{% data variables.product.prodname_sponsors %} のスポンサード開発者、外部の資金獲得プラットフォーム、またはカスタムの資金獲得 URL を含めることができます。 {% data variables.product.prodname_sponsors %} の詳細は、「[GitHub Sponsors について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)」を参照してください。

外部の資金獲得プラットフォームごとに 1 つのユーザ名、パッケージ名、またはプロジェクト名と、最大 4 つのカスタム URL を追加できます。 {% data variables.product.prodname_sponsors %} には、スポンサード開発者または Organization を最大 4 人追加できます。 追加する場合は、プラットフォームごとに改行し、以下の構文に従ってください:

| プラットフォーム                                                                               | 構文                                                         |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [LFX Mentorship (旧 CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: プロジェクト名`                                |
| [{% data variables.product.prodname_sponsors %}](https://github.com/sponsors)          | `github: ユーザ名` または `github: [ユーザ名, ユーザ名, ユーザ名, ユーザ名]`      |
| [IssueHunt](https://issuehunt.io/)                                                     | `issuehunt: ユーザ名`                                          |
| [Ko-fi](https://ko-fi.com/)                                                            | `ko_fi: ユーザ名`                                              |
| [Liberapay](https://en.liberapay.com/)                                                 | `liberapay: ユーザ名`                                          |
| [Open Collective](https://opencollective.com/)                                         | `open_collective: ユーザ名`                                    |
| [Otechie](https://otechie.com/)                                                        | `otechie: ユーザ名`                                            |
| [Patreon](https://www.patreon.com/)                                                    | `patreon: ユーザ名`                                            |
| [Tidelift](https://tidelift.com/)                                                      | `tidelift: プラットフォーム名/パッケージ名`                               |
| カスタム URL                                                                               | `custom: リンク 1` または `custom: [リンク 1, リンク 2, リンク 3, リンク 4]` |

Tidelift では、`platform-name/package-name` の構文で、以下のプラットフォーム名を用います:

| 言語         | プラットフォーム名   |
| ---------- | ----------- |
| JavaScript | `npm`       |
| Python     | `pypi`      |
| Ruby       | `rubygems`  |
| Java       | `maven`     |
| PHP        | `packagist` |
| C#         | `nuget`     |

以下は _FUNDING.yml_ ファイルの例です:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**注釈:** 配列内のカスタム URL に `:` が含まれる場合、URL を引用符で囲む必要があります。 たとえば、`"https://www.paypal.me/octocat"` です。

{% endnote %}

所属する Organization またはユーザアカウント用にデフォルトのスポンサーボタンを作成できます。 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% note %}

資金獲得リンクは、オープンソースプロジェクトが、コミュニティから直接的に資金援助を受ける方法を提供します。 資金獲得リンクをその他の目的、たとえば広告や、政治団体、地域団体、または慈善団体を支援する目的で利用することについて、弊社ではサポートいたしかねます。 あなたが意図する利用方法がサポートされているかについてのご質問は、{% data variables.contact.contact_support %} にお問い合わせください。

{% endnote %}

### リポジトリにスポンサーボタンを表示する

管理者権限があるユーザなら誰でも、リポジトリのスポンサーボタンを有効化できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Features] で [**Sponsorships**] を選択します。 ![[Sponsorships] を有効化するチェックボックス](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. [Sponsorships] で、[**Set up sponsor button**] または [**Override funding links**] をクリックします。 ![スポンサーボタンを設定するボタン](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. ファイルエディタで、_FUNDING.yml_ ファイルにある指示に従って、資金獲得の場所へのリンクを追加します。 ![FUNDING ファイルを編集して資金獲得の場所へのリンクを追加する](/assets/images/help/sponsors/funding-yml-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 参考リンク
- 「[オープンソースコントリビューターに対する {% data variables.product.prodname_sponsors %} について](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)」
- {% data variables.product.prodname_blog %} の「[{% data variables.product.prodname_sponsors %} Team に関するよくある質問](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)」
