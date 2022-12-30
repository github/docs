---
title: GitHub Desktopからのリポジトリのクローンとフォーク
intro: '{% data variables.product.prodname_desktop %}を使って{% data variables.product.prodname_dotcom %}上にあるリポジトリをクローンしたりフォークしたりできます。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  fpt: '*'
shortTitle: Clone & fork from Desktop
ms.openlocfilehash: e4182e56d0418e3aea07c94e0a3657ef8e104ea0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090154'
---
## ローカルリポジトリについて
{% data variables.product.prodname_dotcom %} のリポジトリはリモートリポジトリです。 {% data variables.product.prodname_desktop %} を使用してリポジトリのクローンを作成またはフォークして、コンピューター上にローカルリポジトリを作成できます。

リポジトリのクローンを作成することで、アクセス権を持つ {% data variables.product.product_name %} に任意のリポジトリのローカルコピーを作成できます。 リポジトリを所有している場合、または書き込み権限がある場合は、ローカルとリモートの場所間で同期できます。 詳細については、「[ブランチの同期](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)」を参照してください。

リポジトリのクローンを作成するときに、{% data variables.product.product_name %} にプッシュした変更は、元のリポジトリに影響します。 元のプロジェクトに影響を与えずに変更を加えるには、リポジトリをフォークして別のコピーを作成します。 プルリクエストを作成して、メンテナがフォークの変更を元のアップストリームリポジトリに組み込むことを提案できます。 詳細については、「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」を参照してください。

{% data variables.product.prodname_desktop %} を使用して、書き込み権限のないリポジトリのクローンを作成しようとすると、{% data variables.product.prodname_desktop %} によってフォークを自動的に作成するように求められます。 フォークを使用して、元の上流リポジトリに貢献するか、独自のプロジェクトで独立して作業するかを選択できます。 既存のフォークはデフォルトで、上流リポジトリへの変更に貢献します。 この選択はいつでも変更できます。 詳細については、「[フォークの動作を管理する](#managing-fork-behavior)」を参照してください。

リポジトリを{% data variables.product.prodname_dotcom %}、または{% data variables.product.prodname_enterprise %}から直接クローンすることもできます。 詳細については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_desktop %} にリポジトリをクローンする](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

## リポジトリをクローンする

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

## リポジトリをフォークする
書き込み権限のないリポジトリのクローンを作成すると、{% data variables.product.prodname_desktop %} がフォークを作成します。 フォークを作成またはクローンした後、{% data variables.product.prodname_desktop %} からフォークの使用方法について尋ねられます。

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %} {% data reusables.desktop.fork-type-prompt %}

## フォークの動作を管理する
{% data variables.product.prodname_desktop %} で、上流リポジトリでのフォークの動作を変更できます。

{% data reusables.desktop.open-repository-settings %} {% data reusables.desktop.select-fork-behavior %}

## ローカル リポジトリのエイリアスを作成する
ローカル リポジトリのエイリアスを作成すると、{% data variables.product.prodname_desktop %} 内にある同じ名前のリポジトリを区別することができます。 ローカル リポジトリのエイリアスを作成しても、リポジトリの {% data variables.product.prodname_dotcom %} での名前には影響しません。 リポジトリの一覧では、エイリアスが斜体で表示されます。

1. {% data variables.product.prodname_desktop %} の左上隅にある、現在のリポジトリ名の右側で、{% octicon "triangle-down" aria-label="The triangle-down icon" %} をクリックします。
2. エイリアスを作成するリポジトリを右クリックして、 **[エイリアスの作成]** をクリックします。
3. リポジトリのエイリアスを入力します。
4. **[エイリアスの作成]** をクリックします。

## 参考資料
- [リモート リポジトリについて](/github/getting-started-with-github/about-remote-repositories)
