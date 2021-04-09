---
title: 向 GitHub 验证
shortTitle: 身份验证
intro: '通过{% if currentVersion != "github-ae@latest" %}双重身份验证、{% endif %}SSH{% if currentVersion != "github-ae@latest" %}、{% endif %}和提交签名验证等功能保持帐户和数据的安全。'
redirect_from:
  - /categories/56/articles/
  - /categories/ssh/
  - /mac-verify-ssh/
  - /ssh-issues/
  - /verify-ssh-redirect/
  - /win-verify-ssh/
  - /categories/92/articles/
  - /categories/gpg/
  - /categories/security/
  - /categories/authenticating-to-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 2fa
  - 身份
  - 访问管理
  - 用户名
  - 设备验证
---


### 目录

{% topic_link_in_list /keeping-your-account-and-data-secure %}
    {% link_in_list /about-authentication-to-github %}
    {% link_in_list /creating-a-strong-password %}
    {% link_in_list /updating-your-github-access-credentials %}
    {% link_in_list /creating-a-personal-access-token %}
    {% link_in_list /reviewing-your-ssh-keys %}
    {% link_in_list /reviewing-your-deploy-keys %}
    {% link_in_list /authorizing-oauth-apps %}
    {% link_in_list /reviewing-your-authorized-integrations %}
    {% link_in_list /connecting-with-third-party-applications %}
    {% link_in_list /reviewing-your-authorized-applications-oauth %}
    {% link_in_list /reviewing-your-security-log %}
    {% link_in_list /removing-sensitive-data-from-a-repository %}
    {% link_in_list /about-anonymized-image-urls %}
    {% link_in_list /about-githubs-ip-addresses %}
    {% link_in_list /githubs-ssh-key-fingerprints %}
    {% link_in_list /sudo-mode %}
    {% link_in_list /preventing-unauthorized-access %}
{% topic_link_in_list /securing-your-account-with-two-factor-authentication-2fa %}
    {% link_in_list /about-two-factor-authentication %}
    {% link_in_list /configuring-two-factor-authentication %}
    {% link_in_list /configuring-two-factor-authentication-recovery-methods %}
    {% link_in_list /accessing-github-using-two-factor-authentication %}
    {% link_in_list /recovering-your-account-if-you-lose-your-2fa-credentials %}
    {% link_in_list /changing-two-factor-authentication-delivery-methods-for-your-mobile-device %}
    {% link_in_list /countries-where-sms-authentication-is-supported %}
    {% link_in_list /disabling-two-factor-authentication-for-your-personal-account %}
{% topic_link_in_list /authenticating-with-saml-single-sign-on %}
    {% link_in_list /about-authentication-with-saml-single-sign-on %}
    {% link_in_list /authorizing-an-ssh-key-for-use-with-saml-single-sign-on %}
    {% link_in_list /authorizing-a-personal-access-token-for-use-with-saml-single-sign-on %}
    {% link_in_list /viewing-and-managing-your-active-saml-sessions %}
{% topic_link_in_list /connecting-to-github-with-ssh %}
    {% link_in_list /about-ssh %}
    {% link_in_list /checking-for-existing-ssh-keys %}
    {% link_in_list /generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent %}
    {% link_in_list /adding-a-new-ssh-key-to-your-github-account %}
    {% link_in_list /testing-your-ssh-connection %}
    {% link_in_list /working-with-ssh-key-passphrases %}
{% topic_link_in_list /troubleshooting-ssh %}
    {% link_in_list /using-ssh-over-the-https-port %}
    {% link_in_list /recovering-your-ssh-key-passphrase %}
    {% link_in_list /deleted-or-missing-ssh-keys %}
    {% link_in_list /error-permission-denied-publickey %}
    {% link_in_list /error-bad-file-number %}
    {% link_in_list /error-key-already-in-use %}
    {% link_in_list /error-permission-to-userrepo-denied-to-other-user %}
    {% link_in_list /error-permission-to-userrepo-denied-to-userother-repo %}
    {% link_in_list /error-agent-admitted-failure-to-sign %}
    {% link_in_list /error-ssh-add-illegal-option----k %}
    {% link_in_list /error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok %}
    {% link_in_list /error-were-doing-an-ssh-key-audit %}
{% topic_link_in_list /managing-commit-signature-verification %}
    {% link_in_list /about-commit-signature-verification %}
    {% link_in_list /checking-for-existing-gpg-keys %}
    {% link_in_list /generating-a-new-gpg-key %}
    {% link_in_list /adding-a-new-gpg-key-to-your-github-account %}
    {% link_in_list /telling-git-about-your-signing-key %}
    {% link_in_list /associating-an-email-with-your-gpg-key %}
    {% link_in_list /signing-commits %}
    {% link_in_list /signing-tags %}
{% topic_link_in_list /troubleshooting-commit-signature-verification %}
    {% link_in_list /checking-your-commit-and-tag-signature-verification-status %}
    {% link_in_list /updating-an-expired-gpg-key %}
    {% link_in_list /using-a-verified-email-address-in-your-gpg-key %}
