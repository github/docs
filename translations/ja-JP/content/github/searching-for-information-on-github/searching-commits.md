---
title: コミットを検索する
intro: '{% data variables.product.product_name %} 上のコミットを検索することができます。そして、これらのコミットを検索する修飾子を組み合わせることで、検索結果を絞ることができます。'
redirect_from:
  - /articles/searching-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

{% data variables.product.product_name %} 全体にわたってグローバルにコミットを検索できます。あるいは、特定のリポジトリや Organization のコミットに限った検索もできます。 詳細は「[{% data variables.product.company_short %} での検索について](/articles/about-searching-on-github)」を参照してください。

コミットを検索する場合、リポジトリの[デフォルトブランチ](/articles/about-branches)だけが検索されます。

{% data reusables.search.syntax_tips %}

### コミットメッセージ内を検索

メッセージに特定の単語を含むコミットを検索できます。 たとえば、[**fix typo**](https://github.com/search?q=fix+typo&type=Commits) は、「fix」および「typo」という単語を含むコミットにマッチします。

### オーサーやコミッターで検索

特定のユーザによるコミットを、`author` 修飾子や `committer` 修飾子を使って検索できます。

| 修飾子                       | サンプル                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) は、@defunkt が書いたコミットにマッチします。          |
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) は、@defunkt がコミットしたコミットにマッチします。 |

`author-name` 修飾子や `committer-name` 修飾子は、オーサー名やコミッター名のコミットにマッチします。

| 修飾子                       | サンプル                                                                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) は、作者名が「wanstrath」であるコミットにマッチします。          |
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) は、コミッター名が「wanstrath」であるコミットにマッチします。 |

`author-email` 修飾子や `committer-email` 修飾子は、作者やコミッターのフルメールアドレスで、コミットにマッチします。

| 修飾子                       | サンプル                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>author-email:<em>EMAIL</em></code> | [**author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) は、chris@github.com が作者であるコミットにマッチします。        |
| <code>committer-email:<em>EMAIL</em></code> | [**committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) は、chris@github.com がコミットしたコミットにマッチします。 |

### オーサー日付やコミット日付で検索

`author-date` 修飾子や `committer-date` 修飾子を使うと、特定の期間内に書かれたまたはコミットされたコミットにマッチします。

{% data reusables.search.date_gt_lt %}

| 修飾子                       | サンプル                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) は、2016 年 1 月 1 日より前に作成されたコミットにマッチします。      |
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) は、2016 年 1 月 1 日以降に作成されたコミットにマッチします。 |

### マージコミットのフィルタリング

`merge` 修飾子はマージコミットをフィルタリングします。

| 修飾子           | サンプル                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| `merge:true`  | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) は、マージコミットにマッチします。    |
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) は、非マージコミットにマッチします。 |

### ハッシュで検索

`hash` 修飾子は、特定の SHA-1 ハッシュのコミットにマッチします。

| 修飾子                       | サンプル                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) は、ハッシュ `124a9a0ee1d8f1e15e833aff432fbb3b02632105` のコミットにマッチします。 |

### 親で検索

`parent` 修飾子は、親コミットが特定の SHA-1 ハッシュのコミットにマッチします。

| 修飾子                       | サンプル                                                                                                                                                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) は、ハッシュ `124a9a0ee1d8f1e15e833aff432fbb3b02632105` の子コミットにマッチします。 |

### ツリーで検索

`tree` 修飾子は、特定の SHA-1 Git ツリーハッシュのコミットにマッチします。

| 修飾子                        | サンプル                                                                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) は、ツリーハッシュ `99ca967` を参照するコミットにマッチします。 |

### ユーザまたは Organization のリポジトリ内の検索

特定のユーザまたは Organization のすべてのリポジトリのコミットを検索するには、`user` 修飾子または `org` 修飾子を使います。 特定のリポジトリのコミットを検索するには、`repo` 修飾子を使用します。

| 修飾子                        | サンプル                                                                                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) は、@defunkt が保有するリポジトリの「gibberish」という単語があるコミットメッセージにマッチします。                             |
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) は、@github が保有するリポジトリの「test」という単語があるコミットメッセージにマッチします。                                                 |
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) は、@defunkt の「gibberish」リポジトリにある「language」という単語があるコミットメッセージにマッチします。 |

### リポジトリの可視性によるフィルタ

`is` 修飾子は、指定した可視性を持つリポジトリからのコミットにマッチします。 詳細は「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

| 修飾子  | 例 | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) はパブリックリポジトリへのコミットにマッチします。{% endif %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) は内部リポジトリへのコミットにマッチします。 | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) はプライベートリポジトリへのコミットに一致します。

### 参考リンク

- 「[検索結果をソートする](/articles/sorting-search-results/)」
