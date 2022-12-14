---
ms.openlocfilehash: 1f59c95d79ab5fa0f778e05379112ec4b82afd42
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145118341"
---
{% ifversion fpt または ghec %} サインイン、アカウントの作成、パスワードの変更の際にパスワードを入力すると、{% data variables.product.product_name %} は HaveIBeenPwned などのデータセットに照らして入力されたパスワードが弱いかどうかを確認します。 以前にまったく使ったことがないパスワードでも、弱いと判定されることがあります。

{% data variables.product.product_name %}がパスワードを検査するのは入力の際だけであり、入力されたパスワードが平文で保存されることはありません。 詳細については、[HaveIBeenPwned](https://haveibeenpwned.com/) に関するページを参照してください。
{% endif %}
