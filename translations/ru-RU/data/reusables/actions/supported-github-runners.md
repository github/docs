---
ms.openlocfilehash: b40c432907d00f7bf7cf33a1f379ea3318ae8aa2
ms.sourcegitcommit: cb39c15ab6ccfacf49f4b114b77e3b920fdddf70
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180672"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Образ средства выполнения тестов</b></th>
    <th style="width:25%"><b>Метка рабочего процесса YAML</b></th>
    <th style="width:40%"><b>Примечания</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> или <code>windows-2022</code>
</td>
<td>
В настоящее время метка <code>windows-latest</code> использует образ средства выполнения Windows Server 2022.
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
Ubuntu 22.04
</td>
<td>
<code>ubuntu-22.04</code>
</td>
<td>
</td>
</tr>
<tr>
<td>
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> или <code>ubuntu-20.04</code>
</td>
<td>
В <code>ubuntu-latest</code> настоящее время метка переходит на образ средства выполнения тестов Ubuntu 22.04. Во время перехода метка может ссылаться на образ средства выполнения для Ubuntu 20.04 или 22.04. Дополнительные сведения см. в <a href="https://github.blog/changelog/2022-11-09-github-actions-ubuntu-latest-workflows-will-use-ubuntu-22-04/">этой записи блога {% data variables.product.prodname_dotcom %}</a>.
</rd>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[не рекомендуется]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
Миграция на <code>ubuntu-20.04</code> или <code>ubuntu-22.04</code>. Дополнительные сведения см. в <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">этой записи блога GitHub</A>.
</td>
</tr>
<tr>
<td>
macOS Monterey 12
</td>
<td>
<code>macos-12</code>
  </td>
</tr>
<tr>
<td>
macOS Big Sur 11
</td>
<td>
<code>macos-latest</code> или <code>macos-11</code>
</td>
<td>
В <code>macos-latest</code> настоящее время метка переходит в образ средства выполнения тестов macOS Monterey 12. Во время перехода метка может ссылаться на образ средства выполнения для macOS 11 или 12. Дополнительные сведения см. в <a href="https://github.blog/changelog/2022-10-03-github-actions-jobs-running-on-macos-latest-are-now-running-on-macos-12/">этой записи блога {% data variables.product.prodname_dotcom %}</a>.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[нерекомендуемая]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
Миграция на <code>macOS-11</code> или <code>macOS-12</code>. Дополнительные сведения см. в <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">этой записи блога GitHub</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Примечание.** Образы средства выполнения тестов `-latest` — это последние стабильные образы, предоставляемые {% data variables.product.prodname_dotcom %}, и они могут не быть самой последней версией операционной системы, доступной от производителя операционной системы.

{% endnote %}

{% warning %}

**Предупреждение:** Бета-версии и нерекомендуемые образы предоставляются "как есть", "со всеми сбоями" и "по мере доступности" и исключаются из соглашения об уровне обслуживания и гарантии. Для образов бета-версий может не оказываться поддержка.

{% endwarning %}
