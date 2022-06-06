---
title: エンドツーエンドのサプライチェーンの保護
shortTitle: 概要
allowTitleToDifferFromFilename: true
intro: 個人アカウント、コード、ビルドプロセスを含む、完全なエンドツーエンドのサプライチェーンのセキュリティに関するベストプラクティスガイドを紹介します。
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
---

## エンドツーエンドのサプライチェーンとは何か？

エンドツーエンドのソフトウェアサプライチェーンのセキュリティとは、その中核において、配布するコードが改ざんされていないことを確実にすることです。 以前は、たとえばライブラリやフレームワークなど、使用される依存関係をターゲットとすることに攻撃者は集中していました。 今日、攻撃者はその焦点を広げ、ユーザアカウントやビルドプロセスを含めているので、それらのシステムも防御されなければなりません。

依存関係の保護に役立つ{% data variables.product.prodname_dotcom %}の機能に関する情報については「[サプライチェーンのセキュリティ](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)」を参照してください。

## これらのガイドについて

この一連のガイドでは、エンドツーエンドのサプライチェーンである、個人アカウント、コード、ビルドプロセスの保護についての考え方を説明します。 それぞれのガイドは、その領域におけるリスクを説明し、そのリスクへの対応を支援できる{% data variables.product.product_name %}の機能を紹介します。

すべての人々の要求は異なっているので、それぞれのガイドは最も影響の大きい変更から始まり、そこから考慮すべき追加の改善へと続いていきます。 自由にスキップして、最も利点が大きいと思う改善に焦点を当ててください。 すべてを一度に行うことがゴールではなく、時間の経過とともにシステム中のセキュリティを継続的に改善していってください。

- 「[アカウントの保護のベストプラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)」

- 「[サプライチェーン中のコードの保護のベストプラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)」

- 「[ビルドシステムの保護のベストプラクティス](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)」

## 参考リンク

- [任意のソフトウェアサプライチェーンに渡る成果物の整合性の保護](https://slsa.dev/)
- [Microsoftサプライチェーン整合性モデル](https://github.com/microsoft/scim)
- [ソフトウェアサプライチェーンセキュリティペーパー - CNCF Security Technical Advisory Group](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
