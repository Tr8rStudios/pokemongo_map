import csv
file = open("code.js", "w")
with open('pokemondb.csv', 'r') as f:
  reader = csv.reader(f)
  your_list = list(reader)

print(your_list)
codelist = []
for i in range(1,len(your_list)):
    pokemonname = your_list[i][1]
    pokemonnumber = your_list[i][0]
    print(pokemonname,pokemonnumber)
    file.write( 'var ' + pokemonname + "Icon = new ol.layer.Tile({")
    file.write( "image: new ol.style.Icon({")
    file.write( "src: 'icons/"+pokemonnumber+".png'")
    file.write( "})" )
    file.write( "});" )
