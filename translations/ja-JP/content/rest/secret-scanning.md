---
title: シークレット スキャン
intro: シークレット スキャン API を使うと、リポジトリからシークレット アラートを取得して更新することができます。
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880125'
---
{% data reusables.secret-scanning.api-beta %}

## シークレット スキャン API について

{% data variables.product.prodname_secret_scanning %} API を使うと、次のことができます。

- リポジトリの {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} とプッシュ保護 {% endif %} を有効または無効にします。 詳細については、「[リポジトリ](/rest/repos/repos#update-a-repository)」を参照し、REST API ドキュメントの "`security_and_analysis` オブジェクトのプロパティ" セクションを展開します。
- リポジトリから {% data variables.product.prodname_secret_scanning_GHAS %} アラートを取得して更新します。 詳細については、以下のセクションを参照してください。

{% data variables.product.prodname_secret_scanning %} の詳細については、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-security/about-secret-scanning)」を参照してください。
