---
title: Solução de problemas do Dependabot
intro: 'Às vezes, {% data variables.product.prodname_dependabot %} não consegue criar um pull request para atualizar suas dependências. Você pode revisar o erro e desbloquear {% data variables.product.prodname_dependabot %}.'
shortTitle: Troubleshoot errors
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 21b7c2b2e6c613d4443b54404dfc120bd8ac00e2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108269'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre os erros do {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Se algo impedir o {% data variables.product.prodname_dependabot %} de criar um pull request, este será relatado como erro.

## Investigar erros com {% data variables.product.prodname_dependabot_security_updates %}

Quando {% data variables.product.prodname_dependabot %} está impedido de criar um pull request para corrigir um alerta de {% data variables.product.prodname_dependabot %}, ele publica a mensagem de erro no alerta. A exibição do {% data variables.product.prodname_dependabot_alerts %} mostra uma lista de todos os alertas que ainda não foram resolvidos. Para acessar a exibição de alertas, clique em **{% data variables.product.prodname_dependabot_alerts %}** na guia **Segurança** do repositório. Quando um pull request que corrigirá a dependência vulnerável foi gerado, o alerta inclui um link para esse pull request.

![Vista de {% data variables.product.prodname_dependabot_alerts %} que mostra um link do pull request](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

Há vários motivos pelos quais um alerta pode não ter um link de solicitação de pull:

1. {% data variables.product.prodname_dependabot_security_updates %} não estão habilitadas para o repositório.
{% ifversion GH-advisory-db-supports-malware %}
1. O alerta é sobre malware e não há nenhuma versão segura do pacote.
{% endif %}
1. O alerta é para uma dependência indireta ou transitória que não está explicitamente definida em um arquivo de bloqueio.
1. Um erro impediu {% data variables.product.prodname_dependabot %} de criar um pull request.

Se um erro impediu que {% data variables.product.prodname_dependabot %} criasse um pull request, você pode exibir os detalhes do erro clicando no alerta.

## Investigar erros com {% data variables.product.prodname_dependabot_version_updates %}

Quando {% data variables.product.prodname_dependabot %} está impedido de criar um pull request para atualizar uma dependência em um ecossistema, ele posta o ícone de erro no arquivo de manifesto. Os arquivos de manifesto gerenciados pelo {% data variables.product.prodname_dependabot %} estão listados na guia do {% data variables.product.prodname_dependabot %}. Para acessar essa guia, na guia **Insights** do repositório, clique em **Grafo de dependência** e clique na guia **{% data variables.product.prodname_dependabot %}** .

![vista de {% data variables.product.prodname_dependabot %} que mostra um erro](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

Para ver o arquivo de log de qualquer arquivo de manifesto, clique no link **HORA da última verificação**. Ao exibir o arquivo de registro para um manifesto mostrado com um símbolo de erro (por exemplo, Maven, na captura de tela acima), todos os erros também serão exibidos.

![Erro e registro de uma atualização de versão de {% data variables.product.prodname_dependabot %} ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

Para ver os logs de qualquer arquivo de manifesto, clique no link **HORA da última verificação** e clique em **Exibir logs**.

![Erro e registro de uma atualização de versão de {% data variables.product.prodname_dependabot %} ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## Entender os erros de {% data variables.product.prodname_dependabot %}

Pull requests para atualizações de segurança atuam para atualizar uma dependência vulnerável à versão mínima que inclui uma correção para a vulnerabilidade. Em contrapartida, os pull requests para atualizações de versão agem para atualizar uma dependência da versão mais recente permitida pelo manifesto do pacote e pelos arquivos de configuração de {% data variables.product.prodname_dependabot %}. Consequentemente, alguns erros são específicos para um tipo de atualização.

### {% data variables.product.prodname_dependabot %} não pode atualizar a DEPENDÊNCIA para uma versão não vulnerável

**Somente atualizações de segurança.** O {% data variables.product.prodname_dependabot %} não pode criar uma solicitação de pull para atualizar a dependência vulnerável para uma versão segura sem desfazer outras dependências no grafo de dependência desse repositório.

Cada aplicativo com dependências tem um gráfico de dependências, ou seja, um gráfico direcionado acíclico de cada versão de pacote da qual o aplicativo depende direta ou indiretamente. Toda vez que uma dependência é atualizada, este gráfico deve ser resolvido. Caso contrário, o aplicativo não será criado. Quando um ecossistema tem um gráfico de dependência profundo e complexo, por exemplo, npm e RubyGems, geralmente é impossível atualizar uma única dependência sem atualizar todo o ecossistema.

A melhor maneira de evitar esse problema é manter-se atualizado com as versões mais recentes, habilitando, por exemplo, as atualizações de versões. Isso aumenta a probabilidade de que uma vulnerabilidade em uma dependência possa ser resolvida por meio de uma atualização simples que não afete o gráfico de dependência. Para obter mais informações, confira "[Configurar atualizações de versão do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)."{% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %} tenta atualizar dependências sem um alerta

**Somente atualizações de segurança.** {% data variables.product.prodname_dependabot %} atualiza dependências transitivas definidas explicitamente que são vulneráveis para todos os ecossistemas. Para npm, {% data variables.product.prodname_dependabot %} gerará uma solicitação de pull que também atualizará a dependência pai se for a única maneira de corrigir a dependência transitiva.

Por exemplo, um projeto com uma dependência no `A` versão `~2.0.0` que tem uma dependência transitiva no `B` versão `~1.0.0` que foi resolvido para `1.0.1`.
```
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```       
Se uma vulnerabilidade de segurança for lançada para o `B` versões `<2.0.0` e um patch estiver disponível em `2.0.0`, então {% data variables.product.prodname_dependabot %} tentará atualizar `B`, mas descobrirá que não é possível, devido à restrição em vigor pelo `A`, que só permite versões vulneráveis mais baixas. Para corrigir a vulnerabilidade, {% data variables.product.prodname_dependabot %} procurará atualizações na dependência `A`, que permitem que seja usada a versão corrigida de `B`. 

{% data variables.product.prodname_dependabot %} gera automaticamente uma solicitação de pull que atualiza as dependências transitivas pai e filho bloqueados.{% endif %}

### {% data variables.product.prodname_dependabot %} não consegue atualizar para a versão necessária, pois já existe um pull request aberto para a última versão

**Somente atualizações de segurança.** O {% data variables.product.prodname_dependabot %} não criará uma solicitação de pull para atualizar a dependência vulnerável para uma versão segura porque já há uma solicitação de pull em aberto para atualizar essa dependência. Você verá este erro quando uma vulnerabilidade for detectada em uma única dependência e já houver um pull request aberto para atualizar a dependência para a última versão.

Existem duas opções: você pode revisar o pull request aberto e fazer o merge assim que estiver confiante de que a mudança é segura, ou fechar o pull request e acionar um novo pull request de atualização de segurança. Para obter mais informações, confira "[Como disparar uma solicitação de pull do {% data variables.product.prodname_dependabot %} manualmente](#triggering-a-dependabot-pull-request-manually)".

### O {% data variables.product.prodname_dependabot %} esgotou o tempo durante esta atualização

{% data variables.product.prodname_dependabot %} demorou mais do que o tempo máximo permitido para avaliar a atualização necessária e preparar um pull request. Em geral, esse erro é visto apenas em repositórios grandes com muitos arquivos de manifesto, por exemplo, projetos de repositório único do npm ou do YARN com centenas de arquivos *package.json*. As atualizações no ecossistema do Composer também levam mais tempo para ser avaliadas e podem expirar.

Este erro é difícil de ser corrigido. Se uma atualização de versão atingir o tempo limite, você poderá especificar as dependências mais importantes para atualização usando o parâmetro `allow` ou, como alternativa, usar o parâmetro `ignore` para excluir algumas dependências das atualizações. Atualizar sua configuração pode permitir que {% data variables.product.prodname_dependabot %} revise a atualização da versão e gere o pull request no tempo disponível.

Se uma atualização de segurança expirar, você pode reduzir as chances de isso acontecer mantendo as dependências atualizadas, por exemplo, habilitando atualizações de versão. Para obter mais informações, confira "[Como configurar as atualizações de versão do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

### {% data variables.product.prodname_dependabot %} não consegue abrir mais nenhum pull request

Há um limite no número de pull requests abertos que {% data variables.product.prodname_dependabot %} irá gerar. Quando este limite é atingido, nenhum pull request novo será aberto e este erro será relatado. A melhor maneira de resolver este erro é revisar e fazer merge alguns dos pull requests abertos.

Existem limites separados para solicitações de atualização de versões e segurança, para que os pull requests de atualização de versão aberta não possam bloquear a criação de uma solicitação de atualização de segurança. O limite para pull requests de atualização de segurança é 10. Por padrão, o limite para as atualizações de versão é 5, mas você pode alterá-lo usando o parâmetro `open-pull-requests-limit` no arquivo de configuração. Para obter mais informações, confira "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)".

A melhor maneira de resolver este erro é fazer o merge ou fechar alguns dos pull requests existentes e acionar um novo pull request manualmente. Para obter mais informações, confira "[Como disparar uma solicitação de pull do {% data variables.product.prodname_dependabot %} manualmente](#triggering-a-dependabot-pull-request-manually)".

### {% data variables.product.prodname_dependabot %} não pode resolver ou acessar suas dependências

Se {% data variables.product.prodname_dependabot %} tentar verificar se as referências de dependências precisam ser atualizadas em um repositório, mas não puder acessar um ou mais arquivos referenciados, a operação irá falhar com a mensagem de erro "{% data variables.product.prodname_dependabot %} can't resolve your LANGUAGE dependency files." O tipo de erro da API é `git_dependencies_not_reachable`.

Da mesma forma, se {% data variables.product.prodname_dependabot %} não pode acessar um registro de pacote privado em que uma dependência está localizada, gera-se um dos erros a seguir:

*   "O Dependabot não pode acessar uma dependência em um registro de pacote privado"<br>
   (Tipo de erro da API: `private_source_not_reachable`)
*   "O Dependabot não pode se autenticar em um registro de pacote privado"<br>
   (Tipo de erro da API: `private_source_authentication_failure`)
*   "O Dependabot atingiu o tempo limite enquanto aguardava um registro de pacote privado"<br>
   (Tipo de erro da API: `private_source_timed_out`)
*   "O Dependabot não pôde validar o certificado para um registro de pacote privado"<br>
   (Tipo de erro da API: `private_source_certificate_failure`)

Para permitir que {% data variables.product.prodname_dependabot %} atualize as referências de dependências com sucesso, certifique-se de que todas as dependências referenciadas estejam hospedadas em locais acessíveis. 

**Somente atualizações de versão.** {% data reusables.dependabot.private-dependencies-note %} Adicionalmente, {% data variables.product.prodname_dependabot %} não é compatível com dependências privadas {% data variables.product.prodname_dotcom %} para todos os gerenciadores de pacote. Para obter mais informações, confira "[Sobre as atualizações de versão do Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)".

## Acionar um pull request de {% data variables.product.prodname_dependabot %} manualmente

Se você desbloquear {% data variables.product.prodname_dependabot %}, você poderá iniciar manualmente uma nova tentativa de criar um pull request.

- **Atualizações de segurança** – Veja o alerta do {% data variables.product.prodname_dependabot %} que mostra o erro corrigido e clique em **Criar atualização de segurança do {% data variables.product.prodname_dependabot %}** .
- **Atualizações de versão** – Na guia **Insights** do repositório, clique em **Grafo de dependência** e clique na guia **Dependabot**. Clique em ***HORA* da última verificação** para ver o arquivo de log gerado pelo {% data variables.product.prodname_dependabot %} durante a última verificação em busca das atualizações de versão. Clique em **Procurar atualizações**.

## Leitura adicional

- "[Solução de problemas do grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"
- "[Solução de problemas de detecção de dependências vulneráveis](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"
