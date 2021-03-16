---
title: GitHub Enterprise を設定する
shortTitle: GitHub Enterprise を設定する
intro: "You can configure your enterprise to suit your organization's needs."
redirect_from:
  - /enterprise/admin/configuration
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**注釈:** Enterprise 向けに {% data variables.product.prodname_actions %} または {% data variables.product.prodname_registry %} を設定するには、「[GitHub Actions を Enterprise 向けに管理する](/admin/github-actions)」または「[GitHub Packages を Enterprise 向けに管理する](/admin/packages)」を参照してください。

{% endnote %}
{% endif %}

### 目次

{% topic_link_in_list /configuring-your-enterprise %}
    {% link_in_list /about-enterprise-configuration %}
    {% link_in_list /initializing-github-ae %}
    {% link_in_list /accessing-the-management-console %}
    {% link_in_list /accessing-the-administrative-shell-ssh %}
    {% link_in_list /configuring-data-encryption-for-your-enterprise %}
    {% link_in_list /enabling-and-scheduling-maintenance-mode %}
    {% link_in_list /configuring-backups-on-your-appliance %}
    {% link_in_list /site-admin-dashboard %}
    {% link_in_list /enabling-private-mode %}
    {% link_in_list /managing-github-for-mobile-for-your-enterprise %}
    {% link_in_list /configuring-email-for-notifications %}
    {% link_in_list /configuring-rate-limits %}
    {% link_in_list /configuring-applications %}
    {% link_in_list /troubleshooting-ssl-errors %}
    {% link_in_list /configuring-time-synchronization %}
    {% link_in_list /command-line-utilities %}
    {% link_in_list /restricting-network-traffic-to-your-enterprise %}
    {% link_in_list /configuring-github-pages-for-your-enterprise %}
{% topic_link_in_list /configuring-network-settings %}
    {% link_in_list /configuring-the-ip-address-using-the-virtual-machine-console %}
    {% link_in_list /configuring-dns-nameservers %}
    {% link_in_list /configuring-a-hostname %}
    {% link_in_list /validating-your-domain-settings %}
    {% link_in_list /configuring-tls %}
    {% link_in_list /enabling-subdomain-isolation %}
    {% link_in_list /configuring-an-outbound-web-proxy-server %}
    {% link_in_list /configuring-built-in-firewall-rules %}
    {% link_in_list /network-ports %}
    {% link_in_list /using-github-enterprise-server-with-a-load-balancer %}
{% topic_link_in_list /managing-connections-between-github-enterprise-server-and-github-enterprise-cloud %}
    {% link_in_list /connecting-github-enterprise-server-to-github-enterprise-cloud %}
    {% link_in_list /enabling-unified-search-between-github-enterprise-server-and-githubcom %}
    {% link_in_list /enabling-unified-contributions-between-github-enterprise-server-and-githubcom %}
    {% link_in_list /enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server %}
    {% link_in_list /enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud %}
{% topic_link_in_list /configuring-advanced-security-features %}
    {% link_in_list /configuring-code-scanning-for-your-appliance %}
    {% link_in_list /configuring-secret-scanning-for-your-appliance %}
