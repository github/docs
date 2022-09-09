---
title: 使用 SAML 单点登录管理自动程序和服务帐户
intro: 启用了 SAML 单点登录的组织可保留对自动程序和服务帐户的访问权限。
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
ms.openlocfilehash: 57f1150929db674a658d52a5cb7e455444cc48de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127537'
---
若要保留对机器人和服务帐户的访问权限，组织管理员可以为其组织[启用](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)但不[强制实施](/articles/enforcing-saml-single-sign-on-for-your-organization) SAML 单一登录。 如果需要对组织实施 SAML 单点登录，您可以通过身份提供程序 (IdP) 为自动程序或服务帐户创建外部身份。

{% warning %}

注意：如果对组织强制实施 SAML 单一登录，并且没有通过 IdP 为机器人和服务帐户设置外部标识，则它们将被从组织中删除 。

{% endwarning %}

## 延伸阅读

- [关于使用 SAML 单一登录进行的标识和访问管理](/articles/about-identity-and-access-management-with-saml-single-sign-on)
