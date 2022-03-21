A execução do trabalho ou fluxo de trabalho exige uma configuração de `permissões` com [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). Você não poderá o token de ID OIDC JWT se a configuração das `permissões` para `id-token` estiverem definidas como `leitura` ou `nenhum`.

A configuração `id-token: write` permite que o JWT seja solicitado do provedor OIDC de {% data variables.product.prodname_dotcom %} usando uma dessas abordagens:

- Usando variáveis de ambiente no executor (`ACTIONS_ID_TOKEN_REQUEST_URL` e `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Usando `getIDToken()` do conjunto de ferramentas de ações.

Se você só precisa obter um token OIDC para um único trabalho, essa permissão poderá ser definida dentro desse trabalho. Por exemplo:

```yaml{:copy}
permissions:
  id-token: write
```

Você pode precisar especificar permissões adicionais aqui, dependendo das necessidades do seu fluxo de trabalho. 
