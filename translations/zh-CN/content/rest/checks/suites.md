---
title: 检查套件
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3202e9e108f8020986d7abe14679df45307df337
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063192'
---
{% note %}

  注意：GitHub 应用在每个提交 SHA 中仅接收一个 [`check_suite`](/webhooks/event-payloads/#check_suite) 事件，即使将提交 SHA 推送到多个分支也是如此。 要了解何时将提交 SHA 推送到分支，可以订阅分支 [`create`](/webhooks/event-payloads/#create) 事件。

{% endnote %}
