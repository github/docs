---
title: リポジトリ セキュリティ アドバイザリを作成するためのベスト プラクティス
intro: セキュリティ アドバイザリを作成または編集すると、標準形式を使用してエコシステム、パッケージ名、影響を受けるバージョンを指定する際に、あなたが提供する情報を他のユーザーが容易に理解できるようにすることができます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
- Security advisories
- Vulnerabilities
shortTitle: Best practices
ms.openlocfilehash: d5b3e7ebecabd22b0c992432789d9581dda4e16e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106398"
---
リポジトリに対する管理者権限があるユーザーなら誰でも、セキュリティアドバイザリを作成して編集することができます。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## リポジトリのセキュリティ アドバイザリについて

{% data reusables.security-advisory.security-advisory-overview %} について詳しくは、「[リポジトリの GitHub セキュリティ アドバイザリについて](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)」を参照してください。

## ベスト プラクティス

リポジトリ セキュリティ アドバイザリを作成するとき、またはグローバル セキュリティ アドバイザリに対するコミュニティへの貢献を行うときは、{% data variables.product.prodname_advisory_database %}で使用されている構文 (特にバージョン形式) を使用することをお勧めします。

{% data variables.product.prodname_advisory_database %} の構文に従う場合 (特に、影響を受けるバージョンを定義する場合) は次のようになります。
- リポジトリ アドバイザリを発行すると、詳しい情報を要求しなくても、アドバイザリを {% data variables.product.prodname_advisory_database %} に "{% data variables.product.company_short %}-reviewed" アドバイザリとして追加できます。
- {% data variables.product.prodname_dependabot %} では、影響を受けるリポジトリを正確に識別し、それらに {% data variables.product.prodname_dependabot_alerts %} を送信して通知するための情報を取得します。
- コミュニティ メンバーは、不足している情報や不正確な情報を修正するためのアドバイザリに対する編集を提案することが少なくなる可能性があります。

_[下書きセキュリティ アドバイザリ]_ フォームを使用して、リポジトリ アドバイザリを追加または編集します。 詳細については、「[リポジトリ セキュリティ アドバイザリの作成](/code-security/repository-security-advisories/creating-a-repository-security-advisory)」を参照してください。 

_[セキュリティ アドバイザリの改善]_ フォームを使用して、既存のグローバル アドバイザリの改善を提案します。 詳細については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリの編集](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database)」を参照してください。

### エコシステム

**[エコシステム]** フィールドを使用して、サポートされているエコシステムのいずれかにアドバイザリを割り当てる必要があります。 サポートされているエコシステムの詳細については、「[{% data variables.product.prodname_advisory_database %} でのセキュリティ アドバイザリの参照](/code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories)」を参照してください。

![フォーム上の [エコシステム] フィールドが強調表示されているスクリーンショット](/assets/images/help/security/security-advisory-ecosystem.png)

### パッケージ名

**[パッケージ名]** フィールドを使用して、影響を受けるパッケージを指定することをお勧めします。これは、{% data variables.product.prodname_advisory_database %} 内の "{% data variables.product.company_short %} レビュー済み" アドバイザリにパッケージ情報が必要であるためです。 パッケージ情報はリポジトリ レベルのセキュリティ アドバイザリでは省略可能ですが、この情報を早期に含めると、セキュリティ アドバイザリを発行するときにレビュー プロセスが簡略化されます。

![フォーム上の [パッケージ名] が強調表示されているスクリーンショット](/assets/images/help/security/security-advisory-package-name.png)

### 影響を受けるバージョン

**[影響を受けるバージョン]** フィールドを使用して、影響を受けるバージョンを指定することをお勧めします。{% data variables.product.prodname_advisory_database %} 内の "{% data variables.product.company_short %} レビュー済み" アドバイザリにこの情報が必要だからです。 バージョン情報はリポジトリ レベルのセキュリティ アドバイザリでは省略可能ですが、この情報を早期に含めると、セキュリティ アドバイザリを発行するときにレビュー プロセスが簡略化されます。

![[影響を受けるバージョン] フィールドが強調表示されているスクリーンショット](/assets/images/help/security/security-advisory-affected-versions.png)

- 影響を受ける有効なバージョン文字列は、次のいずれかで構成されます。
   - 下限演算子シーケンス。
   - 上限演算子シーケンス。
   - 上限と下限の両方の演算子シーケンス。
   - 等値 (`=`) 演算子を使用した特定のバージョン シーケンス。
- 各演算子シーケンスは、演算子、1 つのスペース、そしてバージョンとして指定する必要があります。
   - 有効な演算子は `=`、`<`、`<=`、`>`、または `>=` です。
   - バージョンは数字で始めて、その後に任意の数の数字、文字、ドット、ダッシュ、またはアンダースコア (スペースまたはコンマ以外のもの) を続ける必要があります
   - 上限と下限の両方のシーケンスを指定する場合は、最初に下限を指定し、その後に 1 つのコンマと 1 つのスペースを続け、次に上限を指定する必要があります。
   {% note %}

   **注:** 影響を受けるバージョン文字列には、先頭または末尾にスペースを含めることはできません。

   {% endnote %}

- 上限演算子は、包括的とすることも排他的とすることもできます (つまり、`<=` または `<`)。
- 下限演算子は、包括的とすることも排他的とすることもできます (つまり、`>=` または `>`)。 ただし、リポジトリ アドバイザリを公開し、リポジトリ アドバイザリをグローバル アドバイザリに格上げする場合は、別のルールが適用されます。下限文字列は、包括的 (つまり、`>=`) とすることしかできません。排他的な下限演算子 (`>`) は、バージョンが `0` の場合にのみ許可されます (たとえば、`> 0`)。

  {% note %}

  **注:** 下限の制限は、次のとおりです。
   - OSV (オープン ソースの脆弱性) スキーマとの互換性がないために発生します。
   - {% data variables.product.prodname_advisory_database %} 内の既存のアドバイザリに対して提案を行う場合にのみ適用されます。

  {% endnote %}

- `> 2.0, < 2.3, > 3.0, < 3.2` など、同じフィールドに、複数の影響を受けるバージョン範囲を指定することはできません。複数の範囲を指定するには、 **[+ 影響を受ける製品を追加]** ボタンをクリックして、各範囲に新しい **[影響を受ける製品]** セクションを作成する必要があります。

  ![影響を受けるバージョン範囲を複数追加するために使用するボタンを強調表示しているスクリーンショット](/assets/images/help/security/security-advisory-add-another-affected-product.png)
 - 影響を受けるバージョン範囲に 1 つの上限または下限のみが含まれる場合:
   - 下限が明示的に指定されていない場合、暗黙的な値は常に `> 0` です。
   - 上限が明示的に指定されていない場合、暗黙的な値は常に無限大になります。

{% data variables.product.prodname_advisory_database %} の詳細については、「[https://github.com/github/advisory-database](https://github.com/github/advisory-database)」を参照してください。
