(function(){
    renderMathInElement(
        document.body,
        {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "\\[", right: "\\]", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\(", right: "\\)", display: false}
            ]
        }
    );

    $("#mobile-nav-button").click(function() {
        const btnRef = $("#mobile-nav-button");
        btnRef.toggleClass("expanded");
        if(btnRef.hasClass("expanded")) {
            btnRef.html('<i class="fas fa-chevron-circle-up"></i> Tabs')
        } else {
            btnRef.html('<i class="fas fa-chevron-circle-down"></i> Tabs')
        }
        $(".navbar").toggleClass("expanded");
    })
})();
;
