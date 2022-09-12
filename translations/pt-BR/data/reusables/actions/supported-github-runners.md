---
ms.openlocfilehash: c30f6000486156f1995f0f05ff27fc173b893de5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529269"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>Imagem do executor</b></th>
    <th style="width:25%"><b>Rótulo de fluxo de trabalho YAML</b></th>
    <th style="width:40%"><b>Observações</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> ou <code>windows-2022</code>
</td>
<td>
Atualmente, o rótulo <code>windows-latest</code> usa a imagem do executor do Windows Server 2022.
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
<code>ubuntu-latest</code> ou <code>ubuntu-20.04</code>
</td>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[preterido]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
Migre para <code>ubuntu-20.04</code> ou <code>ubuntu-22.04</code>. Para saber mais, confira <A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">esta postagem no blog do GitHub</A>.
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
<code>macos-latest</code> ou <code>macos-11</code>
</td>
<td>
Atualmente, o rótulo <code>macos-latest</code> usa a imagem do executor do macOS 11.
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[preterido]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
Migre para <code>macOS-11</code> ou <code>macOS-12</code>. Para saber mais, confira <A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">esta postagem no blog do GitHub</A>.
</td>
</tr>
</tbody>
</table>

{% note %}

**Observação:** as imagens do executor `-latest` são as imagens estáveis mais recentes fornecidas pelo {% data variables.product.prodname_dotcom %} e talvez não seja a versão mais recente do sistema operacional disponível do fornecedor do sistema operacional.

{% endnote %}

{% warning %}

<b>Observação:</b> as imagens beta e preteridas são fornecidas "no estado em que se encontram", "com todas as falhas" e "conforme disponível" e são excluídas do contrato de nível de serviço e da garantia. As imagens beta podem não ser cobertas pelo atendimento ao cliente.

{% endwarning %}
