export function openLink(index){

  const link_names = [
    "BDSM",
    "F-List"
  ];
  
  const link_address = [
    'https://bdsmtest.org/r/GSQ2nPCZ',
    'https://www.f-list.net/c/lunalunsfw'
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