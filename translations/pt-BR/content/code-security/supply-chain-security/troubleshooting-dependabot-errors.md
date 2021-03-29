---
title: Solução de problemas do Dependabot
intro: 'Às vezes, {% data variables.product.prodname_dependabot %} não consegue criar um pull request para atualizar suas dependências. Você pode revisar o erro e desbloquear {% data variables.product.prodname_dependabot %}.'
shortTitle: Solução de erros
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
versions:
  free-pro-team: '*'
topics:
  - segurança
---

{% data reusables.dependabot.beta-note %}

### Sobre os erros do {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Se algo impedir o {% data variables.product.prodname_dependabot %} de criar um pull request, este será relatado como erro.

### Investigar erros com {% data variables.product.prodname_dependabot_security_updates %}

Quando {% data variables.product.prodname_dependabot %} está impedido de criar um pull request para corrigir um alerta de {% data variables.product.prodname_dependabot %}, ele publica a mensagem de erro no alerta. A exibição do {% data variables.product.prodname_dependabot_alerts %} mostra uma lista de todos os alertas que ainda não foram resolvidos. Para acessar a vista de alertas, clique em **{% data variables.product.prodname_dependabot_alerts %}** na aba **Segurança** para o repositório. Quando um pull request que corrigirá a dependência vulnerável foi gerado, o alerta inclui um link para esse pull request.

![Vista de {% data variables.product.prodname_dependabot_alerts %} que mostra um link do pull request](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

Há três razões pelas quais um alerta pode não ter link de um pull request:

1. {% data variables.product.prodname_dependabot_security_updates %} não estão habilitadas para o repositório.
1. O alerta é para uma dependência indireta ou transitória que não está explicitamente definida em um arquivo de bloqueio.
1. Um erro impediu {% data variables.product.prodname_dependabot %} de criar um pull request.

Se um erro impediu que {% data variables.product.prodname_dependabot %} criasse um pull request, você pode exibir os detalhes do erro clicando no alerta.

![O alerta do {% data variables.product.prodname_dependabot %} que mostra que o erro que bloqueou a criação de um pull request](/assets/images/help/dependabot/dependabot-security-update-error.png)

### Investigar erros com {% data variables.product.prodname_dependabot_version_updates %}

Quando {% data variables.product.prodname_dependabot %} está impedido de criar um pull request para atualizar uma dependência em um ecossistema, ele posta o ícone de erro no arquivo de manifesto. Os arquivos de manifesto gerenciados por {% data variables.product.prodname_dependabot %} estão listados na aba {% data variables.product.prodname_dependabot %}. Para acessar essa aba, na aba **Insights** para o repositório, clique no **Gráfico de Dependências**, e, em seguida, clique na aba **{% data variables.product.prodname_dependabot %}**.

![vista de {% data variables.product.prodname_dependabot %} que mostra um erro](/assets/images/help/dependabot/dependabot-tab-view-error-beta.png)

Para visualizar o arquivo de registro para qualquer arquivo de manifesto, clique no link **HORA da última verificação**. Ao exibir o arquivo de registro para um manifesto mostrado com um símbolo de erro (por exemplo, Maven, na captura de tela acima), todos os erros também serão exibidos.

![Erro e registro de uma atualização de versão de {% data variables.product.prodname_dependabot %} ](/assets/images/help/dependabot/dependabot-version-update-error-beta.png)

### Entender os erros de {% data variables.product.prodname_dependabot %}

Pull requests para atualizações de segurança atuam para atualizar uma dependência vulnerável à versão mínima que inclui uma correção para a vulnerabilidade. Em contrapartida, os pull requests para atualizações de versão agem para atualizar uma dependência da versão mais recente permitida pelo manifesto do pacote e pelos arquivos de configuração de {% data variables.product.prodname_dependabot %}. Consequentemente, alguns erros são específicos para um tipo de atualização.

#### {% data variables.product.prodname_dependabot %} não pode atualizar a DEPENDÊNCIA para uma versão não vulnerável

**Apenas atualizações de segurança.** {% data variables.product.prodname_dependabot %} não consegue criar um pull request para atualizar a dependência vulnerável para uma versão segura sem afetar outras dependências no gráfico de dependências para este repositório.

Cada aplicativo com dependências tem um gráfico de dependências, ou seja, um gráfico direcionado acíclico de cada versão de pacote da qual o aplicativo depende direta ou indiretamente. Toda vez que uma dependência é atualizada, este gráfico deve ser resolvido. Caso contrário, o aplicativo não será criado. Quando um ecossistema tem um gráfico de dependência profundo e complexo, por exemplo, npm e RubyGems, geralmente é impossível atualizar uma única dependência sem atualizar todo o ecossistema.

A melhor maneira de evitar esse problema é manter-se atualizado com as versões mais recentes, habilitando, por exemplo, as atualizações de versões. Isso aumenta a probabilidade de que uma vulnerabilidade em uma dependência possa ser resolvida por meio de uma atualização simples que não afete o gráfico de dependência. Para obter detalhes, consulte "[Habilitando e desabilitando atualizações da versão](/github/administering-a-repository/enabling-and-disabling-version-updates)."

#### {% data variables.product.prodname_dependabot %} não consegue atualizar para a versão necessária, pois já existe um pull request aberto para a última versão

**Apenas atualizações de segurança.** {% data variables.product.prodname_dependabot %} não criará um pull request para atualizar a dependência vulnerável para uma versão segura, pois já existe um pull request aberto para atualizar esta dependência. Você verá este erro quando uma vulnerabilidade for detectada em uma única dependência e já houver um pull request aberto para atualizar a dependência para a última versão.

Existem duas opções: você pode revisar o pull request aberto e fazer o merge assim que estiver confiante de que a mudança é segura, ou fechar o pull request e acionar um novo pull request de atualização de segurança. Para obter mais informações, consulte "[Acionar um pull request de {% data variables.product.prodname_dependabot %} manualmente](#triggering-a-dependabot-pull-request-manually)".

#### O {% data variables.product.prodname_dependabot %} esgotou o tempo durante esta atualização

{% data variables.product.prodname_dependabot %} demorou mais do que o tempo máximo permitido para avaliar a atualização necessária e preparar um pull request. Este erro é geralmente visto apenas para repositórios grandes com muitos arquivos de manifesto, por exemplo, projetos do npm ou yarn monorepo com centenas de arquivos *package.json*. As atualizações no ecossistema do Composer também levam mais tempo para ser avaliadas e podem expirar.

Este erro é difícil de ser corrigido. Se a atualização de uma versão expirar, você poderá especificar as dependências mais importantes para atualizar usando o parâmetro `permitir` ou, como alternativa, você pode usar o parâmetro `ignorar` para excluir algumas dependências de atualizações. Atualizar sua configuração pode permitir que {% data variables.product.prodname_dependabot %} revise a atualização da versão e gere o pull request no tempo disponível.

Se uma atualização de segurança expirar, você pode reduzir as chances de isso acontecer mantendo as dependências atualizadas, por exemplo, habilitando atualizações de versão. Para obter detalhes, consulte "[Habilitando e desabilitando atualizações da versão](/github/administering-a-repository/enabling-and-disabling-version-updates)."

#### {% data variables.product.prodname_dependabot %} não consegue abrir mais nenhum pull request

Há um limite no número de pull requests abertos que {% data variables.product.prodname_dependabot %} irá gerar. Quando este limite é atingido, nenhum pull request novo será aberto e este erro será relatado. A melhor maneira de resolver este erro é revisar e fazer merge alguns dos pull requests abertos.

Existem limites separados para solicitações de atualização de versões e segurança, para que os pull requests de atualização de versão aberta não possam bloquear a criação de uma solicitação de atualização de segurança. O limite para pull requests de atualização de segurança é 10. Por padrão, o limite para atualizações de versão é 5, mas você pode alterá-lo usando o parâmetro `open-pull-requests-limit` no arquivo de configuração. Para obter mais informações, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)".

A melhor maneira de resolver este erro é fazer o merge ou fechar alguns dos pull requests existentes e acionar um novo pull request manualmente. Para obter mais informações, consulte "[Acionar um pull request de {% data variables.product.prodname_dependabot %} manualmente](#triggering-a-dependabot-pull-request-manually)".

#### {% data variables.product.prodname_dependabot %} não pode resolver ou acessar suas dependências

Se {% data variables.product.prodname_dependabot %} tentar verificar se as referências de dependências precisam ser atualizadas em um repositório, mas não puder acessar um ou mais arquivos referenciados, a operação irá falhar com a mensagem de erro "{% data variables.product.prodname_dependabot %} can't resolve your LANGUAGE dependency files." O tipo de erro da API é `git_dependencies_not_reachable`.

Da mesma forma, se {% data variables.product.prodname_dependabot %} não pode acessar um registro de pacote privado em que uma dependência está localizada, gera-se um dos erros a seguir:

*   "O Dependabot não pode alcançar uma dependência em um registro de pacote privado"<br> (API error type: `private_source_not_reachable`)
*   "O Dependabot não pode autenticar em um registro de pacote privado"<br> (API error type:`private_source_authentication_failure`)
*   "Esgotou o tempo do Dependabot enquanto aguardava um registro de pacote privado"<br> (API error type:`private_source_timed_out`)
*   "O Dependabot não conseguiu valor o certificado para um registro de pacote privado"<br> (API error type:`private_source_certificate_failure`)

Para permitir que {% data variables.product.prodname_dependabot %} atualize as referências de dependências com sucesso, certifique-se de que todas as dependências referenciadas estejam hospedadas em locais acessíveis.

**Somente atualizações de versão.** {% data reusables.dependabot.private-dependencies-note %} Além disso, {% data variables.product.prodname_dependabot %} não é compatível com dependências privadas de {% data variables.product.prodname_dotcom %} para todos os gerenciadores de pacotes. Para obter mais informações, consulte "[Sobre atualizações da versão do Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)".

### Acionar um pull request de {% data variables.product.prodname_dependabot %} manualmente

Se você desbloquear {% data variables.product.prodname_dependabot %}, você poderá iniciar manualmente uma nova tentativa de criar um pull request.

- **Atualizações de segurança**—exibe o alerta de {% data variables.product.prodname_dependabot %}, que mostra o erro que você corrigiu e clique em **Criar atualização de segurança de {% data variables.product.prodname_dependabot %}**.
- **Atualização de versão**—na aba **Insights** do repositório, clique no **Gráfico de dependência** e, em seguida, clique na aba **Dependabot**. Clique em **Última verificação*há* hora** para ver o arquivo de registro que {% data variables.product.prodname_dependabot %} gerou durante a última verificação de atualizações de versão. Clique em **Verificar atualizações**.
