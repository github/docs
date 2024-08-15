In GitHub Enterprise Server 3.10 and later, the requirements for TLS security levels have changed due to an upgrade to containers in the underlying OS. On an instance with GitHub Actions enabled and a custom TLS certificate, users may experience disruptions with workflow runs if the TLS certificate uses weak encryption. Workflow runs will not trigger, and the following error message will appear in system logs for `babeld`.

```text
CA certificate key too weak
```

To resolve this issue, confirm that your certificate complies
with level 2 of the OpenSSL security specification. For more information, see [SSL_CTX_set_security_level](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_security_level.html#DEFAULT-CALLBACK-BEHAVIOUR) in the OpenSSL docs. For more information about reviewing your instance's logs, see "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs#system-logs-in-the-systemd-journal)".

If the error appears in `babeld` logs because your TLS certificate does not comply with level 2 of the specification, you must create and upload a new certificate with stronger security before you upgrade to GitHub Enterprise Server 3.10 or later. For more information, see "[AUTOTITLE](/admin/configuration/hardening-security-for-your-enterprise/configuring-tls)."
