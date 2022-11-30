---
title: 'Error: Estamos haciendo una auditoría de clave SSH'
intro: Este error significa que la clave SSH que estás usando para realizar una operación Git no está verificada.
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/error-were-doing-an-ssh-key-audit
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
Cuando uses una clave sin verificar para realizar operaciones Git, se te indicará que debes realizar una auditoría de tus claves SSH.

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```
### Resolver el problema

Para resolverlo, necesitas [revisar tus claves SSH](/articles/reviewing-your-ssh-keys) y rechazar o aprobar la clave sin verificar. Al hacer clic en el mensaje de error en el enlace de la URL, irás a la página de Configuración de SSH, donde la clave SSH aparece destacada en la lista de claves SSH.
