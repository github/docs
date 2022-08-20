---
title: 'Fase 5: Rollout e digitalização de código de escala'
intro: 'Você pode aproveitar as APIs disponíveis para implementar o {% data variables.product.prodname_code_scanning %} programaticamente pela equipe e por linguagem em toda a empresa usando os dados do repositório que você coletou anteriormente.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Implementação da digitalização do código
miniTocMaxHeadingLevel: 3
---

{% note %}

Este artigo faz parte de uma série sobre adoção de {% data variables.product.prodname_GH_advanced_security %} em escala. Para o artigo anterior dessa série, consulte "[Fase 4: Criar a documentação interna](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)".

{% endnote %}

### Habilitar a varredura de código

Usando os dados que você coletou na [Fase 2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale), você pode começar a habilitar o GHAS e, em seguida, {% data variables.product.prodname_code_scanning %} nos seus repositórios, uma linguagem por vez. O processo passo a passo para habilitar o GHAS deve ser mais ou menos assim:

1. Habilitar o GHAS no repositório. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)".
1. Crie um pull request para o branch padrão do repositório com um arquivo `codeql-analysis.yml`, que contém um exemplo de como executar o CodeQL para essa linguagem. Para obter mais informações, consulte "[Criar uma pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."
1. Crie um problema no repositório para explicar por que um pull request foi levantado. O problema que você cria pode conter um link para a comunicação anterior enviada para todos os usuários, mas também pode explicar quais alterações o pull request introduz, quais próximos passos a equipe tem que seguir, quais são as responsabilidades da equipe e como a equipe deve usar {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

Há uma ferramenta publicamente disponível que completa as duas primeiras etapas, denominada [ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement). Você pode voltar a executar a ferramenta ghas-enablement em lotes de linguagens, em que isso faz sentido. Por exemplo, JavaScript, TypeScript, Python, e Go provavelmente possuem um processo similar de compilação e, portanto, poderiam usar um arquivo de análise do CodeQL. A ferramenta de ghas-enablement também pode ser usada para linguagens como Java, C e C++, mas devido à natureza variada de como essas linguagens criam e compilam, você pode precisar criar arquivos de análise de CodeQL mais direcionados.

{% note %}

**Observação:** Se você pretende usar {% data variables.product.prodname_actions %} para controlar {% data variables.product.prodname_code_scanning %} e você não usa a ferramenta [ghas-enablement](https://github.com/NickLiffen/ghas-enablement), tenha em mente que não há acesso à API para o diretório do `.github/workflow`. Isto significa que você não pode criar um script sem um cliente do git subjacente à automação. A solução alternativa é alavancar o script bash em uma máquina ou contêiner que tenha um cliente do git. O cliente do git pode fazer push e pull de arquivos no diretório `.github/workflows` em que o arquivo `codeql-analyis.yml` está localizado.

{% endnote %}

É importante não apenas fazer push do arquivo `codeql-analyis.yml` no branch padrão do repositório. Usar um pull request coloca a propriedade da equipe de desenvolvimento para revisar e fazer merge, permitindo que a equipe de desenvolvimento aprenda {% data variables.product.prodname_code_scanning %} e envolva a equipe no processo.

Você deve capturar os URLs de pull request criados por automação e verificar a cada semana quais estão fechados. Após algumas semanas, pode ser que valha a pena criar outro problema ou enviar e-mails internos se o pull request permanecer sem merge.

### Criando especialistas no assunto

Em seguida, poderá ir para a fase de habilitação, que consiste na criação de especialistas internos em matéria de assuntos (ou PME) e na coordenação de reuniões de empresas. A abertura de pull requests e problemas nos repositórios provavelmente resolverá uma grande porcentagem da sua adoção, mas isso não resolve casos pontuais de uso onde um processo de compilação, uma estrutura específica, ou uma biblioteca precisa de sinalizadores de recursos específicos para ser habilitado. É necessária uma abordagem mais personalizada e prática para fazer push de uma alta adoção, especialmente para Java, C e C++.

É uma boa ideia realizar reuniões regulares de empresa sobre tópicos específicos para treinar e discutir a publicação com um grupo maior. Isso é muito mais eficiente em termos de tempo para uma empresa com milhares de repositórios em comparação com trabalhar com uma equipe de cada vez. As equipes podem participar de sessões que são relevantes para elas. Algumas sessões de exemplo que foram executadas antes de incluir:

- {% data variables.product.prodname_code_scanning_capc %} em um contêiner
- {% data variables.product.prodname_code_scanning_capc %} & Java Struts
- {% data variables.product.prodname_code_scanning_capc %} & JSP

Você pode usar os dados que você coletou sobre a distribuição de diferentes linguagens entre repositórios para criar reuniões direcionadas.

{% note %}

Para o próximo artigo dessa série, consulte "[Fase 6: Implementação e escala da digitalização do segredo](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)".

{% endnote %}
