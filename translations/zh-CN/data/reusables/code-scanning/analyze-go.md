---
ms.openlocfilehash: e9f2162fa5c65d4a59b2bd350aea2b131205f9a6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098236"
---
{% data variables.product.prodname_codeql %} 也运行 Go 项目的构建来设置项目。 但与其他编译的语言不同，存储库中的所有文件都将被提取，而不只是生成的文件。 可以使用自定义生成命令跳过提取生成时不会接触到的 Go 文件。
