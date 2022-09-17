---
title: GitHub CLI 拡張機能の使用
intro: '他の {% data variables.product.prodname_cli %} ユーザーによって書き込まれたカスタム拡張機能を使用する方法について学びます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: 14bd68ea6cec8df656e59c05f6cd3fa313857158
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068531'
---
## {% data variables.product.prodname_cli %} 拡張機能について

{% note %}

**メモ**: {% data variables.product.product_name %} および {% data variables.product.prodname_cli %} 以外の拡張機能は、{% data variables.product.product_name %} によって認定されず、個別のサービス利用規約、プライバシー ポリシー、サポート ドキュメントによって管理されます。 サード パーティの拡張機能を使用する際のリスクを軽減するには、拡張機能をインストールまたは更新する前に、拡張機能のソース コードを監査します。

{% endnote %}

{% data reusables.cli.cli-extensions %} {% data variables.product.prodname_cli %} 拡張機能を作成する方法の詳細については、"[{% data variables.product.prodname_cli %} 拡張機能の作成](/github-cli/github-cli/creating-github-cli-extensions)" を参照してください。

拡張機能はローカルにインストールされ、ユーザーにスコープが設定されます。 したがって、別のコンピューターから {% data variables.product.prodname_cli %} にアクセスする場合、または別のユーザーが同じコンピューターから {% data variables.product.prodname_cli %} にアクセスする場合、その拡張機能は使用できません。

## 拡張機能の検索

この [`gh-extension` トピックを使用してリポジトリを参照する](https://github.com/topics/gh-extension)ことで、拡張機能を見つけることができます。

## 拡張機能のインストール

拡張機能をインストールするには `extensions install` サブコマンドを使用します。 `repo` パラメーターを拡張機能のリポジトリに置き換えます。 `https://github.com/octocat/gh-whoami` のような完全な URL、または `octocat/gh-whoami` のように単に所有者とリポジトリを使用できます。

所有者とリポジトリを使用する場合、`gh` は、`gh` が現在認証されているホスト名を使用して拡張機能をインストールします。 完全な URL 形式は、別のホストから拡張機能をインストールする場合に便利です。 たとえば、{% data variables.product.prodname_ghe_server %} のユーザーは、完全なリポジトリ URL を使用して、{% data variables.product.prodname_dotcom_the_website %} またはその他のホストから拡張機能をインストールする必要があります。

現在のディレクトリから開発中の拡張機能をインストールするには、`repo` パラメーターの値として `.` を使用します。

```shell
gh extension install <em>repo</em>
```

同じ名前の拡張機能が既にインストールされている場合、コマンドは失敗します。 たとえば、`octocat/gh-whoami` をインストールしている場合は、`hubot/gh-whoami` をインストールする前にアンインストールする必要があります。

## インストール済みの拡張機能の表示

インストールされているすべての拡張機能を表示するには `extensions list` サブコマンドを使用します。 また、どの拡張機能に利用可能な更新プログラムがあるかも出力に示されます。

```shell
gh extension list
```

## 拡張機能の更新

拡張機能を更新するには `extensions upgrade` サブコマンドを使用します。 `extension` パラメーターを拡張機能の名前に置き換えます。

```shell
gh extension upgrade <em>extension</em>
```

インストールされているすべての拡張機能を更新するには、`--all` フラグを使用します。

```shell
gh extension upgrade --all
```

## 拡張機能のアンインストール

拡張機能をアンインストールするには `extensions remove` サブコマンドを使用します。 `extension` パラメーターを拡張機能の名前に置き換えます。

```shell
gh extension remove <em>extension</em>
```
