---
title: codespace がプライベート イメージ レジストリにアクセスできるようにする
intro: '{% data variables.product.prodname_github_codespaces %} がプライベート レジストリ内のコンテナー イメージまたはその他のパッケージにアクセスできるようにすることができます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry
shortTitle: Access a private registry
ms.openlocfilehash: 2957fe914e620b63a7ba0e2c38b6a949bd632fd6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193636'
---
## プライベート レジストリと {% data variables.product.prodname_github_codespaces %} について

レジストリは、コンテナー イメージまたはその他のパッケージを格納、管理、フェッチするためのセキュリティで保護された領域です。 レジストリには次のような多くの例があります。 
- {% data variables.product.company_short %} の {% data variables.product.prodname_container_registry %}、Azure Container Registry、コンテナー イメージ用の DockerHub
- Node.js パッケージの {% data variables.product.prodname_npm_registry %}。

{% data variables.product.prodname_container_registry %} を含む特定の {% data variables.product.prodname_registry %} は、認証資格情報を指定する必要なく、codespace の作成時にパッケージを {% data variables.product.prodname_github_codespaces %} にシームレスにプルできるように構成できます。

その他のコンテナー イメージ レジストリにアクセスする場合は、アクセスの詳細を格納するために、{% data variables.product.prodname_dotcom %} にシークレットを作成することができます。これにより、{% data variables.product.prodname_github_codespaces %} はそのレジストリに格納されているイメージにアクセスできるようになります。

## 詳細なアクセス許可を持つレジストリに格納されているパッケージへのアクセス

{% data variables.product.prodname_container_registry %} を含む詳細なアクセス許可をサポートする {% data variables.product.prodname_registry %} レジストリでは、{% data variables.product.prodname_github_codespaces %} がパッケージを使用するための最も簡単な方法が提供されます。 詳細なアクセス許可とシームレスな {% data variables.product.prodname_github_codespaces %} のアクセスをサポートする {% data variables.product.prodname_registry %} レジストリのリストについては、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)」をご覧ください。

### codespace と同じリポジトリに公開されたパッケージへのアクセス

codespace が起動されたのと同じリポジトリ内のパッケージを公開すると、codespace の作成時にそのパッケージを自動的にフェッチできるようになります。 パッケージの公開時に **[リポジトリからアクセス権を継承する]** オプションの選択を解除していない限り、追加の資格情報を指定する必要はありません。

#### パッケージ公開元リポジトリからのアクセス権の継承

既定では、パッケージにより公開元のリポジトリのアクセス設定が継承されます。 たとえば、リポジトリがパブリックの場合、パッケージもパブリックになります。 リポジトリがプライベートの場合、パッケージもプライベートですが、リポジトリからアクセスできます。

この動作は、 **[リポジトリからアクセス権を継承する]** オプションによって制御されます。 **[リポジトリからアクセス権を継承する]** は、{% data variables.product.prodname_actions %} を介して公開する場合は既定で選択されますが、{% data variables.product.pat_generic %} を使用してレジストリに直接公開する場合は選択されません。

パッケージの公開時に **[リポジトリからアクセス権を継承する]** オプションを選択しなかった場合は、公開されたパッケージのアクセス制御にリポジトリを手動で追加できます。 詳細については、「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)」を参照してください。

### codespace が起動される Organization に公開されたパッケージへのアクセス

Organization 内のすべての codespace からパッケージにアクセスできるようにする場合は、内部可視性を設定したパッケージを公開することをお勧めします。 これにより、codespace を起動するリポジトリがパブリックである場合以外は、Organization 内のすべての codespace にパッケージが自動的に表示されます。

内部またはプライベートのパッケージを参照するパブリック リポジトリから codespace を起動する場合は、パブリック リポジトリに内部パッケージへのアクセスを手動で許可する必要があります。 これにより、内部パッケージが誤って公開されるのを防ぐことができます。 詳細については、「[パッケージへの Codespaces アクセスの確保](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)」を参照してください。

### Organization 内のリポジトリのサブセットからプライベート パッケージへのアクセス

Organization のリポジトリのサブセットがパッケージにアクセスできるようにする場合、またはパブリック リポジトリで起動された codespace から内部またはプライベートのパッケージへのアクセスを許可する場合は、パッケージのアクセス設定にリポジトリを手動で追加できます。 詳細については、「[パッケージへの Codespaces アクセスの確保](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)」を参照してください。

### codespace からのパッケージの公開

codespace からレジストリへのシームレスなアクセスは、パッケージのプルに限定されます。 codespace 内からパッケージを公開する場合は、`write:packages` スコープの {% data variables.product.pat_v1 %} を使用する必要があります。

{% data variables.product.prodname_actions %} を使用してパッケージを公開することをお勧めします。 詳しくは、「[Docker イメージの発行](/actions/publishing-packages/publishing-docker-images)」と「[Node.js パッケージの発行](/actions/publishing-packages/publishing-nodejs-packages)」をご覧ください。

## 他のレジストリに格納されているイメージへのアクセス

シークレットを定義して、{% data variables.product.prodname_github_codespaces %} が {% data variables.product.company_short %} の {% data variables.product.prodname_container_registry %} 以外のコンテナー イメージ レジストリにアクセスできるようにすることができます。 シームレスなアクセスがサポートされていないレジストリからコンテナー イメージにアクセスする場合、{% data variables.product.prodname_github_codespaces %} で、レジストリのサーバー名、ユーザー名、{% data variables.product.pat_generic %} を定義する 3 つのシークレットが存在するかどうかが確認されます。 これらのシークレットが見つかった場合、{% data variables.product.prodname_github_codespaces %} はレジストリを codespace 内で使用できるようにします。

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

シークレットは、ユーザ、リポジトリ、または Organization レベルで保存できるため、異なる Codespaces 間で安全に共有できます。 プライベート イメージ レジストリのシークレットのセットを作成するときは、名前の "<*>" を一貫した識別子に置き換える必要があります。 詳しくは、「[codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」および「[リポジトリの暗号化されたシークレットと {% data variables.product.prodname_github_codespaces %} の Organization を管理する](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)」をご覧ください。

ユーザーまたは Organization のレベルでシークレットを設定する場合は、ドロップダウン リストからアクセス ポリシーを選択して、codespace を作成するリポジトリにシークレットを割り当てるようにしてください。  

![イメージ レジストリ シークレットの例](/assets/images/help/codespaces/secret-repository-access.png)

### シークレットの例

Azure のプライベート イメージ レジストリの場合は、次のシークレットを作成できます。

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

一般的なイメージ レジストリの詳細については、「[一般的なイメージ レジストリ サーバー](#common-image-registry-servers)」を参照してください。 AWS Elastic Container Registry (ECR) へのアクセスは異なることに注意してください。

![イメージ レジストリ シークレットの例](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

シークレットを追加したら、新しい環境変数をコンテナーに渡すために、現在の codespace を停止してから開始することが必要になる場合があります。 詳細については、「[codespace の一時停止または停止](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)」を参照してください。

#### AWS Elastic Container Registry へのアクセス

AWS Elastic Container Registry (ECR) にアクセスするには、AWS アクセス キー ID と秘密鍵を指定することで、{% data variables.product.prodname_dotcom %} がユーザーに代わってアクセス トークンを取得してログインできるようになります。

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

また、資格情報のスワップ (例: `sts:GetServiceBearerToken`) と ECR 読み取り操作 (`AmazonEC2ContainerRegistryFullAccess` または `ReadOnlyAccess`) を実行するための適切な AWS IAM アクセス許可があることを確認する必要があります。

または、GitHub でユーザーに代わって資格情報のスワップが実行されないようにする場合は、AWS の API または CLI を使用してフェッチされた承認トークンを指定できます。

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

これらのトークンは有効期間が短く、定期的に更新する必要があるため、アクセス キー ID とシークレットを指定することをお勧めします。

`*_CONTAINER_REGISTRY_SERVER` が ECR URL である限り、これらのシークレットには任意の名前を付けることができますが、複数の ECR レジストリを扱う場合を除き、`ECR_CONTAINER_REGISTRY_*` を使用することをお勧めします。

詳細については、AWS ECR の[プライベート レジストリの認証に関するドキュメント](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)を参照してください。

### 一般的なイメージ レジストリ サーバー

一般的なイメージ レジストリ サーバーの一部を次に示します。

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (米国)、`eu.gcr.io` (ヨーロッパ)、`asia.gcr.io` (アジア)

## プライベート イメージ レジストリ アクセスのデバッグ

プライベート イメージ レジストリからイメージをプルするときに問題が発生した場合は、上記で定義したシークレットの値を使用して、`docker login -u <user> -p <password> <server>` を実行できることを確認してください。 ログインに失敗した場合は、ログイン資格情報が有効であること、およびコンテナー イメージをフェッチするためのサーバーに対する適切なアクセス許可があることを確かめます。 ログインに成功した場合は、ユーザー、リポジトリ、または組織のレベルで、これらの値が正しい {% data variables.product.prodname_github_codespaces %} シークレットに適切にコピーされていることを確認し、もう一度やり直してください。
