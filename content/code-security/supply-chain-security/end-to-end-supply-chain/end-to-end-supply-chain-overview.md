---
title: Securing your end-to-end supply chain
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: 'Introducing best practice guides on complete end-to-end supply chain security including personal accounts, code, and build processes.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
---

## What is the end-to-end supply chain?

At its core, end-to-end software supply chain security is about making sure the code you distribute hasn't been tampered with. Previously, attackers focused on targeting dependencies you use, for example libraries and frameworks. Attackers have now expanded their focus to include targeting user accounts and build processes, and so those systems must be defended as well.

For information about features in {% data variables.product.prodname_dotcom %} that can help you secure dependencies, see "[About supply chain security](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)."

## About these guides

This series of guides explains how to think about securing your end-to-end supply chain: personal account, code, and build processes. Each guide explains the risk to that area, and introduces the {% data variables.product.product_name %} features that can help you address that risk. 

Everyone's needs are different, so each guide starts with the highest impact change, and continues from there with additional improvements you should consider. You should feel free to skip around and focus on improvements you think will have the biggest benefit. The goal isn't to do everything at once but to continuously improve security in your systems over time.

- "[Best practices for securing accounts](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Best practices for securing code in your supply chain](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"

- "[Best practices for securing your build system](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"

## Further reading

- [Safeguarding artifact integrity across any software supply chain](https://slsa.dev/)
- [Microsoft Supply Chain Integrity Model](https://github.com/microsoft/scim)
- [Software Supply Chain Security Paper - CNCF Security Technical Advisory Group](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
