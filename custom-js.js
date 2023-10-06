 $(document).ready(function () {
            // Open the first section by default
            $(".content:first").show();

            $(".collapsible").click(function () {
                $(this).next(".content").slideToggle();
            });
});