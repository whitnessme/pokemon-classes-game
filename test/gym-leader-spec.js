const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const Pokemon = require("../pokemon");

const { fileContainsClass } = require("./helpers");

const phaseModulePath = "../gymleader.js";
const GymLeader = require(phaseModulePath);

const filePath = path.resolve(__dirname, phaseModulePath);
const fileContainsClassResult = fileContainsClass(filePath, "GymLeader");

describe("The GymLeader module file", () => {
    it("does not export null or undefined", () => {
      expect(GymLeader).to.not.be.null;
      expect(GymLeader).to.not.deep.equal(undefined);
    });
  
    if (GymLeader !== null) {
      it("and references the `GymLeader` class", () => {
        expect(fileContainsClassResult).to.be.true;
      });
    }
  });

  describe("GymLeader class", () => {
    it("should not be null", () => {
      expect(GymLeader).to.not.be.null;
      expect(GymLeader).to.not.deep.equal({});
    });
  
    it("should be a class", () => {
      expect(fileContainsClassResult).to.be.true;
    });
  
    it("is a child of the `Trainer` parent class", () => {
      const Trainer = require("../trainer");
      expect(new GymLeader()).to.be.an.instanceOf(Trainer);
    });
  
    it("has an instance method named `getTeamNames()`", () => {
      expect(GymLeader.prototype.getTeamNames).to.not.be
        .undefined;
      expect(GymLeader.prototype.getTeamNames).to.be.an(
        "Function"
      );
    });
  
    // it("has an instance method named <?>`", () => {
    //   expect(GymLeader.prototype.<?>).to.not.be.undefined;
    //   expect(GymLeader.prototype.<?>).to.be.an("Function");
    // });
  
    if (GymLeader !== null && fileContainsClassResult) {
      describe("constructor()", () => {
        const staryu = new Pokemon(
            "Staryu",
            "Water",
            120,
            18,
            "Female"
        )
        const starmie = new Pokemon(
            "Starmie",
            "Water",
            121,
            21,
            "Male"
        )
        const instance = new GymLeader(
          "Misty",
          20,
          "Cerulean Gym",
          "Water",
          {"first": staryu, "second": starmie}
        );
  
        it("initializes the `name` property from the provided argument value", () => {
          expect(instance.name).to.equal("Misty");
        });
  
        it("initializes the `age` property from the provided argument value", () => {
          expect(instance.age).to.equal(20);
        });
  
        it("initializes the `inventory` property from the provided argument value", () => {
          expect(instance.inventory.hyperPotion).to.equal(2);
          expect(instance.inventory.pokeball).to.equal(undefined);
          expect(Object.keys(instance.inventory).length).to.equal(1);
        });
  
        it("initializes the `badges` property from the provided argument value", () => {
          expect(Object.values(instance.badges).length).to.equal(0);
        });
      });
    }
  
    describe("getTeamNames()", () => {
  
      beforeEach(() => {
        sinon.stub(console, "log");
      });
  
      afterEach(() => {
        console.log.restore();
      });
  
      it("logs expected message with type", () => {        

        const instance = new GymLeader(
          "Misty",
          20,
          "Cerulean Gym",
          "Water",
          {}
        );

        const instance2 = new GymLeader(
          "Brock",
          20,
          "Pewter City",
          "Rock",
          {}
        );
  
        instance.getTeamNames();
        instance2.getTeamNames();
  
        expect(console.log.calledTwice).to.be.true;
        expect(
          console.log.calledWith("Wouldn't you like to know? I'll give you a hint, they're all Water type!")
        ).to.be.true;      
        expect(
          console.log.calledWith("Wouldn't you like to know? I'll give you a hint, they're all Rock type!")
        ).to.be.true;      
      });
    });
  });

// Credit goes to Brad Simpson for originally making the Dragons practice with specs. I borrowed it to make extra practice :) 