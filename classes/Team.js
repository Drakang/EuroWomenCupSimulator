export class Team {
  constructor(name = "unnamed") {
    this.name = name
    this.points = 0
    this.goals = 0
    this.goalsAgainst = 0
    this.goalsDiff = 0
  }

  getName() {
    return this.name
  }

  //número aleatorio de goles
  play() {
    const goals = Math.floor(Math.random() * 10)
    return goals
  }

  //goles a favor y en contra a cada equipo
  setGoals(goals = 0, goalsAgainst = 0) {
    this.goals += goals
    this.goalsAgainst += goalsAgainst
    this.goalsDiff = this.goals - this.goalsAgainst
  }

  // Resetear los goles
  resetGoals() {
    this.goals = 0
    this.goalsAgainst = 0
    this.goalsDiff = 0
  }
}
