$(document).ready(function () {
  // =====================================
  // 1. Effects
  // =====================================

  $("#hideBtn").on("click", function () {
    $("#demo").hide(1000);
  });

  $("#showBtn").on("click", function () {
    $("#demo").show(1000);
  });

  $("#toggleBtn").on("click", function () {
    $("#demo").toggle(1000);
  });

  $("#slideUpBtn").on("click", function () {
    $("#demo").slideUp(1000);
  });

  $("#slideDownBtn").on("click", function () {
    $("#demo").slideDown(1000);
  });

  $("#slideToggleBtn").on("click", function () {
    $("#demo").slideToggle(1000);
  });

  $("#fadeOutBtn").on("click", function () {
    $("#demo").fadeOut(1000);
  });

  $("#fadeInBtn").on("click", function () {
    $("#demo").fadeIn(1000);
  });

  $("#fadeToggleBtn").on("click", function () {
    $("#demo").fadeToggle(1000);
  });

  $("#fadeToBtn").on("click", function () {
    $("#demo").fadeTo(1000, 0.3);
  });

  // =====================================
  // 2. Animate and Stop
  // =====================================

  $("#animateBtn").on("click", function () {
    $("#demo").animate(
      {
        width: "400px",
        marginTop: "20px",
      },
      1000,
    );
  });

  $("#sequenceBtn").on("click", function () {
    $("#test").animate(
      {
        width: "400px",
      },
      3000,
      function () {
        $("#demo").animate(
          {
            height: "300px",
          },
          1000,
        );
      },
    );
  });

  $("#stopBtn").on("click", function () {
    $("#demo").stop();
    $("#test").stop();
  });

  $("#resetBtn").on("click", function () {
    $("#demo, #test").stop(true, true).removeAttr("style");

    $("#demo").css({
      display: "block",
      width: "200px",
      height: "100px",
      margin: "10px 0",
      opacity: 1,
    });

    $("#test").css({
      display: "block",
      width: "200px",
      height: "100px",
      margin: "10px 0",
      opacity: 1,
    });
  });

  // =====================================
  // 3. HTML, Text and Value
  // =====================================

  $("#getHtmlBtn").on("click", function () {
    console.log($("#contentTitle").html());
  });
  $("#getTextBtn").on("click", function () {
    console.log($("#contentTitle").text());
  });

  $("#setHtmlBtn").on("click", function () {
    $("#contentTitle").html(`fuck <span>World</span>`);
  });

  $("#setTextBtn").on("click", function () {
    $("#contentTitle").text("Hello <span>World</span>");
  });

  $("#getValBtn").on("click", function () {
    console.log($("#myInput").val());
  });

  $("#setValBtn").on("click", function () {
    $("#myInput").val("youssef");
  });

  // =====================================
  // 4. DOM Manipulation
  // =====================================

  $("#appendBtn").on("click", function () {
    $("#contentBox").append("<p>Appended paragraph</p>");
  });

  $("#prependBtn").on("click", function () {
    $("#contentBox").prepend("<p>Prepended paragraph</p>");
  });

  $("#beforeBtn").on("click", function () {
    $("#contentBox").before("<p>Before the box</p>");
  });

  $("#afterBtn").on("click", function () {
    $("#contentBox").after("<p>After the box</p>");
  });

  $("#emptyBtn").on("click", function () {
    $("#contentBox").empty();
  });

  $("#removeBtn").on("click", function () {
    $("#contentBox").remove();
  });

  $("#restoreBtn").on("click", function () {
    if ($("#contentBox").length === 0) {
      $("section")
        .eq(3)
        .append(
          '<div id="contentBox"><p>Original content inside the box.</p></div>',
        );
    } else {
      $("#contentBox").html("<p>Original content inside the box.</p>").show();
    }
  });

  // =====================================
  // 5. Attributes and Gallery
  // =====================================

  // $(".gallery img").on("click", function (e) {
  //   const clickedSrc = $(e.target).attr("src");
  //   const clickedAlt = $(e.target).attr("alt");

  //   $("#mainImg")
  //     .attr("src", clickedSrc)
  //     .attr("alt", clickedAlt);
  // });

  // $("#changeAttrBtn").on("click", function () {
  //   $(".gallery img")
  //     .attr("title", "Click to view image")
  //     .attr("alt", "Gallery image");
  // });

  $(".gallery img").on("click", function (e) {
    let checkedSrc = $(e.target).attr("src");
    let checkedAlt = $(e.target).attr("alt");

    $("#mainImg").attr("src", checkedSrc).attr("alt", checkedAlt);
  });

  // =====================================
  // 6. CSS and Classes
  // =====================================

  $("#readCssBtn").on("click", function () {
    console.log($("#styleTitle").css("color"));
  });
  

  $("#changeCssBtn").on("click", function () {
    $("#styleTitle").css({
      color: "white",
      backgroundColor: "red",
      marginTop: "20px",
      padding: "10px",
    });
  });
 
  $("#addClassBtn").on("click", function () {
    $("#styleTitle").addClass("highlight text-center");
  });

  $("#removeClassBtn").on("click", function () {
    $("#styleTitle").removeClass("highlight");
  });

  $("#toggleClassBtn").on("click", function () {
    $("#styleTitle").toggleClass("text-center");
  });

  $("#hasClassBtn").on("click", function () {
    console.log($("#styleTitle").hasClass("highlight"));
  });

  // =====================================
  // 7. Dimensions and Scroll
  // =====================================

  $("#dimensionsBtn").on("click", function () {
    console.log("width:", $("#dimensionBox").width());
    console.log("innerWidth:", $("#dimensionBox").innerWidth());
    console.log("outerWidth:", $("#dimensionBox").outerWidth());
    console.log("outerWidth(true):", $("#dimensionBox").outerWidth(true));
  });

  $("#offsetBtn").on("click", function () {
    const coords = $("#dimensionBox").offset();

    console.log("top:", coords.top);
    console.log("left:", coords.left);
  });

  $(window).on("scroll", function () {
    console.log("Scroll:", $(window).scrollTop());
  });

  $("#scrollBtn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 500,
      },
      500,
    );
  });

  // =====================================
  // 8. DOM Traversing
  // =====================================

  // const target = $("#traversalDemo");

  // $("#nextBtn").on("click", function () {
  //   target.next().css("borderColor", "red");
  // });

  // $("#nextAllBtn").on("click", function () {
  //   target.nextAll().css("borderColor", "red");
  // });

  // $("#nextUntilBtn").on("click", function () {
  //   target.nextUntil("a").css("borderColor", "red");
  // });


  const target = $("#traversalDemo");

  $("#nextBtn").on("click", function () {
    target.next().css("borderColor","red")
  });
  $("#nextAllBtn").on("click", function () {
    target.nextAll().css("borderColor","red")
  });
  $("#nextUntilBtn").on("click", function () {
    target.nextUntil("a").css("borderColor","red")
  });

  $("#prevBtn").on("click", function () {
    target.prev().css("borderColor", "red");
  });

  $("#prevAllBtn").on("click", function () {
    target.prevAll().css("borderColor", "red");
  });

  $("#siblingsBtn").on("click", function () {
    target.siblings().css("borderColor", "red");
  });

  $("#parentBtn").on("click", function () {
    target.parent().css("borderColor", "blue");
  });

  $("#parentsBtn").on("click", function () {
    target.parents().css("borderColor", "green");
  });

  $("#childrenBtn").on("click", function () {
    $("#traversalTitle").children().css("borderColor", "orange");
  });




  $("#findBtn").on("click", function () {
    $("#parentSection").find("span").css("borderColor", "red");
  });

  $("#firstBtn").on("click", function () {
    $("#traversalTitle").children().first().css("borderColor", "red");
  });

  $("#lastBtn").on("click", function () {
    $("#traversalTitle").children().last().css("borderColor", "red");
  });

  $("#eqBtn").on("click", function () {
    $("#traversalTitle").children().eq(3).css("borderColor", "red");
  });

  $("#notBtn").on("click", function () {
    $("#traversalTitle")
      .find("span")
      .not(".text-danger")
      .css("borderColor", "red");
  });

  $("#resetTraversalBtn").on("click", function () {
    $(".traversal-demo span, .traversal-demo a").css("borderColor", "gray");
  });
});
