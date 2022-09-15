---
title: 依赖项提交
intro: 通过依赖项提交 API，可以提交项目依赖项，例如生成或编译项目时解析的依赖项。
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079889'
---
## 关于依赖项提交 API

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

依赖项以快照的形式提交到依赖项提交 API。 快照是一组与提交 SHA 和其他元数据关联的依赖项，反映提交存储库的当前状态。  可以选择使用预先创建的操作，或创建自己的操作，以在每次生成项目时，以所需的格式将依赖项提交到依赖项提交 API。 有关使用依赖项提交 API 的详细信息，请参阅“[使用依赖项提交 API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”。

可以将多个依赖项集提交到依赖项提交 API，以包含在依赖项关系图中。 API 使用快照的 `job.correlator` 属性和 `detector.name` 类别来确保显示每个工作流的最新提交。 属性 `correlator` 本身是用于保持独立提交不同的主要字段。 例如 `correlator` 可以是操作运行中两个可用变量的简单组合：`<GITHUB_WORKFLOW> <GITHUB_JOB>`。
