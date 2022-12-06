---
ms.openlocfilehash: b40c432907d00f7bf7cf33a1f379ea3318ae8aa2
ms.sourcegitcommit: cb39c15ab6ccfacf49f4b114b77e3b920fdddf70
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180669"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Runner-Image</b></th>
    <th style="width:25%"><b>YAML-Workflow-Kennzeichnung</b></th>
    <th style="width:40%"><b>Hinweise</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> oder <code>windows-2022</code> 
</td>
<td>
Die <code>windows-latest</code>-Bezeichnung verwendet derzeit das Windows Server 2022-Runner-Image.
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
<code>ubuntu-latest</code> oder <code>ubuntu-20.04</code> 
</td>
<td>
Die Bezeichnung <code>ubuntu-latest</code> wird derzeit auf das Ubuntu 22.04-Runnerimage umgestellt. Während des Übergangs kann die Bezeichnung auf das Runnerimage für Ubuntu 20.04 oder 22.04 verweisen. Weitere Informationen findest du in <a href="https://github.blog/changelog/2022-11-09-github-actions-ubuntu-latest-workflows-will-use-ubuntu-22-04/">diesem {% data variables.product.prodname_dotcom %}-Blogbeitrag</a>.
</rd>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[veraltet]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
Migriere zu <code>ubuntu-20.04</code> oder <code>ubuntu-22.04</code>. Weitere Informationen findest du in diesem <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">Blogbeitrag auf GitHub</A>.
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
<code>macos-latest</code> oder <code>macos-11</code> 
</td>
<td>
Die Bezeichnung <code>macos-latest</code> wird derzeit auf das macOS Monterey 12-Runnerimage umgestellt. Während des Übergangs kann die Bezeichnung auf das Runnerimage für macOS 11 oder 12 verweisen. Weitere Informationen findest du in <a href="https://github.blog/changelog/2022-10-03-github-actions-jobs-running-on-macos-latest-are-now-running-on-macos-12/">diesem {% data variables.product.prodname_dotcom %}-Blogbeitrag</a>.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[veraltet]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
Migriere zu <code>macOS-11</code> oder <code>macOS-12</code>. Weitere Informationen findest du in diesem <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">Blogbeitrag auf GitHub</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Hinweis:** Die `-latest`-Runner-Images sind die neuesten stabilen Images, die {% data variables.product.prodname_dotcom %} bereitstellt, und entsprechen möglicherweise nicht der neuesten Version des Betriebssystems, die beim Betriebssystemanbieter erhältlich ist.

{% endnote %}

{% warning %}

**Warnung:** Beta- und veraltete Images werden „wie gesehen“, „mit allen Mängeln“ und „wie verfügbar“ bereitgestellt und sind von der Vereinbarung zum Servicelevel und der Garantie ausgeschlossen. Beta-Images werden möglicherweise nicht vom Kundendienst abgedeckt.

{% endwarning %}
