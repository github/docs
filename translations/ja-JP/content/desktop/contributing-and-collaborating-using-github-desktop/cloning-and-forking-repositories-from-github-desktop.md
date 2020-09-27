---
title: GitHub Desktopからのリポジトリのクローンとフォーク
intro: '{{ site.data.variables.product.prodname_desktop }}を使って{{ site.data.variables.product.prodname_dotcom }}上にあるリポジトリをクローンしたりフォークしたりできます。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### リポジトリのクローン方法
{{ site.data.variables.product.prodname_dotcom }}上のリポジトリは、リモートリポジトリとして存在します。  他の人が所有するパブリックリポジトリをクローンできます。 自分が所有するリポジトリをクローンして、自分のコンピュータ上にローカルコピーを作成し、これら2つの場所の間で同期を行えます。

リポジトリを{{ site.data.variables.product.prodname_dotcom }}、または{{ site.data.variables.product.prodname_enterprise }}から直接クローンすることもできます。 詳しい情報については、「[{{ site.data.variables.product.prodname_dotcom }} から {{ site.data.variables.product.prodname_desktop }} にリポジトリをクローンする](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

{% mac %}

{{ site.data.reusables.desktop.choose-clone-repository }}
  ![Mac アプリケーション内の [Clone] メニューオプション](/assets/images/help/desktop/clone-file-menu-mac.png)
{{ site.data.reusables.desktop.cloning-location-tab }}
  ![[Clone a repository] メニュー内の [Location] タブ](/assets/images/help/desktop/choose-repository-location-mac.png)
{{ site.data.reusables.desktop.cloning-repository-list }}  
![リポジトリリストのクローン](/assets/images/help/desktop/clone-a-repository-list-mac.png)
4. [**Choose...**]をクリックし、Finderウインドウを使用してリポジトリをクローンするローカルパスに移動します。 ![Chooseボタン](/assets/images/help/desktop/clone-choose-button-mac.png)
5. **Clone**をクリックします。 ![Cloneボタン](/assets/images/help/desktop/clone-button-mac.png)

{% endmac %}

{% windows %}

{{ site.data.reusables.desktop.choose-clone-repository }}
  ![Windows アプリケーション内の [Clone] メニューオプション](/assets/images/help/desktop/clone-file-menu-windows.png)
{{ site.data.reusables.desktop.cloning-location-tab }}
  ![[Clone a repository] メニュー内の [Location] タブ](/assets/images/help/desktop/choose-repository-location-win.png)
{{ site.data.reusables.desktop.cloning-repository-list }}     
![リポジトリリストのクローン](/assets/images/help/desktop/clone-a-repository-list-win.png)
4. **Choose...**をクリックし、Windows Explorerを使用してリポジトリをクローンするローカルパスに移動します。 ![Chooseボタン](/assets/images/help/desktop/clone-choose-button-win.png)
5. **Clone**をクリックします。 ![Cloneボタン](/assets/images/help/desktop/clone-button-win.png)

{% endwindows %}

### リポジトリのフォーク
書き込みアクセス権がないプロジェクトにコントリビュートするには、{{ site.data.variables.product.prodname_desktop }}を使ってそのリポジトリのフォークを作成します。 フォークに対する変更は、オリジナルのリポジトリには影響しません。 フォークに変更をコミットし、そしてオリジナルのリポジトリに対して提案する変更でプルリクエストをオープンできます。 詳しい情報については「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」を参照してください。

1. 書き込みアクセス権を持っていないリポジトリをクローンし、変更をコミットしようとすると、{{ site.data.variables.product.prodname_desktop }}は次の警告を発します。"You don't have write access to **REPOSITORY**." **create a fork（フォークの作成）**をクリックしてください。 ![フォークの作成リンク](/assets/images/help/desktop/create-a-fork.png)
3. **Fork this repository（このリポジトリをフォーク）**をクリックしてください。 ![このリポジトリのフォークボタン](/assets/images/help/desktop/fork-this-repo-button.png)
4. {{ site.data.variables.product.prodname_dotcom }}上のフォークを見るには、{{ site.data.variables.product.prodname_dotcom }}の右上で自分のプロフィール画像をクリックし、**Your repositories（あなたのリポジトリ）**をクリックしてください。 ![あなたのリポジトリリンク](/assets/images/help/profile/your-repositories.png)
