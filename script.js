/*
Tongjit Karawapornphut G01221230
https://jsonplaceholder.typicode.com/posts
*/

 let text = '{ "comments" : ['+
  '{ "userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"},'+

  '{ "userId": 1 , "id": 2, "title": "qui est esse", "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"},'+
 
  '{ "userId": 1 , "id": 3, "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut","body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturnmolestiae porro eius odio et labore et velit aut"},'+

  '{ "userId": 1 , "id": 4, "title": "eum et est occaecati", "body": "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit"},'+

  '{"userId": 1, "id": 5, "title": "nesciunt quas odio", "body": "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque"},'+
  
  '{ "userId": 1, "id": 6, "title": "dolorem eum magni eos aperiam quia", "body": "ut aspernatur corporis harum nihil quis provident sequimollitia nobis aliquid molestiaeperspiciatis et ea nemo ab reprehenderit accusantium quasvoluptate dolores velit et doloremque molestiae"},'+
  
  '{ "userId": 1, "id": 7, "title": "magnam facilis autem", "body": "dolore placeat quibusdam ea quo vitaemagni quis enim qui quis quo nemo aut saepequidem repellat excepturi ut quiasunt ut sequi eos ea sed quas"},'+
  
  '{ "userId": 1, "id": 8, "title": "dolorem dolore est ipsam", "body": "dignissimos aperiam dolorem qui eumfacilis quibusdam animi sint suscipit qui sint possimus cumquaerat magni maiores excepturiipsam ut commodi dolor voluptatum modi aut vitae"},'+
  
  '{ "userId": 1, "id": 9, "title": "nesciunt iure omnis dolorem tempora et accusantium", "body": "consectetur animi nesciunt iure doloreenim quia adveniam autem ut quam aut nobiset est aut quod aut provident voluptas autem voluptas"},'+
  
  '{ "userId": 1, "id": 10, "title": "optio molestias id quia eum", "body": "quo et expedita modi cum officia vel magnidoloribus qui repudiandaevero nisi sitquos veniam quod sed accusamus veritatis error"},'+

  '{ "userId": 2, "id": 11, "title": "et ea vero quia laudantium autem", "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibusaccusamus in eum beatae sitvel qui neque voluptates ut commodi qui inciduntut animi commodi"},'+
  
  '{ "userId": 2, "id": 12, "title": "in quibusdam tempore odit est dolorem", "body": "itaque id aut magnampraesentium quia et ea odit et ea voluptas etsapiente quia nihil amet occaecati quia id voluptatemincidunt ea est distinctio odio"},'+
  
  '{ "userId": 2, "id": 13, "title": "dolorum ut in voluptas mollitia et saepe quo animi", "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremqueiste corrupti reiciendis voluptatem eius rerumsit cumque quod eligendi laborum minimaperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"},'+

  '{ "userId": 2, "id": 14, "title": "voluptatem eligendi optio", "body": "fuga et accusamus dolorum perferendis illo voluptasnon doloremque neque faceread qui dolorum molestiae beataesed aut voluptas totam sit illum"},'+
  
  '{ "userId": 2, "id": 15, "title": "eveniet quod temporibus","body": "reprehenderit quos placeatvelit minima officia dolores impedit repudiandae molestiae namvoluptas recusandae quis delectusofficiis harum fugiat vitae"},'+
  
  '{ "userId": 2, "id": 16, "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio", "body": "suscipit nam nisi quo aperiam autasperiores eos fugit maiores voluptatibus quiavoluptatem quis ullam qui in alias quia estconsequatur magni mollitia accusamus ea nisi voluptate dicta"},'+
  
  '{ "userId": 2, "id": 17, "title": "fugit voluptas sed molestias voluptatem provident", "body": "eos voluptas et aut odit natus earumaspernatur fuga molestiae ullamdeserunt ratione qui eosqui nihil ratione nemo velit ut aut id quo"},'+
  
  '{ "userId": 2, "id": 18, "title": "voluptate et itaque vero tempora molestiae", "body": "eveniet quo quislaborum totam consequatur non dolorut et est repudiandaeest voluptatem vel debitis et magnam"},'+
  
  '{ "userId": 2, "id": 19, "title": "adipisci placeat illum aut reiciendis qui", "body": "illum quis cupiditate provident sit magnamea sed aut omnisveniam maiores ullam consequatur atqueadipisci quo iste expedita sit quos voluptas"},'+
  
  '{ "userId": 2, "id": 20, "title": "doloribus ad provident suscipit at", "body": "qui consequuntur ducimus possimus quisquam amet similiquesuscipit porro ipsam ameteos veritatis officiis exercitationem vel fugit aut necessitatibus totamomnis rerum consequatur expedita quidem cumque explicabo"},'+

  '{ "userId": 3, "id": 21, "title": "asperiores ea ipsam voluptatibus modi minima quia sint", "body": "repellat aliquid praesentium dolorem quosed totam minus non itaquenihil labore molestiae sunt dolor eveniet hic recusandae veniamtempora et tenetur expedita sunt"},'+
  
  '{ "userId": 3, "id": 22, "title": "dolor sint quo a velit explicabo quia nam", "body": "eos qui et ipsum ipsam suscipit autsed omnis non odioexpedita earum mollitia molestiae aut atque rem suscipitnam impedit esse"},'+
  
  '{ "userId": 3, "id": 23, "title": "maxime id vitae nihil numquam", "body": "veritatis unde neque eligendiquae quod architecto quo neque vitaeest illo sit tempora doloremque fugit quodet et vel beatae sequi ullam sed tenetur perspiciatis"},'+

  '{ "userId": 3, "id": 24, "title": "autem hic labore sunt dolores incidunt", "body": "enim et ex nullaomnis voluptas quia quivoluptatem consequatur numquam aliquam sunttotam recusandae id dignissimos aut sed asperiores deserunt"},'+
  
  '{ "userId": 3, "id": 25, "title": "rem alias distinctio quo quis", "body": "ullam consequatur utomnis quis sit vel consequunturipsa eligendi ipsum molestiae et omnis error nostrummolestiae illo tempore quia et distinctio"},'+
  
  '{ "userId": 3, "id": 26, "title": "est et quae odit qui non", "body": "similique esse doloribus nihil accusamusomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibusperspiciatis cum ut laudantiumomnis aut molestiae vel vero"},'+
  
  '{ "userId": 3, "id": 27, "title": "quasi id et eos tenetur aut quo autem", "body": "eum sed dolores ipsam sint possimus debitis occaecatidebitis qui qui etut placeat enim earum aut odit facilisconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"},'+
  
  '{ "userId": 3, "id": 28, "title": "delectus ullam et corporis nulla voluptas sequi", "body": "non et quaerat ex quae ad maioresmaiores recusandae totam aut blanditiis mollitia quas illout voluptatibus voluptatemsimilique nostrum eum"},'+
  
  '{ "userId": 3, "id": 29, "title": "iusto eius quod necessitatibus culpa ea", "body": "odit magnam ut saepe sed non quitempora atque nihilaccusamus illum doloribus illo doloreligendi repudiandae odit magni similique sed cum maiores"},'+
  
  '{ "userId": 3, "id": 30, "title": "a quo magni similique perferendis", "body": "alias dolor cumqueimpedit blanditiis non eveniet odio maximeblanditiis amet eius quis tempora quia autem rema provident perspiciatis quia"},'+

  '{ "userId": 4, "id": 31, "title": "ullam ut quidem id aut vel consequuntur", "body": "debitis eius sed quibusdam non quis consectetur vitaeimpedit ut qui consequatur sed aut inquidem sit nostrum et maiores adipisci atquequaerat voluptatem adipisci repudiandae"},'+
  
  '{ "userId": 4, "id": 32, "title": "doloremque illum aliquid sunt", "body": "deserunt eos nobis asperiores et hicest debitis repellat molestiae optionihil ratione ut eos beatae quibusdam distinctio maioresearum voluptates et aut adipisci ea maiores voluptas maxime"},'+
  
  '{ "userId": 4, "id": 33, "title": "qui explicabo molestiae dolorem", "body": "rerum ut et numquam laborum odit est sitid qui sint inquasi tenetur tempore aperiam et quaerat qui inrerum officiis sequi cumque quod"},'+

  '{ "userId": 4, "id": 34, "title": "magnam ut rerum iure","body": "ea velit perferendis earum ut voluptatem voluptate itaque iustototam pariatur innemo voluptatem voluptatem autem magni tempora minima inest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"},'+
  
  '{ "userId": 4, "id": 35, "title": "id nihil consequatur molestias animi provident", "body": "nisi error delectus possimus ut eligendi vitaeplaceat eos harum cupiditate facilis reprehenderit voluptatem beataemodi ducimus quo illum voluptas eligendiet nobis quia fugit"},'+
  
  '{ "userId": 4, "id": 36, "title": "fuga nam accusamus voluptas reiciendis itaque", "body": "ad mollitia et omnis minus architecto oditvoluptas doloremque maxime aut non ipsa qui alias veniamblanditiis culpa aut quia nihil cumque facere et occaecatiqui aspernatur quia eaque ut aperiam inventore"},'+
  
  '{ "userId": 4, "id": 37, "title": "provident vel ut sit ratione est", "body": "debitis et eaque non officia sed nesciunt pariatur velvoluptatem iste vero et eanumquam aut expedita ipsum nulla involuptates omnis consequatur aut enim officiis in quam qui"},'+
  
  '{ "userId": 4, "id": 38, "title": "explicabo et eos deleniti nostrum ab id repellendus", "body": "animi esse sit aut sit nesciunt assumenda eum voluptasquia voluptatibus provident quia necessitatibus earerum repudiandae quia voluptatem delectus fugit aut id quiaratione optio eos iusto veniam iure"},'+

  '{ "userId": 4, "id": 39, "title": "eos dolorem iste accusantium est eaque quam", "body": "corporis rerum ducimus vel eum accusantiummaxime aspernatur a porro possimus iste omnisest in deleniti asperiores fuga autvoluptas sapiente vel dolore minus voluptatem incidunt ex"},'+
  
  '{ "userId": 4, "id": 40, "title": "enim quo cumque", "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilisipsum rem optio mollitia quasvoluptatem eum voluptas quiunde omnis voluptatem iure quasi maxime voluptas nam"},'+
  
  '{ "userId": 5, "id": 41, "title": "non est facere","body": "molestias id nostrumexcepturi molestiae dolore omnis repellendus quaerat saepeconsectetur iste quaerat tenetur asperiores accusamus ex utnam quidem est ducimus sunt debitis saepe"},'+
  
  '{ "userId": 5, "id": 42, "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas", "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatemodit reiciendis aliquam sunt sequi nulla doloremnon facere repellendus voluptates quiaratione harum vitae ut"},'+
  
  '{ "userId": 5, "id": 43, "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis", "body": "similique fugit estillum et dolorum harum et voluptate eaque quidemexercitationem quos nam commodi possimus cum odio nihil nulladolorum exercitationem magnam ex et a et distinctio debitis"},'+
  
  '{ "userId": 5, "id": 44, "title": "optio dolor molestias sit", "body": "temporibus est consectetur doloreet libero debitis vel velit laboriosam quiaipsum quibusdam qui itaque fuga rem autea et iure quam sed maxime ut distinctio quae"},'+
  
  '{ "userId": 5, "id": 45, "title": "ut numquam possimus omnis eius suscipit laudantium iure", "body": "est natus reiciendis nihil possimus aut providentex et dolorrepellat pariatur estnobis rerum repellendus dolorem autem"},'+
  
  '{"userId": 5, "id": 46, "title": "aut quo modi neque nostrum ducimus", "body": "voluptatem quisquam istevoluptatibus natus officiis facilis doloremquis quas ipsamvel et voluptatum in aliquid"},'+
  
  '{ "userId": 5, "id": 47, "title": "quibusdam cumque rem aut deserunt", "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniamoccaecati nemo illum voluptatem laudantiummolestiae beatae rerum ea iure soluta nostrumeligendi et voluptate"},'+
  
  '{ "userId": 5, "id": 48, "title": "ut voluptatem illum ea doloribus itaque eos", "body": "voluptates quo voluptatem facilis iure occaecativel assumenda rerum officia etillum perspiciatis ab delenitilaudantium repellat ad ut et autem reprehenderit"},'+
  
  '{ "userId": 5, "id": 49, "title": "laborum non sunt aut ut assumenda perspiciatis voluptas","body": "inventore ab sintnatus fugit id nulla sequi architecto nihil quaerateos tenetur in in eum veritatis nonquibusdam officiis aspernatur cumque aut commodi aut"},'+
  
  '{ "userId": 5, "id": 50, "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem", "body": "error suscipit maxime adipisci consequuntur recusandaevoluptas eligendi et est et voluptatesquia distinctio ab amet quaerat molestiae et vitaeadipisci impedit sequi nesciunt quis consectetur"},'+
  
  
  '{ "userId": 6, "id": 51, "title": "soluta aliquam aperiam consequatur illo quis voluptas", "body": "sunt dolores aut doloribusdolore doloribus voluptates tempora etdoloremque et quocum asperiores sit consectetur dolorem"},'+
  
  '{ "userId": 6, "id": 52, "title": "qui enim et consequuntur quia animi quis voluptate quibusdam","body": "iusto est quibusdam fuga quas quaerat molestiasa enim ut sit accusamus enimtemporibus iusto accusantium provident architectosoluta esse reprehenderit qui laborum"},'+
  
  '{ "userId": 6, "id": 53, "title": "ut quo aut ducimus alias", "body": "minima harum praesentium eum rerum illo dolorequasi exercitationem rerum namporro quis neque quoconsequatur minus dolor quidem veritatis sunt non explicabo similique"},'+
  
  '{ "userId": 6, "id": 54, "title": "sit asperiores ipsam eveniet odio non quia", "body": "totam corporis dignissimosvitae dolorem ut occaecati accusamusex velit deseruntet exercitationem vero incidunt corrupti mollitia"},'+
  
  '{ "userId": 6, "id": 55, "title": "sit vel voluptatem et non libero", "body": "debitis excepturi ea perferendis harum libero optioeos accusamus cum fuga ut sapiente repudiandaeet ut incidunt omnis molestiaenihil ut eum odit"},'+
  
  '{ "userId": 6, "id": 56, "title": "qui et at rerum necessitatibus", "body": "aut est omnis doloresneque rerum quod ea rerum velit pariatur beatae excepturiet provident voluptas corrupticorporis harum reprehenderit dolores eligendi"},'+
  
  '{ "userId": 6, "id": 57, "title": "sed ab est est","body": "at pariatur consequuntur earum quidemquo est laudantium soluta voluptatemqui ullam et estet cum voluptas voluptatum repellat est"},'+
  
  '{ "userId": 6, "id": 58, "title": "voluptatum itaque dolores nisi et quasi", "body": "veniam voluptatum quae adipisci idet id quia eos ad et doloremaliquam quo nisi sunt eos impedit errorad similique veniam"},'+
  
  '{ "userId": 6, "id": 59, "title": "qui commodi dolor at maiores et quis id accusantium", "body": "perspiciatis et quam ea autem temporibus non voluptatibus quibeatae a earum officia nesciunt dolores suscipit voluptas etanimi doloribus cum rerum quas et magniet hic ut ut commodi expedita sunt"},'+

  '{ "userId": 6, "id": 60, "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere", "body": "asperiores sunt ab assumenda cumque modi velitqui esse omnisvoluptate et fuga perferendis voluptasillo ratione amet aut et omnis"},'+

  '{ "userId": 7, "id": 61, "title": "voluptatem doloribus consectetur est ut ducimus", "body": "ab nemo optio odiodelectus tenetur corporis similique nobis repellendus rerum omnis facilisvero blanditiis debitis in nesciunt doloribus dicta doloresmagnam minus velit"},'+
  
  '{ "userId": 7, "id": 62, "title": "beatae enim quia vel", "body": "enim aspernatur illo distinctio quae praesentiumbeatae alias amet delectus qui voluptate distinctioodit sint accusantium autem omnisquo molestiae omnis ea eveniet optio"},'+
  
  '{ "userId": 7, "id": 63, "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit", "body": "enim adipisci aspernatur nemonumquam omnis facere dolorem dolor ex quis temporibus inciduntab delectus culpa quo reprehenderit blanditiis asperioresaccusantium ut quam in voluptatibus voluptas ipsam dicta"},'+
  
  '{ "userId": 7, "id": 64, "title": "et fugit quas eum in in aperiam quod", "body": "id velit blanditiiseum ea voluptatemmolestiae sint occaecati est eos perspiciatisincidunt a error provident eaque aut aut qui"},'+
  
  '{ "userId": 7, "id": 65, "title": "consequatur id enim sunt et et", "body": "voluptatibus ex essesint explicabo est aliquid cumque adipisci fuga repellat laboremolestiae corrupti ex saepe at asperiores et perferendisnatus id esse incidunt pariatur"},'+

  '{ "userId": 7, "id": 66, "title": "repudiandae ea animi iusto", "body": "officia veritatis tenetur vero qui itaquesint non rationesed et ut asperiores iusto eos molestiae nostrumveritatis quibusdam et nemo iusto saepe"},'+
  
  '{ "userId": 7, "id": 67, "title": "aliquid eos sed fuga est maxime repellendus", "body": "reprehenderit id nostrumvoluptas doloremque pariatur sint et accusantium quia quod aspernaturet fugiat ametnon sapiente et consequatur necessitatibus molestiae"},'+
  
  '{ "userId": 7, "id": 68, "title": "odio quis facere architecto reiciendis optio", "body": "magnam molestiae perferendis quisquamqui cum reiciendisquaerat animi amet hic inventoreea quia deleniti quidem saepe porro velit"},'+
  
  '{ "userId": 7, "id": 69, "title": "fugiat quod pariatur odit minima", "body": "officiis error culpa consequatur modi asperiores etdolorum assumenda voluptas et vel qui aut vel rerumvoluptatum quisquam perspiciatis quia rerum consequatur totam quassequi commodi repudiandae asperiores et saepe a"},'+

  '{ "userId": 7, "id": 70, "title": "voluptatem laborum magni", "body": "sunt repellendus quaeest asperiores aut deleniti esse accusamus repellendus quia autquia dolorem undeeum tempora esse dolore"},'+

  '{ "userId": 8, "id": 71, "title": "et iusto veniam et illum aut fuga", "body": "occaecati a doloribusiste saepe consectetur placeat eum voluptate dolorem etqui quo quia voluptasrerum ut id enim velit est perferendis"},'+
  
  '{ "userId": 8, "id": 72, "title": "sint hic doloribus consequatur eos non id", "body": "quam occaecati qui deleniti consecteturconsequatur aut facere quas exercitationem aliquam hic voluptasneque id sunt ut aut accusamussunt consectetur expedita inventore velit"},'+
  
  '{ "userId": 8, "id": 73, "title": "consequuntur deleniti eos quia temporibus ab aliquid at", "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicaboaut eum minima consequaturtempore cumque quae est etet in consequuntur voluptatem voluptates aut"},'+
  
  '{ "userId": 8, "id": 74, "title": "enim unde ratione doloribus quas enim ut sit sapiente","body": "odit qui et et necessitatibus sint veniammollitia amet doloremque molestiae commodi similique magnam et quamblanditiis est itaquequo et tenetur ratione occaecati molestiae tempora"},'+
  
  '{ "userId": 8, "id": 75, "title": "dignissimos eum dolor ut enim et delectus in", "body": "commodi non non omnis et voluptas sitautem aut nobis magnam et sapiente voluptatemet laborum repellat qui delectus facilis temporibusrerum amet et nemo voluptate expedita adipisci error dolorem"},'+
  
  '{ "userId": 8, "id": 76, "title": "doloremque officiis ad et non perferendis","body": "ut animi faceretotam iusto temporemolestiae eum aut et dolorem aperiamquaerat recusandae totam odio"},'+
  
  '{ "userId": 8, "id": 77, "title": "necessitatibus quasi exercitationem odio","body": "modi ut in nulla repudiandae dolorum nostrum eosaut consequatur omnisut incidunt est omnis iste et quamvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"},'+
  
  '{ "userId": 8, "id": 78, "title": "quam voluptatibus rerum veritatis", "body": "nobis facilis odit tempore cupiditate quiaassumenda doloribus rerum qui eaillum et qui totamaut veniam repellendus"},'+
  
  '{ "userId": 8, "id": 79, "title": "pariatur consequatur quia magnam autem omnis non amet","body": "libero accusantium et et facere incidunt sit doloremnon excepturi qui quia sed laudantiumquisquam molestiae ducimus estofficiis esse molestiae iste et quos"},'+
  
  '{ "userId": 8, "id": 80, "title": "labore in ex et explicabo corporis aut quas", "body": "ex quod dolorem ea eum iure qui provident ametquia qui facere excepturi et repudiandaeasperiores molestias providentminus incidunt vero fugit rerum sint sunt excepturi provident"},'+

  '{ "userId": 9, "id": 81, "title": "tempora rem veritatis voluptas quo dolores vero","body": "facere qui nesciunt est voluptatum voluptatem nisisequi eligendi necessitatibus ea at rerum itaqueharum non ratione velit laboriosam quis consequunturex officiis minima doloremque voluptas ut aut"},'+
  
  '{ "userId": 9, "id": 82, "title": "laudantium voluptate suscipit sunt enim enim", "body": "ut libero sit aut totam inventore suntporro sint qui sunt molestiaeconsequatur cupiditate qui iste ducimus adipiscidolor enim assumenda soluta laboriosam amet iste delectus hic"},'+
  
  '{ "userId": 9, "id": 83, "title": "odit et voluptates doloribus alias odio et","body": "est molestiae facilis quis tempora numquam nihil quivoluptate sapiente consequatur est quinecessitatibus autem aut ipsa aperiam modi dolore numquamreprehenderit eius rem quibusdam"},'+
  
  '{ "userId": 9, "id": 84, "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut", "body": "sint molestiae magni a et quoseaque et quasiut rerum debitis similique veniamrecusandae dignissimos dolor incidunt consequatur odio"},'+
  
  '{ "userId": 9, "id": 85, "title": "dolore veritatis porro provident adipisci blanditiis et sunt", "body": "similique sed nisi voluptas iusto omnismollitia et quoassumenda suscipit officia magnam sint sed temporaenim provident pariatur praesentium atque animi amet ratione"},'+
  
  '{ "userId": 9, "id": 86, "title": "placeat quia et porro iste", "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beataeet quaerat et esse utvoluptatem occaecati et vel explicabo autemasperiores pariatur deserunt optio"},'+
  
  '{ "userId": 9, "id": 87, "title": "nostrum quis quasi placeat", "body": "eos et molestiaenesciunt ut adolores perspiciatis repellendus repellat aliquidmagnam sint rem ipsum est"},'+
  
  '{ "userId": 9, "id": 88, "title": "sapiente omnis fugit eos", "body": "consequatur omnis est praesentiumducimus non isteneque hic deseruntvoluptatibus veniam cum et rerum sed"},'+
  
  '{ "userId": 9, "id": 89, "title": "sint soluta et vel magnam aut ut sed qui", "body": "repellat aut aperiam totam temporibus autem etarchitecto magnam utconsequatur qui cupiditate rerum quia soluta dignissimos nihil iuretempore quas est"},'+
  
  '{ "userId": 9, "id": 90, "title": "ad iusto omnis odit dolor voluptatibus", "body": "minus omnis soluta quiaqui sed adipisci voluptates illum ipsam voluptatemeligendi officia ut ineos soluta similique molestias praesentium blanditiis"},'+
  
  '{ "userId": 10, "id": 91, "title": "aut amet sed", "body": "libero voluptate eveniet aperiam sedsunt placeat suscipit molestiassimilique fugit nam natusexpedita consequatur consequatur dolores quia eos et placeat"},'+
  
  '{ "userId": 10, "id": 92, "title": "ratione ex tenetur perferendis", "body": "aut et excepturi dicta laudantium sint rerum nihillaudantium et ata neque minima officia et similique libero etcommodi voluptate qui"},'+
  
  '{ "userId": 10, "id": 93, "title": "beatae soluta recusandae", "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosamvoluptatem quis enim recusandae ut sed suntnostrum est odit totamsit error sed sunt eveniet provident qui nulla"},'+
  
  '{ "userId": 10, "id": 94, "title": "qui qui voluptates illo iste minima", "body": "aspernatur expedita soluta quo ab ut similiqueexpedita dolores ametsed temporibus distinctio magnam saepe delenitiomnis facilis nam ipsum natus sint similique omnis"},'+
  
  '{ "userId": 10, "id": 95, "title": "id minus libero illum nam ad officiis", "body": "earum voluptatem facere provident blanditiis velit laboriosampariatur accusamus odio saepecumque dolor qui a dicta ab doloribus consequatur omniscorporis cupiditate eaque assumenda ad nesciunt"},'+
  
  '{ "userId": 10, "id": 96, "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi", "body": "in non odio excepturi sint eumlabore voluptates vitae quia qui etinventore itaque rerumveniam non exercitationem delectus aut"},'+
  
  '{ "userId": 10, "id": 97, "title": "quas fugiat ut perspiciatis vero provident", "body": "eum non blanditiis soluta porro quibusdam voluptasvel voluptatem qui placeat dolores qui velit autvel inventore aut cumque culpa explicabo aliquid atperspiciatis est et voluptatem dignissimos dolor itaque sit nam"},'+
  
  '{ "userId": 10, "id": 98, "title": "laboriosam dolor voluptates", "body": "doloremque ex facilis sit sint culpasoluta assumenda eligendi non ut eiussequi ducimus vel quasiveritatis est dolores"},'+
  
  '{ "userId": 10, "id": 99, "title": "temporibus sit alias delectus eligendi possimus magni", "body": "quo deleniti praesentium dicta non quodaut est molestiasmolestias et officia quis nihilitaque dolorem quia"},'+
  
  '{ "userId": 10, "id": 100, "title": "at nam consequatur ea labore ea harum", "body": "cupiditate quo est a modi nesciunt solutaipsa voluptas error itaque dicta inautem qui minus magnam et distinctio eumaccusamus ratione error aut"}]}';
 

const obj = JSON.parse(text);

/*
console.log("userId " + obj.comments[99].userId + "\n\nID" + obj.comments[99].id + "\n\nTITLE: " + obj.comments[99].title + "\n\nBODY: " + obj.comments[99].body);
*/



console.log("1. What is the title of id 15?");
console.log("\nTITLE " + obj.comments[14].title + "\n");

console.log("2. What are the contents in all the comments?");
for(var info of obj.comments) {
  if(info == null){
    obj.comments = null;
  }
  else {
    console.log (info);
  }
}

console.log("\n");

console.log("3. How many comments are in the file?\n");

var count = 0;
  for(var numComments in obj.comments) {
    '${numComments} : $ {obj.comments[numComments]}'
    count++;
  }
console.log(`There is ` + count + ` comments`);
console.log("\n");

console.log("4. What is the full data entry corresponding to user ID number 57?\n");
var a = 57;
var mycomment = (a) => { return obj.comments[a] };
console.log(mycomment(a-1));

console.log("\n");


console.log("5. What is the user id and title of all entries?\n");

const commentarray = obj.comments;

function getIDandTitle(item){return [item.id,item.title].join(" ");}

console.log(commentarray.map(getIDandTitle)); 

console.log("\n");

console.log("6. What is the title corresponding to user ID number 99?\n");

class Entries {
  constructor(myObject,idNumber){
    this.comments = myObject.comments;
    this.idNum = idNumber;
  }
  get title(){
    return this.comments[this.idNum].title
  }
  get body(){
    return this.comments[this.idNum].body
  }
}
myEntry = new Entries(obj,99-1);
console.log(myEntry.title);

console.log("\n");

console.log("7. What is the body corresponding to user ID number 99?\n");

console.log(myEntry.body)

console.log("\n");

console.log("8. What does a map of the 99th comment entry look like?\n");
const newText = new Map();

newText.set('User ID', obj.comments[99-1].id);
newText.set('Title', obj.comments[99-1].title);
newText.set('Body', obj.comments[99-1].body);


console.log(newText);









