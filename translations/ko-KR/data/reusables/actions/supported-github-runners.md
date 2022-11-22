---
ms.openlocfilehash: b40c432907d00f7bf7cf33a1f379ea3318ae8aa2
ms.sourcegitcommit: cb39c15ab6ccfacf49f4b114b77e3b920fdddf70
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180671"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>실행기 이미지</b></th>
    <th style="width:25%"><b>YAML 워크플로 레이블</b></th>
    <th style="width:40%"><b>참고 사항</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> 또는 <code>windows-2022</code>
</td>
<td>
<code>windows-latest</code> 레이블은 현재 Windows Server 2022 실행기 이미지를 사용합니다.
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
<code>ubuntu-latest</code> 또는 <code>ubuntu-20.04</code>
</td>
<td>
레이블이 <code>ubuntu-latest</code> 현재 Ubuntu 22.04 실행기 이미지로 전환되고 있습니다. 전환하는 동안 레이블은 Ubuntu 20.04 또는 22.04에 대한 실행기 이미지를 참조할 수 있습니다. 자세한 내용은 <a href="https://github.blog/changelog/2022-11-09-github-actions-ubuntu-latest-workflows-will-use-ubuntu-22-04/">이 {% data variables.product.prodname_dotcom %} 블로그 게시물을 참조하세요</a>.
</rd>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[사용되지 않음]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
<code>ubuntu-20.04</code> 또는 <code>ubuntu-22.04</code>로 마이그레이션합니다. 자세한 내용은 <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">이 GitHub 블로그 게시물</A>을 참조하세요.
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
<code>macos-latest</code> 또는 <code>macos-11</code>
</td>
<td>
레이블이 <code>macos-latest</code> 현재 macOS Monterey 12 실행기 이미지로 전환되고 있습니다. 전환하는 동안 레이블은 macOS 11 또는 12에 대한 실행기 이미지를 참조할 수 있습니다. 자세한 내용은 <a href="https://github.blog/changelog/2022-10-03-github-actions-jobs-running-on-macos-latest-are-now-running-on-macos-12/">이 {% data variables.product.prodname_dotcom %} 블로그 게시물을 참조하세요</a>.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15<sup>[사용되지 않음]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
<code>macOS-11</code> 또는 <code>macOS-12</code>로 마이그레이션합니다. 자세한 내용은 <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">이 GitHub 블로그 게시물</A>을 참조하세요.
</td>
</tr>
</tbody>
</table>

{% note %}

**참고:** `-latest` 실행기 이미지는 {% data variables.product.prodname_dotcom %}에서 제공하는 안정적인 최신 이미지이며 운영 체제 공급업체에서 사용할 수 있는 운영 체제의 최신 버전이 아닐 수도 있습니다.

{% endnote %}

{% warning %}

**경고:** 베타 및 사용되지 않는 이미지는 "있는 그대로", "모든 오류 포함" 및 "사용 가능한" 것으로 제공되며 서비스 수준 계약 및 보증에서 제외됩니다. 베타 이미지는 고객 지원에서 다루지 않을 수 있습니다.

{% endwarning %}
