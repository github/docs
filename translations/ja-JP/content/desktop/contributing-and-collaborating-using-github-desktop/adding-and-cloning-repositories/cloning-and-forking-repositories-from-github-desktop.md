---
title: GitHub Desktopからのリポジトリのクローンとフォーク
intro: '{% data variables.product.prodname_desktop %}を使って{% data variables.product.prodname_dotcom %}上にあるリポジトリをクローンしたりフォークしたりできます。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---
### ローカルリポジトリについて
{% data variables.product.prodname_dotcom %} のリポジトリはリモートリポジトリです。 {% data variables.product.prodname_desktop %} を使用してリポジトリのクローンを作成またはフォークして、コンピューター上にローカルリポジトリを作成できます。

リポジトリのクローンを作成することで、アクセス権を持つ {% data variables.product.product_name %} に任意のリポジトリのローカルコピーを作成できます。 リポジトリを所有している場合、または書き込み権限がある場合は、ローカルとリモートの場所間で同期できます。 詳しい情報については、「[ブランチを同期する](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)」を参照してください。

リポジトリのクローンを作成するときに、{% data variables.product.product_name %} にプッシュした変更は、元のリポジトリに影響します。 元のプロジェクトに影響を与えずに変更を加えるには、リポジトリをフォークして別のコピーを作成します。 プルリクエストを作成して、メンテナがフォークの変更を元のアップストリームリポジトリに組み込むことを提案できます。 詳しい情報については「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」を参照してください。

{% data variables.product.prodname_desktop %} を使用して、書き込み権限のないリポジトリのクローンを作成しようとすると、{% data variables.product.prodname_desktop %} によってフォークを自動的に作成するように求められます。 フォークを使用して、元の上流リポジトリに貢献するか、独自のプロジェクトで独立して作業するかを選択できます。 既存のフォークはデフォルトで、上流リポジトリへの変更に貢献します。 この選択はいつでも変更できます。 詳しい情報については、「[フォークの動作を管理する](#managing-fork-behavior)」を参照してください。

リポジトリを{% data variables.product.prodname_dotcom %}、または{% data variables.product.prodname_enterprise %}から直接クローンすることもできます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_desktop %} にリポジトリをクローンする](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

### リポジトリをクローンする

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

### リポジトリをフォークする
書き込み権限のないリポジトリのクローンを作成すると、{% data variables.product.prodname_desktop %} がフォークを作成します。 フォークを作成またはクローンした後、{% data variables.product.prodname_desktop %} からフォークの使用方法について尋ねられます。

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}
{% data reusables.desktop.fork-type-prompt %}

### フォークの動作を管理する
{% data variables.product.prodname_desktop %} で、上流リポジトリでのフォークの動作を変更できます。

{% data reusables.desktop.open-repository-settings %}
{% data reusables.desktop.select-fork-behavior %}

### 参考リンク
- [リモートリポジトリについて](/github/getting-started-with-github/about-remote-repositories)
