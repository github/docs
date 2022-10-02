---
title: Apache Mavenレジストリの利用
intro: '{% data variables.product.prodname_registry %} にパッケージを公開するよう Apache Mavenを設定し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係としてJavaプロジェクトで利用できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages
  - /packages/guides/configuring-apache-maven-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Apache Maven registry
ms.openlocfilehash: 0d2fafd69ac870a521fee8c7105b79bf8839d62c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147061707'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

*~/.m2/settings.xml* ファイルを編集して個人アクセストークンを含めることで、Apache Maven で{% data variables.product.prodname_registry %}の認証を受けられます。 *~/.m2/settings.xml* ファイルが存在しない場合は新しく作成します。

`servers` タグで`id` のある子`server`タグを追加し、*USERNAME* はご自分の {% data variables.product.prodname_dotcom %} ユーザー名と、*TOKEN* はご自分の個人アクセス トークンと置き換えます。

`repositories` タグで、リポジトリの `id` を、資格情報を含む `server` タグ追加した `id` にマッピングして、リポジトリを構成します。 {% ifversion ghes or ghae %}*HOSTNAME* を {% data variables.product.product_location %} のホスト名に置き換え、{% endif %} *OWNER* をリポジトリを所有するユーザーまたは Organization の名前に置き換えます。 大文字はサポートされていないため、仮に{% data variables.product.prodname_dotcom %}のユーザあるいはOrganization名が大文字を含んでいても、リポジトリオーナーには小文字を使わなければなりません。

複数のリポジトリとやりとりする場合は、各リポジトリを `repositories` タグ内の個別の `repository` の子に追加し、それぞれの `id` を `servers` タグ内の資格情報にマッピングします。

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```

{% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```
{% endif %}

## パッケージの公開

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は `OWNER/test` というリポジトリ内の `com.example:test` という名前のパッケージを公開します。

複数のパッケージを同じリポジトリに公開する場合は、リポジトリの URL を *pom.xml* ファイルの `<distributionManagement>` 要素に含めることができます。 {% data variables.product.prodname_dotcom %} は、このこのフィールドを元にしてリポジトリを照合します。 リポジトリ名も `distributionManagement` 要素の一部なので、複数のパッケージを同じリポジトリに公開するための追加手順はありません。

パッケージの作成について詳しくは、[maven.apache.org のドキュメント](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。

1. パッケージ ディレクトリにある *pom.xml* ファイルの `distributionManagement` 要素を編集し、{% ifversion ghes or ghae %}*HOSTNAME* を {% data variables.product.product_location %} のホスト名に、{% endif %}`OWNER` をリポジトリを所有するユーザーまたは Organization のアカウント名に、`REPOSITORY` をプロジェクトを含むリポジトリ名で置き換えます。{% ifversion ghes %}

  もしもインスタンスでSubdomain Isolationが有効化されているなら:{% endif %}
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% endif %}
{% data reusables.package_registry.checksum-maven-plugin %}
1. Publish the package.
   ```shell
   $ mvn deploy
  ```

{% data reusables.package_registry.viewing-packages %}

## パッケージのインストール

Apache Maven パッケージを {% data variables.product.prodname_registry %} 空インストールするには、パッケージを依存関係として含めるように *pom.xml* ファイルを編集します。 複数のリポジトリからパッケージをインストールしたい場合は、それぞれについて `repository` タグを追加します。 プロジェクトで *pom.xml* ファイルを使用する方法について詳しくは、Apache Maven ドキュメントの「[POM の概要](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)」を参照してください。

{% data reusables.package_registry.authenticate-step %}
2. パッケージの依存関係をプロジェクト *pom.xml* ファイルの `dependencies` 要素に追加し、`com.example:test` をご自分のパッケージに置き換えます。

  ```xml
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
{% data reusables.package_registry.checksum-maven-plugin %}
3. パッケージをインストールします。

  ```shell
  $ mvn install
  ```

## 参考資料

- 「[Gradle レジストリを使用する](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)」
- 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」
