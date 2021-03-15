let dieID = 0;
let dieCorral: any[] = []
class Die {
    value: number;
    div: any;
    constructor() {
        dieID++
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div = $(`<div class="die" id="${dieID}"></div>`)
        this.create()
        this.div.click(() => {
            this.reroll()
            // this.value = Math.floor((Math.random() * 6) + 1);
            // $(this.div).text(this.value)
        })
        this.div.dblclick(() => {
            this.destroy()

        })
        dieCorral.push(this)
    }
    destroy() {
        $(this.div).remove()
        let thisDieIndex = dieCorral.indexOf(this)
        dieCorral.splice(thisDieIndex,1)
    }
    create() {
        $(this.div).text(this.value)
        $('#dieContainer').append(this.div)
    }
    reroll() {
        this.value = Math.floor((Math.random() * 6) + 1);
        $(this.div).text(this.value)
    }
}
$('#addDie').click(() => new Die())
$('#rollDie').click(() => {
    dieCorral.forEach(die => die.reroll()) 
})
$('#addButton').click(()=>{
    let sum = 0;
    dieCorral.forEach(die => sum += die.value)
    alert(sum);
})