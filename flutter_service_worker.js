'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "abb82c660dc24714822d3e324cf087ca",
".git/config": "4eab41ddd0fd8fbd25317f420f5d8184",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "7c62093f23cf2566a144340befc2d27e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa78f68fbbedad847582135af67ec41d",
".git/logs/refs/heads/alpha": "b3c2eb98f3f5bb478a74104113591e14",
".git/logs/refs/heads/main": "7205f7911ba78c201356150a363a043c",
".git/logs/refs/remotes/origin/alpha": "4e42d9d5024058a1c0b66f00fb6f3612",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/8bd65b5c84ace385834ede32a9725697415901": "880bf2ed985c97f35dccd2a069fc7d08",
".git/objects/2e/7483c4c2271648e0c5492547bf908dc22c387f": "ff32f18b60634586d83c47e8fcdcba0c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/59/0e62f0672ffb5beb7ee4162d7b81129ad2b8fc": "b52a6756081c777d4dd7a4fdf6701547",
".git/objects/60/ef37a77462cca88135a05e32a56611f00400f9": "4b7ed56808416dcd9b1b2f7625d0f1bf",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/66/c52518b716c43266f693c88480f9d4ec67fd92": "cf5ba6cf7b3014b674266503c218e334",
".git/objects/77/ce7aa923373f358875a1e4b7b569371ad2229f": "942cd7d6f8ef5b8b5b156f5030562b7c",
".git/objects/79/5c4865803a5edb90899fd184908bf1fa53fee6": "45bbe2fb9602722b60ef19e561cb559b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/d09ad1086a4737bddf8e50aebc7c45dedb1270": "9a11897beaad113cfb28f4d71561f12a",
".git/objects/83/88af76b6309303389cdf0e8b982c3baa6512a1": "904f4afc3ccd23348bf72b86feff0153",
".git/objects/87/d54ad72562f63a53e46e05827a1e99443d1efa": "e6c19b7a38e4403b42a86b5ca1b4f792",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/2e4875470f4eb9579618e96118f45102f774d6": "25effe71f6381e1be51deac121d082aa",
".git/objects/a0/e987c4d298d69da348f2a46936b70e580f8c9a": "62c99a91ab350469c99a4266c2e1ddc3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/35adc9a356948296b253a249fc21eb6ddd8928": "8424ec36e7c9aba99ccdb7a9600400ef",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/50453ada1a3e826e660f562ca5ff012226e09d": "4ac14eec3a8e28f45f3ae096412131da",
".git/objects/b4/ebc646cbdc89d3e4522f92126f7b9023ee89c8": "6d9da6339e65a75678dec38cc161c4d6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dd94479ba34cd56f8bda27dcb459696b354be3": "a3ddf4c780520b8a4507bf9087649170",
".git/objects/d7/ce3de25974968697fbab5a54722371bd2125d5": "2db2bc9274f52737e671780e52ed0a66",
".git/objects/d8/b4bdb88fe64c0932e848d4cf4c3c6ec591aae5": "9d1cffceac808e2ef3bfc3c59c40c27e",
".git/objects/d9/5521934945db23fcf417489a28ce079f790d35": "b896cb130ff15268fe64e7cd490caae4",
".git/objects/df/6a81c31cc007970e849d14ba8e5d245539bab2": "889f7d7813234efc7d5c04317c75658f",
".git/objects/e2/83e32fdf93bd881efe58943c1f6e33a0c499ea": "90988e5e515f792c20aef5b136e7b8de",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/c8025c13b1d170516098a14c719d3593072ea8": "3c4138281fee2881957d628dc0a6aaad",
".git/ORIG_HEAD": "5567d09ef93c2e7023324fcd28c30baa",
".git/refs/heads/alpha": "5567d09ef93c2e7023324fcd28c30baa",
".git/refs/heads/main": "5567d09ef93c2e7023324fcd28c30baa",
".git/refs/remotes/origin/alpha": "5567d09ef93c2e7023324fcd28c30baa",
"assets/AssetManifest.json": "f085dfc46762981a98e3c7004de2cfb5",
"assets/assets/icons/discord.png": "f516fda6ea41fb8a816fa989e0b70095",
"assets/assets/icons/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/icons/github.png": "acf172f26b6761ec94a0d4316bdbf6d4",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/telegram.png": "b37d6df3b36a74748a9bda890b3ba550",
"assets/assets/icons/youtube.png": "e22ad093684f11727f86aecb618ca43d",
"assets/assets/images/computer.png": "d72584516f5d2c850e105f0528bc7859",
"assets/assets/images/ironman.jpg": "0273345fec472533a80a1aa5818ec71d",
"assets/assets/images/o.png": "1ad8aaa9395533bba3dee6e410fe6f00",
"assets/assets/images/section2.jpg": "603df5ef350a66ca34e0df34c50339fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "fafc605ea21312c7a2f938b02288fa6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1ce4e7d23434ef3ab08d5480cb159cee",
"/": "1ce4e7d23434ef3ab08d5480cb159cee",
"main.dart.js": "cdfa4923cb7c20a1efcb3de0e985f2ec",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
