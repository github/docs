---
title: 关于 GitHub Codespaces 的计费
shortTitle: About billing
intro: '了解 {% data variables.product.prodname_github_codespaces %} 的使用成本，以及 {% data variables.product.prodname_dotcom %} 个人帐户包含的每月使用配额。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
ms.openlocfilehash: 24410721878cd77d2528a4d9e8c91633725ce661
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179546'
---
## {% data variables.product.prodname_github_codespaces %} 定价

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

如果下列所有条件均成立，则向组织或企业收取费用：

- 在其中启动 codespace 的存储库（如果是分支存储库，则为父存储库）归组织所有。
- 组织已配置为承担从存储库或存储库分支创建的 codespace 的费用。
- 创建 codespace 的用户属于组织或是与组织关联的外部协作者，并且组织已选择为此用户所使用的归组织所有的 codespace 付费。

否则，{% data variables.product.prodname_github_codespaces %} 的使用费将计入创建 codespace 的人员的个人帐户，并消耗该个人帐户每月包含的使用量的一部分，或者根据超出所含配额的使用量向该帐户进行计费。 

有关如何将组织配置为支付 codespace 使用费的信息，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”。 面向组织和企业帐户的免费版、团队版和企业版计划不包括对 {% data variables.product.prodname_github_codespaces %} 的任何免费使用。 

### 个人帐户每月包含的存储空间和核心小时数

个人帐户包含以下存储空间和核心使用小时数（免费）：

| 帐户计划 | 每月存储空间 | 每月核心小时数 |
| ------------ | ----------------- | -------------------- |
| 面向个人帐户的 {% data variables.product.prodname_dotcom %} Free | 15 GB/月 | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB/月 | 180 |

{% note %}

**注释**：
- GB/月存储单位是基于时间的度量，1 GB/月表示一整个月的存储使用量为 1 GB。 所有 codespace 和预生成使用的磁盘空间每小时评估一次，并重新计算当前的 GB/月使用量。 因此，虽然有 codespace 和预生成，但 GB/月使用量将在整个月增加。 例如，如果存储总量为 15 GB，并且在整个月度计费周期中保持不变，则在月中使用了 7.5 GB，在月底使用了 15 GB。 有关详细信息，请参阅下面的“[存储使用量计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)”。
- “核心小时数”是用于包含的计算使用量的度量值。 要计算核心小时数，请将 codespace 处于活动状态的小时数乘以下面定价表中的乘数。 对于基本计算机类型，乘数是承载 codespace 的计算机中的处理器核心数。 例如，如果对 codespace 使用 2 核计算机，并且该 codespace 处于活动状态 1 小时，则已使用 2 个核心小时。 如果使用 8 核计算机 1 小时，则已使用 8 个核心小时。 如果使用 8 核计算机两小时，则已使用 16 个核心小时。

{% endnote %}

当你使用了 75%、90% 和 100% 的包含配额时，你将收到电子邮件通知。 通知还显示在 {% data variables.product.prodname_vscode_shortname %} 和 {% data variables.product.prodname_vscode_shortname %} Web 客户端中的“toast”消息中。 可以关闭电子邮件通知（如果需要）。 有关详细信息，请参阅“[管理 GitHub Codespaces 的支出限制](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications)”。

如果个人帐户已用完所有包含的存储空间或计算使用量（以先达到者为准），并且未配置支出限制，则 {% data variables.product.prodname_github_codespaces %} 的使用将受到阻止。 必须设置付款方式和支出限制才能在当前计费月内继续使用 {% data variables.product.prodname_github_codespaces %}。 在下一个月度计费周期开始时，包含的使用量将会重置。 阻止使用 {% data variables.product.prodname_github_codespaces %} 时，不会对存储计费。 

可以随时查看当月使用情况的详细信息。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

如果恢复 codespace 的操作受到阻止，并且希望继续处理在 codespace 中所做的更改，则可执行以下任一操作：

- 添加付款方式和大于 0 美元的支出限制。
- 将 codespace 中的更改导出到分支。 有关详细信息，请参阅“[将更改导出到分支](/codespaces/troubleshooting/exporting-changes-to-a-branch)”。
- 等待每月包含的使用量在下一个月度计费周期开始时重置。 

如果已用完所有包含的所有存储使用量或包含的计算使用量，并且已设置付款方式和支出限制，则无论哪种类型的使用量没有剩余的包含配额，对个人帐户拥有的 codespace 的任何进一步使用都将产生相应费用。 在用完其包含的所有配额之前，不会向你收取其他类型的使用费。

### 付费使用定价

{% data variables.product.prodname_github_codespaces %} 实例（“codespace”）在处于活动状态时会根据计算时间产生费用，并在存在时根据 codespace 占用的磁盘空间大小产生费用。 计算成本与为 codespace 选择的计算机类型中的处理器核心数成正比，如下表所示。 例如，在 16 核计算机上使用 codespace 一小时的计算成本是 2 核计算机的 8 倍。

| 组件           | 计算机类型 | 度量单位 | 包含的使用量乘数 | 价格 |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Codespaces 计算  |  2 个内核      | 1 小时          | 2                         | $0.18 |
|                     |  4 个内核      | 1 小时          | 4                         | $0.36 |
|                     |  8 个内核      | 1 小时          | 8                         | $0.72 |
|                     |  16 个内核     | 1 小时          | 16                        | $1.44 |
|                     |  32 个内核     | 1 小时          | 32                        | $2.88 |
| Codespaces 存储  |  存储     | 1 GB/月<sup>*</sup> | 空值                | 0\.07 美元 |

<sup>*</sup> 有关 GB/月度量单位的详细信息，请参阅下面的“[存储使用量计费](#billing-for-storage-usage)”。

如果启用代码空间的预构建，则会产生额外费用。 有关详细信息，请参阅“[{% data variables.product.prodname_codespaces %} 预生成的计费](#billing-for-codespaces-prebuilds)”。

## 关于 {% data variables.product.prodname_github_codespaces %} 的计费

{% data variables.product.prodname_github_codespaces %} 是根据 codespaces 使用的计算时间长度和存储空间大小以美元 (USD) 计费的。 {% data reusables.codespaces.codespaces-monthly-billing %}

{% data variables.product.prodname_github_codespaces %} 的计费将使用帐户的现有付款方式和收据。 有关详细信息，请参阅“[查看订阅和计费日期](/articles/viewing-your-subscriptions-and-billing-date)”。

{% ifversion ghec %} 如果你通过 Microsoft 企业协议购买了 {% data variables.product.prodname_enterprise %}，则可以将 Azure 订阅 ID 连接到企业帐户，以启用并支付你的 {% data variables.product.prodname_github_codespaces %} 使用费。 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

### 计算使用量计费
Codespace 的计算使用量是该 codespace 处于活动状态的时间长度乘以定价表中该 codespace 计算机类型的乘数。 总计算使用量的计算方式是将可向特定帐户计费的所有 codespace 使用的时间相加。 这些总数每小时向计费服务报告一次，并按月计费。

例如，如果 codespace 处于活动状态 1 小时 15 分钟，则计算成本将是 codespace 的每小时成本（由其计算机类型确定）乘以 1.25。

可通过停止 codespace 来控制计算使用量。 有关信息，请参阅“[停止和启动 codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)”。 Codespace 在一段可配置的非活动时间后自动停止。 超时期限可以由用户配置，也可以在组织级别配置。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的超时期限](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”和“[限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)”。

### 存储使用量计费
出于 {% data variables.product.prodname_github_codespaces %} 计费目的，存储空间包括帐户中所有 codespace 和预生成所使用的磁盘空间。 这包括在 codespace 中使用的所有文件，例如克隆的存储库、配置文件、加载到 codespace 的数据（例如作为存储库中运行的软件的输入和输出的数据）以及扩展等内容。 对于你现有的所有 codespace，无论这些 codespace 处于活动状态还是非活动状态，都会对存储进行计费，但因已用尽包含的使用配额或达到支出限制而被阻止的使用除外。 Codespace 的存储计费在其被删除时终止。

{% note %}

**注释**： 

- 当你使用默认开发容器配置时（请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)”），我们不会将该默认容器计为已用存储空间。 当你使用具有不同基础映像的开发容器配置创建自定义容器时，我们会将该容器计为已用存储空间。
- 当你从默认映像重新生成容器时，我们不会将基础容器计为已用存储空间。 对于其他基础映像，codespace 使用的所有存储空间（包括基础容器）都计为已用存储空间。

{% endnote %}

以 GB/月为单位报告 codespace 存储。 计费月是从一个月的固定日期到下个月的同一天。 在大多数情况下，该固定日期由你开始执行当前 {% data variables.product.prodname_dotcom %} 计划的日期决定。 GB/月存储的计算方式如下。 每小时评估一次当前处于活动状态和停止状态的所有 codespace 所使用的存储空间。 然后，此数字除以当前计费月的小时数：`total storage size / hours this month`。 结果将与当月 codespace 存储的累积总计相加。

例如，如果有一个 codespace 使用 100 GB 存储空间且已存在一小时，则在该月（30 天）已使用 `100 / (24 * 30) = 0.1388` GB/月存储空间。 如果一个月（30 天）内使用的 {% data variables.product.prodname_github_codespaces %} 包含两个 100 GB codespace，并且这两个 codespace 都存在整整三天，则将有针对这些 codespace 的存储的 `24 * 3` 个每小时报告，总共 `(24 * 3) * 200 / (24 * 30) = 20` GB/月。

对于每一个每小时报告，前一小时的存储使用量以秒为单位计算。 因此，如果 codespace 的存在时间未满 60 分钟，则不会收取整整一小时的存储费用。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。

组织所有者可以执行以下操作：
- 列出组织中当前处于活动状态和停止状态的 codespace。 有关详细信息，请参阅“[列出组织中的 codespace](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)”。 除了这些 codespace 的成本外，当月的 {% data variables.product.prodname_github_codespaces %} 成本可能包括当月早些时候存在但之后已被删除的 codespace 的成本。 
- 查看组织当月到目前为止的 {% data variables.product.prodname_github_codespaces %} 计算和存储使用总量。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。
- 配置组织设置以管理 {% data variables.product.prodname_github_codespaces %} 成本。 有关详细信息，请参阅“[管理组织中的 {% data variables.product.prodname_github_codespaces %} 成本](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)”。

要估算计量服务的成本，可使用 {% data variables.product.prodname_dotcom %} [定价计算器](https://github.com/pricing/calculator?feature=codespaces)。

### {% data variables.product.prodname_codespaces %} 预构建的计费

{% data reusables.codespaces.prebuilds-definition %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 预生成](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”。

#### 预生成的 {% data variables.product.prodname_actions %} 成本

预生成是通过在 {% data variables.product.prodname_dotcom %} 托管的运行器上运行 {% data variables.product.prodname_actions %} 工作流来创建和更新的。 可配置期望的预生成更新的自动触发方式。 有关信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

与其他工作流一样，在预生成工作流运行时，它们会消耗帐户中包含的 {% data variables.product.prodname_actions %} 分钟数（如果有），或者它们会根据 {% data variables.product.prodname_actions %} 分钟数产生费用。 有关 {% data variables.product.prodname_actions %} 分钟定价的详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。 创建或更新预生成不会产生 {% data variables.product.prodname_codespaces %} 计算成本。

可通过下载帐户的使用情况报告来跟踪预生成工作流和存储的使用情况。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

#### 预生成的存储成本

除了 {% data variables.product.prodname_actions %} 分钟数，还将针对与给定存储库和区域的每个预生成配置关联的预生成的存储计费。 预生成的存储按与 codespace 存储相同的费率计费。

单个区域中预生成的存储成本将类似于存储从该预生成创建的单个 codespace 所产生的存储成本。 例如，如果在 codespace 创建期间使用 `updateContentCommand` 和 `postCreateCommand` 命令将更多文件下载到开发容器，则生成的 codespace 的存储成本可能高于预生成的成本。

与预生成配置关联的总存储成本将取决于以下因素。

- 每 GB 存储价格。 请参阅下表。
- 生成的预生成的大小（以 GB 为单位）。
- 预生成可用的区域数（因为预生成的副本存储在每个区域）。
- 保留的预生成的旧版本数。

因此，预生成配置生成的预生成的存储成本计算方式如下：`price per GB * size (GB) * regions * versions`。

#### 控制预生成成本

为了减少 Actions 分钟数的消耗，可将预生成设置为仅在对开发容器配置文件进行更改时更新，或者仅在自定义计划中进行更新。 还可通过调整保留的每个预生成的早期版本数来管理存储使用量。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”。

要限制与预生成关联的存储成本，可选择仅在选定区域创建预生成，并且可指定将保留的预生成的旧版本数。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”。

{% note %}

注意：在一个计费月内，预生成可能会多次更新。 预生成的新版本可能大于或小于早期版本。 这将影响存储费用。 有关如何计算一个计费月内的存储的详细信息，请参阅上面的“[存储使用量计费](#billing-for-storage-usage)”。

{% endnote %}

#### 从预生成创建的 codespace 的成本

使用预生成创建的 codespace 的费用与常规 codespace 相同。

## 设置支出限制

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”。

{% data reusables.codespaces.exporting-changes %}

## 限制组织拥有的 codespace 的计算机类型

默认情况下，创建 codespace 时将使用具有最低有效资源的计算机类型。 但是，用户可能能够选择具有更多资源的计算机类型。 他们可以在创建 codespace 时执行此操作，也可以更改现有 codespace 的计算机类型。 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)”和“[更改 codespace 的计算机类型”](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)。

如果选择了具有更多资源的计算机类型，这将影响该 codespace 的每小时费用，如上所示。 

对于向组织或企业帐户计费的 codespace，组织所有者可创建策略来限制用户可为其选择的计算机类型。 有关详细信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

## 如何处理复刻的存储库的计费

从分支存储库创建的 codespace 的使用费将计入个人帐户，除非上游（或父）存储库位于以下类型的组织内：允许组织的成员或外部协作者使用 codespace，费用由组织承担。

例如，以某个组织的成员或外部协作者为例，该组织同意为该用户的 codespace 付费。 如果该用户有权对组织拥有的专用存储库创建分支，则可在之后为这个新存储库创建 codespace 并使用它，其费用由组织承担。 这是因为组织是父存储库的所有者。 请注意，组织所有者可以删除用户对专用存储库、分支存储库以及 codespace 的访问权限。 组织所有者还可以删除父存储库，这也将删除分支存储库。 有关详细信息，请参阅“[管理存储库的分支策略](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## 存储库转让给其他组织时如何处理计费

使用量每小时计算一次。 组织支付从组织拥有的任何存储库创建的 codespace 的使用费，其中组织设置允许对组织计费。 有关详细信息，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)”。 存储库转出组织后，与该存储库关联的任何 codespace 的所有权和计费责任都将相应地改变。

## 移除用户后会发生什么情况

如果从组织或存储库中移除用户，则会自动删除其代码空间。 
