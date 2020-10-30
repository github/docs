---
title: Criando arquivos padrão de integridade da comunidade
intro: 'Você pode criar arquivos padrão de integridade da comunidade, como CONTRIBUTING e CODE_OF_CONDUCT. Os arquivos padrão serão usados para qualquer repositório público de propriedade da conta que não contenha seu próprio arquivo desse tipo.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre arquivos padrão de integridade da comunidade

Você pode adicionar arquivos padrão de integridade da comunidade à raiz de um repositório público chamado `.github` que é de propriedade de uma organização{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} ou de uma conta de usuário{% endif %}.

{% data variables.product.product_name %} usará e exibirá arquivos padrão para qualquer repositório público de propriedade da conta que não tenha seu próprio arquivo desse tipo em nenhum dos seguintes locais:
- a raiz do repositório
- a pasta `.github`
- a pasta `docs`

Por exemplo, qualquer pessoa que cria um problema ou uma pull request em um repositório público que não tem o próprio arquivo CONTRIBUTING verá um link para o arquivo CONTRIBUTING padrão. Se um repositório tiver quaisquer arquivos em sua própria pasta `.github/ISSUE_TEMPLATE` {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}, incluindo modelos de problemas ou um arquivo *config.yml* ,{% endif %} nenhum conteúdo da pasta padrão `.github/ISSUE_TEMPLATE` será usado.

Os arquivos padrão não são incluídos em clones, pacotes ou downloads de repositórios individuais, pois eles são armazenados somente no repositório `.github`.

### Tipos de arquivo compatíveis

Você pode criar padrões em sua organização{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} ou conta de usuário{% endif %} para os seguintes arquivo de integridade da comunidade:

| Arquivo de integridade da comunidade                                                                                        | Descrição                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                      | Um arquivo CODE_OF_CONDUCT define os padrões de como ingressar em uma comunidade. Para obter mais informações, consulte "[Adicionar um código de conduta ao projeto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %}
| *CONTRIBUTING.md*                                                                                                           | Um arquivo CONTRIBUTING comunica como as pessoas devem contribuir com o seu projeto. Para obter mais informações, consulte "[Configurar diretrizes para contribuidores de repositório](/articles/setting-guidelines-for-repository-contributors/)".{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                               | Um arquivo FUNDING exibe um botão de patrocinador no repositório para aumentar a visibilidade das opções de financiamento para seu projeto de código aberto. Para obter mais informações, consulte "[Exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}
| Modelos de problema e pull request{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e *config.yml*{% endif %} | Os modelos de problema e pull request personalizam e padronizam as informações que você deseja que contribuidores incluam quando eles abrem problemas e pull requests no seu repositório. Para obter mais informações, consulte "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates/)".{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                               | Um arquivo SECURITY fornece instruções sobre como relatar com responsabilidade uma vulnerabilidade de segurança em seu projeto. Para obter mais informações, consulte "[Adicionar uma política de segurança ao seu repositório](/articles/adding-a-security-policy-to-your-repository)".{% endif %}
| *SUPPORT.md*                                                                                                                | Um arquivo SUPPORT permite que as pessoas conheçam maneiras de obter ajudar com seu projeto. Para obter mais informações, consulte "[Adicionar recursos de suporte ao projeto](/articles/adding-support-resources-to-your-project/)".                                                                                                                             |

Você não pode criar um arquivo de licença padrão. Os arquivos de licença devem ser adicionados a repositórios individuais para que o arquivo seja incluído quando um projeto for clonado, empacotado ou baixado.

### Criar um repositório para arquivos padrão

{% data reusables.repositories.create_new %}
2. Use o menu suspenso **Proprietário** e selecione a organização{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} ou conta de usuário{% endif %} para as quais você deseja criar arquivo padrão. ![Menu suspenso Owner (Proprietário)](/assets/images/help/repository/create-repository-owner.png)
3. Digite **.github** como o nome para seu repositório e uma descrição opcional. ![Campo Create repository (Criar repositório)](/assets/images/help/repository/default-file-repository-name.png)
4. Escolha tornar o repositório público. ![Botões de opção para selecionar status privado ou público](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. No repositório, crie um dos arquivos compatíveis de integridade da comunidade. Modelos de problema{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e seu arquivo de configuração{% endif %} devem estar em uma pasta chamada `.github/ISSUE_TEMPLATE`. Todos os outros arquivos compatíveis devem estar na raiz do repositório. Para obter mais informações, consulte "[Criar arquivos](/articles/creating-new-files/)".
