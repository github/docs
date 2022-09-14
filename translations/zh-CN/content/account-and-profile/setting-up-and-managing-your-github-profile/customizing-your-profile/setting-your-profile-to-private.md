---
title: 将配置文件设置为私密
intro: 专用配置文件仅显示有限的信息，并隐藏了一些活动。
versions:
  fpt: '*'
topics:
  - Profiles
shortTitle: Set profile to private
ms.openlocfilehash: 51fd476bc77856b525ce3e991e4eb30e8a881361
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062912'
---
## 关于私密配置文件

{% note %}

注意：私密配置文件目前以 beta 版本提供，可能会随时更改。

{% endnote %}

若要隐藏配置文件页的某些部分，可以将配置文件设置为私密。 这还会隐藏你在 {% data variables.product.prodname_dotcom_the_website %} 上的各种社交功能中的活动。 私密配置文件对所有用户隐藏信息，目前没有允许指定用户查看你的活动的选项。

将配置文件设置为私密后，你仍可在访问自己的配置文件时查看所有信息。

私密配置文件收不到 [{% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors) 的赞助。 要想获得 {% data variables.product.prodname_sponsors %} 赞助资格，配置文件不能设置为私密。

## 私密配置文件和公共配置文件之间的差异

当配置文件设置为私密时，配置文件页中会隐藏以下内容：

- 成就和亮点。
- 活动概述和活动源。
- 贡献图。
- 关注者和关注计数。
- “关注”和“赞助”按钮。
- 组织成员身份。
- 星级、项目、包和赞助选项卡。

{% note %}

注意：当配置文件设置为私密时，一些可选字段仍然是公开可见的，例如自述文件、传记和个人资料照片。

{% endnote %}

## 对活动报告所做的更改

通过将配置文件设置为私密，不会删除或隐藏过去的活动；此设置仅适用于启用了私密设置时的活动。

配置文件设置为私密后，{% data variables.product.prodname_dotcom_the_website %} 活动不会出现在以下位置：

- 其他用户的活动源。
- 讨论排行榜。
- [趋势](https://github.com/trending)页面。

{% note %}

注意：你在公共存储库上的活动仍将对查看这些存储库的任何人公开可见，并且某些活动数据可能仍可通过 {% data variables.product.prodname_dotcom %} API 获得。

{% endnote %}

## 更改配置文件的隐私设置

{% data reusables.user-settings.access_settings %}
1. 在“贡献和活动”下，选中“将配置文件设置为私密并隐藏活动”旁边的复选框。
{% data reusables.user-settings.update-preferences %}
