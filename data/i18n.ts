export type Locale = "mr" | "en";

export const DEFAULT_LOCALE: Locale = "mr";

export const LOCALES: Locale[] = ["mr", "en"];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "mr" || value === "en";
}

const en = {
  listening: "Listening",
  about: "About",
  faq: "FAQ",
  support: "Support",
  supportUs: "Support us",
  scroll: "Scroll",
  pressPlay: "Press play",
  welcomeTo: "Welcome to",
  faqHeading: "Marathi Music Katta, explained",
  openOnYouTubeMusic: "Open on YouTube Music",
  youtubeMusic: "YouTube Music",
  creditsYoutube: "Credits: YouTube",
  poweredBy: "Developed by",
  siteTagline: "Marathi Gani, one tap away",
  metaDescription:
    "Listen to Marathi gani and Ganapati gani online — free Marathi songs and Ganesh playlists. No account needed. Press play and keep listening.",
  notFoundBody: "That page doesn't exist.",
  backHome: "Back home",
  loading: "Loading…",
  footerDisclaimer:
    "Audio plays through YouTube's player. Marathi Music Katta does not host or claim ownership of the music — all rights belong to their respective owners.",
  featureMomentTitle: "Made for the moment",
  featureMomentBody:
    "A non-stop Marathi gani playlist with simple controls that work on mobile and desktop.",
  featureVibeTitle: "Marathi, Ganapati & more",
  featureVibeBody:
    "Switch between Marathi songs, Ganapati gane, love tracks and more — without leaving the page.",
  featureAccountTitle: "No account needed",
  featureAccountBody:
    "Start listening here, or open the same playlist on YouTube Music whenever you want.",
  faqWhatQ: "What is Marathi Music Katta?",
  faqWhatA:
    "Marathi Music Katta is a free browser playlist for Marathi gane (मराठी गाणी), Ganapati gane (गणपती गाणी) and more — press play and listen without creating an account.",
  faqFreeQ: "Is Marathi Music Katta free to use?",
  faqFreeA:
    "Yes. Listening to Marathi songs, Ganapati songs and every mood here is free. Optional support helps keep the project running, but nothing is required to play.",
  faqMarathiQ: "Where can I listen to Marathi gani online?",
  faqMarathiA:
  "Right here on Marathi Music Katta. Open the Marathi mood, press play, and stream popular Marathi Gani  (मराठी गाणी) in your browser — no download or signup.",
  faqGanapatiQ: "Where can I play Ganapati gani for free?",
  faqGanapatiA:
    "Use the Ganapati mood on Marathi Music Katta for Ganapati gani, Ganesh aarti and festive ganpati songs. Everything streams free in the browser.",
  faqPhoneQ: "Does it work on a phone?",
  faqPhoneA:
    "Yes. The player is designed for mobile screens, with large play, skip and seek controls for easy use.",
  faqSourceQ: "Where does the music play from?",
  faqSourceA:
    "Songs play through YouTube's player. You can also open the same playlist on YouTube Music anytime.",
  faqPlaylistQ: "Is there a playlist I can follow?",
  faqPlaylistA:
    "Yes. Use the YouTube Music button in the footer to open and save the Marathi Gani or Ganapati gani playlist.",
  seek: "Seek",
  previousTrack: "Previous track",
  nextTrack: "Next track",
  play: "Play",
  pause: "Pause",
  language: "Language",
  chooseMood: "Choose a mood",
  previousMood: "Previous mood",
  nextMood: "Next mood",
} as const;

const mr: { [K in keyof typeof en]: string } = {
  listening: "ऐकत आहात",
  about: "आमच्याबद्दल",
  faq: "प्रश्नोत्तरे",
  support: "सपोर्ट",
  supportUs: "आम्हाला सपोर्ट करा",
  scroll: "स्क्रोल",
  pressPlay: "प्ले दाबा",
  welcomeTo: "स्वागत आहे",
  faqHeading: "Marathi Music Katta समजावून सांगितले",
  openOnYouTubeMusic: "YouTube Music वर उघडा",
  youtubeMusic: "YouTube Music",
  creditsYoutube: "क्रेडिट्स: YouTube",
  poweredBy: "द्वारे विकसित",
  siteTagline: "मराठी गाणी, एका टॅपवर",
  metaDescription:
    "मराठी गाणी आणि गणपती गाणी ऐका ऑनलाइन — Marathi gane, Ganapati gane मोफत प्लेलिस्ट. साइनअप नको. प्ले कराआणि ऐकत रहा.",
  notFoundBody: "ही पेज सापडली नाही.",
  backHome: "मुख्य पेजवर जा",
  loading: "लोड होत आहे…",
  footerDisclaimer:
    "ऑडिओ YouTube च्या प्लेयरद्वारे वाजतो. Marathi Music Katta संगीत होस्ट करत नाही किंवा त्याचा दावा करत नाही — सर्व हक्क त्यांच्या संबंधित मालकांचे आहेत.",
  featureMomentTitle: "क्षणासाठी बनवले",
  featureMomentBody:
    "सोप्या कंट्रोल्ससह नॉन-स्टॉप मराठी गाणी / Marathi gane प्लेलिस्ट — मोबाइल आणि डेस्कटॉपवर सहज चालते.",
  featureVibeTitle: "मराठी, गणेशोत्सव आणि बरंच काही",
  featureVibeBody:
    "मराठी गाणी, गणेशोत्सव गाने, प्रेमगीते आणि बरंच काही — पेज सोडल्याशिवाय मूड बदला.",
  featureAccountTitle: "अकाउंट नको",
  featureAccountBody:
    "इथेच ऐका, किंवा हवे असल्यास तोच प्लेलिस्ट YouTube Music वर उघडा.",
  faqWhatQ: "Marathi Music Katta म्हणजे काय?",
  faqWhatA:
    "Marathi Music Katta हे मराठी गाणी (Marathi gane), गणेशोत्सव गाणी (Ganapati gane) आणि बरंच काही मोफत ब्राउझर प्लेलिस्ट आहे — प्ले कराआणि अकाउंट न बनवता ऐका.",
  faqFreeQ: "Marathi Music Katta मोफत आहे का?",
  faqFreeA:
    "हो. मराठी गाणी, गणपती गाणी आणि इतर सर्व मूड्स इथे मोफत ऐकता येतात. ऐच्छिक सपोर्ट प्रोजेक्ट चालू ठेवण्यास मदत करते, पण प्ले करण्यासाठी काहीही आवश्यक नाही.",
  faqMarathiQ: "मराठी गाणी / Marathi gane ऑनलाइन कुठे ऐकायचे?",
  faqMarathiA:
    "इथेच Marathi Music Katta वर. मराठी मूड निवडा, प्ले कराआणि लोकप्रिय मराठी गाणी / Marathi gane ब्राउझरमध्ये ऐका — डाउनलोड किंवा साइनअप नको.",
  faqGanapatiQ: "गणपती गाणी मोफत कुठे प्ले करायची?",
  faqGanapatiA:
    "Marathi Music Katta वरील गणेशोत्सवातील Ganapati gane, गणेश आरती आणि सणासुदीची गणपती गाणी मोफत स्ट्रीम होतात — फक्त ब्राउझर पुरेसे.",
  faqPhoneQ: "फोनवर चालते का?",
  faqPhoneA:
    "हो. प्लेयर मोबाइल स्क्रीनसाठी डिझाइन केला आहे, मोठ्या प्ले, स्किप आणि सीक कंट्रोल्ससह.",
  faqSourceQ: "संगीत कुठून वाजते?",
  faqSourceA:
    "गाणी YouTube च्या प्लेयरद्वारे वाजतात. तोच प्लेलिस्ट तुम्ही कधीही YouTube Music वर उघडू शकता.",
  faqPlaylistQ: "फॉलो करण्यासाठी प्लेलिस्ट आहे का?",
  faqPlaylistA:
    "हो. फूटरमधील YouTube Music बटणाने मराठी गाणी किंवा गणपती गाणी प्लेलिस्ट उघडा आणि सेव्ह करा.",
  seek: "सीक",
  previousTrack: "मागील गाणे",
  nextTrack: "पुढील गाणे",
  play: "प्ले",
  pause: "थांबवा",
  language: "भाषा",
  chooseMood: "मूड निवडा",
  previousMood: "मागील मूड",
  nextMood: "पुढील मूड",
};

export const messages = { mr, en } as const;

export type MessageKey = keyof typeof en;

export function t(locale: Locale, key: MessageKey): string {
  return messages[locale][key] ?? messages.en[key];
}

export const FEATURE_KEYS = [
  {
    titleKey: "featureMomentTitle",
    bodyKey: "featureMomentBody",
    icon: "music",
  },
  {
    titleKey: "featureVibeTitle",
    bodyKey: "featureVibeBody",
    icon: "mic",
  },
  {
    titleKey: "featureAccountTitle",
    bodyKey: "featureAccountBody",
    icon: "clock",
  },
] as const satisfies ReadonlyArray<{
  titleKey: MessageKey;
  bodyKey: MessageKey;
  icon: "music" | "mic" | "clock";
}>;

export const FAQ_KEYS = [
  { questionKey: "faqWhatQ", answerKey: "faqWhatA" },
  { questionKey: "faqFreeQ", answerKey: "faqFreeA" },
  { questionKey: "faqMarathiQ", answerKey: "faqMarathiA" },
  { questionKey: "faqGanapatiQ", answerKey: "faqGanapatiA" },
  { questionKey: "faqPhoneQ", answerKey: "faqPhoneA" },
  { questionKey: "faqSourceQ", answerKey: "faqSourceA" },
  { questionKey: "faqPlaylistQ", answerKey: "faqPlaylistA" },
] as const satisfies ReadonlyArray<{
  questionKey: MessageKey;
  answerKey: MessageKey;
}>;
