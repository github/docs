---
title: エンドツーエンドのサプライ チェーンのセキュリティ保護
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: 個人用アカウント、コード、ビルド プロセスを含む完全なエンドツーエンドのサプライ チェーンのセキュリティに関するベスト プラクティス ガイドについて紹介します。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
ms.openlocfilehash: 44eb2f8fa24d172cc1ad5f988bbbda3a192797a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060683'
---
## エンド ツー エンドのサプライ チェーンとは

エンド ツー エンドのソフトウェア サプライ チェーンのセキュリティは、根本的には、配布するコードが改ざんされていないことを保証することです。 かつて、攻撃者は、ライブラリやフレームワークなど、ユーザーが使用する依存関係を重点的に狙いました。 攻撃者は、今や、ユーザー アカウントやビルド プロセスを含むように標的を拡大しています。したがって、このようなシステムも同様に防御する必要があります。

依存関係のセキュリティ保護に役立つ {% data variables.product.prodname_dotcom %} の機能について詳しくは、「[サプライ チェーンのセキュリティについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)」を参照してください。

## これらのガイドについて

この一連のガイドでは、エンド ツー エンドのサプライ チェーン (個人アカウント、コード、ビルド プロセス) のセキュリティ保護をどのように考えるべきかを説明します。 各ガイドでは、その領域のリスクについて説明し、そのリスクに対処するために役立つ {% data variables.product.product_name %} 機能を紹介しています。 

ニーズはユーザーによって異なるため、各ガイドは、まず最も影響が大きい変更について説明した後で、ユーザーが考慮すべきその他の改善事項を示しています。 不要な箇所はスキップして、最もメリットがあると思われる改善事項に集中してください。 目標は、すべてを一度に行うことではなく、長い時間をかけてシステムのセキュリティを継続的に改善することです。

- 「[アカウントをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)」

- 「[サプライ チェーンのコードをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)」

- 「[ビルド システムをセキュリティで保護するためのベスト プラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)」

## 参考資料

- [ソフトウェア サプライ チェーン全体での成果物の整合性の保護](https://slsa.dev/)
- [Microsoft サプライ チェーン整合性モデル](https://github.com/microsoft/scim)
- [ソフトウェア サプライ チェーン セキュリティ研究 - CNCF セキュリティ テクニカル アドバイザリ グループ](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
