name = "Corey"
age = 25
person = {
    first_name: "Corey",
    age: age
}

fruit = [
    "banana",
    "apple",
    "pineapple"
]

friend = true

# METHODS

def print_hello
    puts "Hello World"
end

# PARAMETERS

def print_greeting(greet)
    puts greet
end

print_greeting("Hola")
print_greeting("G'Day")

# RETURNS
def add(x, y)
    x + y
end

result = add(2,4)

puts result

# IF STATEMENTS (CONTROL FLOW)
number = 12

if number > 10
    puts "you have a number higher than 10"
else
    puts "you have a number less than 10"
end

# CASE STATEMENT
case result
when 10
    puts  "it is 10"
else
    puts "everything else"
end

