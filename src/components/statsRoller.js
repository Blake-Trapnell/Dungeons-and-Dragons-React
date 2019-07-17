module.exports = {
    statsRoller: statsRoller
}

function statsRoller () {
  let {stats} = this.state
    //Loop 21 times
    for (let i =0; i < 21; i++) {
        //create random #
        let rando = Math.random() * 60
        rando = Math.ceil(rando)
        //add one to stats based on random #
        if (rando < 10 && stats.dex < 16) { 
            let newStats = stats
            newStats.dex++
            this.setState({
                stats: newStats
            })
        }
        else if (rando < 20 && stats.con < 16) {
            let newStats = stats
            newStats.con++
            this.setState({
                stats: newStats
            })
        }
        else if (rando < 30 && stats.str < 16) {
            
            let newStats = stats
            newStats.str++
            this.setState({
                stats: newStats
            })
        }
        else if (rando < 40 && stats.wis < 16) {
            let newStats = stats
            newStats.wis++
            this.setState({
                stats: newStats
            })
        }
        else if (rando < 50 && stats.int < 16) {
            let newStats = stats
            newStats.int++
            this.setState({
                stats: newStats
            })
        }
        else if (rando < 60 && stats.cha < 16) {
            let newStats = stats
            newStats.cha++
            this.setState({
                stats: newStats
            })
        }
    }
}

  