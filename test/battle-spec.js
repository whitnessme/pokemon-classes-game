const { expect } = require('chai');
const sinon = require("sinon");
const PokeBattle = require("../pokebattle.js");
const Pokemon = require("../pokemon.js");
const Trainer = require("../trainer.js");


describe ('PokeBattle', () => {

  let battle;
  let trainer;
  let poke1;
  let poke2;

  beforeEach(() => {
    // Create two pokemon and a battle before each test
    trainer = new Trainer("Whit", 29)
    poke1 = new Pokemon("Absol", "Dark", Infinity, 99, "male");
    poke2 = new Pokémon("Typhlosion", "Fire", 157, 66, "Male");
    // Need to make addToTeam instance method on Trainer to make these test specs work
    trainer.addToTeam(poke1, poke2)
    battle = new PokeBattle(trainer, "Encounter", "Grasslands", "Wild Pidgey");
  });

  describe("PokeBattle should be a class that...", () => {
    it('should set a `initiator` attribute on creation', () => {
      expect(battle.initiator).to.equal(trainer);
    });
    it('should set a `type` attribute on creation', () => {
      expect(battle.type).to.equal("Encounter");
    });
    it('should set a favorite `environment` attribute on creation', () => {
      expect(battle.environment).to.equal("Grasslands")
    });
    it('should set a `opponent` attribute on creation', () => {
      expect(battle.opponent).to.equal("Wild Pidgey")
    });
    it('should set a `turns` attribute on creation with a default value of 0', () => {
      expect(battle.turns).to.equal(0)
    });
    it("should set a `fighter` attribute on creation with a default value of the first pokemon on the trainer's team.", () => {
      expect(battle.fighter).to.equal(poke1)
    });
    it("should set a `progress` attribute on creation with a default value of 'in progress'.", () => {
      expect(battle.progress).to.equal("in progress")
    });
  });

  describe("PokeBattle should have a `fight` method", () => {
    it("that returns a string about the trainer's first pokemon hitting the opponent", () => {
      let result = battle.fight();
      expect(result).to.equal("Absol hit Wild Pidgey.");
    });
    it("should increment the turn counter by 1", () => {
      expect(battle.turns).to.equal(1);
    });
  });

  describe("PokeBattle should have a `switchPokemon` method", () => {
    it("that accepts a Pokemon's name to switch the `fighter` attribute to" , () => {
      battle.switchPokemon("Typhlosion")
      expect(battle.fighter).to.equal(poke2);
    });
    it("should increment the turn counter by 1", () => {
      expect(battle.turns).to.equal(1);
    });
  });

  describe("PokeBattle should have a `run` method", () => {
    it("that will change the `progress` attribute when applicable", () => {
      battle.run()
      expect(battle.progress).to.equal("complete");
      let battle2 = new PokeBattle(trainer, "Trainer", "Water", "Misty");
      expect(battle2.progress).to.equal("in progress")
      
    });
    it("should increment the turn counter by 1", () => {
      battle.run()
      expect(battle.turns).to.equal(1);
      battle.run()
      expect(battle.turns).to.equal(2);
    });
    
    beforeEach(() => {
      sinon.stub(console, "log");
    });
    afterEach(() => {
      console.log.restore();
    });

    it('and logs to the console correctly when `type` is "Encounter"', () => {
      battle.run()
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith("You got away safely!")).to.be
        .true;
    });
    it('and logs to the console correctly when `type` is "Trainer"', () => {
      let battle2 = new PokeBattle(trainer, "Trainer", "Water", "Misty");
      battle2.run()
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith("No! There's no running from a Trainer battle!")).to.be
        .true;
    });
  });
  
});