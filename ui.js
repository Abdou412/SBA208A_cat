
export const render_facts = (facts) => {
  const list = document.getElementById("cat-facts-list");
  list.innerHTML = "";
  facts.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    list.appendChild(li);
  });
};

export const get_new_fact_Input = () => {
  return document.getElementById("new-fact").value;
};

export const clear_input = () => {
  document.getElementById("new-fact").value = "";
};