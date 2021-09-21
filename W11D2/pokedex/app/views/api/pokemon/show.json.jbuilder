json.pokemon do 
  json.extract! @pokemon, :id, :name, :attack, :defence, :poke_type
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
  end
end