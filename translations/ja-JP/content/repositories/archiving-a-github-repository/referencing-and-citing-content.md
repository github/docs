---
title: コンテンツを参照して引用する
intro: サードパーティツールを使用して GitHub のコンテンツを引用したり参照したりできます。
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: e0bb3dabe5e9ebc8a4dff80797087c8adadfb710
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132468'
---
## Zenodo によってリポジトリの永続的識別子を発行する

学術文献でリポジトリを参照しやすくするため、永続的識別子 (デジタルオブジェクト識別子 (DOI) とも呼ばれます) を作成できます。 データ アーカイブ ツール [Zenodo](https://zenodo.org/about) を使うと、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のリポジトリをアーカイブし、アーカイブの DOI を発行できます。

{% tip %}

**ヒント:**
- Zenodo からアクセスできるのはパブリック リポジトリだけなので、アーカイブするリポジトリが[パブリック](/articles/making-a-private-repository-public)であることを確認してください。
- 組織に属するリポジトリをアーカイブする場合、組織の所有者は Zenodo アプリケーションの[アクセスの承認](/articles/approving-oauth-apps-for-your-organization)が必要になることがあります。
- 作業を再利用する方法を読者が把握できるように、必ずリポジトリに[ライセンス](/articles/open-source-licensing)を含めてください。

{% endtip %}

1. [Zenodo](http://zenodo.org/) に移動します。
2. 画面左上隅の **[ログイン]** をクリックします。 ![Zenodo のログイン ボタン](/assets/images/help/repository/zenodo_login.png)
3. **[GitHub でログイン]** をクリックします。 ![GitHub によって Zenodo へログインする](/assets/images/help/repository/zenodo_login_with_github.png)
4. アクセス許可についての情報をレビューしてから、 **[アプリケーションの認可]** をクリックします。 ![Zenodo の認可](/assets/images/help/repository/zenodo_authorize.png)
5. [Zenodo GitHub ページ](https://zenodo.org/account/settings/github/)に移動します。 ![Zenodo GitHub ページ](/assets/images/help/repository/zenodo_github_page.png)
6. アーカイブするリポジトリの名前の右にあるボタンを **[オフ]** から **[オン]** に切り替えて、アーカイブできるようにします。 ![リポジトリでの Zenodo のアーカイブの有効化](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo では、新しい {% data variables.product.product_name %} [リリース](/articles/about-releases/)を作成するたびに、リポジトリがアーカイブされて新しい DOI が発行されます。 「[リリースの作成](/articles/creating-releases/)」の手順に従って、新しく作成します。

## Figshare による研究素材の公表と引用

研究者はデータ管理サービス [Figshare](http://figshare.com) を使って、研究素材を公表したり引用したりできます。 詳細については、[Figshare のサポート サイト](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account)を参照してください。
