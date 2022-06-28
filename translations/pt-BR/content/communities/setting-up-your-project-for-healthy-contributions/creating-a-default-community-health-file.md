---
title: Criando arquivos padrão de integridade da comunidade
intro: 'Você pode criar arquivos padrão de integridade da comunidade, como CONTRIBUTING e CODE_OF_CONDUCT. Os arquivos padrão serão usados para qualquer repositório pertencente à conta que não contém seu próprio arquivo desse tipo.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Arquivo de integridade da comunidade
---

## Sobre arquivos padrão de integridade da comunidade

Você pode adicionar arquivos padrão de saúde da comunidade a um repositório público denominado `git.hub` na raiz do repositório ou nas pastas `docs` ou `.github`.

{% data variables.product.product_name %} usará e exibirá arquivos padrão para qualquer repositório pertencente à conta que não tem seu próprio arquivo desse tipo em nenhum dos seguintes lugares:
- a raiz do repositório
- a pasta `.github`
- a pasta `docs`

Por exemplo, qualquer pessoa que criar um problema ou pull request em um repositório que não tenha seu próprio arquivo CONTRIBUTING verá um link para o arquivo padrão CONTRIBUTING. Se um repositório tiver quaisquer arquivos em sua própria pasta `.github/ISSUE_TEMPLATE` {% ifversion fpt or ghes or ghec %}, incluindo modelos de problemas ou um arquivo *config.yml* ,{% endif %} nenhum conteúdo da pasta padrão `.github/ISSUE_TEMPLATE` será usado.

Os arquivos padrão não são incluídos em clones, pacotes ou downloads de repositórios individuais, pois eles são armazenados somente no repositório `.github`.

## Tipos de arquivo compatíveis

Você pode criar padrões na sua organização{% ifversion fpt or ghes or ghec %} ou conta pessoal{% endif %} para os seguintes arquivos de saúde da comunidade:

| Arquivo de integridade da comunidade                                                            | Descrição                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| *CODE_OF_CONDUCT.md*                                                                          | Um arquivo CODE_OF_CONDUCT define os padrões de como ingressar em uma comunidade. Para obter mais informações, consulte "[Adicionar um código de conduta ao projeto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %}
| *CONTRIBUTING.md*                                                                               | Um arquivo CONTRIBUTING comunica como as pessoas devem contribuir com o seu projeto. Para obter mais informações, consulte "[Configurar diretrizes para contribuidores de repositório](/articles/setting-guidelines-for-repository-contributors/)".{% ifversion fpt or ghec %}
| *FUNDING.yml*                                                                                   | Um arquivo FUNDING exibe um botão de patrocinador no repositório para aumentar a visibilidade das opções de financiamento para seu projeto de código aberto. Para obter mais informações, consulte "[Exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}
| Modelos de problema e pull request{% ifversion fpt or ghes or ghec %} e *config.yml*{% endif %} | Os modelos de problema e pull request personalizam e padronizam as informações que você deseja que contribuidores incluam quando eles abrem problemas e pull requests no seu repositório. Para obter mais informações, consulte "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates/)".{% ifversion fpt or ghes or ghec %}
| *SECURITY.md*                                                                                   | Um arquivo SECURITY fornece instruções sobre como relatar uma vulnerabilidade de segurança no seu projeto. Para obter mais informações, consulte "[Adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".{% endif %}
| *SUPPORT.md*                                                                                    | Um arquivo SUPPORT permite que as pessoas conheçam maneiras de obter ajudar com seu projeto. Para obter mais informações, consulte "[Adicionar recursos de suporte ao projeto](/articles/adding-support-resources-to-your-project/)".                                                                                                                               |

Você não pode criar um arquivo de licença padrão. Os arquivos de licença devem ser adicionados a repositórios individuais para que o arquivo seja incluído quando um projeto for clonado, empacotado ou baixado.

## Criar um repositório para arquivos padrão

{% data reusables.repositories.create_new %}
2. Use o menu suspenso **Proprietário** e selecione a organização{% ifversion fpt or ghes or ghec %} ou conta pessoal{% endif %} para a qual você deseja criar arquivos padrão. ![Menu suspenso Owner (Proprietário)](/assets/images/help/repository/create-repository-owner.png)
3. Digite **.github** como o nome para seu repositório e uma descrição opcional. ![Campo Create repository (Criar repositório)](/assets/images/help/repository/default-file-repository-name.png)
4. Certifique-se de que o status do repositório está definido como **Público** (um repositório-padrão para arquivos não pode ser privado). ![Botões de opção para selecionar status privado ou público](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. No repositório, crie um dos arquivos compatíveis de integridade da comunidade. Modelos de problema{% ifversion fpt or ghes or ghec %} e seu arquivo de configuração{% endif %} devem estar em uma pasta chamada `.github/ISSUE_TEMPLATE`. Todos os outros arquivos compatíveis podem estar na raiz do repositório, na pasta `.github` ou na pasta `docs`. Para obter mais informações, consulte "[Criar arquivos](/articles/creating-new-files/)".
