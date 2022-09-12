---
ms.openlocfilehash: c30f6000486156f1995f0f05ff27fc173b893de5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529276"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Imagen del ejecutor</b></th>
    <th style="width:25%"><b>Etiqueta de flujo de trabajo YAML</b></th>
    <th style="width:40%"><b>Notas</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> o <code>windows-2022</code>
</td>
<td>
La etiqueta <code>windows-latest</code> usa actualmente la imagen del ejecutor de Windows Server 2022.
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
<code>ubuntu-latest</code> o <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[en desuso]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
Realiza la migración a <code>ubuntu-20.04</code> o <code>ubuntu-22.04</code>. Para obtener más información, consulta <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">esta entrada de blog de GitHub</A>.
</td>
</tr>
<tr>
<td>
macOS Monterey 12
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
<code>macos-latest</code> o <code>macos-11</code>
</td>
<td>
La etiqueta <code>macos-latest</code> usa actualmente la imagen del ejecutor de macOS 11.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[en desuso]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
Realiza la migración a <code>macOS-11</code> o <code>macOS-12</code>. Para obtener más información, consulta <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">esta entrada de blog de GitHub</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Nota:** Las imágenes de ejecutores `-latest` son las últimas imágenes estables que proporciona {% data variables.product.prodname_dotcom %} y puede que no sean las versiones más recientes de los sistemas operativos disponibles desde los proveedores de estos.

{% endnote %}

{% warning %}

<b>Nota</b>: Las imágenes beta y en desuso se proporcionan "tal cual", "con todos sus fallos" y "conforme estén disponibles" y están excluidas del acuerdo de nivel de servicio y de la garantía. El soporte al cliente podría no cubrir las imágenes beta.

{% endwarning %}
