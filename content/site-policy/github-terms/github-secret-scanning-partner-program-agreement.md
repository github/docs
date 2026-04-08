---
title: GitHub Secret Scanning Partner Program Agreement
versions:
  fpt: '*'
category:
  - Review product and program terms
---
<!-- markdownlint-disable search-replace -->

**Effective Date:** March 17, 2026

## 1. Definitions

**"Affiliate"** means, with respect to a party, any entity that directly or indirectly controls, is controlled by, or is under common control with that party, where "control" means ownership of more than 50% of the voting securities or equivalent ownership interest.

**"Detected Credential"** means a token, key, password, or other authentication credential that GitHub's secret scanning functionality identifies in content hosted on the GitHub platform as matching a pattern associated with Partner's services.

**"Detection Notification"** means the event of GitHub transmitting Match Data to the Partner Endpoint. Each Detection Notification includes the Match Data transmitted as part of that event. Obligations that apply to Match Data under this agreement also apply to Match Data received through a Detection Notification.

**"Feedback Data"** means any information that Partner provides or makes available to GitHub in connection with the Program, including: (a) classification of each Detected Credential as a true positive, false positive, or indeterminate; (b) remediation actions taken by Partner in response to a Detection Notification, including revocation, rotation, quarantine, or end-user notification; (c) response-time metrics between GitHub's transmission of a Detection Notification and Partner's completion of remediation; and (d) overall performance feedback limited to Partner's experience with the Program.

**"GitHub Marks"** means trademarks, service marks, trade names, logos, and other brand identifiers owned or controlled by GitHub, Inc. or its affiliates.

**"GitHub Metadata"** means the URL, source, and type fields contained in Match Data.

**"Match Data"** means the data elements that GitHub transmits to the Partner Endpoint when GitHub identifies a Detected Credential, including: (a) the Detected Credential value; (b) the credential type identifier; (c) the URL where the Detected Credential was found (which may be empty); and (d) the source type, as described in the Program Documentation.

**"Microsoft NDA"** means the nondisclosure agreement in effect between Partner and Microsoft Corporation or its affiliates.

**"Onboarding Materials"** means the test-account credentials, Partner Endpoint URLs, and other configuration data that Partner provides to GitHub to enable participation in the Program. Onboarding Materials are not Token Patterns.

**"Partner"** means the entity or individual accepting this agreement.

**"Partner Endpoint"** means the public, internet-accessible endpoint that Partner designates to receive Match Data from GitHub.

**"Program"** means the GitHub Secret Scanning Partner Program.

**"Program Documentation"** means GitHub's published documentation for the Program, currently available at [https://docs.github.com/code-security/secret-scanning/secret-scanning-partner-program](/code-security/secret-scanning/secret-scanning-partner-program), as GitHub may update it.

**"Token Patterns"** means the technical specifications that Partner provides to GitHub for use in the Program, including: (a) a unique, human-readable name for each credential type; (b) regular expressions and multi-part relationship rules that identify the credential type; (c) post-processing logic, exclusion patterns, validation endpoints, and format documentation; and (d) any other technical information that Partner provides to GitHub in connection with the Program's pattern-matching functionality.

**"Detection Samples"** means test materials that Partner provides to GitHub for building, testing, and validating Token Patterns, including (a) revoked, expired, or otherwise invalidated credentials; (b) credentials that Partner generates for testing purposes; and (c) any accompanying documentation or metadata that Partner provides with such credentials. GitHub may retain Detection Samples for the duration of the Program and for a period of 12 months following termination for archival and regression-testing purposes.

## 2. License

### 2.1 Ownership

As between the parties, Partner retains all right, title, and interest in and to the Token Patterns.

### 2.2 Token Patterns License

**(a) Grant.** Partner grants GitHub a non-exclusive, perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, create derivative works and distribute the Token Patterns for any purpose related to security scanning, secret detection, or credential protection, whether within the Program or in other GitHub products and services. GitHub may sublicense the foregoing rights only to GitHub's affiliates and to service providers acting on GitHub's behalf, provided that each sublicensee is bound by confidentiality and use restrictions at least as protective as those in this agreement.

**(b) Open-Source Distribution.** GitHub may publicly distribute software that incorporates Token Patterns under the MIT License or any other open-source license approved by the Open-Source Initiative. Partner acknowledges that, once distributed under an open-source license, Token Patterns incorporated in that software are governed by that license's terms and are not subject to recall or revocation.

**(c) Survival.** The license granted in this Section 2.2 survives expiration or termination of this agreement for any reason.

### 2.3 Onboarding Materials License

Partner grants GitHub a non-exclusive, worldwide, royalty-free license to use, reproduce, and display the Onboarding Materials solely to enable and operate the Program. This license terminates 30 days after expiration or termination of this agreement. During that 30-day period, GitHub shall use commercially reasonable efforts to cease active use of the Onboarding Materials but is not required to purge incidental copies retained in backups, caches, or archived records.

### 2.4 Feedback Data License

Partner grants GitHub a non-exclusive, perpetual, irrevocable, worldwide, royalty-free, fully sublicensable license to use, reproduce, modify, aggregate, analyze, and create derivative works of Feedback Data for any purpose related to developing, operating, and improving GitHub's products and services. This license survives expiration or termination of this agreement.

### 2.5 Detection Samples License

Partner grants GitHub a non-exclusive, worldwide, royalty-free license to use and reproduce Detection Samples solely for building, testing, and validating Token Patterns during the term of this agreement and for 12 months following termination.

### 2.6 Partner Representations

Partner represents and warrants that:

   (a) Partner owns or has sufficient rights in the Token Patterns to grant the licenses in this Section 2;

   (b) the Token Patterns do not, to Partner's knowledge, infringe any third party's intellectual property rights; and

   (c) Partner has the authority to grant the licenses in this Section 2 without the consent of any third party.

### 2.7 No Revocation

The licenses granted in Sections 2.2 and 2.4 are irrevocable and are not subject to revocation for any reason, including termination of this agreement or any breach by GitHub. Partner's remedies for GitHub's breach of this agreement are limited to those set forth in Sections 13, 15, and 16.

## 3. Operational Requirements for Partner Endpoint

### 3.1 Partner Endpoint Performance

Partner shall ensure that the Partner Endpoint:

   (a) returns an HTTP 2xx status code within 15 seconds of receiving a Match Data transmission, confirming receipt;

   (b) does not rate-limit or reject GitHub webhook traffic below the volume thresholds specified in the Program Documentation;

   (c) uses commercially reasonable efforts to maintain high availability of the Partner Endpoint;

   (d) implements transport-layer encryption (TLS 1.2 or later) for all Match Data transmissions;

   (e) does not throttle, block, or deprioritize GitHub webhook traffic relative to other inbound traffic of comparable volume; and

   (f) validates the GitHub-Public-Key-Identifier and GitHub-Public-Key-Signature headers on every inbound request using the ECDSA-NIST-P256V1-SHA256 algorithm, as described in the Program Documentation.

If the Partner Endpoint fails to meet subsection (a) for five or more days in a calendar month, GitHub shall notify Partner, and Partner shall have 15 days to cure. If Partner fails to cure, GitHub may suspend Match Data transmission until Partner demonstrates compliance.

Partner shall maintain reasonable security measures for the Partner Endpoint, including access controls and encryption in transit.

### 3.2 Additional Endpoint Security

If Partner provides endpoints for credential validation, revocation, or enrichment, Partner shall:

   (a) require authentication for all requests to such endpoints using credentials or certificates specified in the Program Documentation;

   (b) encrypt all data in transit using TLS 1.2 or later;

   (c) implement access controls that limit use of such endpoints to authorized GitHub systems; and

   (d) notify GitHub promptly if Partner becomes aware of any unauthorized access to, or compromise of, such endpoints.

Data that GitHub receives from such endpoints is subject to the same purpose limitations, confidentiality obligations, and use restrictions that apply to Match Data under this agreement. GitHub shall not use such data for purposes beyond those specified in Sections 2.4 and 4.

## 4. Purpose Limitation on Match Data

4.1 Partner shall use Match Data only for the following purposes:

   (a) verifying whether a Detected Credential is a valid credential on Partner's platform;

   (b) revoking or quarantining Detected Credentials; and

   (c) notifying the affected user or account holder on Partner's platform.

4.2 Partner shall not use Match Data for any other purpose, including:

   (a) marketing or advertising;

   (b) competitive intelligence;

   (c) user profiling;

   (d) using Match Data to infer or analyze behavioral patterns of GitHub users, repository populations, or ecosystem characteristics; or

   (e) building databases of GitHub users who use Partner's service.

### 4.3 Private Repository Data

If Match Data originates from a private repository, Partner acknowledges that the data may be subject to additional legal requirements, including data protection agreements between GitHub and the repository owner. Partner shall apply the same or greater protections to private-repository Match Data as it applies to public-repository Match Data under this agreement.

## 5. Security

5.1 Partner shall maintain reasonable security measures for Partner Endpoint(s).

5.2 GitHub shall maintain commercially reasonable security measures to protect Token Patterns from unauthorized disclosure. This obligation does not apply to Token Patterns that GitHub has distributed under Section 2.2(b) or that are otherwise publicly available.

## 6. Confidentiality of Match Data

6.1 Partner shall treat Match Data as confidential information. Partner's obligations under this Section 6 apply in addition to, and not in place of, any obligations Partner may have under a Microsoft NDA (as defined in Section 1) or any successor nondisclosure agreement between Partner and Microsoft Corporation or its affiliates. If there is a conflict between this Section 6 and any such nondisclosure agreement regarding the treatment of Match Data, the more restrictive obligation governs.

6.2 Partner acknowledges that GitHub Metadata may reveal GitHub usernames, repository names, and file paths, and that aggregated Match Data (whether aggregated across multiple deliveries, users, or time periods) could reveal patterns about GitHub users. Partner shall take these risks into account when implementing its security and access-control measures under this agreement.

6.3 Partner shall not analyze or process Match Data for the purpose of identifying repository structures, file paths, secret-usage trends, or commit-level activity.

### 6.4 Breach Notification

Partner shall notify GitHub without undue delay, and in any event within 72 hours, upon becoming aware of any unauthorized access to, disclosure of, or loss of Match Data. The notification shall include, to the extent known: (a) the nature of the incident; (b) the categories and approximate volume of Match Data affected; and (c) the measures taken or proposed to mitigate the incident.

## 7. Data Retention and Deletion

7.1 Partner shall delete GitHub Metadata within 30 days after completing the validity check and any resulting revocation or notification actions under Section 4.

7.2 Section 7.1 does not apply to the Detected Credential value, including all components of a multi-part credential. These values are Partner's own customer credentials, and Partner's own data-retention policies govern retention of those values.

## 8. No Onward Sharing

8.1 Partner shall not disclose, forward, or otherwise make available Match Data to any third party, including Partner's affiliates, vendors, or subcontractors.

8.2 Section 8.1 does not prohibit Partner from disclosing Match Data if required by applicable law, if Partner:

   (a) notifies GitHub in advance of the required disclosure to the extent permitted by law; and

   (b) discloses only the minimum information legally required.

## 9. GitHub Intellectual Property and Marks

### 9.1 Ownership

Partner acknowledges that GitHub retains all right, title, and interest in and to the GitHub Marks and all other intellectual property owned or controlled by GitHub. Nothing in this agreement transfers or assigns any ownership interest in GitHub's intellectual property to Partner.

### 9.2 Limited Use of GitHub Marks

Partner may reference the Program by name (e.g., "GitHub Secret Scanning Partner") solely for the following purposes:

   (a) identifying Partner's participation in the Program on Partner's website, blog, or marketing materials; and

   (b) directing Partner's users to GitHub's documentation regarding the Program.

### 9.3 Restrictions on Use of GitHub Marks

Partner shall not:

   (a) use any GitHub Mark as part of Partner's own product name, service name, domain name, or social-media handle;

   (b) alter, animate, distort, or otherwise modify any GitHub Mark;

   (c) combine any GitHub Mark with Partner's own marks or logos in a manner that suggests co-branding, endorsement, or sponsorship by GitHub without GitHub's prior written consent;

   (d) use any GitHub Mark in a manner that implies that GitHub endorses, certifies, or guarantees Partner's products or services; or

   (e) register, or attempt to register, any trademark, domain name, or social-media handle that is confusingly similar to any GitHub Mark.

### 9.4 Brand Guidelines

Partner's use of GitHub Marks must comply with GitHub's then-current trademark and logo usage guidelines, as published at [https://brand.github.com/guides/getting-started](https://brand.github.com/guides/getting-started).

### 9.5 No Implied Rights

Except for the limited reference right in Section 9.2, this agreement does not grant Partner any license or right to use the GitHub Marks. All goodwill arising from Partner's authorized use of the GitHub Marks inures solely to GitHub's benefit.

### 9.6 Public Disclosure of Credential Types

Partner acknowledges that GitHub may publicly disclose Partner's supported credential types in GitHub documentation, dashboards, or program materials.

## 10. Compliance with Applicable Laws

10.1 Partner shall comply with all applicable laws in connection with its participation in the Program, including any laws governing the handling of credential data, breach notification, and data protection.

10.2 Each party shall comply with applicable export-control and sanctions laws in connection with the Program.

## 11. Feedback Mechanism

11.1 Partner may, at its sole discretion, provide Feedback Data to GitHub.

11.2 GitHub's rights with respect to Feedback Data are set forth in Section 2.4. GitHub owes no additional compensation or obligation to Partner for its use of Feedback Data.

## 12. Modifications

### 12.1 Incorporation of Program Documentation

The Program Documentation is part of this agreement. If there is a conflict between the body of this agreement and the Program Documentation, the body of this agreement governs.

### 12.2 Amendments to this Agreement

GitHub may amend this agreement (including the Program Documentation) at any time by posting a revised version to [https://docs.github.com/code-security/secret-scanning/secret-scanning-partner-program](/code-security/secret-scanning/secret-scanning-partner-program) and providing Partner at least 30 days' advance notice via email to the address Partner provided during onboarding. Partner's continued participation in the Program following the 30-day notice period constitutes Partner's acceptance of that amendment. Partner may terminate this agreement under Section 16.2 before the amendment takes effect.

### 12.3 Program Changes

GitHub may, in its sole discretion and without prior notice, modify, suspend, or discontinue the Program or any part of it. GitHub shall not be liable to Partner or to any third-party for any modification, suspension, or discontinuation of the Program.

## 13. Indemnification

Each party (as indemnifying party) shall defend, indemnify, and hold harmless the other party, its affiliates, and their respective officers, directors, employees, and agents from and against any third-party claim, loss, damage, or expense (including reasonable attorneys' fees) arising out of the indemnifying party's material breach of this agreement or violation of applicable law in connection with the Program, provided that the indemnified party (a) notifies the indemnifying party promptly in writing, (b) grants the indemnifying party sole control of the defense and settlement, and (c) provides reasonable cooperation at the indemnifying party's expense.

## 14. Disclaimers

### 14.1 No Warranties

To the maximum extent permitted by applicable law, GitHub provides the Program, the Match Data, and all related services, materials, and documentation on an **"as-is"** and **"as-available"** basis, **without warranties or conditions of any kind, whether express, implied, or statutory**. GitHub specifically **disclaims all implied warranties and conditions**, including those of **merchantability**, **fitness for a particular purpose**, **title**, **non-infringement**, accuracy, availability, and any warranties arising from course of dealing, usage of trade, or course of performance.

### 14.2 No Performance Guarantees

Without limiting Section 14.1, GitHub does not warrant that (a) token detection or pattern matching will be accurate, complete, timely, or error-free, (b) the Program will be uninterrupted or available at any time, or (c) defects will be corrected.

## 15. Limitation of Liability

### 15.1 Damages Waiver

To the maximum extent permitted by applicable law, neither party is liable to the other party for any indirect, incidental, special, consequential, punitive, or exemplary damages, or for any damages for loss of profits, revenue, goodwill, data, or use, arising out of or relating to this agreement, however caused and regardless of the theory of liability, even if the party has been advised of the possibility of those damages.

### 15.2 Liability Cap

To the maximum extent permitted by applicable law, GitHub's total cumulative liability to Partner for all claims arising out of or relating to this agreement, whether in contract, tort, or otherwise, will not exceed one hundred U.S. dollars (US $100).

### 15.3 Basis of the Bargain

Partner acknowledges that the limitations in this Section 15 reflect the allocation of risk between the parties and that GitHub would not enter into this agreement without these limitations. The limitations in this Section 15 apply even if a limited remedy does not achieve its intended purpose.

### 15.4 Exclusions from Cap

Section 15.2 does not apply to:

   (a) Partner's breach of Section 4 (Purpose Limitation on Match Data), Section 6 (Confidentiality of Match Data), or Section 8 (No Onward Sharing);

   (b) GitHub's use of Token Patterns outside the scope of the licenses granted in Section 2.2;

   (c) either party's indemnification obligations under Section 13;

   (d) either party's willful misconduct or fraud; or

   (e) any liability that applicable law does not permit to be limited.

## 16. Term, Termination, and Survival

### 16.1 Term

This Agreement is effective on the date Partner accepts it and continues until terminated under Sections 16.2 or 16.3.

### 16.2 Termination

Either party may terminate this agreement for convenience by providing at least 30 days' written notice to the other party. Upon notice, the parties agree to reasonably document ongoing remediation workflows for any outstanding Detection Notifications.

### 16.3 Termination for Cause

   (a) GitHub may terminate this agreement immediately on written notice if Partner breaches Section 4 (Purpose Limitation on Match Data), Section 6 (Confidentiality of Match Data), or Section 8 (No Onward Sharing).

   (b) Either party may terminate this agreement on written notice if the other party materially breaches any other provision of this agreement and fails to cure the breach within 30 days after receiving written notice specifying the breach in reasonable detail.

   (c) Following termination under this Section 16.3, Partner shall complete any credential revocation or user notification already in progress at the time of termination and shall then delete GitHub Metadata in accordance with Section 7.

### 16.4 Immediate Suspension

GitHub may suspend Partner's participation immediately, without the cure period in Section 3.1, if Partner's non-compliance creates an imminent security risk to GitHub users. GitHub shall notify Partner of the suspension and the reason for it. If Partner cures the non-compliance within 15 days of notice, GitHub shall reinstate Partner's participation. If Partner does not cure within 15 days, either party may terminate this agreement on written notice.

## 17. Miscellaneous

### 17.1 Governing Law

This agreement is governed by the laws of the State of California, without regard to its conflict-of-laws principles.

### 17.2 Jurisdiction

Each party irrevocably submits to the exclusive jurisdiction of the state and federal courts located in San Francisco County, California for any action arising out of or relating to this agreement.

### 17.3 Waiver of Jury Trial

**Each party irrevocably waives any right to a jury trial in any action arising out of or relating to this agreement.**

### 17.4 Survival

The following provisions survive expiration or termination of this agreement:

   (a) Section 2 (License) — Section 2.1 (Ownership), Section 2.2 (Token Patterns License), Section 2.4 (Feedback Data License), Section 2.6 (Partner Representations), and Section 2.7 (No Revocation) survive indefinitely; Section 2.3 (Onboarding Materials License) survives for 30 days after termination;

   (b) Section 4 (Purpose Limitation on Match Data) — survives for one year after termination;

   (c) Section 5 (Security) — survives for as long as GitHub retains non-public Token Patterns;

   (d) Section 6 (Confidentiality of Match Data) — survives for one year after termination;

   (e) Section 7 (Data Retention and Deletion) — Partner shall complete deletion within 30 days after termination;

   (f) Section 8 (No Onward Sharing) — survives for one year after termination;

   (g) Section 9 (GitHub IP and Marks) — survives indefinitely;

   (h) Section 13 (Indemnification) — survives indefinitely;

   (i) Section 14 (Disclaimers) — survives indefinitely;

   (j) Section 15 (Limitation of Liability) — survives indefinitely;

   (k) Section 16.2 (post-termination remediation documentation obligation) — survives for 30 days after termination;

   (l) Sections 17.1 (Governing Law), 17.2 (Jurisdiction), and 17.3 (Waiver of Jury Trial) — survive indefinitely;

   (m) Section 18 (Assignment) — survives indefinitely;

   (n) Section 19 (Notices) — survives indefinitely;

   (o) Section 20 (Entire Agreement) — survives indefinitely.

## 18. Assignment

Neither party may assign this agreement without the other party's prior written consent, except that either party may assign this agreement without consent in connection with a merger, acquisition, or sale of all or substantially all its assets, provided the assignee assumes all obligations under this agreement. Any purported assignment in violation of this section is void.

## 19. Notices

All notices under this agreement must be in writing and sent by email. Notices to GitHub must be sent to [secret-scanning@github.com](mailto:secret-scanning@github.com). Notices to Partner must be sent to the email address Partner provided during onboarding. A notice is deemed received on the business day after it is sent.

## 20. Entire Agreement

This Agreement, together with the Microsoft NDA (if applicable), constitutes the entire agreement between the parties regarding the Program and supersedes all prior or contemporaneous understandings regarding the Program.
