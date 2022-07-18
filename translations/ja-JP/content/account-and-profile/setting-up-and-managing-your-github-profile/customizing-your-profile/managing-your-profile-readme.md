---
title: プロフィールの README を管理する
intro: '{% data variables.product.prodname_dotcom %} プロフィールに README を追加して、他のユーザに自分の情報を伝えることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
---

## プロフィール README について

プロフィール README を作成すると、{% data variables.product.product_location %} で自分に関する情報をコミュニティと共有できます。 {% data variables.product.prodname_dotcom %} では、プロフィールページの上部にプロフィール README が表示されます。

プロフィール README に含める情報を決めることができるため、{% data variables.product.prodname_dotcom %} で自分に関するどのような情報を表示するかを完全に制御できます。 アクセスしたユーザがあなたのプロフィール README を見て、興味深い、楽しい、役立つと感じる可能性のある情報の例は次のとおりです。

- あなたの仕事や興味について説明した「自己紹介」セクション
- あなたが誇りに思っているコントリビューションとそれらのコントリビューションについてのコンテキスト
- あなたが関連しているコミュニティでサポートを得るためのガイド

![プロフィールに表示されるプロフィール README ファイル](/assets/images/help/repository/profile-with-readme.png)

{% data variables.product.company_short %} Flavored Markdown を使用して、テキストをフォーマットし、絵文字、画像、GIF をプロフィール README に含めることができます。 詳細は「[{% data variables.product.prodname_dotcom %} で書き、フォーマットしてみる](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)」を参照してください。

## 必要な環境

次のすべてが当てはまる場合、GitHubは プロフィールページにプロフィール README を表示します。

- {% data variables.product.prodname_dotcom %} ユーザ名にマッチする名前のリポジトリを作成した。
- リポジトリがパブリックである。
- リポジトリのルートに README.md という名前のファイルが含まれている。
- README.md ファイルに任意のコンテンツが含まれている。

{% note %}

**注釈**: 2020年7月以前にユーザ名と同名のパブリックリポジトリを作成していた場合、リポジトリの README は {% data variables.product.prodname_dotcom %} にプロフィールを自動的に表示しません。 {% data variables.product.prodname_dotcom_the_website %} のリポジトリに移動し、[**Share to profile**] をクリックすると、リポジトリの README をプロフィールに手動で共有できます。

![README をプロフィールに共有するためのボタン](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

## プロフィールの README を追加する

{% data reusables.repositories.create_new %}
2. [Repository name] の下に、{% data variables.product.prodname_dotcom %} のユーザ名とマッチするリポジトリ名を入力します。 たとえば、ユーザ名が「octocat」の場合、リポジトリ名は「octocat」である必要があります。 ![ユーザ名にマッチするリポジトリ名フィールド](/assets/images/help/repository/repo-username-match.png)
3. 必要な場合、リポジトリの説明を追加します。 たとえば、「個人リポジトリ」などです。 ![リポジトリの説明を入力するフィールド](/assets/images/help/repository/create-personal-repository-desc.png)
4. [**Public**] を選択します。 ![パブリックが選択された状態で可視性を選択するためのラジオボタン](/assets/images/help/repository/create-personal-repository-visibility.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. 右サイドバーの上にある [**Edit README**] をクリックします。 ![README ファイルを編集するためのボタン](/assets/images/help/repository/personal-repository-edit-readme.png)

  生成された README ファイルには、プロフィール README のアイディアを得るためのテンプレートが事前入力されています。 ![テンプレートが事前入力された README ファイル](/assets/images/help/repository/personal-repository-readme-template.png)

利用可能なすべての絵文字とそのコードの概要については、「[絵文字のチートシート](https://www.webfx.com/tools/emoji-cheat-sheet/)」を参照してください。

## プロフィール README を削除する

次のいずれかに該当する場合、プロフィール README は {% data variables.product.prodname_dotcom %} のプロフィールから削除されます。

- README ファイルが空であるか、存在しない。
- リポジトリがプライベートである。
- リポジトリ名がユーザ名とマッチしなくなった。

The method you choose is dependant upon your needs, but if you're unsure, we recommend making your repository private. リポジトリをプライベートにする方法については、「[リポジトリの可視性を変更する](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility)」を参照してください。

## 参考リンク

- [READMEについて](/github/creating-cloning-and-archiving-repositories/about-readmes)
