// controller

import {Hero} from './hero.js';

import {AppState} from 'appstate.js'

let heroes = [
  new Hero("name", "health", "damage", "level")
]

function longestWord(str){
  let array = str.split(" ")
  let longest = array[0]
  array.forEach(word => {
    if(word.length > longest.length){
      longest = word
    }
    
  });
}