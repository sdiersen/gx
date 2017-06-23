
mondayTab = document.getElementById("monTab");
tuesdayTab = document.getElementById("tueTab");
wednesdayTab = document.getElementById("wedTab");
thursdayTab = document.getElementById("thuTab");
fridayTab = document.getElementById("friTab");
saturdayTab = document.getElementById("satTab");
sundayTab = document.getElementById("sunTab");



(hideDays = function hideDays() {
    $('.colMon').addClass("hidden");
    $('.colTue').addClass("hidden");
    $('.colWed').addClass("hidden");
    $('.colThu').addClass("hidden");
    $('.colFri').addClass("hidden");
    $('.colSat').addClass("hidden");
    $('.colSun').addClass("hidden");
})();

(removeActive = function removeActive() {
    $('#monTab').removeClass("activeTab");
    $('#tueTab').removeClass("activeTab");
    $('#wedTab').removeClass("activeTab");
    $('#thuTab').removeClass("activeTab");
    $('#friTab').removeClass("activeTab");
    $('#satTab').removeClass("activeTab");
    $('#sunTab').removeClass("activeTab");
})();



function toggleDay(tab, col) {
    if (tab.hasClass("activeTab")) {
        tab.removeClass("activeTab");
        col.addClass("hidden");
    } else {
        tab.addClass("activeTab");
        col.removeClass("hidden");
    }
}

(resetSchedule = function resetSchedule() {
    hideDays;
    removeActive;
    currentDate = new Date();
    dayOfWeek = currentDate.getDay();
    switch(dayOfWeek) {
        case 0:
            toggleDay($('#sunTab'), $('.colSun'));
            break;
        case 1:
            toggleDay($('#monTab'), $('.colMon'));
            break;
        case 2:
            toggleDay($('#tueTab'), $('.colTue'));
            break;
        case 3:
            toggleDay($('#wedTab'), $('.colWed'));
            break;
        case 4:
            toggleDay($('#thuTab'), $('.colthu'));
            break;
        case 5:
            toggleDay($('#friTab'), $('.colFri'));
            break;
        case 6:
            toggleDay($('#satTab'), $('.colSat'));
            break;
        default:
            break;
    }

})();

resetSchedule;

mondayTab.addEventListener('click', function() {
    toggleDay($(this), $('.colMon'));
});

tuesdayTab.addEventListener('click', function() {
    toggleDay($(this), $('.colTue'));
});

wednesdayTab.addEventListener('click', function() {
    toggleDay($(this), $('.colWed'));
});

thursdayTab.addEventListener('click', function() {
    toggleDay($(this), $('.colThu'));
});

fridayTab.addEventListener('click', function() {
    toggleDay($(this), $('.colFri'));
});

saturdayTab.addEventListener('click', function() {
    toggleDay($(this), $('.colSat'));
});

sundayTab.addEventListener('click', function() {
    toggleDay($(this), $('.colSun'));
});