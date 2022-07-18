---
title: Práticas recomendadas para proteger o código na sua cadeia de suprimentos
shortTitle: Protegendo o código
allowTitleToDifferFromFilename: true
intro: Orientação sobre como proteger o centro de sua cadeia de suprimentos — o código que você escreve e o código de que você depende.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
---

## Sobre este guia

Este guia descreve mudanças de maior impacto que você pode fazer para melhorar a segurança do seu código. Cada seção descreve uma alteração que você pode fazer em seus processos para melhorar a segurança. As mudanças de maior impacto estão listadas primeiro.

## Qual o risco?

Os principais riscos no processo de desenvolvimento incluem:

- Usar dependências com vulnerabilidades de segurança que um invasor pode explorar.
- Vazar as credenciais de autenticação ou um token que um invsor poderia usar para acessar seus recursos.
- Introduzir uma vulnerabilidade ao seu próprio código que um invasor poderia explorar.

Esses riscos abrem seus recursos e projetos para serem atacados, aléme de serem enviados diretamente para qualquer um que utilize um pacote que você criar. As seções a seguir explicam como você pode proteger você mesmo e seus usuários desses riscos.

## Crie um programa de gerenciamento de vulnerabilidades para dependências

Você pode proteger o código do qual você depende criando um programa de gerenciamento de vulnerabilidades para dependências. Em alto nível, isto deve incluir processos para garantir que você:

1. Crie um inventário de suas dependências.

2. Saiba quando há uma vulnerabilidade de segurança em uma dependência.

3. Avalie o impacto dessa vulnerabilidade no seu código e decida qual ação tomar.

### Geração de inventário automática

Como primeiro passo, você deverá fazer um inventário completo das suas dependências. O gráfico de dependências para um repositório mostra dependências para ecossistemas compatíveis. Se você verificar suas dependências, ou usar outros ecossistemas, você deverá completar isto com dados de ferramentas de terceiros ou listando dependências manualmente. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Detecção automática de vulnerabilidades em dependências

{% data variables.product.prodname_dependabot %} pode ajudar você a monitorar as suas dependências e notificar você quando contiverem uma vulnerabilidade conhecida. {% ifversion fpt or ghec or ghes > 3.2 %}Você pode até mesmo habilitar {% data variables.product.prodname_dependabot %} para aumentar automaticamente os pull requests que atualizam a dependência para uma versão segura.{% endif %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"{% ifversion fpt or ghec or ghes > 3.2 %} e "[Sobre as atualizações de segurança do Dependabot](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)"{% endif %}.

### Avaliação da exposição ao risco de uma dependência vulnerável

Ao descobrir que você está usando uma dependência vulnerável, por exemplo, uma biblioteca ou uma estrutura, você deve avaliar o nível de exposição do seu projeto e determinar que ação deve tomar. Normalmente, as vulnerabilidades são relatadas com uma pontuação de gravidade para mostrar a gravidade do seu impacto. A pontuação de gravidade é um guia útil, mas não pode dizer o impacto total da vulnerabilidade no seu código.

Para avaliar o impacto de uma vulnerabilidade no seu código, você também precisa considerar como usar a biblioteca e determinar o nível de risco que isso realmente representa para o seu sistema. Talvez a vulnerabilidade seja parte de um recurso que você não usa, e você pode atualizar a biblioteca afetada e continuar com o seu ciclo normal da versão. Ou talvez seu código esteja mal exposto a riscos e você precisa atualizar a biblioteca afetada e enviar uma construção atualizada imediatamente. Essa decisão depende de como você está usando a biblioteca em seu sistema, e é uma decisão que só você tem o conhecimento para tomar.

## Proteja seus tokens de comunicação

O código geralmente precisa se comunicar com outros sistemas por meio de uma rede e exige segredos (como uma senha, ou uma chave de API) para efetuar a autenticação. Seu sistema precisa de acesso a esses segredos para ser executado, mas a prática recomendada é não incluí-los no seu código-fonte. Isto é especialmente importante para repositórios públicos, mas também para repositórios privados aos quais muitas pessoas podem ter acesso.

### Detecção automática de segredos confirmados em um repositório

{% note %}

**Observação:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
Os parceiros de {% data variables.product.prodname_dotcom %} com muitos provedores para detectar automaticamente quando segredos são gravados ou armazenados em seus repositórios públicos e irão notificar o provedor para que eles possam tomar as ações necessárias para garantir que a sua conta permaneça segura. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_secret_scanning %} para padrões de parceiro](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)."
{% endif %}

{% ifversion fpt %}
{% data reusables.secret-scanning.fpt-GHAS-scans %}
{% elsif ghec %}
Se a sua organização usar {% data variables.product.prodname_GH_advanced_security %}, você poderá habilitar {% data variables.product.prodname_secret_scanning_GHAS %} em qualquer repositório pertencente à organização. Você também pode definir padrões personalizados para detectar segredos adicionais no repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)
{% else %}
Você pode configurar {% data variables.product.prodname_secret_scanning %} para verificar se há segredos emitidos por muitos provedores de serviço e para notificar você quando algum for detectado. Você também pode definir padrões personalizados para detectar segredos adicionais no repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre a digitalização de segredos](/code-security/secret-scanning/about-secret-scanning)" e "[Padrões de digitalização de segredos](/code-security/secret-scanning/secret-scanning-patterns)".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae %}
### Armazenamento seguro de segredos que você usa em {% data variables.product.product_name %}
{% endif %}

{% ifversion fpt or ghec %}
Além do seu código, você provavelmente precisa usar segredos em outros lugares. Por exemplo, para permitir fluxos de trabalho de {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} ou seu ambiente de desenvolvimento {% data variables.product.prodname_codespaces %} para se comunicar com outros sistemas. Para obter mais informações sobre como armazenar e usar segredos de forma segura, consulte "[Segredos criptografados em Ações](/actions/security-guides/encrypted-secrets), "[Gerenciando segredos criptografados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)," e "[Gerenciando segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."
{% endif %}

{% ifversion ghes > 3.2 or ghae %}
Além do seu código, você provavelmente precisa usar segredos em outros lugares. Por exemplo, para permitir que {% data variables.product.prodname_actions %} os fluxos de trabalho {% ifversion ghes %} ou {% data variables.product.prodname_dependabot %}{% endif %} se comuniquem com outros sistemas. Para obter mais informações sobre como armazenar e usar segredos de forma segura, consulte "[segredos criptografados em Ações](/actions/security-guides/encrypted-secrets){% ifversion ghes %}" e "[Gerenciando segredos criptografados para o Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot).{% else %}."{% endif %}
{% endif %}

## Mantenha padrões de codificação vulneráveis fora do seu repositório

{% note %}

**Observação:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Criar um processo de revisão de pull request

Você pode melhorar a qualidade e a segurança do seu código garantindo que todos os pull requests sejam revisados e testados antes do merge. {% data variables.product.prodname_dotcom %} tem muitas funcionalidades que você pode usar para controlar a revisão e o processo de merge. Para começar, consulte "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

### Digitalize o seu código para padrões vulneráveis

Os padrões de código inseguro são muitas vezes difíceis para os revisores identificarem sem ajuda. Além de digitalizar seu código para encontrar segredos, você pode verificar se há padrões associados a vulnerabilidades de segurança. Por exemplo, uma função que não é segura na memória, ou falhar ao escapar de entrada do usuário que poderia levar a uma vulnerabilidade de injeção. {% data variables.product.prodname_dotcom %} oferece várias maneiras diferentes de abordar como e quando você digitaliza o seu código. Para começar, consulte "[Sobre a digitalização de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

## Próximas etapas

- "[Protegendo sua cadeia de suprimentos de ponta a ponta](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[as Práticas recomendadas para proteger as contas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Práticas recomendadas para proteger seu sistema de construção](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
