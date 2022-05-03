---
title: Configurando o OpenID Connect no Amazon Web Services
shortTitle: Configurando o OpenID Connect no Amazon Web Services
intro: Use o OpenID Connect dentro de seus fluxos de trabalho para efetuar a autenticação com Amazon Web Services.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

O OpenID Connect (OIDC) permite que seus fluxos de trabalho de {% data variables.product.prodname_actions %} acessem os recursos na Amazon Web Services (AWS), sem precisar armazenar as credenciais AWS como segredos de {% data variables.product.prodname_dotcom %} de longa duração.

Este guia explica como configurar o AWS para confiar no OIDC de {% data variables.product.prodname_dotcom %} como uma identidade federada e inclui um exemplo de fluxo de trabalho para o [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) que usa tokens para efetuar a autenticação no AWS e acessar os recursos.

## Pré-requisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adicionando o provedor de identidade ao AWS

Para adicionar o provedor OIDC de {% data variables.product.prodname_dotcom %} ao IAM, consulte a [documentação AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

- Para a URL do provedor: Use `https://token.actions.githubusercontent.com`
- Para o "público": Use `sts.amazonaws.com` se você estiver usando a [ação oficial](https://github.com/aws-actions/configure-aws-credentials).

### Configurando a função e a política de confiança

Para configurar a função e confiar no IAM, consulte a documentação do AWS para ["Assumindo uma função"](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role) e ["Criando uma função para a identidade web ou federação de conexão do OpenID"](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html).

Edite o relacionamento de confiança para adicionar o campo `sub` às condições de validação. Por exemplo:

```json{:copy}
"Condition": {
  "StringEquals": {
    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
    "token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

## Atualizar o seu fluxo de trabalho de {% data variables.product.prodname_actions %}

Para atualizar seus fluxos de trabalho para o OIDC, você deverá fazer duas alterações no seu YAML:
1. Adicionar configurações de permissões para o token.
2. Use a ação [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) para trocar o token do OIDC (JWT) por um token de acesso na nuvem.

### Adicionando configurações de permissões

 {% data reusables.actions.oidc-permissions-token %}

### Solicitando o token de acesso

A ação `aws-actions/configure-aws-credentials` recebe um JWT do provedor do OIDC {% data variables.product.prodname_dotcom %} e, em seguida, solicita um token de acesso do AWS. Para obter mais informações, consulte a documentação do AWS [](https://github.com/aws-actions/configure-aws-credentials).

- `<example-bucket-name>`: Adicione o nome do seu bucket S3 aqui.
- `<role-to-assume>`: Substitua o exemplo pela sua função do AWS.
- `<example-aws-region>`: Adicione o nome do seu AWS aqui.

```yaml{:copy}
# Sample workflow to access AWS resources when workflow is tied to branch
# The workflow Creates static website using aws s3
name: AWS example workflow
on:
  push
env:
  BUCKET_NAME : "<example-bucket-name>"
  AWS_REGION : "<example-aws-region>"
# permission can be added at job level or workflow level    
permissions:
      id-token: write
      contents: read    # This is required for actions/checkout
jobs:
  S3PackageUpload:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: {% data reusables.actions.action-checkout %}
      - name: configure aws credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          role-to-assume: arn:aws:iam::1234567890:role/example-role
          role-session-name: samplerolesession
          aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}
      # Upload a file to AWS s3
      - name:  Copy index.html to s3
        run: |
          aws s3 cp ./index.html s3://{% raw %}${{ env.BUCKET_NAME }}{% endraw %}/
```
