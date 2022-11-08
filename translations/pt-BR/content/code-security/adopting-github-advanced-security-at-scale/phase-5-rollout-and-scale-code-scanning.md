---
title: 'Fase 5: Distribuição e exame de segredos em escala'
intro: 'Utilize as APIs disponíveis para distribuir o {% data variables.product.prodname_code_scanning %} programaticamente por equipe e por linguagem em toda a empresa usando os dados do repositório coletados anteriormente.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: abbcdf4c1e4a231a568e8d8cd488877ebdf2fd9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107869'
---
{% note %}

Este artigo faz parte de uma série sobre a adoção do {% data variables.product.prodname_GH_advanced_security %} em escala. Para ver o artigo anterior desta série, confira "[Fase 4: Criar a documentação interna](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)".

{% endnote %}

### Habilitar o exame de códigos

Com os dados coletados na [Fase 2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale), é possível começar a habilitação do GHAS e, em seguida, do {% data variables.product.prodname_code_scanning %} nos repositórios, uma linguagem por vez. O processo passo a passo para habilitar o GHAS deve ser semelhante ao seguinte:

1. Habilite o GHAS no repositório. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)".
1. Crie uma solicitação de pull no branch padrão do repositório com um arquivo `codeql-analysis.yml` que contenha um exemplo de como executar o CodeQL para essa linguagem. Para obter mais informações, confira "[Como criar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)".
1. Crie um problema no repositório para explicar por que uma solicitação de pull foi gerada. O problema que você cria pode conter um link para a comunicação anterior enviada a todos os usuários, mas também pode explicar quais alterações a solicitação de pull apresenta, quais são as próximas etapas que a equipe precisa seguir, quais são as responsabilidades da equipe e como ela deve usar o {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Como criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

Há uma ferramenta publicamente disponível que conclui as duas primeiras etapas, chamada de [ferramenta de habilitação do GHAS](https://github.com/NickLiffen/ghas-enablement). Quando adequado, é possível executar novamente a ferramenta de habilitação do GHAS em lotes de linguagens. Por exemplo, JavaScript, TypeScript, Python e Go provavelmente têm um processo de compilação semelhante e, portanto, podem usar um arquivo de análise do CodeQL semelhante. A ferramenta de habilitação do GHAS também pode ser usada para linguagens como Java, C e C++, mas devido à natureza variada da criação e da compilação dessas linguagens, pode ser preciso criar arquivos de análise do CodeQL mais direcionados.

{% note %}

**Nota:** se você pretende usar o {% data variables.product.prodname_actions %} para controlar o {% data variables.product.prodname_code_scanning %} e não usa a [ferramenta de habilitação do GHAS](https://github.com/NickLiffen/ghas-enablement), deve ter em mente que não há acesso de API ao diretório `.github/workflow`. Isso significa que não é possível criar um script sem um cliente Git subjacente à automação. A solução alternativa é utilizar o script bash em um computador ou contêiner que tenha um cliente Git. O cliente Git pode enviar por push e fazer pull de arquivos no diretório `.github/workflows` em que o arquivo `codeql-analysis.yml` está localizado.

{% endnote %}

Não basta apenas enviar o arquivo `codeql-analysis.yml` para o branch padrão do repositório. O uso de uma solicitação de pull coloca a responsabilidade de revisão e mesclagem na equipe de desenvolvimento, o que permite que ela aprenda mais sobre o {% data variables.product.prodname_code_scanning %} e seja envolvida no processo. 

Capture as URLs de solicitação de pull criadas pela automação e verifique todas as semanas se há atividades e quais foram encerradas. Depois de algumas semanas, pode valer a pena criar outro problema ou enviar emails internos caso a solicitação de pull permaneça não mesclada.

### Desenvolvimento de especialistas no assunto

Em seguida, é possível prosseguir para o próximo estágio de capacitação, que é criar especialistas internos no assunto, ou PMEs, e organizar reuniões na empresa. A abertura de solicitações de pull e problemas nos repositórios provavelmente abordará uma grande porcentagem da adoção, mas não os casos de uso únicos em que um processo de compilação, uma estrutura ou uma biblioteca específica precisa da habilitação de sinalizadores de recursos específicos. Uma abordagem mais personalizada e prática é necessária para impulsionar a alta adoção, especialmente para Java, C e C++.

É recomendado realizar reuniões regulares na empresa sobre tópicos específicos para instruir e discutir a distribuição com um grupo maior. Isso é muito mais eficiente em termos de tempo para uma empresa com milhares de repositórios do que trabalhar com uma equipe por vez. As equipes podem participar de sessões relevantes para elas. Algumas sessões de exemplo que foram realizadas anteriormente incluem:

- {% data variables.product.prodname_code_scanning_capc %} em um contêiner
- {% data variables.product.prodname_code_scanning_capc %} e Java Struts
- {% data variables.product.prodname_code_scanning_capc %} e JSP

É possível usar os dados coletados sobre a distribuição de diferentes linguagens entre os repositórios para criar reuniões direcionadas.

{% note %}

Para ver o próximo artigo desta série, confira "[Fase 6: Distribuição e exame de segredos em escala](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)".

{% endnote %}
