export const USER_LOGO =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const YOUTUBE_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png";

export const HAMBURGER_MENU_LOGO =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=";

export const SIDEBAR_MENU_LIST = [
  {
    sectionHeading: "",
    submenuList: [
      { path: "/", menu: "Home" },
      { path: "", menu: "Shorts" },
      { path: "", menu: "Videos" },
      { path: "", menu: "Live" },
    ],
  },
  {
    sectionHeading: "Subscriptions",
    submenuList: [
      { path: "", menu: "Music" },
      { path: "", menu: "Sports" },
      { path: "", menu: "Gaming" },
      { path: "", menu: "Movies" },
    ],
  },
  {
    sectionHeading: "Explore",
    submenuList: [
      { path: "", menu: "Trending" },
      { path: "", menu: "Shopping" },
      { path: "", menu: "Music" },
      { path: "", menu: "Films" },
      { path: "", menu: "Live" },
      { path: "", menu: "Gaming" },
      { path: "", menu: "News" },
      { path: "", menu: "Sport" },
      { path: "", menu: "Courses" },
      { path: "", menu: "Fashion & beauty" },
      { path: "", menu: "Podcasts" },
    ],
  },
];

export const TAG_LIST = [
  { path: "", name: "All" },
  { path: "", name: "Gaming" },
  { path: "", name: "Songs" },
  { path: "", name: "Live" },
  { path: "", name: "Soccer" },
  { path: "", name: "Cricket" },
  { path: "", name: "Cooking" },
  { path: "", name: "Valentines" },
];

export const YOUTUBE_VIDEOS_API = ""; //`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

export const YOUTUBE_EMBED_URL_PREFIX = "https://www.youtube.com/embed/";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 25;
