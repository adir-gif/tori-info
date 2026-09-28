/**
 * pingo-legal/content/en.js — English.
 *
 * ‼️ **Translated from `he.js`, which is the source of truth.** Section
 * numbering, ordering and the wording of every commitment follow it exactly.
 * A change made only here would make the two documents state different
 * things about the same app.
 *
 * ⚠️ This is also the version served at the site root — see `build.js`.
 */

const MAIL = 'adirkatar@gmail.com';
const SUBJ = 'Tori%20account%20deletion%20request';

module.exports = {
  index: {
    title: 'Tori · Legal',
    h1: 'Tori',
    sub: 'A chores, habits and rewards app for families',
    body: `
<a class="row" href="./privacy.html">
  <strong>Privacy policy</strong>
  <span>What is collected, where it goes, and what is not collected</span>
</a>

<a class="row" href="./delete-account.html">
  <strong>Delete your account and data</strong>
  <span>How to delete the account and all of the family's data</span>
</a>

<footer>
  Contact · <a href="mailto:${MAIL}">${MAIL}</a>
</footer>`,
  },

  privacy: {
    title: 'Privacy policy · Tori',
    h1: 'Tori privacy policy',
    sub: 'Last updated: 28 September 2026 · version 1.3',
    body: `
<p>
  Tori is a chores, habits and rewards app for families. This document explains exactly
  <strong>what information is collected, where it is sent, what is not collected, and how to
  delete everything</strong>. It is written so that a parent can read it to the end and
  understand what happens to their children's information.
</p>

<div class="card note">
  <strong>Three things worth knowing straight away:</strong>
  <ul style="margin-bottom:0">
    <li><strong>Children have no account</strong> in Tori. No email, no password, no phone number.</li>
    <li>The app contains <strong>no ads, no analytics tools and no third-party trackers</strong>.</li>
    <li>For a family using Tori <strong>on a single device, the data stays on the phone</strong>.
        No name, chore, photo or other content is sent to the server. The only thing recorded
        on the server at install time is a <strong>hashed device fingerprint</strong>, so that the
        free week is granted once — section 2.7.</li>
  </ul>
</div>

<h2>1 · Who is responsible for the data</h2>
<p>
  The operator of the app and controller of the data is the developer of Tori.
  For any privacy question, request or complaint:
  <a href="mailto:${MAIL}">${MAIL}</a>.
  We respond within 30 days.
</p>

<h2>2 · What information is collected</h2>

<h3>2.1 · Information the parent enters, stored on the device</h3>
<p>
  The core of the app works locally. The following is stored in the app's storage on the phone:
</p>
<ul>
  <li>The <strong>family name</strong> and the first names or nicknames of parents and children</li>
  <li><strong>Each child's age or year group</strong> — used to set the interface mode (5–8 / 9–12 / 13–15)</li>
  <li>A <strong>profile picture</strong> for a child, if the parent chose to add one — kept on the device</li>
  <li>The family's <strong>chores, habits, points, energy, rewards and calendar events</strong></li>
  <li><strong>Preferences</strong>: reminder time, display mode, approval rules</li>
</ul>

<h3>2.2 · Information that reaches the server — only when a second device is paired</h3>
<p>
  As long as the family works on a single device, none of its content is sent to the server
  (other than what is described in section 2.7).
  <strong>The moment the parent generates a pairing code to add another device</strong> (a child's
  phone, or a second parent's), the family document is synced to our server so that both devices
  see the same data. The document contains the items listed in section 2.1.
</p>
<p>
  Alongside the document we store an <strong>anonymous device identifier</strong> — an identifier
  generated at random by our authentication system. It is not linked to an email, a phone number,
  a Google or Apple account, or any other personal identity.
</p>

<h3>2.3 · Photo proof of a chore</h3>
<p>
  A parent can mark a chore as requiring a photo. In that case the photo the child takes is
  <strong>stored in the family's storage area on the server</strong>, in a separate folder tied to
  that family alone. Database permission rules prevent access to another family's photos. The
  photos are deleted together with the account.
</p>

<h3>2.4 · Conversations with Pingo and homework help</h3>
<p>
  Pingo is an AI-based assistant. When a child or a parent writes to him:
</p>
<ul>
  <li>The text is sent <strong>through our server</strong> to <strong>OpenAI</strong>, which runs the
      language model, and a reply comes back.</li>
  <li><strong>So that Pingo can answer usefully, the family's state is sent with it</strong> — the
      children's names or nicknames, their ages, the chores, the habits and the point balances.
      Without this he cannot answer "what do I have left today". <strong>What is not sent:</strong>
      profile pictures, contact details, or any device identifier.</li>
  <li>In homework help the child can <strong>photograph an exercise</strong>. The photo is sent along the
      same path to OpenAI in order to analyse the exercise, and is
      <strong>not stored either by us or in the app</strong>.</li>
  <li>Our server <strong>does not store the content of conversations</strong>. It counts requests only
      (see 2.6).</li>
  <li>Conversation history is kept locally on the device so the conversation can continue, and is
      deleted with the app.</li>
</ul>
<p class="muted">
  OpenAI processes the requests in order to produce the reply. Under its commercial API terms,
  input sent through the API is not used to train models by default, and may be retained by OpenAI
  for a limited time solely to monitor for abuse.
  OpenAI's privacy policy:
  <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener">openai.com/policies/privacy-policy</a>.
</p>

<div class="card">
  <strong>The parent has an off switch.</strong> Under Settings → "Pingo · the smart helper" there is
  an <em>"AI helper for children"</em> toggle. When it is off, Pingo and homework help do not appear
  on the children's side at all, and no text or photo can be sent from there.
</div>

<h3>2.5 · Speaking instead of typing</h3>
<p>
  You can talk to Pingo instead of typing. Speech-to-text conversion is performed by the
  <strong>operating system's speech recognition service</strong> (Google on Android devices, Apple on
  iOS), subject to their privacy policies. We receive <strong>the text only</strong>, not the recording.
  Voice recordings are not stored by us and are not sent to our server.
  Microphone permission is requested only when the speak button is pressed.
</p>

<h3>2.6 · Operational counters</h3>
<p>
  For each family we store the <strong>number of requests per day</strong> to Pingo, in order to enforce
  a quota and prevent abuse. A number only is stored — no content, no questions and no answers.
</p>

<h3>2.7 · The free-week record</h3>
<p>
  Tori grants <strong>one trial week per device</strong>. So that it really is granted once — and not
  again on every uninstall and reinstall — a single row is stored on the server with three values:
</p>
<ul>
  <li>A <strong>hashed device fingerprint</strong> — not the device identifier itself. The app computes a
      one-way fingerprint from it (sha256), <strong>and only that is sent</strong>. The identifier cannot
      be recovered from it, and the fingerprint is unique to Tori: the same device produces a
      completely different fingerprint in any other app, so there is no identifier here that could be
      cross-referenced between services.</li>
  <li>The <strong>date the free week started</strong> on that device.</li>
  <li>The <strong>number of times</strong> the app has been reinstalled on that device.</li>
</ul>
<p>
  This row is <strong>not linked to the family, to names, to the family document or to any other data
  </strong> in this policy, and cannot identify a person. It is not used for advertising, usage
  analysis or segmentation — only to enforce the one-time trial.
</p>
<p>
  <strong>What is not stored:</strong> the device identifier itself, the device model, a phone number, an
  IP address as a permanent record, or any advertising identifier.
</p>

<h3>2.8 · "Find the phone" — the location of a child's phone</h3>
<p>
  A parent can ring the phone of a child who has been paired to the family, or see where that phone is
  right now. The feature is <strong>off until a parent turns it on, on the child's phone itself</strong>:
  an explanation screen appears, and then the operating system asks for location permission. Without
  that approval, no location is collected.
</p>
<ul>
  <li><strong>When it is collected:</strong> <strong>only when a parent in the same family taps "Where is
      the phone?"</strong>. So that this works even when the app is closed, the permission is "Always" —
      but the app <strong>does not track in the background</strong> and never takes a location reading on
      its own. No request from a parent, no reading.</li>
  <li><strong>What is collected:</strong> precise latitude and longitude, the accuracy in metres, and when
      the reading was taken.</li>
  <li><strong>What is stored:</strong> <strong>the latest location only</strong> — one row per phone,
      overwritten on every new request. <strong>No history and no route</strong>.</li>
  <li><strong>Who can see it:</strong> only the devices of <strong>parents in the same family</strong>. This is
      enforced by permission rules in the database, not only in the app. The location is not sent to anyone
      else, is not used for advertising, and is not shared with any third party.</li>
  <li><strong>How to turn it off:</strong> at any time, in the child's phone settings → Tori → Location →
      "Never".</li>
</ul>
<p>
  Ringing the phone collects no information: it is a notification that reaches the child's phone and
  plays a sound or vibrates.
</p>

<h3>2.9 · Notification token</h3>
<p>
  For a child's phone on which "Find the phone" has been turned on, the server stores a
  <strong>notification token</strong> — an identifier the operating system issues so that messages can be
  sent to that phone. It is used <strong>only</strong> to deliver the parent's request (ring or locate),
  and it cannot be read by any device — not even by the parents. Notifications travel through
  <strong>Expo</strong>'s notification service, and from there through <strong>Google's Firebase Cloud
  Messaging</strong> (Android) or the <strong>Apple Push Notification service</strong> (iOS). The
  notification itself contains no location, names or family content.
</p>

<h2>3 · What is <u>not</u> collected</h2>
<table>
  <tr><th>Category</th><th>How it stands in Tori</th></tr>
  <tr><td>Ads and ad networks</td><td>None. The app shows no advertising at all.</td></tr>
  <tr><td>Analytics and tracking tools</td><td>None. No usage-analysis or tracking SDK is installed.</td></tr>
  <tr><td>Continuous location tracking or location history</td><td>None. Location is read only when a parent asks, and only the latest one is stored (section 2.8).</td></tr>
  <tr><td>Contacts, device calendar, full gallery</td><td>Not accessible. Only a photo picked explicitly.</td></tr>
  <tr><td>A child's email / password / phone</td><td>Do not exist. A child has no account.</td></tr>
  <tr><td>Selling data to third parties</td><td>Does not happen, in any form.</td></tr>
  <tr><td>Free text between siblings</td><td>Does not exist in the app. Structured actions only.</td></tr>
</table>

<h2>4 · Children's privacy</h2>
<p>
  Tori is intended for family use, <strong>managed by and under the responsibility of the parent</strong>.
  The parent installs the app, creates the children's profiles and decides which capabilities are on.
</p>
<ul>
  <li>A child does not create an account and does not provide contact details. They sign in with a
      temporary pairing code or a 4-digit PIN the parent sets.</li>
  <li>The only information about the child is what the parent entered: a name or nickname, an age, and
      an optional profile picture — and, if the parent turned on "Find the phone", the latest location of
      the child's phone (section 2.8).</li>
  <li>There is no free chat between children in the app, no link to social networks and no external content.</li>
  <li>The parent can turn the smart helper off for children at any moment, and delete all of the data.</li>
</ul>
<p>
  We do not knowingly collect personal information from children beyond what is described here. A parent
  who believes information was collected without their consent is welcome to contact us, and we will
  delete it immediately.
</p>

<h2>5 · Where the data is stored</h2>
<p>
  Data synced to the server is stored on <strong>Supabase</strong> infrastructure (database and file
  storage), on servers in <strong>Frankfurt, Germany</strong> (the European Union), protected by
  row-level permission rules that limit each family to its own data only.
</p>
<p>
  Requests to Pingo are processed by <strong>OpenAI</strong>, which may process them outside the
  European Union, including in the United States. The same applies to the notification services (Expo,
  Google, Apple) and to subscription management (RevenueCat).
</p>

<h2>6 · How long it is kept</h2>
<ul>
  <li><strong>Local data</strong> — for as long as the app is installed. Deleting the app deletes it.</li>
  <li><strong>The family document and photos on the server</strong> — for as long as the account exists,
      until deletion.</li>
  <li><strong>Pairing codes</strong> — expire automatically after 15 minutes.</li>
  <li><strong>Operational counters</strong> — deleted automatically within 48 hours.</li>
  <li><strong>Conversation content</strong> — never stored on the server in the first place.</li>
  <li><strong>The location of a child's phone</strong> (section 2.8) — the latest one only, overwritten on
      every request, and deleted when the account is deleted. A phone that is unpaired from the family
      stops appearing for the parents.</li>
  <li><strong>Notification token</strong> (section 2.9) — until the operating system revokes it, or until
      the account is deleted.</li>
  <li><strong>The free-week record</strong> (section 2.7) — <strong>kept indefinitely</strong>. That is its
      entire purpose: a record deleted after a year means another free week for whoever waited. It
      contains a hashed fingerprint and a date only, and does not identify a person.</li>
</ul>

<h2>7 · How to delete everything</h2>
<div class="card">
  <p style="margin-top:0"><strong>From inside the app:</strong>
    Settings → Advanced → <em>Delete account and data</em>.
    The action deletes the family document, the proof photos, the device records, the latest location
    and the notification tokens from the server,
    and resets the device. There is no way to restore it.</p>
  <p><strong>What is not deleted:</strong> the free-week record (section 2.7). It is not part of the
    account and is not linked to it — it is a hashed device fingerprint and a date, and deleting it
    would in effect cancel the one-time trial. Keeping it rests on a legitimate interest in preventing
    abuse. To request that it be deleted as well, contact us at the address below.</p>
  <p style="margin-bottom:0"><strong>Without the app:</strong>
    You can send a deletion request to
    <a href="mailto:${MAIL}?subject=${SUBJ}">${MAIL}</a>.
    More detail on the <a href="./delete-account.html">account deletion</a> page.</p>
</div>

<h2>8 · Your rights</h2>
<p>
  You may at any time request <strong>access</strong> to the data stored, its <strong>correction</strong>,
  full <strong>deletion</strong>, or a <strong>copy</strong> of it. Most of these are available directly in
  the app; for anything else you can contact us by email. If you are in the European Union, you have the
  rights granted by the GDPR, including the right to lodge a complaint with a local supervisory authority.
</p>

<h2>9 · Payments</h2>
<p>
  A paid subscription is purchased and managed <strong>through the app store the app was installed
  from</strong> — Apple's App Store or Google Play. We do not see and do not store any payment details —
  credit card, bank account or any other financial detail. All we receive from the store is whether an
  active subscription exists.
</p>
<p>
  Subscriptions are managed for us by <strong>RevenueCat</strong>. It receives an <strong>anonymous family
  identifier</strong> and the purchase details from the store — not names or content. If a
  <strong>promo code</strong> was entered on the subscription screen, the code is stored with RevenueCat
  alongside that identifier, so that it can determine which price to show and which code the subscription
  came from.
  RevenueCat's privacy policy:
  <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a>.
</p>

<h2>10 · Security</h2>
<p>
  Communication is encrypted with TLS. Access to data is enforced at the database level and not only in
  the app. Access keys for external providers are held on the server only and do not exist inside the
  app. That said, no system is entirely immune, and we cannot guarantee absolute security.
</p>

<h2>11 · Changes to this policy</h2>
<p>
  If we change the policy, we will update the date at the top of the page. A material change — a new
  category of data or a new provider, for example — will also be shown inside the app before it takes
  effect.
</p>

<h2>12 · Contact</h2>
<p>
  <a href="mailto:${MAIL}">${MAIL}</a>
</p>

<footer>
  Tori · Privacy policy · version 1.3 · 28 September 2026
</footer>`,
  },

  deleteAccount: {
    title: 'Delete your account · Tori',
    h1: 'Delete your account and data',
    sub: 'Tori · updated 13 September 2026',
    body: `
<p>
  This page explains how to delete your family's Tori account and all of the data stored with it.
  There are two ways, and both delete the same data.
</p>

<h2>The first way — from inside the app</h2>
<div class="card">
  <ol style="margin:0">
    <li>Open Tori on the parent side</li>
    <li>Settings → <strong>Advanced</strong></li>
    <li>Tap <strong>Delete account and data</strong></li>
    <li>Confirm</li>
  </ol>
</div>
<p>The deletion happens immediately. There is no need to contact us and no waiting period.</p>

<h2>The second way — a request by email</h2>
<p>
  If you no longer have access to the app — for example after the device was lost or the app was
  removed — you can send us a request, and we will delete the data manually.
</p>
<a class="btn" href="mailto:${MAIL}?subject=${SUBJ}">
  Send a deletion request by email
</a>
<p style="margin-top:14px">
  So that we can locate the family, please include the <strong>family name as set in the app</strong> and
  the approximate date it was installed. We handle requests within <strong>30 days</strong> and confirm by
  return email.
</p>

<h2>What gets deleted</h2>
<table>
  <tr><th>What</th><th>When</th></tr>
  <tr><td>The family document on the server — children, chores, habits, points, rewards, calendar events</td><td>Immediately</td></tr>
  <tr><td>Chore proof photos uploaded to the server</td><td>Immediately</td></tr>
  <tr><td>The record of paired devices and any active pairing codes</td><td>Immediately</td></tr>
  <tr><td>The latest location of the children's phones and the notification tokens ("Find the phone")</td><td>Immediately</td></tr>
  <tr><td>All data stored on the device itself</td><td>Immediately (when deleting from the app)</td></tr>
  <tr><td>Anonymous operational counters — requests per day, with no content</td><td>Within 48 hours</td></tr>
</table>

<div class="card note">
  <strong>Deletion is final.</strong> There is no backup and no way to restore. If the family wants to
  come back to Tori later, it starts from scratch.
</div>

<h2>What this does not delete</h2>
<ul>
  <li><strong>An active store subscription.</strong> Deleting the account with us does not cancel the
      subscription and does not entitle you to a refund. Cancel it in the store you bought it from:
      <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener">App Store subscriptions</a>
      or
      <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener">Google Play subscriptions</a>.
      It is worth cancelling <strong>before</strong> deleting.</li>
  <li><strong>Data held by external providers</strong> that process AI requests, subject to their own
      retention policies. Conversation content is never stored on our server in the first place — see the
      <a href="./privacy.html">privacy policy</a>, section 2.4.</li>
</ul>

<h2>Questions</h2>
<p><a href="mailto:${MAIL}">${MAIL}</a></p>

<footer>
  Tori · <a href="./privacy.html">Privacy policy</a> · <a href="./index.html">Home</a>
</footer>`,
  },
};
