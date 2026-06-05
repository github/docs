---
title: Use voice input with Copilot CLI
shortTitle: Voice input
intro: 'Speak your prompts to {% data variables.copilot.copilot_cli %} instead of typing them, using the CLI''s speech-to-text feature.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

Voice input lets you dictate prompts to {% data variables.copilot.copilot_cli_short %} by speaking into your microphone instead of typing on the keyboard. Transcription runs entirely on your local machine. Your audio is not sent over the network. The recognized text is inserted at the cursor position in the prompt input area, where you can edit it before submitting.

## Prerequisite

You need a working microphone connected to your machine. Voice input uses your system's default microphone.

## Limitation

Voice input is currently only supported for English and Spanish dictation. English is the default language for speech recognition.

## Enabling voice input

Before you can dictate prompts, you need to download the voice runtime that powers speech recognition, and a voice model.

1. In an interactive {% data variables.copilot.copilot_cli_short %} session, enter the `/voice` slash command.
1. When prompted, select **Continue** to download the voice runtime.

   The download runs in the background. You can keep using {% data variables.copilot.copilot_cli_short %} while it completes.

1. When you're prompted to choose a voice model, press <kbd>Enter</kbd> with "Download default model" selected to download the English speech-to-text model.

   Alternatively, if you want to dictate in Spanish:

   1. Use the arrow keys on your keyboard to select "Browse models", then press <kbd>Enter</kbd>.
   1. In the voice models picker, use the arrow keys to select the Spanish speech-to-text model, then press <kbd>Enter</kbd> to download it.
   1. Press <kbd>Esc</kbd> to exit the picker.

## Using voice input

There are two ways to dictate prompts.

### For short prompts

1. Hold down the space bar on your keyboard.

   After a brief moment, recording begins.

1. Speak your prompt.
1. Release the space bar.

   {% data variables.copilot.copilot_cli_short %} transcribes your speech and inserts the result at the cursor position in the prompt input area.

### For longer prompts

Rather than holding down the space bar, you can toggle voice recording on and off. This is more convenient for longer prompts.

1. Press <kbd>Ctrl</kbd>+<kbd>X</kbd> followed by <kbd>V</kbd> to start recording.
1. Speak your prompt.
1. Press any key to stop recording and insert the transcription.

## Switching voice models

You can dictate prompts in English or Spanish, but the appropriate voice model must be downloaded and activated for the language you want to use.

To change to a different voice model:

1. Enter the `/voice models` slash command.

   The voice models picker is displayed. A check mark indicates the currently active model.

1. In the voice models picker, use the arrow keys on your keyboard to select the English or Spanish speech-to-text, then press <kbd>Enter</kbd>.

   If the model is not already downloaded, it will be downloaded to your machine.

1. If you downloaded a model, press <kbd>Enter</kbd> again to make it the active model.

Your choice of model—and whether voice input is enabled or disabled—is stored in your {% data variables.product.prodname_copilot_short %} settings file (typically `~/.copilot/settings.json`) so that your preferences persist across CLI sessions.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/overview)
