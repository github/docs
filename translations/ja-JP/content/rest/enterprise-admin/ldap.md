---
title: LDAP
intro: 'LDAP API を使用して、{% data variables.product.product_name %} ユーザまたは Team とそのリンクされた LDAP エントリ間のアカウント関係を更新するか、新しい同期をキューに入れることができます。'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0948fbf02aea86d01a7034ae6b1836c0f69ca6e2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065339'
---
LDAP マッピングエンドポイントを使用すると、ユーザまたは Team がマッピングする識別名（DN）を更新できます。 LDAP エンドポイントは通常、{% data variables.product.product_name %} アプライアンスで [LDAP 同期が有効](/enterprise/admin/authentication/using-ldap)な場合にのみ有効であることに注意してください。 LDAP 同期が無効になっている場合でも、LDAP が有効になっている場合は、[ユーザーの LDAP マッピングの更新](#update-ldap-mapping-for-a-user)エンドポイントを使用できます。
