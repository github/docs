---
title: Envio de dependência
intro: 'A API de envio de dependências permite que você envie dependências para projetos, como as dependências resolvidas quando um projeto é construído ou compilado.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
---

## Sobre a API de envio de dependência

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

As dependências são enviadas para a API de envio de dependência na forma de um instantâneo. Um instantâneo é um conjunto de dependências associadas a um commit SHA e outros metadados, que reflete o estado atual do seu repositório para um commit.  Você pode optar por usar ações pré-criadas ou criar suas próprias ações para enviar suas dependências para a API de envio de dependências no formato exigido cada vez que o seu projeto for criado. Para obter mais informações sobre o uso da API de envio de dependências, consulte "[Usando a API de envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".

Você pode enviar vários conjuntos de dependências para a API de submissão de dependências a ser incluídos no seu gráfico de dependências. A API usa a propriedade `job.correlator` e a categoria `detector.name` do instantâneo para garantir que as submissões mais recentes para cada fluxo de trabalho sejam exibidas. A propriedade `correlator` é o campo primário que você usará para manter os envios independentes distintos. Um exemplo de `correlator` pode ser uma combinação simples de duas variáveis disponíveis em ações executadas: `<GITHUB_WORKFLOW> <GITHUB_JOB>`.
