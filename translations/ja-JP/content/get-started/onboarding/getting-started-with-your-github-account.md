---
title: GitHub アカウントの概要
intro: '{% data variables.product.prodname_dotcom %} の個人用アカウントを使うと、リポジトリのインポートや作成を行ったり、他のユーザーと共同作業したり、{% data variables.product.prodname_dotcom %} コミュニティとつながったりすることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 38d23c1a1b5021a681aedff8813daad751905d8a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408923'
---
このガイドでは、{% data variables.product.company_short %} アカウントの設定と、コラボレーションやコミュニティに関する {% data variables.product.product_name %} 機能について説明します。

## パート 1: {% data variables.product.prodname_dotcom %} アカウントの構成

{% ifversion fpt or ghec %} {% data variables.product.product_name %} の使用を開始するための最初の手順は、アカウントを作成し、ニーズに最適な製品を選択し、メールを確認し、2 要素認証を設定し、プロファイルを表示することです。
{% elsif ghes %} {% data variables.product.product_name %} の使用を開始するための最初の手順は、アカウントにアクセスし、2 要素認証を設定し、プロファイルを表示することです。
{% elsif ghae %} {% data variables.product.product_name %} の使用を開始するための最初の手順は、アカウントにアクセスし、プロファイルを表示することです。
{% endif %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} にはいくつかの種類のアカウントがあります。 {% endif %} {% data variables.product.product_name %} を使用するすべてのユーザーは、専用の個人アカウントを持っています。これは、複数の組織やチームの一部である場合があります。 個人アカウントは、{% data variables.product.product_location %} でのユーザーの ID であり、ユーザーを個人として表すものです。

{% ifversion fpt or ghec %}
### 1. アカウントの作成
{% data variables.product.product_location %} のアカウントにサインアップするには、 https://github.com/ にアクセスし、プロンプトに従います。

{% data variables.product.prodname_dotcom %} アカウントをセキュリティで保護するには、強力な一意のパスワードを使用する必要があります。 詳細については、「[強力なパスワードの作成](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password)」を参照してください。

### 2. {% data variables.product.prodname_dotcom %} 製品の選択
個人アカウントのさまざまな機能にアクセスするには、{% data variables.product.prodname_free_user %} または {% data variables.product.prodname_pro %} を選択できます。 最初にどちらの製品を選べばよいかわからない場合は、後からいつでもアップグレードできます。

{% data variables.product.prodname_dotcom %} のすべてのプランの詳細については、「[{% data variables.product.prodname_dotcom %} の製品](/get-started/learning-about-github/githubs-products)」を参照してください。

### 3. メール アドレスの検証
{% data variables.product.product_name %} プランのすべての機能を使用できるようにするには、新しいアカウントにサインアップした後にメール アドレスを検証します。 詳細については、「[メール アドレスを検証する](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)」を参照してください。
{% endif %}

{% ifversion ghes %}
### 1. アカウントへのアクセス
{% data variables.product.product_name %} インスタンスの管理者は、アカウントの認証方法とアクセス方法についてユーザーに通知します。 プロセスは、インスタンス用に構成した認証モードによって異なります。
{% endif %}

{% ifversion ghae %}
### 1. アカウントへのアクセス
{% data variables.product.product_name %} のエンタープライズ所有者がユーザーのアカウントを設定すると電子メール通知が届き、ユーザーは SAML シングル サインオン (SSO) で認証を行い、アカウントにアクセスできるようになります。
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} 2 要素認証の構成
2 要素認証 (2FA) は、Web サイトまたはアプリにログインするときに使用されるセキュリティの追加のレイヤーです。 アカウントの安全のため、2FA を構成することを強くお勧めします。 詳細については、「[2 要素認証について](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)」を参照してください。
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} {% data variables.product.prodname_dotcom %} プロファイルとコントリビューション グラフの表示
{% data variables.product.prodname_dotcom %} プロファイルでは、ピン留めしたリポジトリと gist、公開用に選択した組織メンバーシップ、行ったコントリビューション、および作成したプロジェクトを通じて、自分の作業の様子を確認できます。 詳細については、「[プロファイルについて](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)」および「[プロファイルでコントリビューションを表示する](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)」を参照してください。

## パート 2: {% data variables.product.product_name %} のツールとプロセスの使用
{% data variables.product.product_name %} を最適に使用するには、Git を設定する必要があります。 Git は、{% data variables.product.prodname_dotcom %} に関連してローカルコンピュータで発生するすべての動作の根本を担っています。 {% data variables.product.product_name %} で効果的に共同作業を行うには、{% data variables.product.prodname_dotcom %} Flavored Markdown を使用して issue や pull request を記述します。

### 1. Git の学習
{% data variables.product.prodname_dotcom %} の開発における共同作業は、ユーザーがローカル リポジトリから {% data variables.product.product_name %} にコミットを発行し、他のユーザーが Git を使用してそれらを表示し、フェッチし、更新するというアプローチで進められます。 Git の詳細については、「[Git ハンドブック](https://guides.github.com/introduction/git-handbook/)」ガイドを参照してください。 {% data variables.product.product_name %} での Git の使用方法について詳しくは、「[{% data variables.product.prodname_dotcom %} のフロー](/get-started/quickstart/github-flow)」を参照してください。
### 2. Git の設定
Git をローカルのコンピューターで使用する場合は、コマンド ライン、IDE エディター、テキスト エディターのいずれを使用するかにかかわらず、Git をインストールして設定する必要があります。 詳細については、「[Git のセットアップ](/get-started/quickstart/set-up-git)」を参照してください。

ビジュアル インターフェイスを使用する場合は、{% data variables.product.prodname_desktop %} をダウンロードして使用できます。 {% data variables.product.prodname_desktop %} は Git にパッケージ化されているため、Git を個別にインストールする必要はありません。 詳細については、「[{% data variables.product.prodname_desktop %} の概要](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)」を参照してください。

Git をインストールすると、ローカル コンピューターから {% data variables.product.product_name %} リポジトリに接続できるようになります。これは、自分のリポジトリでも、別のユーザーのフォークでも可能です。 Git から {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のリポジトリに接続する場合は、HTTPS または SSH を使用して {% data variables.product.product_name %} での認証を行う必要があります。 詳細については、「[リモート リポジトリについて](/get-started/getting-started-with-git/about-remote-repositories)」を参照してください。

### 3. {% data variables.product.product_name %} の操作方法の選択
すべてのユーザーは、{% data variables.product.prodname_dotcom %} を操作するために独自のワークフローを使用します。使用するインターフェイスと方法は、ユーザーの好みとニーズに応じて決まります。

これらの各方法で {% data variables.product.product_name %} への認証を行う方法について詳しくは、「[{% data variables.product.prodname_dotcom %} への認証方法について](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)」を参照してください。

| **方法**  | **説明** | **ユース ケース** |
| ------------- | ------------- | ------------- |
| {% data variables.product.prodname_dotcom_the_website %} を参照する | ファイルをローカルで操作する必要がない場合、{% data variables.product.product_name %} では、リポジトリの作成とフォークからファイルの編集、pull request の オープンまで、ほとんどの Git 関連アクションをブラウザーで直接実行できます。| この方法は、ビジュアル インターフェイスが必要な場合で、ローカルでの作業を必要とせず、変更を簡単にすばやく行う必要がある場合に便利です。 |
| {% data variables.product.prodname_desktop %} | {% data variables.product.prodname_desktop %} は、コマンドライン上でテキストコマンドを使うのではなく、ビジュアルインターフェースを使って、あなたの {% data variables.product.prodname_dotcom_the_website %} ワークフローを拡張し簡略化します。 {% data variables.product.prodname_desktop %} の使用を開始する方法について詳しくは、「[{% data variables.product.prodname_desktop %} の概要](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)」を参照してください。 | この方法は、ファイルをローカルで操作する必要があるが、ビジュアル インターフェイスを通じて Git を使用し、{% data variables.product.product_name %} を操作したいという場合に最適です。 |
| IDE またはテキスト エディター  | Git でファイルを開いて編集したり、拡張機能を使用したり、プロジェクト構造を表示したりするための、既定のテキスト エディター ([Atom](https://atom.io/) や [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) など) を設定することができます。 詳細については、「[Git とテキスト エディターの関連付け](/github/using-git/associating-text-editors-with-git)」を参照してください。 | これは、複雑なファイルやプロジェクトを操作している場合や、すべてを 1 か所に配置したい場合に便利です。テキスト エディターや IDE を使用すると、エディター内でコマンド ラインに直接アクセスできる場合が多いためです。 |
| コマンド ライン ({% data variables.product.prodname_cli %} の有無を問わず) | Git の使用方法と {% data variables.product.product_name %} の操作方法を最も詳細に制御およびカスタマイズするには、コマンド ラインを使用します。 Git コマンドの使用について詳しくは、「[Git チートシート](/github/getting-started-with-github/quickstart/git-cheatsheet)」を参照してください。<br/><br/> {% data variables.product.prodname_cli %} は、ユーザーがインストールできる個別のコマンドライン ツールです。これを使用すると、pull request、issue、{% data variables.product.prodname_actions %}、およびその他の {% data variables.product.prodname_dotcom %} 機能をターミナルに集めて、すべての作業を 1 か所で行うことができます。 詳細については、「[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)」を参照してください。 | これは、既にコマンド ラインからの操作を行っている (コンテキストの切り替えを回避したい) ユーザーや、コマンド ラインを使用する方が快適なユーザーにとって特に便利です。 |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API | {% data variables.product.prodname_dotcom %} には、{% data variables.product.product_name %} の操作に使用できる REST API と GraphQL API が用意されています。 詳しくは、「[API を使ってみる](/github/extending-github/getting-started-with-the-api)」をご覧ください。 | {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API は、一般的なタスクを自動化したり、データをバックアップしたり、{% data variables.product.prodname_dotcom %} を拡張する統合を作成したりしたい場合に特に役立ちます。 |
### 4. {% data variables.product.product_name %} での書き込み
書式設定に {% data variables.product.prodname_dotcom %} Flavored Markdown を使用すると、issue や pull request の内容を整理し、明確に伝えることができます。これは、読み書きしやすい構文と一部のカスタム機能を組み合わせたものです。 詳細については、[{% data variables.product.prodname_dotcom %} での書き込みと書式設定](/github/writing-on-github/about-writing-and-formatting-on-github)に関するページを参照してください。

{% data variables.product.prodname_dotcom %} Flavored Markdown については、{% data variables.product.prodname_learning %} の「[Communicate using Markdown (Markdown を使用したコミュニケーション)](https://github.com/skills/communicate-using-markdown)」コースで学習できます。

### 5. {% data variables.product.product_name %} での検索
統合検索機能を使うと、{% data variables.product.product_name %} 上の多くのリポジトリ、ユーザー、コードの行から探しているものを見つけることができます。 検索は {% data variables.product.product_name %} 全体にわたってグローバルに実行することも、特定のリポジトリや組織に絞って実行することもできます。 {% data variables.product.product_name %} で実行できる検索の種類について詳しくは、「[{% data variables.product.prodname_dotcom %} での検索について](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

検索構文を使用すると、修飾子を使ってクエリを作成し、検索対象を明確に指定できます。 検索で使用する検索構文の詳細については、「[{% data variables.product.prodname_dotcom %} での検索](/github/searching-for-information-on-github/searching-on-github)」を参照してください。

### 6. {% data variables.product.product_name %} でのファイルの管理
{% data variables.product.product_name %} では、自分のリポジトリ内、または書き込みアクセス権を持つ任意のリポジトリ内のファイルを作成、編集、移動、削除できます。 ファイルの変更履歴を行単位で追跡することもできます。 詳細については、「[{% data variables.product.prodname_dotcom %} でのファイルの管理](/github/managing-files-in-a-repository/managing-files-on-github)」を参照してください。

## パート 3: {% data variables.product.product_name %} での共同作業
{% data variables.product.product_name %} では、複数のリポジトリで任意の数のユーザーが連携的に作業できます。 ユーザーは、設定を構成したり、プロジェクト ボードを作成したり、通知を管理したりして、効果的なコラボレーションを促進できます。

### 1. リポジトリの操作

#### リポジトリを作成する
リポジトリは、プロジェクトのフォルダーのようなものです。 個人アカウントには、任意の数のパブリック リポジトリとプライベート リポジトリを含めることができます。 リポジトリには、フォルダーとファイル、画像、ビデオ、スプレッドシート、データ セットのほか、リポジトリ内のすべてのファイルのリビジョン履歴を含めることができます。 詳細については、[リポジトリ](/github/creating-cloning-and-archiving-repositories/about-repositories)に関する説明を参照してください。

新しいリポジトリを作成する際には、プロジェクトの概要を紹介する README ファイルと共に、リポジトリを初期化する必要があります。 詳細については、「[新しいリポジトリの作成](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)」を参照してください。

#### リポジトリをクローンする
既存のリポジトリを {% data variables.product.product_name %} からローカル コンピューターに複製すると、ファイルの追加や削除、マージ競合の修正、複雑なコミットが行いやすくなります。 リポジトリをクローンすると、その時点で {% data variables.product.prodname_dotcom %} にあるすべてのリポジトリ データの完全なコピーがプルダウンされます。これには、プロジェクトのすべてのファイルとフォルダーの全バージョンが含まれます。 詳細については、「[リポジトリをクローンする](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)」を参照してください。

#### リポジトリをフォークする
フォークは、自分が管理するリポジトリのコピーです。ここで行った変更は、プロジェクト所有者に pull request を送信しない限り、元のリポジトリには影響しません。 一般的にフォークは、他のユーザのプロジェクトへの変更を提案するため、あるいは他のユーザのプロジェクトを自分のアイディアの出発点として活用するために使用します。 詳細については、「[フォークの操作](/github/collaborating-with-pull-requests/working-with-forks)」を参照してください。
### 2. プロジェクトのインポート
既存のプロジェクトの中に、{% data variables.product.product_name %} に移行したいものがある場合は、{% data variables.product.prodname_dotcom %} Importer、コマンド ライン、または外部移行ツールを使用してプロジェクトをインポートできます。 詳細については、「[{% data variables.product.prodname_dotcom %} にソース コードをインポートする](/github/importing-your-projects-to-github/importing-source-code-to-github)」を参照してください。

### 3. コラボレーターとアクセス許可の管理
リポジトリの Issue、プルリクエスト、プロジェクトボードを使ってプロジェクトで他者とコラボレーションできます。 リポジトリ設定の **[コラボレーター]** タブから、他のユーザーをコラボレーターとしてリポジトリに招待できます。 詳細については、「[コラボレーターを個人リポジトリに招待する](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)」を参照してください。

ユーザーは、自分の個人アカウントで作成したリポジトリの所有者となり、そのリポジトリを完全に制御できます。 コラボレーターにはリポジトリへの書き込みアクセス権が付与されますが、操作のアクセス許可は制限されます。 詳しい情報については、「[個人アカウントのリポジトリのアクセス許可レベル](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)」を参照してください。

### 4. リポジトリ設定の管理
リポジトリの所有者は、リポジトリの可視性、トピック、ソーシャル メディア プレビューなど、いくつかの設定を構成できます。 詳細については、「[リポジトリ設定の管理](/github/administering-a-repository/managing-repository-settings)」を参照してください。

### 5. 健全なコントリビューションを促すプロジェクトの設定
{% ifversion fpt or ghec %} リポジトリでのコラボレーターの活動を促進するには、プロジェクトの使用、参加、および啓蒙を促進するコミュニティが必要です。 詳細については、オープンソース ガイドの「[友好的なコミュニティを構築する](https://opensource.guide/building-community/)」を参照してください。

所有者は、参加ガイドライン、行動規範、ライセンスなどのファイルをリポジトリに追加することで、コラボレーターが参加しやすい環境を作り、有意義で有用な貢献を促進することができます。 詳細については、「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。
{% endif %} {% ifversion ghes or ghae %} 所有者は、参加ガイドライン、行動規範、サポート リソースなどのファイルをリポジトリに追加することで、コラボレーターが参加しやすい環境を作り、有意義で有用な貢献を促進することができます。 詳細については、「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。
{% endif %}

### 6. GitHub Issues とプロジェクト ボードの使用
GitHub Issues を使用すると、issue や pull request に関する作業を整理し、プロジェクト ボードでワークフローを管理できます。 詳細については、「[Issue について](/issues/tracking-your-work-with-issues/about-issues)」と「[プロジェクト ボードについて](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください。

### 7. 通知の管理
通知では、ユーザーがサブスクライブまたは参加している {% data variables.product.prodname_dotcom %} のアクティビティに関する最新情報が伝えられます。 会話に関心がなくなった場合は、今後受信する通知の種類を、サブスクライブ解除、Watch 解除、またはカスタマイズできます。 詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)」を参照してください。

### 8. {% data variables.product.prodname_pages %} の使用
{% data variables.product.prodname_pages %} を使用すると、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上のリポジトリから Web サイトを直接作成またはホストできます。 詳細については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages)」を参照してください。

{% ifversion discussions %}
### 9. {% data variables.product.prodname_discussions %} の使用
リポジトリに対して {% data variables.product.prodname_discussions %} を有効にすると、プロジェクトのコミュニティを構築するのに役立ちます。 保守担当者、共同作成者、閲覧者は、ディスカッションを使用して、お知らせの共有、質問と回答、目標に関する会話への参加を行うことができます。 詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。
{% endif %}
## パート 4: {% data variables.product.product_name %} での作業のカスタマイズと自動化

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. {% data variables.product.prodname_marketplace %} の使用
{% data reusables.getting-started.marketplace %} {% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API の使用
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} {% data variables.product.prodname_actions %} の構築
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} {% data variables.product.prodname_registry %} の発行と管理 
{% data reusables.getting-started.packages %}

## パート 5: {% data variables.product.product_name %} での安全な作業
{% data variables.product.product_name %} には、リポジトリ内のコードとシークレットをセキュリティで保護するのに役立つ、さまざまなセキュリティ機能があります。 一部の機能はすべてのリポジトリで利用できますが、その他の機能はパブリック リポジトリおよび {% data variables.product.prodname_GH_advanced_security %} ライセンスのあるリポジトリでのみ利用できます。 {% data variables.product.product_name %} のセキュリティ機能の概要については、「[{% data variables.product.prodname_dotcom %} セキュリティ機能](/code-security/getting-started/github-security-features)」を参照してください。

### 1. リポジトリの保護
リポジトリ管理者は、リポジトリのセキュリティ設定を構成することで、リポジトリをセキュリティで保護できます。 これには、リポジトリへのアクセスの管理、セキュリティ ポリシーの設定、依存関係の管理が含まれます。 パブリック リポジトリの場合、および {% data variables.product.prodname_GH_advanced_security %} が有効になっている組織が所有するプライベート リポジトリの場合は、コードとシークレットのスキャンを構成して、脆弱性を自動的に特定し、トークンとキーが公開されないようにすることもできます。 

リポジトリをセキュリティで保護するために実行できる手順の詳細については、「[リポジトリのセキュリティ保護](/code-security/getting-started/securing-your-repository)」を参照してください。

{% ifversion fpt or ghec %}
### 2. 依存関係の管理
安全に作業するうえで大きな要素となるのは、プロジェクトの依存関係を維持して、依存するすべてのパッケージとアプリケーションが確実に更新され、セキュリティで保護されるようにすることです。 ユーザーは、リポジトリの依存関係グラフを調べ、Dependabot による pull request の自動生成によって依存関係を最新の状態に維持し、脆弱な依存関係に関する Dependabot アラートとセキュリティ更新プログラムを受信することで、{% data variables.product.product_name %} でのリポジトリの依存関係を管理することができます。 

詳細については、「[ソフトウェア サプライ チェーンのセキュリティ保護](/code-security/supply-chain-security)」を参照してください。
{% endif %}

## パート 6: {% data variables.product.prodname_dotcom %} のコミュニティへの参加

{% data reusables.getting-started.participating-in-community %}

### 1. オープンソース プロジェクトへの貢献
{% data reusables.getting-started.open-source-projects %}

### 2. {% data variables.product.prodname_gcf %} とのやり取り
{% data reusables.support.ask-and-answer-forum %}

### 3. {% data variables.product.prodname_docs %} で {% data variables.product.product_name %} について読む

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. {% data variables.product.prodname_learning %} を使用した学習
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. オープンソース コミュニティのサポート
{% data reusables.getting-started.sponsors %}

### 6. {% data variables.contact.github_support %} への連絡
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## 参考資料
- 「[{% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team) の概要」 {% endif %} {% endif %}
