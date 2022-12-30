---
title: インスタンスのホスト キーの構成
shortTitle: Configure host keys
intro: 'インスタンスが受信 SSH 接続のホスト キーを生成およびアドバタイズするために使用するアルゴリズムを構成することで、{% data variables.location.product_location %}のセキュリティを強化できます。'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107110'
---
## インスタンスのホスト キーについて

SSH 接続を受け入れるサーバーは、SSH クライアントに対してサーバーを安全に識別するために、1 つ以上の暗号化ホスト キーをアドバタイズします。 接続の初期化中にサーバーの ID を確認するために、クライアントはホスト キーを格納して確認します。 詳しくは、SSH Academy Web サイトの「[SSH ホスト キー - 概要、理由、方法](https://ssh.com/academy/ssh/host-key)」を参照してください。

{% data reusables.enterprise.about-ssh-ports %}

既定では、{% data variables.location.product_location %}は、OpenSSH スタイルのホスト キー ローテーションを使用してホスト キーを生成およびアドバタイズします。 環境内の SSH のセキュリティを強化するために、ホスト キーの生成に関する追加のアルゴリズムを有効にすることができます。

{% note %}

**注**: 追加のホスト キー アルゴリズムを有効にした場合、SSH 接続に OpenSSH を使用しないクライアントでは、接続中に警告が発生したり、完全に接続できない場合があります。 一部の SSH 実装では、サポートされていないアルゴリズムを無視し、別のアルゴリズムにフォールバックできます。 クライアントがフォールバックをサポートしていない場合、接続は失敗します。 たとえば、Go 用 SSH ライブラリでは、別のアルゴリズムへのフォールバックはサポートされていません。

{% endnote %}

## Ed25519 ホスト キーの管理

{% data variables.location.product_location %}に接続するクライアントのセキュリティを向上させるために、Ed25519 ホスト キーの生成とアドバタイズを有効にすることができます。 Ed25519 は、古い署名アルゴリズムを対象とする一部の攻撃の影響は受けません。スピードが犠牲になることもありません。 古い SSH クライアントでは、Ed25519 がサポートされていない可能性があります。 既定では、{% data variables.product.product_name %} インスタンスは Ed25519 ホスト キーを生成またはアドバタイズしません。 詳しくは、[Ed25519 の Web サイト](https://ed25519.cr.yp.to)を参照してください。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Ed25519 ホスト キーの生成とアドバタイズを有効にするには、次のコマンドを入力します。

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. 必要に応じて、次のコマンドを入力して、Ed25519 ホスト キーの生成とアドバタイズを無効にします。

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
