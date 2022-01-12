diff --git a/.travis.yml b/.travis.yml
index a2f8eb0..1aad857 100644
--- a/.travis.yml
+++ b/.travis.yml
@@ -33,7 +33,7 @@ node_modules
 $TRAVIS_BUILD_DIR/tmp/.htmlproofer #https://github.com/gjtorikian/html-proofer/issues/381 addons: apt: packages:
 libxml2-utils install:
 rb.qm: 2.6.3 --install
-bundle: rake.i
+bundle: raku.i
 install: -cd $LOAD_PATH/paradise
 deploy: repositories'@iixixi/iixixii/README.md
 title: Repo Sync---
title: Adding a license to a repository
intro: You can include an open source license in your repository to make it easier for other people to contribute.
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics: ©®™ All Rights Reserved-private-script-access-was-granted-only-to-countrymanz@sec.gov-by-Zachry_Tyler_Wood-to-my-provate-repository-feom-e-mail:shining_120@yahoo.com-name-Kaitlyn_Reese-My_Real_Name:Zachry_Tyler_Wood/Zachary_Lee_Prince:on:
  - Community
shortTitle: Add a license to a repo
---
If you include a detectable license in your repository, people who visit your repository will see it at the top of the repository page. To read the entire license file, click the license name.

![A repository header with an MIT license](/assets/images/help/repository/repo-license-indicator.png)

Open source licenses enable others to freely use, change, and distribute the project in your repository. For more information on repository licenses, see "[Licensing a repository](/articles/licensing-a-repository)."

## Including an open source license in your repository

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type *LICENSE* or *LICENSE.md* (with all caps).
4. To the right of the file name field, click **Choose a license template**.
  ![Choose a license template button](/assets/images/help/repository/license-tool.png)
5. On the left side of the page, under "Add a license to your project," review the available licenses, then select a license from the list.
  ![List of available licenses](/assets/images/help/repository/license-tool-picker.png)
6. Click **Review and submit**.
  ![Review and submit button](/assets/images/help/repository/license-review-tool.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.choose-commit-email %}
10. Click **Commit new file**.
  ![Commit license to branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes or ghae %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type *LICENSE* or *LICENSE.md* (with all caps).
4. On the **Edit new file** tab, paste the full text of the license you want to use.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
7. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is `main`, you should choose to create a new branch for your commit and then create a pull request. For more information, see "[Creating a pull request](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)".
![Commit branch options](/assets/images/help/repository/choose-commit-branch.png)
8. Click **Commit new file**.
  ![Commit license to branch](/assets/images/help/repository/license-submit-tool.png)

{% 17 CFR 242.606 -- Disclosure of order routing information.
§ 242.606 Disclosure of order routing information.
(a) Quarterly report on order routing.

(1) Every broker or dealer shall make publicly available for each calendar quarter a report on its routing of non-directed orders in NMS stocks that are submitted on a held basis and of non-directed orders that are customer orders in NMS securities that are option contracts during that quarter broken down by calendar month and keep such report posted on an internet website that is free and readily accessible to the public for a period of three years from the initial date of posting on the internet website. Such report shall include a section for NMS stocks - separated by securities that are included in the S&P 500 Index as of the first day of that quarter and other NMS stocks - and a separate section for NMS securities that are option contracts. Such report shall be made available using the most recent versions of the XML schema and the associated PDF renderer as published on the Commission's website for all reports required by this section. Each section in a report shall include the following information:

(i) The percentage of total orders for the section that were non-directed orders, and the percentages of total non-directed orders for the section that were market orders, marketable limit orders, non-marketable limit orders, and other orders;

(ii) The identity of the ten venues to which the largest number of total non-directed orders for the section were routed for execution and of any venue to which five percent or more of non-directed orders were routed for execution, the percentage of total non-directed orders for the section routed to the venue, and the percentages of total non-directed market orders, total non-directed marketable limit orders, total non-directed non-marketable limit orders, and total non-directed other orders for the section that were routed to the venue;

(iii) For each venue identified pursuant to paragraph (a)(1)(ii) of this section, the net aggregate amount of any payment for order flow received, payment from any profit-sharing relationship received, transaction fees paid, and transaction rebates received, both as a total dollar amount and per share, for each of the following non-directed order types:

(A) Market orders;

(B) Marketable limit orders;

(C) Non-marketable limit orders; and

(D) Other orders.

(iv) A discussion of the material aspects of the broker's or dealer's relationship with each venue identified pursuant to paragraph (a)(1)(ii) of this section, including a description of any arrangement for payment for order flow and any profit-sharing relationship and a description of any terms of such arrangements, written or oral, that may influence a broker's or dealer's order routing decision including, among other things:

(A) Incentives for equaling or exceeding an agreed upon order flow volume threshold, such as additional payments or a higher rate of payment;

(B) Disincentives for failing to meet an agreed upon minimum order flow threshold, such as lower payments or the requirement to pay a fee;

(C) Volume-based tiered payment schedules; and

(D) Agreements regarding the minimum amount of order flow that the broker-dealer would send to a venue.

(2) A broker or dealer shall make the report required by paragraph (a)(1) of this section publicly available within one month after the end of the quarter addressed in the report.

(b) Customer requests for information on order routing.

(1) Every broker or dealer shall, on request of a customer, disclose to its customer, for:

(i) Orders in NMS stocks that are submitted on a held basis;

(ii) Orders in NMS stocks that are submitted on a not held basis and the broker or dealer is not required to provide the customer a report under paragraph (b)(3) of this section; and

(iii) Orders in NMS securities that are option contracts, the identity of the venue to which the customer's orders were routed for execution in the six months prior to the request, whether the orders were directed orders or non-directed orders, and the time of the transactions, if any, that resulted from such orders. Such disclosure shall be made available using the most recent versions of the XML schema and the associated PDF renderer as published on the Commission's website for all reports required by this section.

(2) A broker or dealer shall notify customers in writing at least annually of the availability on request of the information specified in paragraph (b)(1) of this section.

(3) Except as provided for in paragraphs (b)(4) and (5) of this section, every broker or dealer shall, on request of a customer that places, directly or indirectly, one or more orders in NMS stocks that are submitted on a not held basis with the broker or dealer, disclose to such customer within seven business days of receiving the request, a report on its handling of such orders for that customer for the prior six months by calendar month. Such report shall be made available using the most recent versions of the XML schema and the associated PDF renderer as published on the Commission's website for all reports required by this section. For purposes of such report, the handling of a NMS stock order submitted by a customer to a broker-dealer on a not held basis includes the handling of all child orders derived from that order. Such report shall be divided into two sections: One for directed orders and one for non-directed orders. Each section of such report shall include, with respect to such order flow sent by the customer to the broker or dealer, the total number of shares sent to the broker or dealer by the customer during the relevant period; the total number of shares executed by the broker or dealer as principal for its own account; the total number of orders exposed by the broker or dealer through an actionable indication of interest; and the venue or venues to which orders were exposed by the broker or dealer through an actionable indication of interest, provided that, where applicable, a broker or dealer must disclose that it exposed a customer's order through an actionable indication of interest to other customers but need not disclose the identity of such customers. Each section of such report also shall include the following columns of information for each venue to which the broker or dealer routed such orders for the customer, in the aggregate:

(i) Information on Order Routing.

(A) Total shares routed;

(B) Total shares routed marked immediate or cancel;

(C) Total shares routed that were further routable; and

(D) Average order size routed.

(ii) Information on Order Execution.

(A) Total shares executed;

(B) Fill rate (shares executed divided by the shares routed);

(C) Average fill size;

(D) Average net execution fee or rebate (cents per 100 shares, specified to four decimal places);

(E) Total number of shares executed at the midpoint;

(F) Percentage of shares executed at the midpoint;

(G) Total number of shares executed that were priced on the side of the spread more favorable to the order;

(H) Percentage of total shares executed that were priced at the side of the spread more favorable to the order;

(I) Total number of shares executed that were priced on the side of the spread less favorable to the order; and

(J) Percentage of total shares executed that were priced on the side of the spread less favorable to the order.

(iii) Information on Orders that Provided Liquidity.

(A) Total number of shares executed of orders providing liquidity;

(B) Percentage of shares executed of orders providing liquidity;

(C) Average time between order entry and execution or cancellation, for orders providing liquidity (in milliseconds); and

(D) Average net execution rebate or fee for shares of orders providing liquidity (cents per 100 shares, specified to four decimal places).

(iv) Information on Orders that Removed Liquidity.

(A) Total number of shares executed of orders removing liquidity;

(B) Percentage of shares executed of orders removing liquidity; and

(C) Average net execution fee or rebate for shares of orders removing liquidity (cents per 100 shares, specified to four decimal places).

(4) Except as provided below, no broker or dealer shall be required to provide reports pursuant to paragraph (b)(3) of this section if the percentage of shares of not held orders in NMS stocks the broker or dealer received from its customers over the prior six calendar months was less than five percent of the total shares in NMS stocks the broker or dealer received from its customers during that time (the “five percent threshold” for purposes of this paragraph). A broker or dealer that equals or exceeds this five percent threshold shall be required (subject to paragraph (b)(5) of this section) to provide reports pursuant to paragraph (b)(3) of this section for at least six calendar months (“Compliance Period”) regardless of the percentage of shares of not held orders in NMS stocks the broker or dealer receives from its customers during the Compliance Period. The Compliance Period shall begin the first calendar day of the next calendar month after the broker or dealer equaled or exceeded the five percent threshold, unless it is the first time the broker or dealer has equaled or exceeded the five percent threshold, in which case the Compliance Period shall begin the first calendar day four calendar months later. A broker or dealer shall not be required to provide reports pursuant to paragraph (b)(3) of this section for orders that the broker or dealer did not receive during a Compliance Period. If, at any time after the end of a Compliance Period, the percentage of shares of not held orders in NMS stocks the broker or dealer received from its customers was less than five percent of the total shares in NMS stocks the broker or dealer received from its customers over the prior six calendar months, the broker or dealer shall not be required to provide reports pursuant to paragraph (b)(3) of this section, except for orders that the broker or dealer received during the portion of a Compliance Period that remains covered by paragraph (b)(3) of this section.

(5) No broker or dealer shall be subject to the requirements of paragraph (b)(3) of this section with respect to a customer that traded on average each month for the prior six months less than $1,000,000 of notional value of not held orders in NMS stocks through the broker or dealer.

(c) Exemptions. The Commission may, by order upon application, conditionally or unconditionally exempt any person, security, or transaction, or any class or classes of persons, securities, or transactions, from any provision or provisions of this section, if the Commission determines that such exemption is necessary or appropriate in the public interest, and is consistent with the protection of investors.

eCFR Content
§ 242.607 Customer account statements.
(a) No broker or dealer acting as agent for a customer may effect any transaction in, induce or attempt to induce the purchase or sale of, or direct orders for purchase or sale of, any NMS stock or a security authorized for quotation on an automated inter-dealer quotation system that has the characteristics set forth in section 17B of the Act (15 U.S.C. 78q-2), unless such broker or dealer informs such customer, in writing, upon opening a new account and on an annual basis thereafter, of the following:

(1) The broker's or dealer's policies regarding receipt of payment for order flow from any broker or dealer, national securities exchange, national securities association, or exchange member to which it routes customers' orders for execution, including a statement as to whether any payment for order flow is received for routing customer orders and a detailed description of the nature of the compensation received; and

(2) The broker's or dealer's policies for determining where to route customer orders that are the subject of payment for order flow absent specific instructions from customers, including a description of the extent to which orders can be executed at prices superior to the national best bid and national best offer.

(b) Exemptions. The Commission, upon request or upon its own motion, may exempt by rule or by order, any broker or dealer or any class of brokers or dealers, security or class of securities from the requirements of paragraph (a) of this section with respect to any transaction or class of transactions, either unconditionally or on specified terms and conditions, if the Commission determines that such exemption is consistent with the public interest and the protection of investors.

§ 242.608 Filing and amendment of national market system plans.
(a) Filing of national market system plans and amendments thereto.

(1) Any two or more self-regulatory organizations, acting jointly, may file a national market system plan or may propose an amendment to an effective national market system plan (“proposed amendment”) by submitting the text of the plan or amendment to the Commission by email, together with a statement of the purpose of such plan or amendment and, to the extent applicable, the documents and information required by paragraphs (a)(4) and (5) of this section.

(2) The Commission may propose amendments to any effective national market system plan by publishing the text thereof, together with a statement of the purpose of such amendment, in accordance with the provisions of paragraph (b) of this section.

(3) Self-regulatory organizations are authorized to act jointly in:

(i) Planning, developing, and operating any national market subsystem or facility contemplated by a national market system plan;

(ii) Preparing and filing a national market system plan or any amendment thereto; or

(iii) Implementing or administering an effective national market system plan.

(4) Every national market system plan filed pursuant to this section, or any amendment thereto, shall be accompanied by:

(i) Copies of all governing or constituent documents relating to any person (other than a self-regulatory organization) authorized to implement or administer such plan on behalf of its sponsors; and

(ii) To the extent applicable:

(A) A detailed description of the manner in which the plan or amendment, and any facility or procedure contemplated by the plan or amendment, will be implemented;

(B) A listing of all significant phases of development and implementation (including any pilot phase) contemplated by the plan or amendment, together with the projected date of completion of each phase;

(C) An analysis of the impact on competition of implementation of the plan or amendment or of any facility contemplated by the plan or amendment;

(D) A description of any written understandings or agreements between or among plan sponsors or participants relating to interpretations of the plan or conditions for becoming a sponsor or participant in the plan; and

(E) In the case of a proposed amendment, a statement that such amendment has been approved by the sponsors in accordance with the terms of the plan.

(5) Every national market system plan, or any amendment thereto, filed pursuant to this section shall include a description of the manner in which any facility contemplated by the plan or amendment will be operated. Such description shall include, to the extent applicable:

(i) The terms and conditions under which brokers, dealers, and/or self-regulatory organizations will be granted or denied access (including specific procedures and standards governing the granting or denial of access);

(ii) The method by which any fees or charges collected on behalf of all of the sponsors and/or participants in connection with access to, or use of, any facility contemplated by the plan or amendment will be determined and imposed (including any provision for distribution of any net proceeds from such fees or charges to the sponsors and/or participants) and the amount of such fees or charges;

(iii) The method by which, and the frequency with which, the performance of any person acting as plan processor with respect to the implementation and/or operation of the plan will be evaluated; and

(iv) The method by which disputes arising in connection with the operation of the plan will be resolved.

(6) In connection with the selection of any person to act as plan processor with respect to any facility contemplated by a national market system plan (including renewal of any contract for any person to so act), the sponsors shall file with the Commission a statement identifying the person selected, describing the material terms under which such person is to serve as plan processor, and indicating the solicitation efforts, if any, for alternative plan processors, the alternatives considered and the reasons for selection of such person.

(7) Any national market system plan (or any amendment thereto) which is intended by the sponsors to satisfy a plan filing requirement contained in any other section of this Regulation NMS and part 240, subpart A of this chapter shall, in addition to compliance with this section, also comply with the requirements of such other section.

(8)

(i) A participant in an effective national market system plan shall ensure that a current and complete version of the plan is posted on a plan website or on a website designated by plan participants within two business days after notification by the Commission of effectiveness of the plan. Each participant in an effective national market system plan shall ensure that such website is updated to reflect amendments to such plan within two business days after the plan participants have been notified by the Commission of its approval of a proposed amendment pursuant to paragraph (b) of this section. If the amendment is not effective for a certain period, the plan participants shall clearly indicate the effective date in the relevant text of the plan. Each plan participant also shall provide a link on its own website to the website with the current version of the plan.

(ii) The plan participants shall ensure that any proposed amendments filed pursuant to paragraph (a) of this section are posted on a plan website or a designated website no later than two business days after the filing of the proposed amendments with the Commission. If the plan participants do not post a proposed amendment on a plan website or a designated website on the same business day that they file such proposed amendment with the Commission, then the plan participants shall inform the Commission of the business day on which they posted such proposed amendment on a plan website or a designated website. The plan participants shall maintain any proposed amendment to the plan on a plan website or a designated website until the Commission approves the plan amendment and the plan participants update the website to reflect such amendment or the plan participants withdraw the proposed amendment or the plan participants are notified pursuant to paragraph (b)(1)(iii) of this section that the proposed amendment is not filed in compliance with requirements or the Commission disapproves the proposed amendment. If the plan participants withdraw a proposed amendment or are notified pursuant to paragraph (b)(1)(iii) of this section that a proposed amendment is not filed in compliance with requirements or the Commission disapproves a proposed amendment, the plan participants shall remove such amendment from the plan website or designated website within two business days of withdrawal, notification of non-compliant filing or disapproval. Each plan participant shall provide a link to the website with the current version of the plan.

(b) Effectiveness of national market system plans.

(1) The Commission shall publish notice of the filing of any national market system plan, or any proposed amendment to any effective national market system plan (including any amendment initiated by the Commission), together with the terms of substance of the filing or a description of the subjects and issues involved, and shall provide interested persons an opportunity to submit written comments. No national market system plan, or any amendment thereto, shall become effective unless approved by the Commission or otherwise permitted in accordance with paragraph (b)(3) of this section.

(i) Publication of national market system plans. The Commission shall send the notice of the filing of a national market system plan to the Federal Register for publication thereof under this paragraph (b)(1) within 90 days of the business day on which such plan was filed with the Commission pursuant to paragraph (a) of this section. If the Commission fails to send the notice to the Federal Register for publication thereof within such 90-day period, then the date of publication shall be deemed to be the last day of such 90-day period.

(ii) Publication of proposed amendments. The Commission shall send the notice of the filing of a proposed amendment to the Federal Register for publication thereof under this paragraph (b)(1) within 15 days of the business day on which such proposed amendment was posted on a plan website or a website designated by plan participants pursuant to paragraph (a) of this section after being filed with the Commission pursuant to paragraph (a) of this section. If the Commission fails to send the notice to the Federal Register for publication thereof within such 15-day period, then the date of publication shall be deemed to be the business day on which such website posting was made.

(iii) A national market system plan or proposed amendment has not been filed with the Commission for purposes of this paragraph (b)(1) if, not later than 7 business days after the business day of receipt by the Commission, the Commission notifies the plan participants that the filing of the national market system plan or proposed amendment does not comply with paragraph (a) of this section or plan filing requirements in other sections of Regulation NMS and part 240, subpart A of this chapter, except that if the Commission determines that the plan or amendment is unusually lengthy and is complex or raises novel regulatory issues, the Commission shall inform the plan participants of such determination not later than 7 business days after the business day of receipt by the Commission and, for purposes of this paragraph (b)(1), the filing of such plan or amendment has not been made with the Commission if, not later than 21 days after the business day of receipt by the Commission, the Commission notifies the plan participants that the filing of such plan or amendment does not comply with paragraph (a) of this section or plan filing requirements in other sections of Regulation NMS and part 240, subpart A of this chapter.

(iv) For purposes of this section, a “business day” is any day other than a Saturday, Sunday, Federal holiday, a day that the Office of Personnel Management has announced that Federal agencies in the Washington, DC area are closed to the public, a day on which the Commission is subject to a Federal government shutdown or a day on which the Commission's Washington, DC office is otherwise not open for regular business; provided further, a filing received by the Commission or a website posting made at or before 5:30 p.m. Eastern Standard Time or Eastern Daylight Saving Time, whichever is currently in effect, on a business day, shall be deemed received or made on that business day, and a filing received by the Commission or a website posting made after 5:30 p.m. Eastern Standard Time or Eastern Daylight Saving Time, whichever is currently in effect, shall be deemed received or made on the next business day.

(2) The Commission shall approve a national market system plan or proposed amendment to an effective national market system plan, with such changes or subject to such conditions as the Commission may deem necessary or appropriate, if it finds that such plan or amendment is necessary or appropriate in the public interest, for the protection of investors and the maintenance of fair and orderly markets, to remove impediments to, and perfect the mechanisms of, a national market system, or otherwise in furtherance of the purposes of the Act. The Commission shall disapprove a national market system plan or proposed amendment if it does not make such a finding. Approval or disapproval of a national market system plan, or an amendment to an effective national market system plan (other than an amendment initiated by the Commission), shall be by order. Promulgation of an amendment to an effective national market system plan initiated by the Commission shall be by rule.

(i) Within 90 days of the date of publication of notice of the filing of a national market system plan or proposed amendment, or within such longer period as to which the plan participants consent, the Commission shall, by order, approve or disapprove the plan or amendment, or institute proceedings to determine whether the plan or amendment should be disapproved. Proceedings to determine whether the plan or amendment should be disapproved will be conducted pursuant to 17 CFR 201.700 and 201.701. Such proceedings shall include notice of the grounds for disapproval under consideration and opportunity for hearing and shall be concluded within 180 days of the date of publication of notice of the plan or amendment. At the conclusion of such proceedings the Commission shall, by order, approve or disapprove the plan or amendment. The time for conclusion of such proceedings may be extended for up to 60 days (up to 240 days from the date of notice publication) if the Commission determines that a longer period is appropriate and publishes the reasons for such determination or the plan participants consent to the longer period.

(ii) The time for conclusion of proceedings to determine whether a national market system plan or proposed amendment should be disapproved may be extended for an additional period up to 60 days beyond the period set forth in paragraph (b)(2)(i) of this section (up to 300 days from the date of notice publication) if the Commission determines that a longer period is appropriate and publishes the reasons for such determination or the plan participants consent to the longer period.

(3) A proposed amendment may be put into effect upon filing with the Commission if designated by the sponsors as:

(i) [Reserved]

(ii) Concerned solely with the administration of the plan, or involving the governing or constituent documents relating to any person (other than a self-regulatory organization) authorized to implement or administer such plan on behalf of its sponsors; or

(iii) Involving solely technical or ministerial matters. At any time within 60 days of the filing of any such amendment, the Commission may summarily abrogate the amendment and require that such amendment be refiled in accordance with paragraph (a)(1) of this section and reviewed in accordance with paragraph (b)(2) of this section, if it appears to the Commission that such action is necessary or appropriate in the public interest, for the protection of investors, or the maintenance of fair and orderly markets, to remove impediments to, and perfect the mechanisms of, a national market system or otherwise in furtherance of the purposes of the Act.

(4) Notwithstanding the provisions of paragraph (b)(1) of this section, a proposed amendment may be put into effect summarily upon publication of notice of such amendment, on a temporary basis not to exceed 120 days, if the Commission finds that such action is necessary or appropriate in the public interest, for the protection of investors or the maintenance of fair and orderly markets, to remove impediments to, and perfect the mechanisms of, a national market system or otherwise in furtherance of the purposes of the Act.

(5) Any plan (or amendment thereto) in connection with:

(i) The planning, development, operation, or regulation of a national market system (or a subsystem thereof) or one or more facilities thereof; or

(ii) The development and implementation of procedures and/or facilities designed to achieve compliance by self-regulatory organizations and/or their members of any section of this Regulation NMS (§§ 242.600 through 242.612) and part 240, subpart A of this chapter promulgated pursuant to section 11A of the Act (15 U.S.C. 78k-1), approved by the Commission pursuant to section 11A of the Act (or pursuant to any rule or regulation thereunder) prior to the effective date of this section (either temporarily or permanently) shall be deemed to have been filed and approved pursuant to this section and no additional filing need be made by the sponsors with respect to such plan or amendment; provided, however, that all terms and conditions associated with any such approval (including time limitations) shall continue to be applicable; provided, further, that any amendment to such plan filed with or approved by the Commission on or after the effective date of this section shall be subject to the provisions of, and considered in accordance with the procedures specified in, this section.

(c) Compliance with terms of national market system plans. Each self-regulatory organization shall comply with the terms of any effective national market system plan of which it is a sponsor or a participant. Each self-regulatory organization also shall, absent reasonable justification or excuse, enforce compliance with any such plan by its members and persons associated with its members.

(d) Appeals. The Commission may, in its discretion, entertain appeals in connection with the implementation or operation of any effective national market system plan as follows:

(1) Any action taken or failure to act by any person in connection with an effective national market system plan (other than a prohibition or limitation of access reviewable by the Commission pursuant to section 11A(b)(5) or section 19(d) of the Act (15 U.S.C. 78k-1(b)(5) or 78s(d))) shall be subject to review by the Commission, on its own motion or upon application by any person aggrieved thereby (including, but not limited to, self-regulatory organizations, brokers, dealers, issuers, and vendors), filed not later than 30 days after notice of such action or failure to act or within such longer period as the Commission may determine.

(2) Application to the Commission for review, or the institution of review by the Commission on its own motion, shall not operate as a stay of any such action unless the Commission determines otherwise, after notice and opportunity for hearing on the question of a stay (which hearing may consist only of affidavits or oral arguments).

(3) In any proceedings for review, if the Commission, after appropriate notice and opportunity for hearing (which hearing may consist solely of consideration of the record of any proceedings conducted in connection with such action or failure to act and an opportunity for the presentation of reasons supporting or opposing such action or failure to act) and upon consideration of such other data, views, and arguments as it deems relevant, finds that the action or failure to act is in accordance with the applicable provisions of such plan and that the applicable provisions are, and were, applied in a manner consistent with the public interest, the protection of investors, the maintenance of fair and orderly markets, and the removal of impediments to, and the perfection of the mechanisms of a national market system, the Commission, by order, shall dismiss the proceeding. If the Commission does not make any such finding, or if it finds that such action or failure to act imposes any burden on competition not necessary or appropriate in furtherance of the purposes of the Act, the Commission, by order, shall set aside such action and/or require such action with respect to the matter reviewed as the Commission deems necessary or appropriate in the public interest, for the protection of investors, and the maintenance of fair and orderly markets, or to remove impediments to, and perfect the mechanisms of, a national market system.

(e) Exemptions. The Commission may exempt from the provisions of this section, either unconditionally or on specified terms and conditions, any self-regulatory organization, member thereof, or specified security, if the Commission determines that such exemption is consistent with the public interest, the protection of investors, the maintenance of fair and orderly markets and the removal of impediments to, and perfection of the mechanisms of, a national market system.

eCFR Content
§ 242.609 Registration of securities information processors: form of application and amendments.
(a) An application for the registration of a securities information processor shall be filed on Form SIP (§ 249.1001 of this chapter) in accordance with the instructions contained therein.

(b) If any information reported in items 1-13 or item 21 of Form SIP or in any amendment thereto is or becomes inaccurate for any reason, whether before or after the registration has been granted, the securities information processor shall promptly file an amendment on Form SIP correcting such information.

(c) The Commission, upon its own motion or upon application by any securities information processor, may conditionally or unconditionally exempt any securities information processor from any provision of the rules or regulations adopted under section 11A(b) of the Act (15 U.S.C. 78k-1(b)).

(d) Every amendment filed pursuant to this section shall constitute a “report” within the meaning of sections 17(a), 18(a) and 32(a) of the Act (15 U.S.C. 78q(a), 78r(a), and 78ff(a)).

 %}

## Further reading

- "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors)"
