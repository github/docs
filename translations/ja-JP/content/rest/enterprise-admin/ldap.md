---
title: LDAP
intro: 'LDAP API を使用して、{% data variables.product.product_name %} ユーザまたは Team とそのリンクされた LDAP エントリ間のアカウント関係を更新するか、新しい同期をキューに入れることができます。'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

LDAP マッピングエンドポイントを使用すると、ユーザまたは Team がマッピングする識別名（DN）を更新できます。 LDAP エンドポイントは通常、{% data variables.product.product_name %} アプライアンスで [LDAP 同期が有効](/enterprise/admin/authentication/using-ldap)になっている場合にのみ有効です。 [ユーザの LDAP マッピングの更新](#update-ldap-mapping-for-a-user)エンドポイントは、LDAP 同期が無効になっている場合でも、LDAP が有効になっていれば使用できます。
