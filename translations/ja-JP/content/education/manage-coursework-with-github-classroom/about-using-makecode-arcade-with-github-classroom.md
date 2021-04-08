---
title: GitHub ClassroomでMakeCode Arcadeを使用する
shortTitle: MakeCode Arcadeの使用について
intro: MakeCode Arcadeを、{% data variables.product.prodname_classroom %}の課題のためのオンラインIDEとして設定できます。
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/student-experience-makecode
---

### MakeCode Arcadeについて

MakeCode Arcadeとは、ドラッグアンドドロップのブロックプログラミングとJavaScriptを使用してレトロなアーケードゲームを開発するためのオンライン統合開発環境 (IDE) です。 学生はMakeCode Arcadeを使ってブラウザでコードを記述、編集、実行、テスト、デバッグできます。 オンラインIDEおよび{% data variables.product.prodname_classroom %}に関する詳しい情報については、「[{% data variables.product.prodname_classroom %}とオンラインIDEの統合](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide)」を参照してください。

{% data reusables.classroom.readme-contains-button-for-online-ide %}

学生がボタンをクリックして、初めてMakeCode Arcadeにアクセスする際は、{% data variables.product.product_name %}認証情報でMakeCode Arcadeにサインインする必要があります。 サインインすると、学生はMakeCode Arcadeで完全に構成された、課題リポジトリのコードが含まれる開発環境にアクセスできます。

MakeCode Arcadeにおける作業についての詳細は、[MakeCode Arcade Tour](https://arcade.makecode.com/ide-tour)およびMakeCode Arcadeウェブサイトの[ドキュメント](https://arcade.makecode.com/docs)を参照してください。

MakeCode Arcadeは、グループ課題のための複数人による編集をサポートしていません。 その代わり、学生はブランチやプルリクエストのようなGitおよび{% data variables.product.product_name %}の機能でコラボレートできます。

### MakeCode Arcadeによる課題の提出について

デフォルトでは、MakeCode Arcadeは{% data variables.product.product_location %}の課題リポジトリにプッシュするよう設定されています。 MakeCode Arcadeで課題を進めた後、学生は画面下部にある{% octicon "mark-github" aria-label="The GitHub mark" %}{% octicon "arrow-up" aria-label="The up arrow icon" %}ボタンで、変更を{% data variables.product.product_location %}にプッシュする必要があります。

![MakeCode Arcadeのバージョン管理機能](/assets/images/help/classroom/ide-makecode-arcade-version-control-button.png)

### 参考リンク

- [READMEについて](/github/creating-cloning-and-archiving-repositories/about-readmes)
