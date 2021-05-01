---
title: 'Error: SSL certificate problem, verify that the CA cert is OK'
intro: 'This error means your CA root certificate is out of date. If your CA root certificate needs to be updated, you won''t be able to push or pull from {% data variables.product.product_name %} repositories.'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  free-pro-team: '*'
topics:
  - SSH
---
The error you receive may look like the following:

```shell
$ git push -u github.main
> fatal: 'github.main' does not appear to be a git repository
> fatal: The remote end hung up unexpectedly

$ git pull -u github
> error: SSL certificate problem, verify that the CA cert is OK. Details:
> error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: HTTP request failed
```

A "CA" is shorthand for a "certificate authority," a third-party group responsible for handling secure connections around the web. They establish digital "certificates," which are a way of ensuring that there are valid connections between two machines (like your computer and GitHub.com). Without a certificate, the security risk between two machines is greater.

When you receive this error, it likely means that your CA is out-of-date and needs to be updated. Generally, updating your operating system also updates your CA, and solves the problem.
