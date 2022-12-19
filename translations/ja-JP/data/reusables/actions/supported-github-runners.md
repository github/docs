---
ms.openlocfilehash: b40c432907d00f7bf7cf33a1f379ea3318ae8aa2
ms.sourcegitcommit: cb39c15ab6ccfacf49f4b114b77e3b920fdddf70
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180670"
---
<table style="width:100%">
<thead>
  <tr>
    <th style="width:35%"><b>ランナー イメージ</b></th>
    <th style="width:25%"><b>YAML ワークフロー ラベル</b></th>
    <th style="width:40%"><b>メモ</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
Windows Server 2022
</td>
<td>
<code>windows-latest</code> または <code>windows-2022</code>
</td>
<td>
<code>windows-latest</code> ラベルは現在、Windows Server 2022 ランナー イメージを使用しています。
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
<code>ubuntu-latest</code> または <code>ubuntu-20.04</code>
</td>
<td>
<code>ubuntu-latest</code> ラベルは現在、Ubuntu 22.04 ランナー イメージに移行中です。 移行中は、ラベルによって Ubuntu 20.04 と 22.04 のいずれかのランナー イメージが参照されることがあります。 詳しくは、<a href="https://github.blog/changelog/2022-11-09-github-actions-ubuntu-latest-workflows-will-use-ubuntu-22-04/">こちらの {% data variables.product.prodname_dotcom %} ブログ記事</a>をご覧ください。
</rd>
</tr>
<tr>
<td>
Ubuntu 18.04 <sup>[非推奨]</sup>
</td>
<td>
<code>ubuntu-18.04</code>
</td>
<td>
<code>ubuntu-20.04</code> または <code>ubuntu-22.04</code> に移行。 詳しくは、<A href="https://github.blog/changelog/2022-08-09-github-actions-the-ubuntu-18-04-actions-runner-image-is-being-deprecated-and-will-be-removed-by-12-1-22/">こちらの GitHub のブログ記事</A>をご覧ください。
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
<code>macos-latest</code> または <code>macos-11</code>
</td>
<td>
<code>macos-latest</code> ラベルは現在、macOS Monterey 12 ランナー イメージに移行中です。 移行中は、ラベルによって macOS 11 と 12 のいずれかのランナー イメージが参照されることがあります。 詳しくは、<a href="https://github.blog/changelog/2022-10-03-github-actions-jobs-running-on-macos-latest-are-now-running-on-macos-12/">こちらの {% data variables.product.prodname_dotcom %} ブログ記事</a>をご覧ください。
</td>
</tr>
<tr>
<td>
macOS Catalina 10.15 <sup>[非推奨]</sup>
</td>
<td>
<code>macos-10.15</code>
</td>
<td>
<code>macOS-11</code> または <code>macOS-12</code> に移行。 詳しくは、<A href="https://github.blog/changelog/2022-07-20-github-actions-the-macos-10-15-actions-runner-image-is-being-deprecated-and-will-be-removed-by-8-30-22/">こちらの GitHub のブログ記事</A>をご覧ください。
</td>
</tr>
</tbody>
</table>

{% note %}

**注:** `-latest` ランナー イメージは、{% data variables.product.prodname_dotcom %} が提供する最新の安定したイメージであり、オペレーティング システム ベンダーから入手できるオペレーティング システムの最新バージョンではない可能性があります。

{% endnote %}

{% warning %}

**警告:** ベータ版および非推奨のイメージは、"現状のまま"、"保証なし"、"利用可能な状態" で提供され、サービス レベル アグリーメントと保証から除外されます。 ベータ版のイメージは、カスタマー サポートでカバーされない場合があります。

{% endwarning %}
