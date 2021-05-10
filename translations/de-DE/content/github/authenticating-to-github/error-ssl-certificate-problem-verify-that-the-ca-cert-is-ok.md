---
title: 'Fehler: „SSL certificate problem, verify that the CA cert is OK“ (SSL-Zertifikatsproblem, verifiziere, dass das CA-Zertifikat OK ist)'
intro: 'Diese Fehlermeldung bedeutet, dass Dein CA-Root-Zertifikat veraltet ist. Wenn Ihr CA-Root-Zertifikat aktualisiert werden muss, können Sie keine Inhalte von {% data variables.product.product_name %}-Repositorys abrufen oder dorthin pushen.'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  free-pro-team: '*'
topics:
  - SSH
---

Die angezeigte Fehlermeldung sieht ähnlich wie die folgende aus:

```shell
$ git push -u github.main
> fatal: 'github.main' does not appear to be a git repository
> fatal: The remote end hung up unexpectedly

$ git pull -u github
> error: SSL certificate problem, verify that the CA cert is OK. Details:
> error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: HTTP request failed
```

Die Abkürzung „CA“ steht für „certificate authority“ (Zertifizierungsstelle), also ein Drittanbieter, der für sichere Verbindungen im Internet verantwortlich ist. Der Drittanbieter erstellt digitale „Zertifikate“, mit denen sichergestellt wird, dass zwischen zwei Rechnern (zum Beispiel zwischen Deinem Computern und GitHub.com) gültige Verbindungen bestehen. Ohne Zertifikat ist das Sicherheitsrisiko bei Verbindungen zwischen zwei Rechnern größer.

Wenn diese Fehlermeldung angezeigt wird, bedeutet sie wahrscheinlich, dass Deine CA veraltet ist und aktualisiert werden muss. Im Allgemeinen wird bei einem Update Deines Betriebssystems auch Deine CA aktualisiert, was das Problem behebt.
