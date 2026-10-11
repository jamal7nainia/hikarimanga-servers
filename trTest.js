const KNOWN_NAMES = {
    "naruto": "ناروتو", "sasuke": "ساسكي", "sakura": "ساكورا", "kakashi": "كاكاشي", "itachi": "إيتاتشي",
    "luffy": "لوفي", "zoro": "زورو", "sanji": "سانجي", "nami": "نامي", "goku": "غوكو", "vegeta": "فيجيتا",
    "ichigo": "إيتشيغو", "light": "لايت", "eren": "إيرين", "mikasa": "ميكاسا", "levi": "ليفاي",
    "tanjiro": "تانجيرو", "nezuko": "نيزوكو", "zenitsu": "زينيتسو", "inosuke": "إينوسكي",
    "gojo": "غوجو", "yuji": "يوجي", "megumi": "ميغومي", "denji": "دينجي", "power": "باور",
    "senku": "سينكو", "izuku": "إيزوكو", "deku": "ديكو", "bakugo": "باكوغو", "todoroki": "تودوروكي",
    "sukuna": "سوكونا", "yuta": "يوتا", "miku": "ميكو", "saitama": "سايتاما", "garou": "غارو",

    "jinwoo": "جين وو", "sung": "سونغ", "jin-woo": "جين وو", "cha": "تشا", "hae": "هاي", 
    "min": "مين", "seo": "سيو", "yoon": "يون", "kang": "كانغ", "park": "بارك", "kim": "كيم", 
    "lee": "لي", "choi": "تشوي", "jung": "جونغ", "han": "هان", "woo": "وو", "jin": "جين",
    "hyun": "هيون", "woo": "وو", "soo": "سو", "won": "وون", "jae": "جاي", "hoon": "هون",
    "hwan": "هوان", "ghun": "غون", "gun": "غون", "tae": "تاي", "guk": "غوك", "kuk": "غوك",
    "dokja": "دوكجا", "kirei": "كيري", "joonghyuk": "جونغهيوك", "sooyoung": "سويونغ",

    "wei": "وي", "wei-wuxian": "وي وو شيان", "lan": "لان", "wangji": "وانغجي", "xian": "شيان",
    "yun": "يون", "zhan": "جان", "chen": "تشين", "qing": "تشينغ", "shen": "شين", "feng": "فينغ",
    "xiao": "شياو", "ye": "يي", "long": "لونغ", "tian": "تيان", "hua": "هوا", "jun": "جون",
    "mei": "مي", "ling": "لينغ", "yan": "يان", "bai": "باي", "hei": "هي", "tang": "تانغ",
    "song": "سونغ", "xu": "شو", "zhao": "جاو", "liu": "ليو", "huang": "هوانغ", "wu": "وو",
    "zhang": "جانغ", "li": "لي", "wang": "وانغ", "yang": "يانغ", "zhou": "جو", "jiang": "جيانغ",
    "gu": "غو", "luo": "لوو", "qin": "تشين", "mo": "مو", "ran": "ران", "xie": "شيه", "lian": "ليان",
    "binghe": "بينغهي", "luo-binghe": "لوو بينغهي", "wuxian": "وو شيان", "wangji": "وانغ جي",
    "chu": "تشو", "wenzhou": "وينجيو", "zhou-zishu": "جو زيشو", "kexing": "كيكسينغ",
       
    "arthur": "أرثر", "lucas": "لوكاس", "jack": "جاك", "john": "جون", "david": "ديفيد",
    "william": "ويليام", "thomas": "توماس", "james": "جيمس", "robert": "روبرت", "charles": "تشارلز",
    "michael": "مايكل", "daniel": "دانيال", "matthew": "ماتيو", "alexander": "ألكسندر", "edward": "إدوارد",
    "george": "جورج", "joseph": "جوزيف", "richard": "ريتشارد", "henry": "هنري", "brian": "برايان",
    "kevin": "كيفن", "jason": "جايسون", "ian": "إيان", "eric": "إيريك", "adam": "آدم",
    "luke": "لوك", "ryan": "رايان", "leo": "ليو", "oliver": "أوليفر", "noah": "نوح",
    "elijah": "إيليا", "liam": "ليام", "benjamin": "بنيامين", "lucian": "لوسيان", "lewis": "لويس",
    "samuel": "سامويل", "nathan": "ناثان", "christopher": "كريستوفر", "andrew": "أندرو", "simon": "سايمون",
    "peter": "بيتر", "paul": "بول", "mark": "مارك", "jonathan": "جوناثان", "adrian": "أدريان",
    "victor": "فيكتور", "vincent": "فينسنت", "felix": "فيليكس", "kurt": "كورت", "karl": "كارل",
    "albert": "ألبيرت", "louis": "لويس", "harry": "هاري", "bruce": "بروس", "clark": "كلارك",
    "raymond": "رايموند", "lawrence": "لورنس", "alan": "ألان", "roy": "روي", "arthur": "آرثر",

    "elena": "إيلينا", "alice": "أليس", "mary": "ماري", "patricia": "باتريشيا", "jennifer": "جينيفير",
    "elizabeth": "إليزابيث", "linda": "ليندا", "barbara": "باربارا", "susan": "سوزان", "jessica": "جيسيكا",
    "sarah": "سارة", "karen": "كارن", "nancy": "نانسي", "lisa": "ليسا", "betty": "بيتي",
    "margaret": "مارغريت", "sandra": "ساندرا", "ashley": "أشلي", "kimberly": "كيمبرلي", "emily": "إيميلي",
    "donna": "دونا", "michelle": "ميشيل", "carol": "كارول", "amanda": "أماندا", "melissa": "ميليسا",
    "deborah": "ديبورا", "stephanie": "ستيفاني", "rebecca": "ريبكا", "sharon": "شارون", "laura": "لورا",
    "cynthia": "سينثيا", "kathleen": "كاثلين", "amy": "إيمي", "angela": "أنجيلا", "shirley": "شيرلي",
    "anna": "أنا", "brenda": "بريندا", "pamela": "باميلا", "nicole": "نيكول", "samantha": "سامانثا",
    "katherine": "كاثرين", "christine": "كريستين", "rachel": "راشيل", "catherine": "كاثرين", "virginia": "فيرجينيا",
    "debra": "ديبرا", "janet": "جانيت", "emma": "إيما", "olivia": "أوليفيا", "sophia": "صوفيا",
    "isabella": "إيزابيلا", "mia": "ميا", "charlotte": "شارلوت", "amelia": "أميليا", "harper": "هاربر",
    "evelyn": "إيفلين", "abigail": "أبيجيل", "clara": "كلارا", "lily": "ليلي", "chloe": "كلوي",

    "smith": "سميث", "jones": "جونز", "miller": "ميلر", "davis": "ديفيدز", "garcia": "غارسيا",
    "rodriguez": "رودريغيز", "wilson": "ويلسون", "martinez": "مارتينيز", "anderson": "أندرسون", "taylor": "تايلور",
    "thomas": "توماس", "moore": "مور", "jackson": "جاكسون", "martin": "مارتن", "lee": "لي",
    "perez": "بيريز", "thompson": "تومسون", "white": "وايت", "harris": "هاريس", "sanchez": "سانشيز",
    "clark": "كلارك", "ramirez": "راميريز", "lewis": "لويس", "robinson": "روبينسون", "walker": "واكر",
    "young": "يونغ", "allen": "ألان", "king": "كينغ", "wright": "رايت", "scott": "سكوت",
    "torres": "توريس", "nguyen": "نغوين", "hill": "هيل", "flores": "فلوريس", "green": "غرين",
    "adams": "أدامز", "nelson": "نيلسون", "baker": "بيكر", "hall": "هال", "rivera": "ريفيرا",
    "campbell": "كامبل", "mitchell": "ميتشيل", "carter": "كارتر", "roberts": "روبرتس", "gomez": "غوميز",
    "phillips": "فيليبس", "evans": "إيفانز", "turner": "تيرنر", "diaz": "دياز", "parker": "باركر",
    "lewin": "لوين", "leywin": "ليوين", "agris": "أغريس", "indrath": "إندراث", "greymore": "غريغور"

};

const JAPANESE_SYLLABLES = [
    ["shio", "شيو"], ["shia", "شيا"], ["shiu", "شيو"],
    ["chi", "تشي"], ["shi", "شي"], ["tsu", "تسو"], ["kya", "كيا"],
    ["kyu", "كيو"], ["kyo", "كيو"], ["sha", "شا"], ["shu", "شو"],
    ["sho", "شو"], ["cha", "تشا"], ["chu", "تشو"], ["cho", "تشو"],
    ["nya", "نيا"], ["nyu", "نيو"], ["nyo", "نيو"], ["hya", "هيا"],
    ["hyu", "هيو"], ["hyo", "هيو"], ["mya", "ميا"], ["myu", "ميو"],
    ["myo", "ميو"], ["rya", "ريا"], ["ryu", "ريو"], ["ryo", "ريو"],
    ["gya", "غيا"], ["gyu", "غيو"], ["gyo", "غيو"], ["jya", "جيا"],
    ["byo", "بيو"], ["pyo", "بيو"],

    ["ka", "كا"], ["ki", "كي"], ["ku", "كو"], ["ke", "كي"], ["ko", "كو"],
    ["sa", "سا"], ["su", "سو"], ["se", "سي"], ["so", "سو"],
    ["ta", "تا"], ["te", "تي"], ["to", "تو"],
    ["na", "نا"], ["ni", "ني"], ["nu", "نو"], ["ne", "ني"], ["no", "نو"],
    ["ha", "ها"], ["hi", "هي"], ["fu", "فو"], ["he", "هي"], ["ho", "هو"],
    ["ma", "ما"], ["mi", "مي"], ["mu", "مو"], ["me", "مي"], ["mo", "مو"],
    ["ya", "يا"], ["yu", "يو"], ["yo", "يو"],
    ["ra", "را"], ["ri", "ري"], ["ru", "رو"], ["re", "ري"], ["ro", "رو"],
    ["wa", "وا"], ["wo", "وو"],
    ["ga", "غا"], ["gi", "غي"], ["gu", "غو"], ["ge", "غي"], ["go", "غو"],
    ["za", "زا"], ["ji", "جي"], ["zu", "زو"], ["ze", "زي"], ["zo", "زو"],
    ["da", "دا"], ["di", "دي"], ["du", "دو"], ["de", "دي"], ["do", "دو"],
    ["ba", "با"], ["bi", "بي"], ["bu", "بو"], ["be", "بي"], ["bo", "بو"],
    ["pa", "با"], ["pi", "بي"], ["pu", "بو"], ["pe", "بي"], ["po", "بو"],

    ["a", "ا"], ["i", "ي"], ["u", "و"], ["e", "ي"], ["o", "و"],
    ["n", "ن"]
];

const KOREAN_PATTERNS = [
    ["hwan", "هوان"], ["gwan", "غوان"], ["kwan", "كوان"], 
    ["cheo", "تشو"], ["jyeo", "جيو"], ["shyeo", "شيو"],
    ["eok", "وك"], ["eong", "ونغ"], ["yeong", "يونغ"], ["myeong", "ميونغ"],
    ["hyeon", "هيون"], ["gyeong", "غيونغ"], ["jeong", "جونغ"],
    ["eo", "أو"], ["eu", "و"], ["ae", "يه"], ["oo", "و"], ["ui", "وي"], 
    ["ng", "نغ"], ["yeo", "يو"], ["ya", "يا"], ["yo", "يو"], ["yu", "يو"],
    ["ch", "تش"], ["g", "غ"], ["j", "ج"]
];

const CHINESE_PATTERNS = [
    ["xiong", "شيونغ"], ["qiong", "تشيونغ"], ["shuang", "شوانغ"], ["huang", "هوانغ"],
    ["zhuang", "جوانغ"], ["chuang", "تشوانغ"], ["xiang", "شيانغ"],
    
    ["zhi", "جي"], ["chi", "تشي"], ["shi", "شي"], ["zhu", "جو"],
    ["chu", "تشو"], ["shu", "شو"], ["zhe", "جي"], ["che", "تشي"],
    ["she", "شي"], ["zha", "جا"], ["cha", "تشا"], ["sha", "شا"],
    ["zho", "جو"], ["cho", "تشو"], ["sho", "شو"],
    ["xia", "شيا"], ["xie", "شيه"], ["xiu", "شيو"], 
    ["xin", "شين"], ["xing", "شينغ"], ["xu", "شو"], ["xian", "شيان"],
    ["qia", "تشيا"], ["qie", "شيه"], ["qin", "تشين"], ["qing", "تشينغ"], ["qian", "تشيان"], ["qu", "تشو"],
    ["jia", "جيا"], ["jie", "جيه"], ["jin", "جين"], ["jing", "جينغ"], ["jian", "جيان"], ["ju", "جو"],
    
    ["ang", "انغ"], ["eng", "ينغ"], ["ong", "ونغ"], ["ing", "ينغ"],
    ["ai", "اي"], ["ao", "او"], ["ei", "ي"], ["ou", "و"],
    ["an", "ان"], ["en", "ين"], ["in", "ين"], ["un", "ون"], ["er", "إير"],

    ["ba", "با"], ["bi", "بي"], ["bu", "بو"], ["bo", "بو"], ["bai", "باي"],
    ["pa", "با"], ["pi", "بي"], ["pu", "بو"], ["po", "بو"],
    ["ma", "ما"], ["mi", "مي"], ["mu", "مو"], ["mo", "مو"], ["mei", "مي"],
    ["fa", "فا"], ["fu", "فو"], ["fo", "فو"],
    ["da", "دا"], ["de", "دي"], ["di", "دي"], ["du", "دو"], ["dao", "داو"],
    ["ta", "تا"], ["te", "تي"], ["ti", "تي"], ["tu", "تو"],
    ["na", "نا"], ["ne", "ني"], ["ni", "ني"], ["nu", "نو"],
    ["la", "لا"], ["le", "لي"], ["li", "لي"], ["lu", "لو"], ["lo", "لو"],
    ["ga", "غا"], ["ge", "غي"], ["gu", "غو"], ["gao", "غاو"],
    ["ka", "كا"], ["ke", "كي"], ["ku", "كو"],
    ["ha", "ها"], ["he", "هي"], ["hu", "هو"], ["hua", "هوا"], 
    ["ya", "يا"], ["ye", "يه"], ["yu", "يو"], ["yun", "يون"], ["yan", "يان"], ["yang", "يانغ"],
    ["wa", "وا"], ["wu", "وو"], ["wan", "وان"], ["wang", "وانغ"], ["wei", "وي"],
    ["ru", "رو"], ["ren", "رين"], ["rong", "رونغ"], ["ri", "ري"],
    ["zi", "زي"], ["ze", "زي"], ["zu", "زو"], ["zong", "زونغ"],
    ["ci", "تسي"], ["ce", "تسي"], ["cu", "تسو"], ["cong", "تسونغ"],
    ["si", "سي"], ["se", "سي"], ["su", "سو"], ["song", "سونغ"],

    ["x", "ش"], ["q", "تش"], ["c", "تسي"], ["z", "ج"],
    ["a", "ا"], ["e", "ي"], ["i", "ي"], ["o", "و"], ["u", "و"]
];

const WESTERN_PATTERNS = [
   
    ["tion", "شن"], ["sion", "شن"], ["ph", "ف"], ["sh", "ش"], 
    ["ch", "تش"], ["th", "ث"], ["gh", "غ"], ["kh", "خ"],
    ["wh", "و"], ["ck", "ك"], ["kn", "ن"],

    ["ee", "ي"], ["ea", "ي"], ["oo", "و"], ["ou", "و"], 
    ["oi", "وي"], ["ay", "ي"], ["ey", "ي"], ["au", "و"],
    ["aw", "و"], ["ai", "اي"], ["oa", "و"], ["ie", "ي"],

    ["ius", "يوس"], ["us", "وس"], ["er", "ير"], ["or", "ور"],
    ["an", "ان"], ["am", "ام"], ["al", "ال"], ["en", "ين"],
    ["el", "يل"], ["on", "ون"], ["ar", "ار"], ["at", "ات"],

    ["ba", "با"], ["bi", "بي"], ["bu", "بو"], ["be", "بي"], ["bo", "بو"],
    ["ca", "كا"], ["ci", "سي"], ["cu", "كو"], ["ce", "سي"], ["co", "كو"],
    ["da", "دا"], ["di", "دي"], ["du", "دو"], ["de", "دي"], ["do", "دو"],
    ["fa", "فا"], ["fi", "في"], ["fu", "فو"], ["fe", "في"], ["fo", "فو"],
    ["ga", "غا"], ["gi", "جي"], ["gu", "غو"], ["ge", "جي"], ["go", "غو"],
    ["ha", "ها"], ["hi", "هي"], ["hu", "هو"], ["he", "هي"], ["ho", "هو"],
    ["ja", "جا"], ["ji", "جي"], ["ju", "جو"], ["je", "جي"], ["jo", "جو"],
    ["ka", "كا"], ["ki", "كي"], ["ku", "كو"], ["ke", "كي"], ["ko", "كو"],
    ["la", "لا"], ["li", "لي"], ["lu", "لو"], ["le", "لي"], ["lo", "لو"],
    ["ma", "ما"], ["mi", "مي"], ["mu", "مو"], ["me", "مي"], ["mo", "مو"],
    ["na", "نا"], ["ni", "ني"], ["nu", "نو"], ["ne", "ني"], ["no", "نو"],
    ["pa", "با"], ["pi", "بي"], ["pu", "بو"], ["pe", "بي"], ["po", "بو"],
    ["ra", "را"], ["ri", "ري"], ["ru", "رو"], ["re", "ري"], ["ro", "رو"],
    ["sa", "سا"], ["si", "سي"], ["su", "سو"], ["se", "سي"], ["so", "سو"],
    ["ta", "تا"], ["ti", "تي"], ["tu", "تو"], ["te", "تي"], ["to", "تو"],
    ["va", "فا"], ["vi", "في"], ["vu", "فو"], ["ve", "في"], ["vo", "فو"],
    ["wa", "وا"], ["wi", "وي"], ["wu", "و"], ["we", "وي"], ["wo", "و"],
    ["za", "زا"], ["zi", "زي"], ["zu", "زو"], ["ze", "زي"], ["zo", "زو"],

    ["c", "ك"], ["j", "ج"], ["x", "كس"], ["q", "ك"], ["v", "ف"],
    ["a", "ا"], ["e", "ي"], ["i", "ي"], ["o", "و"], ["u", "و"],
    ["b", "ب"], ["d", "د"], ["f", "ف"], ["g", "غ"], ["h", "هـ"],
    ["k", "ك"], ["l", "ل"], ["m", "م"], ["n", "ن"], ["p", "ب"],
    ["r", "ر"], ["s", "س"], ["t", "ت"], ["w", "و"], ["z", "ز"],
    ["y", "ي"]
];

function processPatterns(word, patterns) {
    const sortedPatterns = patterns.slice().sort((a, b) => b[0].length - a[0].length);

    let result = "";
    let remaining = word;

    while (remaining.length > 0) {
        const match = sortedPatterns.find(p => remaining.startsWith(p[0]));
        if (match) {
            result += match[1];
            remaining = remaining.slice(match[0].length);
        } else {
            result += remaining[0];
            remaining = remaining.slice(1);
        }
    }
    return result;
}

function applyPhoneticFallback(word, origin) {
    let orderOfOrigins = ["chinese", "korean", "japanese", "western"];

    if (origin && orderOfOrigins.includes(origin)) {
        orderOfOrigins = [origin].concat(orderOfOrigins.filter(o => o !== origin));
    }

    let finalResult = "";
    for (const currentOrigin of orderOfOrigins) {
        let patterns;
        if (currentOrigin === "korean") {
            patterns = KOREAN_PATTERNS.concat(JAPANESE_SYLLABLES);
        } else if (currentOrigin === "chinese") {
            patterns = CHINESE_PATTERNS;
        } else if (currentOrigin === "western") {
            patterns = WESTERN_PATTERNS;
        } else {
            patterns = JAPANESE_SYLLABLES;
        }

        let candidate = processPatterns(word, patterns);

        const hasEnglish = /[a-z]/i.test(candidate);

        if (!hasEnglish) {
            finalResult = candidate;
            break; 
        }
        finalResult = candidate;
    }

    finalResult = finalResult.replace(/بيي/g, "بي")
                             .replace(/اا+/g, "ا")
                             .replace(/يي+/g, "ي")
                             .replace(/وو+/g, "و");

    return finalResult;
}

function transliterateArabicName(name, origin = null) { 
    const trimmed = (name || "").trim();

    if (trimmed.length === 0) {
        return { original: name, arabic: "", confidence: "failed" };
    }

    const normalizedKey = trimmed.toLowerCase().replace(/[^a-z-]/g, "");

    if (KNOWN_NAMES[normalizedKey]) {
        return {
            original: trimmed,
            arabic: KNOWN_NAMES[normalizedKey],
            confidence: "verified"
        };
    }

    const parts = trimmed.split(/[\s-]+/).filter(p => p.length > 0);

    if (parts.length > 1) {
        const translatedParts = parts.map(part => {
            const key = part.toLowerCase();
            return KNOWN_NAMES[key] || applyPhoneticFallback(key, origin);
        });
        return {
            original: trimmed,
            arabic: translatedParts.join(" "),
            confidence: "best_effort"
        };
    }

    const fallback = applyPhoneticFallback(normalizedKey, origin);
    return {
        original: trimmed,
        arabic: fallback,
        confidence: "best_effort"
    };
}

console.log(transliterateArabicName("donal trump"));
