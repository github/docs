---
ms.openlocfilehash: b40c432907d00f7bf7cf33a1f379ea3318ae8aa2
ms.sourcegitcommit: cb39c15ab6ccfacf49f4b114b77e3b920fdddf70
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180667"
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
<td>
<code>ubuntu-latest</code> 标签目前正在转换为 Ubuntu 22.04 运行器映像。 在转换期间，标签可能引用 Ubuntu 20.04 或 22.04 的运行器映像。 有关详细信息，请参阅<a href="https://github.blog/changelog/2022-11-09-github-actions-ubuntu-latest-workflows-will-use-ubuntu-22-04/">此 {% data variables.product.prodname_dotcom %} 博客文章</a>。
</rd>
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
<code>macos-latest</code> 标签目前正在转换为 macOS Monterey 12 运行器映像。 在转换期间，标签可能引用 macOS 11 或 12 的运行器映像。 有关详细信息，请参阅<a href="https://github.blog/changelog/2022-10-03-github-actions-jobs-running-on-macos-latest-are-now-running-on-macos-12/">此 {% data variables.product.prodname_dotcom %} 博客文章</a>。
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

警告：beta 版映像和已弃用的映像“按原样提供”、“包含全部错误”且“视可用性情况”提供，不在服务级别协议和保证的涵盖范围之内。 客户支持可能不会涵盖 Beta 版映像。

{% endwarning %}
