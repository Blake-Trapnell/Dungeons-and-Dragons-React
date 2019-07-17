module.exports(assignClass, dexClasses, strClasses, wisClasses,chaClasses)
function dexClasses() {
    let rando = Math.random();
    if (this.state.stats.wis > 10 && this.state.highestStat === `dex`) {
        if (rando > .5) {
            this.setState({
                ddClass: `monk`
            })
        }
        else {
            this.setState({
                ddClass: `ranger`
            })
        }
    }
    else {
        this.setState({
            ddClass: `rogue`
        })
    }
}

function strClasses() {
    let rando = Math.random();
    if (rando < .333) {
        this.setState({
            ddClass: `barbarian`
        })
    }
    else if (rando < .666) {
        this.setState({
            ddClass: `fighter`
        })
    }
    else {
        this.setState({
            ddClass: `paladin`
        })
    }
}

function wisClasses() {
    let rando = Math.random();
    if (rando < .5){
        this.setState({
            ddClass: `cleric`
        })
    }
    else {
        this.setState({
            ddClass:`druid`
        })
    }
}

function chaClasses() {
    let rando = Math.random();
    if(rando < .333) {
        this.setState({
            ddClass: `bard`
        })
    }
    else if (rando < .666) {
        this.setState({
            ddClass: `sorcerer`
        })
    }
    else {
        this.setState({
            ddClass: `warlock`
        })
    }
}

function assignClass() {
    if (this.state.highestStat === `dex`) {
        dexClasses()}
        else if (this.state.highestStat === `str`) {
            strClasses()}
        else if (this.state.highestStat === `wis`) {
                wisClasses()}
        else if (this.state.highestStat === `cha`){
                    chaClasses()}
      else {
          this.setState({ddClass: `wizard`})
}