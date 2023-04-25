{% ifversion fpt or ghec %}
{% note %}

**Note:** {% data variables.product.company_short %} improved security by dropping older, insecure key types on March 15, 2022.

As of that date, DSA keys (`ssh-dss`) are no longer supported. You cannot add new DSA keys to your personal account on {% data variables.location.product_location %}.

RSA keys (`ssh-rsa`) with a `valid_after` before November 2, 2021 may continue to use any signature algorithm. RSA keys generated after that date must use a SHA-2 signature algorithm. Some older clients may need to be upgraded in order to use SHA-2 signatures.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Note**: By default with {% data variables.product.product_name %} 3.6 and later, as of the cutoff date of midnight UTC on August 1, 2022, SSH connections that satisfy **both** of the following conditions will fail.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 and later also does not support SSH connections that use DSA, HMAC-SHA-1, or CBC ciphers. RSA SSH keys uploaded before the cutoff date can continue to authenticate using the SHA-1 hash function as long as the key remains valid. For more information about finding the version of {% data variables.product.product_name %} that you use, see "[AUTOTITLE](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."

Your site administrator can adjust the cutoff date for connections using RSA-SHA-1, and may block all connections using RSA-SHA-1. For more information, contact your site administrator or see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)."

{% endnote %}

{% endif %}
