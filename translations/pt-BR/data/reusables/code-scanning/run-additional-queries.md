---
ms.openlocfilehash: c6e1f73548abc1a1bae7c747d864cefce43c2c02
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146179357"
---
Ao usar {% data variables.product.prodname_codeql %} para fazer a varredura do código, o mecanismo de análise de {% data variables.product.prodname_codeql %} gera um banco de dados do código e executa consultas no mesmo. A análise de {% data variables.product.prodname_codeql %} usa um conjunto-padrão de consultas, mas você pode especificar outras consultas a serem executadas, além das consultas-padrão.

{% ifversion codeql-packs %} Você poderá executar consultas extras se elas fizerem parte de um pacote do {% data variables.product.prodname_codeql %} (beta) publicado no {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} ou um pacote do {% data variables.product.prodname_ql %} armazenado em um repositório. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %} com o {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

As opções disponíveis para especificar as consultas adicionais que você deseja executar são:

- `packs` para instalar um ou mais pacotes de consulta (beta) do {% data variables.product.prodname_codeql %} e executar o pacote de consultas padrão ou as consultas desses pacotes.
- `queries` para especificar um arquivo _.ql_ individual, um diretório que contém vários arquivos _.ql_, um arquivo de definição de pacote de consultas _.qls_ ou qualquer combinação. Para obter mais informações sobre as definições do pacote de consultas, confira "[Como criar pacotes de consultas do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".

Use `packs` e `queries` no mesmo fluxo de trabalho.
{% else %} Todas as consultas que você deseja executar precisam pertencer a um pacote do {% data variables.product.prodname_ql %} em um repositório. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %} com o {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Você pode especificar um arquivo _.ql_ individual, um diretório que contém vários arquivos _.ql_, um arquivo de definição de pacote de consultas _.qls_ ou qualquer combinação. Para obter mais informações sobre as definições do pacote de consultas, confira "[Como criar pacotes de consultas do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".
{% endif %}

{% ifversion fpt or ghec %}Não recomendamos referenciar pacotes de consultas diretamente do repositório `github/codeql`, como `github/codeql/cpp/ql/src@main`. Essas consultas teriam que ser recompiladas e talvez não sejam compatíveis com a versão do {% data variables.product.prodname_codeql %} ativa no momento no {% data variables.product.prodname_actions %}, o que poderia causar erros durante a análise.{% endif %}
