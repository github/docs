---
title: トピックでリポジトリを分類する
intro: あなたのプロジェクトを他の人が見つけて貢献しやすくするために、プロジェクトの目的、分野、主催グループなどの、リポジトリに関するトピックを追加できます。
redirect_from:
  - /articles/about-topics/
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
### Topics について

Topics を利用すれば、特定の領域に関するリポジトリを調べたり、コントリビュートするプロジェクトを見つけたり、特定の問題に対する新たなソリューションを見つけ出すことができます。 Topics は、リポジトリのメインページに表示されます。 Topics 名をクリックして、{% if currentVersion == "free-pro-team@latest" %}関連する Topics や、その Topics に分類される他のリポジトリのリストを見たりすることができます。{% else %}そのトピックの他のリポジトリを検索することができます。{% endif %}

![Topics を表示しているテストリポジトリのメインページ](/assets/images/help/repository/os-repo-with-topics.png)

最も利用されているトピックをブラウズするには https://github.com/topics/ にアクセスしてください。

{% if currentVersion == "free-pro-team@latest" %}[github/explore](https://github.com/github/explore) リポジトリにある {% data variables.product.product_name %}の注目の Topics 集にコントリビュートできます。 {% endif %}

リポジトリの管理者は、リポジトリに好きなトピックを追加できます。 リポジトリを分類するのに役立つトピックには、そのリポジトリの意図する目的、主題の領域、コミュニティ、言語などがあります。{% if currentVersion == "free-pro-team@latest" %}加えて、{% data variables.product.product_name %}はパブリックなリポジトリの内容を分析し、推奨されるトピックを生成します。リポジトリの管理者は、これを受諾することも拒否することもできます。 プライベートリポジトリの内容は分析されず、Topics が推奨されることはありません。{% endif %}

{% if currentVersion == "github-ae@latest" %}内部{% else %}パブリック、内部、{% endif %}およびプライベートリポジトリも Topics を持つことができますが、Topics の検索結果で見えるプライベートリポジトリはアクセス権を持っているものだけです。

特定のトピックに関連付けられているリポジトリを検索できます。 詳しい情報については[リポジトリの検索](/articles/searching-for-repositories#search-by-topic)を参照してください。 また、{% data variables.product.product_name %} 上でトピックのリストを検索することもできます。 詳細は「[トピックを検索する](/articles/searching-topics)」を参照してください。

### Topics をリポジトリに追加する

{% data reusables.repositories.navigate-to-repo %}{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. リポジトリの説明の下にある [**Add topics**] をクリックします。 ![リポジトリのメインページにトピックリンクを追加](/assets/images/help/repository/add-topics-link.png)
3. リポジトリに追加したいトピックを入力してから、スペースを入力します。 ![トピックの入力フォーム](/assets/images/help/repository/add-topic-form.png)
4. トピックの追加が終わり次第、[**Done**] をクリックします。 ![トピックのリストと [Done] ボタンが表示されているフォーム](/assets/images/help/repository/add-topics-done-button.png)
{% else %}
2. [About] の右にある {% octicon "gear" aria-label="The Gear icon" %} をクリックします。 ![リポジトリのメイン ページにある歯車アイコン](/assets/images/help/repository/edit-repository-details-gear.png)
3. [Topics] で、リポジトリに追加するトピックを入力してから、スペースを入力します。 ![トピックの入力フォーム](/assets/images/help/repository/add-topic-form.png)
4. トピックの追加が完了したら、[**Save changes**] をクリックします。 ![[Save changes] の [Edit repository details] ボタン](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
{% endif %}
