---
title: Sobre permissões para o GitHub Packages
intro: Saiba como gerenciar as permissões dos seus pacotes.
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Sobre permissões
---

{% ifversion fpt %}
As permissões para pacotes são do escopo do repositório ou do escopo de usuário/organização.
{% endif %}

## Permissões para pacotes com escopo do repositório

Um pacote com escopo de repositório herda as permissões e visibilidade do repositório que possui o pacote. Você pode encontrar um escopo de pacote para um repositório, acessando a página principal do repositório e clicando no link **Pacotes** à direita da página. {% ifversion fpt %}Para obter mais informações, consulte "[Conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)."{% endif %}

Os {% data variables.product.prodname_registry %} registros abaixo usam permissões com escopo do repositório:

  {% ifversion not fpt %}- Docker registry (`docker.pkg.github.com`){% endif %}
  - Registro de npm
  - Registro do Rubygems
  - Registro do Apache Maven
  - Registro do NuGet

{% ifversion fpt %}
## Permissões granulares para pacotes com escopo de usuário/organização

Pacotes com permissões granulares são escopos para uma conta de usuário pessoal ou de organização. Você pode alterar o controle de acesso e a visibilidade do pacote separadamente de um repositório que está conectado (ou vinculado) a um pacote.

Atualmente, apenas o {% data variables.product.prodname_container_registry %} oferece permissões granulares para os seus pacotes de imagem de contêiner.

## Visibilidade e permissões de acesso para imagens de contêiner

{% data reusables.package_registry.visibility-and-access-permissions %}

Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

## Sobre escopos e permissões para registros de pacotes

Para usar ou gerenciar um pacote hospedado por um registro de pacotes, você deve usar um token com o escopo apropriado, e sua conta de usuário deve ter as permissões necessárias.

Por exemplo:
-  Para fazer o download e instalar pacotes de um repositório, seu token deve ter o escopo `read:packages` e sua conta de usuário deve ter permissão de leitura.
- {% ifversion fpt or ghes > 3.0 %}Para excluir um pacote em {% data variables.product.product_name %}, o seu token deve ter pelo menos o escopo `delete:packages` e `read:packages`. O escopo de `repo` também é necessário para pacotes com escopo de repositórios.{% elsif ghes < 3.1 %}Para excluir uma versão especificada de um pacote privado em {% data variables.product.product_name %}, o seu token deve ter o escopo `delete:packages` e `repo`. Não é possível excluir os pacotes públicos.{% elsif ghae %}Para aescluir uma versão específica de um pacote em {% data variables.product.product_name %}, o seu token deve ter o escopo `delete:packages` e `repo` scope.{% endif %} Para obter mais informações, consulte "{% ifversion fpt or ghes > 3.0 %}[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Excluir um pacote](/packages/learn-github-packages/deleting-a-package){% endif %}."

| Escopo                                                                                                                                                                                                                                                                                                                                                  | Descrição                                                                             | Permissão necessária |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------- |
| `read:packages`                                                                                                                                                                                                                                                                                                                                         | Faça o download e instale pacotes do {% data variables.product.prodname_registry %}   | leitura              |
| `write:packages`                                                                                                                                                                                                                                                                                                                                        | Faça o upload e publique os pacotes em {% data variables.product.prodname_registry %} | gravação             |
| `delete:packages`                                                                                                                                                                                                                                                                                                                                       |                                                                                       |                      |
| {% ifversion fpt or ghes > 3.0 %} Excluir pacotes de {% data variables.product.prodname_registry %} {% elsif ghes < 3.1 %} Excluir versões especificadas de pacotes privados de {% data variables.product.prodname_registry %}{% elsif ghae %} Excluir versões especificadas de pacotes de {% data variables.product.prodname_registry %} {% endif %} |                                                                                       |                      |
| administrador                                                                                                                                                                                                                                                                                                                                           |                                                                                       |                      |
| `repo`                                                                                                                                                                                                                                                                                                                                                  | Faça o upload e exclua os pacotes (junto com `write:packages` ou `delete:packages`)   | gravação ou admin    |

Ao criar um fluxo de trabalho de {% data variables.product.prodname_actions %}, você pode usar o `GITHUB_TOKEN` para publicar e instalar pacotes no {% data variables.product.prodname_registry %} sem precisar armazenar e gerenciar um token de acesso pessoal.

Para mais informações, consulte:{% ifversion fpt %}
- "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[Publicando e instalando um pacote com {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Escopos disponíveis](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## Mantendo acesso a pacotes nos fluxos de trabalho de {% data variables.product.prodname_actions %}

Para garantir que seus workflows mantenham o acesso aos seus pacotes, certifique-se de que você esteja usando o token de acesso correto do seu fluxo de trabalho e que você habilitou o acesso do {% data variables.product.prodname_actions %} para o seu pacote.

Para obter um contexto mais conceitual sobre {% data variables.product.prodname_actions %} ou exemplos do uso de pacotes nos fluxos de trabalho, consulte "[Gerenciar o GitHub Packages usando fluxos de trabalho do GitHub Actions](/packages/managing-github-packages-using-github-actions-workflows)".

### Tokens de acesso

- Para publicar pacotes associados ao repositório do fluxo de trabalho, use `GITHUB_TOKEN`.
- Para instalar pacotes associados a outros repositórios privados que `GITHUB_TOKEN` não consegue acessar, use um token de acesso pessoal

Para obter mais informações sobre `GITHUB_TOKEN` usado nos fluxos de trabalho de {% data variables.product.prodname_actions %}, consulte[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

{% ifversion fpt %}
### Acesso a {% data variables.product.prodname_actions %} para imagens de contêiner

Para garantir que seus fluxos de trabalho tenham acesso à imagem do contêiner, você deve permitir o acesso do {% data variables.product.prodname_actions %} aos repositórios em que o seu fluxo de trabalho é executado. Você pode encontrar essa configuração na página de configurações do seu pacote. Para obter mais informações, consulte "[Garantir o acesso do fluxo de trabalho para o seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".

{% endif %}
