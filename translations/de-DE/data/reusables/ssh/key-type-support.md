{% note %}

**Note:** {% data variables.product.company_short %} is improving security by dropping older, insecure key types.

DSA keys (`ssh-dss`) are no longer supported. Existing keys will continue to function through March 15, 2022. You cannot add new DSA keys to your user account on {% data variables.product.product_name %}.

RSA keys (`ssh-rsa`) with a `valid_after` before November 2, 2021 may continue to use any signature algorithm. RSA keys generated after that date must use a SHA-2 signature algorithm. Some older clients may need to be upgraded in order to use SHA-2 signatures.

{% endnote %}
