const BASE_POKEMON_URL = "https://pokeapi.co/api/v2";

const apiFetcher = async (url) => {
  // const { offset, limit } = paginationOptions;
  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw response.status;
    }
    return await response.json();
  } catch (error) {
    return { error: "Cannot retrieve Pokemons data from the server" };
  }
};
export { apiFetcher, BASE_POKEMON_URL };
