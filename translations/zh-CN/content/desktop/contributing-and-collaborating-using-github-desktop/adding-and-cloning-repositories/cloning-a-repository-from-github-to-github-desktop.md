---
title: 将仓库从 GitHub 克隆到 GitHub Desktop
intro: '您可以使用 {% data variables.product.prodname_dotcom %} 将远程仓库克隆到 {% data variables.product.prodname_desktop %}。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: ba4ddcc8c3d95454ab06cac0293162e2fe01fe32
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099284'
---
{% tip %}

提示：也可使用 {% data variables.product.prodname_desktop %} 克隆 {% data variables.product.prodname_dotcom %} 上的存储库。  有关详细信息，请参阅“[从 {% data variables.product.prodname_desktop %} 克隆存储库](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)”。

{% endtip %}

{% mac %}

1. 开始克隆前，请先登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_desktop %}。
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. 单击“选择...”，并使用 Finder 窗口找到要克隆存储库的本地路径。
![URL 选项卡中的“选择”按钮](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  注意：如果存储库配置为使用 LFS，系统会提示你初始化 {% data variables.large_files.product_name_short %}。

  {% endnote %}

5. 单击“克隆”。
![URL 选项卡中的“克隆”按钮](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. 开始克隆前，请先登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_desktop %}。
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. 单击“选择...”，并使用 Windows 资源管理器找到要克隆存储库的本地路径。
![“选择”按钮](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  注意：如果存储库配置为使用 LFS，系统会提示你初始化 {% data variables.large_files.product_name_short %}。

  {% endnote %}

5. 单击“克隆”。
![“克隆”按钮](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
