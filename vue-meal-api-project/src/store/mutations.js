export function setSearchedMeals(state, meals) {
  state.searchMeals = meals || [];
}

export function setSearchedByLetter(state, meals) {
  state.searchByLetter = meals || [];
}

export function setSearchedByIngredient(state, meals) {
  state.searchByIngredient = meals || [];
}
