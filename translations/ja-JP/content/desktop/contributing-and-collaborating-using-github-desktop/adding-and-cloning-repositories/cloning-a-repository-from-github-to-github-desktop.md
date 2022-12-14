---
title: GitHubからのGitHub Desktopへのリポジトリのクローン方法
intro: '{% data variables.product.prodname_dotcom %} を使用して、リモートリポジトリを {% data variables.product.prodname_desktop %} にクローンできます。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: ba4ddcc8c3d95454ab06cac0293162e2fe01fe32
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117566'
---
{% tip %}

**ヒント:** また、{% data variables.product.prodname_desktop %} を使用すると、{% data variables.product.prodname_dotcom %} に存在するリポジトリもクローンできます。  詳細については、「[{% data variables.product.prodname_desktop %} からのリポジトリのクローン](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

{% endtip %}

{% mac %}

1. クローンする前に、{% data variables.product.product_location %}と{% data variables.product.prodname_desktop %}にサインインします。
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. **[選択]** をクリックし、[Finder] ウィンドウで、リポジトリのクローン先となるローカル パスへ移動します。
![URL タブにある [選択] ボタン](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **注:** リポジトリが LFS を使用するように構成されている場合は、{% data variables.large_files.product_name_short %} の初期化を要求するプロンプトが表示されます。

  {% endnote %}

5. **[複製]** をクリックします。
![URL タブにある [クローン] ボタン](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. クローンする前に、{% data variables.product.product_location %}と{% data variables.product.prodname_desktop %}にサインインします。
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. **[選択]** をクリックし、Windows Explorer で、リポジトリのクローン先となるローカル パスへ移動します。
![[選択] ボタン](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **注:** リポジトリが LFS を使用するように構成されている場合は、{% data variables.large_files.product_name_short %} の初期化を要求するプロンプトが表示されます。

  {% endnote %}

5. **[複製]** をクリックします。
![Cloneボタン](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
