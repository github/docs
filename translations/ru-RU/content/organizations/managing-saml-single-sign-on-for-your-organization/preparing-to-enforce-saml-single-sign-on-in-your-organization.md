---
title: Подготовка к принудительному применению единого входа SAML в организации
intro: Перед применением единого входа SAML в организации необходимо проверить членство в организации и настроить параметры подключения к поставщику удостоверений.
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to enforce SAML SSO
ms.openlocfilehash: 6457b44f5a5debd005b8878b2f31f81c4341ab15
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125608'
---
{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} Перед принудительным применением единого входа SAML в организации необходимо проверить членство в организации, включить единый вход SAML и проверить доступ участников организации к SAML. Дополнительные сведения см. в следующих разделах.

| Задача | Дополнительные сведения |
| :- | :- |
| Добавление или удаление участников из организации | <ul><li>[Отправка пользователям приглашений присоединиться к вашей организации](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)</li><li>[Удаление участника из организации](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)</li></ul> |
| Подключение поставщика удостоверений к организации путем включения единого входа SAML | <ul><li>[Подключение поставщика идентификаторов к вашей организации](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)</li><li>[Включение и тестирование единого входа SAML для вашей организации](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)</li></ul> |
| Убедитесь, что члены вашей организации вошли в систему и связали свои учетные записи с поставщиком удостоверений | <ul><li>[Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)</li></ul> |

Завершив эти задачи, вы сможете принудительно применить единый вход SAML для вашей организации. Дополнительные сведения см. в разделе [Принудительное применение единого входа SAML для организации](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).

{% data reusables.saml.outside-collaborators-exemption %}
