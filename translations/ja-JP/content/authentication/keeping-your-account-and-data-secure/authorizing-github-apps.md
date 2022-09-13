---
title: GitHub App の承認
intro: '{% data variables.product.prodname_github_app %} を承認して、アプリケーションが {% data variables.product.prodname_dotcom %} アカウントに関する情報を取得し、状況によっては、ユーザーの代わりに {% data variables.product.prodname_dotcom %} に変更を加えることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
ms.openlocfilehash: 050f437f411919c4be488e61c032a8543a301e02
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115054'
---
ユーザーの {% data variables.product.prodname_dotcom %} ID を確認したり、ユーザーに代わって {% data variables.product.prodname_dotcom %} 上のデータを操作する必要があるサードパーティのアプリケーションでは、それを行うために {% data variables.product.prodname_github_app %} の認可を求められることがあります。 

{% data variables.product.prodname_github_app %} を認可するときには、そのアプリケーションが信頼できること、誰がそれを開発したのか、およびプリケーションがアクセスしたい情報の種類を確認する必要があります。

認可の際、{% data variables.product.prodname_github_app %} にアクセス許可を与えるよう求められます。
* **{% data variables.product.prodname_dotcom %} ID を確認する**<br/>
  認可されると、{% data variables.product.prodname_github_app %} はパブリックな GitHub プロファイルをプログラムで取得できるようになり、要求されたアクセス レベルに応じてプライベートな情報 (メール アドレスなど) も取得できるようになります。
* **アクセスできるリソースを把握する**<br/>
  承認されると、{% data variables.product.prodname_github_app %}} は、アクセスできる _プライベート_ {% data variables.product.prodname_dotcom %}} リソース (プライベート {% data variables.product.prodname_dotcom %} リポジトリ _など) を_ プログラムで読み取ることができます。このリソースには、{% data variables.product.prodname_github_app %} のインストールも存在します。 アプリケーションは、たとえば、リポジトリの適切なリストを表示できるように、これを使用できます。
* **ユーザーに代わって操作する**<br/>
  アプリケーションは、{% data variables.product.prodname_dotcom %} 上でタスクを実行する必要があるかもしれません。 これには、issue の作成、pull request へのコメントが含まれる場合があります。 このユーザーに代わって操作する機能は、ユーザーと {% data variables.product.prodname_github_app %} の _両方_ がアクセスできる {% data variables.product.prodname_dotcom %} リソースに制限されます。 ただし、アプリケーションがユーザーに代わって変更を加えない場合もあります。
  
## {% data variables.product.prodname_github_app %} がユーザーに代わって操作するタイミング

{% data variables.product.prodname_github_app %} がユーザーに代わって操作する状況は、{% data variables.product.prodname_github_app %} の目的と、使われているコンテキストによって異なります。 

たとえば、統合開発環境 (IDE) では、{% data variables.product.prodname_github_app %} を使って、IDE を通じて作成した変更を {% data variables.product.prodname_dotcom %} のリポジトリにプッシュ バックするために、ユーザーに代わって操作できます。  {% data variables.product.prodname_github_app %} は [user-to-server 要求](/get-started/quickstart/github-glossary#user-to-server-request)を通じてこれを実現します。

このように {% data variables.product.prodname_github_app %} が代行する場合、GitHub 上では以下のような特別なアイコンが表示され、{% data variables.product.prodname_github_app %} の小さなアバターがユーザー自身のアバターの上に重なって表示されるようになっています。

![{% data variables.product.prodname_github_app %} からの "user-to-server" 要求によって作成された issue](/assets/images/help/apps/github-apps-new-issue.png)

## {% data variables.product.prodname_github_app %} は、どこまでユーザーがアクセスできるリソースを把握して、どの程度までユーザーに代わって操作できますか?

{% data variables.product.prodname_github_app %} が、認可された後に、ユーザーがどのリソースにアクセスできるかを把握し、ユーザーに代わって操作できる範囲は、次のように制限されています。

* アプリがインストールされている組織またはリポジトリ 
* アプリが要求しているアクセス許可
* {% data variables.product.prodname_dotcom %} リソースへのアクセス権

例を使って説明しましょう。

{% data variables.product.prodname_dotcom %} ユーザーの Alice は、{% data variables.product.prodname_dotcom %} ID を使ってサードパーティの Web アプリケーション ExampleApp にログインします。 このプロセスの間、Alice は ExampleApp が自分に代わってアクションを実行することを認可します。

ただし、ExampleApp が Alice に代わって {% data variables.product.prodname_dotcom %} で実行できるアクティビティは、ExampleApp がインストールされているリポジトリ、ExampleApp が要求したアクセス許可、そして Alice の {% data variables.product.prodname_dotcom %} リソースへのアクセス権によって制限されます。 

つまり、ExampleApp が Alice に代わって Repo A というリポジトリに issue を作成するには、次のすべてに該当する必要があります。

* ExampleApp の {% data variables.product.prodname_github_app %} が、issue への書き込み権限を要求しています。
* Repo A の管理者特権を持つユーザーが、Repo A に ExampleApp の {% data variables.product.prodname_github_app %} をインストールしている必要があります。
* Alice は Repo A の読み取りアクセス許可を持っている必要があります。さまざまなアクティビティを実行するためにどのアクセス許可が必要かは、「[組織のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。
