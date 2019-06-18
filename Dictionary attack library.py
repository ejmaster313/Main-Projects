dica = {}

diclist = list()

compwlist = {
"123456",
"password",
"123456789",
"12345678",
"12345",
"111111",
"1234567",
"sunshine",
"qwerty",
"iloveyou",
"princess",
"admin",
"welcome",
"666666",
"abc123",
"football",
"123123",
"monkey",
"654321",
"!@#$%^&*",
"charlie",
"aa123456",
"donald",
"password1",
"qwerty123"}


##wordlist = ["hi", "hello", "bye", "hi"]
##
##for x in wordlist:
##    if x not in dica:
##        x = {x:str(hash(x))}
##        dica.update(x)
##        #.update() takes a key/value pair
##    else:
##        print(x, "is already in dictionary");

for x in compwlist:
    if x not in dica:
        x = {x:str(hash(x))}
        dica.update(x)
    else:
        print(x, "is already in dictionary");

##for x,y in compwlist:
##    if x is "hi":
##        print(y)


print(dica)
