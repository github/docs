---
title: 创建 Gist
intro: '可以创建两种类型的 gist：{% ifversion ghae %}内部{% else %}公用{% endif %}和机密。 如果已准备好与{% ifversion ghae %}企业成员{% else %}世界{% endif %}共享想法，请创建{% ifversion ghae %}内部{% else %}公用{% endif %} gist 或机密 gist（如果未准备好）。'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e0ac449dc71bb0c525ee1559b82e509a281e55ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066807'
---
## 关于 gists

每个 gist 都是一个 Git 仓库，意即可以复刻和克隆。 {% ifversion not ghae %}如果您在{% else %}在{% endif %}创建 Gist 时登录了 {% data variables.product.product_name %}，则该 Gist 将与您的帐户相关联， 当您导航到 {% data variables.gists.gist_homepage %} 时，您会在 Gist 列表中看到它。

Gist 可以是{% ifversion ghae %}内部{% else %}公开{% endif %}或机密。 {% ifversion ghae %}内部{% else %}公开{% endif %} gist 在 {% data variables.gists.discover_url %} 中显示，其中{% ifversion ghae %}企业成员{% else %}人员{% endif %}可以在新 gist 创建时查看这些 gist。 它们也可供搜索，因此，如果您希望其他人查找和查看您的工作，便可使用公共 gists。

密码 gist 不会显示在 {% data variables.gists.discover_url %} 中，也不可搜索。 秘密 Gist 不是私有 Gist。 如果您将秘密 Gist 的 URL 发送给{% ifversion ghae %}a其他企业成员{% else %}朋友{% endif %}，他们将能够看到它。 但是，如果{% ifversion ghae %}任何其他企业成员{% else %}您不认识的人{% endif %}发现了该 URL，他们也能够看到您的 Gist。 如果需要将代码保密，可能需要改为[创建专用存储库](/articles/creating-a-new-repository)。

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

如果您的站点管理员禁用了私有模式，您也可以使用匿名 gists，可以是公共 gists 或秘密 gists。

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

您在以下情况下会收到通知：
- 您是新 gist 的作者。
- 有人在 gist 中提及您。
- 通过单击任何 gist 顶部的“订阅”来订阅 gist。

{% ifversion fpt or ghes or ghec %}

您可以在个人资料中置顶 Gist，使其他人更容易看到它们。 有关详细信息，请参阅“[将项目固定到配置文件](/articles/pinning-items-to-your-profile)”。

{% endif %}

通过转到 {% data variables.gists.gist_homepage %} 并单击“所有 Gist”，可以发现其他人创建的{% ifversion ghae %}内部{% else %}公共{% endif %} gist。 将会显示所有 gists 存储的页面，gist 按创建或更新时间显示。 您也可以通过 {% data variables.gists.gist_search_url %} 按语言搜索 gist。 Gist 搜索使用与[代码搜索](/search-github/searching-on-github/searching-code)相同的搜索语法。

由于 gists 是 Git 仓库，因此您可以查看其整个提交历史记录，包括差异。 您也可以复刻或克隆 gists。 有关详细信息，请参阅[“分叉和克隆 gist”](/articles/forking-and-cloning-gists)。

可以通过单击 gist 顶部的“下载 ZIP”按钮下载 gist 的 ZIP 文件。 您可以将 gist 嵌入到支持 Javascript 的任何文本字段中，如博文。 若要获取嵌入代码，请单击 gist 的“嵌入”URL 旁边的剪贴板图标。 若要嵌入特定的 gist 文件，请在“嵌入”URL 后追加 `?file=FILENAME`。

{% ifversion fpt or ghec %}

Gist 支持地图 GeoJSON 文件。 这些地图显示在嵌入的 Gist 中，因此您可以轻松分享和嵌入地图。 有关详细信息，请参阅“[使用非代码文件](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)”。

{% endif %}

## 创建 Gist

按照以下步骤创建 gist。

{% note %}

您也可以使用 {% data variables.product.prodname_cli %} 创建 Gist。 有关详细信息，请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh gist create`](https://cli.github.com/manual/gh_gist_create)”。

或者，也可以将桌面上的文本文件直接拖放到编辑器中。

{% endnote %}

1. 登录 {% data variables.product.product_name %}。
2. 导航到 {% data variables.gists.gist_homepage %}。
3. 键入 Gist 的说明（可选）和名称。
![Gist 名称说明](/assets/images/help/gist/gist_name_description.png)

4. 在 Gist 文本框中键入 Gist 的文本内容。
![Gist 文本框](/assets/images/help/gist/gist_text_box.png)

5. (可选)若要创建{% ifversion ghae %}一个内部{% else %}公开{% endif %} gist，请单击 {% octicon "triangle-down" aria-label="The downwards triangle icon" %}，然后单击“创建{% ifversion ghae %}内部{% else %}公开{% endif %} gist”。
![Drop-down menu to select gist visibility]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. 单击“创建机密 Gist”或“创建{% ifversion ghae %}内部{% else %}公开{% endif %} gist” 。
  ![创建 Gist 的按钮](/assets/images/help/gist/create-secret-gist-button.png)
