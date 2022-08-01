{% ifversion fpt or ghec %}
{% note %}

**注意：** {% data variables.product.company_short %} 在 2022 年 3 月 15 日通过删除较旧的不安全密钥类型提高了安全性。

从该日期起，不再支持 DSA 密钥 (`ssh-dss`)。 您无法将新 DSA 密钥添加到您在 {% data variables.product.product_location %} 上的个人帐户。

在 2021 年 11 月 2 日之前 `valid_after` 的 RSA 密钥 (`ssh-rsa`) 可以继续使用任何签名算法。 在该日期之后生成的 RSA 密钥必须使用 SHA-2 签名算法。 某些较旧的客户端可能需要升级才能使用 SHA-2 签名。

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Note**: By default with {% data variables.product.product_name %} 3.6 and later, as of the cutoff date of midnight UTC on August 1, 2022, SSH connections that satisfy **both** of the following conditions will fail.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 and later also does not support SSH connections that use DSA, HMAC-SHA-1, or CBC ciphers. RSA SSH keys uploaded before the cutoff date can continue to authenticate using the SHA-1 hash function as long as the key remains valid. For more information about finding the version of {% data variables.product.product_name %} that you use, see "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."

Your site administrator can adjust the cutoff date for connections using RSA-SHA-1, and may block all connections using RSA-SHA-1. For more information, contact your site administrator or see "[Configuring SSH connections to your instance](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)."

{% endnote %}

{% endif %}