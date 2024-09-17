---
title: Using videos in GitHub Docs
shortTitle: Use videos
intro: 'This guide explains how to create videos that support user needs for {% data variables.product.prodname_docs %}.'
versions:
  feature: 'contributing'
---

## About videos in {% data variables.product.prodname_docs %}

Videos are used rarely in the {% data variables.product.prodname_docs %}. When videos are necessary to provide the best user experience for an article, they are used together with written text. Videos are not a replacement for written content. Videos should never be the only way information is communicated because they are more difficult to keep up to date and are not accessible to everyone.

Use these guidelines to determine if a video is appropriate to include in an article or on a landing page in the docs.

If you add a link to a video or embed a video in the {% data variables.product.prodname_docs %}, add the video's metadata to the "[Videos in {% data variables.product.prodname_docs %}](https://github.com/github/docs/blob/main/contributing/videos-in-docs.md)" file in the `github/docs` repository.

The Docs team does not create or maintain video content. Videos are purely supplemental to help communicate significant or complex topics, and should be used sparingly because they are not a content type owned by the Docs team.

## Video checklist

Use this checklist to quickly determine if a video might be appropriate to add to an article or landing page.

* Is the video the only way to communicate the information?
* Does {% data variables.product.prodname_dotcom %} own the video?
* Is the video well produced? (See the "[Best practices](#best-practices)" section for more information.)
* Is the video accessible to the broadest group of users possible? (See the "[Accessibility requirements](#accessibility-requirements)" section for more information.)
* Is the video less than five minutes long?
* Does the video have a specific audience and purpose in the docs? If it is only relevant to a particular product or feature, you must version it. See the "[Versioning](#versioning)" section for more information.

If you answer "no" to any of these items, the video is not suitable for adding to the {% data variables.product.prodname_docs %}.

### Maintaining videos

If a video has a maintenance schedule or a team directly responsible for auditing and updating the content if it becomes out of date, you can include the video without any additional steps.

If the video does not have a maintenance schedule, create an issue with an appropriate target date to review or remove the video.

## Best practices

Use these best practices to help determine if a video is well produced and is of a high enough quality to be included in the {% data variables.product.prodname_docs %}.

Good videos introduce an instructional agenda that includes steps and goals so that someone watching quickly knows what they will learn. Videos are demonstrative, both showing and explaining the relevant steps that are performed. Videos should be engaging and encouraging. Videos must be well produced to be included in the {% data variables.product.prodname_docs %}. A well produced video contains few barriers for people with disabilities, has professional narration (if it is a narrated video), has clear visuals, and comes from a trusted source such as {% data variables.product.prodname_dotcom %} or Microsoft.

Videos are broadly grouped into three categories: product overviews, feature videos, and tutorials. These descriptions are generalizations of each video type. Some videos might not fit perfectly in one category, but can still be useful without meeting the exact guidelines.

### Product overviews

* **Purpose**: Briefly explain what the product is, showcase the main functionality, and get people interested
* **Length**: Less than a minute
* **Possible audiences**: People who want to know if a feature is useful for their goals, people who are new to {% data variables.product.company_short %} and trying to understand what the products do
* **Possible locations in the docs**: Landing pages and guides

### Feature videos

* **Purpose**: Supplement conceptual or procedural content
* **Length**: As short as possible, without exceeding five minutes. Break longer content into multiple shorter, focused videos
* **Possible audiences**: People who are learning about or how to use a feature
* **Possible locations in the docs**: Guides, conceptual articles, procedural articles

### Tutorials

* **Purpose**: Help novice users get going with a product, drive adoption, or explain complex functionalities
* **Length**: Individual videos should be five minutes or less. Complex topics can have a series of shorter videos spread across an article. Total length should be a maximum of 15 minutes
* **Possible audiences**: New users of features or products
* **Possible locations**: Guides

## When to use videos

We might use videos instead of other visuals such as screenshots or diagrams when it is important to show movement or changes in state, like when someone navigates from one screen to another or demos a feature that involves progressing through multiple menus. However, screenshots or text may be sufficient to explain these procedures.

Videos can also be helpful to introduce features or products where a 30 second video can supplement information that requires multiple paragraphs to write.

Use videos that explain the value of the procedure or concept that they are showing.

## When to not use videos

Do not use videos for features that change quickly and may make videos out of date. Do not use videos that contradict the written content or violate any parts of the "[AUTOTITLE](/contributing/style-guide-and-content-model/style-guide#alt-text)." Do not use videos that just show a task without explaining or elaborating on the procedure. Videos must be useful and relevant, which includes staying accurate over time.

## Accessibility requirements

These are the minimum requirements for a video to be included in the {% data variables.product.prodname_docs %}. If a video violates any of these requirements, it cannot be added to the docs.

* No flashing or strobe effects
* Must have closed captions. See "[Creating video captions](#creating-video-captions)" below for more information
* No graphics overlap with where captions appear
* Typography must be legible
* Any overlays must have sufficient contrast ratios
* Any text must be on the screen long enough to be read (the text should appear onscreen for longer than it takes to read it out loud twice)
* Must have proofread descriptive transcripts for what happens scene-by-scene. See "[Creating video transcripts](#creating-video-transcripts)" below for more information
* Videos do not autoplay

### Creating video captions

Videos must have human-generated captions before being added to the Docs site. You can use auto caption technology to help create the captions, but they must be proofread and edited for accuracy by a person. If the video hosting service has a native caption tool, like YouTube, you can use that tool to prepare captions or create a properly formatted `SRT` or `VTT` transcript file to upload with the video.

Creating captions is part of the process of producing videos that can be accessed by more people, so the owner of a video being added to {% data variables.product.prodname_docs %} should provide captions.

#### Guidelines for captions

Where possible, captions should exactly match the words spoken in the video. Do not paraphrase or truncate captions, unless serious time constraints mean it would be difficult for someone to read the captions in the time given.

Captions must be synchronized to appear at approximately the same time as the audio. Captions should always be timed to appear on screen at the moment the speaker begins talking. For fast speech, where it would be difficult to read captions timed precisely to the audio, you can extend the captions to stay on screen after the speech has finished.

If a video has multiple speakers, identify the speakers in the captions. Do this by adding the speaker's name, or a descriptive name such as `Developer`, before the start of the sentence. For example: `Jimmy: Hello.`. You only need to do this when the speaker changes, not for every line of dialogue. If it's obvious from the visuals who is speaking, you do not need to identify the speaker.

Captions must be one or two lines, and no more than 32 characters per line. Put each new sentence on a new line. If you need to break a line mid-sentence, do so at a logical point, for example after commas or before conjunctions like `and` or `but`.

#### Adding and editing captions on YouTube

For videos hosted on YouTube, see "[Add subtitles and captions](https://support.google.com/youtube/answer/2734796?hl=en&ref_topic=7296214)" and "[Edit or remove captions](https://support.google.com/youtube/answer/2734705?hl=en&ref_topic=7296214)" in the YouTube docs.

### Creating video transcripts

For every video linked or embedded in the docs, we must have a descriptive transcript of the video. Transcript articles are formatted like other articles, with YAML frontmatter and Markdown content. To add a transcript to the Docs site, create an article in [`content/video-transcripts`](https://github.com/github/docs/tree/main/content/video-transcripts), and include the transcript as the article's body text. Give the article a filename like `transcript-VIDEO-NAME.md` and a `title` frontmatter property of `Transcript - VIDEO NAME`. Add the article to the `index.md` file in the `video-transcripts` directory.

Do not use Liquid variables or reusables to replace things like product names in the transcript. The transcript should be faithful to the audio in the video, and we should not change any text in the transcript as a result of updating a variable or reusable after the video was produced.

Creating transcripts is part of the process of producing videos that can be accessed by more people, so the owner of a video being added to the docs site should provide the content for a transcript.

You can use captions as the foundation for a transcript. Edit the captions to remove any timestamps and include the relevant information detailed below. A descriptive transcript includes a text version of both audio and visual information needed to understand the content of a video.

* If a video has multiple speakers, identify the speakers in the transcript.
* If a speaker's gender is known, you can use their preferred pronouns when describing their actions. For example, `She points to the computer screen.` If the speaker's gender is unknown or irrelevant to the visual being described, you can use the singular they pronoun.
* Format the transcript in logical paragraphs, lists, and sections. If it helps people understand the content, you may add headers to sections. Consider how someone would get information from the transcript if they are not also viewing the video.
* Add any onscreen text, relevant visual elements, or non-speech sounds that are not included in the captions. Place these descriptions after the spoken text that accompanies them in the video. Format visual information in brackets. For example, `[Background music plays. The narrator clicks the Code button and then the "+ New codespace" button.]`.
* Add a `product_video` property to the transcript article's YAML frontmatter. The value of the `product_video` property is the YouTube URL of the video. The video's YouTube URL will display as an external link in the transcript article.
* At the end of the transcript, write `End of transcript.` and link to the landing page for the product the video is about using the pattern `For more information about PRODUCT, see the ["Product" documentation](link/to/landing-page).`.

See "[Text Transcript with Description of Visuals](https://www.w3.org/WAI/perspective-videos/captions/#transcript)" in the W3C docs for more examples of audio and visual transcriptions.

#### Linking to transcripts from externally hosted videos

Add a link to the article with a video's transcript in the description of the video on the platform where it is hosted. For more information, see "[Edit video settings](https://support.google.com/youtube/answer/57404?)" in the YouTube documentation.

#### Linking to transcripts for embedded videos

In any content with an embedded video, add a `product_video_transcript` property below the `product_video` property in the YAML frontmatter. The value of `product_video_transcript` is a link to the transcript article in the `video-transcripts` directory.

```yaml
title: Example product landing page
product_video: 'https://www.youtube-nocookie.com/embed/URL'
product_video_transcript: /content/video-transcripts/TRANSCRIPT-TITLE
```

## Titles for videos

Titles should be descriptive and follow the guidelines for titles in the content model. For more information, see "[AUTOTITLE](/contributing/style-guide-and-content-model/contents-of-a-github-docs-article#titles)."

## Versioning

If a video is only relevant for specific {% data variables.product.prodname_dotcom %} products (Free, Pro and Team; {% data variables.product.prodname_ghe_server %}; and {% data variables.product.prodname_ghe_cloud %}), the video must be versioned for those products. Use Liquid conditional statements to version the videos appropriately. The Liquid conditional versioning may need to be added when the content is initially created, or may need to be added when the content is updated for a feature update or {% data variables.product.prodname_enterprise %} release. For more information about liquid conditional statements and versioning, see "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/versioning-documentation)."

## Video hosting

Videos must be hosted somewhere that {% data variables.product.prodname_dotcom %} owns and can grant the Docs team access to. Videos should not track users or use cookies. Currently, {% data variables.product.prodname_dotcom %}'s videos are hosted on YouTube and added to the docs using the [Privacy Enhanced Mode](https://support.google.com/youtube/answer/171780?hl=en#zippy=%2Cturn-on-privacy-enhanced-mode) by changing the domain for the embedded URL from `https://www.youtube.com/VIDEO` to `https://www.youtube-nocookie.com/VIDEO`.
