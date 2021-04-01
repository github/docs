---
title: 'Erro: problema na certificação SSL, verifique se a cert CA está OK'
intro: 'O erro indica que o certificado CA root está desatualizado. Não será possível fazer push ou pull nos repositórios {% data variables.product.product_name %} se houver necessidade de atualizar o certificado CA root.'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  free-pro-team: '*'
topics:
  - ssh
---

Você receberá a seguinte mensagem de erro:

```shell
$ git push -u github.main
> fatal: 'github.main' não parece um repositório git 
> fatal: A ponta remote desligou inesperadamente

$ git pull -u github
> erro: problema na certificação SSL, verifique se a cert CA está OK. Details:
> erro:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:falha na verificação do certificado ao acessar https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: falha na solicitação HTTP
```

"CA" é a abreviatura de "certificate authority" (autoridade certificada), um grupo terceiro responsável por gerenciar conexões seguras na Web. Esse grupo estabelece "certificados" digitais, que são uma forma de garantir que existem conexões válidas entre duas máquinas (por exemplo, seu computador e o GitHub.com). Sem um certificado, o risco de segurança entre duas máquinas é maior.

Ao receber essa mensagem de erro, provavelmente seu CA está desatualizado e precisa ser atualizado. Atualizar seu sistema operacional normalmente também atualiza seu CA e o problema é resolvido.
