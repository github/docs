---
ms.openlocfilehash: c30f6000486156f1995f0f05ff27fc173b893de5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529271"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Image de l’exécuteur</b></th>
    <th style="width:25%"><b>Étiquette de workflow YAML</b></th>
    <th style="width:40%"><b>Remarques</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> ou <code>windows-2022</code>
</td>
<td>
L’étiquette <code>windows-latest</code> utilise actuellement l’image de l’exécuteur Windows Server 2022.
</td>
</tr>
<tr>
<td>
Windows Server 2019
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
Ubuntu 20.04
</td>
<td>
<code>ubuntu-latest</code> ou <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[déconseillé]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
Migrer vers <code>ubuntu-20.04</code> ou <code>ubuntu-22.04</code>. Pour plus d’informations, consultez ce <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">billet de blog GitHub</A>.
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
<code>macos-latest</code> ou <code>macos-11</code>
</td>
<td>
L’étiquette <code>macos-latest</code> utilise actuellement l’image de l’exécuteur macOS 11.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[déprécié]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
Migrer vers <code>macOS-11</code> ou <code>macOS-12</code>. Pour plus d’informations, consultez ce <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">billet de blog GitHub</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Remarque :** Les images d’exécuteur `-latest` sont les dernières images stables que fournit {% data variables.product.prodname_dotcom %} et peuvent ne pas correspondre à la version la plus récente du système d’exploitation disponible auprès du fournisseur du système d’exploitation.

{% endnote %}

{% warning %}

<b>Remarque :</b> Les images bêta et dépréciées sont fournies « en l’état », « avec toutes les imperfections » et « selon la disponibilité », et sont exclues du contrat de niveau de service et de la garantie. Les images bêta peuvent ne pas être couvertes par le service client.

{% endwarning %}
