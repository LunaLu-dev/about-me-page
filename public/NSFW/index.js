import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-performance.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-check.js";

const firebaseConfig = {
  apiKey: "AIzaSyDi32_7jRHVPaTdRYcXqEbMDh1wJNyHZ_k",
  authDomain: "about-me-page-d2c66.firebaseapp.com",
  projectId: "about-me-page-d2c66",
  storageBucket: "about-me-page-d2c66.appspot.com",
  messagingSenderId: "41360382098",
  appId: "1:41360382098:web:590ceb3c990c1c2532ee4b",
  measurementId: "G-5PZWBDGCCK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const performance = getPerformance(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LddquIpAAAAAGN63qAtNJiKw54v0Pk6tj1CK7O2'),
  isTokenAutoRefreshEnabled: true
});

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

  logEvent(analytics, link_name, logData);

  window.open(window.open(link_address[index]));

}