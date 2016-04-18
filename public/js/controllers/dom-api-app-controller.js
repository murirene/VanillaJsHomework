/* Assignment 2 - DOM API  */
define(["domHelper"], function (domHelper) {
    "use strict";

    function initialize() {
        this.original=$("#editableContent").html();
    }

    function changeToBlockQuotes() {
        var editables = document.querySelectorAll("div p");
        for (var i = 0; i <  editables.length; i++) {
            if(editables[i].isContentEditable) {
                var newBlockQuote = document.createElement("blockquote");
                var cn = editables[i].childNodes;
                var index;
                for (index in cn){
                    var v = cn[index];
                    newBlockQuote.appendChild(document.createTextNode(cn[index].textContent));
                }
                editables[i].parentNode.replaceChild(newBlockQuote, editables[i]);
            }
        }
    }

    function handleBlockQuoteRequest() {
        if(domHelper.getDomApiBtnAttribValue("state") == "ready") {
            changeToBlockQuotes();
            domHelper.setDomApiBtnText("Reset");
            domHelper.updateDomApiBtnAttrib("state", "result");
        } else {
            domHelper.setDomApiBtnText("Convert Paragraph");
            domHelper.updateDomApiBtnAttrib("state", "ready");
            $("#editableContent").html(this.original)
        }
    }

    function showAssignment2(){
        domHelper.showAssignment2();
    }

    return {
        initialize: initialize,
        handleBlockQuoteRequest: handleBlockQuoteRequest,
        showAssignment2: showAssignment2
    };
});

