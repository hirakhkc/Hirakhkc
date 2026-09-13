(function () {
  'use strict';

  const hindi = {
    'Vedic Kundali Software': 'वैदिक कुंडली सॉफ्टवेयर', 'Birth Information': 'जन्म विवरण',
    'All times are local': 'सभी समय स्थानीय हैं', 'Name': 'नाम', 'Sex': 'लिंग', 'Language': 'भाषा',
    'Male': 'पुरुष', 'Female': 'महिला', 'Other': 'अन्य', 'Date of Birth': 'जन्म तिथि',
    'Time of Birth': 'जन्म समय', 'Country / Region': 'देश / क्षेत्र', 'Birth Place': 'जन्म स्थान',
    'Latitude': 'अक्षांश', 'Longitude': 'देशांतर', 'UTC Time-Zone Offset': 'UTC समय-अंतर',
    'Ayanamsa': 'अयनांश', 'Forecast From': 'भविष्यफल आरम्भ', 'Generate Kundali': 'कुंडली बनाएँ',
    'Calculation standard': 'गणना मानक', 'New': 'नया', 'My Details': 'मेरा विवरण',
    'Check for Updates': 'अपडेट जाँचें', 'Print / PDF': 'प्रिंट / PDF',
    'Create a complete Vedic birth chart': 'संपूर्ण वैदिक जन्मकुंडली बनाएँ',
    'Enter the birth details and select Generate Kundali. The report is arranged for on-screen study and clean PDF printing.': 'जन्म विवरण भरकर “कुंडली बनाएँ” चुनें। रिपोर्ट स्क्रीन पर पढ़ने और साफ PDF प्रिंट के लिए व्यवस्थित है।',
    'Vedic Horoscope': 'वैदिक जन्मपत्रिका', 'Type at least 3 letters for worldwide suggestions': 'विश्वव्यापी सुझावों के लिए कम-से-कम 3 अक्षर लिखें',
    'Save This Custom Place': 'यह स्थान सुरक्षित करें', 'Calculation standard': 'गणना पद्धति',
    'Sidereal zodiac': 'निरयन राशि-चक्र', 'True node': 'स्पष्ट राहु', 'North Indian charts': 'उत्तर भारतीय कुंडली',
    'Summary': 'सारांश', 'Nirayana Planets': 'निरयन ग्रह', 'Sayan Planets': 'सायन ग्रह',
    'Bhav & Chalit': 'भाव एवं चलित', 'Charts': 'कुंडलियाँ', 'Vargas': 'वर्ग कुंडलियाँ',
    'Shodashvarga Table': 'षोडशवर्ग तालिका', 'Maitri': 'मैत्री', 'Dasha': 'दशा',
    'Aspects': 'दृष्टियाँ', 'Pratyantar Dasha': 'प्रत्यंतर दशा', 'Predictions': 'फलादेश',
    'Nirayana Planetary Longitudes': 'निरयन ग्रह स्पष्ट', 'Sayan Planetary Longitudes': 'सायन ग्रह स्पष्ट',
    'Nirayana Bhav Longitudes': 'निरयन भाव स्पष्ट', 'Principal Chakras': 'प्रमुख कुंडलियाँ',
    'Planetary Friendship': 'ग्रह मैत्री', 'Vimshottari Mahadasha': 'विंशोत्तरी महादशा',
    'Aspects and Conjunctions': 'ग्रह दृष्टि एवं युति', 'Vimshottari Dasa - Pratyantar': 'विंशोत्तरी दशा – प्रत्यंतर',
    'Detailed Predictions, Periods & Guidance': 'विस्तृत फलादेश, समयावधि एवं मार्गदर्शन',
    'Rashi Chakra': 'राशि चक्र', 'Hora Chakra': 'होरा चक्र', 'Drekkana Chakra': 'द्रेष्काण चक्र',
    'Navamsa Chakra': 'नवांश चक्र', 'Moon Rashi Chakra': 'चन्द्र राशि चक्र',
    'Nirayana Bhaav Chalit': 'निरयन भाव चलित', 'Nirayana Bhaav Chalit Chakra': 'निरयन भाव चलित चक्र',
    'Chalit Chakra': 'चलित चक्र', 'Tara Chakra': 'तारा चक्र', 'Ghat Chakra': 'घात चक्र',
    'Avkahda Chakra': 'अवकहड़ा चक्र', 'Planet': 'ग्रह', 'Rashi': 'राशि', 'Degrees': 'अंश',
    'Nakshatra': 'नक्षत्र', 'Pad': 'चरण', 'Rashi Lord': 'राशि स्वामी', 'Nak. Lord': 'नक्षत्र स्वामी',
    'Bhav': 'भाव', 'Bhav Begin': 'भाव आरम्भ', 'Bhav Middle': 'भाव मध्य',
    'Middle Nakshatra': 'मध्य नक्षत्र', 'Planets': 'ग्रह', 'Distance': 'दूरी',
    'Aspect/Conjunction': 'दृष्टि/युति', 'Orb': 'दीप्तांश', 'Mahadasha': 'महादशा',
    'Antardasha': 'अंतरदशा', 'Pratyantar': 'प्रत्यंतर', 'From': 'आरम्भ', 'To': 'समाप्ति', 'Years': 'वर्ष',
    'General Characteristics': 'सामान्य व्यक्तित्व', 'Mind and emotional nature': 'मन एवं भावनात्मक प्रकृति',
    'Education and profession': 'शिक्षा एवं व्यवसाय', 'Relationships and wellbeing': 'सम्बन्ध एवं स्वास्थ्य',
    'Current time-period guidance': 'वर्तमान समयावधि मार्गदर्शन', 'Running Mahadasha': 'वर्तमान महादशा',
    'Running Antardasha': 'वर्तमान अंतरदशा', 'Constructive actions': 'हितकारी कार्य',
    'Points of caution': 'सावधानियाँ', 'Traditional gemstone consideration': 'पारम्परिक रत्न-विचार',
    'Rolling 12-Month Guidance': 'आगामी 12 महीनों का मार्गदर्शन', 'Recommended:': 'क्या करें:',
    'Take care:': 'सावधानी:', 'Month': 'मास', 'Tithi': 'तिथि', 'Day': 'वार', 'Yog': 'योग',
    'Karan': 'करण', 'Prahar': 'प्रहर', 'Moon': 'चन्द्र', 'Stri-Chandra': 'स्त्री-चन्द्र',
    'Varna': 'वर्ण', 'Vashya': 'वश्य', 'Charan': 'चरण', 'Varg': 'वर्ग', 'Akshar': 'अक्षर',
    'Yoni': 'योनि', 'Gana': 'गण', 'Nadi': 'नाड़ी', 'Ayan': 'अयन', 'Ritu': 'ऋतु',
    'Time of Birth (Standard)': 'जन्म समय (मानक)', 'Time Zone/Country': 'समय क्षेत्र/देश',
    'Standard Longitude': 'मानक देशांतर', 'Local Time Correction': 'स्थानीय समय संशोधन',
    'Local Birth Time': 'स्थानीय जन्म समय', 'Sun Rise (Local)': 'सूर्योदय (स्थानीय)',
    'Sun Set (Local)': 'सूर्यास्त (स्थानीय)', 'Sun Rise (Standard)': 'सूर्योदय (मानक)',
    'Sun Set (Standard)': 'सूर्यास्त (मानक)', 'Sun Sign (Sayan)': 'सूर्य राशि (सायन)',
    'Lagna-Lagna Lord': 'लग्न–लग्नेश', 'Rashi-Rashi Lord': 'राशि–राशीश',
    'Nakshatra-Charan': 'नक्षत्र–चरण', 'NakshatraLord': 'नक्षत्र स्वामी',
    'Balance of Dasa (Vimsottari Mahadasha)': 'विंशोत्तरी महादशा शेष',
    'Concept & Direction:': 'परिकल्पना एवं निर्देशन:', 'Phone': 'फोन',
    'Saved place': 'सुरक्षित स्थान', 'Searching worldwide places…': 'विश्वभर में स्थान खोजे जा रहे हैं…',
    'Online search unavailable — add the place manually': 'ऑनलाइन खोज उपलब्ध नहीं—स्थान स्वयं जोड़ें',
    'Custom birthplace saved on this device': 'विशेष जन्मस्थान इस उपकरण में सुरक्षित हुआ',
    'Please enter a valid place name, latitude, longitude and UTC offset.': 'कृपया सही स्थान, अक्षांश, देशांतर और UTC अंतर भरें।',
    'Coordinates inserted · detecting time zone…': 'निर्देशांक भर गए—समय क्षेत्र खोजा जा रहा है…',
    'Coordinates inserted; please verify the UTC offset': 'निर्देशांक भर गए; कृपया UTC अंतर जाँचें',
    'Latitude, longitude and time zone inserted automatically': 'अक्षांश, देशांतर और समय क्षेत्र अपने-आप भर गए',
    'No major aspect within the stated orbs.': 'निर्धारित दीप्तांश में कोई प्रमुख दृष्टि नहीं मिली।',
    'Birth nakshatra:': 'जन्म नक्षत्र:', 'Balance lord:': 'शेष दशा स्वामी:',
    'Outside calculated range': 'गणना अवधि से बाहर', 'Not available': 'उपलब्ध नहीं',
    'direct, energetic and willing to begin new work': 'सीधा, ऊर्जावान और नए कार्य आरम्भ करने वाला',
    'steady, practical and drawn toward security and beauty': 'स्थिर, व्यावहारिक तथा सुरक्षा और सौन्दर्यप्रिय',
    'curious, adaptable and skilled in communication': 'जिज्ञासु, अनुकूलनशील और संवाद-कुशल',
    'sensitive, protective and strongly connected with home': 'संवेदनशील, रक्षक और परिवार से गहराई से जुड़ा',
    'confident, expressive and naturally inclined to lead': 'आत्मविश्वासी, अभिव्यक्तिशील और स्वाभाविक नेतृत्वशील',
    'analytical, helpful and attentive to detail': 'विश्लेषणशील, सहायक और सूक्ष्म विवरण पर ध्यान देने वाला',
    'diplomatic, relationship-oriented and appreciative of harmony': 'कूटनीतिक, सम्बन्ध-केंद्रित और सामंजस्यप्रिय',
    'intense, private and capable of deep transformation': 'गम्भीर, अंतर्मुखी और गहरे परिवर्तन में सक्षम',
    'truth-seeking, independent and attracted to learning and travel': 'सत्य-खोजी, स्वतंत्र तथा ज्ञान और यात्रा में रुचि रखने वाला',
    'disciplined, patient and focused on lasting achievement': 'अनुशासित, धैर्यवान और स्थायी उपलब्धि पर केंद्रित',
    'original, socially aware and committed to independent ideas': 'मौलिक, सामाजिक रूप से सजग और स्वतंत्र विचारों वाला',
    'imaginative, compassionate and spiritually receptive': 'कल्पनाशील, करुणामय और आध्यात्मिक रूप से ग्रहणशील',
    'growth, useful contacts and constructive planning': 'वृद्धि, उपयोगी सम्पर्क और रचनात्मक योजना',
    'steady progress through patience and responsibility': 'धैर्य और उत्तरदायित्व से स्थिर प्रगति',
    'a mixed month requiring measured decisions': 'मिश्रित महीना; सोच-समझकर निर्णय आवश्यक',
    'Advance education, proposals and long-term plans after checking details.': 'विवरण जाँचकर शिक्षा, प्रस्ताव और दीर्घकालीन योजनाएँ आगे बढ़ाएँ।',
    'Complete delayed duties, organise finances and maintain a regular routine.': 'रुके कार्य पूरे करें, वित्त व्यवस्थित रखें और नियमित दिनचर्या अपनाएँ।',
    'Review commitments, preserve cash reserves and communicate carefully.': 'प्रतिबद्धताओं की समीक्षा करें, धन-संचय सुरक्षित रखें और सावधानी से संवाद करें।',
    'Avoid anger, hurried travel and unnecessary confrontation.': 'क्रोध, जल्दबाज़ी की यात्रा और अनावश्यक टकराव से बचें।',
    'Avoid over-promising, speculation and decisions made under pressure.': 'अधिक वचन, सट्टा और दबाव में निर्णय से बचें।',
    'With ':'जब ',' rising, the native is often ':' लग्न उदित हो, जातक प्रायः ','The Moon in ':'चन्द्रमा ',' placed in ':' में और ',' nakshatra (pada ':' नक्षत्र (चरण ',' suggests a mind that is ':' में स्थित होने से मन ','The nakshatra lord ':'नक्षत्र स्वामी ',' colours habits, reactions and emotional priorities.':' आदतों, प्रतिक्रियाओं और भावनात्मक प्राथमिकताओं को प्रभावित करता है।','Mercury describes learning, Jupiter describes wisdom, and the tenth house describes public work.':'बुध शिक्षा, गुरु ज्ञान और दशम भाव कर्मक्षेत्र को दर्शाता है।','This chart should be judged through their signs, houses and operating dasha.':'इनकी राशि, भाव और चल रही दशा के आधार पर कुंडली का विचार करना चाहिए।','Periods ruled by well-supported planets are traditionally considered more constructive.':'बलवान ग्रहों की दशाएँ परम्परागत रूप से अधिक फलदायी मानी जाती हैं।','Astrological indications are tendencies, not certainties; health concerns should always be discussed with qualified professionals.':'ज्योतिषीय संकेत सम्भावनाएँ हैं, निश्चितता नहीं; स्वास्थ्य समस्या में योग्य चिकित्सक की सलाह आवश्यक है।','Keep important decisions documented and review them calmly.':'महत्त्वपूर्ण निर्णय लिखित रखें और शांत मन से उनकी समीक्षा करें।','Do not make medical, legal or financial decisions from astrology alone.':'केवल ज्योतिष के आधार पर चिकित्सा, कानूनी या वित्तीय निर्णय न लें।','Avoid impulsive investment, conflict and major commitments during emotionally unsettled days.':'भावनात्मक अस्थिरता के दिनों में जल्दबाज़ निवेश, विवाद और बड़ी प्रतिबद्धता से बचें।','Recheck the recorded birth time before relying on divisional charts.':'वर्ग कुंडलियों पर निर्भर होने से पहले दर्ज जन्मसमय दोबारा जाँचें।','Forecast begins from the selected Forecast From date and considers major Jupiter, Saturn and Mars transits from the natal Moon. Use it as traditional guidance, not certainty.':'भविष्यफल चुनी गई आरम्भ तिथि से अगले 12 महीनों के गुरु, शनि और मंगल गोचर पर आधारित है। इसे पारम्परिक मार्गदर्शन मानें, निश्चित परिणाम नहीं।',
    'January':'जनवरी','February':'फ़रवरी','March':'मार्च','April':'अप्रैल','May':'मई','June':'जून','July':'जुलाई','August':'अगस्त','September':'सितंबर','October':'अक्टूबर','November':'नवंबर','December':'दिसंबर',
    'Sunday':'रविवार','Monday':'सोमवार','Tuesday':'मंगलवार','Wednesday':'बुधवार','Thursday':'गुरुवार','Friday':'शुक्रवार','Saturday':'शनिवार',
    'Aries':'मेष','Taurus':'वृषभ','Gemini':'मिथुन','Cancer':'कर्क','Leo':'सिंह','Virgo':'कन्या','Libra':'तुला','Scorpio':'वृश्चिक','Sagittarius':'धनु','Capricorn':'मकर','Aquarius':'कुम्भ','Pisces':'मीन',
    'Sun':'सूर्य','Mars':'मंगल','Mercury':'बुध','Jupiter':'गुरु','Venus':'शुक्र','Saturn':'शनि','Rahu':'राहु','Ketu':'केतु','Asc':'लग्न'
  };

  const bengali = {
    'Vedic Kundali Software':'বৈদিক কুণ্ডলী সফটওয়্যার','Birth Information':'জন্মের তথ্য','All times are local':'সব সময় স্থানীয়','Name':'নাম','Sex':'লিঙ্গ','Language':'ভাষা','Male':'পুরুষ','Female':'মহিলা','Other':'অন্যান্য','Date of Birth':'জন্মতারিখ','Time of Birth':'জন্মসময়','Country / Region':'দেশ / অঞ্চল','Birth Place':'জন্মস্থান','Latitude':'অক্ষাংশ','Longitude':'দ্রাঘিমাংশ','UTC Time-Zone Offset':'UTC সময়ের পার্থক্য','Ayanamsa':'অয়নাংশ','Forecast From':'পূর্বাভাস শুরু','Generate Kundali':'কুণ্ডলী তৈরি করুন','Calculation standard':'গণনা পদ্ধতি','New':'নতুন','My Details':'আমার তথ্য','Check for Updates':'আপডেট দেখুন','Print / PDF':'প্রিন্ট / PDF','Create a complete Vedic birth chart':'সম্পূর্ণ বৈদিক জন্মকুণ্ডলী তৈরি করুন','Enter the birth details and select Generate Kundali. The report is arranged for on-screen study and clean PDF printing.':'জন্মের তথ্য পূরণ করে “কুণ্ডলী তৈরি করুন” চাপুন। রিপোর্টটি স্ক্রিনে পড়া ও পরিষ্কার PDF প্রিন্টের জন্য সাজানো।','Vedic Horoscope':'বৈদিক জন্মপত্রিকা','Type at least 3 letters for worldwide suggestions':'বিশ্বব্যাপী স্থানের পরামর্শ পেতে অন্তত ৩টি অক্ষর লিখুন','Save This Custom Place':'এই স্থান সংরক্ষণ করুন','Summary':'সারাংশ','Nirayana Planets':'নিরয়ণ গ্রহ','Sayan Planets':'সায়ন গ্রহ','Bhav & Chalit':'ভাব ও চলিত','Charts':'চক্রসমূহ','Vargas':'বর্গচক্র','Shodashvarga Table':'ষোড়শবর্গ তালিকা','Maitri':'মৈত্রী','Dasha':'দশা','Aspects':'দৃষ্টি','Pratyantar Dasha':'প্রত্যন্তর দশা','Predictions':'ফলাফল','Nirayana Planetary Longitudes':'নিরয়ণ গ্রহের দ্রাঘিমা','Sayan Planetary Longitudes':'সায়ন গ্রহের দ্রাঘিমা','Nirayana Bhav Longitudes':'নিরয়ণ ভাবের দ্রাঘিমা','Principal Chakras':'প্রধান চক্রসমূহ','Planetary Friendship':'গ্রহমৈত্রী','Vimshottari Mahadasha':'বিংশোত্তরী মহাদশা','Aspects and Conjunctions':'গ্রহদৃষ্টি ও সংযোগ','Vimshottari Dasa - Pratyantar':'বিংশোত্তরী দশা – প্রত্যন্তর','Detailed Predictions, Periods & Guidance':'বিস্তারিত ফলাফল, সময়কাল ও নির্দেশনা','Rashi Chakra':'রাশি চক্র','Hora Chakra':'হোরা চক্র','Drekkana Chakra':'দ্রেক্কাণ চক্র','Navamsa Chakra':'নবাংশ চক্র','Moon Rashi Chakra':'চন্দ্র রাশি চক্র','Nirayana Bhaav Chalit':'নিরয়ণ ভাব চলিত','Nirayana Bhaav Chalit Chakra':'নিরয়ণ ভাব চলিত চক্র','Chalit Chakra':'চলিত চক্র','Tara Chakra':'তারা চক্র','Ghat Chakra':'ঘাত চক্র','Avkahda Chakra':'অবকহড়া চক্র','Planet':'গ্রহ','Rashi':'রাশি','Degrees':'ডিগ্রি','Nakshatra':'নক্ষত্র','Pad':'পদ','Rashi Lord':'রাশিপতি','Nak. Lord':'নক্ষত্রপতি','Bhav':'ভাব','Bhav Begin':'ভাব আরম্ভ','Bhav Middle':'ভাব মধ্য','Middle Nakshatra':'মধ্য নক্ষত্র','Planets':'গ্রহসমূহ','Distance':'দূরত্ব','Aspect/Conjunction':'দৃষ্টি/সংযোগ','Orb':'অর্ব','Mahadasha':'মহাদশা','Antardasha':'অন্তর্দশা','Pratyantar':'প্রত্যন্তর','From':'শুরু','To':'শেষ','Years':'বছর','General Characteristics':'সাধারণ বৈশিষ্ট্য','Mind and emotional nature':'মন ও আবেগের প্রকৃতি','Education and profession':'শিক্ষা ও পেশা','Relationships and wellbeing':'সম্পর্ক ও সুস্থতা','Current time-period guidance':'বর্তমান সময়ের নির্দেশনা','Running Mahadasha':'চলতি মহাদশা','Running Antardasha':'চলতি অন্তর্দশা','Constructive actions':'কল্যাণকর করণীয়','Points of caution':'সতর্কতা','Traditional gemstone consideration':'প্রচলিত রত্ন-বিবেচনা','Rolling 12-Month Guidance':'আগামী ১২ মাসের নির্দেশনা','Recommended:':'করণীয়:','Take care:':'সতর্ক থাকুন:','Month':'মাস','Tithi':'তিথি','Day':'বার','Yog':'যোগ','Karan':'করণ','Prahar':'প্রহর','Moon':'চন্দ্র','Stri-Chandra':'স্ত্রী-চন্দ্র','Varna':'বর্ণ','Vashya':'বশ্য','Charan':'চরণ','Varg':'বর্গ','Akshar':'অক্ষর','Yoni':'যোনি','Gana':'গণ','Nadi':'নাড়ি','Ayan':'অয়ন','Ritu':'ঋতু','Time of Birth (Standard)':'জন্মসময় (মানক)','Time Zone/Country':'সময় অঞ্চল/দেশ','Standard Longitude':'মানক দ্রাঘিমাংশ','Local Time Correction':'স্থানীয় সময় সংশোধন','Local Birth Time':'স্থানীয় জন্মসময়','Sun Rise (Local)':'সূর্যোদয় (স্থানীয়)','Sun Set (Local)':'সূর্যাস্ত (স্থানীয়)','Sun Rise (Standard)':'সূর্যোদয় (মানক)','Sun Set (Standard)':'সূর্যাস্ত (মানক)','Sun Sign (Sayan)':'সূর্য রাশি (সায়ন)','Lagna-Lagna Lord':'লগ্ন–লগ্নপতি','Rashi-Rashi Lord':'রাশি–রাশিপতি','Nakshatra-Charan':'নক্ষত্র–চরণ','NakshatraLord':'নক্ষত্রপতি','Balance of Dasa (Vimsottari Mahadasha)':'বিংশোত্তরী মহাদশার অবশিষ্ট','Concept & Direction:':'পরিকল্পনা ও নির্দেশনা:','Phone':'ফোন','Saved place':'সংরক্ষিত স্থান','Searching worldwide places…':'বিশ্বজুড়ে স্থান খোঁজা হচ্ছে…','Online search unavailable — add the place manually':'অনলাইন অনুসন্ধান নেই—স্থানটি নিজে যোগ করুন','Custom birthplace saved on this device':'বিশেষ জন্মস্থান এই যন্ত্রে সংরক্ষিত হয়েছে','Please enter a valid place name, latitude, longitude and UTC offset.':'সঠিক স্থান, অক্ষাংশ, দ্রাঘিমাংশ ও UTC পার্থক্য লিখুন।','Coordinates inserted · detecting time zone…':'স্থানাঙ্ক বসেছে—সময় অঞ্চল নির্ণয় হচ্ছে…','Coordinates inserted; please verify the UTC offset':'স্থানাঙ্ক বসেছে; UTC পার্থক্য যাচাই করুন','Latitude, longitude and time zone inserted automatically':'অক্ষাংশ, দ্রাঘিমাংশ ও সময় অঞ্চল স্বয়ংক্রিয়ভাবে বসেছে','No major aspect within the stated orbs.':'নির্ধারিত অর্বে কোনো প্রধান দৃষ্টি নেই।','Birth nakshatra:':'জন্ম নক্ষত্র:','Balance lord:':'অবশিষ্ট দশাপতি:','Outside calculated range':'গণনার সময়সীমার বাইরে','Not available':'উপলব্ধ নয়','direct, energetic and willing to begin new work':'সরাসরি, কর্মশক্তিসম্পন্ন ও নতুন কাজ শুরু করতে আগ্রহী','steady, practical and drawn toward security and beauty':'স্থিতিশীল, বাস্তববাদী এবং নিরাপত্তা ও সৌন্দর্যপ্রিয়','curious, adaptable and skilled in communication':'জিজ্ঞাসু, মানিয়ে নিতে সক্ষম ও যোগাযোগে দক্ষ','sensitive, protective and strongly connected with home':'সংবেদনশীল, রক্ষণশীল ও পরিবারের সঙ্গে গভীরভাবে যুক্ত','confident, expressive and naturally inclined to lead':'আত্মবিশ্বাসী, প্রকাশক্ষম ও স্বাভাবিক নেতৃত্বগুণসম্পন্ন','analytical, helpful and attentive to detail':'বিশ্লেষণী, সহায়ক ও সূক্ষ্ম বিষয়ে মনোযোগী','diplomatic, relationship-oriented and appreciative of harmony':'কূটনৈতিক, সম্পর্কমুখী ও সামঞ্জস্যপ্রিয়','intense, private and capable of deep transformation':'গভীর, অন্তর্মুখী ও বড় পরিবর্তনে সক্ষম','truth-seeking, independent and attracted to learning and travel':'সত্যসন্ধানী, স্বাধীন এবং শিক্ষা ও ভ্রমণপ্রিয়','disciplined, patient and focused on lasting achievement':'শৃঙ্খলাবদ্ধ, ধৈর্যশীল ও স্থায়ী সাফল্যে মনোযোগী','original, socially aware and committed to independent ideas':'মৌলিক, সমাজসচেতন ও স্বাধীন চিন্তায় স্থির','imaginative, compassionate and spiritually receptive':'কল্পনাশীল, সহানুভূতিশীল ও আধ্যাত্মিকভাবে গ্রহণশীল','growth, useful contacts and constructive planning':'উন্নতি, উপকারী যোগাযোগ ও গঠনমূলক পরিকল্পনা','steady progress through patience and responsibility':'ধৈর্য ও দায়িত্বে স্থির অগ্রগতি','a mixed month requiring measured decisions':'মিশ্র মাস; ভেবেচিন্তে সিদ্ধান্ত প্রয়োজন','Advance education, proposals and long-term plans after checking details.':'তথ্য যাচাই করে শিক্ষা, প্রস্তাব ও দীর্ঘমেয়াদি পরিকল্পনা এগিয়ে নিন।','Complete delayed duties, organise finances and maintain a regular routine.':'বকেয়া কাজ শেষ করুন, অর্থব্যবস্থা গুছিয়ে নিয়মিত জীবনযাপন করুন।','Review commitments, preserve cash reserves and communicate carefully.':'দায়বদ্ধতা পর্যালোচনা করুন, নগদ সঞ্চয় রক্ষা করুন এবং সতর্কভাবে কথা বলুন।','Avoid anger, hurried travel and unnecessary confrontation.':'রাগ, তাড়াহুড়োর ভ্রমণ ও অপ্রয়োজনীয় সংঘাত এড়ান।','Avoid over-promising, speculation and decisions made under pressure.':'অতিরিক্ত প্রতিশ্রুতি, জল্পনা ও চাপের সিদ্ধান্ত এড়ান।','With ':'যখন ',' rising, the native is often ':' লগ্ন উদিত হয়, জাতক সাধারণত ','The Moon in ':'চন্দ্র ',' placed in ':' রাশিতে ও ',' nakshatra (pada ':' নক্ষত্রে (চরণ ',' suggests a mind that is ':' অবস্থানের ফলে মন ','The nakshatra lord ':'নক্ষত্রপতি ',' colours habits, reactions and emotional priorities.':' অভ্যাস, প্রতিক্রিয়া ও আবেগের অগ্রাধিকারকে প্রভাবিত করেন।','Mercury describes learning, Jupiter describes wisdom, and the tenth house describes public work.':'বুধ শিক্ষা, বৃহস্পতি জ্ঞান এবং দশম ভাব কর্মক্ষেত্র নির্দেশ করে।','This chart should be judged through their signs, houses and operating dasha.':'তাদের রাশি, ভাব ও চলমান দশা দিয়ে এই কুণ্ডলী বিচার করা উচিত।','Periods ruled by well-supported planets are traditionally considered more constructive.':'শক্তিশালী গ্রহের দশা প্রচলিত মতে বেশি ফলপ্রসূ।','Astrological indications are tendencies, not certainties; health concerns should always be discussed with qualified professionals.':'জ্যোতিষীয় ইঙ্গিত সম্ভাবনা, নিশ্চয়তা নয়; স্বাস্থ্য সমস্যায় যোগ্য চিকিৎসকের পরামর্শ নিন।','Keep important decisions documented and review them calmly.':'গুরুত্বপূর্ণ সিদ্ধান্ত লিখে রাখুন এবং শান্তভাবে পর্যালোচনা করুন।','Do not make medical, legal or financial decisions from astrology alone.':'শুধু জ্যোতিষের ভিত্তিতে চিকিৎসা, আইনি বা আর্থিক সিদ্ধান্ত নেবেন না।','Avoid impulsive investment, conflict and major commitments during emotionally unsettled days.':'আবেগের অস্থির দিনে হঠকারী বিনিয়োগ, বিবাদ ও বড় অঙ্গীকার এড়ান।','Recheck the recorded birth time before relying on divisional charts.':'বর্গচক্রের উপর নির্ভর করার আগে জন্মসময় আবার যাচাই করুন।','Forecast begins from the selected Forecast From date and considers major Jupiter, Saturn and Mars transits from the natal Moon. Use it as traditional guidance, not certainty.':'নির্বাচিত তারিখ থেকে আগামী ১২ মাসের বৃহস্পতি, শনি ও মঙ্গলের গোচর ধরে পূর্বাভাস তৈরি হয়েছে। এটিকে প্রচলিত নির্দেশনা হিসেবে নিন, নিশ্চিত ফল নয়।','January':'জানুয়ারি','February':'ফেব্রুয়ারি','March':'মার্চ','April':'এপ্রিল','May':'মে','June':'জুন','July':'জুলাই','August':'আগস্ট','September':'সেপ্টেম্বর','October':'অক্টোবর','November':'নভেম্বর','December':'ডিসেম্বর','Sunday':'রবিবার','Monday':'সোমবার','Tuesday':'মঙ্গলবার','Wednesday':'বুধবার','Thursday':'বৃহস্পতিবার','Friday':'শুক্রবার','Saturday':'শনিবার','Aries':'মেষ','Taurus':'বৃষ','Gemini':'মিথুন','Cancer':'কর্কট','Leo':'সিংহ','Virgo':'কন্যা','Libra':'তুলা','Scorpio':'বৃশ্চিক','Sagittarius':'ধনু','Capricorn':'মকর','Aquarius':'কুম্ভ','Pisces':'মীন','Sun':'সূর্য','Mars':'মঙ্গল','Mercury':'বুধ','Jupiter':'বৃহস্পতি','Venus':'শুক্র','Saturn':'শনি','Rahu':'রাহু','Ketu':'কেতু','Asc':'লগ্ন'
  };

  Object.assign(hindi, {
    'Current Residence for Predictions':'वर्तमान निवास (फलादेश हेतु)','Current Country / Region':'वर्तमान देश / क्षेत्र','Where Living Now':'वर्तमान निवास स्थान','If blank, birth place will be used for predictions':'खाली रहने पर जन्मस्थान का उपयोग होगा','Current Latitude':'वर्तमान अक्षांश','Current Longitude':'वर्तमान देशांतर','Current UTC Offset':'वर्तमान UTC अंतर','Residence time zone':'निवास समय क्षेत्र','Use Birth Place as Current Residence':'जन्मस्थान को वर्तमान निवास बनाएँ','Calculation Basis & Residence Effect':'गणना आधार एवं निवास प्रभाव','Personalised 12-Month Transit Guidance':'व्यक्तिगत 12-मासिक गोचर मार्गदर्शन','Personality and Life Direction':'व्यक्तित्व एवं जीवन-दिशा','Education, Skills and Judgment':'शिक्षा, कौशल एवं निर्णय','Career, Work and Public Standing':'कर्म, व्यवसाय एवं प्रतिष्ठा','Income, Savings and Gains':'आय, बचत एवं लाभ','Networks and Fulfilment of Aims':'सम्पर्क एवं इच्छापूर्ति','Marriage, Partnership and Agreements':'विवाह, साझेदारी एवं समझौते','Health Routine and Resilience':'स्वास्थ्य दिनचर्या एवं सहनशक्ति','Operating Dasha at Forecast Start':'भविष्यफल आरम्भ की दशा','Forecast Date':'भविष्यफल तिथि','Dasha Focus':'दशा का केंद्र','Chart-Specific Priorities':'कुंडली-विशिष्ट प्राथमिकताएँ','Traditional Gemstone Review':'पारम्परिक रत्न समीक्षा','Personal Favourable Factors':'व्यक्तिगत शुभ कारक','Primary Colours':'प्रमुख शुभ रंग','Favourable Days':'शुभ दिन','Favourable Numbers':'शुभ अंक','Beneficial Direction':'लाभकारी दिशा','Best Time of Day':'दिन का श्रेष्ठ समय','Time Requiring Caution':'सावधानी का समय','Natal foundation:':'जन्मकुंडली आधार:','Current residence:':'वर्तमान निवास:','Relocated ascendant:':'स्थानांतरित लग्न:','Natal reference point':'जन्मकालीन संदर्भ बिंदु','exalted':'उच्च','debilitated':'नीच','in own sign':'स्वराशि में','in a neutral/mixed sign position':'मिश्र/सम स्थिति में'
  });
  Object.assign(bengali, {
    'Current Residence for Predictions':'ফলাফলের জন্য বর্তমান বাসস্থান','Current Country / Region':'বর্তমান দেশ / অঞ্চল','Where Living Now':'এখন কোথায় থাকেন','If blank, birth place will be used for predictions':'খালি রাখলে জন্মস্থান ব্যবহার হবে','Current Latitude':'বর্তমান অক্ষাংশ','Current Longitude':'বর্তমান দ্রাঘিমাংশ','Current UTC Offset':'বর্তমান UTC পার্থক্য','Residence time zone':'বাসস্থানের সময় অঞ্চল','Use Birth Place as Current Residence':'জন্মস্থানকে বর্তমান বাসস্থান করুন','Calculation Basis & Residence Effect':'গণনার ভিত্তি ও বাসস্থানের প্রভাব','Personalised 12-Month Transit Guidance':'ব্যক্তিগত ১২ মাসের গোচর নির্দেশনা','Personality and Life Direction':'ব্যক্তিত্ব ও জীবনের দিশা','Education, Skills and Judgment':'শিক্ষা, দক্ষতা ও বিচার','Career, Work and Public Standing':'কর্মজীবন, কাজ ও প্রতিষ্ঠা','Income, Savings and Gains':'আয়, সঞ্চয় ও লাভ','Networks and Fulfilment of Aims':'যোগাযোগ ও লক্ষ্যপূরণ','Marriage, Partnership and Agreements':'বিবাহ, অংশীদারি ও চুক্তি','Health Routine and Resilience':'স্বাস্থ্যাভ্যাস ও সহনশক্তি','Operating Dasha at Forecast Start':'পূর্বাভাস শুরুর দশা','Forecast Date':'পূর্বাভাসের তারিখ','Dasha Focus':'দশার মূল বিষয়','Chart-Specific Priorities':'কুণ্ডলী-নির্দিষ্ট অগ্রাধিকার','Traditional Gemstone Review':'প্রচলিত রত্ন পর্যালোচনা','Personal Favourable Factors':'ব্যক্তিগত শুভ সহায়ক','Primary Colours':'প্রধান শুভ রং','Favourable Days':'শুভ দিন','Favourable Numbers':'শুভ সংখ্যা','Beneficial Direction':'লাভজনক দিক','Best Time of Day':'দিনের শ্রেষ্ঠ সময়','Time Requiring Caution':'সতর্কতার সময়','Natal foundation:':'জন্মকুণ্ডলীর ভিত্তি:','Current residence:':'বর্তমান বাসস্থান:','Relocated ascendant:':'স্থানান্তরিত লগ্ন:','Natal reference point':'জন্মকালীন ভিত্তিবিন্দু','exalted':'তুঙ্গ','debilitated':'নীচস্থ','in own sign':'স্বরাশিতে','in a neutral/mixed sign position':'মিশ্র অবস্থানে'
  });
  const dictionaries = { Hindi: hindi, Bengali: bengali };
  const originals = new WeakMap();
  let applying = false;
  let observer;

  function translated(text, dictionary) {
    let output = text;
    Object.keys(dictionary).sort((a, b) => b.length - a.length).forEach(key => {
      if (output.includes(key)) output = output.split(key).join(dictionary[key]);
    });
    return output;
  }

  function applyLanguage() {
    if (applying) return;
    applying = true;
    if (observer) observer.disconnect();
    const chooser = document.querySelector('#language');
    const language = chooser ? chooser.value : 'English';
    const dictionary = dictionaries[language];
    document.documentElement.lang = language === 'Hindi' ? 'hi' : language === 'Bengali' ? 'bn' : 'en';
    document.body.dataset.language = language.toLowerCase();
    document.querySelectorAll('body *:not(script):not(style):not(input):not(textarea)').forEach(element => {
      Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()).forEach(node => {
        if (!originals.has(node)) originals.set(node, node.nodeValue);
        const source = originals.get(node);
        node.nodeValue = dictionary ? translated(source, dictionary) : source;
      });
    });
    if (chooser) {
      const labels = language === 'Hindi' ? ['अंग्रेज़ी','हिन्दी','बंगाली'] : language === 'Bengali' ? ['ইংরেজি','হিন্দি','বাংলা'] : ['English','Hindi','Bengali'];
      Array.from(chooser.options).forEach((option, index) => option.textContent = labels[index]);
    }
    applying = false;
    if (observer) observer.observe(document.querySelector('#softwareShell'), { childList: true, subtree: true });
  }

  const chooser = document.querySelector('#language');
  if (chooser) chooser.addEventListener('change', () => {
    localStorage.setItem('kundali_language', chooser.value);
    if (!document.querySelector('#report').hidden && typeof window.render === 'function' && typeof window.getData === 'function') window.render(window.getData());
    setTimeout(applyLanguage, 0);
  });
  if (chooser) {
    const saved = localStorage.getItem('kundali_language');
    if (saved && dictionaries[saved]) chooser.value = saved;
  }
  document.querySelector('#birthForm')?.addEventListener('submit', () => setTimeout(applyLanguage, 0));
  document.querySelector('#sampleBtn')?.addEventListener('click', () => setTimeout(applyLanguage, 0));
  document.querySelector('#printBtn')?.addEventListener('click', () => setTimeout(applyLanguage, 0));
  observer = new MutationObserver(() => {
    if (!applying) window.clearTimeout(window.__kundaliTranslationTimer);
    if (!applying) window.__kundaliTranslationTimer = window.setTimeout(applyLanguage, 30);
  });
  observer.observe(document.querySelector('#softwareShell'), { childList: true, subtree: true });
  applyLanguage();
})();
