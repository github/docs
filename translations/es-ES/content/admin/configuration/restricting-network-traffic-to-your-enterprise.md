---
title: Restringir el tráfico de red en tu empresa
shortTitle: Restringir el tráfico de red
intro: 'Puedes restringir el acceso a tu empresa para las conexiones de direcciones IP específicas.'
versions:
  github-ae: '*'
---

Predeterminadamente, los usuarios autorizados pueden acceder a tu empresa desde cualquier dirección IP. Puedes restringir el acceso para solo direcciones IP específicas, tales como la ubicación de tu oficina física, si contactas a soporte.

Contacta a {% data variables.contact.github_support %} y envíales las direcciones IP que deberían tener permiso de acceder a tu empresa. Especifica los rangos de direcciones utilizando el formato estándar de CIDR (Enrutamiento sin Clases entre Dominios, por sus siglas en inglés). {% data variables.contact.github_support %} configurará las reglas de cortafuegos adecuadas para que tu empresa restrinja el acceso por HTTP, SSH, HTTPS, y SMTP. Para obtener más información, consulta la sección "[Recibir ayuda de {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/receiving-help-from-github-support)".
