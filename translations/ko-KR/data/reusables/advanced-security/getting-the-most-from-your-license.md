When you decide which repositories and organizations to prioritize for {% data variables.product.prodname_GH_advanced_security %}, you should review them and identify:

- Codebases that are the most critical to your company's success. These are the projects for which the introduction of vulnerable code, hard-coded secrets, or vulnerable dependencies would have the greatest impact on your company.
- Codebases with the highest commit frequency. These are the most actively developed projects, consequently there is a higher risk that security problems could be introduced.

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, assess which other codebases you could add without incurring billing for unique committers. Finally, review the remaining important and busy codebases. {% ifversion fpt or ghes %}If you want to increase the number of seats in your license, contact {% data variables.contact.contact_enterprise_sales %}.{% endif %}
