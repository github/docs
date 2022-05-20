---
title: GitHub Sponsors 的税务信息
intro: '被赞助的开发者和组织必须向 {% data variables.product.prodname_dotcom %} 提交税务信息，并负责计算和支付自己的税款。'
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
shortTitle: 税务信息
---

## W-9/W-8 税表

根据法律，美国要求 {% data variables.product.prodname_dotcom %}。 国税局 (IRS) 从所有美国和非美国 维护者收集 税务信息。 这些表格由 {% data variables.product.prodname_dotcom %} 持有，无需提交给国税局。

### W-9 (U.S.)

W-9 税表中的信息有助于 {% data variables.product.prodname_dotcom %} 使用正确的纳税人识别号码 (TIN) 以 1099 表格向您报告支付给 IRS 的收入。

如果您是美国的纳税人，您必须先提交 [W-9](https://www.irs.gov/forms-pubs/about-form-w-9) 才能发布您的 {% data variables.product.prodname_sponsors %} 个人资料。

### W-8 BEN/W-8 BEN-E（非美国）

W-8 BEN 和 W-8 BEN-E 税单有助于 {% data variables.product.prodname_dotcom %} 确定须扣缴金额的受益所有者。

如果你是美国以外任何其他地区的纳税人， 必须提交 [W-8 BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) (个人) 或 [W-8 BEN-E](https://www.irs.gov/forms-pubs/about-form-w-8-ben-e) (公司) 表单才能发布您的 {% data variables.product.prodname_sponsors %} 个人资料。 For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your personal account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account#submitting-your-tax-information)" and "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization#submitting-your-tax-information)." {% data variables.product.prodname_dotcom %} 将向您发送适当的表格，在到期时通知您，并给您合理的时间填写和发送表格。

如果您被分配了不正确的税单， [请联系 {% data variables.product.prodname_dotcom %} 客服](https://support.github.com/contact?form%5Bsubject%5D=GitHub%20Sponsors:%20tax%20form&tags=sponsors) 来为您的情况重新分配正确的税单。

### 税务识别号

W-8 BEN 和 W-8 BEN-E 税务表要求“美国 纳税人识别号（SSN 或 ITIN）”或“外国税务识别号”。

如果您不是美国 公民或其他美国 人，包括外侨个人，那么您通常需要提供“外国税务识别号”。 这是您的居住国向您开具的税务识别号。

如果您的居住国或计费国是印度，则您可以使用您的永久帐号 (PAN) 作为您的税务识别号。

{% note %}

**注意：** 如果您的国家不要求公民拥有政府颁发的税号，则您可以填写“法律不要求”。

IRS 的指导意见指出，您不应填写“不适用”。 更多信息请参阅 IRS 网站上的“[Form W-8BEN 指令第 6 行](https://www.irs.gov/instructions/iw8ben#idm139867098922656)”。
{% endnote %}

IRS 允许非常住外国人和常住外国人申请 [个人纳税人身份号码](https://www.irs.gov/individuals/international-taxpayers/taxpayer-identification-numbers-tin#itin) 或 ITIN。 对于通过 {% data variables.product.prodname_sponsors %} 获得收入的维护者来说可能不必要，但请阅读完整的[说明](https://www.irs.gov/pub/irs-pdf/iw8ben.pdf)以确定您的个人情况。

## 1099 表格

如果您是美国的纳税人并且在一个纳税年度内的收入超过 600 美元，{% data variables.product.prodname_dotcom %} 将在下一个日历年的 1 月 31 日之前向您发送 [1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec)。 我们不为国际纳税人提供税表。

## 一般税务信息

{% data variables.product.prodname_dotcom %} 不会从 {% data variables.product.prodname_sponsors %} 付款中代扣税款。 被赞助的开发者须负责计算和支付自己的税款。

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

## 销售税

GitHub 提供信息帮助您计算销售税义务。 此信息未针对您的国家/地区或税务情况进行个性化，建议您与专业人士交谈，了解您的具体义务。 但是，我们希望提供一些简要信息，以帮助您了解数字销售税的一般原则。

在世界大多数国家/地区，数字交易的销售税基于收款人的位置，而不是卖方。 例如，如果您是身在美国的维护者，但向德国的赞助商提供应税福利，则适用德国销售税。

销售税一般只有在提供有价值的货物或服务时才适用。 商誉/资助/永恒升值通常不征税。

在美国，B2B（企业对企业）和 B2C（企业对消费者）都要缴纳销售税。

在欧盟和大多数其他国家和地区，B2C 销售需缴纳销售税。 B2B 销售不需纳税。 消费者未注册增值税的 C2C 和 C2B 销售不征税。

## 延伸阅读

- [查看您的赞助者和赞助](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)
