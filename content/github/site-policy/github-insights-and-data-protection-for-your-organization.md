---
title: GitHub Insights and data protection for your organization
intro: '{% data variables.product.prodname_insights %} analyzes your {% data variables.product.prodname_ghe_server %} data. This data could include personal data of individuals in your organization who may have the right to understand how such personal data is being used.'
redirect_from:
  - /github/installing-and-configuring-github-insights/github-insights-and-data-protection-for-your-organization
  - /enterprise-server@2.22/github/site-policy/github-insights-and-data-protection-for-your-organization
  - /enterprise-server@2.21/github/site-policy/github-insights-and-data-protection-for-your-organization
  - /enterprise-server@2.20/github/site-policy/github-insights-and-data-protection-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

For the avoidance of doubt, none of the foregoing information should be considered legal advice provided by {% data variables.product.prodname_dotcom %}. You are responsible for securing your own legal analysis of the information provided herein and for your compliance with privacy and data protection laws. It is up to you whether to use {% data variables.product.prodname_insights %} to process your employees’ and users’ data, and if you do so, you are solely responsible for conducting such processing in compliance with applicable law.

## The organization’s roles and responsibilities

When using {% data variables.product.prodname_insights %}, your organization is the data controller because your organization determines whether, how, and why {% data variables.product.prodname_insights %} will process any individual’s personal data. Your organization is solely responsible for ensuring that you are complying with all applicable laws in processing data with {% data variables.product.prodname_insights %}.

## Data privacy recommendations

You have full control over which metrics, reports, repositories, and contributors to include before beginning use of {% data variables.product.prodname_insights %}. The data you process with {% data variables.product.prodname_insights %} can only be pulled from your installation of {% data variables.product.prodname_ghe_server %}. Consider balancing the risks versus the benefits of analyzing personal data.

- **Develop a clear analysis plan**: You must understand clearly what you want to analyze and why, and then consider how {% data variables.product.prodname_insights %} may help you find those answers.

- **Consider a data protection impact assessment**: If your proposed use of {% data variables.product.prodname_insights %} involves processing personal data, consider completing a data protection impact assessment or otherwise completing formal legal analysis of your planned use.

## Decide what data to use

- **Decide which repositories to include**: Before you start an analysis in {% data variables.product.prodname_insights %}, consider which repositories to include. Administrators can include repositories when adding organizations and can enable and disable repositories at any time. For more information on adding organizations to {% data variables.product.prodname_insights %}, see "[Managing organizations](/insights/installing-and-configuring-github-insights/managing-organizations)." For more information on enabling and disabling repositories, see "[Managing repositories](/insights/installing-and-configuring-github-insights/managing-repositories)."

- **Decide which metrics and reports to include**: Administrators can enable and disable metrics and reports available for all users at any time. Administrators control the {% data variables.product.prodname_insights %} data that users have access to in your installation of {% data variables.product.prodname_ghe_server %}. For more information, see "[Managing available metrics and reports](/insights/installing-and-configuring-github-insights/managing-available-metrics-and-reports)."

- **Decide which contributors to include**: Administrators can disable a specific contributor’s data from being processed in the metrics and reports. For more information on managing contributor data, see "[Managing contributors and teams](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)."

## User rights

Under various data protection regulations, such as the General Data Protection Regulation (GDPR), users may have the right to request exclusion from processing, access, and correction, or to request deletion of their personal data. As the data controller, your organization should evaluate whether a particular user request is valid and, if appropriate, take action to fulfill the request.

- **Exclusion of processing**: Users may have the right to have their personal data excluded from being processed. Administrators have the ability to remove a contributor’s data from being processed in {% data variables.product.prodname_insights %}, and the resulting reports and metrics will exclude the contributor’s data accordingly. For more information, see "[Managing contributors and teams](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)."

- **Access**: Users may have the right to demand to see what personal data is being processed. Each metric and report has a detailed description of what personal data is being processed. For more information, see "[Metrics available with {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)." Raw data is available through the {% data variables.product.prodname_enterprise %} API. Your organization is responsible for any decisions to process personal data and for fulfilling any such requests.

- **Correction and deletion**: Users may have the right to rectify or delete their personal data. The data used in {% data variables.product.prodname_insights %} is derived from the existing data you add to or generate from your {% data variables.product.prodname_ghe_server %} installation. Correction and deletion should follow your organization's existing process to correct and delete data from {% data variables.product.prodname_ghe_server %}.

- **Transparency regarding processing**:  Each metric and report has a detailed description of what personal data is being processed. For more information, see "[Metrics available with {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)."
