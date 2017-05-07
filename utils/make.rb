require 'json'
dict = {}

File.open('dict.txt').each do |line|
  col = line.chomp.split("\t")
  dict[col.first.delete('?')] = col.last
end

File.open('dict.js', 'w').puts 'module.exports =' + dict.to_json

# Unit
heads = 0.upto(dict.size / 10).map { |i| i*10 }.push(dict.size)
words = Hash.new { |hash, key| hash[key] = {} }
(0...heads.size - 1).each do |i|
  words[i / 10 + 1][i % 10 + 1] = dict.keys[heads[i]...heads[i+1]].map { |w| [w, dict[w]] }.to_h
end
words = {1=>{1=>words[1][1], 2=>words[1][2]}, 2=>{1=>words[1][1]}}
File.open('dict_unit.js', 'w').puts 'module.exports =' +words.to_json

# Alphabet
words = Hash.new { |hash, key| hash[key] = [] }
dict.each_key { |w| words[w[0].upcase].push w }
words.each_key { |c| words[c] = words[c].map { |w| [w, dict[w]] }.to_h }
words = {'A' => words['A'], 'B' => words['B']}
File.open('dict_alphabet.js', 'w').puts 'module.exports =' +words.to_json
