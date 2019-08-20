import Bird from "../models/Bird.js";


// PRIVATE
let _bird = new Bird();


// PUBLIC
export default class BirdService {
  constructor() {
    console.log("Hello from Bird Service")
  }
}