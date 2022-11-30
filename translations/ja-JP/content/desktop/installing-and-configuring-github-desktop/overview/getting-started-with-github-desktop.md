---
title: GitHub Desktop を使ってみる
intro: '{% data variables.product.prodname_desktop %} のセットアップ、認証、構成して、自分のマシンから直接プロジェクトに貢献できるようにする方法を学びます。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
shortTitle: Get started
ms.openlocfilehash: ae67886e55d88ca3c6330d3d8f3c76528e765c78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117318'
---
## はじめに
{% data variables.product.prodname_desktop %} は、コマンドラインや Web ブラウザの代わりに GUI を使用して {% data variables.product.prodname_dotcom %} とやり取りできるようにするアプリケーションです。 {% data variables.product.prodname_desktop %} は、あなたとあなたの Team が Git および {% data variables.product.prodname_dotcom %} とベストプラクティスを使用して共同開発することを推奨します。 {% data variables.product.prodname_desktop %} を使用すると、変更を視覚的に確認して、デスクトップからほとんどの Git コマンドを完了できます。 {% data variables.product.prodname_desktop %} を使用してリモートリポジトリにプッシュ、プル、およびクローンを作成し、コミットの関連付けやプルリクエストの作成などのコラボレーションツールを使用できます。

このガイドは、アプリケーションのセットアップ、アカウントの認証、基本設定の構成、および {% data variables.product.prodname_desktop %} を使用したプロジェクト管理の基本を紹介しており、{% data variables.product.prodname_desktop %} の使用開始の際に役立ちます。 このガイドを実行すると、{% data variables.product.prodname_desktop %} を使用してプロジェクトでコラボレーションを行い、リモートリポジトリに接続できるようになります。

{% data variables.product.prodname_desktop %} を始める前に、Git と {% data variables.product.prodname_dotcom %} の基本を理解しておくと便利です。 詳細については、次の記事を参照してください。

- 「[Git を使用する](/github/getting-started-with-github/using-git)」
- 「[{% data variables.product.prodname_dotcom %} について学ぶ](/github/getting-started-with-github/learning-about-github)」
- 「[{% data variables.product.prodname_dotcom %} の概要](/github/getting-started-with-github)」

{% data variables.product.prodname_desktop %} はオープンソースプロジェクトです。 ロードマップの確認、プロジェクトへの貢献、および Issue をオープンしてフィードバックや機能のリクエストを提供することができます。 詳細については、[`desktop/desktop`](https://github.com/desktop/desktop) リポジトリを参照してください。

## パート 1: インストールと認証
{% data variables.product.prodname_desktop %} は、サポートされている任意のオペレーティングシステムにインストールできます。 詳細については、「[サポートされているオペレーティング システム](/desktop/getting-started-with-github-desktop/supported-operating-systems)」を参照してください。

{% data variables.product.prodname_desktop %} をインストールするには、[{% data variables.product.prodname_desktop %}](https://desktop.github.com/) のダウンロード ページにアクセスします。 詳細については、「[{% data variables.product.prodname_desktop %} のインストール方法](/desktop/installing-and-configuring-github-desktop/installing-github-desktop)」を参照してください。

{% data variables.product.prodname_desktop %} をインストールした後、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} のアカウントでアプリケーションを認証できます。 認証されると、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} のリモートリポジトリに接続できます。

{% mac %}

1. {% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} に認証する前に、アカウントが必要になります。 アカウントの作成の詳細については、「[新しい {% data variables.product.prodname_dotcom %} アカウントへのサインアップ](/github/getting-started-with-github/signing-up-for-a-new-github-account)」を参照するか、{% data variables.product.prodname_enterprise %} のサイト管理者にお問い合わせください。

2. [{% data variables.product.prodname_desktop %}] ドロップダウン メニューで、 **[ユーザー設定]** をクリックします。 [ユーザー設定] ウィンドウで、 **[アカウント]** をクリックし、手順に従ってサインインします。 認証の詳細については、「[{% data variables.product.prodname_dotcom %} に認証する](/desktop/getting-started-with-github-desktop/authenticating-to-github)」を参照してください。
  ![GitHub の [サインイン] ボタン](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. {% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} に認証する前に、アカウントが必要になります。 アカウントの作成の詳細については、「[新しい {% data variables.product.prodname_dotcom %} アカウントへのサインアップ](/github/getting-started-with-github/signing-up-for-a-new-github-account)」を参照するか、{% data variables.product.prodname_enterprise %} のサイト管理者にお問い合わせください。

2. [ファイル] ドロップダウン メニューの **[オプション]** をクリックします。 [オプション] ウィンドウで、 **[アカウント]** をクリックし、手順に従ってサインインします。 認証の詳細については、「[{% data variables.product.prodname_dotcom %} に認証する](/desktop/getting-started-with-github-desktop/authenticating-to-github)」を参照してください。
  ![GitHub の [サインイン] ボタン](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## パート 2: {% data variables.product.prodname_desktop %} のカスタマイズと設定
{% data variables.product.prodname_desktop %} のインストール後、ニーズに最も合うようにアプリを設定してカスタマイズできます。

{% mac %}

{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} でのアカウントの接続または削除、デフォルトのテキストエディタやシェルの選択、Git 設定の編集、{% data variables.product.prodname_desktop %} の外観の変更、システムダイアログボックスのカスタマイズ、{% data variables.product.prodname_desktop %} の [Preferences] ウィンドウでのプライバシー設定ができます。 詳細については、「[ベーシック設定](/desktop/getting-started-with-github-desktop/configuring-basic-settings)」を参照してください。

  ![[Preference] ウィンドウの基本設定](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} でのアカウントの接続または削除、デフォルトのテキストエディタやシェルの選択、Git 設定の編集、{% data variables.product.prodname_desktop %} の外観の変更、システムダイアログボックスのカスタマイズ、{% data variables.product.prodname_desktop %} の [Options] ウィンドウでのプライバシー設定ができます。 詳細については、「[ベーシック設定](/desktop/getting-started-with-github-desktop/configuring-basic-settings)」を参照してください。

  ![[Options] ウィンドウの基本設定](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

## パート 3: {% data variables.product.prodname_desktop %} でプロジェクトに貢献する
アプリをインストール、認証、設定すると、{% data variables.product.prodname_desktop %} を使用開始できます。 リポジトリを作成、追加、またはクローンし、{% data variables.product.prodname_desktop %} を使用してリポジトリへのコントリビューションを管理できます。

### リポジトリの作成、追加、クローン作成
新しいリポジトリを作成するには、[ファイル] メニューを選択し、 **[新しいリポジトリ...]** をクリックします。詳細については、「[{% data variables.product.prodname_desktop %} を使用して最初のリポジトリを作成する](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)」を参照してください。

[ファイル] メニューを選択し、 **[Add Local Repository...]\(ローカル リポジトリの追加...\)** をクリックすると、ローカル コンピューターから リポジトリを追加できます。詳細については、「[ローカル コンピューターから {% data variables.product.prodname_desktop %} へのリポジトリの追加](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)」を参照してください。

{% data variables.product.prodname_dotcom %} からリポジトリを複製するには、[ファイル] メニューを選択し、 **[リポジトリの複製...]** をクリックします。詳細については、「[{% data variables.product.prodname_desktop %} からのリポジトリのクローンとフォーク](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)」を参照してください。

{% mac %}

  ![リポジトリの作成、追加、およびクローン作成に関する [File] メニューオプション](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![リポジトリの作成、追加、およびクローン作成に関する [File] メニューオプション](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### ブランチでの変更
{% data variables.product.prodname_desktop %} を使用して、プロジェクトのブランチを作成できます。 ブランチは、開発作業をリポジトリ内の他のブランチから分離するため、変更を安全に試すことができます。 詳細については、「[ブランチを管理する](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)」を参照してください。

  ![[New Branch] ボタン](/assets/images/help/desktop/new-branch-button-mac.png)

ブランチに変更を加えた後、{% data variables.product.prodname_desktop %} で確認し、変更の追跡のためにコミットすることができます。 詳細については、「[プロジェクトへの変更のコミットやレビュー](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)」を参照してください。

  ![コミットの表示と作成](/assets/images/help/desktop/commit-button.png)

変更にリモートでアクセスしたり、他のユーザと共有したりする場合は、コミットを {% data variables.product.prodname_dotcom %} にプッシュします。 詳細については、「[{% data variables.product.prodname_dotcom %} に変更をプッシュする](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)」を参照してください。

### {% data variables.product.prodname_desktop %} とのコラボレーション
{% data variables.product.prodname_desktop %} を使用して、問題を作成したり、リクエストをプルして他のユーザとプロジェクトでコラボレーションしたりすることができます。 Issue は、アイデアを追跡し、プロジェクトに加えられる可能性のある変更について議論する際に役立ちます。 プルリクエストを使用すると、提案された変更を他のユーザと共有したり、フィードバックを受け取ったり、変更をプロジェクトにマージしたりすることができます。 詳細については、「[issue もしくは pull request の作成](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)」を参照してください。

自分またはコラボレータのプルリクエストは、{% data variables.product.prodname_desktop %} で見ることができます。 {% data variables.product.prodname_desktop %} でプルリクエストを表示し、デフォルトのテキストエディタでプロジェクトのファイルとリポジトリを開くと、提案された変更を確認して、追加の変更を加えることができます。 詳細については、「[{% data variables.product.prodname_desktop %} での pull request の表示](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)」を参照してください。

### ローカルリポジトリの同期を維持する
ローカルリポジトリに変更を加える場合、または他のユーザがリモートリポジトリに変更を加える場合は、プロジェクトのローカルコピーをリモートリポジトリと同期する必要があります。 {% data variables.product.prodname_desktop %} は、コミットをプッシュおよびプルすることにより、プロジェクトのローカルコピーをリモートバージョンと同期させることができます。 詳細については、「[ブランチの同期](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)」を参照してください。

## 参考資料
- 「[{% data variables.product.prodname_desktop %} のインストールと認証](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)」
- 「[{% data variables.product.prodname_desktop %} を使用したコントリビューションとコラボレーション](/desktop/contributing-and-collaborating-using-github-desktop)」
