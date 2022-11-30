---
title: GitHub 스폰서 세금 정보
intro: '스폰서 개발자와 조직은 {% data variables.product.prodname_dotcom %}에 세금 정보를 제출해야 하며 자신의 세금을 산정하여 납부해야 합니다.'
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
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145149209'
---
## W-9/W-8 세금 양식

법에 따라 미국 IRS(국세청)는 {% data variables.product.prodname_dotcom %}에게 모든 미국 및 미국 이외 유지 관리자의 세금 정보를 수집하도록 요구합니다. 이러한 양식은 {% data variables.product.prodname_dotcom %}에 의해 보관되며 IRS에 제출할 필요가 없습니다. 

### W-9(미국)

W-9 세금 양식의 정보는 {% data variables.product.prodname_dotcom %}가 1099 양식에서 올바른 TIN(납세자 식별 번호)을 사용하여 국세청에 소득을 신고하는 데 도움이 됩니다.

미국 납세자인 경우 {% data variables.product.prodname_sponsors %} 프로필을 게시하려면 먼저 [W-9](https://www.irs.gov/forms-pubs/about-form-w-9)을 제출해야 합니다. 

### W-8 BEN/W-8 BEN-E(미국 이외)

W-8 BEN 및 W-8 BEN-E 세금 양식은 {% data variables.product.prodname_dotcom %}가 원천징수 대상 금액의 수익적 소유자를 결정하는 데 도움이 됩니다.

미국 이외 지역의 납세자인 경우 {% data variables.product.prodname_sponsors %} 프로필을 게시하려면 먼저 [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf)(개인) 또는 [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e)(기업) 양식을 제출해야 합니다. 자세한 내용은 "[개인 계정에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account#submitting-your-tax-information)" 및 "[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)"을 참조하세요. {% data variables.product.prodname_dotcom %}는 적절한 양식을 송부하고, 기한이 도래하면 알림을 보내고, 양식을 작성 및 제출할 수 있는 적절한 시간을 제공합니다.

잘못된 세금 양식이 할당된 경우 [{% data variables.product.prodname_dotcom %} 지원팀에 문의](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors)하여 상황에 맞는 올바른 양식을 다시 할당받으세요.

### 납세자 번호

W-8 BEN 및 W-8 BEN-E 세금 양식에는 "미국 납세자 식별 번호(SSN 또는 ITIN)" 또는 "해외 납세자 식별 번호"를 제공해야 합니다. 

미국 시민권자 또는 기타 미국인(체류자 포함)이 아닌 경우 일반적으로 "해외 납세자 식별 번호"를 제공해야 합니다. 이는 거주 국가에서 발급한 납세자 식별 번호입니다.

거주 국가 또는 청구 국가가 인도인 경우 PAN(영구 계정 번호)을 납세자 식별 번호로 사용할 수 있습니다.

{% note %}

**참고:** 거주 국가가 시민에게 정부가 발행한 납세자 번호를 요구하지 않는 경우 대신 "법적으로 필요하지 않음"을 기재할 수 있습니다.  

IRS의 지침에 따르면 "해당 없음"을 기재해서는 안 됩니다. 자세한 내용은 IRS 웹 사이트의 "[W-8BEN 양식, 6행에 대한 지침](https://www.irs.gov/instructions/iw8ben#idm139867098922656)"을 참조하세요.
{% endnote %}

IRS는 비거주 및 거주 외국인이 [ITIN(개인 납세자 식별 번호)](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin)을 요청할 수 있도록 허용합니다. {% data variables.product.prodname_sponsors %}를 통해 소득이 발생하는 유지 관리자에게는 이 작업이 필요하지 않겠지만 전체 [지침](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf)을 읽어 개인별 상황을 확인합니다.

## 1099 양식

미국 납세자이고 과세 연도에 소득이 600달러 이상인 경우 {% data variables.product.prodname_dotcom %}는 익년 1월 31일까지 [1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec)를 송부합니다. 해외 납세자에 대한 세금 양식은 제공하지 않습니다.

## 일반 세금 정보

{% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_sponsors %} 지급액에서 세금을 원천징수하지 않습니다. 스폰서 개발자는 자신의 세금을 계산하고 지불할 책임이 있습니다.

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## 판매세

GitHub는 판매세 의무를 계산하는 데 도움이 되는 정보를 제공하고 있습니다. 이 정보는 귀하의 국가 또는 세금 상황에 따라 개인 설정되지 않으므로 자신의 특정 의무를 이해할 수 있도록 전문가와 상담하는 것이 좋습니다. 그러나 디지털 판매세의 일반적인 원칙을 이해하는 데 도움이 되는 몇 가지 개략적 정보를 제공하고자 합니다.

전 세계 대부분의 국가에서 디지털 거래에 대한 판매세는 판매자가 아닌 구매자의 위치를 기준으로 합니다. 예를 들어 미국 내 유지 관리자이고 독일 내 스폰서에게 과세 대상 혜택을 제공하는 경우 독일 판매세가 적용됩니다.

판매세는 일반적으로 상품 또는 유가 서비스가 제공되는 경우에만 적용됩니다. 영업권/일반 지원/영원한 감사는 일반적으로 과세되지 않습니다.

미국에서는 B2B(기업-기업) 및 B2C(기업-소비자) 모두 판매세가 부과됩니다.

EU 및 다른 대부분의 국가 및 지역에서는 B2C 판매에 판매세가 부과됩니다. B2B 판매는 세금이 부과되지 않습니다. 소비자가 VAT에 등록되지 않은 C2C 및 C2B 판매는 과세되지 않습니다.

## 추가 참고 자료

- [스폰서 및 스폰서쉽 보기](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
