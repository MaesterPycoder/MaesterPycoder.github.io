'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "53f59a148fde3073017a92302fa07501",
".git/config": "7227b9b561e1e134cbd78ad4e91e5a4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8406e14d6f3b5c1f439852c8425a59c1",
".git/HEAD": "f6b917ed9c8a629b743b797aa2dbcb5e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "8d994e65461b2b3ccadaa5f79bc20518",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3345ece1064b9e76e3161b358b6c0b1",
".git/logs/refs/heads/alpha": "93c50a34942a446e65852308962ff78b",
".git/logs/refs/heads/beta": "444b598fd719206a815b808653fda4c2",
".git/logs/refs/heads/delta": "ce3c9275be12d0c81683223b4b07da00",
".git/logs/refs/heads/gamma": "e3c8865273345db981409aca8ed2b575",
".git/logs/refs/heads/main": "7205f7911ba78c201356150a363a043c",
".git/logs/refs/remotes/origin/alpha": "1d87437243c1e42680b33346d2831cba",
".git/logs/refs/remotes/origin/beta": "3540f25c166ecceb8d78252fa083ea90",
".git/logs/refs/remotes/origin/delta": "874d5edc631fae76132d83598a26569e",
".git/logs/refs/remotes/origin/gamma": "27bbe995908e70d26661f7a5807cdd8f",
".git/logs/refs/remotes/origin/main": "b838393b5a6ed07f94fc10ec6061d103",
".git/objects/01/70c0489217aa98738f5a75c38e86abdc7d8ff3": "f7105ce2bc080cf10024ecd4d7bcb6e7",
".git/objects/03/e8d14edbc12be86103baa21206a420a6c7236c": "4027b9b99f4a29b0c4dddca32a002572",
".git/objects/04/4831b1467b77cbb93b5fe77040e051250623e7": "6c0877ecb6bbeed4bdc61c6f47399d9c",
".git/objects/09/1374379e2f5f895dfc5348d7fc897459bc8bc0": "b31416a49a79bf9aefe7ced26cdb4c6d",
".git/objects/0a/0d21124d726b222832f78a12d9a49a16cfa92e": "3bd9b4b727622f80de7cb044d237557f",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0c/101b3d082a0b2537c83c983ba897af8a1c6d58": "7027ad4a955703ed86aee85762639051",
".git/objects/0d/c19997e11fa6e700a109b7b32c1c33aa32359c": "d2eba9d4cd38a148e3ff9ece4cc11039",
".git/objects/12/cf31130db68af5b9cff160d7607fe007daa5ec": "32235e6aa170765abeff7b06904301df",
".git/objects/17/a2b469d22685b95ff0d2fae483bfdcb21cbbbb": "5a9d431419c9f4b944276af1244362e6",
".git/objects/1f/50ff3358f382f39f579c813130d97f04f13bd7": "24aecf92b1c9fd7953599404af167398",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/8bd65b5c84ace385834ede32a9725697415901": "880bf2ed985c97f35dccd2a069fc7d08",
".git/objects/27/c23ca2b59496fc101e949bc60145eb23ece2a5": "ce44d67372b1b7aa1df4645df83adafc",
".git/objects/28/3926af2a973f479ce59e8c369ba4334cbf6cb7": "9066862a18f563e74eee6f2008927dc2",
".git/objects/29/fc4bcc5bfe7890d3328cbe42c6cae91cf09691": "6e92c375ef3aab59dbb06f76b811b11c",
".git/objects/2e/7483c4c2271648e0c5492547bf908dc22c387f": "ff32f18b60634586d83c47e8fcdcba0c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/b9c1552e11df4b1288000192fdf678c540124d": "8cdc30174b847b9bb27346d1d25c6c61",
".git/objects/38/6af8a543e5c841792e6c3c432376ce44bf9124": "6b26afc5659ee4bc012794dd77e691ce",
".git/objects/3b/65e6b2fb9ef0f88d69e2c19542e76712a8499f": "8b373abb201710d79c39d0230304c0d8",
".git/objects/3d/b05108dc03e0965469fc95e1606bd67d174501": "2d1d2bc577b5e6bc1c1f6eaf8c710aa0",
".git/objects/3e/4041cbfda9ca9df53d626abacb12c3399ffbab": "d4c4e434f9e8f6cc50416662bb7e7b29",
".git/objects/42/1c8bbdd47b7c3e8c473d9652a1163a9a3a78b0": "d952fb84885c68fac5d69c22b4d3c407",
".git/objects/43/dd943f26522bd19fabe52a26475ec5e74d2e30": "616b7891681b52fa2fbe4b5ae61b9db3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b15c8a246d744e898a5bddbd575443dbd54a5c": "ffd6798d51a3642c1e9a9931cdf82cba",
".git/objects/49/83ea75f43f69a12c479d12c0cacbb388fcb1e7": "839fdd8a02bfc479212a01df5553fa38",
".git/objects/4a/568362d5bcc041f6738e223d6890df3cded483": "ebd6c85d06ef3a729f345ada19b5b4c3",
".git/objects/4a/f9b9f0cc5b0bb5ef40599ac5bc670a0a95d283": "d72a356f1ff793d6e1706e9d77863f1c",
".git/objects/4b/d91f226148859a9d441b19a15d551fb98b24fd": "4fda4493115beeed7989bdf2c78b6dc9",
".git/objects/4f/d04d8cacf74b3a2e0054af8c4d56e52952cde1": "11030a3d094c5a7005825e888df63513",
".git/objects/4f/de63ba4026fa06955b5ab8ef0ad94fcb6b9c9c": "6b014a511c0bc917bb0be85d7b5b21fc",
".git/objects/53/82744016a0d0944cb1c94fde0cf631344ab7a4": "6ece4e544894e8838d10ac3e2ba3ac01",
".git/objects/53/e1b214b42b5626380947d30abd22994e89001d": "3923615a1099cca8af5b8d1362c0a9dc",
".git/objects/53/ed6e70dcc5da95f46217c4711724e011f5ee49": "18fdb9ba60b66cd85be5aec6ebadd7fb",
".git/objects/55/186893fa29b736a9ac00c87b74a8dbf5f6f17a": "280a226f1f76d528d739d6b5f768df62",
".git/objects/59/0e62f0672ffb5beb7ee4162d7b81129ad2b8fc": "b52a6756081c777d4dd7a4fdf6701547",
".git/objects/59/7a1da854cd17a7e62b4f03306cac1888fa02de": "924a7dc5bd8ad1775bdc4fd2c9db1ceb",
".git/objects/5a/69d06ef38b5ff23a8fb9e71e86007180fa0fbe": "cb0b09314dc304930009761a6ceb8097",
".git/objects/60/ef37a77462cca88135a05e32a56611f00400f9": "4b7ed56808416dcd9b1b2f7625d0f1bf",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/62/bc692904051ed95611d1eb60228682b427d1fa": "fd894954f12b7d9b5a1bdc1b998117ee",
".git/objects/63/ee69510852e365b3f3a9061977eb0910b089ec": "79517198eabaef14288a54e50f422206",
".git/objects/64/3876dc873e53c1329412dedd6e2ec4bb57867c": "64d753d878c2d98e851717a2f05d8bf3",
".git/objects/66/c52518b716c43266f693c88480f9d4ec67fd92": "cf5ba6cf7b3014b674266503c218e334",
".git/objects/69/d67179a8d7e9146d21c7f23e3bca175acef2a5": "b3f1127dfaf039ce7f984360c94e5f84",
".git/objects/6d/a6afdcdb7a02a2c837deaac5227dbaa44f1f47": "18349ec9c6345e549dc7de09b8e3f272",
".git/objects/6d/eada121896c23a2d255b8686fbe8f11c4a4c7a": "08db420ef048bef44fcf8d40c7e902a1",
".git/objects/70/43481bdee5fb8c9176f7d1d94fd4f1e49ef3c8": "d113a31c3a55bd8cce0dc9a024b6e56e",
".git/objects/70/695d46bcab6a0787cac099e06d4343fde27e89": "aeebbc9558cf23fd2600b7a8da074aa8",
".git/objects/70/ed59fda26e910df0031d970965c4b75cecbc8b": "ce49564bd4e8069b402873a8d3fad993",
".git/objects/71/9e6ca64a368048696fd265c4ae5f5d7b7e01b8": "16108321e0d5a01cd57ae02aa9d06639",
".git/objects/74/840b5e521a397229da600868af194d5c1a30dd": "c161764c3056d3e7be031238dd370d5d",
".git/objects/77/ce7aa923373f358875a1e4b7b569371ad2229f": "942cd7d6f8ef5b8b5b156f5030562b7c",
".git/objects/79/5c4865803a5edb90899fd184908bf1fa53fee6": "45bbe2fb9602722b60ef19e561cb559b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/d09ad1086a4737bddf8e50aebc7c45dedb1270": "9a11897beaad113cfb28f4d71561f12a",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/7e/f97583776f6896082dd94d3f02d89cc5076899": "d48242438b217c0026d2b9cc17804201",
".git/objects/81/f7d05b2bf2d8d115d5d60c9cc24f885f03f002": "29b74c5c6e2ee0d1459ca4b63d50f1bf",
".git/objects/83/88af76b6309303389cdf0e8b982c3baa6512a1": "904f4afc3ccd23348bf72b86feff0153",
".git/objects/84/38679085abe0728be7213d978d2e18c4aa1d29": "ee0bf6039d13561389c79ca0b84d6ef0",
".git/objects/84/a8b5f7acab9cafcf299c978113c3d6f8e8ff86": "194764a1bc0624c5c880837660186971",
".git/objects/87/d54ad72562f63a53e46e05827a1e99443d1efa": "e6c19b7a38e4403b42a86b5ca1b4f792",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/68f674bcca8947f6fb11f200b034df956a70ea": "1937a0b03f186323dadeff0233d2cb3b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/d235c1ccb54c23dffb953d12adb85e9d45c96b": "7f69d7cc0dfac96dcf51f24c4a10d6fd",
".git/objects/92/2e4875470f4eb9579618e96118f45102f774d6": "25effe71f6381e1be51deac121d082aa",
".git/objects/99/526e0781470695fc9f38dd28b31eec6b5cf982": "c38c0f36272961c1bd57bc09d83f2058",
".git/objects/9b/655167fa8afd30d85db3c4b353146a3515c68a": "89b62e75522772e34ed1c53b02895086",
".git/objects/9c/663bc20a94aaf98e13ef49fb9e07ee144818a3": "0158e21101d538647c16e91f33531fcd",
".git/objects/9e/f5cfd5bd9d4e68daddd436c966e6a1e6bd3316": "59d03950bbcb0ce036daf1b81d2ccdaf",
".git/objects/a0/cab3e77fabc5d89a31cd2f1897f9f676360e25": "7e3184c320279674a07c2ae0d4c47540",
".git/objects/a0/e987c4d298d69da348f2a46936b70e580f8c9a": "62c99a91ab350469c99a4266c2e1ddc3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/35adc9a356948296b253a249fc21eb6ddd8928": "8424ec36e7c9aba99ccdb7a9600400ef",
".git/objects/a3/9b12d377cdd139697e228a822c155d3aae1814": "6ff8629e9886e1b8e94929a96336b06a",
".git/objects/a4/d2da87522415a31fbe94e1b83213b9bbf51da5": "e99355f068102e4c99de5a06c2e85a71",
".git/objects/a6/10bdd3c0a3d07835f1b48b952892f311e14d5c": "93d5a137e77d5dfed0abfc3257ae1dc3",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/f97ab88f3fe6a339a385d793ec00548898d793": "c97973b30e6475b3a4cabe80e1a1fd59",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/4c4cd8447a77a3ec2ef2767965c4f803ebe793": "2a16e1e22ad347f40e6b868ea1110868",
".git/objects/ae/50453ada1a3e826e660f562ca5ff012226e09d": "4ac14eec3a8e28f45f3ae096412131da",
".git/objects/af/037bbe2f026124297c340bbf01c9d3d008435f": "9d342436ef58889799d5f3b928f1701f",
".git/objects/b1/661f23219beee73c06d6987f7f2d2aad155d76": "7827e3ebe3b787909f318dac8ebf1d78",
".git/objects/b2/206dfad96fb5267be3b788bf4ddd310bf77db5": "69a4a757041b7ea776f67eaad2f1cd4c",
".git/objects/b3/aca0d8b48403da742ee933881c484cf71ad07d": "8d0197d88635770459a3b9b413ba8ad2",
".git/objects/b4/ebc646cbdc89d3e4522f92126f7b9023ee89c8": "6d9da6339e65a75678dec38cc161c4d6",
".git/objects/b4/f02ecef961f6f3c07cb0c4952b28fdbccf978c": "a6304139f613cbc6370d5054cef50482",
".git/objects/b6/8c3036848428eb11d9f4f9fa57fc548db86256": "2bebce57b65cf517db98c95832f351dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dd94479ba34cd56f8bda27dcb459696b354be3": "a3ddf4c780520b8a4507bf9087649170",
".git/objects/b9/07ccfbe7a769503e2b33938dce4184bc468e05": "7d5750aac18b987d49ee1574a393bf5e",
".git/objects/ba/0e1c72056bf5743530ac9e081034b2b59348d5": "26dbeb584acf20d4df3538c341b07d84",
".git/objects/bf/b62708e74d1da7189f2cc51b5475b1af94820c": "047ba7d93f54a222f4283dcbbee01048",
".git/objects/c4/0ba9a195dc5f0ffa62c808211a2b1c3020819a": "6d9dffb40027bcf34d492582d773aebe",
".git/objects/d3/9f6bb99b1c9cfc06e0756f4be56008fe6a2f75": "5e6cffe3b6433232deaf26bbbc1cf043",
".git/objects/d7/ce3de25974968697fbab5a54722371bd2125d5": "2db2bc9274f52737e671780e52ed0a66",
".git/objects/d8/b4bdb88fe64c0932e848d4cf4c3c6ec591aae5": "9d1cffceac808e2ef3bfc3c59c40c27e",
".git/objects/d9/5521934945db23fcf417489a28ce079f790d35": "b896cb130ff15268fe64e7cd490caae4",
".git/objects/dc/3edce9c1f53606d21e7ff82f6d756540fdcd19": "79017589d476a86c2e56b60c8bc7f4c4",
".git/objects/df/6a81c31cc007970e849d14ba8e5d245539bab2": "889f7d7813234efc7d5c04317c75658f",
".git/objects/df/7ad9c8b1b466825a30d33d54e0ed18dd20e305": "2d8a796b0316cf7e78fdb2580d43ec73",
".git/objects/e0/b6b4f7f92fe8e553e06d4cab8c133ecf19b1e2": "8eeb734afb78455f16f39a4b8a6dc6b3",
".git/objects/e2/83e32fdf93bd881efe58943c1f6e33a0c499ea": "90988e5e515f792c20aef5b136e7b8de",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/3939b2688db76acf0abbd875bd5a788d0af32a": "5d0770db696169858a9803549c8126b4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/535509f7f8b1b0e993346f1a359ed63b9a0c8b": "16d6719901f09207470321fa9de3f4f4",
".git/objects/e6/e66e7b0b89fce70ef0fcaba0054eba5231b01b": "380f47a7a9cf874ec6f62b4dcf789e1d",
".git/objects/f0/acdcb7a7f8079dcf469870b55ec5041e90798b": "b5d5cc41682a19104e8464c25743f0c9",
".git/objects/f1/6e30aa6b0557943c3e783a30b7f7513748b48b": "c60f3fa278a2352e349e9c1d1d6bae65",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/01783348e47710aed88e4f7a1e7be2e65a35d9": "e4e216af3b7835b120e329c12714af9f",
".git/objects/f4/2dd29c42fe7105afbc726c4d4ef250c1248784": "ccd28f84c445b3559dd9162f309c6cd5",
".git/objects/f4/abdc5ddd9d608effe07b9870126451e7992ba0": "4dc69c93cbd2f0b308e7ab5abbd34e2d",
".git/objects/f6/ade9538d31a3c47217782b43ef6b94f52e0a42": "60efe503ff07c88cd0da11f77c519c7c",
".git/objects/fa/c8025c13b1d170516098a14c719d3593072ea8": "3c4138281fee2881957d628dc0a6aaad",
".git/ORIG_HEAD": "cf422ccaeb736f1c6418854abcf11653",
".git/refs/heads/alpha": "4fc7c5795818adff4ceb61d222c4f956",
".git/refs/heads/beta": "51897421bbddad02799d22b2b552289f",
".git/refs/heads/delta": "250059b3ed5784b52cdda8a1c2461e65",
".git/refs/heads/gamma": "bf8c7b7e21816bf2a2149d10ab415cbf",
".git/refs/heads/main": "5567d09ef93c2e7023324fcd28c30baa",
".git/refs/remotes/origin/alpha": "4fc7c5795818adff4ceb61d222c4f956",
".git/refs/remotes/origin/beta": "51897421bbddad02799d22b2b552289f",
".git/refs/remotes/origin/delta": "250059b3ed5784b52cdda8a1c2461e65",
".git/refs/remotes/origin/gamma": "bf8c7b7e21816bf2a2149d10ab415cbf",
".git/refs/remotes/origin/main": "87c71763639db4248327e47be0236ff2",
"assets/AssetManifest.json": "b442b32c2eb43862e17e87786662fa9d",
"assets/assets/books/book1.jpg": "5f89a3f00b10852d5ea082ffb03ab4fc",
"assets/assets/books/book2.jpg": "b21389513702b4f4a427847d43e1bf9a",
"assets/assets/books/book3.jpg": "9495e1ba9ac5b6d7d58634c66faac552",
"assets/assets/books/book4.jpg": "80ae0422600864a93fb0dea2a0614db6",
"assets/assets/books/book5.jpg": "13201c67d8610439501850b3b615923f",
"assets/assets/icons/discord.png": "55f7a04c1027c496960e77456aebcc36",
"assets/assets/icons/facebook.png": "29db8108d8587103d79cfe7dfc136e43",
"assets/assets/icons/github.png": "d8bd1c9c3b2d860cb69ab5b2082c66bb",
"assets/assets/icons/instagram.png": "d91dc7f6feae27f1e9d57bbc7681c76b",
"assets/assets/icons/linkedin.png": "d06556dee2ff6f51daed232dadbabc20",
"assets/assets/icons/telegram.png": "d41de272e9b767d37d7d03a2571d6f93",
"assets/assets/icons/youtube.png": "b42cd9f45cff770bab9eae94d3d368d6",
"assets/assets/images/computer.gif": "c0d1b11e54c2b07f7353dd160e8ba80d",
"assets/assets/images/computer.png": "d72584516f5d2c850e105f0528bc7859",
"assets/assets/images/dev.gif": "bc98c9dcc76893a46fc71f3920846a05",
"assets/assets/images/hacker_earth.png": "5841d52def180cc73949e8f565faaae3",
"assets/assets/images/hacker_rank.png": "bbfcac9b442fc1b9c880376bae1cd8a5",
"assets/assets/images/ironman.jpg": "0273345fec472533a80a1aa5818ec71d",
"assets/assets/images/leet_code.png": "99ee28b5f1841be8ea03a600c992c22e",
"assets/assets/images/o.png": "edf80494f37771d158dc697c31a950b8",
"assets/assets/images/profile.jpg": "eac4ea729b6ec84224dd6a92f20bb2aa",
"assets/assets/images/section2.jpg": "603df5ef350a66ca34e0df34c50339fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7f2e94e68b32e6d1062754e846b6ab94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "cd77540c58cd01835516ba5cdd4ba9ee",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e60d04c123079f7640ceba329adb9879",
"/": "e60d04c123079f7640ceba329adb9879",
"main.dart.js": "5637d54233cd08e5f85c8c5709dbd123",
"manifest.json": "5966099fb63947fe1560f3beaed7c775",
"version.json": "82667b13d69f67f9b19a2fe062da6aac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
