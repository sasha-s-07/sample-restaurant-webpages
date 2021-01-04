$(document).ready(function(){


  /***************build the footer***********************************************/

  //declare variables
  var footer= $("<footer></footer>");
  var links=[["gift_card"],["site_map"],["contact_us"], ["events"]];
  var arrLinks;

  // build the links section of the footer;
  var sectionLinks= $("<section></section>");
  var sectionLinksContainer=$("<div></div>").addClass("page-container");
  var sectionHeader=$("<h2></h2>").text("important links").addClass("hide");
  sectionLinks.append(sectionHeader);
  for(arrLinks of links){
    var list= $("<ul></ul>");
    for(var k=0; k<arrLinks.length;k++){
      var arrTextLink=arrLinks[k].split("_");
      var linktext="";
      for(var j=0; j<arrTextLink.length;j++){
        linktext+=arrTextLink[j]+" ";
      }
      var link=$("<a></a>").text(linktext).attr("href",arrLinks[k]+".html");
      console.log(link);
      var listElt=$("<li></li>").append(link);
      list.append(listElt);
    }
    sectionLinksContainer.append($("<div></div>").html(list));    
  }
  // add the section to the footer
  sectionLinks.append(sectionLinksContainer);
  footer.html(sectionLinks);
  // add the copyright to the footer
  footer.append($("<div></div>").html(" &copy; Copyright pizzarium, 2020.").attr("id", "copyright"));
  
  // add the footer to the page's body
  $("body").append(footer);
});

