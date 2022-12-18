---
title: GitHub 上での書き込みに関するクイックスタート
intro: '{% ifversion ghae %}自分に関する gist{% else %}自分の {% data variables.product.prodname_dotcom %} プロファイルの README{% endif %} を作成して、高度な書式設定機能について学習します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: a023d55dd4d7bd41af329a4eaac1e2408af96294
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107174'
---
## はじめに

Markdown は、プレーンテキストを書式設定するための読みやすく書きやすい言語です。 Markdown 構文を追加の HTML タグと共に使用して、{% data variables.product.prodname_dotcom %} のリポジトリの README や、pull request や issue に関するコメントなどの場所での書き込みを書式設定できます。 このガイドでは、{% ifversion ghae %}gist を作成{% else %}{% data variables.product.prodname_dotcom %} プロファイルの README を作成または編集{% endif %}することで、いくつかの高度な書式設定機能について説明します。

Markdown を初めて使用する場合は、「[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)」または「[Markdown を使用したコミュニケーション](https://github.com/skills/communicate-using-markdown)」の {% data variables.product.prodname_learning %} コースから始めるとよいでしょう。

{% ifversion not ghae %}

既にプロファイルの README がある場合は、既存の README にいくつかの機能を追加するか、`about-me.md` のような名前の Markdown ファイルを使用して gist を作成することで、このガイドに従うことができます。 詳しくは、「[Gist の作成](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)」を参照してください。

{% endif %}

{% ifversion ghae %}

## Gist の作成

gist を使用すると、{% data variables.location.product_location %} 上でコード スニペットやその他の情報を保存または他のユーザーと共有できます。 gist で書式設定機能を使用するには、拡張子 `.md` の付いた gist ファイルを追加します。

1. {% data variables.gists.gist_homepage %}に移動します。
1. 必要に応じて、gist の説明 (「About me」など) を入力します。
1. **[拡張子を含むファイル名]** フィールドに「`about-me.md`」と入力します。

詳しくは、「[Gist の作成](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)」を参照してください。

{% else %}

## プロファイルの README を作成または編集する

プロファイルの README を作成すると、{% data variables.location.product_location %} で自分に関する情報をコミュニティと共有できます。 README はプロファイル ページの上部に表示されます。

プロファイルの README がまだない場合は、追加できます。

1. {% data variables.product.prodname_dotcom %} ユーザー名と同じ名前のリポジトリを作成し、そのリポジトリを `README.md` ファイルで初期化します。 詳細については、「[プロファイルの README を管理する](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)」を参照してください。
1. `README.md` ファイルを編集し、ファイルの作成時に自動的に追加される (`### Hi there` で始まる) テンプレート テキストを削除します。

既にプロファイルの README がある場合は、プロファイル ページからそれを編集できます。

{% data reusables.profile.navigating-to-profile %}
1. プロファイルの README の横にある {% octicon "pencil" aria-label="The Pencil icon" %} をクリックします。

   ![プロファイル ページのスクリーンショット。プロファイルの README の横にある鉛筆アイコンが強調表示されている](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## 訪問者に合わせた画像を追加する

{% data variables.product.prodname_dotcom %} でのコミュニケーションに画像を含めることができます。 ここでは、{% ifversion ghae %}gist{% else %}プロファイルの README{% endif %} の上部に、バナーなどの応答性の高い画像を追加します。 

`prefers-color-scheme` メディア機能で HTML の `<picture>` 要素を使用すると、訪問者がライト モードとダーク モードのどちらを使用しているかに応じて変化する画像を追加できます。 詳細については、「[テーマ設定を管理する](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)」を参照してください。

1. 次のマークアップをコピーし、{% ifversion ghae %}`about-me.md`{% else %}`README.md`{% endif %} ファイルに貼り付けます。
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. マークアップ内のプレースホルダーを、選んだ画像の URL に置き換えます。 または、最初にこの機能を試すには、次に示す例から URL をコピーできます。

   - `YOUR-DARKMODE-IMAGE` は、ダーク モードを使用している訪問者に対して表示する画像の URL に置き換えます。
   - `YOUR-LIGHTMODE-IMAGE` は、ライト モードを使用している訪問者に対して表示する画像の URL に置き換えます。
   - `YOUR-DEFAULT-IMAGE` は、他の画像のいずれも一致しない場合に表示する画像の URL に置き換えます (たとえば、訪問者が使用しているブラウザーで `prefers-color-scheme` 機能がサポートされていない場合など)。
1. スクリーン リーダーを使用している訪問者が画像にアクセスできるようにするには、`YOUR-ALT-TEXT` を画像の説明に置き換えます。
1. 画像が正しくレンダリングされたことを確認するには、 **[プレビュー]** タブをクリックします。

Markdown での画像の使い方について詳しくは、「[基本的な書き方とフォーマットの構文](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)」を参照してください。

### 例

{% data reusables.getting-started.picture-element-example %}

### 外観

![ライト モードの [プレビュー] タブのスクリーンショット。笑顔の太陽の画像が表示されている](/assets/images/help/profile/lightmode-image-example.png)

## テーブルを追加する

Markdown のテーブルを使用して情報を整理できます。 ここでは、テーブルを使用して、よく使っているプログラミング言語やフレームワーク、学習に時間を費やしていること、好きな趣味など、何かをランク付けして自己紹介します。 テーブル列に数値が含まれている場合は、ヘッダー行の下で構文 `--:` を使用して列を右揃えにすると便利です。

1. **[{% ifversion ghae %}新しい{% endif %}ファイルの編集]** タブに戻ります。 
1. 自己紹介するには、次のように、`</picture>` タグの 2 行下で、`## About me` ヘッダーと自分に関する短い段落を追加します。
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. この段落の 2 行下に、次のマークアップをコピーして貼り付けてテーブルを挿入します。
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. 右側の列で、`THING-TO-RANK` を "Languages"、"Hobbies" などに置き換え、列に項目の一覧を入力します。
1. テーブルが正しくレンダリングされたことを確認するには、 **[プレビュー]** タブをクリックします。

詳しくは、「[情報を表に編成する](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)」を参照してください。

### 例

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### 外観

![[プレビュー] タブのスクリーンショット。"About me" という見出しと、言語の一覧を含むレンダリングされたテーブルが表示されている](/assets/images/help/profile/markdown-table-example.png)

## 折りたたみセクションを追加する

コンテンツを整理しておくために、`<details>` タグを使用して、展開可能な折りたたまれたセクションを作成できます。 

1. 作成したテーブルの折りたたまれたセクションを作成するには、次の例のように、テーブルを `<details>` タグ内にラップします。
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. `<summary>` タグの間で、`THINGS-TO-RANK` を、テーブルでランク付けしたものに置き換えます。
1. 必要に応じて、セクションを既定で開いているように表示するには、`open` 属性を `<details>` タグに追加します。

   ```HTML
   <details open>
   ```
1. 折りたたまれたセクションが正しくレンダリングされたことを確認するには、 **[プレビュー]** タブをクリックします。

### 例

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### 外観

![[プレビュー] タブのスクリーンショット。ドロップダウン矢印でマークされた、"My top languages" という名前の折りたたまれたセクションがある](/assets/images/help/profile/collapsed-section-example.png)

## 引用文を追加する

Markdown には、コンテンツを書式設定するための他の多くのオプションがあります。 ここでは、ページとブロック引用を分割する横罫線を追加し、お気に入りの引用文を書式設定します。

1. ファイル下部の `</details>` タグの 2 行下に、3 個以上のダッシュを入力して横罫線を追加します。

   ```Markdown
   ---
   ```
1. `---` 行の下に、次のようなマークアップを入力して引用文を追加します。
   
   ```Markdown
   > QUOTE
   ```

   `QUOTE` を任意の名前に置き換えます。 または、次の例から引用文をコピーします。
1. すべてが正しくレンダリングされたことを確認するには、 **[プレビュー]** タブをクリックします。

### 例

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### 外観

![[プレビュー] タブのスクリーンショット。太い横線の下にインデントされた引用文が表示されている](/assets/images/help/profile/markdown-quote-example.png)

## コメントを追加する

HTML コメント構文を使用して、出力で非表示になるコメントを追加できます。 ここでは、後で {% ifversion ghae %}gist{% else %}README{% endif %} を更新するのを忘れないようにするためのコメントを追加します。

1. `## About me` ヘッダーの 2 行下に、次のマークアップを使用してコメントを挿入します。

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   `COMMENT` を、後で何かをする (たとえば、テーブルに項目を追加する) ことを忘れないようにするための "To Do" 項目に置き換えます。
1. コメントが出力で非表示になっていることを確認するには、 **[プレビュー]** タブをクリックします。

### 例

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## 作業を保存する

変更に問題がなければ、{% ifversion ghae %}gist を保存します。 

- gist を検索エンジンから隠したまま、URL を共有している相手には表示されるようにするには、 **[シークレット gist の作成]** をクリックします。 
- {% data variables.location.product_location %} 上のあらゆるユーザーに gist を表示してよければ、 **[内部 gist の作成]** をクリックします

{% else %}プロファイルの README を ( **[変更のコミット]** をクリックして) 保存します。 

`main` ブランチに直接コミットすると、プロファイルのすべての訪問者に変更が表示されます。 作業内容を保存するが、プロファイルに表示する準備ができていない場合は、 **[このコミット用に新しいブランチを作成して pull request を開始する]** を選ぶことができます。

![[変更のコミット] セクションのスクリーンショット](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## 次の手順

- 高度な書式設定機能について引き続き学習しましょう。 たとえば、{% ifversion fpt or ghec %}「[ダイアグラムの作成](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)」および{% endif %}「[コードブロックの作成と強調表示](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)」を参照してください。
- GitHub 全体 (issue、pull request、ディスカッション) でコミュニケーションを取る際に、新しいスキルを使用します。 詳しくは、「[{% data variables.product.prodname_dotcom %} でのコミュニケーション](/get-started/quickstart/communicating-on-github)」を参照してください。
