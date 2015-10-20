//
//
//
//
//  Remove items in workbench on clicking "x"
$(document).on("click", ".sortable-remove", function() {
    $(this).parent('.sortable').remove();
});
//  Remove all items in workbench on clicking "clear all"
$(".sortable-remove-all").on("click", function() {
    $(this).parent().next('.sortable-workbench').empty();
});
//
//
//
//
//  Toggle active state in "Associated States"
$(".active-toggle .btn").on("click", function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
    } else {
        $(this).addClass("active");
    }
});
//  Remove active statess in "associated stated" when clicking "clear"
$(".sortable-remove-all").on("click", function() {
    $(this).parent().parent().next('.btn-grid').children().removeClass("active");
});
//  Enable all active statess in "associated stated" when clicking "Select all"
$(".sortable-select-all").on("click", function() {
    $(this).parent().parent().next('.btn-grid').children().addClass("active");
});
//
//
//
//
//  Step through accordions
$("[data-toggle='step__next']").on("click", function() {
    $(this).closest(".panel-collapse").collapse('hide');
    $(this).closest(".panel.panel-default").next(".panel").children(".panel-collapse").collapse('show');
});
$("[data-toggle='step__prev']").on("click", function() {
    $(this).closest(".panel-collapse").collapse('hide');
    $(this).closest(".panel.panel-default").prev(".panel").children(".panel-collapse").collapse('show');
});
$("[data-toggle='step__done']").on("click", function() {
    $(this).closest(".panel-collapse").collapse('hide');
});
//
//
//
//
//  Change Text
$("[data-change='text']").on("input", function() {
    updateText($(this));
});
//  Change Sizes
$("[data-change='size']").on("change", function() {
    updateSize($(this));
});
//  Change Style
$("[data-change='style']").on("change", function() {
    updateStyle($(this));
});
//
//
//
//
//  Update Workbench on Modal Load
$(".modal").on('show.bs.modal', function(e) {
    //  config
    var this__type = $(this).attr("id");
    var this__type = "#" + this__type.replace("_modal", '');
    //  update workbench text
    var this__title = $(this__type + "_text").val();
    $(".sortable-workbench " + this__type + " .sortable-text").text(this__title);
    //  update workbench style
    var this__style = $(this__type + "_preview").attr("class");
    $(".sortable-workbench " + this__type + " .sortable-text").addClass(this__style);
});
//  Update Text
function updateText(el) {
    //  config
    var this__type = getType(el);
    var this__title = el.val();
    //  update preview
    $(this__type + "_preview").text(this__title);
    //  update workbench
    $(".sortable-workbench " + this__type + " .sortable-text").text(this__title);
}
//  Update Size
function updateSize(el) {
    //  config
    var this__type = getType(el);
    var this__size = el.val();
    //  update preview
    $(this__type + "_preview").attr("data-size", this__size);
}
//  Update Style
function updateStyle(el) {
    //  config
    var this__type = el.attr("data-parent");
    var this__style = el.attr("id");
    var this__style = this__style.replace(this__type + "_", '');
    var this__type = "#" + this__type;
    //  if checked, update preview and workbench
    if (el.prop("checked")) {
        $(this__type + "_preview").addClass("is-" + this__style);
        $(".sortable-workbench " + this__type + " .sortable-text").addClass("is-" + this__style);
    } else {
        $(this__type + "_preview").removeClass("is-" + this__style);
        $(".sortable-workbench " + this__type + " .sortable-text").removeClass("is-" + this__style);
    };
}
//  Gets config data for this element
function getType(el) {
    var this__attr = "_" + $(el).attr("data-change");
    var this__type = $(el).attr("id");
    var this__type = "#" + this__type.replace(this__attr,'');
    return this__type;
}
