// init Isotope
var initial_items = 6;
var next_items = 3;
var $grid = $('#grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    stamp: '.element-item--static'
});


// bind filter button click
$('.button-group-home').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    $grid.isotope({filter: filterValue});
    $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        transitionDuration: "0.8s",
      });
    updateFilterCounts();
});
function updateFilterCounts() {
    // get filtered item elements
    var itemElems = $grid.isotope('getFilteredItemElements');
    var count_items = $(itemElems).length;
   
    if (count_items > initial_items) {
        $('#showMore').show();
    }
    else {
        $('#showMore').hide();
    }
    if ($('.element-item').hasClass('visible_item')) {
        $('.element-item').removeClass('visible_item');
    }
    var index = 0;

    $(itemElems).each(function () {
        if (index >= initial_items) {
            $(this).addClass('visible_item');
        }
        index++;
    });
    $grid.isotope('layout');
}
// change is-checked class on buttons
$('.button-group-home').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

function showNextItems(pagination) {
    var itemsMax = $('.visible_item').length;
    var itemsCount = 0;
    $('.visible_item').each(function () {
        if (itemsCount < pagination) {
            $(this).removeClass('visible_item');
            itemsCount++;
            $('html,body').animate({
                scrollTop: $(this).offset().top
                +0 }, 100);
        }
    });
    if (itemsCount >= itemsMax) {
        $('#showMore').hide();
    }
    $grid.isotope('layout');
}


// function that hides items when page is loaded
function hideItems(pagination) {
    var itemsMax = $('.element-item').length;
    var itemsCount = 0;
    $('.element-item').each(function () {
        if (itemsCount >= pagination) {
            $(this).addClass('visible_item');
        }
        itemsCount++;
    });
    if (itemsCount < itemsMax || initial_items >= itemsMax) {
        $('#showMore').hide();
    }
    $grid.isotope('layout');
}
$('#showMore').on('click', function (e) {
    e.preventDefault();
    showNextItems(next_items);
});
hideItems(initial_items);

const theButton = document.querySelector(".button0");
var delayInMilliseconds = 800; //x second


  theButton.addEventListener("click", () => {
      theButton.classList.add("button--loading"); 
setTimeout(function() {
  //your code to be executed after x second  
    theButton.classList.remove("button--loading");
}, delayInMilliseconds);
});
