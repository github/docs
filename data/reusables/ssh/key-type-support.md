{% ifversion fpt or ghec %}
{% note %}

**Note:** {% data variables.product.company_short %} improved security by dropping older, insecure key types on March 15, 2022.

As of that date, DSA keys (`ssh-dss`) are no longer supported. You cannot add new DSA keys to your personal account on {% data variables.product.prodname_dotcom %}.

RSA keys (`ssh-rsa`) with a `valid_after` before November 2, 2021 may continue to use any signature algorithm. RSA keys generated after that date must use a SHA-2 signature algorithm. Some older clients may need to be upgraded in order to use SHA-2 signatures.

{% endnote %}
{% endif %}
