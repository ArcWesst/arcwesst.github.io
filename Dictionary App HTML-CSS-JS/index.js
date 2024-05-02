async function search() {
  //this function fetches the definition of the word entered by user and display it
  let input = document.getElementById("searchInput").value;

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      const definition = data[0].meanings[0].definitions[0].definition;
      document.getElementById("definition").innerHTML = definition;
    } else {
      document.getElementById("definition").innerHTML = "Definition not found.";
    }
  } catch (error) {
    console.error("Error Fetching definition:", error);
    document.getElementById("definition").innerHTML =
      "Failed to fetch Definition";
  }
}
