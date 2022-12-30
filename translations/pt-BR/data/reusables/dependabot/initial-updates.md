---
ms.openlocfilehash: 8adf896da9e4748cfaa5d0d0562172af14264f97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145127838"
---
Quando você habilitar atualizações de versão pela primeira vez, você pode ter muitas dependências que estão desatualizadas e algumas podem ser muitas versões por trás da versão mais recente. O {% data variables.product.prodname_dependabot %} verifica as dependências desatualizadas assim que estiver habilitado. Você pode ver novas pull requests para atualizações de versão dentro de alguns minutos após adicionar o arquivo de configuração, dependendo do número de arquivos de manifesto para os quais você configura as atualizações. {% data variables.product.prodname_dependabot %} também será executada uma atualização sobre as alterações subsequentes no arquivo de configuração.

{% data variables.product.prodname_dependabot %} também pode criar pull requests quando você alterar um arquivo de manifesto depois que uma atualização falhar. Isto ocorre porque alterações em um manifesto, como remover a dependência que causou falha na atualização, pode fazer com que a atualização recém-acionada sejam bem-sucedida.

Para manter as solicitações de pull gerenciáveis e fáceis de serem revisadas, o {% data variables.product.prodname_dependabot %} gera, no máximo, cinco solicitações de pull para começar a trazer as dependências para a última versão. Se você fizer o merge de algumas desses primeiros pull requests antes da próxima atualização programada, Os pull requests restantes serão abertos na próxima atualização, até o máximo. Você pode alterar o número máximo de solicitações de pull em aberto definindo a [opção de configuração `open-pull-requests-limit`](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit).
