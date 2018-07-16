$(document).ready(function(){

    var articleContainer = $(".article-container");
    $(document).on("click", "btn-save", handleArticleSave);
    $(document).on("click", "scrape-new", handleArticleScrape);

    // use init page function once the page is ready
    initPage();

    function initPage () {
        // runs AJAX request
        articleContainer.empty();
        $.get("/api/headlines?saved=false")
    .then(function(data){
        if (data && data.length) {
            renderArticles(data);
        }
        else {
            renderEmpty();
        }
    });
    }

    function renderArticles(articles) {
        var articlePanels = [];
        // passes each article JSON object into the createPanel function to return bootstrap panel
        // with our article data inside
        for (var i = 0; i < articles.length; i++) {
            articlePanels.push(createPanel(articles[i]));
        }
        articleContainer.append(articlePanels);
    }

    function createPanel(article) {
        // constructs a jQuery element containing all of the formatted HTML for article panel
        var panel = 
        $([
            "<div class= 'panel panel-default'>",
            "<div class='panel-heading'>",
            "<h3>",
            article.headline,
            "<a class='btn btn-success save'>",
            "Save Article",
            "</a>",
            "</h3>",
            "</div>",
            "<div class='panel-body'>",
            article.summary,
            "</div>",
            "</div>"
        ].join(""));
        // attach article id to jQuery element
        panel.data("_id", article._id);
        return panel;
    }

    function renderEmpty () {
        var emptyAlert = 
        $([
            "<div class='alert alert-warning text-center'>",
            "<h4> Uh Oh! Looks like we don't have any new articles. </h4>",
            "</div>",
            "<div class='panel panel-default'>",
            "<div class='panel-heading-text-center'>",
            "<h3> What would you like to do?</h3>",
            "</div>",
            "<div class='panel-body-text-center'>",
            "<h4><a class='scrape-new'>Try Scraping New Articles</a></h4>",
            "<h4><a href='/saved'>Go to Saved Articles</a></h4>",
            "</div>",
            "</div>",

        ].join(""));

        //appends above data to the page
        articleContainer.append(emptyAlert);
    }

    function handleArticleSave() {
        var articleToSave = $(this).parents(".panel").data();
        articleToSave.saved = true;
        // use patch method since this is an update to an existing record in our collection
        $.ajax({
            method: "PATCH",
            url: "/api/headlines",
            data: articleToSave
        })
        // if successful it will run the initPage function again
        .then(function(data){
            if(data.ok) {
                initPage();
            }
        })
    }

    function handleArticleScrape(){
        $.get("/api/fetch")
        .then(function(data){
            initPage();
            bootbox.alert("<h3 class='text-center m-top-80'>" + data.message + "</h3>");
        });
    }

})
