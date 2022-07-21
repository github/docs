{% ifversion fpt or ghec %}
{% note %}

**注意：** {% data variables.product.company_short %} 在 2022 年 3 月 15 日通过删除较旧的不安全密钥类型提高了安全性。

从该日期起，不再支持 DSA 密钥 (`ssh-dss`)。 您无法将新 DSA 密钥添加到您在 {% data variables.product.product_location %} 上的个人帐户。

在 2021 年 11 月 2 日之前 `valid_after` 的 RSA 密钥 (`ssh-rsa`) 可以继续使用任何签名算法。 在该日期之后生成的 RSA 密钥必须使用 SHA-2 签名算法。 某些较旧的客户端可能需要升级才能使用 SHA-2 签名。

{% endnote %}
{% endif %}
