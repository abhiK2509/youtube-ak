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

const GOOGLE_API_KEY = "AIzaSyCXj1F9RiT3j-SfOw4TtLpFPQMhpAohhCs";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_EMBED_URL_PREFIX = "https://www.youtube.com/embed/";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
