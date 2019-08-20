import BirdService from "../services/BirdService.js";

// PRIVATE
let _birdService = new BirdService();


// PUBLIC
export default class BirdController {
  constructor() {
    console.log("Hello from Bird Controller")
  }
}