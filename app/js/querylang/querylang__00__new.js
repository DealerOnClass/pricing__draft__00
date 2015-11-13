//  1.) Primary Click for Action Type [data-action="workbench"] etc. and type [
$("[data-action-type]").on("click", function() {
    var action__type = $(this).attr("data-action-type");
    if ( $("#query__creation__workbench .sortable-lock").length != 0 ) {
        $("#query__creation__workbench .sortable-lock").remove();
    } else {
        $("#query__creation__workbench").children().prepend("<a onclick='PrepareTo" + action__type + "Tag(this);' class='btn btn-default sortable-lock top'><i class='fa fa-circle-o'></i></a>");
    }
});

//  2.) Icon Toggle
function PrepareToLockTag(elem) {
    var icon = $(elem).children(".fa");
    if ( icon.hasClass("fa-circle-o") ) {
        icon.removeClass("fa-circle-o").addClass("fa-circle");
    } else {
        icon.removeClass("fa-circle").addClass("fa-circle-o");
    }

    CountLocked();
};


