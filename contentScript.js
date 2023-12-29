(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = ""; var youtubContainer = "zika po";
  let currentVideoBookmarks = [];
  var glo_change = 1;

  // const fetchBookmarks = () => {
  //   return new Promise((resolve) => {
  //     chrome.storage.sync.get([currentVideo], (obj) => {
  //       resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
  //     });
  //   });
  // };
  const newscrollHandler = async () => {
    // window.scrollTo(window.scrollX,window.scrollY);
    console.log("working scroll man ", document.documentElement.scrollTop)
    if (document.documentElement.scrollTop <= 0)
      youtubePlayer.currentTime = youtubePlayer.currentTime + 3
    else
      youtubePlayer.currentTime = youtubePlayer.currentTime - 3
  }
  const addNewBookmarkEventHandler = async () => {
    const currentTime = youtubePlayer.currentTime;
    const newBookmark = {
      time: currentTime,
      desc: "Bookmark at " + getTime(currentTime),
    };
    console.log(" we have clicked the butto")
    youtubePlayer.currentTime = youtubePlayer.currentTime + 45
  };
  const addNewBookmarkEventHandler2 = async (bkb2) => {
    const currentTime = youtubePlayer.currentTime;
    const newBookmark = {
      time: currentTime,
      desc: "Bookmark at " + getTime(currentTime),
    };
    alert(" we have clicked the butto")
    bkb2.src=chrome.runtime.getURL("assets/play.png");
    
  };
  const chgHandler = async (as, asi, cmnt1, blw1, chgbuttn) => {
    if (glo_change) {
      console.log("kjshsk log on chnage")
      const xz = "<div id='youtubenotgoot' style='float:left;overflow-y: auto;height: 500px;' ></div>"
      as.innerHTML = xz; as.prepend(chgbuttn);
      const cmmntcont = document.getElementById("youtubenotgoot")
      cmmntcont.append(cmnt1); as.append(cmmntcont);
      blw1.append(asi)
      glo_change = 0; chgbuttn.innerText = "Videos";
    } else {
      console.log("else    e       eeeeee chnage")
      as.innerHTML = ""; as.append(chgbuttn); as.append(asi);
      blw1.append(cmnt1)
      glo_change = 1; chgbuttn.innerText = "Commentz";
    }
  }
  const newVideoLoaded = async (kingkong) => {
    // if(!kingkong)return
    console.log("new video is loaded ", youtubContainer)
    console.log("curr video  ", currentVideo)
    const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
    // if(currentVideo!="")
    setTimeout(function () {
      console.log("timeout function has now started")
      // if(kingkong)jpxdivbutton.remove()
      var alol = document.getElementById("secondary")
      if (!alol.children.length) alol.remove()

      alol = document.getElementById("cmntvscbutton2")
      if (alol) alol.remove()

      ytc = document.getElementById("comments")
      yts = document.getElementById("secondary")
      ytsi = document.getElementById("secondary-inner")
      ytsb = document.getElementById("below")

      console.log(yts)
      // yts.insertBefore(ytc,ytsi);
      // const jpxdivbutton="<button id='cmntvscbutton'>Change</button>"
      const jpxdivbutton = document.createElement("button");
      jpxdivbutton.src = chrome.runtime.getURL("assets/bookmark.png");
      jpxdivbutton.className = "cmntvscbutton";
      jpxdivbutton.id = "cmntvscbutton2";
      jpxdivbutton.innerText = "Comments"
      jpxdivbutton.style.cssText = 'align-items: center; background-color: #FFFFFF; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: .25rem; box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0; box-sizing: border-box; color: rgba(0, 0, 0, 0.85); cursor: pointer; display: inline-flex; font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif; font-size: 16px; font-weight: 600; justify-content: center; line-height: 1.25; margin: 0; min-height: 3rem; padding: calc(.875rem - 1px) calc(1.5rem - 1px); position: relative; text-decoration: none; transition: all 250ms; user-select: none; -webkit-user-select: none; touch-action: manipulation; vertical-align: baseline; width: auto;'
      // if(kingkong)
      yts.prepend(jpxdivbutton)
      // ytcb=document.getElementById("cmntvscbutton2") 
      jpxdivbutton.addEventListener("click", function () { chgHandler(yts, ytsi, ytc, ytsb, jpxdivbutton) });
      // jpxdivbutton.addEventListener("click", addNewBookmarkEventHandler);

      // mynewdiv=document.getElementById("youtubenotgoot").prepend(ytc)
      // yts.insertBefore(mynewdiv,ytsi);//mynewdiv.append(ytc);
      // ytsb.appendChild(ytsi)
    }, 5000)

    if (!bookmarkBtnExists) {
      // currentVideoBookmarks = await fetchBookmarks();

      youtubContainer = document.getElementsByClassName("html5-main-video")[0]
      // youtubContainer = document.getElementById("ytd-player")
      // console.log("conatuiner is ->>>>> ",youtubContainer)
      console.log("new video is loaded 2nd ", youtubContainer)
      youtubContainer.addEventListener('wheel', newscrollHandler);


      // comments tab

      const bookmarkBtn = document.createElement("img");
      const bookmarkBtn2 = document.createElement("img");
      const bookmarkBtn3 = document.createElement("img");
      // bookmarkBtn.style.display="flex"
      bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
      bookmarkBtn2.src = chrome.runtime.getURL("assets/delete.png");
      bookmarkBtn3.src = chrome.runtime.getURL("assets/bookmark.png");
      bookmarkBtn.className = "ytp-button " + "bookmark-btn";
      bookmarkBtn2.className = "ytp-button " + "bookmark-btn2";
      bookmarkBtn3.className = "ytp-button " + "bookmark-btn3";
      bookmarkBtn.title = "Click to bookmark current timestamp";

      youtubeLeftControls = document.getElementsByClassName("ytp-right-controls")[0];
      youtubePlayer = document.getElementsByClassName('video-stream')[0];
      // youtubePlayer=document.getElementsByClassName('video-stream')[0];
      youtubeFram = document.getElementsByClassName("ytp-caption-window-container")[0];
      // console.log("thi si fram ->- ",youtubeLeftControls)
      // youtubeChapa = document.getElementsByClassName("ytp-chapter-container")
      // youtubeLeftControls.insertBefore(bookmarkBtn,youtubeChapa);
      youtubeLeftControls.prepend(bookmarkBtn);
      // youtubeLeftControls.prepend(bookmarkBtn2);
      // youtubeLeftControls.prepend(bookmarkBtn3);
      // youtubeFram.appendChild(bookmarkBtn);
      bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
      // bookmarkBtn2.addEventListener("click", function(){addNewBookmarkEventHandler2(bookmarkBtn2)});
    }
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;
    console.log("object of the site is ", obj)
    console.log("vfdfg of the site is ", currentVideo)

    if (type === "NEW") {
      currentVideo = videoId;
      console.log("in NEW vfdfg of the site is ", videoId)
      newVideoLoaded(1);
    } else if (type === "PLAY") {
      youtubePlayer.currentTime = value;
    } else if (type === "DELETE") {
      currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
      chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });

      response(currentVideoBookmarks);
    }
  });
  console.log("outside one vfdfg of the site is ", currentVideo)
  newVideoLoaded(0);
})();

const getTime = t => {
  var date = new Date(0);
  date.setSeconds(t);

  return date.toISOString().substring(11, 8);
};
