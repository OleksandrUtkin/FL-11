class Fighter {
	constructor (obj){
		this.getName = () => obj.name
		this.getDamage = () => obj.damage
		this.getHealth = () => obj.hp
		this.getAgility = () => obj.agility
		this.heal = HpPoints => {
			let health = this.getHealth();
			obj.hp += HpPoints;
			if (obj.hp > health) {
				obj.hp = health;
			}
		}
		this.Wins = 0	
		this.Losses = 0 
		this.dealDamage = damage => {
			obj.hp -= damage
			if (obj.hp < 0) {
				obj.hp = 0
			}
		}
		this.addWin = () => ++this.Wins
		this.addLoss = () => ++this.Losses
	}
	attack(fighter) {
		if (Math.random()*100 < 100 - fighter.getAgility()) {
			fighter.dealDamage(this.getDamage())
			console.log( `${this.getName()} make ${this.getDamage()} damage to ${fighter.getName()}. 
${fighter.getName()} hp: ${fighter.getHealth()} ` );
		} else {
			console.log(`${fighter.getName()} attack missed`)
		}
	}
	logCombatHistory() {
		console.log(`Name: ${this.getName()}, Wins: ${this.Wins}, Losses: ${this.Losses}`)
	}
}
function battle (fighter1, fighter2) {
	while (fighter1.getHealth() > 0 || fighter2.getHealth() > 0) {
		if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
			fighter1.attack(fighter2)
		} 
		if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
			fighter2.attack(fighter1)
		}
		if (fighter1.getHealth() <= 0) {
			fighter2.addWin()
			fighter1.addLoss()
			console.log(`${fighter2.getName()} win. ${fighter1.getName()} is dead. `)
			break
		} else if (fighter2.getHealth() <= 0) {
			fighter1.addWin()
			fighter2.addLoss()
			console.log(`${fighter1.getName()} win. ${fighter2.getName()} is dead. `)
			break
		}
	}
}
const BruceLee = new Fighter({name: 'BruceLee', damage: 40, hp: 100, agility: 25}); // returns an object with methods
const ChuckNorris = new Fighter({name: 'ChuckNorris', damage: 30, hp: 100, agility: 50});
battle(BruceLee, ChuckNorris)