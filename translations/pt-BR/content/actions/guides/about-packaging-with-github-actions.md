---
title: Sobre o empacotamento com GitHub Actions
intro: 'Você pode configurar fluxos de trabalho em {% data variables.product.prodname_actions %} para produzir pacotes e fazer o upload em {% data variables.product.prodname_registry %} ou em outro fornecedor de hospedagem do pacote.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-packaging-with-github-actions
  - /actions/publishing-packages-with-github-actions/about-packaging-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as etapas do empacotamento

Uma etapa de empacotamento é uma parte comum de um fluxo de trabalho de integração contínua ou de continuous delivery. Após criar e testar o seu aplicativo, será produzido um artefato executável ou aplicável produzido na forma de um pacote. Por exemplo, um fluxo de trabalho de integração contínua para um projeto Java pode executar o `pacote mvn` para produzir um arquivo JAR. Ou um fluxo de trabalho CI para um aplicativo Node.js pode criar um contêiner Docker.

Dependendo do tipo de aplicativo que você estiver criando, este pacote pode ser baixado localmente para teste manual, disponibilizado para download dos usuários ou implementado em um ambiente de teste ou produção.

### Empacotamento em fluxos de trabalho de integração contínua

Criar um pacote ao fim de um fluxo de trabalho de integração contínua pode ajudar durante as análises de código ou durante o pull request. Após criar e testar o seu código, uma etapa de empacotamento pode produzir um artefato executável ou aplicável. Em seguida, o seu fluxo de trabalho pode pegar esse artefato e fazer o upload como parte do fluxo de trabalho.

Agora, ao revisar um pull request, você poderá ver a execução do fluxo de trabalho e fazer o download do artefato produzido.

![Menu suspenso do para fazer download do artefato](/assets/images/help/repository/artifact-drop-down.png)

Isso permitirá que você execute o código no pull request em sua máquina, o que pode ajudar a depurar ou testar o pull request.

### Fluxos de trabalho para publicação de pacotes

Além de fazer o upload dos artefatos de empacotamento para teste em um fluxo de trabalho de integração contínua, você poderá criar fluxos de trabalho que criam o seu projeto e publicam pacotes no pacote de registro.

* **Publicar pacotes para {% data variables.product.prodname_registry %}**
  {% data variables.product.prodname_registry %} pode atuar como um serviço de hospedagem de pacotes para vários tipos de pacotes. Você pode escolher compartilhar os seus pacotes com todos {% data variables.product.prodname_dotcom %} ou compartilhar pacotes privados com colaboradores ou uma organização. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/about-github-packages)."

  Você pode querer publicar pacotes em {% data variables.product.prodname_registry %} em cada push no branch padrão. Isso fará com que os desenvolvedores no seu projeto sempre consigam executar e testar facilmente a última criação feita a partir do mestre, instalando-a a partir de {% data variables.product.prodname_registry %}.

* **Publicar pacotes em um registro de pacote** Para muitos projetos, a publicação de um registro de pacote é realizada sempre que uma versão nova de um projeto é lançada. Por exemplo, um projeto que produz um arquivo JAR pode fazer o upload de novas versões no repositório central do Maven. Ou um projeto .NET pode produzir um pacote nuget e fazer o upload na Galeria NuGet.

  Você pode automatizar isso criando um fluxo de trabalho que publica pacotes em um registro de pacote em cada versão. Para obter mais informações, consulte "[Criando versões](/github/administering-a-repository/creating-releases)."

### Leia mais

- "[Publicando pacotes Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)"
