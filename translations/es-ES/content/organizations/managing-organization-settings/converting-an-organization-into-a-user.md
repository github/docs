---
title: Convertir una organización en un usuario
intro: 'No es posible convertir una organización en una cuenta personal, pero puedes crear una nueva cuenta personal y transferirle los repositorios de la organización.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149808'
---
{% ifversion fpt or ghec %}

{% note %}

**Nota**: Después de eliminar una cuenta, el nombre de usuario en el momento de la eliminación no estará disponible para volver a utilizarlo durante 90 días. Para volver a utilizar un nombre de usuario de una organización inmediatamente, debes cambiar el nombre de usuario antes de que borres la organización.

 {% endnote %}

1. [Regístrate](/articles/signing-up-for-a-new-github-account) para obtener una cuenta nueva en GitHub.
2. [Haga que el rol del usuario cambie a un propietario](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} a la nueva cuenta personal.
4. [Transfiere cada repositorio de la organización](/articles/how-to-transfer-a-repository) a la nueva cuenta personal.
5. [Cambie el nombre de la organización](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) para que el nombre de usuario actual esté disponible.
6. [Cambie el nombre del usuario](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) al nombre de la organización.
7. [Elimine la organización](/organizations/managing-organization-settings/deleting-an-organization-account).


{% else %}

1. Regístrate para obtener una nueva cuenta personal de GitHub Enterprise.
2. [Haga que el rol del usuario cambie a un propietario](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} a la nueva cuenta personal.
4. [Transfiere cada repositorio de la organización](/articles/how-to-transfer-a-repository) a la nueva cuenta personal.
5. [Elimine la organización](/articles/deleting-an-organization-account).
6. [Cambie el nombre del usuario](/articles/changing-your-github-username) al nombre de la organización.

{% endif %}
