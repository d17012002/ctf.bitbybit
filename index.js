var Gossip = [
  "This is story 01. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,",

  "This is story 02. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,",

  "This is story 03. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,",

  "This is story 04. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,",

  "This is story 05. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,",

  "This is story 06. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,",
];

var GossipId = [
  "ID: 0122|452|232 - 01",
  "ID: 0122|452|232 - 02",
  "ID: 0122|452|232 - 03",
  "ID: 0122|452|232 - 04",
  "ID: 0122|452|232 - 05",
  "ID: 0122|452|232 - 06",
];

var storyCount = 6;
var count = 0;
var story = document.querySelector(".story-txt");
var storyID = document.getElementById("idd");
var bell = document.querySelector(".ring");

function initialize() {
  story.innerHTML = Gossip[0];
  storyID.innerHTML = GossipId[0];
}

document.querySelector(".changeStory").addEventListener("click", () => {
  bell.classList.add("ring-bell");
  if (count < storyCount - 1) {
    count++;
    story.innerHTML = Gossip[count];
    storyID.innerHTML = GossipId[count];
  } else {
    count = 0;
    initialize();
  }

  setTimeout(() => { bell.classList.remove("ring-bell");  }, 1000);
    
});

initialize();
