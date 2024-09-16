---
title: GitHub Copilot Extension Developer Policy
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

> Last Updated: September 6, 2024

This Agreement is a legal agreement between you (“You”) and GitHub, Inc. (“GitHub”, “we”, or “us”). By clicking “I Agree”, you’re agreeing to be bound by all the terms of this Agreement. If you are entering into this Agreement on behalf of a company or other legal entity, you represent that you have the legal authority to bind the entity to this Agreement, in which case “You” will mean the entity you represent.

GitHub is fortunate to have many developers integrating with the GitHub Copilot Extensibility Platform (“Platform”). We think that’s awesome, and we want to make that experience even better. While we can’t cover every type of GitHub Copilot Extension (“Extension”), we do want to lay some ground rules and policies to ensure that You are developing Your Extension with privacy, safety, transparency, and security at the forefront of the User experience.

To protect Users, we reserve the right to take any action we deem necessary if an Extension violates the letter or spirit of this Agreement. By “User” we mean any “User” as defined in our Terms of Service (TOS). By “Personal Data” we means any information which relates to an individual “User”, customer or employee which could, alone or together with other information, identify them as well as content, including, but not limited to, code, text, data uploaded, posted, User inputs, and Extension outputs, transmitted or otherwise made available by Users via the Platform.

## 1. Services

By using our Platform, you agree to adhere to this policy and all GitHub terms and policies incorporated by reference. You must also adhere to all technical specifications and requirements published by GitHub. GitHub may update this Agreement and any requirements at any time, and you should periodically review this Agreement and all technical specifications and requirements to ensure compliance with the most recent version. So long as you remain compliant with this Agreement and associated requirements within, we grant you a limited, worldwide, non-exclusive, non-transferable license during the term of the Agreement to access and use the Platform for the purpose of publishing, developing, demonstrating, testing and supporting interoperability and integrations between Your Extension and GitHub Copilot.

GitHub reserves the right at any time to modify or discontinue, temporarily or permanently, Your access to the Platform (or any part of it) with or without notice. It’s your sole responsibility to ensure that your use of the Platform is compatible with the then-current Platform. Other than the rights we expressly give you in this Agreement or the TOS, We don’t grant you any rights or licenses to GitHub Copilot, or to any other GitHub products or services.

Violations of this Agreement may result in removing the Extension from the Platform, token revocation, Account or Extension suspension, User notification, legal action or any other action deemed necessary by Us. If requested, You must provide us with proof of compliance with this Agreement. If You violate this Agreement we may or may not provide notice before taking action. Appeals may be submitted via the GitHub Appeal and Reinstatement Process. Please note that we may periodically audit Extensions and collect information about Users using Your Extension.

## 2. Developing your Extension

While we want You to develop useful, fun, and interesting Extensions with GitHub Copilot, we want to make sure that our Users receive a safe, secure, productive, and enjoyable experience. When creating Extensions, you must understand the use cases and limitations of GitHub Copilot, and not rely on it for tasks where its use could lead to significant harm. With that in mind, You are required to comply with this Policy and other obligations.

**Terms of Service**: Your Extension must comply with the GitHub Terms of Service (ToS) including the Acceptable Use Policy.

**Security**: We take the security of Personal Data seriously and you must as well. As you develop your Extension, You must properly configure your systems to protect Personal Data and ensure that any stored Personal Data is encrypted. Furthermore, Extensions and developers must not:

* Degrade or compromise security
* Bypass or circumvent protocols and access controls
* Use unpublished APIs
* Mislead and/or deceive Users about Extension functionality, performance, origin or Personal Data use
* Transmit any viruses or other code that may damage, detrimentally interfere with, surreptitiously intercept or expropriate any system or Personal Data
* Attempt to reverse engineer or otherwise derive source code, trade secrets, or know-how of the Platform or any portion thereof

**Use of Personal Data**: Protecting User privacy is paramount at GitHub, and must be for you. You are responsible for good Personal Data practices. You do not have independent rights to any Personal Data. In accordance with this, Extensions and developers are prohibited from:

* Collecting, storing, and using Personal Data without obtaining proper User consent
* Utilizing Personal Data to contact Users. You must gain permission through a clear and separate permissions process to contact Users outside of GitHub. Contacting Users is limited to emergencies in which the User’s safety and security is at risk and in compliance with the law
* Requesting Users to provide sensitive, private, and confidential information, such as credit card numbers or passwords except when specifically necessary for the legitimate purpose of the Extension
* Renting, selling or sharing Personal Data with third parties under any circumstances
* Developing Extensions that encourage Users to circumvent or interfere with their own workplace and employer data, privacy and security policies
* Using Personal Data to create User profiles beyond what is necessary for the Extension to function
* Ignoring a User’s request for deletion. When a User deletes your Extension, if you discontinue Your Extension, or Your Extension is removed you must delete all associated Personal Data within thirty days
* Merging Personal Data with data gathered from other sources for purposes unrelated to the use of the Extension including building databases or otherwise creating copies of any Personal Data accessed or obtained using the Platform
* Failing to notify Users about privacy and their Personal Data. You must provide Users an easily accessible and publicly-available privacy policy that explains how the Extension collects, uses, processes and stores Personal Data, and what control Users have over their Personal Data
* Accessing Data for surveillance purposes. You may not allow or assist any entity to conduct surveillance or obtain Personal Data using your access to the Platform
* Otherwise exploiting Personal Data in a way not approved by GitHub and not disclosed to and permitted by Users. You may, however, use Data that is both aggregated and anonymized for purposes of analytics and development related to the Extension

**Law and Safety**: Extensions should not create unsafe environments or hardships for Users. Each Extension must comply with all applicable laws and legal requirements in all locations where it is made available to Users. In addition, Extensions and developers are prohibited from:

* Inferring people’s emotional states from their physical, physiological, or behavioral characteristics
* Inferring people’s sensitive attributes such as gender, race, nationality, religion, or specific age (not including age range, position of mouth (e.g., smile or frown), and hair color)
* Categorizing people based on their biometric data or to infer characteristics or affiliations about them such as race, political opinions, trade union membership, religious or philosophical beliefs, or sex life or sexual orientation
* Social scoring or predictive profiling that would lead to discriminatory, unfair, biased, detrimental, unfavorable, or harmful treatment of certain persons or groups of persons
* Exploiting any of the vulnerabilities of a person (e.g., age, disability, or socio-economic situation)
* For any real-time facial recognition technology on mobile cameras used by any law enforcement globally to attempt to identify individuals in uncontrolled, "in the wild" environments, which includes (without limitation) police officers on patrol using body-worn or dash-mounted cameras using facial recognition technology to attempt to identify individuals present in a database of suspects or prior inmates
* Without the individual’s valid consent, for ongoing surveillance or real-time or near real-time identification or persistent tracking of the individual using any of their personal information, including biometric data

**Transparency**: GitHub Copilot is a generative artificial intelligence (AI) tool intended to increase developer productivity. You must inform Users of Your Extensions intended use cases, best practices, and limitations as well as when they are interacting with generative AI content. Furthermore, Extensions and developers must:

* Test the Extension to ensure outputs do not violate this Agreement
* Provide a mechanism for Users to report feedback to You and GitHub related to errors, bugs, improper, or undesired outputs
* Inform Users of Extension capabilities so that Users can provide the appropriate level of human oversight
* Request only the appropriate and necessary permissions and clearly define the need for permissions within your Extension’s description

## 3. Your GitHub Copilot Extension

Your Extensions are your responsibility. That means that you’re solely responsible for developing, operating, and maintaining all aspects of your Extensions; ensuring that all materials used with or in your Extensions are legal in all the jurisdictions where your Extensions are used, and don’t promote illegal activities; obtaining any rights or licenses necessary to use and/or distribute any third-party software that you use, include, integrate, or distribute with your Extensions; and providing your end user customers with the same high-quality technical support for your Extensions when they operate in conjunction with the Platform or any other of our products and services as you do when they operate on their own.

## 4. Marketing and Publicity

Marketing and publicizing your integrations with GitHub is valuable to both of us. We want to be sure that happens in the right way, so we’ve included some language here to help clarify some basic “dos” and “don’ts”.

You agree that you won’t make any representations, warranties, guarantees or endorsements to anyone on behalf of GitHub (including, among other things, any GitHub products or services). Unless we specifically say it’s okay you promise not to state or imply that we have developed, endorsed, reviewed or otherwise approved of any of your Extensions.

If you decide to promote or publicize any of our products or services in connection with your Extensions, you’ll need to make sure that you abide by the terms of this Agreement, the TOS, our trademark policy, and any other applicable GitHub policies. Subject to the terms and conditions of this Agreement and the TOS, and during the term of this Agreement, we grant you a limited, revocable, worldwide, non-exclusive, non-transferable license to use our trademarks, service marks, and logos (collectively, the “GitHub Marks”) in accordance with our trademark policy.

Except as set forth in this Agreement and the TOS, nothing in this Agreement will be deemed to grant to one party any right, title or interest in or to the other party’s Marks. You agree not to, whether during or after the term of this Agreement: (i) challenge or assist others in challenging the GitHub Marks, or our registration or enforcement of the GitHub Marks; (ii) attempt to adopt, use, apply for, or register any trademark, service mark, logo, URL, Internet domain name, or symbol that is confusingly similar to the GitHub Marks; or (iii) make any negative, false, or disparaging statements (whether written or oral) to any third-party about us, our products, or our services.

## 5. Pre-Release Materials

You may get access to special information not available to the rest of the world. Due to the sensitive nature of this information, it’s important for us to make sure that you keep that information secret.

If We give you any access to pre-release software or related documentation or materials, which may include videos or other forms of content (“Pre-release Materials”), then subject to your compliance with the terms and conditions of this Agreement, the TOS, and Pre-Release License Terms we hereby grant you a nonexclusive, nontransferable, revocable right and license to use the Pre-release Materials solely to support your testing and/or development of Extensions that are designed to operate in combination with the Platform for which the Pre-release Materials are designed.

## 6. Term and Termination

You may terminate the Agreement by discontinuing use of the Platform. We may terminate this Agreement for any reason and without notice. This Agreement will terminate immediately, without the requirement of notice, if you breach any term of this Agreement.

The rights and obligations in Sections 1, 2, 3, 4 (second and last paragraphs), 5, and 7 through 19 of this Agreement will survive the termination of this Agreement. Upon termination of this Agreement all of the rights and licenses we granted you in this Agreement will immediately cease to exist, you will return (or, at our request, destroy) all of our Pre-release materials and any copies (including electronic copies) which are in your possession or control, and you will certify in writing that you’ve complied with these requirements.

## 7. Warranties and Disclaimers

You warrant to us that you: (i) have the authority to execute this Agreement and to perform its obligations; (ii) will conduct business in a manner that reflects favorably at all times on GitHub’s products and services and our good name, goodwill and reputation; (iii) will make no false or misleading statements or representations regarding GitHub or our products and services; (iv) will not take on any obligation or responsibility, or make any representation, warranty, guarantee or endorsement to anyone on our behalf (including, without limitation, any of our products or services); and (v) will not state or imply that We have developed, endorsed, reviewed or otherwise approved of any of your Products.

The Platform and any Pre-release Materials We give You are provided “As Is”, and without warranty of any kind, express or implied. We specifically disclaim any and all implied warranties or conditions of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that any Service or Products we make available to you will meet Your or Your User’s requirements.

## 8. Indemnity

To the maximum extent permitted by applicable law, You agree to defend, indemnify and hold harmless GitHub, its affiliates and their respective directors, officers, employees and agents from and against any and all claims, actions, suits or proceedings, as well as any losses, liabilities, damages, costs and expenses (including reasonable attorneys’ fees) arising from or relating to (a) Your use of the Platform in violation of this Agreement, the Terms or any applicable laws or regulations; (b)Your Extensions that infringe any copyright, trademark, trade secret, patent or other intellectual property right of any third party; (c) any loss or disclosure of data or Personal Data by Your Extension; and (d) Your EULA (or ToS).

## 9. Limitation of Liability

Under no circumstances and under no legal theory (whether in contract, tort, negligence or otherwise) will GitHub, or its affiliates, officers, directors, employees, agents, or suppliers be liable to developer or any third party under this agreement for any indirect, incidental, special, exemplary, consequential, punitive or other similar damages, including lost profits, lost sales or business, lost data, business interruption or any other loss incurred by Developer or any third party in connection with this Agreement, regardless of whether Developer has been advised of the possibility of or could have foreseen such damages notwithstanding anything to the contrary in this Agreement, GitHub’s aggregate liability to Developer or any third party arising out of this Agreement shall not exceed $500 (five hundred) USD.

## 10. Export Control

You aren’t allowed to export or re-export any of our Pre-release Material, except as authorized by United States law and the laws of the jurisdiction in which the Confidential Information was obtained. In particular, you aren’t allowed to export or re-export our Confidential Information into any U.S. embargoed countries, to anyone on the U.S. Treasury Department's list of Specially Designated Nationals, or to anyone on the U.S. Department of Commerce Denied Person's List or Entity List. By using the Platform or receiving any of our Pre-release Material, you represent and warrant that you are not located in any such country or on any such list.

## 11. Proprietary Rights

You agree that GitHub and its licensors own all right, title and interest in and to the Platform, the Pre-release Materials, and all other GitHub Products and Services; all information and data relating to their configurations and combinations; and all modifications to and derivative works of any of the foregoing. You agree not to remove, alter, cover or obfuscate any copyright or other proprietary rights notices we place on or embed in the Platform, the Pre-release Materials, or any other GitHub Products and Services.

## 12. Government Users

If you are a Government entity, this Section applies to you. Certain of our Confidential Information may be considered “Commercial Items”, as that term is defined at 48 C.F.R. §2.101, consisting of “Commercial Computer Software” and “Commercial Computer Software Documentation”, as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. GitHub, Inc. 88 Colin P. Kelly Street, San Francisco, CA 94107.

## 13. Independent Development

Nothing in this Agreement will impair our right to develop, acquire, license, market, promote or distribute products, software or technologies that may compete with your Extensions.

## 14. Feedback

We’re always trying to improve, and your feedback will help us do that. If you choose to give us feedback, suggestions or recommendations for the Platform or for our Products or Services (collectively, “Feedback”), you acknowledge and agree that we’re free to use that Feedback in any way we want, without restriction (subject to any applicable patents or copyrights, of course).

## 15. Independent Contractors

The parties to this Agreement are independent contractors. Neither of us will be deemed to be an employee, agent, partner, franchisor, franchisee or legal representative of the other for any purpose and neither of us will have any right, power or authority to create any obligation or responsibility on behalf of the other.

## 16. Assignment

You aren’t allowed to assign or transfer this Agreement, or any of your rights under it, in whole or in part, by operation of law or otherwise, without our prior written consent.

## 17. Governing Law and Venue

This Agreement will be interpreted and construed in accordance with the laws of the State of California, without regard to conflict of law principles. All disputes arising out of this Agreement will be subject to the exclusive jurisdiction of the state and federal courts located in San Francisco County, California, and each of us hereby consents to personal jurisdiction there.

## 18. Amendments; Waivers; No Third-Party Beneficiaries

This Agreement may not be changed, except by a writing signed by both parties. Any waiver of the provisions of this Agreement or of a party's rights or remedies under this Agreement must be in writing to be effective. If any term, condition, or provision in this Agreement is found to be invalid or unenforceable, the remaining terms will continue to be valid and enforceable to the fullest extent permitted by law. We each expressly agree that there are no third-party beneficiaries to this Agreement.

## 19. Entire Agreement

This Agreement and the TOS, contain the entire agreement of the parties with respect to its subject matter and supersede all prior communications, representations, understandings and agreements, whether written or oral.
