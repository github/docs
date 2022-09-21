---
ms.openlocfilehash: 9e47cc05dec3bbdef729dfc6a06eff8056dd9502
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145122078"
---
### 継続的インテグレーションワークフロー内でのパッケージング

パッケージングのステップは、継続的インテグレーションあるいは継続的デリバリのワークフローの一般的な部分です。 継続的インテグレーションワークフローの終わりにパッケージを作成すれば、プルリクエストに対するコードレビューの間に役立つことがあります。

コードをビルドしてテストした後、パッケージングのステップで実行可能な、あるいはデプロイ可能な成果物を生成できます。 ビルドしているアプリケーションの種類によって、このパッケージは手動でのテストのためにローカルにダウンロードしたり、ユーザーがダウンロードできるようにしたり、ステージングあるいはプロダクションの環境にデプロイしたりできます。

たとえば、Java プロジェクトの継続的インテグレーション ワークフローで `mvn package` を実行して JAR ファイルを生成できます。 あるいは、Node.jsアプリケーションのためのCIワークフローは、Dockerコンテナを作成するかもしれません。

そうすれば、プルリクエストをレビューする際には、ワークフローの実行を見て生成された成果物をダウンロードできるでしょう。

![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down-updated.png)

こうすれば、Pull Request中のコードを自分のマシン上で実行できるので、Pull Requestのデバッグやテストに役立ちます。

### パッケージを公開するためのワークフロー

継続的インテグレーションのワークフロー中で、テストのためにパッケージ化された成果物をアップロードすることに加えて、プロジェクトをビルドして、パッケージをパッケージレジストリに公開するワークフローを作成できます。

* **パッケージを {% data variables.product.prodname_registry %} に公開します**  
  {% data variables.product.prodname_registry %} は、多くの種類のパッケージのパッケージホスティングサービスとして機能します。 パッケージを{% data variables.product.prodname_dotcom %}のすべてと共有することも、パッケージをプライベートにしてコラボレータやOrganizationと共有することもできます。 詳細については、「[GitHub パッケージ入門](/packages/learn-github-packages/introduction-to-github-packages)」を参照してください。

  デフォルトブランチへのプッシュごとに、パッケージを {% data variables.product.prodname_registry %} に公開することをお勧めします。 そうすれば、プロジェクトの開発者は常にデフォルトのブランチからの最新のビルドを{% data variables.product.prodname_registry %}からインストールして実行及びテストできるようになります。

* **パッケージをパッケージ レジストリに発行する**  
  多くのプロジェクトでは、プロジェクトの新しいバージョンがリリースされるたびにパッケージ レジストリに発行されます。 たとえば、JARファイルを生成するプロジェクトは、新しいリリースをMaven Centralリポジトリにアップロードするかもしれません。 あるいは、.NETのプロジェクトはnugetのパッケージを生成し、NuGet Galleryへアップロードするかもしれません。

  これは、リリースが作成される度にパッケージをパッケージレジストリに公開するワークフローを作成すれば、自動化できます。 詳細については、[リリースの作成](/github/administering-a-repository/creating-releases)に関する記事を参照してください。
