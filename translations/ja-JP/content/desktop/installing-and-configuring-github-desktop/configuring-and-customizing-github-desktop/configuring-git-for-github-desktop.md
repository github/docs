---
title: GitHub Desktop用のGitの設定方法
shortTitle: Configuring Git
intro: '{% data variables.product.prodname_desktop %} を使用してローカル リポジトリの Git 構成設定を管理できます。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: f14b309dcc7a4c779e9debb68f3962dfd38247cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058517'
---
## {% data variables.product.prodname_desktop %} 用の Git 構成について

{% data variables.product.prodname_desktop %} にはローカルの Git 構成設定が使用され、これらの設定の一部 (グローバル作成者情報や、新しいリポジトリの作成時に使用される既定のブランチなど) を構成するオプションが用意されています。

{% data variables.product.prodname_desktop %} を使用する場合、リポジトリで行うコミットに関連付ける名前とメール アドレスを設定できます。 コンピューターのグローバル Git 構成で名前とメール アドレスが既に設定されている場合は、それらの値が {% data variables.product.prodname_desktop %} で検出されて使用されます。 {% data variables.product.prodname_desktop %} を使用する場合、個々のリポジトリに別々の名前とメール アドレスを設定することもできます。 これは、特定のリポジトリに対して別の仕事用メール アドレスを使用する必要がある場合に便利です。

Git 構成で設定されているメール アドレスが、現在ログインしている {% data variables.product.product_name %} アカウントに関連付けられたメール アドレスと一致しない場合、コミット前に {% data variables.product.prodname_desktop %} に警告が表示されます。

{% data variables.product.prodname_desktop %} では、新しいリポジトリを作成するときに使用する既定のブランチ名を変更することもできます。 既定では、{% data variables.product.prodname_desktop %} で作成する新しいリポジトリの既定のブランチ名として、`main` が使用されます。

{% tip %}

**ヒント**: パブリック コミットを行うと、すべてのユーザーが Git 構成のメール アドレスを確認できます。 詳細については、「[コミット メール アドレスの設定](/articles/setting-your-commit-email-address/)」を参照してください。

{% endtip %}

## グローバル作成者情報を構成する

{% data variables.product.prodname_desktop %} でグローバル作成者情報を構成すると、グローバル Git 構成の名前とメール アドレスが更新されます。 これは、{% data variables.product.prodname_desktop %} で作成するすべての新しいローカル リポジトリの既定の名前とメール アドレスになります。

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. [基本設定] ウィンドウで、 **[Git]** をクリックします。
  ![[基本設定] メニューの [Git] ウィンドウ](/assets/images/help/desktop/mac-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Git 構成の "名前" フィールド](/assets/images/help/desktop/mac-name-git-config.png) {% data reusables.desktop.select-email-git-config %} !["Git 構成" フィールドのメール アドレスの選択](/assets/images/help/desktop/mac-email-git-config.png) {% data reusables.desktop.click-save-git-config %} !["Git 構成" フィールドの [保存] ボタン](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. [オプション] ウィンドウで、 **[Git]** をクリックします。
![[オプション] メニューの [Git] ウィンドウ](/assets/images/help/desktop/windows-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Git 構成の "名前" フィールド](/assets/images/help/desktop/windows-name-git-config.png) {% data reusables.desktop.select-email-git-config %} !["Git 構成" フィールドのメール アドレスの選択](/assets/images/help/desktop/windows-email-git-config.png) {% data reusables.desktop.click-save-git-config %} !["Git 構成" フィールドの [保存] ボタン](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## 個々のリポジトリに対して異なる作成者情報を構成する

特定のリポジトリでコミットを作成するために使用する名前とメール アドレスを変更できます。 このローカル Git 構成は、この 1 つのリポジトリのみのグローバル Git 構成設定をオーバーライドします。

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## 新しいリポジトリの既定のブランチを構成する

{% data variables.product.prodname_desktop %} に新しいリポジトリを作成するときに使用される既定のブランチを構成できます。 既定のブランチについて詳しくは、「[既定のブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)」を参照してください。

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. [基本設定] ウィンドウで、 **[Git]** をクリックします。
  ![[基本設定] メニューの [Git] ウィンドウ](/assets/images/help/desktop/mac-select-git-pane.png)
1. [新しいリポジトリの既定のブランチ名] で、使用する既定のブランチ名を選びます。または、カスタム名を入力するには [その他...] を選びます。
  ![既定のブランチ名の選択オプション](/assets/images/help/desktop/mac-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} !["Git 構成" フィールドの [保存] ボタン](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. [オプション] ウィンドウで、 **[Git]** をクリックします。
  ![[オプション] メニューの [Git] ウィンドウ](/assets/images/help/desktop/windows-select-git-pane.png)
1. [新しいリポジトリの既定のブランチ名] で、使用する既定のブランチ名を選びます。または、カスタム名を入力するには [その他] を選びます。
  ![既定のブランチ名の選択オプション](/assets/images/help/desktop/windows-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} !["Git 構成" フィールドの [保存] ボタン](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## 参考資料

- 「[GitHub アカウントへのメール アドレスの追加](/articles/adding-an-email-address-to-your-github-account/)」
- 「[コミット メール アドレスを設定する](/articles/setting-your-commit-email-address/)」
- [ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches)
