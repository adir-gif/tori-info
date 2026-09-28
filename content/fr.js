/**
 * pingo-legal/content/fr.js — Français.
 *
 * ‼️ **Traduit de `he.js`, qui fait foi.** La numérotation des sections,
 * l'ordre et la formulation de chaque engagement la suivent exactement.
 * Une modification apportée ici seulement ferait dire aux deux documents
 * des choses différentes sur la même application.
 */

const MAIL = 'adirkatar@gmail.com';
const SUBJ = 'Demande%20de%20suppression%20de%20compte%20Tori';

module.exports = {
  index: {
    title: 'Tori · Informations légales',
    h1: 'Tori',
    sub: 'Une application de tâches, d’habitudes et de récompenses pour les familles',
    body: `
<a class="row" href="./privacy.html">
  <strong>Politique de confidentialité</strong>
  <span>Quelles données sont collectées, où elles vont, et ce qui n’est pas collecté</span>
</a>

<a class="row" href="./delete-account.html">
  <strong>Supprimer votre compte et vos données</strong>
  <span>Comment supprimer le compte et toutes les données de la famille</span>
</a>

<footer>
  Contact · <a href="mailto:${MAIL}">${MAIL}</a>
</footer>`,
  },

  privacy: {
    title: 'Politique de confidentialité · Tori',
    h1: 'Politique de confidentialité de Tori',
    sub: 'Dernière mise à jour : 28 septembre 2026 · version 1.3',
    body: `
<p>
  Tori est une application de tâches, d’habitudes et de récompenses pour les familles. Ce document
  explique précisément <strong>quelles données sont collectées, où elles sont envoyées, ce qui n’est pas
  collecté et comment tout supprimer</strong>. Il est écrit pour qu’un parent puisse le lire jusqu’au bout
  et comprendre ce qu’il advient des données de ses enfants.
</p>

<div class="card note">
  <strong>Trois choses à savoir tout de suite :</strong>
  <ul style="margin-bottom:0">
    <li>Les <strong>enfants n’ont pas de compte</strong> dans Tori. Pas d’e-mail, pas de mot de passe, pas de
        numéro de téléphone.</li>
    <li>L’application ne contient <strong>ni publicité, ni outil d’analyse, ni traceur</strong> tiers.</li>
    <li>Pour une famille qui utilise Tori <strong>sur un seul appareil, les données restent sur le
        téléphone</strong>. Aucun nom, aucune tâche, aucune photo ni aucun contenu n’est envoyé au serveur.
        La seule chose enregistrée sur le serveur à l’installation est une <strong>empreinte chiffrée de
        l’appareil</strong>, pour que la semaine gratuite ne soit accordée qu’une fois — section 2.7.</li>
  </ul>
</div>

<h2>1 · Qui est responsable des données</h2>
<p>
  L’exploitant de l’application et responsable du traitement est le développeur de Tori.
  Pour toute question, demande ou réclamation relative à la confidentialité :
  <a href="mailto:${MAIL}">${MAIL}</a>.
  Nous répondons sous 30 jours.
</p>

<h2>2 · Quelles données sont collectées</h2>

<h3>2.1 · Les données saisies par le parent, conservées sur l’appareil</h3>
<p>
  Le cœur de l’application fonctionne localement. Les éléments suivants sont conservés dans le stockage de
  l’application, sur le téléphone :
</p>
<ul>
  <li>Le <strong>nom de la famille</strong> et les prénoms ou surnoms des parents et des enfants</li>
  <li>L’<strong>âge ou la classe de chaque enfant</strong> — sert à régler le mode d’interface (5–8 / 9–12 / 13–15)</li>
  <li>Une <strong>photo de profil</strong> pour un enfant, si le parent choisit d’en ajouter une — conservée sur l’appareil</li>
  <li>Les <strong>tâches, habitudes, points, énergie, récompenses et événements d’agenda</strong> de la famille</li>
  <li>Les <strong>préférences</strong> : heure du rappel, mode d’affichage, règles de validation</li>
</ul>

<h3>2.2 · Les données qui atteignent le serveur — uniquement lors de l’ajout d’un second appareil</h3>
<p>
  Tant que la famille travaille sur un seul appareil, aucun de ses contenus n’est envoyé au serveur (hormis
  ce qui est décrit à la section 2.7).
  <strong>Dès que le parent génère un code pour relier un autre appareil</strong> (le téléphone d’un enfant
  ou d’un second parent), le document de la famille est synchronisé avec notre serveur afin que les deux
  appareils voient les mêmes données. Le document contient les éléments de la section 2.1.
</p>
<p>
  À côté du document est conservé un <strong>identifiant d’appareil anonyme</strong>, généré aléatoirement
  par notre système d’authentification. Il n’est lié ni à un e-mail, ni à un téléphone, ni à un compte
  Google ou Apple, ni à aucune autre identité personnelle.
</p>

<h3>2.3 · Photos servant de preuve pour une tâche</h3>
<p>
  Un parent peut marquer une tâche comme nécessitant une photo. Dans ce cas, la photo prise par l’enfant est
  <strong>conservée dans l’espace de stockage de la famille sur le serveur</strong>, dans un dossier distinct
  rattaché à cette seule famille. Les règles d’autorisation de la base de données empêchent l’accès aux
  photos d’une autre famille. Les photos sont supprimées en même temps que le compte.
</p>

<h3>2.4 · Conversations avec Pingo et aide aux devoirs</h3>
<p>
  Pingo est un assistant fondé sur l’intelligence artificielle. Lorsqu’un enfant ou un parent lui écrit :
</p>
<ul>
  <li>Le texte est envoyé <strong>via notre serveur</strong> à <strong>OpenAI</strong>, qui exploite le
      modèle de langage, et une réponse revient.</li>
  <li><strong>Pour que Pingo puisse répondre utilement, l’état de la famille est envoyé avec</strong> : les
      prénoms ou surnoms des enfants, les âges, les tâches, les habitudes et les soldes de points. Sans cela,
      il ne peut pas répondre à « qu’est-ce qu’il me reste aujourd’hui ». <strong>Ne sont pas envoyés</strong>
      les photos de profil, les coordonnées, ni aucun identifiant d’appareil.</li>
  <li>Dans l’aide aux devoirs, l’enfant peut <strong>photographier un exercice</strong>. La photo est envoyée
      par le même chemin à OpenAI afin d’analyser l’exercice, et <strong>n’est conservée ni chez nous ni
      dans l’application</strong>.</li>
  <li>Notre serveur <strong>ne conserve pas le contenu des conversations</strong>. Il compte uniquement les
      requêtes (voir 2.6).</li>
  <li>L’historique de la conversation est conservé localement sur l’appareil pour que l’échange se poursuive,
      et il est supprimé avec l’application.</li>
</ul>
<p class="muted">
  OpenAI traite les requêtes afin de produire la réponse. Selon ses conditions d’API commerciales, les
  données envoyées via l’API ne sont pas utilisées par défaut pour entraîner des modèles, et peuvent être
  conservées chez elle pendant une durée limitée, uniquement pour la surveillance des abus.
  Politique de confidentialité d’OpenAI :
  <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener">openai.com/policies/privacy-policy</a>.
</p>

<div class="card">
  <strong>Le parent dispose d’un interrupteur.</strong> Dans Réglages → « Pingo · l’assistant intelligent »
  se trouve un interrupteur <em>« Assistant IA pour les enfants »</em>. Lorsqu’il est désactivé, Pingo et
  l’aide aux devoirs n’apparaissent pas du tout côté enfant, et aucun texte ni aucune photo ne peut en être
  envoyé.
</div>

<h3>2.5 · Parler plutôt que taper</h3>
<p>
  On peut parler à Pingo au lieu de taper. La conversion de la parole en texte est assurée par le
  <strong>service de reconnaissance vocale du système d’exploitation</strong> (Google sur Android, Apple sur
  iOS), soumis à leurs politiques de confidentialité. Nous recevons <strong>uniquement le texte</strong>, pas
  l’enregistrement. Les enregistrements vocaux ne sont pas conservés chez nous et ne sont pas envoyés à notre
  serveur. L’autorisation du microphone n’est demandée qu’au moment où l’on appuie sur le bouton de parole.
</p>

<h3>2.6 · Compteurs opérationnels</h3>
<p>
  Pour chaque famille est conservé le <strong>nombre de requêtes par jour</strong> adressées à Pingo, afin
  d’appliquer un quota et d’éviter les abus. Seul un nombre est conservé : ni contenu, ni questions, ni
  réponses.
</p>

<h3>2.7 · L’enregistrement de la semaine gratuite</h3>
<p>
  Tori accorde <strong>une semaine d’essai par appareil</strong>. Pour qu’elle ne soit réellement accordée
  qu’une fois — et non à chaque désinstallation puis réinstallation — une seule ligne est conservée sur le
  serveur, avec trois données :
</p>
<ul>
  <li>Une <strong>empreinte chiffrée de l’appareil</strong>, et non l’identifiant de l’appareil lui-même.
      L’application en calcule une empreinte à sens unique (sha256), <strong>et seule celle-ci est
      envoyée</strong>. Il est impossible d’en retrouver l’identifiant, et l’empreinte est propre à Tori : le
      même appareil produit une empreinte entièrement différente dans toute autre application, il n’y a donc
      ici aucun identifiant permettant un recoupement entre services.</li>
  <li>La <strong>date de début de la semaine gratuite</strong> sur cet appareil.</li>
  <li>Le <strong>nombre de fois</strong> où l’application a été réinstallée sur cet appareil.</li>
</ul>
<p>
  Cette ligne <strong>n’est liée ni à la famille, ni aux prénoms, ni au document familial, ni à aucune autre
  donnée</strong> de la présente politique, et ne peut identifier une personne. Elle ne sert ni à la
  publicité, ni à l’analyse d’usage, ni au ciblage — uniquement à faire respecter l’essai unique.
</p>
<p>
  <strong>Ce qui n’est pas conservé :</strong> l’identifiant de l’appareil lui-même, le modèle de l’appareil,
  un numéro de téléphone, une adresse IP comme enregistrement permanent, ou tout identifiant publicitaire.
</p>

<h3>2.8 · « Retrouver le téléphone » — la localisation du téléphone de l’enfant</h3>
<p>
  Un parent peut demander à faire sonner le téléphone d’un enfant relié à la famille, ou voir où se trouve
  ce téléphone en ce moment. Cette fonction est <strong>désactivée tant qu’un parent ne l’active pas sur le
  téléphone de l’enfant lui-même</strong> : un écran d’explication s’affiche, puis le système d’exploitation
  demande l’autorisation de localisation. Sans cet accord, aucune localisation n’est collectée.
</p>
<ul>
  <li><strong>Quand elle est collectée :</strong> <strong>uniquement lorsqu’un parent de la même famille
      appuie sur « Localiser »</strong>. Pour que cela fonctionne même lorsque l’application est
      fermée, l’autorisation est « Toujours » — mais l’application <strong>ne suit pas l’appareil en
      arrière-plan</strong> et ne mesure pas la position d’elle-même. Sans demande d’un parent, aucune
      mesure.</li>
  <li><strong>Ce qui est collecté :</strong> la latitude et la longitude précises, la précision en mètres et
      l’heure de la mesure.</li>
  <li><strong>Ce qui est conservé :</strong> <strong>la dernière position uniquement</strong> — une ligne par
      téléphone, écrasée à chaque nouvelle demande. <strong>Ni historique, ni trajet</strong>.</li>
  <li><strong>Qui la voit :</strong> uniquement les appareils des <strong>parents de la même famille</strong>.
      Cela est imposé par les règles d’autorisation de la base de données, et pas seulement dans
      l’application. La position n’est envoyée à personne d’autre, ne sert pas à la publicité et n’est
      partagée avec aucun tiers.</li>
  <li><strong>Comment la désactiver :</strong> à tout moment, dans les réglages du téléphone de l’enfant →
      Tori → Localisation → « Jamais ».</li>
</ul>
<p>
  La sonnerie elle-même ne collecte aucune donnée : c’est une notification qui arrive sur le téléphone de
  l’enfant et joue un son ou une vibration.
</p>

<h3>2.9 · Jeton de notification</h3>
<p>
  Sur le téléphone d’un enfant où « Retrouver le téléphone » a été activé, un <strong>jeton de
  notification</strong> est conservé sur le serveur — un identifiant fourni par le système d’exploitation
  pour permettre d’envoyer une notification à ce téléphone. Il sert <strong>uniquement</strong> à
  transmettre la demande du parent (sonnerie ou localisation), et il n’est lisible par aucun appareil — pas
  même ceux des parents. Les notifications passent par le service de notifications d’<strong>Expo</strong>,
  puis par <strong>Firebase Cloud Messaging de Google</strong> (Android) ou par l’<strong>Apple Push
  Notification Service</strong> (iOS). La notification elle-même ne contient ni position, ni prénoms, ni
  contenu de la famille.
</p>

<h2>3 · Ce qui n’est <u>pas</u> collecté</h2>
<table>
  <tr><th>Catégorie</th><th>Où en est Tori</th></tr>
  <tr><td>Publicité et régies publicitaires</td><td>Aucune. L’application n’affiche pas de publicité.</td></tr>
  <tr><td>Outils d’analyse et de suivi</td><td>Aucun. Aucun SDK d’analyse d’usage ou de suivi n’est installé.</td></tr>
  <tr><td>Suivi de localisation continu ou historique des positions</td><td>Aucun. La position n’est mesurée qu’à la demande d’un parent, et seule la dernière est conservée (section 2.8).</td></tr>
  <tr><td>Contacts, agenda de l’appareil, galerie complète</td><td>Non accessibles. Uniquement une photo choisie explicitement.</td></tr>
  <tr><td>E-mail / mot de passe / téléphone d’un enfant</td><td>N’existent pas. Un enfant n’a pas de compte.</td></tr>
  <tr><td>Vente de données à des tiers</td><td>N’a pas lieu, sous aucune forme.</td></tr>
  <tr><td>Texte libre entre frères et sœurs</td><td>N’existe pas dans l’application. Uniquement des actions structurées.</td></tr>
</table>

<h2>4 · Vie privée des enfants</h2>
<p>
  Tori est destinée à un usage familial, <strong>géré par le parent et sous sa responsabilité</strong>. C’est
  le parent qui installe l’application, crée les profils des enfants et décide des fonctions actives.
</p>
<ul>
  <li>Un enfant ne crée pas de compte et ne fournit pas de coordonnées. Il entre avec un code de liaison
      temporaire ou un code PIN à 4 chiffres défini par le parent.</li>
  <li>Les seules informations concernant l’enfant sont celles saisies par le parent : un prénom ou surnom, un
      âge et une photo de profil facultative — et, si le parent a activé « Retrouver le téléphone », la
      dernière position de son téléphone (section 2.8).</li>
  <li>L’application ne comporte ni discussion libre entre enfants, ni lien vers des réseaux sociaux, ni
      contenu externe.</li>
  <li>Le parent peut désactiver l’assistant intelligent pour les enfants à tout moment, et supprimer toutes
      les données.</li>
</ul>
<p>
  Nous ne collectons pas sciemment de données personnelles d’enfants au-delà de ce qui est décrit ici. Un
  parent qui estime que des données ont été collectées sans son consentement peut nous écrire, et nous les
  supprimerons immédiatement.
</p>

<h2>5 · Où les données sont hébergées</h2>
<p>
  Les données synchronisées avec le serveur sont hébergées sur l’infrastructure <strong>Supabase</strong>
  (base de données et stockage de fichiers), sur des serveurs à <strong>Francfort, en Allemagne</strong>
  (Union européenne), et protégées par des règles d’autorisation au niveau des lignes qui limitent chaque
  famille à ses seules données.
</p>
<p>
  Les requêtes adressées à Pingo sont traitées par <strong>OpenAI</strong>, qui peut les traiter en dehors
  de l’Union européenne, y compris aux États-Unis. Il en va de même pour les services de notification
  (Expo, Google, Apple) et la gestion des abonnements (RevenueCat).
</p>

<h2>6 · Durée de conservation</h2>
<ul>
  <li><strong>Données locales</strong> — tant que l’application est installée. La supprimer les supprime.</li>
  <li><strong>Document familial et photos sur le serveur</strong> — tant que le compte existe, jusqu’à sa
      suppression.</li>
  <li><strong>Codes de liaison</strong> — expirent automatiquement au bout de 15 minutes.</li>
  <li><strong>Compteurs opérationnels</strong> — supprimés automatiquement sous 48 heures.</li>
  <li><strong>Contenu des conversations</strong> — jamais conservé sur le serveur.</li>
  <li><strong>Position du téléphone de l’enfant</strong> (section 2.8) — uniquement la dernière, écrasée à
      chaque demande, et supprimée avec le compte. Un téléphone détaché de la famille cesse d’apparaître
      chez les parents.</li>
  <li><strong>Jeton de notification</strong> (section 2.9) — jusqu’à ce que le système d’exploitation le
      révoque, ou jusqu’à la suppression du compte.</li>
  <li><strong>Enregistrement de la semaine gratuite</strong> (section 2.7) — <strong>conservé sans limite de
      durée</strong>. C’est toute sa raison d’être : un enregistrement supprimé au bout d’un an signifie une
      semaine gratuite de plus pour qui a attendu. Il ne contient qu’une empreinte chiffrée et une date, et
      n’identifie pas une personne.</li>
</ul>

<h2>7 · Comment tout supprimer</h2>
<div class="card">
  <p style="margin-top:0"><strong>Depuis l’application :</strong>
    Réglages → Avancé → <em>Supprimer le compte et les données</em>.
    L’action supprime du serveur le document familial, les photos de preuve, le registre des appareils, la
    dernière position et les jetons de notification, et réinitialise l’appareil. Il n’y a aucun moyen de revenir en arrière.</p>
  <p><strong>Ce qui n’est pas supprimé :</strong> l’enregistrement de la semaine gratuite (section 2.7). Il ne
    fait pas partie du compte et ne lui est pas lié — c’est une empreinte chiffrée de l’appareil et une date,
    et le supprimer annulerait en pratique l’essai unique. Sa conservation repose sur un intérêt légitime à
    prévenir les abus. Pour en demander également la suppression, écrivez-nous à l’adresse ci-dessous.</p>
  <p style="margin-bottom:0"><strong>Sans l’application :</strong>
    Vous pouvez envoyer une demande de suppression à
    <a href="mailto:${MAIL}?subject=${SUBJ}">${MAIL}</a>.
    Plus de détails sur la page <a href="./delete-account.html">suppression de compte</a>.</p>
</div>

<h2>8 · Vos droits</h2>
<p>
  Vous pouvez à tout moment demander l’<strong>accès</strong> aux données conservées, leur
  <strong>rectification</strong>, leur <strong>suppression</strong> complète ou une <strong>copie</strong>. La
  plupart de ces actions sont disponibles directement dans l’application ; pour le reste, vous pouvez nous
  écrire. Si vous vous trouvez dans l’Union européenne, vous disposez des droits prévus par le RGPD, y compris
  celui d’introduire une réclamation auprès d’une autorité de contrôle locale.
</p>

<h2>9 · Paiements</h2>
<p>
  Un abonnement payant est acheté et géré <strong>via la boutique d’applications depuis laquelle
  l’application a été installée</strong> — l’App Store d’Apple ou Google Play. Nous ne voyons ni ne
  conservons aucune donnée de paiement : carte bancaire, compte bancaire ou toute autre information
  financière. La boutique nous indique uniquement s’il existe un abonnement actif.
</p>
<p>
  Les abonnements sont gérés pour notre compte par <strong>RevenueCat</strong>. Il reçoit un
  <strong>identifiant anonyme de la famille</strong> et les détails de l’achat transmis par la boutique, mais
  ni prénoms ni contenu. Si un <strong>code promotionnel</strong> a été saisi sur l’écran d’abonnement, ce
  code est conservé chez lui avec ce même identifiant, afin de déterminer quel prix afficher et de savoir de
  quel code provient l’abonnement.
  Politique de confidentialité de RevenueCat :
  <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a>.
</p>

<h2>10 · Sécurité</h2>
<p>
  Les communications sont chiffrées en TLS. L’accès aux données est appliqué au niveau de la base de données
  et pas seulement dans l’application. Les clés d’accès aux prestataires externes sont conservées uniquement
  sur le serveur et n’existent pas dans l’application. Cela dit, aucun système n’est totalement inviolable et
  nous ne pouvons garantir une sécurité absolue.
</p>

<h2>11 · Modifications de cette politique</h2>
<p>
  Si nous modifions la politique, nous mettrons à jour la date en haut de la page. Une modification
  substantielle — par exemple une nouvelle catégorie de données ou un nouveau prestataire — sera également
  présentée dans l’application avant son entrée en vigueur.
</p>

<h2>12 · Contact</h2>
<p>
  <a href="mailto:${MAIL}">${MAIL}</a>
</p>

<footer>
  Tori · Politique de confidentialité · version 1.3 · 28 septembre 2026
</footer>`,
  },

  deleteAccount: {
    title: 'Supprimer votre compte · Tori',
    h1: 'Supprimer votre compte et vos données',
    sub: 'Tori · mis à jour le 13 septembre 2026',
    body: `
<p>
  Cette page explique comment supprimer le compte Tori de votre famille et toutes les données conservées
  avec lui. Il y a deux façons de faire, et toutes deux suppriment les mêmes données.
</p>

<h2>La première façon — depuis l’application</h2>
<div class="card">
  <ol style="margin:0">
    <li>Ouvrir Tori côté parent</li>
    <li>Réglages → <strong>Avancé</strong></li>
    <li>Appuyer sur <strong>Supprimer le compte et les données</strong></li>
    <li>Confirmer</li>
  </ol>
</div>
<p>La suppression est immédiate. Il n’est pas nécessaire de nous écrire et il n’y a pas de délai.</p>

<h2>La deuxième façon — une demande par e-mail</h2>
<p>
  Si vous n’avez plus accès à l’application — par exemple après la perte de l’appareil ou la désinstallation
  — vous pouvez nous envoyer une demande, et nous supprimerons les données manuellement.
</p>
<a class="btn" href="mailto:${MAIL}?subject=${SUBJ}">
  Envoyer une demande de suppression
</a>
<p style="margin-top:14px">
  Pour que nous puissions retrouver la famille, indiquez le <strong>nom de la famille tel qu’il est défini
  dans l’application</strong> ainsi que la date approximative d’installation. Nous traitons les demandes sous
  <strong>30 jours</strong> et confirmons par e-mail.
</p>

<h2>Ce qui est supprimé</h2>
<table>
  <tr><th>Quoi</th><th>Quand</th></tr>
  <tr><td>Le document familial sur le serveur — enfants, tâches, habitudes, points, récompenses, événements</td><td>Immédiatement</td></tr>
  <tr><td>Les photos de preuve de tâches envoyées au serveur</td><td>Immédiatement</td></tr>
  <tr><td>Le registre des appareils reliés et les codes de liaison actifs</td><td>Immédiatement</td></tr>
  <tr><td>La dernière position des téléphones des enfants et les jetons de notification (« Retrouver le téléphone »)</td><td>Immédiatement</td></tr>
  <tr><td>Toutes les données conservées sur l’appareil lui-même</td><td>Immédiatement (en supprimant depuis l’application)</td></tr>
  <tr><td>Compteurs opérationnels anonymes — requêtes par jour, sans contenu</td><td>Sous 48 heures</td></tr>
</table>

<div class="card note">
  <strong>La suppression est définitive.</strong> Il n’y a pas de sauvegarde et aucun moyen de restaurer. Si
  la famille souhaite revenir à Tori plus tard, elle repartira de zéro.
</div>

<h2>Ce que cela ne supprime pas</h2>
<ul>
  <li><strong>Un abonnement actif dans la boutique.</strong> Supprimer le compte chez nous ne résilie pas
      l’abonnement et n’ouvre pas droit à un remboursement. La résiliation se fait dans la boutique où il a
      été acheté :
      <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener">abonnements App Store</a>
      ou
      <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener">abonnements Google Play</a>.
      Mieux vaut résilier <strong>avant</strong> de supprimer.</li>
  <li><strong>Les données détenues par des prestataires externes</strong> qui traitent les requêtes
      d’intelligence artificielle, soumises à leurs propres politiques de conservation. Le contenu des
      conversations n’est jamais conservé sur notre serveur — voir la
      <a href="./privacy.html">politique de confidentialité</a>, section 2.4.</li>
</ul>

<h2>Questions</h2>
<p><a href="mailto:${MAIL}">${MAIL}</a></p>

<footer>
  Tori · <a href="./privacy.html">Politique de confidentialité</a> · <a href="./index.html">Accueil</a>
</footer>`,
  },
};
