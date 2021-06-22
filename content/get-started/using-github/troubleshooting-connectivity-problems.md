---
title: Troubleshooting connectivity problems
intro: 'If you''re having trouble connecting to {% data variables.product.prodname_dotcom %}, you can troubleshoot your connection, then use the {% data variables.product.prodname_debug %} tool to diagnose problems.'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/using-github/troubleshooting-connectivity-problems
versions:
  free-pro-team: '*'
---
Most often, connection problems occur because a firewall, proxy server, corporate network, or other network is configured in a way that blocks {% data variables.product.prodname_dotcom %}.

## Allowing {% data variables.product.prodname_dotcom %}'s IP addresses

Make sure your network is configured to allow {% data variables.product.prodname_dotcom %}'s IP addresses. For more information, see "[About {% data variables.product.prodname_dotcom %}'s IP addresses](/articles/about-github-s-ip-addresses)."

## Using a company or organization's network

If you're having connectivity problems on your company or organization's network, check with your network administrator to find out if the network has rules in place to block certain traffic. If there are rules in place, ask your network administrator to allow traffic to {% data variables.product.prodname_dotcom %}.

## Troubleshooting the captcha

If you're unable to verify with the captcha:
- Ensure JavaScript is enabled on your browser.
- Ensure your browser is supported. If your browser isn't supported, upgrade your browser or install a supported browser. For a list of supported browsers, see "[Supported browsers](/articles/supported-browsers)."
- Ensure your network configuration is not blocking https://octocaptcha.com/ or https://arkoselabs.com/. If you're behind a corporate firewall, contact your IT administrator to allow those domains. To verify access to these domains, visit https://octocaptcha.com/test and ensure the text "Connection successfully made!" is displayed, then visit https://client-demo.arkoselabs.com/github and ensure you are able to load the captcha.
- Ensure your browser does not have plug-ins or extensions that may be interfering with GitHub. If so, temporarily disable the plug-ins or extensions during captcha verification.

## Switching cloning methods

Switching from cloning via SSH to cloning via HTTPS, or vice versa may improve connectivity. For more information, see "[Cloning a repository from {% data variables.product.prodname_dotcom %}](/articles/cloning-a-repository-from-github)."

If you're encountering timeouts with SSH, see "[Error: Bad file number](/articles/error-bad-file-number)."

## Troubleshooting slow downloads and intermittent slow connections

{% data variables.product.prodname_dotcom %} does not throttle bandwidth per user.

If you're experiencing slow connections at certain times of day but not others, the slow speeds are most likely due to network congestion. Because {% data variables.product.prodname_dotcom %} cannot resolve network congestion, you should escalate the problem to your internet service provider.

## Troubleshooting with {% data variables.product.prodname_debug %}

If you've followed all of the troubleshooting suggestions above and are still having connection problems, you can follow the instructions on the {% data variables.product.prodname_debug %} site to run tests and send a report to {% data variables.product.prodname_dotcom %} Support. For more information, see [{% data variables.product.prodname_debug %}](https://github-debug.com/).
