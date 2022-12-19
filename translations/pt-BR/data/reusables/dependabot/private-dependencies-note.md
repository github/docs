---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145127830"
---
Ao executar atualizações de segurança ou versão, alguns ecossistemas devem ser capazes de resolver todas as dependências de sua fonte para verificar se as atualizações foram bem-sucedidas. Se o seu manifesto ou arquivos de bloqueio contiverem dependências privadas, {% data variables.product.prodname_dependabot %} deverá ser capaz de acessar o local em que essas dependências estão hospedadas. Os proprietários da organização podem conceder a {% data variables.product.prodname_dependabot %} acesso a repositórios privados que contêm dependências para um projeto dentro da mesma organização. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)". Você pode configurar o acesso a registros privados no arquivo de configuração _dependabot.yml_ de um repositório. Para obter mais informações, confira "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".
