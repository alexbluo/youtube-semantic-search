const scores = [
  {
    text: 'which javascript framework is the best',
    start: 0.08,
    duration: 4.4,
    zscore: 2.553716909812807
  },
  {
    text: 'if we go off of downloads react wins but',
    start: 2.08,
    duration: 4.56,
    zscore: -1.4687610285968233
  },
  {
    text: 'based on github stars view is the best',
    start: 4.48,
    duration: 4,
    zscore: 1.2399965525675107
  },
  {
    text: 'but svelt is the most loved framework',
    start: 6.64,
    duration: 4.079,
    zscore: -0.2639942018275513
  },
  {
    text: 'according to the 2021 stack overflow',
    start: 8.48,
    duration: 3.68,
    zscore: 0.3066549769370233
  },
  {
    text: 'survey and some people out there might',
    start: 10.719,
    duration: 2.721,
    zscore: -0.360432252408746
  },
  {
    text: "even tell you that you don't need a",
    start: 12.16,
    duration: 2.8,
    zscore: -1.0014894437423996
  },
  {
    text: "javascript framework and whether you're",
    start: 13.44,
    duration: 3.12,
    zscore: 2.7958583681879614
  },
  {
    text: 'a new developer or have 20 years of',
    start: 14.96,
    duration: 3.36,
    zscore: 0.6728846507527153
  },
  {
    text: 'experience it can be very difficult to',
    start: 16.56,
    duration: 3.28,
    zscore: 0.17230595813071392
  },
  {
    text: 'choose which framework you want to marry',
    start: 18.32,
    duration: 2.799,
    zscore: 0.5169204395929841
  },
  {
    text: 'which is the single most important',
    start: 19.84,
    duration: 2.8,
    zscore: -1.1341778325303011
  },
  {
    text: "decision you'll make related to your",
    start: 21.119,
    duration: 3.441,
    zscore: -0.4773514065503036
  },
  {
    text: "frontend code there's no absolute best",
    start: 22.64,
    duration: 3.36,
    zscore: 1.057016726230267
  },
  {
    text: 'framework and the only way to find out',
    start: 24.56,
    duration: 3.2,
    zscore: 0.39512740385268463
  },
  {
    text: 'which one will make you happy is to',
    start: 26,
    duration: 3.199,
    zscore: -1.3536105129301552
  },
  {
    text: 'build something with all of them in',
    start: 27.76,
    duration: 3.2,
    zscore: -0.3602027344387222
  },
  {
    text: "today's video we'll build the same app",
    start: 29.199,
    duration: 3.681,
    zscore: 0.5620544733453197
  },
  {
    text: 'with 10 different javascript frameworks',
    start: 30.96,
    duration: 5.119,
    zscore: 2.161281684243216
  },
  {
    text: 'including angular react vue svelt lit',
    start: 32.88,
    duration: 6.4,
    zscore: -0.5207573049989304
  },
  {
    text: 'alpine solid stencil mithril and vanilla',
    start: 36.079,
    duration: 4.401,
    zscore: -3.631022822077327
  },
  {
    text: "in the process you'll learn the",
    start: 39.28,
    duration: 2.48,
    zscore: 0.2095958777310583
  },
  {
    text: 'trade-offs between each of these',
    start: 40.48,
    duration: 2.72,
    zscore: 0.05059392873277585
  },
  {
    text: 'frameworks so you can make the best',
    start: 41.76,
    duration: 3.52,
    zscore: 1.4819759982579424
  },
  {
    text: 'choice for your next project this video',
    start: 43.2,
    duration: 3.679,
    zscore: 1.6027159515475442
  },
  {
    text: 'was a ton of work so make sure to',
    start: 45.28,
    duration: 3.2,
    zscore: -1.7683359837061794
  },
  {
    text: 'subscribe and hit the like button then',
    start: 46.879,
    duration: 3.041,
    zscore: -0.36257892048132184
  },
  {
    text: 'leave a comment below with your favorite',
    start: 48.48,
    duration: 2.96,
    zscore: 0.0665116750067824
  },
  {
    text: "framework and i'll choose a few random",
    start: 49.92,
    duration: 3.6,
    zscore: 1.7689544671301076
  },
  {
    text: 'ones to win a free t-shirt next week the',
    start: 51.44,
    duration: 3.84,
    zscore: -2.126856553940482
  },
  {
    text: "first thing we'll do is build a basic",
    start: 53.52,
    duration: 3.84,
    zscore: 1.021238925020668
  },
  {
    text: 'to-do app with vanilla javascript about',
    start: 55.28,
    duration: 4.24,
    zscore: 0.5330272006658335
  },
  {
    text: 'once a year a hot take will go viral',
    start: 57.36,
    duration: 3.839,
    zscore: -2.0932119197463988
  },
  {
    text: "saying that you don't need a javascript",
    start: 59.52,
    duration: 3.199,
    zscore: 0.48675907812043895
  },
  {
    text: 'framework at all any expert web',
    start: 61.199,
    duration: 3.121,
    zscore: 1.291678598994056
  },
  {
    text: 'developer needs to have a solid',
    start: 62.719,
    duration: 3.921,
    zscore: 1.0653063752652459
  },
  {
    text: 'understanding of vanilla js but even if',
    start: 64.32,
    duration: 4.159,
    zscore: 0.22971245275079524
  },
  {
    text: "you're a javascript god attempting to",
    start: 66.64,
    duration: 3.92,
    zscore: 0.2198701821538903
  },
  {
    text: 'build a non-trivial app with it is a',
    start: 68.479,
    duration: 4,
    zscore: 0.3719190867661561
  },
  {
    text: "recipe for disaster what you'll end up",
    start: 70.56,
    duration: 3.44,
    zscore: -1.90515569595451
  },
  {
    text: 'doing is building your own shitty',
    start: 72.479,
    duration: 3.041,
    zscore: -1.10662217507038
  },
  {
    text: 'javascript framework and the last thing',
    start: 74,
    duration: 3.36,
    zscore: 3.124703615003887
  },
  {
    text: 'the world needs is another javascript',
    start: 75.52,
    duration: 3.599,
    zscore: 1.05181881926208
  },
  {
    text: 'framework to build an app from scratch',
    start: 77.36,
    duration: 4.399,
    zscore: 1.6796719767908324
  },
  {
    text: 'all we have to do is create an html file',
    start: 79.119,
    duration: 4.561,
    zscore: 1.5025921123889077
  },
  {
    text: 'then add a script tag to the body what',
    start: 81.759,
    duration: 3.68,
    zscore: 0.572477289395814
  },
  {
    text: 'we want to build here is a to do app',
    start: 83.68,
    duration: 3.92,
    zscore: 0.5250345748861799
  },
  {
    text: 'where the user can write some text into',
    start: 85.439,
    duration: 4.32,
    zscore: 1.4601312879344965
  },
  {
    text: 'a form input then submit the form and',
    start: 87.6,
    duration: 4.159,
    zscore: -0.30692756327907006
  },
  {
    text: 'have that item appear in the list in',
    start: 89.759,
    duration: 4.081,
    zscore: -0.1811112125348236
  },
  {
    text: "addition we'll save those items to local",
    start: 91.759,
    duration: 4.4,
    zscore: 0.10794641912461639
  },
  {
    text: 'storage as kind of a mock database so',
    start: 93.84,
    duration: 4.16,
    zscore: -0.09145069259786229
  },
  {
    text: 'that when the user refreshes the page',
    start: 96.159,
    duration: 3.841,
    zscore: -0.40582280624522593
  },
  {
    text: 'those items are still present pretty',
    start: 98,
    duration: 3.759,
    zscore: -0.4533060239260411
  },
  {
    text: "simple concept but there's actually a",
    start: 100,
    duration: 4.159,
    zscore: -0.923345325477811
  },
  {
    text: 'lot going on there like state management',
    start: 101.759,
    duration: 4.801,
    zscore: -1.070547350605456
  },
  {
    text: 'data binding events and the application',
    start: 104.159,
    duration: 4.32,
    zscore: 0.15574016111781652
  },
  {
    text: 'life cycle to think about the one thing',
    start: 106.56,
    duration: 4,
    zscore: -1.0810916761694924
  },
  {
    text: 'that all frameworks do and vanilla js',
    start: 108.479,
    duration: 4.561,
    zscore: 0.5463527439842769
  },
  {
    text: "doesn't is provide a way to bind or",
    start: 110.56,
    duration: 4.8,
    zscore: -0.39525147856706894
  },
  {
    text: 'connect your html to the javascript',
    start: 113.04,
    duration: 4.399,
    zscore: 1.084248358320743
  },
  {
    text: 'automatically in vanilla we need to',
    start: 115.36,
    duration: 4.24,
    zscore: -0.5399828102526922
  },
  {
    text: 'imperatively grab the html elements that',
    start: 117.439,
    duration: 3.921,
    zscore: -0.10524877291341339
  },
  {
    text: "we're working with from the dom and i",
    start: 119.6,
    duration: 3.44,
    zscore: 0.18966831751016466
  },
  {
    text: 'can tell you right now this is a very',
    start: 121.36,
    duration: 3.439,
    zscore: -0.40024686967935263
  },
  {
    text: 'annoying way to build a complex',
    start: 123.04,
    duration: 3.52,
    zscore: -0.39558900499357463
  },
  {
    text: 'application as you can see here in the',
    start: 124.799,
    duration: 4.001,
    zscore: 0.5604748496692733
  },
  {
    text: 'dom we have an unordered list for the to',
    start: 126.56,
    duration: 4.8,
    zscore: 0.5680084395088794
  },
  {
    text: "do's and then below that we have a form",
    start: 128.8,
    duration: 4.96,
    zscore: -1.1217568600348933
  },
  {
    text: 'with an input and a button to submit the',
    start: 131.36,
    duration: 4.56,
    zscore: 0.0262650239102486
  },
  {
    text: 'form now going into the javascript the',
    start: 133.76,
    duration: 4.32,
    zscore: 1.157950628812517
  },
  {
    text: "first thing i'll do is write some code",
    start: 135.92,
    duration: 4.72,
    zscore: 1.757856598226602
  },
  {
    text: 'using document query selector to grab',
    start: 138.08,
    duration: 4.64,
    zscore: 0.9494943078026268
  },
  {
    text: 'each one of these items from the dom now',
    start: 140.64,
    duration: 4.319,
    zscore: -1.343444216963805
  },
  {
    text: 'that we have access to the html elements',
    start: 142.72,
    duration: 4.32,
    zscore: -0.12267863757816519
  },
  {
    text: "i'm setting up an empty array here to",
    start: 144.959,
    duration: 4.241,
    zscore: 0.8518141599718915
  },
  {
    text: 'represent the actual to-do items in the',
    start: 147.04,
    duration: 4,
    zscore: -0.08735987230861383
  },
  {
    text: 'list in addition to keeping track of the',
    start: 149.2,
    duration: 4.24,
    zscore: -0.7060188099793523
  },
  {
    text: 'data we also need to update the actual',
    start: 151.04,
    duration: 4.72,
    zscore: 0.49391463836235877
  },
  {
    text: "ui when that data changes for that i'm",
    start: 153.44,
    duration: 4.879,
    zscore: 0.3775895307314513
  },
  {
    text: 'defining a function called add to do',
    start: 155.76,
    duration: 4.4,
    zscore: 1.1324066288545693
  },
  {
    text: 'that takes a new to-do item as its',
    start: 158.319,
    duration: 3.441,
    zscore: -1.1920568641474905
  },
  {
    text: 'argument now this is where things start',
    start: 160.16,
    duration: 3.6,
    zscore: -0.2979493603340198
  },
  {
    text: 'to get ugly with vanilla in order to',
    start: 161.76,
    duration: 4.72,
    zscore: -1.6853584870140297
  },
  {
    text: 'update the ui we need to manually create',
    start: 163.76,
    duration: 4.8,
    zscore: 0.44845657924057775
  },
  {
    text: 'a new list item element by calling',
    start: 166.48,
    duration: 4.16,
    zscore: -0.23520994817514926
  },
  {
    text: 'document create element then we need to',
    start: 168.56,
    duration: 4.48,
    zscore: 0.9063584304952046
  },
  {
    text: 'imperatively update its inner html to',
    start: 170.64,
    duration: 4.8,
    zscore: -0.35612541520653385
  },
  {
    text: 'the to-do text and finally append it to',
    start: 173.04,
    duration: 4.64,
    zscore: -0.7550141460509127
  },
  {
    text: 'the unordered list in the dom and as an',
    start: 175.44,
    duration: 4.48,
    zscore: -0.29302147450703736
  },
  {
    text: "added touch i'll save the data to local",
    start: 177.68,
    duration: 4.24,
    zscore: -0.22764935622142266
  },
  {
    text: 'storage so we can access it when the',
    start: 179.92,
    duration: 3.76,
    zscore: -0.40425668362623973
  },
  {
    text: 'page is refreshed the problem with this',
    start: 181.92,
    duration: 4,
    zscore: 0.6213106127826519
  },
  {
    text: 'code is that the application data or',
    start: 183.68,
    duration: 4.4,
    zscore: 0.4702607863928426
  },
  {
    text: 'state is completely decoupled from the',
    start: 185.92,
    duration: 4.319,
    zscore: -0.3154332292270126
  },
  {
    text: 'ui itself and that makes it very hard to',
    start: 188.08,
    duration: 4.4,
    zscore: -0.7438082686909251
  },
  {
    text: 'keep the data in sync with the ui now',
    start: 190.239,
    duration: 3.761,
    zscore: -1.4014717602086566
  },
  {
    text: 'that we have this function in place we',
    start: 192.48,
    duration: 3.36,
    zscore: -0.49472726698681463
  },
  {
    text: 'need a way to call it when the user',
    start: 194,
    duration: 3.92,
    zscore: -0.41203329249293
  },
  {
    text: 'submits the form for that we need to',
    start: 195.84,
    duration: 3.84,
    zscore: 0.027318106360946275
  },
]

export default scores;