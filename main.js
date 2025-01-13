import { fetc_hcat_facts, post_cat_fact } from "./api.js";
import { render_facts, get_new_fact_Input, clear_input } from "./ui.js";

const facts = [];

const loadFacts = async () => {
  try {
    const data = await fetc_hcat_facts();
    facts.push(data.fact);
    render_facts(facts);
  } catch (error) {
    console.error(error);
  }
};

const addFact = async () => {
  const newFact = get_new_fact_Input();
  if (newFact) {
    try {
      const addedFact = await post_cat_fact(newFact);
      facts.push(addedFact.fact);
      render_facts(facts);
      clear_input();
    } catch (error) {
      console.error(error);
    }
  }
};

document.getElementById("add-fact-button").addEventListener("click", addFact);
window.onload = loadFacts;
