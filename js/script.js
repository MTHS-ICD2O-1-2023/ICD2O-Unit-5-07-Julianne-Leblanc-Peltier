// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  const numberInput = parseInt(document.getElementById("number-input").value)
  let answer = 0

  for (let counter = 0; counter < numberInput; counter++) {
    answer += numberInput + 1
  }

  document.getElementById("answer").innerHTML = answer /2
}
