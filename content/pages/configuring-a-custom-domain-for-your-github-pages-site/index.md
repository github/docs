---
title: Configuring a custom domain for your GitHub Pages site
 Configuring a custom domain for your GitHub Pages site involves a few key steps. Here's a guide to help you through the process:

1. **Purchase a Domain Name**: If you don't already have a custom domain, you'll need to purchase one from a domain registrar. Popular options include Namecheap, GoDaddy, and Google Domains.

2. **Access GitHub Pages Settings**: Go to your repository on GitHub and navigate to the "Settings" tab. Scroll down to the "GitHub Pages" section.

3. **Add Custom Domain**: In the "Custom domain" section, enter your custom domain name (e.g., www.yourdomain.com) and click "Save".

4. **Configure DNS Records**: Access your domain registrar's website and locate the DNS settings for your domain. Add the necessary DNS records as specified by GitHub. This typically involves adding A records and/or CNAME records to point to GitHub's servers.

5. **Wait for DNS Propagation**: DNS changes can take some time to propagate across the internet. It can range from a few minutes to 48 hours. Be patient and verify the DNS configuration using tools like "dig" or online DNS lookup tools.

6. **Verify Configuration**: Once DNS propagation is complete, visit your custom domain in a web browser to verify that your GitHub Pages site is loading correctly.

Keep in mind that GitHub also has specific documentation for setting up custom domains, so be sure to check their official documentation for the most up-to-date instructions and any site-specific requirements.  
redirect_from:
  - /articles/tips-for-configuring-an-a-record-with-your-dns-provider
  - /articles/adding-or-removing-a-custom-domain-for-your-github-pages-site
  - /articles/configuring-an-a-record-with-your-dns-provider
  - /articles/using-a-custom-domain-with-github-pages
  - /articles/tips-for-configuring-a-cname-record
  - /articles/setting-up-a-custom-domain-with-pages
  - /articles/setting-up-a-custom-domain-with-github-pages
  - /articles/configuring-a-custom-domain-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
children:
  - /about-custom-domains-and-github-pages
  - /managing-a-custom-domain-for-your-github-pages-site
  - /verifying-your-custom-domain-for-github-pages
  - /troubleshooting-custom-domains-and-github-pages
shortTitle: Configure a custom domain
---

