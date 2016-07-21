import csv
file = open("output.json", "w")
# Read in raw data from csv
with open('csv/bulbasaur.csv', 'r') as f:
  reader = csv.reader(f)
  your_list = list(reader)

print(your_list)
file.write()    
for i in range(1,len(your_list)):
    name = your_list[i][0]
    long = your_list[i][1]
    lat = your_list[i][2]
    print(name,long,lat)
    file.write(',{')
    file.write('"type": "Feature",')
    file.write('"geometry": {')
    file.write('"type": "Point"')
    file.write('"coordinates": ['+long+','+lat+',0]')
    file.write('},')
    file.write('"properties": {')
    file.write('"name": '+name)
    file.write('}')
    file.write('}')
    file.write('\n')