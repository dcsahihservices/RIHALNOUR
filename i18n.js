/* Traductions : add(clé, français, anglais, arabe) */
window.I18N = { fr: {}, en: {}, ar: {} };
const add = (k, fr, en, ar) => { I18N.fr[k] = fr; I18N.en[k] = en; I18N.ar[k] = ar; };

/* Titres d'onglet */
add("t_home", `Agence de voyages à Oujda`, `Travel agency in Oujda`, `وكالة أسفار في وجدة`);
add("t_services", `Nos services`, `Our services`, `خدماتنا`);
add("t_omra", `Omra`, `Umrah`, `العمرة`);
add("t_dest", `Destinations`, `Destinations`, `الوجهات`);
add("t_contact", `Contact`, `Contact`, `اتصل بنا`);

/* Navigation et éléments communs */
add("nav_home", `Accueil`, `Home`, `الرئيسية`);
add("nav_services", `Nos services`, `Services`, `خدماتنا`);
add("nav_omra", `Omra`, `Umrah`, `العمرة`);
add("nav_dest", `Destinations`, `Destinations`, `الوجهات`);
add("nav_contact", `Contact`, `Contact`, `اتصل بنا`);
add("nav_menu", `Menu`, `Menu`, `القائمة`);
add("lang_label", `Langue`, `Language`, `اللغة`);
add("skip", `Aller au contenu`, `Skip to content`, `انتقل إلى المحتوى`);
add("slogan", `Le monde à votre portée`, `The world within your reach`, `العالم في متناول يدك`);
add("cta_wa", `Écrire sur WhatsApp`, `Chat on WhatsApp`, `تواصل عبر واتساب`);
add("cta_quote", `Demander un devis`, `Request a quote`, `اطلب عرض سعر`);
add("cta_offers", `Voir les offres`, `See our offers`, `اكتشف العروض`);
add("cta_omra", `Découvrir l’espace Omra`, `Explore Umrah packages`, `اكتشف فضاء العمرة`);
add("ex", `Exemple`, `Example`, `مثال`);
add("close", `Fermer`, `Close`, `إغلاق`);
add("gal_open", `Agrandir la photo`, `Enlarge photo`, `تكبير الصورة`);

/* Messages WhatsApp pré-remplis */
add("wa_generic", `Bonjour RIHAL NOUR, je souhaite avoir des informations sur vos voyages.`, `Hello RIHAL NOUR, I would like information about your trips.`, `السلام عليكم رحال نور، أرغب في الحصول على معلومات حول رحلاتكم.`);
add("wa_dest", `Bonjour, je souhaite un devis pour : `, `Hello, I would like a quote for: `, `السلام عليكم، أرغب في عرض سعر لـ: `);
add("wa_offer", `Bonjour, je suis intéressé(e) par l’offre : `, `Hello, I am interested in the offer: `, `السلام عليكم، أنا مهتم بالعرض: `);
add("wa_omra", `Bonjour, je souhaite un devis pour une Omra.`, `Hello, I would like a quote for an Umrah trip.`, `السلام عليكم، أرغب في عرض سعر للعمرة.`);

/* Accueil */
add("hero_h", `Voyagez l’esprit tranquille, d’Oujda vers le monde.`, `Travel with peace of mind, from Oujda to the world.`, `سافر بقلب مطمئن، من وجدة نحو العالم.`);
add("hero_p", `Billets d’avion, séjours, voyages organisés et Omra : nous prenons en charge chaque détail, vous profitez du voyage.`, `Flights, stays, group tours and Umrah: we take care of every detail so you can enjoy the journey.`, `تذاكر الطيران، الإقامات، الرحلات المنظمة والعمرة: نتكفل بكل التفاصيل وأنت تستمتع بالرحلة.`);
add("about_h", `Une agence de proximité, à Oujda`, `A local agency, in Oujda`, `وكالة قريبة منك في وجدة`);
add("about_p1", `RIHAL NOUR accompagne les familles, les couples et les groupes à chaque étape de leur voyage, du choix de la destination jusqu’au jour du retour.`, `RIHAL NOUR supports families, couples and groups at every step of their trip, from choosing the destination to the day they return home.`, `ترافق «رحال نور» العائلات والأزواج والمجموعات في كل مراحل السفر، من اختيار الوجهة إلى يوم العودة.`);
add("about_p2", `Nous écoutons d’abord votre budget et vos envies, puis nous vous proposons un programme clair, avec des prix transparents.`, `We start by listening to your budget and wishes, then propose a clear itinerary with transparent prices.`, `نستمع أولاً إلى ميزانيتك ورغباتك، ثم نقترح عليك برنامجاً واضحاً بأسعار شفافة.`);
add("sec_sv_h", `Nos services`, `Our services`, `خدماتنا`);
add("sec_sv_p", `Tout ce qu’il faut pour votre voyage, au même endroit.`, `Everything your trip needs, in one place.`, `كل ما تحتاجه لرحلتك في مكان واحد.`);
add("sec_ds_h", `Destinations populaires`, `Popular destinations`, `وجهات شعبية`);
add("sec_ds_p", `Choisissez votre prochaine escapade, nous préparons le reste.`, `Pick your next getaway, we’ll prepare the rest.`, `اختر وجهتك القادمة ونحن نتكفل بالباقي.`);
add("of_h", `Offres de voyages`, `Travel offers`, `عروض السفر`);
add("of_note", `Exemples d’offres : prix et contenus fictifs, à remplacer.`, `Sample offers: prices and details are placeholders, to be replaced.`, `أمثلة للعروض: الأسعار والمحتوى وهمية ويجب استبدالها.`);
add("of1_t", `Istanbul, 5 jours`, `Istanbul, 5 days`, `إسطنبول، 5 أيام`);
add("of2_t", `Dubaï, 6 jours`, `Dubai, 6 days`, `دبي، 6 أيام`);
add("of3_t", `Andalousie, 8 jours`, `Andalusia, 8 days`, `الأندلس، 8 أيام`);
add("of_inc", `Vol, hôtel et transferts inclus.`, `Flight, hotel and transfers included.`, `الطيران والفندق والتنقلات مشمولة.`);
add("price_from", `À partir de`, `From`, `ابتداءً من`);

/* Section Omra (accueil + page Omra) */
add("om_h", `Omra : un voyage spirituel en toute sérénité`, `Umrah: a spiritual journey in complete serenity`, `العمرة: رحلة روحانية بكل طمأنينة`);
add("om_p", `Nous organisons votre Omra de A à Z : vols, hébergement près des Haram, accompagnement religieux et assistance sur place.`, `We organise your Umrah from start to finish: flights, accommodation near the Haram, religious guidance and on-site assistance.`, `ننظم عمرتك من البداية إلى النهاية: الطيران، الإقامة قرب الحرمين، المرافقة الدينية والمساعدة في عين المكان.`);
add("om_l1", `Organisation complète`, `Complete organisation`, `تنظيم متكامل`);
add("om_l1_d", `Dossier, vols, hôtels et transferts réunis dans un seul forfait.`, `Paperwork, flights, hotels and transfers combined in a single package.`, `الملف والطيران والفنادق والتنقلات في باقة واحدة.`);
add("om_l2", `Accompagnement religieux`, `Religious guidance`, `مرافقة دينية`);
add("om_l2_d", `Un encadrant vous guide dans les rites, étape par étape.`, `A guide walks you through the rites, step by step.`, `مرشد يرافقك في المناسك خطوة بخطوة.`);
add("om_l3", `Vols et hébergement`, `Flights and accommodation`, `الطيران والإقامة`);
add("om_l3_d", `Vols directs ou avec escale, hôtels proches des mosquées.`, `Direct or connecting flights, hotels close to the mosques.`, `رحلات مباشرة أو بتوقف، وفنادق قريبة من المسجدين.`);
add("om_l4", `Guidance et assistance`, `Guidance and assistance`, `توجيه ومساعدة`);
add("om_l4_d", `Une équipe joignable avant, pendant et après le voyage.`, `A team available before, during and after the trip.`, `فريق متاح قبل الرحلة وأثناءها وبعدها.`);
add("om_lead", `Un accompagnement attentif, pour vivre la Omra dans le calme et le recueillement.`, `Attentive support, so you can live the Umrah with calm and focus.`, `مرافقة دقيقة لتعيش العمرة بسكينة وخشوع.`);
add("om_makkah", `La Mecque`, `Makkah`, `مكة المكرمة`);
add("om_makkah_d", `Le Haram et la Kaaba, cœur de la Omra.`, `The Haram and the Kaaba, the heart of Umrah.`, `الحرم والكعبة المشرفة، قلب العمرة.`);
add("om_madinah", `Médine`, `Madinah`, `المدينة المنورة`);
add("om_madinah_d", `La Mosquée du Prophète ﷺ et ses environs.`, `The Prophet’s Mosque ﷺ and its surroundings.`, `المسجد النبوي الشريف وما حوله.`);
add("om_sv_h", `Ce que comprend notre accompagnement`, `What our service includes`, `ما تشمله خدمتنا`);
add("om_info_h", `Informations pratiques`, `Practical information`, `معلومات عملية`);
add("om_i1", `Passeport valide au moins 6 mois après la date de retour.`, `Passport valid for at least 6 months after your return date.`, `جواز سفر صالح لستة أشهر على الأقل بعد تاريخ العودة.`);
add("om_i2", `Visa : nous vous aidons à préparer le dossier selon les règles en vigueur.`, `Visa: we help you prepare the file according to current rules.`, `التأشيرة: نساعدك على تحضير الملف وفق الشروط المعمول بها.`);
add("om_i3", `Tenue : l’ihram pour les hommes, des vêtements amples et couvrants pour les femmes.`, `Clothing: ihram for men, loose and modest clothing for women.`, `اللباس: الإحرام للرجال، وملابس واسعة وساترة للنساء.`);
add("om_i4", `Santé : renseignez-vous auprès de nous sur les exigences sanitaires avant le départ.`, `Health: ask us about health requirements before departure.`, `الصحة: استفسر عندنا عن الشروط الصحية قبل السفر.`);
add("om_cta_h", `Recevoir un devis Omra`, `Get an Umrah quote`, `احصل على عرض سعر للعمرة`);
add("om_cta_p", `Indiquez-nous la période souhaitée et le nombre de personnes : nous vous répondons rapidement.`, `Tell us your preferred period and number of travellers and we’ll reply quickly.`, `أخبرنا بالفترة المرغوبة وعدد الأشخاص وسنرد عليك بسرعة.`);

/* Services (cartes réutilisées) */
add("s_air_t", `Billetterie aérienne`, `Air ticketing`, `تذاكر الطيران`);
add("s_air_d", `Vols nationaux et internationaux au meilleur tarif, avec des conseils sur les bagages et les escales.`, `Domestic and international flights at the best fares, with advice on luggage and layovers.`, `رحلات داخلية ودولية بأفضل الأسعار، مع نصائح حول الأمتعة ومحطات التوقف.`);
add("s_grp_t", `Voyages organisés`, `Group tours`, `رحلات منظمة`);
add("s_grp_d", `Circuits en groupe avec programme, transport et guide, pour voyager sans stress.`, `Group tours with itinerary, transport and guide, for stress-free travel.`, `جولات جماعية ببرنامج ونقل ومرشد، لسفر بلا عناء.`);
add("s_hot_t", `Hôtels et séjours`, `Hotels and stays`, `فنادق وإقامات`);
add("s_hot_d", `Réservation d’hôtels et de séjours adaptés à votre budget, de l’hôtel simple au resort.`, `Hotel and holiday bookings to suit your budget, from simple hotels to resorts.`, `حجز فنادق وإقامات تناسب ميزانيتك، من الفندق البسيط إلى المنتجع.`);
add("s_mar_t", `Tourisme au Maroc`, `Tourism in Morocco`, `السياحة في المغرب`);
add("s_mar_d", `Marrakech, Chefchaouen, désert, côte : des escapades pour (re)découvrir le royaume.`, `Marrakech, Chefchaouen, desert, coast: getaways to discover the kingdom.`, `مراكش، شفشاون، الصحراء والساحل: رحلات لاكتشاف المملكة.`);
add("s_int_t", `Voyages internationaux`, `International travel`, `رحلات دولية`);
add("s_int_d", `Turquie, Europe, Golfe : vols, hébergement et formalités organisés pour vous.`, `Turkey, Europe, the Gulf: flights, accommodation and formalities arranged for you.`, `تركيا، أوروبا، الخليج: الطيران والإقامة والإجراءات منظمة من أجلك.`);
add("s_ast_t", `Assistance voyage`, `Travel assistance`, `مساعدة السفر`);
add("s_ast_d", `Aide pour les dossiers de visa, les assurances et le suivi pendant le voyage.`, `Help with visa files, insurance and follow-up during your trip.`, `دعم في ملفات التأشيرة والتأمين والمتابعة أثناء الرحلة.`);

/* Destinations */
add("d_tr", `Turquie`, `Turkey`, `تركيا`);
add("d_tr_d", `Istanbul, Cappadoce et côte turque : histoire, bazars et paysages.`, `Istanbul, Cappadocia and the Turkish coast: history, bazaars and landscapes.`, `إسطنبول، كابادوكيا والساحل التركي: تاريخ وأسواق ومناظر.`);
add("d_fr", `France`, `France`, `فرنسا`);
add("d_fr_d", `Paris, Côte d’Azur et régions : musées, gastronomie et art de vivre.`, `Paris, the Riviera and the regions: museums, gastronomy and lifestyle.`, `باريس والريفييرا والمناطق: متاحف وطعام وأسلوب حياة.`);
add("d_es", `Espagne`, `Spain`, `إسبانيا`);
add("d_es_d", `Barcelone, Madrid, Andalousie : plages, architecture et soleil.`, `Barcelona, Madrid, Andalusia: beaches, architecture and sunshine.`, `برشلونة ومدريد والأندلس: شواطئ وعمارة وشمس.`);
add("d_ae", `Dubaï`, `Dubai`, `دبي`);
add("d_ae_d", `Gratte-ciel, désert et shopping : un séjour moderne et dépaysant.`, `Skyscrapers, desert and shopping: a modern, eye-opening stay.`, `ناطحات سحاب وصحراء وتسوق: إقامة عصرية ومختلفة.`);
add("d_sa", `Arabie saoudite`, `Saudi Arabia`, `المملكة العربية السعودية`);
add("d_sa_d", `La Mecque et Médine : voyages religieux dans un cadre organisé.`, `Makkah and Madinah: religious journeys in an organised setting.`, `مكة والمدينة: رحلات دينية في إطار منظم.`);
add("d_ma", `Maroc`, `Morocco`, `المغرب`);
add("d_ma_d", `Marrakech, Fès, Chefchaouen et Sahara : la diversité du royaume.`, `Marrakech, Fez, Chefchaouen and the Sahara: the kingdom’s diversity.`, `مراكش وفاس وشفشاون والصحراء: تنوع المملكة.`);

/* Pourquoi / avis */
add("why_h", `Pourquoi choisir RIHAL NOUR ?`, `Why choose RIHAL NOUR?`, `لماذا تختار رحال نور؟`);
add("w1_t", `Des conseils personnalisés`, `Personal advice`, `نصائح مخصصة`);
add("w1_d", `Nous partons de votre budget et de vos envies avant de proposer quoi que ce soit.`, `We start from your budget and wishes before proposing anything.`, `ننطلق من ميزانيتك ورغباتك قبل أي اقتراح.`);
add("w2_t", `Une organisation complète`, `Complete organisation`, `تنظيم متكامل`);
add("w2_d", `Vols, hôtels, transferts et formalités : un seul interlocuteur.`, `Flights, hotels, transfers and formalities: one point of contact.`, `الطيران والفنادق والتنقلات والإجراءات: مخاطب واحد.`);
add("w3_t", `Réponse rapide sur WhatsApp`, `Quick answers on WhatsApp`, `رد سريع على واتساب`);
add("w3_d", `Posez vos questions et recevez une réponse claire, sans vous déplacer.`, `Ask your questions and get a clear answer without leaving home.`, `اطرح أسئلتك واحصل على جواب واضح دون عناء التنقل.`);
add("w4_t", `Un suivi jusqu’au retour`, `Support until you’re back`, `متابعة حتى العودة`);
add("w4_d", `Nous restons joignables pendant tout le voyage.`, `We stay reachable throughout your trip.`, `نبقى متاحين طوال الرحلة.`);
add("rv_h", `Avis clients`, `Customer reviews`, `آراء الزبائن`);
add("rv_note", `Témoignages fictifs donnés en exemple : à remplacer par de vrais avis.`, `Fictional testimonials given as examples: replace them with real reviews.`, `شهادات وهمية للتوضيح فقط: يجب استبدالها بآراء حقيقية.`);
add("rv1", `Tout était clair et bien organisé, du billet d’avion à l’hôtel.`, `Everything was clear and well organised, from the flight to the hotel.`, `كل شيء كان واضحاً ومنظماً، من تذكرة الطيران إلى الفندق.`);
add("rv2", `Réponses rapides sur WhatsApp et un programme adapté à notre budget.`, `Quick replies on WhatsApp and an itinerary that fit our budget.`, `ردود سريعة على واتساب وبرنامج يناسب ميزانيتنا.`);
add("rv3", `Une équipe attentive qui nous a rassurés pour notre première Omra.`, `An attentive team who reassured us for our first Umrah.`, `فريق مهتم طمأننا في أول عمرة لنا.`);
add("rv_n", `Prénom N., Oujda`, `First N., Oujda`, `الاسم ن.، وجدة`);
add("cta_h", `Prêt à partir ?`, `Ready to go?`, `هل أنت جاهز للسفر؟`);
add("cta_p", `Dites-nous où vous voulez aller : nous vous répondons avec une proposition claire.`, `Tell us where you want to go and we’ll reply with a clear proposal.`, `أخبرنا إلى أين تريد السفر وسنرد عليك باقتراح واضح.`);

/* Page Services */
add("sv_h", `Nos services`, `Our services`, `خدماتنا`);
add("sv_p", `De la réservation d’un billet à l’organisation d’un voyage complet : voici ce que nous faisons pour vous.`, `From booking a single ticket to organising a full trip: here is what we do for you.`, `من حجز تذكرة واحدة إلى تنظيم رحلة كاملة: هذا ما نقوم به من أجلك.`);
add("st_h", `Comment ça marche`, `How it works`, `كيف نعمل`);
add("st1_t", `Vous nous contactez`, `You contact us`, `تتواصل معنا`);
add("st1_d", `Par WhatsApp, par téléphone ou à l’agence.`, `By WhatsApp, phone or at the agency.`, `عبر واتساب أو الهاتف أو في الوكالة.`);
add("st2_t", `Nous préparons votre devis`, `We prepare your quote`, `نُعدّ عرض السعر`);
add("st2_d", `Un programme clair, avec le détail des prix.`, `A clear itinerary with detailed prices.`, `برنامج واضح مع تفصيل الأسعار.`);
add("st3_t", `Vous voyagez sereinement`, `You travel with peace of mind`, `تسافر بكل اطمئنان`);
add("st3_d", `Nous restons à vos côtés jusqu’au retour.`, `We stay by your side until you return.`, `نبقى بجانبك حتى العودة.`);

/* Page Destinations */
add("ds_h", `Destinations`, `Destinations`, `الوجهات`);
add("ds_p", `Six destinations pour commencer. Une autre idée en tête ? Demandez-nous.`, `Six destinations to start with. Have another idea? Just ask.`, `ست وجهات للبداية. لديك فكرة أخرى؟ اسألنا.`);
add("gal_h", `Galerie`, `Gallery`, `معرض الصور`);
add("gal_p", `Touchez une photo pour l’agrandir.`, `Tap a photo to enlarge it.`, `المس صورة لتكبيرها.`);

/* Page Contact */
add("ct_h", `Contactez-nous`, `Contact us`, `اتصل بنا`);
add("ct_p", `Une question, un projet de voyage ? Écrivez-nous, nous répondons rapidement.`, `A question or a trip in mind? Write to us and we’ll reply quickly.`, `لديك سؤال أو مشروع سفر؟ راسلنا وسنرد بسرعة.`);
add("ct_addr_l", `Adresse`, `Address`, `العنوان`);
add("ct_addr", `Avenue Exemple, Oujda, Maroc`, `Example Avenue, Oujda, Morocco`, `شارع المثال، وجدة، المغرب`);
add("ct_phone_l", `Téléphone`, `Phone`, `الهاتف`);
add("ct_wa_l", `WhatsApp`, `WhatsApp`, `واتساب`);
add("ct_mail_l", `E-mail`, `E-mail`, `البريد الإلكتروني`);
add("ct_hours_l", `Horaires`, `Opening hours`, `أوقات العمل`);
add("ct_hours", `Lundi–samedi : 9h–19h (exemple)`, `Monday–Saturday: 9am–7pm (example)`, `الاثنين–السبت: 9:00–19:00 (مثال)`);
add("f_h", `Envoyer un message`, `Send a message`, `أرسل رسالة`);
add("f_name", `Nom complet`, `Full name`, `الاسم الكامل`);
add("f_phone", `Téléphone`, `Phone`, `الهاتف`);
add("f_email", `E-mail`, `E-mail`, `البريد الإلكتروني`);
add("f_dest", `Destination souhaitée`, `Desired destination`, `الوجهة المرغوبة`);
add("f_dest_any", `Je ne sais pas encore`, `Not sure yet`, `لم أحدد بعد`);
add("f_omra", `Omra`, `Umrah`, `العمرة`);
add("f_msg", `Votre message`, `Your message`, `رسالتك`);
add("f_send_wa", `Envoyer par WhatsApp`, `Send via WhatsApp`, `إرسال عبر واتساب`);
add("f_send_mail", `Envoyer par e-mail`, `Send by e-mail`, `إرسال عبر البريد`);
add("f_err_req", `Ce champ est obligatoire.`, `This field is required.`, `هذا الحقل إلزامي.`);
add("f_err_phone", `Entrez un numéro de téléphone valide.`, `Enter a valid phone number.`, `أدخل رقم هاتف صحيحاً.`);
add("f_err_email", `Entrez une adresse e-mail valide.`, `Enter a valid e-mail address.`, `أدخل بريداً إلكترونياً صحيحاً.`);
add("f_ok", `Merci ! Votre message est prêt à être envoyé dans l’application choisie.`, `Thank you! Your message is ready to send in the chosen app.`, `شكراً! رسالتك جاهزة للإرسال في التطبيق المختار.`);
add("map_h", `Nous trouver`, `Find us`, `موقعنا`);
add("map_open", `Ouvrir dans Google Maps`, `Open in Google Maps`, `افتح في خرائط جوجل`);
add("map_ph", `Carte Google Maps à intégrer (voir js/config.js).`, `Google Maps embed goes here (see js/config.js).`, `خريطة جوجل تُضاف هنا (انظر js/config.js).`);

/* Pied de page */
add("ft_p", `Agence de voyages à Oujda, Maroc. Billetterie, voyages organisés, Omra, hôtels et séjours.`, `Travel agency in Oujda, Morocco. Ticketing, group tours, Umrah, hotels and stays.`, `وكالة أسفار في وجدة، المغرب. تذاكر، رحلات منظمة، عمرة، فنادق وإقامات.`);
add("ft_nav", `Navigation`, `Navigation`, `التنقل`);
add("ft_ct", `Contact`, `Contact`, `التواصل`);
add("ft_soc", `Suivez-nous`, `Follow us`, `تابعنا`);
add("ft_rights", `© 2026 RIHAL NOUR. Tous droits réservés.`, `© 2026 RIHAL NOUR. All rights reserved.`, `© 2026 رحال نور. جميع الحقوق محفوظة.`);
