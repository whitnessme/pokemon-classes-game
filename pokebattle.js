
class PokeBattle {
    constructor(initiator, type, environment, opponent) {
        this.initiator = initiator;
        this.type = type;
        this.environment = environment;
        this.opponent = opponent
        this.turns = 0;
        this.fighter = this.initiator.team[0];
        this.progress = "in progress";
    }

    // this.fighter.name ; this.opponent
}

module.exports = PokeBattle;