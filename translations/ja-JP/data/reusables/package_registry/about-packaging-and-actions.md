### 継続的インテグレーションワークフロー内でのパッケージング

パッケージングのステップは、継続的インテグレーションあるいは継続的デリバリのワークフローの一般的な部分です。 継続的インテグレーションワークフローの終わりにパッケージを作成すれば、Pull Requestに対するコードレビューの間に役立つことがあります。

コードをビルドしてテストした後、パッケージングのステップで実行可能な、あるいはデプロイ可能な成果物を生成できます。 ビルドしているアプリケーションの種類によって、このパッケージは手動でのテストのためにローカルにダウンロードしたり、ユーザーがダウンロードできるようにしたり、ステージングあるいはプロダクションの環境にデプロイしたりできます。

たとえば、Javaのプロジェクトのための継続的インテグレーションのワークフローは、`mvn package`を実行してJARファイルを生成するかもしれません。 あるいは、Node.jsアプリケーションのためのCIワークフローは、Dockerコンテナを作成するかもしれません。

そうすれば、Pull Requestをレビューする際には、ワークフローの実行を見て生成された成果物をダウンロードできるでしょう。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down-updated.png)
{% else %}
![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down.png)
{% endif %}

こうすれば、Pull Request中のコードを自分のマシン上で実行できるので、Pull Requestのデバッグやテストに役立ちます。

### パッケージを公開するためのワークフロー

継続的インテグレーションのワークフロー中で、テストのためにパッケージ化された成果物をアップロードすることに加えて、プロジェクトをビルドして、パッケージをパッケージレジストリに公開するワークフローを作成できます。

* **{% data variables.product.prodname_registry %} へのパッケージの公開**
  {% data variables.product.prodname_registry %} は、多くの種類のパッケージのパッケージホスティングサービスとして機能します。 パッケージを{% data variables.product.prodname_dotcom %}のすべてと共有することも、パッケージをプライベートにしてコラボレータやOrganizationと共有することもできます。 詳しい情報については「[GitHub Packagesの紹介](/packages/learn-github-packages/introduction-to-github-packages)」を参照してください。

  デフォルトブランチへのプッシュごとに、パッケージを {% data variables.product.prodname_registry %} に公開することをお勧めします。 そうすれば、プロジェクトの開発者は常にデフォルトのブランチからの最新のビルドを{% data variables.product.prodname_registry %}からインストールして実行及びテストできるようになります。

* **パッケージレジストリへのパッケージの公開** 多くのプロジェクトで、新しいバージョンのプロジェクトがリリースされたときにパッケージレジストリへの公開が行われます。 たとえば、JARファイルを生成するプロジェクトは、新しいリリースをMaven Centralリポジトリにアップロードするかもしれません。 あるいは、.NETのプロジェクトはnugetのパッケージを生成し、NuGet Galleryへアップロードするかもしれません。

  これは、リリースが作成される度にパッケージをパッケージレジストリに公開するワークフローを作成すれば、自動化できます。 詳しい情報については「[リリースの作成](/github/administering-a-repository/creating-releases)」を参照してください。
