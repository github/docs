---
title: Criando arquivos padrão de integridade da comunidade
intro: 'Você pode criar arquivos padrão de integridade da comunidade, como CONTRIBUTING e CODE_OF_CONDUCT. Default files will be used for any repository owned by the account that does not contain its own file of that type.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Community
---

### Sobre arquivos padrão de integridade da comunidade

Você pode adicionar arquivos padrão de saúde da comunidade à raiz de um repositório público denominado `.github` pertencente a uma organização{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %} ou conta de usuário{% endif %}.

{% data variables.product.product_name %} will use and display default files for any repository owned by the account that does not have its own file of that type in any of the following places:
- a raiz do repositório
- a pasta `.github`
- a pasta `docs`

For example, anyone who creates an issue or pull request in a repository that does not have its own CONTRIBUTING file will see a link to the default CONTRIBUTING file. Se um repositório tiver arquivos na usa própria pasta `.github/ISSUE_TEMPLATE`{% if currentVersion == "free-pro-team@latest" or currentversion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %}, incluindo modelos de problema ou um arquivo *config.yml*,{% endif %} nenhum conteúdo da pasta padrão `.github/ISSUE_TEMPLATE` será usado.

Os arquivos padrão não são incluídos em clones, pacotes ou downloads de repositórios individuais, pois eles são armazenados somente no repositório `.github`.

### Tipos de arquivo compatíveis

Você pode criar padrões na sua organização{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %} ou conta de usuário{% endif %} para os seguintes arquivos de saúde da comunidade:

| Arquivo de integridade da comunidade                                                                                                                                                                     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                                                                                                   | Um arquivo CODE_OF_CONDUCT define os padrões de como ingressar em uma comunidade. Para obter mais informações, consulte "[Adicionar um código de conduta ao projeto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %}
| *CONTRIBUTING.md*                                                                                                                                                                                        | Um arquivo CONTRIBUTING comunica como as pessoas devem contribuir com o seu projeto. Para obter mais informações, consulte "[Definir diretrizes para contribuidores de repositórios](/articles/setting-guidelines-for-repository-contributors/)".{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                                                                                                            | Um arquivo FUNDING exibe um botão de patrocinador no repositório para aumentar a visibilidade das opções de financiamento para seu projeto de código aberto. Para obter mais informações, consulte "[Exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}
| Modelos de problemas e pull request{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e *config.yml*{% endif %} | Os modelos de problema e pull request personalizam e padronizam as informações que você deseja que contribuidores incluam quando eles abrem problemas e pull requests no seu repositório. Para obter mais informações, consulte "[Sobre problemas e modelos de pull request](/articles/about-issue-and-pull-request-templates/).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| *SECURITY.md*                                                                                                                                                                                            | Um arquivo SECURITY fornece instruções sobre como relatar uma vulnerabilidade de segurança no seu projeto. Para obter mais informações, consulte "[Adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".{% endif %}
| *SUPPORT.md*                                                                                                                                                                                             | Um arquivo SUPPORT permite que as pessoas conheçam maneiras de obter ajudar com seu projeto. Para obter mais informações, consulte "[Adicionar recursos de suporte ao projeto](/articles/adding-support-resources-to-your-project/)".                                                                                                                                                                                              |

Você não pode criar um arquivo de licença padrão. Os arquivos de licença devem ser adicionados a repositórios individuais para que o arquivo seja incluído quando um projeto for clonado, empacotado ou baixado.

### Criar um repositório para arquivos padrão

{% data reusables.repositories.create_new %}
2. Use o menu suspenso **Proprietário** e selecione a organização{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %} ou conta de usuário{% endif %} para a qual você deseja criar arquivos padrão. ![Menu suspenso Owner (Proprietário)](/assets/images/help/repository/create-repository-owner.png)
3. Digite **.github** como o nome para seu repositório e uma descrição opcional. ![Campo Create repository (Criar repositório)](/assets/images/help/repository/default-file-repository-name.png)
4. Certifique-se de que o status do repositório está definido como **Público** (um repositório-padrão para arquivos não pode ser privado). ![Botões de opção para selecionar status privado ou público](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. No repositório, crie um dos arquivos compatíveis de integridade da comunidade. Modelos de problema{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %} e o seu arquivo de configuração{% endif %} deve estar em uma pasta denominada `.github/ISSUE_TEMPLATE`. Todos os outros arquivos compatíveis devem estar na raiz do repositório. Para obter mais informações, consulte "[Criar arquivos](/articles/creating-new-files/)".
