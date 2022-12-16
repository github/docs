---
title: Codespaces のセキュリティ
intro: '{% data variables.product.prodname_codespaces %} セキュリティ アーキテクチャの概要と、セキュリティを維持し、攻撃のリスクを最小限に抑えるためのガイドラインを示します。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Security
type: reference
shortTitle: Security in Codespaces
ms.openlocfilehash: 679cc2de9b31159f4162eaea473ca9dd5001d22d
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "146764572"
---
## <a name="overview-of-codespace-security"></a>codespace のセキュリティの概要

{% data variables.product.prodname_codespaces %} は、既定でセキュリティ強化されるように設計されています。 その結果、ソフトウェア開発のプラクティスによって、codespace のセキュリティ体制が低下するリスクがないことを確認する必要があります。 

このガイドでは、Codespaces が開発環境をセキュリティで保護する方法について説明し、作業中にセキュリティを維持するのに役立ついくつかの優れたプラクティスを提供します。 開発ツールと同様に、開いて作業するのは、自分が知っていて信頼できるリポジトリ内にのみする必要があることを覚えておいてください。

### <a name="environment-isolation"></a>環境の分離

{% data variables.product.prodname_codespaces %} は、独自の仮想マシンとネットワークを使用して、codespace を互いに分離するように設計されています。

#### <a name="isolated-virtual-machines"></a>分離された仮想マシン

各 codespace は、独自の新しく構築された仮想マシン (VM) でホストされます。 2 つの codespace が同じ VM に併置されることはありません。 

codespace は再起動するたびに、利用可能な最新のセキュリティ更新プログラムを使用して新しい VM に展開されます。

#### <a name="isolated-networking"></a>分離されたネットワーク

各 codespace には、独自の分離された仮想ネットワークがあります。 ファイアウォールを使用して、インターネットからの着信接続をブロックし、内部ネットワーク上で codespace が相互に通信できないようにします。 既定では、codespace はインターネットへの送信接続を行うことが許可されます。

### <a name="authentication"></a>認証

Web ブラウザーを使用するか、{% data variables.product.prodname_vscode %} から codespace に接続できます。 {% data variables.product.prodname_vscode_shortname %} から接続する場合は、{% data variables.product.product_name %} で認証するように求められます。 

codespace が作成または再起動されるたびに、自動有効期限が設定された新しい {% data variables.product.company_short %} トークンが割り当てられます。 この期間は、一般的な稼働日に再認証することなく codespace で作業できますが、codespace の使用を停止したときに接続が開いたままになる可能性は低くなります。

トークンのスコープは、codespace が作成されたリポジトリへのアクセス権によって異なります。

- **リポジトリへの書き込みアクセス権がある場合**: トークンのスコープはリポジトリへの読み取りおよび書き込みアクセス権になります。
- **リポジトリへの読み取りアクセス権しかない場合**: トークンは、ソース リポジトリからのコードの複製のみを許可します。 読み取りアクセス権しかないプライベート リポジトリにプッシュしようとすると、{% data variables.product.prodname_codespaces %} によってリポジトリの個人用フォークを作成するように求められます。 その後、トークンが更新され、新しい個人用フォークへの読み取りおよび書き込みアクセスが許可されます。 
- **codespace による他のリポジトリへのアクセスを有効にした場合**: codespace に [他のリポジトリへのアクセス](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)が許可されている場合、そのリポジトリから作成されたすべての codespace に、ソース リポジトリをスコープとする読み取りおよび書き込みトークンが含まれます。 さらに、トークンは、ユーザーまたは Organization によって示される他のリポジトリへの読み取りアクセス権も受け取ります。

Organization の管理者が信頼済みと見なすリポジトリを指定します。 管理者は、なし、すべて、または Organization のリポジトリの一部を[信頼することを選択](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)できます。 Organization の管理者がすべてのユーザーとすべてのリポジトリへのアクセスを許可している場合でも、codespace がリソースにアクセスするためのアクセス許可を、それを作成したユーザーよりも広くすることはできません。

### <a name="codespace-connections"></a>codespace の接続

{% data variables.product.prodname_codespaces %} サービスによって提供される TLS 暗号化トンネルを使用して、codespace に接続できます。 codespace の作成者のみが codespace に接続できます。 接続は、{% data variables.product.product_name %} で認証されます。

codespace で実行されているサービスへの外部アクセスを許可する必要がある場合は、プライベートまたはパブリック アクセスのポート フォワーディングを有効にすることができます。

### <a name="port-forwarding"></a>ポート フォワーディング

codespace 内で実行されているサービス (開発用 Web サーバーなど) に接続する必要がある場合は、インターネット上でサービスを利用できるようにポート フォワーディングを構成できます。 

Organization の所有者は、転送ポートを公開し Organization 内で使用できるようにする機能を制限できます。 詳細については、「[転送されるポートの可視性の制限](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)」を参照してください。

**プライベート転送ポート**: インターネット上でアクセスできますが、{% data variables.product.product_name %} での認証後は、codespace の作成者のみがアクセスできます。

**Organization 内のパブリック転送ポート**: インターネット上でアクセスできますが、{% data variables.product.product_name %} での認証後は、codespace と同じ Organization のメンバーのみがアクセスできます。

**パブリック転送ポート**: インターネット上でアクセスでき、インターネット上のだれでもアクセスできます。 パブリック転送ポートにアクセスするための認証は必要ありません。

既定では、転送されたすべてのポートがプライベートです。つまり、ポートにアクセスする前に認証する必要があります。 codespace のプライベート転送ポートへのアクセスは、3 時間の有効期限を持つ認証 Cookie によって制御されます。 Cookie の有効期限が切れた場合は、再認証する必要があります。

ポートを削除して再追加したとき、または codespace を再起動する場合、パブリック転送ポートは自動的にプライベートに戻ります。

[ポート] パネルを使用して、パブリックまたはプライベート アクセス用のポートを構成し、不要になったポート フォワーディングを停止できます。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。

## <a name="good-security-practices-for-your-codespaces"></a>codespace に適したセキュリティ プラクティス

Codespaces は、既定でセキュリティ強化されるように設計されています。 この体制を維持するために、開発手順の間は適切なセキュリティ プラクティスに従うことをお勧めします。 

- 開発ツールと同様に、開いて作業するのは、自分が知っていて信頼できるリポジトリ内にのみする必要があることを覚えておいてください。
- codespace に新しい依存関係を追加する前に、それらが適切に管理されているかどうか、そしてコードに見つかったセキュリティの脆弱性を修正する更新プログラムがリリースされているかどうかを確認します。

### <a name="using-secrets-to-access-sensitive-information"></a>シークレットを使用した機密情報へのアクセス 

codespace で機密情報 (アクセス トークンなど) を使用する場合は、常に暗号化されたシークレットを使用してください。 ターミナルからを含め、codespace 内の環境変数としてシークレットにアクセスできます。 たとえば、codespace 内でターミナルを起動し、`echo $SECRET_NAME ` を使用してシークレットの値を表示できます。

シークレット値は、codespace が再開または作成されるたびに環境変数にコピーされます。また、変更されたとき、同期されます。

codespace のリポジトリに書き込む権限がない場合、シークレットは環境にコピーされません。

シークレットの詳細については、次を参照してください。
- 「[codespace の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」
- 「[リポジトリの暗号化されたシークレットと Codespaces の Organization を管理する](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)」

### <a name="working-with-other-peoples-contributions-and-repositories"></a>他のユーザーのコントリビューションとリポジトリの操作

フォークの PR ブランチから codespace を作成する場合、codespace 内のトークンは、リポジトリがパブリックであるかプライベートであるかによって次のように異なります。
- プライベート リポジトリの場合、codespace にはフォークと親の両方へのアクセスが許可されます。
- パブリック リポジトリの場合、codespace は親のフォークとオープンの PR にのみアクセスできます。

また、これらのシナリオでは、[codespace シークレット](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)を環境に挿入しないことで、さらに保護します。

### <a name="additional-good-practices"></a>その他の優れたプラクティス

{% data variables.product.prodname_codespaces %} を使用する場合に注意する必要がある、優れたプラクティスとリスクは他にもあります。 

#### <a name="understanding-a-repositorys-devcontainerjson-file"></a>リポジトリの devcontainer.json ファイルについて

codespace を作成するときに、リポジトリ用に `devcontainer.json` ファイルが見つかった場合、そのファイルは解析され、codespace の構成に使用されます。 `devcontainer.json` ファイルには、サードパーティの拡張機能をインストールしたり、`postCreateCommand` で指定された任意のコードを実行したりするような、強力な機能が含まれています。

詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

#### <a name="granting-access-through-features"></a>機能を使用したアクセスの許可

特定の開発環境では、環境へのリスクが増加する可能性があります。 たとえば、コミットの署名、環境変数に挿入されたシークレット、認証済みレジストリ アクセス、パッケージ アクセスなどはすべて、セキュリティ上の問題が発生する可能性があります。 必要なユーザーにのみアクセスを許可し、可能な限り制限されたポリシーを採用することをお勧めします。 

#### <a name="using-extensions"></a>拡張機能の使用

追加の {% data variables.product.prodname_vscode_shortname %} 拡張機能をインストールすると、より多くのリスクが発生する可能性があります。 このリスクを軽減するには、信頼できる拡張機能のみをインストールし、常に最新の状態に保つようにします。
