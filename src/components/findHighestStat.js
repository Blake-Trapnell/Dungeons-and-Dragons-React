module.exports(findHeighestStat)

function findHeighestStat() {
    if (this.state.stats.dex > this.state.stats.str && this.state.stats.dex > this.state.stats.wis && this.state.stats.dex > this.state.stats.int && this.state.stats.dex > this.state.stats.cha) {
        this.setState({
            highestStat: `dex`,
            hSN: this.state.stats.dex
        })
    }
    else if (this.state.stats.str > this.state.stats.wis && this.state.stats.str > this.state.stats.int && this.state.stats.str > this.state.stats.cha) {
        this.setState({
            highestStat: `str`,
            hSN: this.state.stats.str
        })
    }
    else if (this.state.stats.wis > this.state.stats.int && this.state.stats.wis > this.state.stats.cha) {
        this.setState({
            highestStat: `wis`,
            hSN: this.state.stats.wis
        })
    }
    else if (this.state.stats.int > this.state.stats.cha) {
        this.setState({
            highestStat: `int`,
            hSN: this.state.stats.int
        })
    }
    else {
        this.setState({
            highestStat: `int`,
            hSN: this.state.stats.int
        })
    }
}
