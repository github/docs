---
title: リポジトリのライセンス
intro: 'GitHub のパブリックリポジトリは、オープンソース ソフトウェアの共有にも頻繁に利用されています。 リポジトリを真にオープンソースにしたければ、他のユーザが自由にそのソフトウェアを使用でき、変更や配布もできるように、ライセンスを付与する必要があります。'
redirect_from:
  - /articles/open-source-licensing/
  - /articles/licensing-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 適切なライセンスを選択する

コードのライセンスについて理解しやすいように、[choosealicense.com](http://choosealicense.com) のページを用意しました。 ソフトウェアのライセンスは、ソースコードに対して許可されることとされないことを規定するものなので、十分な情報に基づいて決定することが重要です。

ライセンスの選択は義務ではありませんが、 ライセンスがない場合はデフォルトの著作権法が適用されます。つまり、ソースコードについては作者があらゆる権利を留保し、ソースコードの複製、配布、派生物の作成は誰にも許可されないということです。 オープンソースのプロジェクトを作成する場合は、オープンソース ライセンスを設定することを強くおすすめします。 プロジェクトに適したライセンスの選択に関する詳細な手引きは、[オープンソース ガイド](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project)に記載されています。

{% note %}

**Note:** If you publish your source code in a public repository on GitHub, {% if currentVersion == "free-pro-team@latest" %}according to the [Terms of Service](/articles/github-terms-of-service), {% endif %}other GitHub users have the right to view and fork your repository within the GitHub site. すでにパブリックリポジトリを作成しており、ユーザによるアクセスを禁止したい場合には、リポジトリをプライベートにすることができます。 パブリックリポジトリをプライベートリポジトリに変換しても、他のユーザが作成した既存のフォークやローカル コピーは存続します。 詳細は「[パブリックリポジトリをプライベートにする](/articles/making-a-public-repository-private)」を参照してください。

{% endnote %}

### ライセンスの置かれている場所を確認する

多くの場合、ライセンステキストはリポジトリのルートにある `LICENSE.txt` (または `LICENSE.md`) というファイルに書かれています。 [Hubot の例をこちらに示します](https://github.com/github/hubot/blob/master/LICENSE.md)。

プロジェクトによっては、ライセンスに関する情報は README に記載されています。 たとえばプロジェクトの README には、「当ライセンスは MIT ライセンスの規約に基づいて付与されています」などの文言が書かれていることがあります。

ベスト プラクティスとして、プロジェクトにはライセンス ファイルを含めることをお勧めします。

### ライセンス別に GitHub を検索する

`license` 修飾子と、正確なライセンス キーワードを使用すると、ライセンスまたはライセンス ファミリーに基づいてリポジトリをフィルタリングできます。

| ライセンス | ライセンス キーワード                                                   |
| ----- | ------------------------------------------------------------- |
|       | Academic Free License v3.0 | `afl-3.0`                        |
|       | Apache ライセンス 2.0 | `apache-2.0`                               |
|       | Artistic ライセンス 2.0 | `artistic-2.0`                           |
|       | Boost Software License 1.0 | `bsl-1.0`                        |
|       | BSD 2-Clause "Simplified" ライセンス | `bsd-2-clause`              |
|       | BSD 3-Clause "New" または "Revised" ライセンス | `bsd-3-clause`       |
|       | BSD 3-Clause Clear ライセンス | `bsd-3-clause-clear`               |
|       | Creative Commons ライセンス ファミリー | `cc`                           |
|       | Creative Commons Zero v1.0 Universal | `cc0-1.0`              |
|       | Creative Commons Attribution 4.0 | `cc-by-4.0`                |
|       | Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
|       | Do What The F*ck You Want To Public License | `wtfpl`         |
|       | Educational Community License v2.0 | `ecl-2.0`                |
|       | Eclipse Public License 1.0 | `epl-1.0`                        |
|       | Eclipse Public License 2.0 | `epl-2.0`                        |
|       | European Union Public License 1.1 | `eupl-1.1`                |
|       | GNU Affero General Public License v3.0 | `agpl-3.0`           |
|       | GNU General Public License ファミリー | `gpl`                      |
|       | GNU General Public License v2.0 | `gpl-2.0`                   |
|       | GNU General Public License v3.0 | `gpl-3.0`                   |
|       | GNU Lesser General Public License ファミリー | `lgpl`              |
|       | GNU Lesser General Public License v2.1 | `lgpl-2.1`           |
|       | GNU Lesser General Public License v3.0 | `lgpl-3.0`           |
|       | ISC | `isc`                                                   |
|       | LaTeX Project Public License v1.3c | `lppl-1.3c`              |
|       | Microsoft Public License | `ms-pl`                            |
|       | MIT | `mit`                                                   |
|       | Mozilla Public License 2.0 | `mpl-2.0`                        |
|       | Open Software License 3.0 | `osl-3.0`                         |
|       | PostgreSQL License | `postgresql`                             |
|       | SIL Open Font License 1.1 | `ofl-1.1`                         |
|       | University of Illinois/NCSA Open Source License | `ncsa`      |
|       | The Unlicense | `unlicense`                                   |
|       | zLib License | `zlib`                                         |

ファミリー ライセンス別で検索すると、結果にはそのファミリーのライセンスがすべて含まれます。 たとえば、`license:gpl` というクエリを実行した結果には、GNU General Public License v2.0 と GNU General Public License v3.0 でライセンスされているリポジトリが含まれます。 詳しい情報については[リポジトリの検索](/articles/searching-for-repositories/#search-by-license)を参照してください。

### ライセンスを見つけてもらう

[オープンソースの Ruby Gem Licensee](https://github.com/benbalter/licensee) は、リポジトリの *LICENSE* ファイルを、既知のライセンスの候補リストと比較します。 Licensee には [ライセンス API](/v3/licenses/) も用意されており、 {% data variables.product.product_name %} のリポジトリがどのようにライセンスされているかを[深く理解できます](https://github.com/blog/1964-open-source-license-usage-on-github-com)。 自分のリポジトリで使用しているライセンスが、[ライセンス選択のウェブサイト](http://choosealicense.com/appendix/)にリストされていない場合は、[ライセンスの追加をリクエストする](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license)ことができます。

自分のリポジトリで使用しているライセンスが、ライセンス選択のウェブサイトにはリストされていて、リポジトリ ページのトップに明示的に表示されていない場合には、複数のライセンスが含まれるなど、複雑な状況が考えられます。 ライセンスを見つけてもらうために、*LICENSE* ファイルは単純にし、リポジトリの *README* ファイルなど、どこかでその複雑さに言及してください。

### 既存のライセンスでリポジトリにライセンスを適用する

ライセンスを選択できるのは、GitHub で新しいプロジェクトを作成するときだけです。 ブラウザを使って、手動でライセンスを追加できます。 リポジトリへのライセンスの追加についての詳しい情報は、「[リポジトリにライセンスを追加する](/articles/adding-a-license-to-a-repository)」を参照してください。

![GitHub.com でのライセンス選択のスクリーンショット](/assets/images/help/repository/repository-license-picker.png)

### 免責事項

GitHub がオープンソース ライセンスへの取り組みで目指しているのは、ユーザが十分な情報に基づいて選択できるように基盤を作ることです。 GitHub は、オープンソース ライセンスとそれを使用しているプロジェクトについての情報をユーザが取得できるように、ライセンス情報を掲載しています。 その情報がお役に立つことを願っていますが、GitHub は法律の専門家ではなく、誤りがないとは言えません。 そのため、GitHub は情報を「現状有姿」で提供するものであり、GitHub で、または GitHub を通じて提供する情報またはライセンスについては何らの保証もせず、かかるライセンス情報の利用に起因する損害については責任を負いません。 コードに適したライセンスや、ライセンスに関する他の法的な問題について不明な点がある場合は、必ず専門家にご相談ください。

### 参考リンク

- The Open Source Guides' section "[The Legal Side of Open Source](https://opensource.guide/legal/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
