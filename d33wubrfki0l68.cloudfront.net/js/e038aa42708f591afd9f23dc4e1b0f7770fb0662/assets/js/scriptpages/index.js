let typed = new Typed('#description-typed', {
    strings: ["a problem solver.","a student."],
    typeSpeed: 30,
    loop: true,
    cursorChar: "█",
    backDelay: 1500
});
function toggleCsod() {
    if($(".code-collapsed").hasClass("expanded")) {
        $(".toggle-button").html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    } else {
        $(".toggle-button").html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
    }
    $(".code-collapsed").toggleClass("expanded");
}



