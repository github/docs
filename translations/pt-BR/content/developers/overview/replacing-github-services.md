---
title: Substituir os GitHub Services
intro: 'Se você ainda depende dos serviços obsoletos do {% data variables.product.prodname_dotcom %}, aprenda como migrar seus hooks de serviço para webhooks.'
redirect_from:
  - /guides/replacing-github-services/
  - /v3/guides/automating-deployments-to-integrators/
  - /v3/guides/replacing-github-services
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - API
---


Nós tornamos o GitHub Services obsoletos em favor da integração com webhooks. Este guia ajuda você a fazer a transição para webhooks dos serviços do GitHub. Para obter mais informações sobre este anúncio, consulte o [post do blog](https://developer.github.com/changes/2018-10-01-denying-new-github-services).

{% note %}

Como uma alternativa ao serviço de e-mail, agora você pode começar a usar notificações por e-mail para push no repositório. Consulte "[Sobre notificações por e-mail para pushes no seu repositório](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)para aprender como configurar as notificações por e-mail do commit.

{% endnote %}

### Linha do tempo da depreciação

- **1 de outubro de 2018**: o GitHub foi suspenso, permitindo que os usuários instalassem serviços. Removemos o GitHub Services da interface de usuário do GitHub.com.
- **29 de janeiro de 2019**: Como alternativa ao serviço de e-mail, você pode começar a usar notificações por e-mail para push em seu repositório. Consulte "[Sobre notificações por e-mail para pushes no seu repositório](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)para aprender como configurar as notificações por e-mail do commit.
- **31 de janeiro de 2019**: o GitHub irá parar de implementar os eventos dos serviços instalados no GitHub.com.

### Antecedentes do GitHub Services

P GitHub Services (às vezes referido como Hooks de Serviço) é o método legado de integração, em que o GitHub hospedou uma parte dos serviços do nosso integrador por meio do [repositório `github-services`](https://github.com/github/github-services). Ações executadas no GitHub acionam esses serviços e você pode usá-los para acionar ações fora do GitHub.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
### Encontrar repositórios que usam o GitHub Services
Fornecemos um script de linha de comando que ajuda a identificar quais repositórios usam o GitHub Services. Para obter mais informações, consulte [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report).{% endif %}

### GitHub Services vs. webhooks

As principais diferenças entre o GitHub Services e webhooks:
- **Configuração**: O GitHub Services tem opções de configuração específicas do serviço, enquanto os webhooks são configurados simplesmente especificando uma URL e um conjunto de eventos.
- **Lógica personalizada**: O GitHub Services pode ter uma lógica personalizada para responder com várias ações como parte do processamento de um único evento, enquanto os webhooks não têm nenhuma lógica personalizada.
- **Tipos de solicitações**: O GitHub Services pode fazer solicitações HTTP e que não são HTTP, enquanto os webhooks podem fazer apenas solicitações HTTP.

### Substituir os serviços por webhooks

Para substituir GitHub Services por Webhooks:

1. Identifique os eventos de webhook relevantes que você precisará assinar [nesta lista](/webhooks/#events).

2. Altere sua configuração dependendo de como você usa atualmente os GitHub Services:

   - **Aplicativos GitHub**: Atualize as permissões e eventos assinados do aplicativo para configurar seu aplicativo para receber os eventos de webhook relevantes.
   - **Aplicativos OAuth**: Solicite o(s) escopo(s) `repo_hook` e/ou `org_hook` para gerenciar os eventos relevantes em nome dos usuários.
   - **Provedores do GitHub Services**: Solicite que os usuários configurem manualmente um webhook com os eventos relevantes enviados a você, ou aproveite esta oportunidade para criar um aplicativo para gerenciar essa funcionalidade. Para obter mais informações, consulte "[Sobre os aplicativos](/apps/about-apps/)".

3. Mover configuração adicional de fora do GitHub. Alguns GitHub Services exigem uma configuração adicional e personalizada na página de configuração do GitHub. Se o seu serviço fizer isso, você deverá mover esta funcionalidade para seu aplicativo ou depender dos aplicativos GitHub ou OAuth, quando necessário.

### Compatibilidade com {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17**: O {% data variables.product.prodname_ghe_server %} com versão 2.17 ou superior irá parar de permitir que os administradores instalem serviços. Os administradores continuarão podendo modificar hooks de serviço existentes e receber hooks de serviço no {% data variables.product.prodname_ghe_server %} para as versões 2.17 a 2.19. Como alternativa ao serviço de e-mail, você poderá usar notificações de e-mail para push para seu repositório no {% data variables.product.prodname_ghe_server %} com versão 2.17 ou superior. Consulte [este poste de blog](https://developer.github.com/changes/2019-01-29-life-after-github-services) para saber mais.
- **{% data variables.product.prodname_ghe_server %} 2.20**: O {% data variables.product.prodname_ghe_server %} com versão 2.20 e superior deixará de implementar os eventos de todos os serviços instalados.

A versão 2.17 do {% data variables.product.prodname_ghe_server %} será a primeira versão que não permite que os administradores instalem o GitHub Services. Só suportaremos o GitHub Services existente até o lançamento da versão do {% data variables.product.prodname_ghe_server %}. Também aceitaremos quaisquer patches críticos o seu GitHub Services em execução em {% data variables.product.prodname_ghe_server %} até 1 de outubro de 2019.

### Migrar com a nossa ajuda

[Entre em contato conosco](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation) em caso de dúvida.

Como uma visão geral de alto nível, o processo de migração normalmente envolve:
  - Identificar como e onde seu produto está usando o GitHub Services.
  - Identificar os eventos de webhook correspondentes que você precisa configurar para mover para webhooks simples.
  - Implementar o design usando [{% data variables.product.prodname_oauth_app %}s](/apps/building-oauth-apps/) ou [{% data variables.product.prodname_github_app %}s. {% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) são preferidos. Para saber mais sobre porque os {% data variables.product.prodname_github_app %}s são preferidos, consulte "[motivos para mudar para {% data variables.product.prodname_github_app %}s](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)".
