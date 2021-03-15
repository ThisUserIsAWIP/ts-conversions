"use strict";
var dieID = 0;
var dieCorral = [];
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        dieID++;
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div = $("<div class=\"die\" id=\"" + dieID + "\"></div>");
        this.create();
        this.div.click(function () {
            _this.reroll();
            // this.value = Math.floor((Math.random() * 6) + 1);
            // $(this.div).text(this.value)
        });
        this.div.dblclick(function () {
            _this.destroy();
        });
        dieCorral.push(this);
    }
    Die.prototype.destroy = function () {
        $(this.div).remove();
        var thisDieIndex = dieCorral.indexOf(this);
        dieCorral.splice(thisDieIndex, 1);
    };
    Die.prototype.create = function () {
        $(this.div).text(this.value);
        $('#dieContainer').append(this.div);
    };
    Die.prototype.reroll = function () {
        this.value = Math.floor((Math.random() * 6) + 1);
        $(this.div).text(this.value);
    };
    return Die;
}());
$('#addDie').click(function () { return new Die(); });
$('#rollDie').click(function () {
    dieCorral.forEach(function (die) { return die.reroll(); });
});
$('#addButton').click(function () {
    var sum = 0;
    dieCorral.forEach(function (die) { return sum += die.value; });
    alert(sum);
});
