---
title: GitHub でオープンソースにコントリビュートする方法を見つける
intro: '自分に関連する {% data variables.product.product_name %} のオープンソースプロジェクトにコントリビュートする方法を見つけることができます。'
redirect_from:
  - /articles/where-can-i-find-open-source-projects-to-work-on/
  - /articles/finding-interesting-projects-on-github/
  - /articles/about-official-github-mirrors/
  - /articles/about-github-mirrors/
  - /articles/finding-open-source-projects-on-github
  - /github/getting-started-with-github/finding-open-source-projects-on-github
  - /github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github
versions:
  free-pro-team: '*'
topics:
  - Open Source
---
### 関連プロジェクトを発見する

興味のある特定の Topics がある場合は、`github.com/topics/<topic>` にアクセスしてください。 たとえば、機械学習に興味がある場合は、https://github.com/topics/machine-learning にアクセスして、関連するプロジェクトと good first issue を見つけることができます。 [[Topics](https://github.com/topics)] にアクセスすると、人気のある Topics を閲覧できます。 興味のある Topics に一致するリポジトリを検索することもできます。 詳しい情報については[リポジトリの検索](/articles/searching-for-repositories#search-by-topic)を参照してください。

{% data variables.product.product_name %} で積極的に活動している場合は、[Explore](https://github.com/explore) での過去のコントリビューション、Star、およびその他のアクティビティに基づいて、プロジェクトについての個別の推奨事項と good first issue を見つけることができます。 Explore ニュースレターにサインアップして、あなたの興味に基づいて {% data variables.product.product_name %} にコントリビュートする機会について記載されたメールを受け取ることもできます。 サインアップするには、「[Explore メールニュースレター](https://github.com/explore/subscribe)」を参照してください。

パーソナルダッシュボードの [All activity] セクションで、Watch しているリポジトリやフォローしているユーザについての最新情報を入手できます。 詳しい情報については[パーソナルダッシュボードについて](/articles/about-your-personal-dashboard)を参照してください。

{% data reusables.support.ask-and-answer-forum %}

### good first issue を見つける

作業するプロジェクトが既にわかっている場合は、[`github.com/<owner>/<repository>/contribute`] にアクセスして、そのリポジトリで初心者向けの Issue を見つけることができます。 たとえば、https://github.com/electron/electron/contribute で `electron/electron` に初めてコントリビュートする方法を見つけることができます。

### {% data variables.product.prodname_dotcom %} にミラーがあるオープンソースプロジェクト

オープンソースプロジェクトの中には、GitHub 以外でホストされている公式のリポジトリに加えて {% data variables.product.prodname_dotcom_the_website %} 上にミラーを提供しているものもあります。

{% data variables.product.prodname_dotcom_the_website %} にミラーされている有名なリポジトリを以下に挙げます:

- [Android オープンソースプロジェクト](https://github.com/aosp-mirror)
- [The Apache Software Foundation](https://github.com/apache)
- [The Chromium Project](https://github.com/chromium)
- [Eclipse Foundation](https://github.com/eclipse)
- [The FreeBSD Project](https://github.com/freebsd)
- [Glasgow Haskell Compiler](https://github.com/ghc)
- [GNOME](https://github.com/GNOME)
- [Linux カーネルソースツリー](https://github.com/torvalds/linux)
- [Qt](https://github.com/qt)

独自のミラーを設定するために、公式のプロジェクトリポジトリに [post-receive フック](https://git-scm.com/book/en/Customizing-Git-Git-Hooks)を設定して、コミットを {% data variables.product.product_name %} 上にミラーされたリポジトリに自動的にプッシュするようにできます。

リポジトリは、ミラーかどうかに基づいて検索できます。 詳しい情報については[リポジトリの検索](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-a-mirror)を参照してください。

### 参考リンク

- [Topics によるリポジトリの分類](/articles/classifying-your-repository-with-topics)
- 「[Organization ダッシュボードについて](/articles/about-your-organization-dashboard)」
