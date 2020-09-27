# Localization Prep Checklist

Use the following checklist to help make your files more translation-friendly. For additional information, refer to the [style guide](contribution/content-style-guide.md).

- [ ] Use examples that are generic and can be understood by most people.
- [ ] Avoid controversial examples or culturally specific to a group.
- [ ] Write in active voice.
- [ ] Write simple, short and easy to understand sentences.
- [ ] Avoid using too many pronouns that can make text unclear.
- [ ] Avoid slang and jokes.
- [ ] Avoid negative sentences.
- [ ] Use industry standard acronyms whenever possible and explain custom acronyms.
- [ ] Use indicative mood.
- [ ] Eliminate redundant and wordy expressions.
- [ ] Avoid the excessive use of stacked modifiers (noun strings). The translator can misunderstand which one is the noun being modified.
- [ ] Avoid invisible plurals in which it is not clear if the first noun is meant to be singular or plural.
- [ ] Avoid nominalization.
- [ ] Avoid using ambiguous modal auxiliary verbs.
- [ ] Avoid gender-specific words.
- [ ] Avoid prepositional phrases.
- [ ] Avoid vague nouns and pronouns (vague sentence subject).
- [ ] Keep inline links to a minimum. If they are necessary, preface them with a phrase such as "For more information, see "Link title". Alternatively, add relevant links to a "Further reading" section at the end of the topic.

## Examples

| Guideline | Avoid | Use instead |
| --------- | ----- | ----------- |
| Avoid country specific information. | 800 numbers, addresses, etc. | If necessary, mention what countries the information applies to. |
| Avoid the excessive use of stacked modifiers (Noun strings). This can lead to incorrect translations because it is not easy to tell what modifies what. | “public repository default source settings” or “Oauth app access restrictions” | "Default source settings for the public repository"  or "restrictions for Oath app access." If using a stacked modifier is essential, make sure the background information and context are clear so the linguist understands what is the noun that is being modified. |
| Avoid invisible plurals. | "Program update" or "File retrieval". Is this an update of one program or a general procedure for multiple programs?  For "File retrieval", Are you retrieving one file or all of them? | Write the sentence more clearly or provide additional context to eliminate ambiguity that can result in an incorrect translation. |
| Avoid nominalization. | "To reach a conclusion" | Use "Conclude." |
| Avoid using ambiguous modal auxiliary verbs. | May, might, ought, could, used to, etc. | Be more clear when writing to avoid ambiguity. |
| Avoid prepositional phrases. | "According to the repository log..." or "After trying many times..." | Write the sentence more directly. |
| Avoid vague nouns and pronouns | "Maintainers and contributors have access to files and comments. In the pull request they make changes to it." In this example it is not clear if the changes are being made to the file or to the comments. Another example “After saving the file in the folder, the user deleted it.” In this sentence it is not clear what was deleted (file or folder). | If a pronoun seems to refer to more than one antecedent, either reword the sentence to make the antecedent clear or replace the pronoun by a noun to eliminate ambiguity. |
| Keep inline links to a minimum. | Read [more about OAuth2.](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/) Note that OAuth2 tokens can be [acquired programmatically](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization), for applications that are not websites. | OAuth2 tokens can be acquired programmatically for applications that are not websites. For more information, see "[Setting up and registering OAuth Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/)" and "[Create a new authorization](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)." |
