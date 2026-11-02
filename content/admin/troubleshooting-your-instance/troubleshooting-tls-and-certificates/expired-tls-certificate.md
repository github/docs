---
title: Expired TLS certificate
intro: 'When a certificate used by {% data variables.location.product_location %} expires, services can no longer validate TLS connections. Users may be unable to access the instance, and features that depend on internal connections stop working.'
versions:
  ghes: '*'
shortTitle: Expired TLS certificate
contentType: how-tos
category:
  - Troubleshoot your instance
---

## Symptoms

* Users cannot access the instance.
* Pull requests do not update with new pushes.
* Webhooks are not delivered, and {% data variables.product.prodname_actions %} workflows are not triggered.
* `/var/log/github/exceptions.log` contains `certificate verify failed` errors.

## Causes

Every certificate is only valid between its `notBefore` and `notAfter` dates. If the certificate for your instance, or any intermediate or root certificate in its chain, has expired, validation fails.

Custom certificate authority (CA) certificates installed on the instance can expire in the same way.

## Confirming the problem

1. SSH into the administrative shell. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Check the validity dates of the certificate the instance is using.

   ```shell
   openssl x509 -in /etc/haproxy/ssl.crt -noout -subject -dates
   ```

   If the `notAfter` date has passed, the certificate has expired.

1. If you have installed custom CA certificates, list them.

   ```shell
   ghe-ssl-ca-certificate-install -l
   ```

1. Check the validity dates of each one, replacing CERTIFICATE with a file name from the list.

   ```shell
   openssl x509 -in /usr/local/share/ca-certificates/CERTIFICATE -noout -subject -dates
   ```

## Resolving the problem

> [!WARNING]
> Replacing a certificate starts a configuration run, which restarts services. Enable maintenance mode first to reduce the impact on users. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

1. Upload a valid certificate, or enable Let's Encrypt to manage the certificate for you. For more information, see [AUTOTITLE](/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls).

   Include the full certificate chain in the file you upload. For more information, see [AUTOTITLE](/admin/configuring-settings/hardening-security-for-your-enterprise/troubleshooting-tls-errors#certificate-validity-errors).

1. For each expired custom CA certificate, remove it with `ghe-ssl-ca-certificate-install -r` if it is no longer needed. If the instance still needs to trust that CA, install a valid replacement with `ghe-ssl-ca-certificate-install -c` instead. Then apply the configuration. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-ssl-ca-certificate-install).
1. If you enabled maintenance mode, disable it once the configuration run has finished.

## Contacting {% data variables.contact.github_support %}

If your certificate is in date but you see the symptoms above, an intermediate or root certificate in the chain may have expired. If you cannot confirm this, or the problems continue after you replace the certificate, contact {% data variables.contact.github_support %}. For more information, see [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).

Do not send your private key to {% data variables.contact.github_support %}.

If you have already opened a ticket, attaching a support bundle helps {% data variables.contact.github_support %} diagnose the problem faster. For more information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support).

## Further reading

* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs)
