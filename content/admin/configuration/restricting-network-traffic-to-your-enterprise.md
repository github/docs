---
title: Restricting network traffic to your enterprise
shortTitle: Restricting network traffic
intro: 'You can restrict access to your enterprise to connections from specified IP addresses.'
versions:
  github-ae: '*'
---

By default, authorized users can access your enterprise from any IP address. You can restrict access to specific IP addresses such as your physical office locations by contacting support.

Contact {% data variables.contact.github_support %} with the IP addresses that should be allowed to access your enterprise. Specify address ranges using the standard CIDR (Classless Inter-Domain Routing) format. {% data variables.contact.github_support %} will configure the appropriate firewall rules for your enterprise to restrict network access over HTTP, SSH, HTTPS, and SMTP. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/receiving-help-from-github-support)."
