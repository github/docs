---
title: 查看仓库的发行版和标记
intro: 您可以按发行版名称或标记版本号查看仓库的时间记录。
redirect_from:
  - /articles/working-with-tags
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-releases-and-tags
  - /github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View releases & tags
ms.openlocfilehash: c6cdad2626eb5b3260efd46a1d47dac499c73051
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145129289'
---
{% tip %}

提示：还可以使用 {% data variables.product.prodname_cli %} 查看发行版。 有关详细信息，请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh release view`](https://cli.github.com/manual/gh_release_view)”。

{% endtip %}

## 查看发行版

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. 在“版本”页顶部，单击“版本”。

## 查看标记

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. 在“版本”页面顶部，单击“标记”。
![标记页](/assets/images/help/releases/tags-list.png)

## 延伸阅读

- [对标记签名](/articles/signing-tags)
