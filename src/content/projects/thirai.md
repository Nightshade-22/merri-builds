---
name: Thirai
subtitle: திரை · Tamil for "screen"
pitch: Turns the old phone or tablet in your drawer into a touch control panel for your PC.
status: in-build
version: v0.1.1
featured: true
order: 1
tags: [streaming, desk setup, windows, android]
repo: https://github.com/Nightshade-22/thirai
facts:
  - label: Runs on
    value: Windows PC, with a Mac build in each release. Android over USB, or any phone or tablet with a browser over Wi-Fi.
  - label: Tested on
    value: Samsung S24+, Pad Go 2
  - label: Based on
    value: OldPhoneDeck by GLAUCOMA82
  - label: Contribute
    value: Fork and open a PR. Every PR gets an automated AI review; nothing lands on main directly.
screens:
  - label: Deck
    caption: Launch apps, control Spotify, and keep an eye on your connection and device batteries.
    tablet: shots/thirai/tablet-deck.webp
    phone: shots/thirai/phone-deck.webp
  - label: Stream
    caption: Switch OBS scenes, go live, clip, run ads and moderate Twitch chat from one screen.
    tablet: shots/thirai/tablet-stream.webp
    phone: shots/thirai/phone-stream.webp
  - label: Sounds
    caption: A soundboard for stream moments, with a stop key that cuts everything.
    tablet: shots/thirai/tablet-sounds.webp
    phone: shots/thirai/phone-sounds.webp
review:
  status: done
  summary: Checked in v0.1.1.
  controls:
    - title: USB by default
      detail: The PC app listens on 127.0.0.1 only, so nothing else on your network can send it commands. Wi-Fi mode is opt-in.
    - title: QR pairing
      detail: The phone scans a code from the PC console to connect, in both USB and Wi-Fi mode.
    - title: Checked commands
      detail: The phone can only switch to scenes OBS itself lists, and unknown sound names are ignored.
  link: https://github.com/Nightshade-22/thirai/pull/6
  linkLabel: Read the fixes in PR #6
---

Wire your phone to the PC over USB and you get three screens: a **Deck** for launching apps and controlling music, a **Stream** panel for OBS and Twitch, and a **Sounds** board. Live status for OBS, Twitch and Discord sits in the corner the whole time.

## Get started

1. Download the latest release from the repo's Releases page (v0.1.1 or newer).
2. Plug your Android phone into the PC with a cable and double-click the `.exe`.
3. Scan the QR code in the Thirai window with your phone's camera.

For a tablet or phone without a cable, run `start-wifi.bat` instead, or add `"wifi": true` to `config.json` once.
