---
title: Sobre o uso dos seus dados pelo GitHub
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: 'O {% data variables.product.product_name %} usa os dados do seu repositório para conectar você a ferramentas, pessoas, projetos e informações relevantes.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126671'
---
## Sobre o uso dos seus dados de {% data variables.product.product_name %}

O {% data variables.product.product_name %} agrega metadados e analisa padrões de conteúdo com a finalidade de fornecer insights genéricos sobre o produto. Ele usa dados de repositórios públicos, bem como metadados e dados de agregação de repositórios privados quando o proprietário de um repositório opta por compartilhar os dados com o {% data variables.product.product_name %} habilitando o grafo de dependência. Se você habilitar o grafo de dependência em um repositório privado, o {% data variables.product.product_name %} executará a análise somente leitura desse repositório privado específico.

Se você habilitar o uso de dados em um repositório privado, continuaremos tratando seus dados privados, o código-fonte ou os segredos comerciais como confidenciais e privados de acordo com nossos [Termos de Serviço](/free-pro-team@latest/github/site-policy/github-terms-of-service). As informações apreendidas são provenientes apenas de dados agregados. Para obter mais informações, confira "[Como gerenciar configurações de uso de dados para seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".

{% data reusables.repositories.about-github-archive-program %} Para obter mais informações, confira "[Sobre o arquivamento de conteúdo e de dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".

{% data reusables.user-settings.export-data %} Para obter mais informações, confira "[Como solicitar um arquivo dos dados da sua conta pessoal](/articles/requesting-an-archive-of-your-personal-account-s-data)".

Anunciaremos novos recursos significativos que usam metadados ou dados de agregação no [blog do {% data variables.product.prodname_dotcom %}](https://github.com/blog).

## Como os dados melhoram as recomendações de segurança

Para dar um exemplo de como os dados podem ser usados, podemos detectar e alertar você para uma vulnerabilidade de segurança nas dependências do seu repositório público. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Para detectar possíveis vulnerabilidades de segurança, o {% data variables.product.product_name %} verifica o conteúdo do arquivo de manifesto de dependência para extrair uma lista de dependências do seu projeto.

O {% data variables.product.product_name %} também aprende com as alterações que você faz no manifesto de dependência. Por exemplo, se você atualizar uma dependência vulnerável para uma versão segura após receber um alerta de segurança e outras pessoas fizerem o mesmo, o {% data variables.product.product_name %} aprenderá como corrigir a vulnerabilidade e poderá recomendar um patch semelhante aos repositórios afetados.

## Compartilhamento de dados e privacidade

Os dados do repositório privada são verificados por máquina e nunca lidos pela equipe do {% data variables.product.product_name %}. Os olhos humanos nunca verão o conteúdo dos seus repositórios privados, exceto conforme descrito em nossos [Termos de Serviço](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).

Os dados pessoais e individuais ou do seu repositório não serão compartilhados com terceiros. Podemos compartilhar dados agregados apreendidos por nossa análise com nossos parceiros.
