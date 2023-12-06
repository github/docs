---
title: Best practices for securing your build system
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: Guidance on how to protect the end of your supply chain—the systems you use to build and distribute artifacts.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
---

## About this guide

This guide describes the highest impact changes you can make to improve the security of your build systems. Each section outlines a change you can make to your processes to improve security. The highest impact changes are listed first.

## What's the risk?

Some attacks on software supply chains target the build system directly. If an attacker can modify the build process, they can exploit your system without the effort of compromising personal accounts or code. It's important to make sure that you don't forget to protect the build system as well as personal accounts and code.

## Secure your build system

There are several security capabilities a build system should have:

1. The build steps should be clear and repeatable.

1. You should know exactly what was running during the build process.

1. Each build should start in a fresh environment, so a compromised build doesn't persist to affect future builds.

{% data variables.product.prodname_actions %} can help you meet these capabilities. Build instructions are stored in your repository, alongside your code. You choose what environment your build runs on, including Windows, Mac, Linux, or runners you host yourself. Each build starts with a fresh runner image, making it difficult for an attack to persist in your build environment.

In addition to the security benefits, {% data variables.product.prodname_actions %} lets you trigger builds manually, periodically, or on git events in your repository for frequent and fast builds.

{% data variables.product.prodname_actions %} is a big topic, but a good place to get started is "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)," as well as "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)," and "[AUTOTITLE](/actions/using-workflows/triggering-a-workflow)."

## Sign your builds

After your build process is secure, you want to prevent someone from tampering with the end result of your build process. A great way to do this is to sign your builds. When distributing software publicly, this is often done with a public/private cryptographic key pair. You use the private key to sign the build, and you publish your public key so users of your software can verify the signature on the build before they use it. If the bytes of the build are modified, the signature will not verify.

How exactly you sign your build will depend on what sort of code you're writing, and who your users are. Often it's difficult to know how to securely store the private key. One basic option here is to use {% data variables.product.prodname_actions %} encrypted secrets, although you'll need to be careful to limit who has access to those {% data variables.product.prodname_actions %} workflows. {% ifversion fpt or ghec %}If your private key is stored in another system accessible over the public internet (like Microsoft Azure, or HashiCorp Vault), a more advanced option is to authenticate with OpenID Connect, so you don't have to share secrets across systems.{% endif %} If your private key is only accessible from a private network, another option is to use self-hosted runners for {% data variables.product.prodname_actions %}.

For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)"{% ifversion fpt or ghec %}, "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)",{% endif %} and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."

## Harden security for {% data variables.product.prodname_actions %}

There are many further steps you can take to additionally secure {% data variables.product.prodname_actions %}. In particular, be careful when evaluating third-party workflows, and consider using `CODEOWNERS` to limit who can make changes to your workflows.

For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions);" particularly "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)" and "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)."

## Next steps

- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"
