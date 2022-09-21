---
title: GitHub スポンサーの納税情報
intro: 'スポンサード開発者および Organization は、{% data variables.product.prodname_dotcom %} に納税フォームをサブミットする必要があり、自分の税金を算出して支払う責任を負います。'
redirect_from:
  - /articles/tax-information-for-sponsored-developers
  - /github/supporting-the-open-source-community-with-github-sponsors/tax-information-for-sponsored-developers
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Open Source
  - Sponsors payments
shortTitle: Tax information
ms.openlocfilehash: 25c549ef143ae785bc8c1e164a5d9ea86ab0b4bd
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145149207'
---
## W-9/W-8 納税申告用紙

法律上、米国および米国以外のすべてのメンテナから税情報を収集するために、米国内国歳入庁 (IRS) では、{% data variables.product.prodname_dotcom %} を必要とします。 これらのフォームは、{% data variables.product.prodname_dotcom %} によって保持されており、IRS に送信する必要はありません。 

### W-9 (U.S.)

W-9 納税申告用紙の情報は、{% data variables.product.prodname_dotcom %} が正しい納税者識別番号 (TIN) を使用して、あなたに支払われた収入を 1099 書式で IRS に報告するのに役立ちます。

あなたが米国の納税者の場合は、ご自分の {% data variables.product.prodname_sponsors %} プロファイルを公開する前に [W-9](https://www.irs.gov/forms-pubs/about-form-w-9) を提出する必要があります。 

### W-8 BEN/W-8 BEN-E (米国以外)

W-8 BEN および W-8 BEN-E 納税申告用紙は、{% data variables.product.prodname_dotcom %} が源泉徴収の対象となる金額の受益者を決定するのに役立ちます。

米国以外の他の地域の納税者の場合は、{% data variables.product.prodname_sponsors %} プロファイルを公開する前に、[W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (個人) または [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (会社) 申告用紙を提出する必要があります。 詳しい情報については、「[個人アカウントに {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account#submitting-your-tax-information)」および「[Organization の {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)」を参照してください。 {% data variables.product.prodname_dotcom %} から適切なフォームが送信されて期限が通知され、フォームに記入して送信する十分な時間が与えられます。

正しくない納税申告用紙が割り当てられている場合は、[{% data variables.product.prodname_dotcom %} サポート](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors)にお問い合わせいただき、状況に合った適切なフォームの再割り当てを依頼してください。

### 納税者番号

W-8 BEN および W-8 BEN-E 納税申告用紙では、"米国納税者識別番号 (SSN または ITIN)" または "外国の税 ID 番号" が求められます。 

米国市民または他の米国人 (居住外国人を含む) 以外の方は、通常、"外国の税 ID 番号" を提供する必要があります。 これは、居住国から発行された税 ID 番号です。

居住国または請求先の国がインドの場合は、税 ID 番号として永久勘定番号 (PAN) を使用できます。

{% note %}

**注:** 政府によって発行された税番号を、国から市民が要求されない場合は、代わりに「法的に必須ではない」と書くことができます。  

IRS からのガイダンスによると、「適用外」と書くべきではありません。 詳細については、IRS Web サイトの「[Instructions for Form W-8BEN, Line 6](https://www.irs.gov/instructions/iw8ben#idm139867098922656)」(申告用紙 W-8BEN についての説明、6 行目) を参照してください。
{% endnote %}

IRS は非居住者および居住外国人が [個人納税者番号](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin) または ITIN を要求することを許可しています。 これは、{% data variables.product.prodname_sponsors %} を通じて収入を受け取るメンテナにとって、必要になることはほとんどありませんが、個々の状況を判断するための完全な [説明](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf) をお読みください。

## 1099 申告用紙

米国の納税者で、課税年度内に 600 米国ドルを超える収入がある場合、{% data variables.product.prodname_dotcom %} は次の暦年の 1 月 31 日までに [1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec) を送付します。 米国外の納税者に対しては、納税フォームを提供しません。

## 一般的な税情報

{% data variables.product.prodname_dotcom %} は、{% data variables.product.prodname_sponsors %} の支払いについて源泉徴収しません。 スポンサード開発者は、自らの税金を算出して支払う責任を負います。

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## 売上税

GitHub は、売上税納税義務の計算に役立つ情報を提供しています。 この情報は、お客様の国や税務上の状況に合わせたものではありません。具体的な義務を理解するためには専門家に相談することをお勧めします。 ただし、デジタル売上税の一般的な原則を理解するのに役立つ、概要的な情報を提供したいと考えています。

世界中のほとんどの国では、デジタル トランザクションの売上税は、販売者ではなく受信者の場所に基づいています。 たとえば、米国のメンテナがドイツのスポンサーに課税対象の特典を提供する場合は、ドイツの売上税が適用されます。

売上税は通常、価値のある商品またはサービスが提供されている場合にのみ適用されます。 善意/一般的なサポート/尽きることのない感謝は、通常は課税対象ではありません。

米国では、B2B (企業間) と B2C (企業対消費者) の両方が売上税の対象となります。

EU およびその他のほとんどの国と地域では、B2C の売上は売上税の対象となります。 B2B の売上は課税対象ではありません。 消費者が VAT に登録されていない C2C と C2B の売上は課税対象ではありません。

## 参考資料

- [スポンサーとスポンサーシップを表示する](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
