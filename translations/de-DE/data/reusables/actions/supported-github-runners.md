---
ms.openlocfilehash: c30f6000486156f1995f0f05ff27fc173b893de5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529272"
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
Die <code>macos-latest</code>-Bezeichnung verwendet derzeit das macOS 11 Runner-Image.
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

<b>Hinweis:</b> Beta- und veraltete Images werden „wie gesehen", „mit allen Mängeln" und „wie verfügbar" bereitgestellt und werden von der Vereinbarung auf Serviceebene und Garantie ausgeschlossen. Beta-Images werden möglicherweise nicht vom Kundendienst abgedeckt.

{% endwarning %}
