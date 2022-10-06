---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060227"
---
この API のリソースの多くには、現在認証されているユーザーについての情報を取得するためのショートカットがあります。 要求 URL に `{username}` パラメーターが含まれていない場合、応答はログインしているユーザーに対して行われます (要求で[認証情報](/rest/overview/resources-in-the-rest-api#authentication)を渡す必要があります)。{% ifversion fpt or ghes or ghec %} ユーザーが 2 要素認証を有効にしているかどうかなど、追加の個人情報は、基本認証または `user` スコープを使用して OAuth で認証されるときに含まれます。{% endif %}
