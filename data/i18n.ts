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
  faqHeading: "Frequently asked",
  openOnYouTubeMusic: "Open on YouTube Music",
  youtubeMusic: "YouTube Music",
  creditsYoutube: "Credits: YouTube",
  poweredBy: "Powered by",
  siteTagline: "Marathi songs, one tap away",
  metaDescription:
    "Listen to Marathi songs — a free playlist, one tap away. No account needed.",
  notFoundBody: "That page doesn't exist.",
  backHome: "Back home",
  loading: "Loading…",
  footerDisclaimer:
    "Audio plays through YouTube's player. VibePlay does not host or claim ownership of the music — all rights belong to their respective owners.",
  featureMomentTitle: "Made for the moment",
  featureMomentBody:
    "A non-stop Marathi playlist with simple controls that work on mobile and desktop.",
  featureVibeTitle: "One tap, full vibe",
  featureVibeBody:
    "Marathi hits plus chai, rain, night drives and more — switch moods without leaving the page.",
  featureAccountTitle: "No account needed",
  featureAccountBody:
    "Start listening here, or open the same playlist on YouTube Music whenever you want.",
  faqWhatQ: "What is VibePlay?",
  faqWhatA:
    "VibePlay is a browser-based Marathi music player — press play and listen without creating an account.",
  faqFreeQ: "Is VibePlay free to use?",
  faqFreeA:
    "Yes. Listening here is free. Optional support helps keep the project running, but nothing is required to play.",
  faqPhoneQ: "Does it work on a phone?",
  faqPhoneA:
    "Yes. The player is designed for mobile screens, with large play, skip and seek controls for easy use.",
  faqSourceQ: "Where does the music play from?",
  faqSourceA:
    "Songs play through YouTube's player. You can also open the same playlist on YouTube Music anytime.",
  faqPlaylistQ: "Is there a playlist I can follow?",
  faqPlaylistA:
    "Yes. Use the YouTube Music button in the footer to open and save the playlist.",
  seek: "Seek",
  previousTrack: "Previous track",
  nextTrack: "Next track",
  play: "Play",
  pause: "Pause",
  mute: "Mute",
  unmute: "Unmute",
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
  faqHeading: "वारंवार विचारले जाणारे प्रश्न",
  openOnYouTubeMusic: "YouTube Music वर उघडा",
  youtubeMusic: "YouTube Music",
  creditsYoutube: "क्रेडिट्स: YouTube",
  poweredBy: "द्वारे समर्थित",
  siteTagline: "मराठी गाणी, एका टॅपवर",
  metaDescription:
    "मराठी गाणी ऐका — लोकप्रिय प्लेलिस्ट, एका टॅपवर. साइनअप नको.",
  notFoundBody: "ही पेज सापडली नाही.",
  backHome: "मुख्य पेजवर जा",
  loading: "लोड होत आहे…",
  footerDisclaimer:
    "ऑडिओ YouTube च्या प्लेयरद्वारे वाजतो. VibePlay संगीत होस्ट करत नाही किंवा त्याचा दावा करत नाही — सर्व हक्क त्यांच्या संबंधित मालकांचे आहेत.",
  featureMomentTitle: "क्षणासाठी बनवले",
  featureMomentBody:
    "सोप्या कंट्रोल्ससह नॉन-स्टॉप मराठी प्लेलिस्ट — मोबाइल आणि डेस्कटॉपवर सहज चालते.",
  featureVibeTitle: "एक टॅप, पूर्ण व्हाइब",
  featureVibeBody:
    "मराठी हिट्ससोबत चहा, पाऊस, रात्रीचे ड्राइव्ह आणि आणखी — पेज सोडल्याशिवाय मूड बदला.",
  featureAccountTitle: "अकाउंट नको",
  featureAccountBody:
    "इथेच ऐका, किंवा हवे असल्यास तोच प्लेलिस्ट YouTube Music वर उघडा.",
  faqWhatQ: "VibePlay म्हणजे काय?",
  faqWhatA:
    "VibePlay हा ब्राउझर-आधारित मराठी म्युझिक प्लेयर आहे — प्ले दाबा आणि अकाउंट न बनवता ऐका.",
  faqFreeQ: "VibePlay मोफत आहे का?",
  faqFreeA:
    "हो. इथे ऐकणे मोफत आहे. ऐच्छिक सपोर्ट प्रोजेक्ट चालू ठेवण्यास मदत करते, पण प्ले करण्यासाठी काहीही आवश्यक नाही.",
  faqPhoneQ: "फोनवर चालते का?",
  faqPhoneA:
    "हो. प्लेयर मोबाइल स्क्रीनसाठी डिझाइन केला आहे, मोठ्या प्ले, स्किप आणि सीक कंट्रोल्ससह.",
  faqSourceQ: "संगीत कुठून वाजते?",
  faqSourceA:
    "गाणी YouTube च्या प्लेयरद्वारे वाजतात. तोच प्लेलिस्ट तुम्ही कधीही YouTube Music वर उघडू शकता.",
  faqPlaylistQ: "फॉलो करण्यासाठी प्लेलिस्ट आहे का?",
  faqPlaylistA:
    "हो. फूटरमधील YouTube Music बटणाने प्लेलिस्ट उघडा आणि सेव्ह करा.",
  seek: "सीक",
  previousTrack: "मागील गाणे",
  nextTrack: "पुढील गाणे",
  play: "प्ले",
  pause: "थांबवा",
  mute: "म्यूट",
  unmute: "अनम्यूट",
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
  { questionKey: "faqPhoneQ", answerKey: "faqPhoneA" },
  { questionKey: "faqSourceQ", answerKey: "faqSourceA" },
  { questionKey: "faqPlaylistQ", answerKey: "faqPlaylistA" },
] as const satisfies ReadonlyArray<{
  questionKey: MessageKey;
  answerKey: MessageKey;
}>;
