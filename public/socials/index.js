export function openLink(index){
  const link_names = [
    "discord", 
    "Twitch", 
    "VRChat", 
    "Reddit", 
    "Github", 
    "YouTube", 
    "Twitter", 
    "Planet Minecraft", 
    "Pinterest", 
    "Wishlist", 
    "Steam",
    "Spotify",
    "Only-Fans"
  ];
  
  const link_address = [
    'https://discord.com/users/1098996480011944017', 
    'https://www.twitch.tv/lunaluplayz', 
    'https://vrchat.com/home/user/usr_19d6e456-23a6-41d4-8d0a-cf0ddd305e47', 
    'https://www.reddit.com/user/LunaLu_04',
    'https://github.com/LunaLu-dev',
    'https://www.youtube.com/@Luna_Lu1',
    'https://x.com/LunaLuplayz',
    'https://www.planetminecraft.com/member/_luna04_/',
    'https://www.pinterest.co.uk/lunaplayz04/',
    'https://wishlist.lunalu.org/user/4OKjWZpFk3Qt4pvsSAjS687svqj2',
    'https://steamcommunity.com/id/_LunaLu_/',
    'https://open.spotify.com/user/31jo3k6nxhloleusg3tidy7ctimq?si=93424dcbf62e47ea',
    'https://only-fans.uk/LunaLu'
  ];

  const link_name = link_names[index];
  const logData = {
    eventCategory: "Link Click",
    eventAction: "Open Link",
    eventLabel: link_name,
    linkAddress: link_address[index]
  };
  
  window.open(window.open(link_address[index]));
}