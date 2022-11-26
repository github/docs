---
ms.openlocfilehash: c30f6000486156f1995f0f05ff27fc173b893de5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529270"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>运行器映像</b></th>
    <th style="width:25%"><b>YAML 工作流标签</b></th>
    <th style="width:40%"><b>说明</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> 或 <code>windows-2022</code>
</td>
<td>
<code>windows-latest</code> 标签当前使用 Windows Server 2022 运行器映像。
</td>
</tr>
<tr>
<td>
Windows Server 2019
</td>
<td>
<code>windows-2019</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Ubuntu 22.04
</td>
<td>
<code>ubuntu-22.04</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> 或 <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[已弃用]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
迁移到 <code>ubuntu-20.04</code> 或 <code>ubuntu-22.04</code>。 有关详细信息，请参阅<A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">此 GitHub 博客文章</A>。
</td>
</tr>
<tr>
<td>
macOS Monterey 12
</td>
<td>
<code>macos-12</code>
  </td>
</tr>
<tr>
<td>
macOS Big Sur 11
</td>
<td>
<code>macos-latest</code> 或 <code>macos-11</code>
</td>
<td>
<code>macos-latest</code> 标签当前使用 macOS 11 运行器映像。
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[已弃用]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
迁移到 <code>macOS-11</code> 或 <code>macOS-12</code>。 有关详细信息，请参阅<A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">此 GitHub 博客文章</A>。
</td>
</tr>
</tbody>
</table>

{% note %}

注意：`-latest` 运行器映像是 {% data variables.product.prodname_dotcom %} 提供的最新稳定映像，但可能不是操作系统供应商提供的最新版本的操作系统。

{% endnote %}

{% warning %}

注意：Beta 版映像和已弃用的映像“按原样提供”、“包含全部错误”且“视可用性情况”提供，不包含在服务级别协议和保证之内<b></b>。 客户支持可能不会涵盖 Beta 版映像。

{% endwarning %}
