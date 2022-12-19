---
title: Autenticar com os aplicativos GitHub
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
ms.openlocfilehash: 093988bd48aafc9f7551d305726409349d5b620e
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '146769194'
---
## <a name="generating-a-private-key"></a>Gerar uma chave privada

Após criar um aplicativo GitHub, você deverá gerar uma ou mais chaves privadas. Você usará a chave privada para assinar solicitações de token de acesso.

Você pode criar várias chaves privadas e girá-las para evitar período de inatividade se uma chave for comprometida ou perdida. Para verificar se uma chave privada corresponde a uma chave pública, confira [Como verificar chaves privadas](#verifying-private-keys).

Para gerar uma chave privada:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Em "Chaves privadas", clique em **Gerar uma chave privada**.
![Gerar chave privada](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. Você verá uma chave privada no formato PEM baixado no seu computador. Certifique-se de armazenar este arquivo porque o GitHub armazena apenas a parte pública da chave.

{% note %}

**Observação:** se você estiver usando uma biblioteca que exija um formato de arquivo específico, o arquivo PEM que você baixar estará no formato `PKCS#1 RSAPrivateKey`.

{% endnote %}

## <a name="verifying-private-keys"></a>Verificar chaves privadas
O {% data variables.product.product_name %} gera uma impressão digital para cada par de chave privada e pública usando a função hash SHA-256. Você pode verificar se a sua chave privada corresponde à chave pública armazenada no {% data variables.product.product_name %}, gerando a impressão digital da sua chave privada e comparando-a com a impressão digital exibida no {% data variables.product.product_name %}.

Para verificar uma chave privada:

1. Encontre a impressão digital para o par de chaves privada e pública que deseja verificar na seção "Chaves privadas" da página de configurações de desenvolvedor do seu {% data variables.product.prodname_github_app %}. Para obter mais informações, confira [Como gerar uma chave privada](#generating-a-private-key).
![Impressão digital de chave privada](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Gere a impressão digital da chave privada (PEM) localmente usando o seguinte comando:
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. Compare os resultados da impressão digital gerada localmente com a impressão digital que você vê no {% data variables.product.product_name %}.

## <a name="deleting-private-keys"></a>Apagar chaves privadas
Você pode remover uma chave privada perdida ou comprometida excluindo-a. No entanto, você deve ter pelo menos uma chave privada. Quando você tem apenas uma chave, você deverá gerar uma nova antes de excluir a antiga.
![Exclusão da última chave privada](/assets/images/github-apps/github_apps_delete_key.png)

## <a name="authenticating-as-a--data-variablesproductprodname_github_app-"></a>Efetuar a autenticação um {% data variables.product.prodname_github_app %}

Efetuar a autenticação como um {% data variables.product.prodname_github_app %} permite que você faça algumas coisas:

* Você pode recuperar informações de gerenciamento de alto nível sobre seu {% data variables.product.prodname_github_app %}.
* Você pode solicitar tokens de acesso para uma instalação do aplicativo.

Para se autenticar como um {% data variables.product.prodname_github_app %}, [gere uma chave privada](#generating-a-private-key) no formato PEM e baixe-a no computador local. Você usará essa chave para assinar um [JWT (Token Web JSON)](https://jwt.io/introduction) e codificá-lo usando o algoritmo `RS256`. O {% data variables.product.product_name %} verifica se a solicitação foi autenticada, fazendo a verificação do token com a chave pública armazenada pelo aplicativo.

Aqui está um script Ruby rápido que você pode usar para gerar um JWT. Observe que você precisará executar `gem install jwt` antes de usá-lo.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` e `YOUR_APP_ID` são os valores que você precisará substituir. Certifique-se de incluir os valores entre aspas duplas.

Use o identificador do {% data variables.product.prodname_github_app %} (`YOUR_APP_ID`) como o valor da declaração [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (emissor) do JWT. Obtenha o identificador do {% data variables.product.prodname_github_app %} por meio do ping de webhook inicial após a [criação do aplicativo](/apps/building-github-apps/creating-a-github-app/) ou a qualquer momento na página de configurações do aplicativo na interface do usuário do GitHub.com.

Depois de criar o JWT, defina-o no `Header` da solicitação de API:

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` é o valor que você precisará substituir.

O exemplo acima usa o tempo máximo de validade de dez minutos, após o qual a API começará a retornar um erro `401`:

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

Você deverá criar um novo JWT após o tempo expirar.

## <a name="accessing-api-endpoints-as-a--data-variablesproductprodname_github_app-"></a>Acessar os pontos finais da API como um {% data variables.product.prodname_github_app %}

Para ver uma lista de pontos de extremidade da API REST que você pode usar para obter informações de alto nível sobre um {% data variables.product.prodname_github_app %}, confira "[Aplicativos do GitHub](/rest/reference/apps)".

## <a name="authenticating-as-an-installation"></a>Autenticar como uma instalação

Autenticar como uma instalação permite que você execute ações na API para essa instalação. Antes de autenticar como uma instalação, você deverá criar um token de acesso de instalação. Certifique-se de que você já instalou o aplicativo GitHub em pelo menos um repositório; é impossível criar um token de instalação sem uma única instalação. Estes tokens de acesso de instalação são usados por {% data variables.product.prodname_github_apps %} para efetuar a autenticação. Para obter mais informações, confira "[Como instalar Aplicativos do GitHub](/developers/apps/managing-github-apps/installing-github-apps)".

Por padrão, os tokens de acesso de instalação são limitados em todos os repositórios que uma instalação pode acessar. Você pode limitar o escopo do token de acesso de instalação a repositórios específicos usando o parâmetro `repository_ids`. Confira o ponto de extremidade [Criar um token de acesso de instalação para um aplicativo](/rest/reference/apps#create-an-installation-access-token-for-an-app) para obter mais detalhes. Os tokens de acesso de instalação têm as permissões configuradas pelo {% data variables.product.prodname_github_app %} e expiram após uma hora.

Para listar as instalações de um aplicativo autenticado, inclua o JWT [gerado acima](#jwt-payload) no cabeçalho Authorization na solicitação de API:

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

A resposta incluirá uma lista de instalações em que a `id` de cada instalação pode ser usada para criar um token de acesso de instalação. Para obter mais informações sobre o formato de resposta, confira "[Listar instalações para o aplicativo autenticado](/rest/reference/apps#list-installations-for-the-authenticated-app)".

Para criar um token de acesso de instalação, inclua o JWT [gerado acima](#jwt-payload) no cabeçalho Authorization na solicitação de API e substitua `:installation_id` pela `id` da instalação:

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

A resposta incluirá seu token de acesso de instalação, a data de validade, as permissões do token e os repositórios que o token pode acessar. Para obter mais informações sobre o formato de resposta, confira o ponto de extremidade [Criar um token de acesso de instalação para um aplicativo](/rest/reference/apps#create-an-installation-access-token-for-an-app).

Para efetuar a autenticação com um token de acesso de instalação, inclua-o no cabeçalho de autorização na solicitação de API:

```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN` é o valor que você precisará substituir.

## <a name="accessing-api-endpoints-as-an-installation"></a>Acessar pontos finais da API como uma instalação

Para ver uma lista de pontos de extremidade da API REST disponíveis para uso pelos {% data variables.product.prodname_github_apps %} usando um token de acesso de instalação, confira "[Pontos de extremidade disponíveis](/rest/overview/endpoints-available-for-github-apps)".

Para ver uma lista de pontos de extremidade relacionados às instalações, confira "[Instalações](/rest/reference/apps#installations)".

## <a name="http-based-git-access-by-an-installation"></a>Acesso Git baseado em HTTP por uma instalação

As instalações com [permissões](/apps/building-github-apps/setting-permissions-for-github-apps/) no `contents` de um repositório podem usar os tokens de acesso de instalação para autenticar o acesso do Git. Use o token de acesso da instalação como a senha HTTP:

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
