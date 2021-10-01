当您决定哪些仓库和组织优先用于 {% data variables.product.prodname_GH_advanced_security %} 时，应该查看它们并识别：

- 对公司成功至关重要的代码库。 在这些项目中，引入了易受攻击代码、硬编码的密钥或易受攻击的依赖项，将对您的公司将产生最大的影响。
- 提交频率最高的代码库。 这些是最积极开发的项目，因此出现安全问题的风险较高。

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, assess which other codebases you could add without incurring billing for unique committers. Finally, review the remaining important and busy codebases. {% ifversion fpt or ghes %}If you want to increase the number of seats in your license, contact {% data variables.contact.contact_enterprise_sales %}.{% endif %}
