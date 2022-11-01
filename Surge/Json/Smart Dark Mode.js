// ==UserScript==
// @name	Smart Dark Mode
// @name:ar	وضع الظلام الذكي
// @name:az	Smart qaranlıq rejimi
// @name:be	Разумны цёмны рэжым
// @name:bg	Интелигентен тъмен режим
// @name:bn	স্মার্ট ডার্ক মোড
// @name:ca	Mode fosc intel·ligent
// @name:cs	Inteligentní tmavý režim
// @name:cy	Modd tywyll craff
// @name:da	Smart Dark Mode
// @name:de	Smart Dark -Modus
// @name:el	Smart Dark Mode
// @name:en	Smart Dark Mode
// @name:eo	Inteligenta Malhela Modo
// @name:es	Modo oscuro inteligente
// @name:et	Nutikas tume režiim
// @name:eu	Modu ilun adimenduna
// @name:fa	حالت تاریک هوشمند
// @name:fi	Smart Dark -tila
// @name:fr	Mode sombre intelligent
// @name:ga	Modh dorcha cliste
// @name:gl	Modo escuro intelixente
// @name:gu	સ્માર્ટ ડાર્ક મોડ
// @name:hi	स्मार्ट डार्क मोड
// @name:hr	Smart Dark Mode
// @name:ht	Smart Mode nwa
// @name:hu	Intelligens sötét mód
// @name:id	Mode Gelap Cerdas
// @name:is	Smart Dark Mode
// @name:it	Modalità scura intelligente
// @name:iw	מצב חשוך חכם
// @name:ja	スマートダークモード
// @name:ka	Smart Dark Mode
// @name:kn	ಸ್ಮಾರ್ಟ್ ಡಾರ್ಕ್ ಮೋಡ್
// @name:ko	스마트 다크 모드
// @name:la	Smart Tenebris modus
// @name:lt	Intelektualusis tamsus režimas
// @name:lv	Gudrs tumšais režīms
// @name:mk	Паметен темни режим
// @name:ms	Mod gelap pintar
// @name:mt	Mod skur intelliġenti
// @name:nl	Slimme donkere modus
// @name:no	Smart mørk modus
// @name:pl	Smart Dark Mode
// @name:pt	Modo escuro inteligente
// @name:ro	Modul întunecat inteligent
// @name:ru	Умный темный режим
// @name:sk	Smart Dark Mode
// @name:sl	Pametni temni način
// @name:sq	Mënyra e errët e zgjuar
// @name:sr	Паметни тамни режим
// @name:sv	Smart Dark Mode
// @name:sw	Njia ya giza ya Smart
// @name:ta	ஸ்மார்ட் டார்க் பயன்முறை
// @name:te	స్మార్ట్ డార్క్ మోడ్
// @name:th	โหมดมืดอัจฉริยะ
// @name:tl	Smart Dark Mode
// @name:tr	Akıllı karanlık mod
// @name:uk	Розумний темний режим
// @name:ur	اسمارٹ ڈارک موڈ
// @name:vi	Chế độ tối thông minh
// @name:yi	סמאַרט פינצטער מאָדע
// @name:zh-CN	聪明的黑暗模式
// @name:zh-TW	聰明的黑暗模式

// @description	It is a smart dark theme that automatically switches to a dark screen when the background color of the homepage is bright. Provides a filter function that allows users to add or exclude URLs to apply directly.
// @description:ar	إنه موضوع مظلم ذكي يتحول تلقائيًا إلى شاشة مظلمة عندما يكون لون الخلفية للصفحة الرئيسية مشرقًا. يوفر وظيفة مرشح تتيح للمستخدمين إضافة أو استبعاد عناوين URL للتطبيق مباشرة.
// @description:az	Ana səhifənin fon rəngi parlaq olduqda avtomatik olaraq qaranlıq bir ekrana keçən ağıllı bir tematik bir mövzudur. İstifadəçilərə birbaşa müraciət etmək üçün URL-ləri əlavə etməyə və ya istisna etməyə imkan verən bir filtr funksiyasını təmin edir.
// @description:be	Гэта разумная цёмная тэма, якая аўтаматычна пераключаецца на цёмны экран, калі колер фону хатняй старонкі яркі. Забяспечвае функцыю фільтра, якая дазваляе карыстальнікам дадаваць або выключаць URL -адрасы непасрэдна.
// @description:bg	Това е интелигентна тъмна тема, която автоматично преминава към тъмен екран, когато цветът на фона на началната страница е ярък. Предоставя функция на филтъра, която позволява на потребителите да добавят или изключват URL адреси, за да се прилагат директно.
// @description:bn	এটি একটি স্মার্ট অন্ধকার থিম যা হোমপেজের পটভূমির রঙ উজ্জ্বল হলে স্বয়ংক্রিয়ভাবে একটি গা dark ় পর্দায় স্যুইচ করে। একটি ফিল্টার ফাংশন সরবরাহ করে যা ব্যবহারকারীদের সরাসরি প্রয়োগ করতে ইউআরএল যুক্ত করতে বা বাদ দিতে দেয়।
// @description:ca	És un tema fosc intel·ligent que passa automàticament a una pantalla fosca quan el color de fons de la pàgina principal és brillant. Proporciona una funció de filtre que permet als usuaris afegir o excloure URL per aplicar directament.
// @description:cs	Je to inteligentní tmavé téma, které se automaticky přepne na tmavou obrazovku, když je barva pozadí domovské stránky jasná. Poskytuje funkci filtru, která umožňuje uživatelům přidat nebo vyloučit přímo URL.
// @description:cy	Mae'n thema dywyll glyfar sy'n newid yn awtomatig i sgrin dywyll pan fydd lliw cefndir yr hafan yn llachar. Yn darparu swyddogaeth hidlo sy'n caniatáu i ddefnyddwyr ychwanegu neu eithrio URLau i wneud cais yn uniongyrchol.
// @description:da	Det er et smart mørkt tema, der automatisk skifter til en mørk skærm, når baggrundsfarven på hjemmesiden er lys. Tilvejebringer en filterfunktion, der giver brugerne mulighed for at tilføje eller ekskludere URL'er for at anvende direkte.
// @description:de	Es ist ein intelligentes Dark -Thema, das automatisch zu einem dunklen Bildschirm wechselt, wenn die Hintergrundfarbe der Homepage hell ist. Bietet eine Filterfunktion, mit der Benutzer URLs direkt hinzufügen oder ausschließen können, um sich direkt anzuwenden.
// @description:el	Είναι ένα έξυπνο σκοτεινό θέμα που μεταβαίνει αυτόματα σε σκοτεινή οθόνη όταν το χρώμα φόντου της αρχικής σελίδας είναι φωτεινό. Παρέχει μια λειτουργία φίλτρου που επιτρέπει στους χρήστες να προσθέτουν ή να αποκλείζουν τις διευθύνσεις URL για να εφαρμόσουν απευθείας.
// @description:en	It is a smart dark theme that automatically switches to a dark screen when the background color of the homepage is bright. Provides a filter function that allows users to add or exclude URLs to apply directly.
// @description:eo	Ĝi estas inteligenta malhela temo, kiu aŭtomate ŝanĝas al malhela ekrano kiam la fonkoloro de la hejmpaĝo estas brila. Provizas filtran funkcion, kiu permesas al uzantoj aldoni aŭ ekskludi URLojn por apliki rekte.
// @description:es	Es un tema oscuro inteligente que cambia automáticamente a una pantalla oscura cuando el color de fondo de la página de inicio es brillante. Proporciona una función de filtro que permite a los usuarios agregar o excluir a las URL para aplicar directamente.
// @description:et	See on nutikas tume teema, mis lülitub automaatselt tumedale ekraanile, kui kodulehe taustvärv on hele. Pakub filtrifunktsiooni, mis võimaldab kasutajatel lisada või välistada URL -id otse.
// @description:eu	Gai ilun adimenduna da, automatikoki, pantaila ilunera automatikoki aldatzen dena, hasierako orriaren atzeko planoaren kolorea distiratsua denean. Erabiltzaileei zuzenean aplikatzeko URLak gehitu edo baztertzeko aukera ematen dien iragazki funtzioa eskaintzen du.
// @description:fa	این یک موضوع تاریک هوشمند است که وقتی رنگ پس زمینه صفحه اصلی روشن است ، به طور خودکار به یک صفحه تاریک تغییر می یابد. یک تابع فیلتر را فراهم می کند که به کاربران امکان می دهد URL ها را اضافه یا حذف کنند تا مستقیماً اعمال شوند.
// @description:fi	Se on älykäs tumma teema, joka vaihtuu automaattisesti tummalle näytölle, kun kotisivun taustaväri on kirkas. Tarjoaa suodatintoiminnon, jonka avulla käyttäjät voivat lisätä tai sulkea pois URL -osoitteet suoraan hakeakseen.
// @description:fr	Il s'agit d'un thème sombre intelligent qui passe automatiquement à un écran sombre lorsque la couleur d'arrière-plan de la page d'accueil est lumineuse. Fournit une fonction de filtre qui permet aux utilisateurs d'ajouter ou d'exclure les URL pour appliquer directement.
// @description:ga	Is téama cliste dorcha é a aistríonn go huathoibríoch chuig scáileán dorcha nuair a bhíonn dath cúlra an leathanaigh bhaile geal. Soláthraíonn sé feidhm scagtha a ligeann d'úsáideoirí URLanna a chur leis nó a eisiamh chun iarratas a dhéanamh go díreach.
// @description:gl	É un tema escuro intelixente que cambia automaticamente a unha pantalla escura cando a cor de fondo da páxina de inicio é brillante. Ofrece unha función de filtro que permite aos usuarios engadir ou excluír os URL para aplicar directamente.
// @description:gu	તે એક સ્માર્ટ ડાર્ક થીમ છે જે હોમપેજનો પૃષ્ઠભૂમિ રંગ તેજસ્વી હોય ત્યારે આપમેળે ડાર્ક સ્ક્રીન પર સ્વિચ કરે છે. ફિલ્ટર ફંક્શન પ્રદાન કરે છે જે વપરાશકર્તાઓને સીધા લાગુ કરવા માટે URL ને ઉમેરવા અથવા બાકાત રાખવા દે છે.
// @description:hi	यह एक स्मार्ट डार्क थीम है जो स्वचालित रूप से एक अंधेरे स्क्रीन पर स्विच करता है जब मुखपृष्ठ का पृष्ठभूमि रंग उज्ज्वल होता है। एक फ़िल्टर फ़ंक्शन प्रदान करता है जो उपयोगकर्ताओं को सीधे लागू करने के लिए URL को जोड़ने या बाहर करने की अनुमति देता है।
// @description:hr	To je pametna tamna tema koja se automatski prebacuje na tamni ekran kada je boja pozadine početne stranice svijetla. Pruža funkciju filtra koja korisnicima omogućuje dodavanje ili isključivanje URL -ova da se izravno primjenjuju.
// @description:ht	Li se yon tèm entelijan nwa ki otomatikman chanje nan yon ekran nwa lè koulè a ​​background nan paj dakèy la se klere. Ofri yon fonksyon filtre ki pèmèt itilizatè yo ajoute oswa eskli URL pou aplike dirèkteman.
// @description:hu	Ez egy intelligens sötét téma, amely automatikusan egy sötét képernyőre vált, amikor a honlap háttérszíne fényes. Biztosít egy szűrő funkciót, amely lehetővé teszi a felhasználók számára, hogy az URL -ek hozzáadását vagy kizárását közvetlenül alkalmazzák.
// @description:id	Ini adalah tema gelap yang cerdas yang secara otomatis beralih ke layar gelap ketika warna latar belakang beranda cerah. Menyediakan fungsi filter yang memungkinkan pengguna untuk menambah atau mengecualikan URL untuk diterapkan secara langsung.
// @description:is	Það er snjallt dökkt þema sem skiptir sjálfkrafa yfir á dökkan skjá þegar bakgrunnslit heimasíðunnar er björt. Býður upp á síuaðgerð sem gerir notendum kleift að bæta við eða útiloka vefslóðir til að beita beint.
// @description:it	È un tema scuro intelligente che passa automaticamente a uno schermo scuro quando il colore di sfondo della homepage è luminoso. Fornisce una funzione di filtro che consente agli utenti di aggiungere o escludere gli URL da applicare direttamente.
// @description:iw	זהו נושא כהה חכם שעובר אוטומטית למסך כהה כאשר צבע הרקע של דף הבית בהיר. מספק פונקציית פילטר המאפשרת למשתמשים להוסיף או לא לכלול כתובות אתרים להחיל ישירות.
// @description:ja	ホームページの背景色が明るいときに、暗い画面に自動的に切り替えるスマートな暗いテーマです。ユーザーが直接適用するためにURLを追加または除外できるフィルター関数を提供します。
// @description:ka	ეს არის ჭკვიანი მუქი თემა, რომელიც ავტომატურად გადადის მუქი ეკრანზე, როდესაც საწყისი საწყისი ფონის ფერი ნათელია. უზრუნველყოფს ფილტრის ფუნქციას, რომელიც მომხმარებლებს საშუალებას აძლევს დაამატოთ ან გამორიცხონ URL– ები პირდაპირ მიმართონ.
// @description:kn	ಇದು ಸ್ಮಾರ್ಟ್ ಡಾರ್ಕ್ ಥೀಮ್ ಆಗಿದ್ದು ಅದು ಮುಖಪುಟದ ಹಿನ್ನೆಲೆ ಬಣ್ಣವು ಪ್ರಕಾಶಮಾನವಾದಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಡಾರ್ಕ್ ಸ್ಕ್ರೀನ್‌ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ. ಫಿಲ್ಟರ್ ಕಾರ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ ಅದು ಬಳಕೆದಾರರಿಗೆ ನೇರವಾಗಿ ಅನ್ವಯಿಸಲು URL ಗಳನ್ನು ಸೇರಿಸಲು ಅಥವಾ ಹೊರಗಿಡಲು ಅನುಮತಿಸುತ್ತದೆ.
// @description:ko	홈페이지의 배경색이 밝을 때 자동으로 어두운 화면으로 전환되는 스마트 어두운 테마입니다. 사용자가 URL을 추가하거나 제외 할 수있는 필터 기능을 제공합니다.
// @description:la	Est dolor tenebris theme quod automatice virgas ad a tenebris screen cum background color de homepage est clara. Descendit filter munus quod concedit users addere vel excludere delata adhibere directe.
// @description:lt	Tai protinga tamsi tema, kuri automatiškai pereina į tamsų ekraną, kai pagrindinio puslapio fono spalva yra ryški. Suteikia filtro funkciją, leidžiančią vartotojams pridėti arba neįtraukti URL, kad būtų galima tiesiogiai pritaikyti.
// @description:lv	Tā ir gudra tumša tēma, kas automātiski pārslēdzas uz tumšu ekrānu, kad mājas lapas fona krāsa ir spilgta. Nodrošina filtra funkciju, kas lietotājiem ļauj pievienot vai izslēgt URL tieši pieteikties.
// @description:mk	Тоа е паметна темна тема која автоматски се префрла на темен екран кога бојата на позадината на почетната страница е светла. Овозможува функција за филтрирање што им овозможува на корисниците да додаваат или исклучуваат URL -адреси за директно да се применуваат.
// @description:ms	Ia adalah tema gelap pintar yang secara automatik beralih ke skrin gelap apabila warna latar belakang laman web cerah. Menyediakan fungsi penapis yang membolehkan pengguna menambah atau mengecualikan URL untuk memohon secara langsung.
// @description:mt	Hija tema skura intelliġenti li awtomatikament taqleb għal skrin skur meta l-kulur tal-isfond tal-paġna ewlenija jkun qawwi. Jipprovdi funzjoni tal-filtru li tippermetti lill-utenti jżidu jew jeskludu l-URLs biex japplikaw direttament.
// @description:nl	Het is een slim donker thema dat automatisch schakelt naar een donker scherm wanneer de achtergrondkleur van de startpagina helder is. Biedt een filterfunctie waarmee gebruikers URL's kunnen toevoegen of uitsluiten om direct toe te passen.
// @description:no	Det er et smart mørkt tema som automatisk bytter til en mørk skjerm når bakgrunnsfargen på hjemmesiden er lys. Tilbyr en filterfunksjon som lar brukere legge til eller ekskludere nettadresser til å gjelde direkte.
// @description:pl	Jest to inteligentny ciemny motyw, który automatycznie przełącza się na ciemny ekran, gdy kolor tła strony głównej jest jasny. Zapewnia funkcję filtra, która pozwala użytkownikom dodawać lub wykluczać adresy URL do bezpośredniego zastosowania.
// @description:pt	É um tema sombrio inteligente que muda automaticamente para uma tela escura quando a cor de fundo da página inicial é brilhante. Fornece uma função de filtro que permite que os usuários adicionem ou excluam URLs para aplicar diretamente.
// @description:ro	Este o temă întunecată inteligentă, care trece automat la un ecran întunecat atunci când culoarea de fundal a paginii de pornire este luminoasă. Oferă o funcție de filtru care permite utilizatorilor să adauge sau să excludă URL -urile să se aplice direct.
// @description:ru	Это умная темная тема, которая автоматически переключается на темный экран, когда цвет фона домашней страницы яркий. Предоставляет функцию фильтра, которая позволяет пользователям добавлять или исключать URL -адреса, чтобы применять напрямую.
// @description:sk	Je to inteligentná tmavá téma, ktorá sa automaticky prepne na tmavú obrazovku, keď je farba pozadia domovskej stránky jasná. Poskytuje funkciu filtra, ktorá umožňuje používateľom pridávať alebo vylúčiť adresy URL, ktoré sa majú priamo aplikovať.
// @description:sl	To je pametna temna tema, ki samodejno preklopi na temen zaslon, ko je barva ozadja domače strani svetla. Omogoča funkcijo filtra, ki uporabnikom omogoča, da neposredno dodajajo ali izključijo URL -je.
// @description:sq	Shtë një temë e zgjuar e errët që automatikisht kalon në një ekran të errët kur ngjyra e sfondit të faqes kryesore është e ndritshme. Ofron një funksion filtri që lejon përdoruesit të shtojnë ose përjashtojnë URL -të që të aplikojnë direkt.
// @description:sr	То је паметна тамна тема која се аутоматски пребацује на тамни екран када је боја позадине почетне странице светла. Пружа функцију филтра која омогућава корисницима да додају или искључе УРЛ адресе да би се директно пријавили.
// @description:sv	Det är ett smart mörkt tema som automatiskt växlar till en mörk skärm när bakgrundsfärgen på hemsidan är ljus. Tillhandahåller en filterfunktion som gör det möjligt för användare att lägga till eller utesluta webbadresser att applicera direkt.
// @description:sw	Ni mandhari nzuri ya giza ambayo hubadilika kiotomatiki kwenye skrini ya giza wakati rangi ya nyuma ya ukurasa wa nyumbani ni mkali. Hutoa kazi ya kichujio ambayo inaruhusu watumiaji kuongeza au kuwatenga URL kuomba moja kwa moja.
// @description:ta	இது ஒரு ஸ்மார்ட் இருண்ட தீம், முகப்புப்பக்கத்தின் பின்னணி நிறம் பிரகாசமாக இருக்கும்போது தானாகவே இருண்ட திரைக்கு மாறுகிறது. ஒரு வடிகட்டி செயல்பாட்டை வழங்குகிறது, இது பயனர்களை நேரடியாக விண்ணப்பிக்க URL களைச் சேர்க்க அல்லது விலக்க அனுமதிக்கிறது.
// @description:te	ఇది స్మార్ట్ డార్క్ థీమ్, ఇది హోమ్‌పేజీ యొక్క నేపథ్య రంగు ప్రకాశవంతంగా ఉన్నప్పుడు స్వయంచాలకంగా చీకటి తెరపైకి మారుతుంది. ఫిల్టర్ ఫంక్షన్‌ను అందిస్తుంది, ఇది వినియోగదారులను నేరుగా వర్తింపజేయడానికి URL లను జోడించడానికి లేదా మినహాయించడానికి అనుమతిస్తుంది.
// @description:th	มันเป็นธีมสมาร์ทมืดที่เปลี่ยนเป็นหน้าจอสีเข้มโดยอัตโนมัติเมื่อสีพื้นหลังของหน้าแรกสว่าง จัดเตรียมฟังก์ชั่นตัวกรองที่อนุญาตให้ผู้ใช้เพิ่มหรือยกเว้น URL เพื่อใช้โดยตรง
// @description:tl	Ito ay isang matalinong madilim na tema na awtomatikong lumipat sa isang madilim na screen kapag ang kulay ng background ng homepage ay maliwanag. Nagbibigay ng isang function ng filter na nagbibigay -daan sa mga gumagamit na magdagdag o ibukod ang mga URL upang mag -aplay nang direkta.
// @description:tr	Ana sayfanın arka plan rengi parlak olduğunda otomatik olarak karanlık bir ekrana geçen akıllı bir karanlık temadır. Kullanıcıların doğrudan uygulanması için URL'leri eklemelerine veya hariç tutmasına olanak tanıyan bir filtre işlevi sağlar.
// @description:uk	Це розумна темна тема, яка автоматично перемикається на темний екран, коли колір фону є яскравою. Забезпечує функцію фільтра, яка дозволяє користувачам додавати або виключати URL -адреси безпосередньо застосовуватись.
// @description:ur	یہ ایک ہوشیار تاریک تھیم ہے جو ہوم پیج کا پس منظر کا رنگ روشن ہونے پر خود بخود تاریک اسکرین پر بدل جاتا ہے۔ ایک فلٹر فنکشن مہیا کرتا ہے جو صارفین کو براہ راست درخواست دینے کے لئے یو آر ایل کو شامل کرنے یا خارج کرنے کی اجازت دیتا ہے۔
// @description:vi	Đó là một chủ đề tối thông minh tự động chuyển sang màn hình tối khi màu nền của trang chủ sáng. Cung cấp chức năng bộ lọc cho phép người dùng thêm hoặc loại trừ URL để áp dụng trực tiếp.
// @description:yi	עס איז אַ קלוג פינצטער טעמע וואָס אויטאָמאַטיש סוויטשאַז צו אַ טונקל פאַרשטעלן ווען די הינטערגרונט פֿאַרב פון די האָמעפּאַגע איז העל. גיט אַ פילטער פונקציע וואָס אַלאַוז ניצערס צו לייגן אָדער ויסשליסן URL ס צו צולייגן גלייַך.
// @description:zh-CN	这是一个智能的深色主题，当主页的背景颜色明亮时，它会自动切换到深色屏幕。提供了一个允许用户添加或排除URL直接应用的过滤功能。
// @description:zh-TW	這是一個智能的深色主題，當主頁的背景顏色明亮時，它會自動切換到深色屏幕。提供了一個允許用戶添加或排除URL直接應用的過濾功能。

// @namespace         https://ndaesik.tistory.com/
// @version           2022.10.08.09.39
// @author            ndaesik
// @icon              https://lh3.googleusercontent.com/81tKJiCnAHzX1YojaGl1h33INWH-PcMN7S1N5eaTf4aUyO5Y7iKJ4cTI8JcZL55iP4bbWyFsJWfFrX4Doe-KaXaI0g
// @match             *://*/*

// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM_registerMenuCommand
// @run-at            document-start
// ==/UserScript==

// prevent blink
if (self == top) {
    let preventBlinkCSS = document.createElement('style')
    preventBlinkCSS.innerText = `* {background:#202124!important; border-color:#3c4043!important; color-scheme:dark!important; color:#bdc1c6!important; transition: unset!important}`
    preventBlinkCSS.classList.add('preventBlinkCSS')
    document.head?.appendChild(preventBlinkCSS)
}

// main.js
window.addEventListener('load', _ => {
(async _ => {
let alwaysOnList = await GM.getValue('alwaysOnList', '');
let alwaysOffList = await GM.getValue('alwaysOffList', 'youtube.com/live_chat');
let checkUrlExist = list => { return (list.replaceAll(/\s/g,'').split(/[\r\n]+|,/g) != '' && list.replaceAll(/\s/g,'').split(/[\r\n]+|,/g).filter(a => window.document.URL.indexOf(a) > -1).length > 0) ? true : false }
let saveTextarea = _ => {
        GM.setValue('alwaysOnList', document.querySelector('#SDM_on_textarea').value.replace(/^, ?/, ''));
        GM.setValue('alwaysOffList', document.querySelector('#SDM_off_textarea').value.replace(/^, ?/, ''));
    }
let toggleOption = _ => {
        let e = document.querySelector('#SDM_body');
        if (e.style.display == 'none') {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
            saveTextarea()
        }
    }
let applyFilter = _ => document.head.appendChild(drkMo);
let toggleFilter = _ => {
        if (document.querySelector('style.drkMo') == null) {
            applyFilter();
            document.querySelector('#SDM_toggle').checked = true;
        } else {
            document.querySelectorAll('style.drkMo').forEach(e => e.remove());
            document.querySelector('#SDM_toggle').checked = false;
        }
    }

// add option div in DOM
document.body.insertAdjacentHTML('beforeend', `
<div id="SDM_body" style="display: none">
    <div id="SDM_header">
        <input id="SDM_about_tab_button" type="radio" name="SDM_tab_toggle" checked>
        <label for="SDM_about_tab_button">
            <svg viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path>
            </svg>
        </label>
        <div id="SDM_right_side">
            <a id="SDM_add_page" class="SDM_header_buttons">
                <svg viewBox="0 0 500 500">
                    <path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path>
                </svg>
            </a>
            <input id="SDM_toggle" type="checkbox">
            <label for="SDM_toggle" class="SDM_header_buttons" title="Ctrl + D">
                <svg class="SDM_off" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M192 352C138.1 352 96 309 96 256C96 202.1 138.1 160 192 160C245 160 288 202.1 288 256C288 309 245 352 192 352zM384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384C490 64 576 149.1 576 256C576 362 490 448 384 448zM384 128H192C121.3 128 64 185.3 64 256C64 326.7 121.3 384 192 384H384C454.7 384 512 326.7 512 256C512 185.3 454.7 128 384 128z"></path>
                </svg>
                <svg class="SDM_on" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M384 64C490 64 576 149.1 576 256C576 362 490 448 384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384zM384 352C437 352 480 309 480 256C480 202.1 437 160 384 160C330.1 160 288 202.1 288 256C288 309 330.1 352 384 352z"></path>
                </svg>
            </label>
            <a id="SDM_close_window" class="SDM_header_buttons">
                <svg viewBox="0 0 500 500">
                    <path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
                </svg>
            </a>
        </div>
    </div>
    <input id="SDM_on_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_on_tab_button">On</label>
    <input id="SDM_off_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_off_tab_button">Off</label>
    <div id="SDM_main">
        <textarea id="SDM_on_textarea" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOnList}</textarea>
        <textarea id="SDM_off_textarea" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOffList}</textarea>
        <div id="SDM_about_tab"></div>
    </div>
</div>

<style>
#SDM_body {background-color: #171717!important; height: 430px!important; position: fixed!important; top: 25px!important; right: 25px!important; width: 316px!important; z-index: 2147483647!important; box-shadow: 0 -1px 2px 0 rgb(0 0 0 / 30%), 0 -2px 6px 2px rgb(0 0 0 / 15%)!important; user-select: none!important;}
#SDM_body :not(#SDM_all) {color:#bdc1c6!important;}
#SDM_body :is(div, textarea, input, label) {all: initial;}
#SDM_body [type="radio"],
#SDM_body [type="checkbox"] {visibility: hidden!important; width: 0!important; position: absolute!important;}

#SDM_header {display: block!important; width: 100%!important; height: 34px!important; padding-top: 10px!important;}
#SDM_header svg {width: 16px!important;}
#SDM_header #SDM_toggle + label svg,
#SDM_header #SDM_about_tab_button svg {width: 19px!important;}
#SDM_header #SDM_toggle + label svg {display: none!important;}
#SDM_header #SDM_toggle:not(:checked) + label svg.SDM_off,
#SDM_header #SDM_toggle:checked + label svg.SDM_on {display: inline!important;}
#SDM_header #SDM_toggle + label svg.SDM_on path,
#SDM_header svg:hover path,
#SDM_header input:checked + label path {fill: orange!important;}
#SDM_header > #SDM_about_tab_button + label {float: left!important; padding-left: 15px!important;}
#SDM_header > #SDM_about_tab_button:checked ~ #SDM_right_side #SDM_add_page {pointer-events: none!important; opacity: 0.3!important;}
#SDM_header > #SDM_right_side {float: right!important; padding-right: 15px!important;}
#SDM_header > #SDM_right_side .SDM_header_buttons {padding-left: 15px!important; line-height: 15px!important; height: 15px!important; text-decoration: none!important;}
#SDM_header ~ label {float:left!important; font-weight: bold!important; opacity: .3!important; height: 34px!important; line-height:34px!important; width: 50%!important; display: inline-block!important; vertical-align:top!important; user-select: none!important; text-align: center!important; border-bottom: 2px transparent solid!important;}
#SDM_header ~ label:hover {opacity: 1!important;}
#SDM_header ~ input:checked + label {opacity: 1!important; border-color: orange!important;}

#SDM_main {box-shadow: inset 0 7px 9px -7px rgba(0,0,0,.4)!important; background-color: #202124!important;}
#SDM_main > :not(#SDM_all) {background-color: transparent!important; height: 328px!important; font-size: 14px!important; padding: 12px!important; max-width: calc(316px - 24px)!important; min-width: calc(316px - 24px)!important; width: calc(316px - 24px)!important; border:0!important;}
#SDM_main > textarea {outline: none!important; resize: none!important; color-scheme: dark!important}
#SDM_main > textarea::placeholder {color: #bdc1c6!important; opacity:0.3!important; font-weight: normal!important;}
#SDM_main > textarea, :is(#SDM_on_tab_button,#SDM_off_tab_button):checked ~ #SDM_main #SDM_about_tab {display: none!important;}
#SDM_main > #SDM_about_tab {display: block!important; white-space: pre-line!important;}
#SDM_on_tab_button:checked ~ #SDM_main #SDM_on_textarea,
#SDM_off_tab_button:checked ~ #SDM_main #SDM_off_textarea {display: block!important;}
</style>
`)

// color inverter CSS
let drkMo = document.createElement('style')
drkMo.innerText = `
html {color-scheme: dark!important; color: #000}
html * {color-scheme: light!important; text-shadow: 0 0 .1px}
html body {background: none!important}
#SDM_body,
html, html :is(img, image, embed, video, canvas, option, object, :fullscreen:not(iframe), iframe:not(:fullscreen)),
html body>* [style*="url("]:not([style*="cursor:"]):not([type="text"]) {filter: invert(1)hue-rotate(180deg)!important}
html body>* [style*="url("]:not([style*="cursor:"]) :not(#_),
html:not(#_) :is(canvas, option, object) :is(img, image, embed, video),
html:not(#_) :is(video:fullscreen, img[src*="/svg/"], img[src*=".svg."], img[src*="fonts.gstatic.com/s/i/"]) {filter: unset!important}`
drkMo.classList.add('drkMo')

// apply main CSS
document.querySelector('.preventBlinkCSS')?.remove()
if( checkUrlExist( alwaysOnList ) ) {
    applyFilter()
} else if ( checkUrlExist( alwaysOffList ) ) {
    // do nothing
} else {
    let bdyH0 = window.parent.document.body.offsetHeight == 0;
    let frame = self != top;
    let elems = document.querySelectorAll('body > :not(script)');
    let check = (o, t = 0) => {
            let n = n => {return parseInt(getComputedStyle(document.querySelectorAll(o)[t]).getPropertyValue('background-color').match(/\d+/g)[n])};
            return (n(0)*0.299+n(1)*0.587+n(2)*0.114) > 186 || n(3) == 0;
        }
    if((!frame && !bdyH0 || frame) && check('html') && check('body')) applyFilter();
    if(!frame && bdyH0) {for (let i = 0; i < elems.length; i++) {if (elems[i].scrollHeight > window.innerHeight && check('body > :not(script)',i)) applyFilter()}};
}

// SDM_toggle function
document.querySelector('style.drkMo') ? (document.querySelector('#SDM_toggle').checked = true) : (document.querySelector('#SDM_toggle').checked = false);
document.querySelector('#SDM_toggle').onclick = _ => toggleFilter();

// SDM_toggle with hotkey
document.addEventListener("keydown", e => {
    let press = (send) => e.key.toUpperCase() == send.toUpperCase()
        if (e.ctrlKey && document.activeElement.localName !== ("input"||"textarea")) {
        if (press('d')) {
            e.preventDefault()
            toggleFilter()
        }
    }
})

// SDM_add_page function
document.querySelector('#SDM_add_page').onclick = _ => {
    let domain = `, ${new URL(document.URL).hostname.replace('www.','')}`;
    if (document.querySelector('#SDM_on_tab_button:checked') != null) {document.querySelector('#SDM_on_textarea').value += domain};
    if (document.querySelector('#SDM_off_tab_button:checked') != null) {document.querySelector('#SDM_off_textarea').value += domain};
    saveTextarea()
}

// SDM_close_window function
document.querySelector('#SDM_close_window').onclick = _ => toggleOption();

// SDM_about_tab description
function fillDescription() {
    switch (window.navigator.language) {
        case 'ko':
            return `"On" 탭 URL은 테마를 적용하지만 "Off" 탭은 적용하지 않습니다.\n도메인은 쉼표와 줄 바꿈으로 구분됩니다.`;
        case 'zh-TW':
        case 'zh-HK':
        case 'zh-SG':
            return `" On" 標籤 URL 應用主題但不應用" Off" 標籤 。\n域分爲逗號和換行 。`;
        case 'es':
            return `La URL de la pestaña "On" aplica el tema, pero la pestaña "Off" no.La línea principal se divide en coma y cambio de línea.`;
        case 'fr':
            return `L'URL de l'onglet On applique le thème, mais pas l'onglet Off.\nLes domaines sont séparés par des virgules et des lignes.`;
        case 'de':
            return `Die URL der Registerkarte "On" setzt das Thema an, aber nicht die Registerkarte "Off".\nDomains werden durch Kommata und Zeilenumbrüche getrennt.`;
        case 'it':
            return `La scheda "On" URL applica il tema, ma non la scheda "Off".\nI domini sono separati da una virgola e da un'interruzione di riga.`;
        case 'vi':
            return `URL của tab "On" áp dụng chủ đề nhưng tab "Off" không áp dụng.\nDomain được phân loại bằng dấu phẩy và thay đổi dòng.`;
        case 'th':
            return `ที่อยู่ URL ของแท็บ "On" ใช้ธีม แต่ไม่ใช้แท็บ "Off"\nโดเมนถูกแบ่งออกเป็นลูกน้ำและการสลับบรรทัด`;
        case 'id':
            return `URL tab "On" menerapkan tema, namun tab "Off" tidak diterapkan.\nDomain terbagi menjadi koma dan perubahan baris.`;
        case 'zh-CN':
            return `" On" 标签 URL 应用主题但不应用" Off" 标签 。\n域分为逗号和换行 。`;
        case 'ja':
            return `"On"タブURLはテーマを適用しますが、"Off"タブは適用されません。\nドメインはコンマと行違いに区分されます。`;
        case 'ru':
            return `URL вкладки "On" применяет тему, но вкладка "Off" не применяется.\ndomain делится на запятую и запятую.`;
        default:
            return `"On" tab URLs apply themes, but not "Off" tab URLs.\nDomains are separated by commas and line breaks.`;
    }
}
document.querySelector('#SDM_about_tab').textContent = fillDescription();

// tampermonkey menu
GM_registerMenuCommand('On/Off', toggleFilter);
GM_registerMenuCommand('Filter', toggleOption);
})()})