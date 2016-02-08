# Find the greatest product of five consecutive digits in 
# the 1000-digit number.
# 

str1 = "73167176531330624919225119674426574742355349194934"
str2 = "96983520312774506326239578318016984801869478851843"
str3 = "85861560789112949495459501737958331952853208805511"
str4 = "12540698747158523863050715693290963295227443043557"
str5 = "66896648950445244523161731856403098711121722383113"
str6 = "62229893423380308135336276614282806444486645238749"
str7 = "30358907296290491560440772390713810515859307960866"
str8 = "70172427121883998797908792274921901699720888093776"
str9 = "65727333001053367881220235421809751254540594752243"
str10 = "52584907711670556013604839586446706324415722155397"
str11	= "53697817977846174064955149290862569321978468622482"
str12 = "83972241375657056057490261407972968652414535100474"
str13 = "82166370484403199890008895243450658541227588666881"
str14 = "16427171479924442928230863465674813919123162824586"
str15 = "17866458359124566529476545682848912883142607690042"
str16 = "24219022671055626321111109370544217506941658960408"
str17 = "07198403850962455444362981230987879927244284909188"
str18 = "84580156166097919133875499200524063689912560717606"
str19 = "05886116467109405077541002256983155200055935729725"
str20 = "71636269561882670428252483600823257530420752963450"

input_str1 = str1 + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9 + str10
input_str2 = str11 + str12 + str13 + str14 + str15 + str16 + str17 + str18 + str19 + str20

bigstring = input_str1 +input_str2

#bigstring = "0420752963450"

factors = Array.new(5, 1)
maxproduct = 1
bigstring.each_char do |char|
   factors.shift
   product = (factors.push(char.to_i)).reduce(:*)
   maxproduct = product if (product > maxproduct)
   puts "#{maxproduct} :: #{product}  ==> factors: #{factors.inspect}"
end

