---
title: Troubleshooting SSL errors
intro: 'If you run into SSL issues with your appliance, you can take actions to resolve them.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors/
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration/
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/troubleshooting-ssl-errors
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Errors
  - Infrastructure
  - Networking
  - Security
  - Troubleshooting
---
## Removing the passphrase from your key file

If you have a Linux machine with OpenSSL installed, you can remove your passphrase.

1. Rename your original key file.
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. Generate a new key without a passphrase.
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

You'll be prompted for the key's passphrase when you run this command.

For more information about OpenSSL, see [OpenSSL's documentation](https://www.openssl.org/docs/).

## Converting your SSL certificate or key into PEM format

If you have OpenSSL installed, you can convert your key into PEM format by using the `openssl` command. For example, you can convert a key from DER format into PEM format.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

Otherwise, you can use the SSL Converter tool to convert your certificate into the PEM format. For more information, see the [SSL Converter tool's documentation](https://www.sslshopper.com/ssl-converter.html).

## Unresponsive installation after uploading a key

If {% data variables.product.product_location %} is unresponsive after uploading an SSL key, please [contact {% data variables.product.prodname_enterprise %} Support](https://enterprise.github.com/support) with specific details, including a copy of your SSL certificate.

## Certificate validity errors

Clients such as web browsers and command-line Git will display an error message if they cannot verify the validity of an SSL certificate. This often occurs with self-signed certificates as well as "chained root" certificates issued from an intermediate root certificate that is not recognized by the client.

If you are using a certificate signed by a certificate authority (CA), the certificate file that you upload to {% data variables.product.prodname_ghe_server %} must include a certificate chain with that CA's root certificate. To create such a file, concatenate your entire certificate chain (or "certificate bundle") onto the end of your certificate, ensuring that the principal certificate with your hostname comes first. On most systems you can do this with a command similar to:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

You should be able to download a certificate bundle (for example, `bundle-certificates.crt`) from your certificate authority or SSL vendor.

## Installing self-signed or untrusted certificate authority (CA) root certificates

If your {% data variables.product.prodname_ghe_server %} appliance interacts with other machines on your network that use a self-signed or untrusted certificate, you will need to import the signing CA's root certificate into the system-wide certificate store in order to access those systems over HTTPS.

1. Obtain the CA's root certificate from your local certificate authority and ensure it is in PEM format.
2. Copy the file to your {% data variables.product.prodname_ghe_server %} appliance over SSH as the "admin" user on port 122.
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. Connect to the {% data variables.product.prodname_ghe_server %} administrative shell over SSH as the "admin" user on port 122.
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. Import the certificate into the system-wide certificate store.
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```
