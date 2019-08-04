$(document).ready(function(){
  $("form#userInfo").submit(function(event){
    event.preventDefault();

    var userType = $("select#skills").val();
    var gender = $("select#gender").val();

    console.log(userType);
    console.log(gender);

    if (userType === "INFJ" && gender === "male") {
      $("div#yourDate").show();
      alert("male INFJ")
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/gatsbyINFJ.jpg", "alt": "leonardo as jay gatsby"});
    } else if (userType === "INTP" && gender === "male") {
      $("div#yourDate").show();
      alert("male INTP");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/poirotINTP.jpg", "alt": "david suchet as hercule poirot"});
    } else if (userType === "INTJ" && gender === "male") {
      $("div#yourDate").show();
      alert("male INTJ");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/samSpadeINTJ.jpg", "alt": "humphrey bogart as sam spade"});
    } else if (userType === "ISTP" && gender === "male") {
      $("div#yourDate").show();
      alert("male ISTP");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/sherlockISTP.jpg", "alt": "benedict cumberbatch as sherlock holmes"});
    } else if (userType === "ENTP" && gender === "male") {
      $("div#yourDate").show();
      alert("male ENTP");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/catch22ENTP.jpg", "alt": "john yossarian in catch22"});
    }  else if (userType === "INFJ" && gender === "female") {
      $("div#yourDate").show();
      alert("female INFJ")
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/elizabethBennetPridePrejudiceINFJ.jpg", "alt": "keira knightly as elizabet bennet in pride and prejudice"});
    } else if (userType === "INTP" && gender === "female") {
      $("div#yourDate").show();
      alert("female INTP");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/aliceINTP.jpg", "alt": "Mia as Alice in Wonderland"});
    } else if (userType === "INTJ" && gender === "female") {
      $("div#yourDate").show();
      alert("female INTJ");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/lisbethINTJ.png", "alt": "dragon girl lisbeth"});
    } else if (userType === "ISTP" && gender === "female") {
      $("div#yourDate").show();
      alert("female ISTP");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/aryaISTP.jpeg", "alt": "arya stark"});
    } else if (userType === "ENTP" && gender === "female") {
      $("div#yourDate").show();
      alert("female ENTP");
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/riverSongENTP.jpg", "alt": "river song in dr who"});
    } else if (gender === "prince") {
        $("div#yourDate").show();
        $("img#imgDate").removeAttr("src alt");
        $("img#imgDate").attr({"src": "img/prince.jpeg", "alt": "beauty and the beast"});
    } else {
      $("div#yourDate").show();
      $("img#imgDate").removeAttr("src alt");
      $("img#imgDate").attr({"src": "img/princess.jpg", "alt": "beauty and the beast"});
    }

  });
});
