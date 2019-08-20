import Bird from "../models/Bird.js";


// PRIVATE
let _bird = new Bird("Polly");


// PUBLIC
export default class BirdService {
  constructor() {
    console.log("Hello from Bird Service")
  }

  get Bird() {
    return _bird
  }

  food() {
    _bird.foodCount++
  }

  cracker() {
    _bird.foodCount = 0
  }
}