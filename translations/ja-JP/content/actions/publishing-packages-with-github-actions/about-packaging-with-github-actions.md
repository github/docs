---
title: GitHub Actionsでのパッケージング
intro: 'パッケージを生成し、{% data variables.product.prodname_registry %}あるいはその他のパッケージホスティングプロバイダにアップロードするワークフローを{% data variables.product.prodname_actions %}でセットアップできます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-packaging-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### パッケージングのステップについて

パッケージングのステップは、継続的インテグレーションあるいは継続的デリバリのワークフローの一般的な部分です。 アプリケーションをビルドしてテストした後、実行もしくはデプロイ可能な成果物がパッケージの形で生成されます。 たとえば、Javaのプロジェクトのための継続的インテグレーションのワークフローは、`mvn package`を実行してJARファイルを生成するかもしれません。 あるいは、Node.jsアプリケーションのためのCIワークフローは、Dockerコンテナを作成するかもしれません。

ビルドしているアプリケーションの種類によって、このパッケージは手動でのテストのためにローカルにダウンロードしたり、ユーザーがダウンロードできるようにしたり、ステージングあるいはプロダクションの環境にデプロイしたりできます。

### 継続的インテグレーションワークフロー内でのパッケージング

継続的インテグレーションワークフローの終わりにパッケージを作成すれば、プルリクエストに対するコードレビューの間に役立つことがあります。 コードをビルドしてテストした後、パッケージングのステップで実行可能な、あるいはデプロイ可能な成果物を生成できます。 そしてワークフローはワークフローの一部として、この成果物をアップロードできます。

そうすれば、プルリクエストをレビューする際には、ワークフローの実行を見て生成された成果物をダウンロードできるでしょう。

![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down.png)

こうすれば、プルリクエスト中のコードを自分のマシン上で実行できるので、プルリクエストのデバッグやテストに役立ちます。

### パッケージを公開するためのワークフロー

継続的インテグレーションのワークフロー中で、テストのためにパッケージ化された成果物をアップロードすることに加えて、プロジェクトをビルドして、パッケージをパッケージレジストリに公開するワークフローを作成できます。

* **{% data variables.product.prodname_registry %}へのパッケージの公開** {% data variables.product.prodname_registry %}は、多くの種類のパッケージについてパッケージホストティングサービスとして振る舞うことができます。 パッケージを{% data variables.product.prodname_dotcom %}のすべてと共有することも、パッケージをプライベートにしてコラボレータやOrganizationと共有することもできます。 詳しい情報については「[{% data variables.product.prodname_registry %}について](/github/managing-packages-with-github-packages/about-github-packages)」を参照してください。

  masterブランチにプッシュがある度に、パッケージを{% data variables.product.prodname_registry %}に公開したいかもしれません。 そうすれば、プロジェクトの開発者は常にmasterからの最新のビルドを{% data variables.product.prodname_registry %}からインストールして実行及びテストできるようになります。

* **パッケージレジストリへのパッケージの公開** 多くのプロジェクトで、新しいバージョンのプロジェクトがリリースされたときにパッケージレジストリへの公開が行われます。 たとえば、JARファイルを生成するプロジェクトは、新しいリリースをMaven Centralリポジトリにアップロードするかもしれません。 あるいは、.NETのプロジェクトはnugetのパッケージを生成し、NuGet Galleryへアップロードするかもしれません。

  これは、リリースが作成される度にパッケージをパッケージレジストリに公開するワークフローを作成すれば、自動化できます。 詳しい情報については「[リリースの作成](/github/administering-a-repository/creating-releases)」を参照してください。

### 参考リンク

- [Node.jsパッケージの公開](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)
